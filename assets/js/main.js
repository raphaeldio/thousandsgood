// Thousands Good — header, footer, and small interactions shared by all pages.
// Header/footer live here so menu and contact changes only need one edit.

const WA = {
  admission1: "6281265557977",
  admission2: "6285270658777",
  konsultasi: "6285296677298",
  partner: "6282360991507",
};

function waLink(number, text) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

const NAV = [
  ["index.html", "Beranda"],
  ["tentang.html", "Tentang Kami"],
  ["program.html", "Program"],
  ["prestasi.html", "Prestasi"],
  ["berita.html", "Berita"],
  ["kegiatan.html", "Kegiatan & Fasilitas"],
  ["kontak.html", "Kontak"],
];

function renderHeader() {
  const el = document.querySelector("[data-header]");
  if (!el) return;
  const current = location.pathname.split("/").pop() || "index.html";
  const links = NAV.map(
    ([href, label]) =>
      `<li><a href="${href}"${href === current ? ' aria-current="page"' : ""}>${label}</a></li>`
  ).join("");
  el.innerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="index.html" aria-label="Thousands Good Education Centre — Beranda">
          <span class="brand-mark">TG</span>
          <span class="brand-text">Thousands Good<small>EDUCATION CENTRE</small></span>
        </a>
        <button class="nav-toggle" aria-label="Buka menu" aria-expanded="false"><span></span><span></span><span></span></button>
        <ul class="nav-links">
          ${links}
          <li><a class="btn btn--gold" href="${waLink(WA.admission1, "Halo Thousands Good, saya ingin mendaftar / konsultasi program.")}" target="_blank" rel="noopener">Daftar Sekarang</a></li>
        </ul>
      </div>
    </header>`;

  const toggle = el.querySelector(".nav-toggle");
  const list = el.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function renderFooter() {
  const el = document.querySelector("[data-footer]");
  if (!el) return;
  const year = new Date().getFullYear();
  el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="brand" href="index.html" style="color:#fff">
              <span class="brand-mark">TG</span>
              <span class="brand-text">Thousands Good<small style="color:#9fb0d4">EDUCATION CENTRE</small></span>
            </a>
            <p style="margin-top:14px">Kursus Komputer, English, Robotics &amp; Skill Up di Lubuk Pakam sejak 2011. <i>Leading Your Future.</i></p>
            <div class="socials">
              <a href="https://www.instagram.com/thousands_good" target="_blank" rel="noopener">Instagram</a>
              <a href="https://www.tiktok.com/@thousandsgood" target="_blank" rel="noopener">TikTok</a>
              <a href="https://www.youtube.com/@thousandsgood" target="_blank" rel="noopener">YouTube</a>
              <a href="https://web.facebook.com/thousandsgoodstore" target="_blank" rel="noopener">Facebook</a>
            </div>
          </div>
          <div>
            <h4>Jelajahi</h4>
            <ul>${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h4>Program</h4>
            <ul>
              <li><a href="program.html#computer">Computer &amp; AI</a></li>
              <li><a href="program.html#english">English &amp; IELTS</a></li>
              <li><a href="program.html#robotics">Robotics</a></li>
              <li><a href="program.html#skillup">Skill Up</a></li>
              <li><a href="program.html#sertifikasi">Sertifikasi</a></li>
            </ul>
          </div>
          <div>
            <h4>Kunjungi Kami</h4>
            <p>Jl. Bakaran Batu No. 278 (Simpang Jl. Perbatasan), Lubuk Pakam, Deli Serdang, Sumatera Utara 20511</p>
            <p>WA Admission: <a href="https://wa.me/${WA.admission1}">0812-6555-7977</a><br>
               <a href="https://wa.me/${WA.admission2}">0852-7065-8777</a></p>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${year} Thousands Good Education Centre. All rights reserved.</span>
          <span>Educare · Beyond Education, Beyond Limits</span>
        </div>
      </div>
    </footer>
    <a class="wa-float" href="${waLink(WA.admission1, "Halo Thousands Good, saya ingin bertanya tentang program.")}" target="_blank" rel="noopener" aria-label="Chat WhatsApp">💬 Chat WhatsApp</a>`;
}

// Year filter on the achievements page
function initYearFilter() {
  const chips = document.querySelectorAll("[data-year-filter]");
  if (!chips.length) return;
  const blocks = document.querySelectorAll("[data-year]");
  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      const year = chip.dataset.yearFilter;
      chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      blocks.forEach((b) => (b.hidden = year !== "all" && b.dataset.year !== year));
    })
  );
}

// Fill any [data-wa] link with a WhatsApp URL and a prefilled message
function initWaLinks() {
  document.querySelectorAll("[data-wa]").forEach((a) => {
    const number = WA[a.dataset.wa] || WA.admission1;
    a.href = waLink(number, a.dataset.waText || "Halo Thousands Good, saya ingin bertanya.");
    a.target = "_blank";
    a.rel = "noopener";
  });
}

renderHeader();
renderFooter();
initYearFilter();
initWaLinks();
