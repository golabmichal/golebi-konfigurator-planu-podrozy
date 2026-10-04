/* Gołębie Latają: zgoda na cookies partnera (DW21). Plik generowany przez strony:generuj. */
(function () {
  var K = 'gl-zgoda', DRIVE = "https://emrldtp.com/NTgxMDk5.js?t=581099", T = {"tekst":"Klimat, ceny lotów i długie weekendy są u gołębi za darmo, bo utrzymują je partnerzy. Zgoda na ich cookies pozwala nam dalej tak działać, a Ty nic nie dopłacasz. Bez zgody wszystko działa tak samo.","tak":"Jasne, zgoda","nie":"Nie, dziękuję","wiecej":"Kto i po co"};
  function laduj() {
    if (!DRIVE || window.__glDrive) return;
    window.__glDrive = 1;
    var s = document.createElement('script');
    s.async = 1; s.setAttribute('data-cmp-ab', '2'); s.src = DRIVE;
    document.head.appendChild(s);
  }
  function czytaj() { try { return localStorage.getItem(K); } catch (e) { return null; } }
  function zapisz(v) { try { localStorage.setItem(K, v); } catch (e) {} }
  var pasek = null;
  function pokaz() {
    if (pasek) { pasek.hidden = false; return; }
    var st = document.createElement('style');
    st.textContent = '.gl-zgoda{position:fixed;left:12px;right:12px;bottom:12px;max-width:760px;margin:0 auto;background:#FDFBF5;color:#23262C;border:2px solid #1E3A6D;border-radius:12px;padding:12px 16px;box-shadow:0 4px 20px rgba(0,0,0,.18);z-index:2147483000;font:15px/1.5 "IBM Plex Sans",system-ui,sans-serif}.gl-zgoda p{margin:0 0 8px}.gl-zgoda button{font:inherit;font-weight:600;border-radius:8px;padding:8px 14px;margin:0 8px 0 0;cursor:pointer;border:2px solid #1E3A6D;background:#FDFBF5;color:#1E3A6D}.gl-zgoda button.tak{background:#C8371F;border-color:#C8371F;color:#FDFBF5}.gl-zgoda a{color:#1E3A6D}';
    document.head.appendChild(st);
    pasek = document.createElement('div');
    pasek.className = 'gl-zgoda'; pasek.id = 'zgoda'; pasek.setAttribute('role', 'region'); pasek.setAttribute('aria-label', 'Cookies');
    var p = document.createElement('p'); p.textContent = T.tekst + ' ';
    var a = document.createElement('a'); a.href = '/polityka-prywatnosci.html'; a.textContent = T.wiecej; p.appendChild(a);
    var tak = document.createElement('button'); tak.type = 'button'; tak.className = 'tak'; tak.textContent = T.tak;
    var nie = document.createElement('button'); nie.type = 'button'; nie.textContent = T.nie;
    tak.onclick = function () { zapisz('tak'); pasek.hidden = true; laduj(); };
    nie.onclick = function () { zapisz('nie'); pasek.hidden = true; };
    pasek.appendChild(p); pasek.appendChild(tak); pasek.appendChild(nie);
    document.body.appendChild(pasek);
  }
  function start() {
    var z = czytaj();
    if (z === 'tak') laduj(); else if (z !== 'nie') pokaz();
    document.addEventListener('click', function (e) {
      var el = e.target && e.target.closest ? e.target.closest('[data-cookies]') : null;
      if (el) { e.preventDefault(); pokaz(); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
