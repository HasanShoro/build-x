var lp = "../img/";
var plp = "https://via.placeholder.com/350x250/";
var images = [
  lp + "team1.jpg",
  lp + "team2.jpg",
  lp + "team3.jpg",
  plp + "78c5d6/fff",
  plp + "459ba8/fff",
  plp + "79c267/fff",
  plp + "c5d647/fff",
  plp + "f28c33/fff",
  plp + "e868a2/fff",
  plp + "cc4360/fff",
  lp + "work-desk.jpg",
  lp + "phone-app.png",
  lp + "bg-gr-v.png",
];

var editor = grapesjs.init({
  height: "100%",
  container: "#gjs",
  fromElement: true,
  showOffsets: true,
  storageManager: false,
  assetManager: {
    embedAsBase64: true,
    assets: images,
  },
  selectorManager: { componentFirst: true },
  styleManager: {
    sectors: [
      {
        name: "General",
        properties: [
          {
            extend: "float",
            type: "radio",
            default: "none",
            options: [
              { value: "none", className: "fa fa-times" },
              { value: "left", className: "fa fa-align-left" },
              { value: "right", className: "fa fa-align-right" },
            ],
          },
          "display",
          { extend: "position", type: "select" },
          "top",
          "right",
          "left",
          "bottom",
        ],
      },
      {
        name: "Dimension",
        open: false,
        properties: [
          "width",
          {
            id: "flex-width",
            type: "integer",
            name: "Width",
            units: ["px", "%"],
            property: "flex-basis",
            toRequire: 1,
          },
          "height",
          "max-width",
          "min-height",
          "margin",
          "padding",
        ],
      },
      {
        name: "Typography",
        open: false,
        properties: [
          "font-family",
          "font-size",
          "font-weight",
          "letter-spacing",
          "color",
          "line-height",
          {
            extend: "text-align",
            options: [
              { id: "left", label: "Left", className: "fa fa-align-left" },
              {
                id: "center",
                label: "Center",
                className: "fa fa-align-center",
              },
              { id: "right", label: "Right", className: "fa fa-align-right" },
              {
                id: "justify",
                label: "Justify",
                className: "fa fa-align-justify",
              },
            ],
          },
          {
            property: "text-decoration",
            type: "radio",
            default: "none",
            options: [
              { id: "none", label: "None", className: "fa fa-times" },
              {
                id: "underline",
                label: "underline",
                className: "fa fa-underline",
              },
              {
                id: "line-through",
                label: "Line-through",
                className: "fa fa-strikethrough",
              },
            ],
          },
          "text-shadow",
        ],
      },
      {
        name: "Decorations",
        open: false,
        properties: [
          "opacity",
          "border-radius",
          "border",
          "box-shadow",
          "background", // { id: 'background-bg', property: 'background', type: 'bg' }
        ],
      },
      {
        name: "Extra",
        open: false,
        buildProps: ["transition", "perspective", "transform"],
      },
      {
        name: "Flex",
        open: false,
        properties: [
          {
            name: "Flex Container",
            property: "display",
            type: "select",
            defaults: "block",
            list: [
              { value: "block", name: "Disable" },
              { value: "flex", name: "Enable" },
            ],
          },
          {
            name: "Flex Parent",
            property: "label-parent-flex",
            type: "integer",
          },
          {
            name: "Direction",
            property: "flex-direction",
            type: "radio",
            defaults: "row",
            list: [
              {
                value: "row",
                name: "Row",
                className: "icons-flex icon-dir-row",
                title: "Row",
              },
              {
                value: "row-reverse",
                name: "Row reverse",
                className: "icons-flex icon-dir-row-rev",
                title: "Row reverse",
              },
              {
                value: "column",
                name: "Column",
                title: "Column",
                className: "icons-flex icon-dir-col",
              },
              {
                value: "column-reverse",
                name: "Column reverse",
                title: "Column reverse",
                className: "icons-flex icon-dir-col-rev",
              },
            ],
          },
          {
            name: "Justify",
            property: "justify-content",
            type: "radio",
            defaults: "flex-start",
            list: [
              {
                value: "flex-start",
                className: "icons-flex icon-just-start",
                title: "Start",
              },
              {
                value: "flex-end",
                title: "End",
                className: "icons-flex icon-just-end",
              },
              {
                value: "space-between",
                title: "Space between",
                className: "icons-flex icon-just-sp-bet",
              },
              {
                value: "space-around",
                title: "Space around",
                className: "icons-flex icon-just-sp-ar",
              },
              {
                value: "center",
                title: "Center",
                className: "icons-flex icon-just-sp-cent",
              },
            ],
          },
          {
            name: "Align",
            property: "align-items",
            type: "radio",
            defaults: "center",
            list: [
              {
                value: "flex-start",
                title: "Start",
                className: "icons-flex icon-al-start",
              },
              {
                value: "flex-end",
                title: "End",
                className: "icons-flex icon-al-end",
              },
              {
                value: "stretch",
                title: "Stretch",
                className: "icons-flex icon-al-str",
              },
              {
                value: "center",
                title: "Center",
                className: "icons-flex icon-al-center",
              },
            ],
          },
          {
            name: "Flex Children",
            property: "label-parent-flex",
            type: "integer",
          },
          {
            name: "Order",
            property: "order",
            type: "integer",
            defaults: 0,
            min: 0,
          },
          {
            name: "Flex",
            property: "flex",
            type: "composite",
            properties: [
              {
                name: "Grow",
                property: "flex-grow",
                type: "integer",
                defaults: 0,
                min: 0,
              },
              {
                name: "Shrink",
                property: "flex-shrink",
                type: "integer",
                defaults: 0,
                min: 0,
              },
              {
                name: "Basis",
                property: "flex-basis",
                type: "integer",
                units: ["px", "%", ""],
                unit: "",
                defaults: "auto",
              },
            ],
          },
          {
            name: "Align",
            property: "align-self",
            type: "radio",
            defaults: "auto",
            list: [
              {
                value: "auto",
                name: "Auto",
              },
              {
                value: "flex-start",
                title: "Start",
                className: "icons-flex icon-al-start",
              },
              {
                value: "flex-end",
                title: "End",
                className: "icons-flex icon-al-end",
              },
              {
                value: "stretch",
                title: "Stretch",
                className: "icons-flex icon-al-str",
              },
              {
                value: "center",
                title: "Center",
                className: "icons-flex icon-al-center",
              },
            ],
          },
        ],
      },
    ],
  },
  canvas: {
    styles: [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",
    ],
    scripts: [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
    ],
  },
  plugins: [
    "gjs-blocks-basic",
    "grapesjs-plugin-forms",
    "grapesjs-component-countdown",
    "grapesjs-plugin-export",
    "grapesjs-tabs",
    "grapesjs-custom-code",
    "grapesjs-touch",
    "grapesjs-parser-postcss",
    "grapesjs-tooltip",
    "grapesjs-tui-image-editor",
    "grapesjs-typed",
    "grapesjs-style-bg",
    "grapesjs-preset-webpage",
  ],
  pluginsOpts: {
    "gjs-blocks-basic": { flexGrid: true },
    "grapesjs-tui-image-editor": {
      script: [
        // 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js',
        "https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js",
        "https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js",
        "https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js",
      ],
      style: [
        "https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css",
        "https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css",
      ],
    },
    "grapesjs-tabs": {
      tabsBlock: { category: "Extra" },
    },
    "grapesjs-typed": {
      block: {
        category: "Extra",
        content: {
          type: "typed",
          "type-speed": 40,
          strings: ["Text row one", "Text row two", "Text row three"],
        },
      },
    },
    "grapesjs-preset-webpage": {
      modalImportTitle: "Import Template",
      modalImportLabel:
        '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
      modalImportContent: function (editor) {
        return editor.getHtml() + "<style>" + editor.getCss() + "</style>";
      },
    },
  },
});

