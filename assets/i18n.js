/* Language engine. Reads window.I18N_CORE (nav/footer, shared across
   every page) and window.I18N_PAGE (set by that page's own small
   <script> before this file loads), swaps text on elements tagged
   data-i18n="key", and persists the choice in localStorage. */
(function(){
  var KEY = 'hikaru-lang';

  function dict(){
    return Object.assign({}, window.I18N_CORE || {}, window.I18N_PAGE || {});
  }

  function getLang(){
    try{ return localStorage.getItem(KEY) || 'en'; }catch(e){ return 'en'; }
  }

  function applyTo(lang, root){
    var d = dict();
    Array.prototype.forEach.call(root.querySelectorAll('[data-i18n]'), function(el){
      var key = el.getAttribute('data-i18n');
      var entry = d[key];
      if (!entry) return;
      var text = lang === 'bn' ? (entry.bn || entry.en) : entry.en;
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = text;
      else el.textContent = text;
    });
    Array.prototype.forEach.call(root.querySelectorAll('[data-i18n-attr]'), function(el){
      var spec = el.getAttribute('data-i18n-attr');
      spec.split(';').forEach(function(pair){
        var parts = pair.split(':');
        var attr = parts[0], key = parts[1];
        var entry = d[key];
        if (!entry) return;
        el.setAttribute(attr, lang === 'bn' ? (entry.bn || entry.en) : entry.en);
      });
    });
  }

  function updateButtons(lang){
    Array.prototype.forEach.call(document.querySelectorAll('.js-lang-toggle'), function(btn){
      btn.textContent = lang === 'bn' ? 'EN' : 'বাং';
      btn.setAttribute('aria-label', lang === 'bn' ? 'Switch to English' : 'Switch to Bangla');
      btn.setAttribute('lang', lang === 'bn' ? 'en' : 'bn');
    });
  }

  function set(lang){
    try{ localStorage.setItem(KEY, lang); }catch(e){}
    document.documentElement.setAttribute('lang', lang === 'bn' ? 'bn' : 'en');
    applyTo(lang, document);
    updateButtons(lang);
    window.dispatchEvent(new CustomEvent('hikaru:langchange', { detail: { lang: lang } }));
  }

  function init(){
    var lang = getLang();
    document.documentElement.setAttribute('lang', lang === 'bn' ? 'bn' : 'en');
    applyTo(lang, document);
    updateButtons(lang);
    Array.prototype.forEach.call(document.querySelectorAll('.js-lang-toggle'), function(btn){
      btn.addEventListener('click', function(){ set(getLang() === 'bn' ? 'en' : 'bn'); });
    });
    window.dispatchEvent(new CustomEvent('hikaru:langchange', { detail: { lang: lang } }));
  }

  /* small helper for page scripts that generate their own text
     (filter counts, live status chips) so those stay bilingual too */
  window.hikaruLang = getLang;
  window.hikaruPick = function(en, bn){ return getLang() === 'bn' ? bn : en; };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
