(() => {
  const STORE_LANG = "sip-lang";
  const ROOT = "../../";
  const $ = (id) => document.getElementById(id);
  const slug = document.body.dataset.city;
  const city = CITIES.find((c) => c.slug === slug);

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

  const card = (tag, title, body, link) => `
    <article class="card">
      <span class="card-tag">${escape(tag)}</span>
      <h3>${escape(title)}</h3>
      ${body}
      ${link ? `<a class="card-link" href="${escape(link.url)}" target="_blank" rel="noopener">${escape(link.label)} →</a>` : ""}
    </article>`;

  const list = (items, cls = "") =>
    `<ul${cls ? ` class="${cls}"` : ""}>${items.map((i) => `<li>${escape(i)}</li>`).join("")}</ul>`;

  const render = () => {
    const t = CONTENT[lang];
    const ui = CITY_UI[lang];
    document.documentElement.lang = lang;
    document.title = `${city.name[lang]} · Start in Poland`;

    document.querySelectorAll(".lang button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang);
    });

    $("nav").innerHTML = Object.entries(t.nav)
      .map(([id, label]) => `<a href="${ROOT}#${id}">${escape(label)}</a>`)
      .join("");

    $("city").innerHTML = `
      <section class="city-hero">
        <div class="wrap">
          <a class="back-link" href="${ROOT}#cities">${escape(ui.back)}</a>
          <span class="badge">${escape(ui.region)}: ${escape(city.region[lang])}</span>
          <h1>${escape(city.name[lang])}</h1>
          <p class="lead">${escape(city.about[lang])}</p>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="cards">
            ${card(ui.office, city.office.name, `<ul><li>${escape(ui.officeText)}</li></ul>`, { label: ui.officeLink, url: city.office.url })}
            ${card(ui.unis, city.local, list(city.unis, "uni-list"))}
            ${card(ui.transport, city.transport.name, `<ul><li>${escape(ui.transportDiscount)}</li></ul>`, { label: ui.transportLink, url: city.transport.url })}
            ${card(ui.health, "NFZ", `<ul><li>${escape(ui.healthText)}</li></ul>`, { label: ui.healthLink, url: city.nfz })}
            ${card(ui.tips, city.name[lang], list(city.tips[lang]))}
            ${card(ui.districts, city.local, `<div class="chips chips-static">${city.districts.map((d) => `<span class="chip">${escape(d)}</span>`).join("")}</div>`)}
            ${card(ui.arrive, city.local, `<ul class="uni-list"><li><strong>${escape(ui.airport)}:</strong> ${escape(city.arrive.airport)}</li><li><strong>${escape(ui.station)}:</strong> ${escape(city.arrive.station)}</li></ul>`)}
          </div>
        </div>
      </section>

      <section class="section" id="events">
        <div class="wrap">
          <div class="section-head">
            <h2>${escape(ui.events)}</h2>
            <p>${escape(ui.eventsIntro)}</p>
          </div>
          <div class="events">
            ${city.events
              .map(
                (e) => `
                <article class="event event-${e.type}">
                  <div class="event-month">${escape(e.month[lang])}</div>
                  <div class="event-body">
                    <span class="event-type">${escape(ui.types[e.type])}</span>
                    <h3>${escape(e.name)}</h3>
                    <p>${escape(e.about[lang])}</p>
                  </div>
                </article>`
              )
              .join("")}
          </div>
          <div class="note">${escape(ui.general)} <a class="card-link" href="${ROOT}#checklist">${escape(ui.generalLink)} →</a></div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head"><h2>${escape(ui.others)}</h2></div>
          <div class="chips">
            ${CITIES.filter((c) => c.slug !== slug)
              .map((c) => `<a class="chip" href="${ROOT}cities/${c.slug}/">${escape(c.name[lang])}</a>`)
              .join("")}
          </div>
        </div>
      </section>`;

    $("footer-note").textContent = t.footer.note;
    $("footer-updated").textContent = t.footer.updated;
  };

  document.querySelectorAll(".lang button").forEach((btn) =>
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;
      storage.set(STORE_LANG, lang);
      render();
    })
  );

  render();
})();