// Add custom blocks
addCustomBlocks(editor);

// Set all categories to be initially closed
editor.on("load", () => {
  editor.BlockManager.getCategories().forEach((category) =>
    category.set("open", false)
  );
});

// Automatically close other categories when one is opened
editor.BlockManager.getCategories().on("change:open", (model, open) => {
  if (open) {
    editor.BlockManager.getCategories().forEach((category) => {
      if (category !== model) {
        category.set("open", false);
      }
    });
  }
});

editor.I18n.addMessages({
  en: {
    styleManager: {
      properties: {
        "background-repeat": "Repeat",
        "background-position": "Position",
        "background-attachment": "Attachment",
        "background-size": "Size",
      },
    },
  },
});

var pn = editor.Panels;
var modal = editor.Modal;
var cmdm = editor.Commands;

// Update canvas-clear command
cmdm.add("canvas-clear", function () {
  if (confirm("Are you sure to clean the canvas?")) {
    editor.runCommand("core:canvas-clear");
    setTimeout(function () {
      localStorage.clear();
    }, 0);
  }
});

// Add info command
var mdlClass = "gjs-mdl-dialog-sm";
var infoContainer = document.getElementById("info-panel");

cmdm.add("open-info", function () {
  var mdlDialog = document.querySelector(".gjs-mdl-dialog");
  mdlDialog.className += " " + mdlClass;
  infoContainer.style.display = "block";
  modal.setTitle("About this demo");
  modal.setContent(infoContainer);
  modal.open();
  modal.getModel().once("change:open", function () {
    mdlDialog.className = mdlDialog.className.replace(mdlClass, "");
  });
});

