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
    ['gelin-saci.html', 'Gelin Saçı']
  ];

  /* Açık sayfayı bul (örn. "mikro-kaynak") */
  var page = (location.pathname.split('/').pop() || '').replace(/\.html$/, '');
  function here(href) {
    return href.replace(/\.html$/, '') === page;
  }
  function cls(href) {
    return here(href) ? ' class="active" aria-current="page"' : '';
  }

  var inServices = SERVICES.some(function (s) { return here(s[0]); });

  var serviceLinks = SERVICES.map(function (s) {
    return '<a href="' + s[0] + '"' + cls(s[0]) + '>' + s[1] + '</a>';
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
        '<a href="mikro-kaynak.html"' + cls('mikro-kaynak.html') + '>Mikro Kaynak</a>' +
        '<a href="markalar.html"' + cls('markalar.html') + '>Markalar</a>' +
        '<a href="/#iletisim">İletişim</a>' +
        '<a href="randevu.html"' + cls('randevu.html') + '>Randevu</a>' +
      '</div>' +
      '<button aria-expanded="false" aria-label="Menüyü aç" class="menu-btn" type="button">☰</button>' +
      '<a class="btn gold" href="randevu.html">Randevu</a>' +
    '</div>' +
    '<div class="mobile-menu">' +
      '<a href="/">Anasayfa</a>' +
      '<button class="m-toggle' + (inServices ? ' active' : '') + '" type="button" aria-expanded="false">Hizmetler</button>' +
      '<div class="m-sub">' + serviceLinks + '</div>' +
      '<a href="/#galeri">Galeri</a>' +
      '<a href="mikro-kaynak.html"' + cls('mikro-kaynak.html') + '>Mikro Kaynak</a>' +
      '<a href="markalar.html"' + cls('markalar.html') + '>Markalar</a>' +
      '<a href="/#iletisim">İletişim</a>' +
      '<a href="randevu.html"' + cls('randevu.html') + '>Randevu</a>' +
    '</div>';

  /* ---- FOOTER ---- */
  var footHTML =
    '<div class="wrap foot">' +
      '<div>© Ares Kuaför · Kırşehir</div>' +
      '<div>' +
        '<a href="/">Ana Sayfa</a> · ' +
        '<a href="hizmetler.html">Hizmetler</a> · ' +
        '<a href="kadin-kuaforu.html">Kadın Kuaförü</a> · ' +
        '<a href="ombre.html">Ombre</a> · ' +
        '<a href="perma.html">Perma</a> · ' +
        '<a href="gelin-saci.html">Gelin Saçı</a> · ' +
        '<a href="mikro-kaynak.html">Mikro Kaynak</a> · ' +
        '<a href="markalar.html">Markalar</a> · ' +
        '<a href="randevu.html">Randevu</a>' +
      '</div>' +
    '</div>';

  function init() {
    var nav = document.getElementById('site-nav');
    var foot = document.getElementById('site-footer');
    if (nav) nav.innerHTML = navHTML;
    if (foot) foot.innerHTML = footHTML;
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
