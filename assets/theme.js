/* Wires the nav theme-toggle button. Pairs with theme-init.js, which
   already set data-theme before paint. */
(function(){
  var KEY = 'hikaru-theme';

  function current(){
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function updateButtons(t){
    Array.prototype.forEach.call(document.querySelectorAll('.js-theme-toggle'), function(btn){
      btn.setAttribute('aria-pressed', String(t === 'light'));
      btn.setAttribute('aria-label', t === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    });
  }

  function set(t){
    document.documentElement.setAttribute('data-theme', t);
    try{ localStorage.setItem(KEY, t); }catch(e){}
    updateButtons(t);
  }

  function init(){
    updateButtons(current());
    Array.prototype.forEach.call(document.querySelectorAll('.js-theme-toggle'), function(btn){
      btn.addEventListener('click', function(){ set(current() === 'light' ? 'dark' : 'light'); });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