pn.addButton("options", {
  id: "open-info",
  className: "fa fa-question-circle",
  command: function () {
    editor.runCommand("open-info");
  },
  attributes: {
    title: "About",
    "data-tooltip-pos": "bottom",
  },
});

// Simple warn notifier
var origWarn = console.warn;
toastr.options = {
  closeButton: true,
  preventDuplicates: true,
  showDuration: 250,
  hideDuration: 150,
};
console.warn = function (msg) {
  if (msg.indexOf("[undefined]") == -1) {
    toastr.warning(msg);
  }
  origWarn(msg);
};

// Add and beautify tooltips
[
  ["sw-visibility", "Show Borders"],
  ["preview", "Preview"],
  ["fullscreen", "Fullscreen"],
  ["export-template", "Export"],
  ["undo", "Undo"],
  ["redo", "Redo"],
  ["gjs-open-import-webpage", "Import"],
  ["canvas-clear", "Clear canvas"],
].forEach(function (item) {
  pn.getButton("options", item[0]).set("attributes", {
    title: item[1],
    "data-tooltip-pos": "bottom",
  });
});
[
  ["open-sm", "Style Manager"],
  ["open-layers", "Layers"],
  ["open-blocks", "Blocks"],
].forEach(function (item) {
  pn.getButton("views", item[0]).set("attributes", {
    title: item[1],
    "data-tooltip-pos": "bottom",
  });
});
var titles = document.querySelectorAll("*[title]");

for (var i = 0; i < titles.length; i++) {
  var el = titles[i];
  var title = el.getAttribute("title");
  title = title ? title.trim() : "";
  if (!title) break;
  el.setAttribute("data-tooltip", title);
  el.setAttribute("title", "");
}

// Store and load events
editor.on("storage:load", function (e) {
  console.log("Loaded ", e);
});
editor.on("storage:store", function (e) {
  console.log("Stored ", e);
});

// Do stuff on load
editor.on("load", function () {
  var $ = grapesjs.$;

  // Show borders by default
  pn.getButton("options", "sw-visibility").set({
    command: "core:component-outline",
    active: true,
  });

  // Load and show settings and style manager
  var openTmBtn = pn.getButton("views", "open-tm");
  openTmBtn && openTmBtn.set("active", 1);
  var openSm = pn.getButton("views", "open-sm");
  openSm && openSm.set("active", 1);

  // Remove trait view
  pn.removeButton("views", "open-tm");

  // Add Settings Sector
  var traitsSector = $(
    '<div class="gjs-sm-sector no-select">' +
      '<div class="gjs-sm-sector-title"><span class="icon-settings fa fa-cog"></span> <span class="gjs-sm-sector-label">Settings</span></div>' +
      '<div class="gjs-sm-properties" style="display: none;"></div></div>'
  );
  var traitsProps = traitsSector.find(".gjs-sm-properties");
  traitsProps.append($(".gjs-traits-cs"));
  $(".gjs-sm-sectors").before(traitsSector);
  traitsSector.find(".gjs-sm-sector-title").on("click", function () {
    var traitStyle = traitsProps.get(0).style;
    var hidden = traitStyle.display == "none";
    if (hidden) {
      traitStyle.display = "block";
    } else {
      traitStyle.display = "none";
    }
  });

  // Open block manager
  var openBlocksBtn = editor.Panels.getButton("views", "open-blocks");
  openBlocksBtn && openBlocksBtn.set("active", 1);

  // Move Ad
  $("#gjs").append($(".ad-cont"));
});

