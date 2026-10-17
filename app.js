(() => {
  const STORE_LANG = "sip-lang";
  const STORE_CHECK = "sip-checklist";
  const $ = (id) => document.getElementById(id);

  const storage = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {}
    }
  };

  const escape = (text) =>
    String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const detectLang = () => {
    const saved = storage.get(STORE_LANG, null);
    if (saved && CONTENT[saved]) return saved;
    return (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";
  };

  let lang = detectLang();
  let checked = storage.get(STORE_CHECK, {});

  const allItemIds = () =>
    CONTENT[lang].checklist.groups.flatMap((group) => Object.keys(group.items));

  const renderNav = (t) => {
    $("nav").innerHTML = Object.entries(t.nav)
      .map(([id, label]) => `<a href="#${id}">${escape(label)}</a>`)
      .join("");
  };

  const renderHero = (t) => {
    $("hero-badge").textContent = t.hero.badge;
    $("hero-title").textContent = t.hero.title;
    $("hero-lead").textContent = t.hero.lead;
    $("hero-cta").textContent = t.hero.cta;
    $("hero-cta2").textContent = t.hero.cta2;
  };

  const renderCard = (card) => `
    <article class="card">
      <span class="card-tag">${escape(card.tag)}</span>
      <h3>${escape(card.title)}</h3>
      <ul>${card.points.map((p) => `<li>${escape(p)}</li>`).join("")}</ul>
      ${card.link ? `<a class="card-link" href="${escape(card.link.url)}" target="_blank" rel="noopener">${escape(card.link.label)} →</a>` : ""}
    </article>`;

  const renderSections = (t) => {
    $("sections").innerHTML = t.sections
      .map(
        (section) => `
        <section class="section" id="${section.id}">
          <div class="wrap">
            <div class="section-head">
              <span class="section-num">${section.num}</span>
              <h2>${escape(section.title)}</h2>
              <p>${escape(section.intro)}</p>
            </div>
            <div class="cards">${section.cards.map(renderCard).join("")}</div>
            ${section.note ? `<div class="note">${escape(section.note)}</div>` : ""}
          </div>
        </section>`
      )
      .join("");
  };

  const renderChecklist = (t) => {
    $("check-title").textContent = t.checklist.title;
    $("check-intro").textContent = t.checklist.intro;
    $("check-reset").textContent = t.checklist.reset;
    $("check-groups").innerHTML = t.checklist.groups
      .map(
        (group) => `
        <div class="check-group">
          <h3>${escape(group.title)}</h3>
          ${Object.entries(group.items)
            .map(
              ([id, text]) => `
              <label class="check-item${checked[id] ? " done" : ""}">
                <input type="checkbox" data-id="${id}"${checked[id] ? " checked" : ""}>
                <span>${escape(text)}</span>
              </label>`
            )
            .join("")}
        </div>`
      )
      .join("");
  };

  const updateProgress = () => {
    const t = CONTENT[lang];
    const ids = allItemIds();
    const done = ids.filter((id) => checked[id]).length;
    const total = ids.length;
    $("progress-fill").style.width = `${total ? (done / total) * 100 : 0}%`;
    $("progress-label").textContent = t.checklist.label(done, total);
    $("hero-progress").textContent = t.hero.progress(done, total);
  };

  const renderSos = (t) => {
    $("sos-title").textContent = t.sos.title;
    $("sos-intro").textContent = t.sos.intro;
    $("sos-grid").innerHTML = t.sos.items
      .map(
        (item) => `
        <a class="sos-item" href="tel:${item.num.replace(/\s/g, "")}">
          <div class="sos-num">${escape(item.num)}</div>
          <div class="sos-label">${escape(item.label)}</div>
        </a>`
      )
      .join("");
  };

  const renderCities = () => {
    const ui = CITY_UI[lang];
    $("cities-title").textContent = ui.sectionTitle;
    $("cities-intro").textContent = ui.sectionIntro;
    $("city-grid").innerHTML = CITIES.map(
      (city) => `
        <a class="city-card" href="cities/${city.slug}/">
          <span class="card-tag">${escape(city.region[lang])}</span>
          <h3>${escape(city.name[lang])}</h3>
          <p>${escape(city.about[lang])}</p>
          <span class="card-link">${escape(ui.open)} →</span>
        </a>`
    ).join("");
  };

  const renderFooter = (t) => {
    $("footer-note").textContent = t.footer.note;
    $("footer-updated").textContent = t.footer.updated;
  };

  const render = () => {
    const t = CONTENT[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang);
    });
    renderNav(t);
    renderHero(t);
    renderSections(t);
    renderCities();
    renderChecklist(t);
    renderSos(t);
    renderFooter(t);
    updateProgress();
  };

  document.querySelectorAll(".lang button").forEach((btn) =>
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;
      storage.set(STORE_LANG, lang);
      render();
    })
  );

  $("check-groups").addEventListener("change", (event) => {
    const box = event.target;
    if (!box.matches("input[type=checkbox]")) return;
    checked[box.dataset.id] = box.checked;
    box.closest(".check-item").classList.toggle("done", box.checked);
    storage.set(STORE_CHECK, checked);
    updateProgress();
  });

  $("check-reset").addEventListener("click", () => {
    checked = {};
    storage.set(STORE_CHECK, checked);
    renderChecklist(CONTENT[lang]);
    updateProgress();
  });

  render();
})();
