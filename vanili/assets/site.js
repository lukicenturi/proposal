/* LuxVanilla site script: nav toggle, header scroll state, footer year, stage index,
   reveal-on-scroll, and the shared Web3Forms form handler. */
const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';
const LV_EMAIL = 'hello@luxvanilla.com';
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

(function () {
  'use strict';
  const doc = document.documentElement;

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });

  /* ---------- Mobile nav ---------- */
  const toggle = document.querySelector('[data-nav-toggle]');
  const panel = toggle && document.getElementById(toggle.getAttribute('aria-controls'));
  if (toggle && panel) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      panel.hidden = !open;
      document.body.classList.toggle('menu-open', open);
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    panel.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', (mq) => { if (mq.matches) setOpen(false); });
  }

  /* ---------- Home: the header floats over the hero, turns solid once the page scrolls ---------- */
  const header = document.querySelector('.site-header.is-overlay');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Process stage index: mark the stage in view ---------- */
  const stageLinks = document.querySelectorAll('[data-stage-link]');
  const stages = document.querySelectorAll('[data-stage]');
  if (stageLinks.length && stages.length && 'IntersectionObserver' in window) {
    const mark = (id) => {
      stageLinks.forEach((a) => {
        const on = a.getAttribute('href') === '#' + id;
        if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        if (on && a.closest('.stage-strip')) {
          const strip = a.closest('.stage-strip');
          strip.scrollTo({ left: a.offsetLeft - 12, behavior: 'smooth' });
        }
      });
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) mark(en.target.id); });
    }, { rootMargin: '-35% 0px -60% 0px' });
    stages.forEach((s) => io.observe(s));
  }

  /* ---------- Reveal on scroll ----------
     Elements with .reveal fade and rise 16px as they enter the viewport. Inside a [data-reveal-group]
     the reveals are staggered by 80 ms each. The head script adds .js-reveal; without IntersectionObserver
     or with reduced motion everything is shown at once. */
  const reveals = document.querySelectorAll('.reveal');
  document.querySelectorAll('[data-reveal-group]').forEach((g) => {
    g.querySelectorAll('.reveal').forEach((el, i) => el.style.setProperty('--d', Math.min(i, 6) * 80 + 'ms'));
  });
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reveals.length || reduce || !('IntersectionObserver' in window)) {
    doc.classList.add('reveal-done');
  } else {
    window.__lvReveal = true;
    doc.classList.add('js-reveal');
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); ro.unobserve(en.target); }
      });
    }, { rootMargin: '0px', threshold: 0 });
    reveals.forEach((el) => ro.observe(el));
  }

  /* ---------- Forms ----------
     Markup contract (used by contact.html and quote.html):
       <form data-lv-form data-subject="Website enquiry" data-prefill="product,type" novalidate>
         <input type="hidden" name="subject" value="...">          (Web3Forms email subject)
         <input type="checkbox" name="botcheck" class="honey" tabindex="-1" autocomplete="off">
         <div data-form-fields> ...fields... <p class="form-status" data-form-status role="status" aria-live="polite"></p>
           <button type="submit" class="btn btn-gold" data-loading-text="Sending...">Send</button></div>
         <div class="form-done" data-form-done hidden tabindex="-1">
           <div data-done-sent>...check mark and thanks...</div>
           <div data-done-mailto hidden>...your email app opened...</div>
         </div>
       </form>
     Each field: <input id="x" name="x" aria-describedby="x-err"> plus <p class="field-error" id="x-err"></p>.
     Labels for the email body come from data-label, else the <label for>, else the name. */
  const forms = document.querySelectorAll('form[data-lv-form]');
  forms.forEach(setupForm);

  function labelFor(form, el) {
    if (el.dataset.label) return el.dataset.label;
    if (el.type === 'checkbox' || el.type === 'radio') {
      const group = el.closest('fieldset');
      const legend = group && group.querySelector('legend');
      if (legend) return clean(legend.textContent);
    }
    const lab = el.id && form.querySelector('label[for="' + el.id + '"]');
    return lab ? clean(lab.textContent) : el.name;
  }
  function clean(s) { return s.replace(/\*/g, '').replace(/\s+/g, ' ').trim(); }

  function collect(form) {
    const data = {}; const order = []; const labels = {};
    Array.from(form.elements).forEach((el) => {
      if (!el.name || el.disabled || el.type === 'submit' || el.type === 'button') return;
      if (el.name === 'botcheck' || el.name === 'access_key') return;
      if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) return;
      const lab = (el.type === 'checkbox' || el.type === 'radio') && el.closest('label');
      let v = el.tagName === 'SELECT' && el.selectedIndex >= 0 && el.value
        ? el.options[el.selectedIndex].text : (lab ? clean(lab.textContent) : el.value);
      v = (v || '').trim();
      if (!v) return;
      if (!(el.name in data)) { order.push(el.name); labels[el.name] = labelFor(form, el); data[el.name] = v; }
      else data[el.name] += ', ' + v;
    });
    return { data, order, labels };
  }

  function buildMailto(form, c) {
    const subject = c.data.subject || form.dataset.subject || 'Website enquiry';
    const lines = c.order.filter((k) => k !== 'subject').map((k) => c.labels[k] + ': ' + c.data[k]);
    const body = lines.join('\n') + '\n\nSent from the LuxVanilla website form.';
    return 'mailto:' + LV_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  function setError(el, msg) {
    const id = el.getAttribute('aria-describedby');
    const box = id && document.getElementById(id.split(' ')[0]);
    if (msg) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
    if (box) box.textContent = msg || '';
  }

  function messageFor(el) {
    const name = labelFor(el.form, el);
    if (el.validity.valueMissing) {
      if (el.type === 'checkbox' || el.type === 'radio') return 'Choose an option for ' + name.toLowerCase() + '.';
      if (el.tagName === 'SELECT') return 'Choose a ' + name.toLowerCase() + '.';
      return 'Enter ' + name.toLowerCase() + '.';
    }
    if (el.validity.typeMismatch && el.type === 'email') return 'Enter an email address like name@company.com.';
    if (el.validity.rangeUnderflow || el.validity.rangeOverflow || el.validity.badInput) return 'Enter a number for ' + name.toLowerCase() + '.';
    return el.validationMessage || 'Check ' + name.toLowerCase() + '.';
  }

  function validate(form) {
    let first = null;
    Array.from(form.elements).forEach((el) => {
      if (!el.willValidate || el.type === 'hidden' || el.name === 'botcheck') return;
      const ok = el.checkValidity();
      setError(el, ok ? '' : messageFor(el));
      if (!ok && !first) first = el;
    });
    return first;
  }

  function prefill(form) {
    const keys = (form.dataset.prefill || '').split(',').map((s) => s.trim()).filter(Boolean);
    if (!keys.length) return;
    const params = new URLSearchParams(window.location.search);
    keys.forEach((key) => {
      const v = params.get(key);
      if (!v) return;
      const els = form.querySelectorAll('[name="' + key + '"]');
      els.forEach((el) => {
        if (el.type === 'radio' || el.type === 'checkbox') { if (el.value === v) { el.checked = true; el.dispatchEvent(new Event('change', { bubbles: true })); } }
        else if (el.tagName === 'SELECT') { if (Array.from(el.options).some((o) => o.value === v)) { el.value = v; el.dispatchEvent(new Event('change', { bubbles: true })); } }
        else el.value = v;
      });
    });
  }

  function showDone(form, kind) {
    const fields = form.querySelector('[data-form-fields]');
    const done = form.querySelector('[data-form-done]');
    if (!done) return;
    const sent = done.querySelector('[data-done-sent]');
    const mail = done.querySelector('[data-done-mailto]');
    if (sent) sent.hidden = kind !== 'sent';
    if (mail) mail.hidden = kind !== 'mailto';
    if (fields) fields.hidden = true;
    done.hidden = false;
    done.focus({ preventScroll: true });
    done.scrollIntoView({ block: 'start', behavior: 'smooth' });
    form.dataset.state = kind;
  }

  function setupForm(form) {
    prefill(form);
    const status = form.querySelector('[data-form-status]');
    const btn = form.querySelector('button[type="submit"]');
    /* Errors get the sprite's close glyph (inherits the alert color) so the state is not carried by color alone. */
    const say = (kind, html) => {
      if (!status) return;
      status.dataset.kind = kind || '';
      status.innerHTML = kind === 'error' && html
        ? '<svg class="icon status-icon" aria-hidden="true"><use href="#icon-close"/></svg><span>' + html + '</span>'
        : (html || '');
    };
    /* reset() fires no change event and keeps hidden inputs as last set, so re-announce the checked radios
       and the selects: page scripts (the quote form's subject, button label, hint and the "Other" country
       field) then follow the reset values. */
    const resetForm = () => {
      form.reset();
      form.querySelectorAll('input[type="radio"]:checked, select').forEach((r) => r.dispatchEvent(new Event('change', { bubbles: true })));
    };

    form.addEventListener('input', (e) => { if (e.target.getAttribute('aria-invalid') === 'true' && e.target.checkValidity()) setError(e.target, ''); });
    form.addEventListener('change', (e) => { if (e.target.getAttribute('aria-invalid') === 'true' && e.target.checkValidity()) setError(e.target, ''); });

    form.querySelectorAll('[data-form-again]').forEach((b) => b.addEventListener('click', () => {
      const fields = form.querySelector('[data-form-fields]');
      const done = form.querySelector('[data-form-done]');
      resetForm();
      if (done) done.hidden = true;
      if (fields) fields.hidden = false;
      delete form.dataset.state;
      say('', '');
    }));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      say('', '');
      const bot = form.querySelector('[name="botcheck"]');
      if (bot && bot.checked) { showDone(form, 'sent'); return; }
      const bad = validate(form);
      if (bad) {
        say('error', 'Some required fields are missing or incomplete. Each one is marked below the field.');
        bad.focus();
        return;
      }
      const c = collect(form);

      if (!WEB3FORMS_KEY || WEB3FORMS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        const url = buildMailto(form, c);
        window.__LUXVANILLA_LAST_MAILTO = url;
        if (window.__LUXVANILLA_TEST) console.log('[LuxVanilla mailto]', url);
        else window.location.href = url;
        showDone(form, 'mailto');
        return;
      }

      const btnHTML = btn ? btn.innerHTML : '';
      if (btn) { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); if (btn.dataset.loadingText) btn.textContent = btn.dataset.loadingText; }
      /* Web3Forms keeps name, email and subject as special fields; everything else is sent under its visible label
         so the email reads like the form. */
      const payload = { access_key: WEB3FORMS_KEY, from_name: 'LuxVanilla website', botcheck: false };
      c.order.forEach((k) => {
        const special = ['subject', 'email', 'name', 'replyto'].indexOf(k) !== -1;
        payload[special ? k : c.labels[k]] = c.data[k];
      });
      try {
        const res = await fetch(WEB3FORMS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });
        let json = {};
        try { json = await res.json(); } catch (_) { /* non-JSON reply */ }
        if (res.ok && json.success !== false) { if (btn) btn.innerHTML = btnHTML; resetForm(); showDone(form, 'sent'); }
        else throw new Error(json.message || ('the mail service answered ' + res.status));
      } catch (err) {
        const why = err && err.message && !/fetch/i.test(err.message) ? ' (' + escapeHTML(err.message) + ')' : ' (no connection to the mail service)';
        say('error', 'Your request was not sent' + why + '. Your entries are still here: try again, or write to <a href="mailto:' + LV_EMAIL + '">' + LV_EMAIL + '</a>.');
      } finally {
        if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); if (form.dataset.state !== 'sent') btn.innerHTML = btnHTML; }
      }
    });
  }

  function escapeHTML(s) { return String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch])); }
})();