function addCustomBlocks(editor) {
  // Example of adding a custom block
  editor.BlockManager.add("custom-block-1", {
    label: "Custom Block 1",
    content: '<div class="custom-block">This is Custom Block 1</div>',
    category: "Custom Blocks",
    attributes: { class: "fa fa-cube" },
  });

  editor.BlockManager.add("custom-block-2", {
    label: "Custom Block 2",
    content: '<div class="custom-block">This is Custom Block 2</div>',
    category: "Custom Blocks",
    attributes: { class: "fa fa-cubes" },
  });

  // Define each Bootstrap header block
  const headerBlocks = [
    {
      id: "header-1",
      label: "Simple Header",
      attributes: { class: "fa fa-header" },
      content: `
        <div class="container">
          <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
              <img class="bi me-2" src="../img/bootstrap-logo.svg" alt="" width="40" height="32">
              <span class="fs-4">Simple header</span>
            </a>
            <ul class="nav nav-pills">
              <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
              <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
              <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            </ul>
          </header>
        </div>
      `,
      category: "Headers",
    },
    {
      id: "header-2",
      label: "Centered Navigation",
      attributes: { class: "fa fa-bars" },
      content: `
        <div class="container">
          <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
              <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
              <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
              <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            </ul>
          </header>
        </div>
      `,
      category: "Headers",
    },
    {
      id: "header-3",
      label: "Flex and Login",
      attributes: { class: "fa fa-arrows-h" },
      content: `
        <div class="container">
          <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
              <img class="bi me-2" src="../img/bootstrap-logo.svg" alt="" width="40" height="32">
            </a>
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
              <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
            </ul>
            <div class="col-md-3 text-end">
              <button type="button" class="btn btn-outline-primary me-2">Login</button>
              <button type="button" class="btn btn-primary">Sign-up</button>
            </div>
          </header>
        </div>
      `,
      category: "Headers",
    },
    {
      id: "header-4",
      label: "Dark Header",
      attributes: { class: "fa fa-moon-o" },
      content: `
        <header class="p-3 bg-dark text-white">
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <img class="bi me-2" src="../img/bootstrap-logo-white.svg" alt="" width="40" height="32">
              </a>
              <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
                <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
                <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
                <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
                <li><a href="#" class="nav-link px-2 text-white">About</a></li>
              </ul>
              <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
              </form>
              <div class="text-end">
                <button type="button" class="btn btn-outline-light me-2">Login</button>
                <button type="button" class="btn btn-warning">Sign-up</button>
              </div>
            </div>
          </div>
        </header>
      `,
      category: "Headers",
    },
  ];

  // Add each header block to the BlockManager
  headerBlocks.forEach((block) => editor.BlockManager.add(block.id, block));

  // Define hero section blocks
  const heroBlocks = [
    {
      id: "hero-1",
      label: "Centered Hero",
      attributes: { class: "fa fa-align-center" },
      content: `
        <div class="px-4 py-5 my-5 text-center">
          <img class="d-block mx-auto mb-4" src="../img/bootstrap-logo.svg" alt="" width="72" height="57">
          <h1 class="display-5 fw-bold">Centered hero</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
            </div>
          </div>
        </div>
      `,
      category: "Hero Sections",
    },
    {
      id: "hero-2",
      label: "Centered Screenshot",
      attributes: { class: "fa fa-image" },
      content: `
        <div class="px-4 pt-5 my-5 text-center border-bottom">
          <h1 class="display-4 fw-bold">Centered screenshot</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
            </div>
          </div>
          <div class="overflow-hidden" style="max-height: 30vh;">
            <div class="container px-5">
              <img src="../img/bootstrap-docs.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy">
            </div>
          </div>
        </div>
      `,
      category: "Hero Sections",
    },
    {
      id: "hero-3",
      label: "Left-aligned Hero with Image",
      attributes: { class: "fa fa-align-left" },
      content: `
        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="../img/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
              <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
              </div>
            </div>
          </div>
        </div>
      `,
      category: "Hero Sections",
    },
    {
      id: "hero-4",
      label: "Centered Sign-up Hero",
      attributes: { class: "fa fa-user-plus" },
      content: `
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
          <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-7 text-center text-lg-start">
              <h1 class="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
              <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
              <form class="p-4 p-md-5 border rounded-3 bg-light">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me"> Remember me
                  </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                <hr class="my-4">
                <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
              </form>
            </div>
          </div>
        </div>
      `,
      category: "Hero Sections",
    },
  ];

  // Add hero blocks to the BlockManager
  heroBlocks.forEach((block) => {
    editor.BlockManager.add(block.id, {
      label: block.label,
      attributes: block.attributes,
      content: block.content,
      category: block.category,
    });
  });

  // Define feature blocks
  const featureBlocks = [
    {
      id: "feature-grid-1",
      label: "Simple Feature Grid",
      attributes: { class: "fa fa-th-large" },
      content: `
        <div class="container px-4 py-5" id="featured-3">
          <h2 class="pb-2 border-bottom">Columns with icons</h2>
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="feature col">
              <h2>Featured title</h2>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" class="icon-link">
                Call to action
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </a>
            </div>
            <div class="feature col">
              <h2>Featured title</h2>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" class="icon-link">
                Call to action
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </a>
            </div>
            <div class="feature col">
              <h2>Featured title</h2>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" class="icon-link">
                Call to action
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      `,
      category: "Feature Sections",
    },
    {
      id: "feature-list-2",
      label: "Feature List - Buttons",
      attributes: { class: "fa fa-list" },
      content: `
        <div class="container px-4 py-5" id="hanging-icons">
          <h2 class="pb-2 border-bottom">Hanging icons</h2>
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-toggles2" viewBox="0 0 16 16">
                <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2s-.195-1.412-.535-2"/>
                <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8m.535-10a4 4 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126q.138-.534.41-1H4a2 2 0 1 0 0 4z"/>
                <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
              </svg>
              </div>
              <div>
                <h2>Featured title</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a href="#" class="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-cpu-fill" viewBox="0 0 16 16">
                <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5"/>
              </svg>
              </div>
              <div>
                <h2>Featured title</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a href="#" class="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
              </svg>
              </div>
              <div>
                <h2>Featured title</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a href="#" class="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
          </div>
        </div>
      `,
      category: "Feature Sections",
    },
    {
      id: "feature-cards-3",
      label: "Feature Cards",
      attributes: { class: "fa fa-layer-group" },
      content: `
        <div class="container px-4 py-5" id="custom-cards">
          <h2 class="pb-2 border-bottom">Custom cards</h2>

          <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div class="col">
              <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('../img/unsplash-photo-1.jpg');">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                    </li>
                    <li class="d-flex align-items-center me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
</svg>
                      <small>Earth</small>
                    </li>
                    <li class="d-flex align-items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3 me-2" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('../img/unsplash-photo-2.jpg');">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                    </li>
                    <li class="d-flex align-items-center me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
</svg>
                      <small>Pakistan</small>
                    </li>
                    <li class="d-flex align-items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3 me-2" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>                      <small>4d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url('../img/unsplash-photo-3.jpg');">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
                  <ul class="d-flex list-unstyled mt-auto">
                    <li class="me-auto">
                      <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                    </li>
                    <li class="d-flex align-items-center me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
</svg>
                      <small>California</small>
                    </li>
                    <li class="d-flex align-items-center">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3 me-2" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>                      <small>5d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      category: "Feature Sections",
    },
  ];

  // Add feature blocks to the BlockManager
  featureBlocks.forEach((block) => {
    editor.BlockManager.add(block.id, {
      label: block.label,
      attributes: block.attributes,
      content: block.content,
      category: block.category,
    });
  });

  console.log("Feature sections added successfully.");
}

function saveContent(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append("html", editor.getHtml());
  formData.append("css", editor.getCss());

  const csrftoken = document.querySelector("[name=csrfmiddlewaretoken]").value;
  const request = new Request(url_to_hit, {
    method: "POST",
    headers: { "X-CSRFToken": csrftoken },
    mode: "same-origin", // Do not send CSRF token to another domain.
    body: formData,
  });
  fetch(request)
  .then((response) =>
    response
      .json()
      .then((response) => {
        console.log(response);
        alert("Content saved successfully!"); // Show popup
      })
      .catch((error) => {
        console.log(error);
        alert("Content saved successfully!"); // Show error popup
      })
  )
  .catch((error) => {
    console.error(error);
    alert("Error communicating with the server."); // Show error popup
  });
}

