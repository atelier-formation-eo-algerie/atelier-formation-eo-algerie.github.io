/* =====================================================================
   Comportements du site — JavaScript natif, sans dépendance.
   Contenus éditables : data/site.js, data/program.js,
   data/experts.js, data/institutions.js
   ===================================================================== */
(function () {
  "use strict";
  var SITE = window.SITE || {};
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function ext(label, url) { return el("a", { href: url, class: "ext", target: "_blank", rel: "noopener", text: label }); }

  /* ---------- Statut, date, PDF ---------- */
  $$("[data-status-label]").forEach(function (n) { if (SITE.statusLabel) n.textContent = SITE.statusLabel; });
  $$("[data-status-text]").forEach(function (n) { if (SITE.statusText) n.textContent = SITE.statusText; });
  $$("[data-updated]").forEach(function (n) {
    var d = new Date((SITE.lastUpdated || "") + "T12:00:00");
    if (!isNaN(d)) n.textContent = d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  });
  $$("[data-concept-note]").forEach(function (a) {
    if (SITE.conceptNotePdf) { a.href = SITE.conceptNotePdf; a.hidden = false; } else { a.remove(); }
  });

  /* ---------- Contact ---------- */
  var contact = $("#contact");
  if (contact && SITE.contact) {
    var c = SITE.contact;
    if (c.name) contact.appendChild(el("dd", { text: c.name }));
    if (c.role) contact.appendChild(el("dd", { text: c.role }));
    if (c.email) contact.appendChild(el("dd", {}, [el("a", { href: "mailto:" + c.email, text: c.email })]));
    if (c.profile) contact.appendChild(el("dd", {}, [ext("Profil institutionnel", c.profile)]));
  }

  /* ---------- Programme ---------- */
  var days = $("#days");
  if (days && window.PROGRAM) {
    window.PROGRAM.days.forEach(function (d) {
      var ul = el("ul");
      d.items.forEach(function (i) { ul.appendChild(el("li", { text: i })); });
      days.appendChild(el("li", { class: "day" }, [el("span", { class: "when", text: d.when }), el("h3", { text: d.title }), ul]));
    });
    var pn = $("#program-note"); if (pn && window.PROGRAM.note) pn.textContent = window.PROGRAM.note;
  }

  /* ---------- Experts ---------- */
  var people = $("#people");
  if (people && window.EXPERTS) {
    window.EXPERTS.forEach(function (p) {
      var portrait = el("div", { class: "portrait" });
      var initials = el("div", { class: "initials", "aria-hidden": "true" }, [el("span", {}, [p.initials || "", el("small", { text: "Portrait à venir" })])]);
      if (p.photo) {
        var img = el("img", { src: p.photo, alt: "Portrait de " + p.name.replace(/^Dr\s+/, ""), loading: "lazy", width: "480", height: "600" });
        if (p.photoFocus) {
          img.style.objectPosition = p.photoFocus.position || "50% 25%";
          if (p.photoFocus.zoom) { img.style.transform = "scale(" + p.photoFocus.zoom + ")"; img.style.transformOrigin = p.photoFocus.position || "50% 25%"; }
        }
        img.addEventListener("error", function () { img.remove(); portrait.appendChild(initials); });
        portrait.appendChild(img);
      } else {
        portrait.appendChild(initials);
      }
      var foot = el("div", { class: "foot" }, [
        p.profile ? ext(p.profileLabel || "Profil professionnel", p.profile) : null,
        el("span", { class: "state", text: p.status || "Participation à confirmer" })
      ]);
      people.appendChild(el("li", {}, [el("article", { class: "person" }, [
        portrait,
        el("div", { class: "person-body" }, [
          el("h3", { text: p.name }),
          el("p", { class: "inst", text: p.institution }),
          el("p", { class: "spec", text: p.specialty }),
          foot
        ])
      ])]));
    });
    var credits = $("#photo-credits");
    if (credits) {
      var parts = window.EXPERTS.filter(function (p) { return p.photo && p.photoCredit; })
        .map(function (p) { return p.name.replace(/^Dr\s+/, "") + " : " + p.photoCredit; });
      credits.textContent = parts.length ? "Portraits — " + parts.join(" · ") + "." : "";
    }
  }

  /* ---------- Institutions ---------- */
  var groups = $("#inst-groups");
  if (groups && window.INSTITUTIONS) {
    window.INSTITUTIONS.forEach(function (g) {
      var ul = el("ul");
      g.items.forEach(function (i) {
        var link = i.url ? ext(i.urlLabel || i.url.replace(/^https?:\/\//, "").replace(/\/$/, ""), i.url)
                         : el("span", { class: "nolink", text: i.urlNote || "Site officiel à confirmer" });
        ul.appendChild(el("li", {}, [
          el("span", { class: "acr", text: i.acronym || "" }),
          el("div", {}, [
            el("div", { class: "inst-name", text: i.name }),
            el("p", { class: "inst-desc", text: i.description }),
            el("div", { class: "inst-link" }, [link])
          ])
        ]));
      });
      groups.appendChild(el("div", { class: "inst-group" }, [el("h3", { text: g.group }), ul]));
    });
  }

  /* ---------- Comparateurs avant / après ---------- */
  $$(".compare").forEach(function (c) {
    var r = $("input[type=range]", c);
    if (!r) return;
    var upd = function () { c.style.setProperty("--pos", r.value + "%"); };
    r.addEventListener("input", upd); upd();
  });

  /* ---------- Navigation mobile ---------- */
  var toggle = $(".nav-toggle"), list = $("#nav-list");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    list.addEventListener("click", function (e) {
      if (e.target.closest("a")) { list.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("is-open")) { list.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); toggle.focus(); }
    });
  }

  /* ---------- Section active ---------- */
  var links = $$("#nav-list a"), sections = $$("main > section[id]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) links.forEach(function (a) {
          if (a.getAttribute("href") === "#" + en.target.id) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }
})();
