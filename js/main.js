/* ==========================================================================
   Art Ed — shared behavior
   1. Builds the header nav and footer on every page (edit SITE below once)
   2. Shows a labeled placeholder when an image/video file isn't added yet
   3. Click-to-enlarge lightbox for images marked .zoomable
   ========================================================================== */

(function () {
  "use strict";

  /* ---- 1. Site config: add a new page by adding one line to `pages` ---- */
  var SITE = {
    name: "Deena Beydoun",
    portfolioUrl: "https://deenasweb.godaddysites.com/",
    pages: [
      { href: "index.html", label: "Home" },
      { href: "dae-200.html", label: "DAE 200" },
      { href: "dae-405-observation.html", label: "DAE 405 Observation" },
      { href: "busytownprek.html", label: "Busytown-PreK" }
      // { href: "new-page.html", label: "New page" },
    ]
  };

  function normalize(path) {
    var file = path.split("/").pop() || "index.html";
    return file.replace(/\.html$/, "") || "index";
  }

  var current = normalize(window.location.pathname);

  var header = document.getElementById("site-header");
  if (header) {
    var links = SITE.pages
      .map(function (p) {
        var isCurrent = normalize(p.href) === current;
        return (
          "<li><a href=\"" + p.href + "\"" +
          (isCurrent ? " aria-current=\"page\"" : "") + ">" +
          p.label + "</a></li>"
        );
      })
      .join("");
    header.innerHTML =
      "<a class=\"wordmark\" href=\"index.html\">" + SITE.name + "</a>" +
      "<nav class=\"site-nav\" aria-label=\"Main\"><ul>" + links + "</ul></nav>";
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML =
      "<div class=\"site-footer-inner\">" +
      "<p>&copy; " + new Date().getFullYear() + " " + SITE.name + "</p>" +
      "<p><a href=\"" + SITE.portfolioUrl + "\">Main portfolio</a></p>" +
      "</div>";
  }

  /* ---- 2. Placeholders for files that haven't been added yet ---- */
  function makePlaceholder(kind, src, width, height) {
    var box = document.createElement("div");
    box.className = "placeholder";
    box.setAttribute("role", "img");
    box.setAttribute("aria-label", "Missing " + kind);
    box.textContent = "Add " + kind + ": " + src;
    return box;
  }

  document.addEventListener(
    "error",
    function (event) {
      var el = event.target;
      if (!el || !el.tagName) return;

      if (el.tagName === "IMG") {
        var src = el.getAttribute("src");
        el.replaceWith(makePlaceholder("image", src));
      } else if (el.tagName === "SOURCE" && el.parentElement && el.parentElement.tagName === "VIDEO") {
        var video = el.parentElement;
        video.replaceWith(makePlaceholder("video", el.getAttribute("src")));
      }
    },
    true // errors don't bubble, so listen in the capture phase
  );

  /* ---- 3. Lightbox ---- */
  var dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.setAttribute("aria-label", "Enlarged image");
  var big = document.createElement("img");
  dialog.appendChild(big);
  document.body.appendChild(dialog);

  dialog.addEventListener("click", function () { dialog.close(); });

  function open(img) {
    if (typeof dialog.showModal !== "function") return;
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    dialog.showModal();
  }

  document.addEventListener("click", function (event) {
    var img = event.target.closest && event.target.closest("img.zoomable");
    if (img) open(img);
  });

  // Make zoomable images reachable by keyboard (Enter or Space opens them)
  document.querySelectorAll("img.zoomable").forEach(function (img) {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
  });
  document.addEventListener("keydown", function (event) {
    if ((event.key === "Enter" || event.key === " ") && event.target.matches && event.target.matches("img.zoomable")) {
      event.preventDefault();
      open(event.target);
    }
  });
})();
