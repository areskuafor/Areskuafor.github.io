/* ===== ORTAK MENÜ + FOOTER =====
   Menüye yeni bir sayfa/hizmet eklemek için sadece bu dosyayı düzenleyin.
   Sayfalarda şu iki boş alan bulunmalıdır:
   <nav id="site-nav"></nav>   ve   <footer id="site-footer"></footer>
*/
(function () {
  /* Hizmetler alt menüsü: [dosya, görünen ad] */
  var SERVICES = [
    ['hizmetler.html', 'Tüm Hizmetler'],
    ['kadin-kuaforu.html', 'Kadın Kuaförü'],
    ['ombre.html', 'Ombre &amp; Balyaj'],
    ['perma.html', 'Perma'],
    ['mikro-kaynak.html', 'Mikro Kaynak'],
    ['gelin-saci.html', 'Gelin Saçı'],
    ['keratinbakim.html', 'Keratin Bakım']
  ];

  /* Dosya adını her zaman kökten başlayan adrese çevirir: perma.html -> /perma.html */
  function p(href) {
    return '/' + href.replace(/^\//, '');
  }

  /* Açık sayfayı bul (örn. "mikro-kaynak") */
  var page = (location.pathname.split('/').pop() || '').replace(/\.html$/, '');
  function here(href) {
    return href.replace(/^\//, '').replace(/\.html$/, '') === page;
  }
  function cls(href) {
    return here(href) ? ' class="active" aria-current="page"' : '';
  }

  var inServices = SERVICES.some(function (s) { return here(s[0]); });

  var serviceLinks = SERVICES.map(function (s) {
    return '<a href="' + p(s[0]) + '"' + cls(s[0]) + '>' + s[1] + '</a>';
  }).join('');

  /* ---- ÜST MENÜ ---- */
  var navHTML =
    '<div class="wrap navin">' +
      '<a class="logo" href="/"><img alt="Ares Kuaför Kırşehir logosu" src="/logo.png" width="500" height="500"></a>' +
      '<div class="navlinks">' +
        '<a href="/">Anasayfa</a>' +
        '<div class="dropdown">' +
          '<button class="dropdown-toggle' + (inServices ? ' active' : '') + '" type="button" aria-expanded="false" aria-haspopup="true">Hizmetler</button>' +
          '<div class="dropdown-menu">' + serviceLinks + '</div>' +
        '</div>' +
        '<a href="/#galeri">Galeri</a>' +
        '<a href="' + p('mikro-kaynak.html') + '"' + cls('mikro-kaynak.html') + '>Mikro Kaynak</a>' +
        '<a href="' + p('markalar.html') + '"' + cls('markalar.html') + '>Markalar</a>' +
        '<a href="/#iletisim">İletişim</a>' +
        '<a href="' + p('randevu.html') + '"' + cls('randevu.html') + '>Randevu</a>' +
      '</div>' +
      '<button aria-expanded="false" aria-label="Menüyü aç" class="menu-btn" type="button">☰</button>' +
      '<a class="btn gold" href="' + p('randevu.html') + '">Randevu</a>' +
    '</div>' +
    '<div class="mobile-menu">' +
      '<a href="/">Anasayfa</a>' +
      '<button class="m-toggle' + (inServices ? ' active' : '') + '" type="button" aria-expanded="false">Hizmetler</button>' +
      '<div class="m-sub">' + serviceLinks + '</div>' +
      '<a href="/#galeri">Galeri</a>' +
      '<a href="' + p('mikro-kaynak.html') + '"' + cls('mikro-kaynak.html') + '>Mikro Kaynak</a>' +
      '<a href="' + p('markalar.html') + '"' + cls('markalar.html') + '>Markalar</a>' +
      '<a href="/#iletisim">İletişim</a>' +
      '<a href="' + p('randevu.html') + '"' + cls('randevu.html') + '>Randevu</a>' +
    '</div>';

  /* ---- FOOTER ---- */
  var footHTML =
    '<div class="wrap foot">' +
      '<div>© Ares Kuaför · Kırşehir</div>' +
      '<div>' +
        '<a href="/">Ana Sayfa</a> · ' +
        '<a href="' + p('hizmetler.html') + '">Hizmetler</a> · ' +
        '<a href="' + p('kadin-kuaforu.html') + '">Kadın Kuaförü</a> · ' +
        '<a href="' + p('ombre.html') + '">Ombre</a> · ' +
        '<a href="' + p('perma.html') + '">Perma</a> · ' +
        '<a href="' + p('gelin-saci.html') + '">Gelin Saçı</a> · ' +
        '<a href="' + p('mikro-kaynak.html') + '">Mikro Kaynak</a> · ' +
        '<a href="' + p('keratinbakim.html') + '">Keratin Bakım</a> · ' +
        '<a href="' + p('markalar.html') + '">Markalar</a> · ' +
        '<a href="' + p('randevu.html') + '">Randevu</a>' +
      '</div>' +
    '</div>';

  /* ---- MOBİL ALT SABİT HIZLI EYLEM ÇUBUĞU (tüm sayfalarda aynı) ----
     Sayfalardaki eski/farklı çubuklar silinir, bu çubuk eklenir.
     Değiştirmek için sadece burayı düzenleyin. */
  var BAR_CSS =
    '.quick-action-bar{display:none}' +
    '@media(max-width:768px){' +
      'body{padding-bottom:70px}' +
      '.float{display:none!important}' +
      '.quick-action-bar{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:999;background:rgba(11,11,13,.95);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-top:1px solid #28282c;padding:8px 12px;justify-content:space-around;align-items:center;box-shadow:0 -5px 25px rgba(0,0,0,.5)}' +
      '.quick-action-bar a{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:11px;font-weight:600;color:#b8b4ae;flex:1;text-align:center}' +
      '.quick-action-bar svg{width:20px;height:20px}' +
      '.quick-action-bar .qa-wa{color:#25D366}' +
      '.quick-action-bar .action-btn-highlight{background:#d8b36a;color:#111!important;padding:8px 12px;border-radius:12px;font-weight:800}' +
    '}';

  var barHTML =
    '<a href="tel:+905531293338">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
      'Ara</a>' +
    '<a class="qa-wa" href="https://wa.me/905531293338" rel="noopener" target="_blank">' +
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>' +
      'WhatsApp</a>' +
    '<a href="https://maps.app.goo.gl/7nh9N5rrybAvzD2x8?g_st=ic" rel="noopener" target="_blank">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
      'Yol Tarifi</a>' +
    '<a class="action-btn-highlight" href="/randevu.html">Randevu</a>';

  function addBar() {
    document.querySelectorAll('.quick-action-bar').forEach(function (el) { el.remove(); });
    if (!document.getElementById('qa-style')) {
      var st = document.createElement('style');
      st.id = 'qa-style';
      st.textContent = BAR_CSS;
      document.head.appendChild(st);
    }
    var bar = document.createElement('div');
    bar.className = 'quick-action-bar';
    bar.innerHTML = barHTML;
    document.body.appendChild(bar);
  }

  function init() {
    var nav = document.getElementById('site-nav');
    var foot = document.getElementById('site-footer');
    if (nav) nav.innerHTML = navHTML;
    if (foot) foot.innerHTML = footHTML;
    addBar();
    if (!nav) return;

    /* Masaüstü: Hizmetler açılır menü */
    var dd = nav.querySelector('.dropdown');
    if (dd) {
      var t = dd.querySelector('.dropdown-toggle');
      t.addEventListener('click', function (e) {
        e.stopPropagation();
        var o = dd.classList.toggle('open');
        t.setAttribute('aria-expanded', o ? 'true' : 'false');
      });
      document.addEventListener('click', function (e) {
        if (!dd.contains(e.target)) {
          dd.classList.remove('open');
          t.setAttribute('aria-expanded', 'false');
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          dd.classList.remove('open');
          t.setAttribute('aria-expanded', 'false');
        }
      });
    }

    /* Mobil: ana menü düğmesi + Hizmetler alt menüsü */
    var b = nav.querySelector('.menu-btn');
    var m = nav.querySelector('.mobile-menu');
    var mt = nav.querySelector('.m-toggle');
    var ms = nav.querySelector('.m-sub');

    if (b && m) {
      b.addEventListener('click', function () {
        var open = m.classList.toggle('open');
        b.setAttribute('aria-expanded', open ? 'true' : 'false');
        b.textContent = open ? '✕' : '☰';
      });
      m.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          m.classList.remove('open');
          b.setAttribute('aria-expanded', 'false');
          b.textContent = '☰';
        });
      });
    }
    if (mt && ms) {
      mt.addEventListener('click', function () {
        var o = ms.classList.toggle('open');
        mt.setAttribute('aria-expanded', o ? 'true' : 'false');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
