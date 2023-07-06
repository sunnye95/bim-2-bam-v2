import {
  Directive,
  LitElement,
  PartType,
  __decorate,
  classMap,
  component_styles_default,
  css,
  directive,
  html,
  noChange,
  nothing,
  property,
  query,
  svg
} from "./chunk-AF26NG3C.js";

// node_modules/@arc-web/components/dist/components/icon/constants/IconConstants.js
var ICON_TYPES = {
  "music-tone-alt": "music-tone-alt",
  rocket: "rocket",
  "cup-2": "cup-2",
  drawer: "drawer",
  "folder-alt": "folder-alt",
  pin: "pin",
  chemistry: "chemistry",
  shield: "shield",
  "game-controller": "game-controller",
  plane: "plane",
  organization: "organization",
  "call-end": "call-end",
  "call-in": "call-in",
  "call-out": "call-out",
  camrecorder: "camrecorder",
  bag: "bag",
  umbrella: "umbrella",
  basket: "basket",
  "basket-loaded": "basket-loaded",
  calculator: "calculator",
  cup: "cup",
  earphones: "earphones",
  "earphones-alt": "earphones-alt",
  handbag: "handbag",
  wallet: "wallet",
  present: "present",
  badge: "badge",
  eyeglass: "eyeglass",
  graduation: "graduation",
  mouse: "mouse",
  speedometer: "speedometer",
  graph: "graph",
  clock: "clock",
  wrench: "wrench",
  "volume-2": "volume-2",
  vector: "vector",
  "arrow-down": "arrow-down",
  anchor: "anchor",
  "action-undo": "action-undo",
  "action-redo": "action-redo",
  accessibility: "accessibility",
  "user-following": "user-following",
  "volume-off": "volume-off",
  support: "support",
  "volume-1": "volume-1",
  user: "user",
  "user-unfollow": "user-unfollow",
  "user-follow": "user-follow",
  "user-female": "user-female",
  "share-alt": "share-alt",
  trash: "trash",
  target: "target",
  "question-circle": "question-circle",
  tag: "tag",
  star: "star",
  "screen-tablet": "screen-tablet",
  speech: "speech",
  "size-fullscreen": "size-fullscreen",
  "size-actual": "size-actual",
  shuffle: "shuffle",
  power: "power",
  share: "share",
  settings: "settings",
  picture: "picture",
  "screen-smartphone": "screen-smartphone",
  "screen-desktop": "screen-desktop",
  satellite: "satellite",
  reload: "reload",
  refresh: "refresh",
  magnifier: "magnifier",
  puzzle: "puzzle",
  printer: "printer",
  login: "login",
  "plus-circle": "plus-circle",
  "pie-chart": "pie-chart",
  "options-vertical": "options-vertical",
  people: "people",
  pencil: "pencil",
  "paper-plane": "paper-plane",
  heart: "heart",
  options: "options",
  notebook: "notebook",
  note: "note",
  "music-tone": "music-tone",
  "minus-circle": "minus-circle",
  microphone: "microphone",
  menu: "menu",
  map: "map",
  like: "like",
  loop: "loop",
  logout: "logout",
  "cursor-move": "cursor-move",
  "lock-open": "lock-open",
  lock: "lock",
  "location-pin": "location-pin",
  list: "list",
  link: "link",
  folder: "folder",
  layers: "layers",
  key: "key",
  "info-circle": "info-circle",
  hourglass: "hourglass",
  home: "home",
  film: "film",
  grid: "grid",
  "globe-alt": "globe-alt",
  globe: "globe",
  frame: "frame",
  crop: "crop",
  flag: "flag",
  fire: "fire",
  energy: "energy",
  feed: "feed",
  eye: "eye",
  "exclamation-circle": "exclamation-circle",
  event: "event",
  equalizer: "equalizer",
  "envelope-open": "envelope-open",
  "envelope-letter": "envelope-letter",
  envelope: "envelope",
  directions: "directions",
  docs: "docs",
  doc: "doc",
  dislike: "dislike",
  "control-play": "control-play",
  direction: "direction",
  "close-circle": "close-circle",
  cursor: "cursor",
  "arrow-left": "arrow-left",
  "control-start": "control-start",
  "control-rewind": "control-rewind",
  camera: "camera",
  "control-pause": "control-pause",
  "control-forward": "control-forward",
  "control-end": "control-end",
  compass: "compass",
  "cloud-upload": "cloud-upload",
  "cloud-download": "cloud-download",
  "arrow-up-circle": "arrow-up-circle",
  x: "x",
  "check-circle": "check-circle",
  chart: "chart",
  calendar: "calendar",
  bulb: "bulb",
  bubbles: "bubbles",
  bubble: "bubble",
  briefcase: "briefcase",
  "book-open": "book-open",
  "arrow-right": "arrow-right",
  bell: "bell",
  "ban-circle": "ban-circle",
  "arrow-left-circle": "arrow-left-circle",
  "arrow-up": "arrow-up",
  "arrow-right-circle": "arrow-right-circle",
  "arrow-down-circle": "arrow-down-circle"
};

// node_modules/lit-html/development/directives/if-defined.js
var ifDefined = (value) => value !== null && value !== void 0 ? value : nothing;

// node_modules/@arc-web/components/dist/utilities/base-path.js
var basePath = "";
function setBasePath(path) {
  basePath = path;
}
function getBasePath() {
  return basePath.replace(/\/$/, "");
}
var scripts = [...document.getElementsByTagName("script")];
var configScript = scripts.find((script) => script.hasAttribute("data-arc"));
if (configScript) {
  setBasePath(configScript.getAttribute("data-arc"));
} else {
  const fallbackScript = scripts.find((s) => /arc(\.min)?\.js$/.test(s.src));
  let path = "";
  if (fallbackScript) {
    path = fallbackScript.getAttribute("src");
  }
  setBasePath(path.split("/").slice(0, -1).join("/"));
}

// node_modules/lit-html/development/static.js
var brand = Symbol.for("");
var unwrapStaticValue = (value) => {
  if ((value === null || value === void 0 ? void 0 : value.r) !== brand) {
    return void 0;
  }
  return value === null || value === void 0 ? void 0 : value["_$litStatic$"];
};
var textFromStatic = (value) => {
  if (value["_$litStatic$"] !== void 0) {
    return value["_$litStatic$"];
  } else {
    throw new Error(`Value passed to 'literal' function must be a 'literal' result: ${value}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
  }
};
var literal = (strings, ...values) => ({
  ["_$litStatic$"]: values.reduce((acc, v, idx) => acc + textFromStatic(v) + strings[idx + 1], strings[0]),
  r: brand
});
var stringsCache = /* @__PURE__ */ new Map();
var withStatic = (coreTag) => (strings, ...values) => {
  const l = values.length;
  let staticValue;
  let dynamicValue;
  const staticStrings = [];
  const dynamicValues = [];
  let i = 0;
  let hasStatics = false;
  let s;
  while (i < l) {
    s = strings[i];
    while (i < l && (dynamicValue = values[i], staticValue = unwrapStaticValue(dynamicValue)) !== void 0) {
      s += staticValue + strings[++i];
      hasStatics = true;
    }
    if (i !== l) {
      dynamicValues.push(dynamicValue);
    }
    staticStrings.push(s);
    i++;
  }
  if (i === l) {
    staticStrings.push(strings[l]);
  }
  if (hasStatics) {
    const key = staticStrings.join("$$lit$$");
    strings = stringsCache.get(key);
    if (strings === void 0) {
      staticStrings.raw = staticStrings;
      stringsCache.set(key, strings = staticStrings);
    }
    values = dynamicValues;
  }
  return coreTag(strings, ...values);
};
var html2 = withStatic(html);
var svg2 = withStatic(svg);

// node_modules/lit-html/development/directives/when.js
function when(condition, trueCase, falseCase) {
  return condition ? trueCase() : falseCase === null || falseCase === void 0 ? void 0 : falseCase();
}

// node_modules/@arc-web/components/dist/components/icon-button/arc-icon-button.styles.js
var arc_icon_button_styles_default = [
  component_styles_default,
  css`
    :host {
      display: inline-flex;
      cursor: pointer;
      --icon-color: rgb(var(--arc-font-color));
    }

    .button {
      display: grid;
      align-content: center;
      text-align: center;
      width: 100%;
      min-height: 100%;
      border: none;
      font-family: var(--arc-font-button);
      line-height: inherit;
      text-decoration: none;
      user-select: none;
      white-space: nowrap;
      vertical-align: middle;
      padding: 0;
      cursor: inherit;
      color: var(--icon-color);
      background: none;
      outline: none;
      -webkit-appearance: none;
    }

    #iconWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #icon {
      padding: var(--arc-spacing-small);
      border-radius: 50%;
    }

    #action {
      font-size: var(--arc-font-size-xx-small);
      margin-top: -0.2rem;
    }

    /* Active */
    .button.button--active {
      border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style) currentColor;
    }

    /* Hover, Focus & Mouse down */
    .button:hover:not(.button--disabled):not(.button--loading) #icon,
    .button:focus-visible:not(.button--disabled):not(.button--loading) #icon {
      background-color: rgba(var(--arc-font-color), 10%);
    }
    .button:active:not(.button--disabled):not(.button--loading) #icon {
      background-color: rgba(var(--arc-font-color), 30%);
    }

    /* Disabled */
    .button--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Loading */
    .button--loading {
      cursor: wait;
    }

    .button--loading #icon {
      visibility: hidden;
    }

    #loader {
      position: absolute;
    }

    /* Prevent click events from firing on slots */
    #iconWrapper,
    #icon,
    #action {
      pointer-events: none;
    }
  `
];

// node_modules/lit-html/development/directives/style-map.js
var important = "important";
var importantFlag = " !" + important;
var flagTrim = 0 - importantFlag.length;
var StyleMapDirective = class extends Directive {
  constructor(partInfo) {
    var _a;
    super(partInfo);
    if (partInfo.type !== PartType.ATTRIBUTE || partInfo.name !== "style" || ((_a = partInfo.strings) === null || _a === void 0 ? void 0 : _a.length) > 2) {
      throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
  }
  render(styleInfo) {
    return Object.keys(styleInfo).reduce((style, prop) => {
      const value = styleInfo[prop];
      if (value == null) {
        return style;
      }
      prop = prop.includes("-") ? prop : prop.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
      return style + `${prop}:${value};`;
    }, "");
  }
  update(part, [styleInfo]) {
    const { style } = part.element;
    if (this._previousStyleProperties === void 0) {
      this._previousStyleProperties = /* @__PURE__ */ new Set();
      for (const name in styleInfo) {
        this._previousStyleProperties.add(name);
      }
      return this.render(styleInfo);
    }
    this._previousStyleProperties.forEach((name) => {
      if (styleInfo[name] == null) {
        this._previousStyleProperties.delete(name);
        if (name.includes("-")) {
          style.removeProperty(name);
        } else {
          style[name] = "";
        }
      }
    });
    for (const name in styleInfo) {
      const value = styleInfo[name];
      if (value != null) {
        this._previousStyleProperties.add(name);
        const isImportant = typeof value === "string" && value.endsWith(importantFlag);
        if (name.includes("-") || isImportant) {
          style.setProperty(name, isImportant ? value.slice(0, flagTrim) : value, isImportant ? important : "");
        } else {
          style[name] = value;
        }
      }
    }
    return noChange;
  }
};
var styleMap = directive(StyleMapDirective);

// node_modules/@arc-web/components/dist/internal/constants/styleConstants.js
var FONT_SIZES = {
  "xx-small": "xx-small",
  "x-small": "x-small",
  small: "small",
  medium: "medium",
  large: "large",
  "x-large": "x-large",
  "xx-large": "xx-large",
  "xxx-large": "xxx-large",
  "xxxx-large": "xxxx-large"
};
var FONT_SPACING = {
  dense: "dense",
  normal: "normal",
  loose: "loose"
};
var INPUT_SIZES = {
  small: "small",
  medium: "medium",
  large: "large"
};
var THEME_COLORS = {
  default: "default",
  primary: "primary",
  secondary: "secondary",
  error: "error",
  warning: "warning",
  info: "info",
  success: "success"
};

// node_modules/@arc-web/components/dist/components/icon/arc-icon.styles.js
var arc_icon_styles_default = [
  component_styles_default,
  css`
    :host {
      display: inline-flex;
      --icon-color-primary: inherit;
      --icon-color-secondary: currentColor;
    }

    #main {
      display: block;
      color: var(--icon-color-primary);
      line-height: 1;
      flex-shrink: 0;
      max-width: initial;
    }

    #main use {
      fill: var(--icon-color-secondary);
      stroke: var(--icon-color-secondary);
      --icon-stroke-linecap-butt: butt;
      stroke-miterlimit: 10;
      stroke-linecap: square;
      stroke-linejoin: miter;
    }
  `
];

// node_modules/@arc-web/components/dist/components/icon/ArcIcon.js
var ArcIcon = class extends LitElement {
  constructor() {
    super(...arguments);
    this.name = ICON_TYPES.fire;
    this.size = FONT_SIZES.medium;
    this.rotation = 0;
  }
  render() {
    const DEFAULT_PATH = `${getBasePath()}/assets/icons.svg`;
    const iconStyles = {
      transform: this.rotation ? `rotate(${this.rotation}deg)` : null,
      height: `var(--arc-font-size-${this.size})`,
      width: `var(--arc-font-size-${this.size})`
    };
    return html`
      <svg
        id="main"
        style=${styleMap(iconStyles)}
        role=${ifDefined(this.label ? "img" : void 0)}
        aria-label=${ifDefined(this.label || void 0)}
        aria-hidden=${ifDefined(this.label ? void 0 : "true")}
      >
        <use href="${DEFAULT_PATH}#arc-${this.name}" xlink:href="${DEFAULT_PATH}#arc-${this.name}" />
      </svg>
    `;
  }
};
ArcIcon.tag = "arc-icon";
ArcIcon.styles = arc_icon_styles_default;
__decorate([
  property({ type: String, reflect: true })
], ArcIcon.prototype, "name", void 0);
__decorate([
  property({ type: String })
], ArcIcon.prototype, "label", void 0);
__decorate([
  property({ type: String, reflect: true })
], ArcIcon.prototype, "size", void 0);
__decorate([
  property({ type: Number })
], ArcIcon.prototype, "rotation", void 0);

// node_modules/@arc-web/components/dist/components/icon/arc-icon.js
customElements.define("arc-icon", ArcIcon);

// node_modules/@arc-web/components/dist/components/spinner/arc-spinner.styles.js
var arc_spinner_styles_default = [
  component_styles_default,
  css`
  :host {
    --stroke-color: rgb(var(--arc-font-color));
    --track-width: 2px;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  #main {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  #track,
  #indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    transform-origin: 50% 50%;
  }

  #track {
    stroke: rgba(var(--arc-grey-050), 0.3););
    transform-origin: 0 0;
  }

  #indicator {
    stroke: var(--stroke-color);
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform: rotate(90deg);
    animation: spin 2.5s linear infinite;
  }

  @keyframes spin {
    0% {
      stroke-dasharray: 0.2em 3em;
      transform: rotate(0deg);
    }

    50% {
      stroke-dasharray: 2.2em 3em;
      transform: rotate(450deg);
    }

    100% {
      stroke-dasharray: 0.2em 3em;
      transform: rotate(1080deg);
    }
  }
`
];

// node_modules/@arc-web/components/dist/components/spinner/ArcSpinner.js
var ArcSpinner = class extends LitElement {
  render() {
    return html`
      <svg id="main" aria-busy="true" aria-live="polite">
        <circle id="track" cx="0.5em" cy="0.5em" r="0" />
        <circle id="indicator" cx="0.5em" cy="0.5em" r="0" />
      </svg>
    `;
  }
};
ArcSpinner.tag = "arc-spinner";
ArcSpinner.styles = arc_spinner_styles_default;

// node_modules/@arc-web/components/dist/components/spinner/arc-spinner.js
customElements.define("arc-spinner", ArcSpinner);

// node_modules/@arc-web/components/dist/components/icon-button/ArcIconButton.js
var ArcIconButton = class extends LitElement {
  constructor() {
    super(...arguments);
    this.label = "";
    this.active = false;
    this.disabled = false;
    this.loading = false;
  }
  click() {
    this.button.click();
  }
  focus(options) {
    this.button.focus(options);
  }
  blur() {
    this.button.blur();
  }
  _handleClick(event) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  render() {
    const isLink = !!this.href;
    const tag = isLink ? literal`a` : literal`button`;
    return html2`
      <${tag}
        id="main"
        class=${classMap({
      button: true,
      "button--active": this.active,
      "button--disabled": this.disabled,
      "button--loading": this.loading
    })}
        ?disabled=${ifDefined(isLink ? void 0 : this.disabled)}
        type="button"
        href=${ifDefined(this.href || void 0)}
        target=${ifDefined(this.target || void 0)}
        download=${ifDefined(this.download || void 0)}
        rel=${ifDefined(this.target ? "noreferrer noopener" : void 0)}
        role="button"
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label=${this.label}
        tabindex=${this.disabled ? "-1" : "0"}
        @click=${this._handleClick}
      >
        <span id="iconWrapper" aria-hidden="true">
          <arc-icon id="icon" part="icon" name=${ifDefined(this.name || void 0)}></arc-icon>
          ${when(this.loading, () => html2`<arc-spinner id="loader"></arc-spinner>`)}
        </span>
        <span id="action"><slot></slot></span>
      </${tag}>
    `;
  }
};
ArcIconButton.tag = "arc-icon-button";
ArcIconButton.styles = arc_icon_button_styles_default;
__decorate([
  query("#main")
], ArcIconButton.prototype, "button", void 0);
__decorate([
  property({ type: String })
], ArcIconButton.prototype, "name", void 0);
__decorate([
  property({ type: String })
], ArcIconButton.prototype, "href", void 0);
__decorate([
  property({ type: String })
], ArcIconButton.prototype, "target", void 0);
__decorate([
  property({ type: String })
], ArcIconButton.prototype, "download", void 0);
__decorate([
  property({ type: String })
], ArcIconButton.prototype, "label", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcIconButton.prototype, "active", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcIconButton.prototype, "disabled", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcIconButton.prototype, "loading", void 0);

// node_modules/@arc-web/components/dist/components/icon-button/arc-icon-button.js
customElements.define("arc-icon-button", ArcIconButton);

// node_modules/tabbable/dist/index.esm.js
var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
var candidateSelector = candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  return element.getRootNode();
} : function(element) {
  return element.ownerDocument;
};
var getTabindex = function getTabindex2(node, isScope) {
  if (node.tabIndex < 0) {
    if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || node.isContentEditable) && isNaN(parseInt(node.getAttribute("tabindex"), 10))) {
      return 0;
    }
  }
  return node.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  var nodeRootHost = getRootNode(node).host;
  var nodeIsAttached = (nodeRootHost === null || nodeRootHost === void 0 ? void 0 : nodeRootHost.ownerDocument.contains(nodeRootHost)) || node.ownerDocument.contains(node);
  if (!displayCheck || displayCheck === "full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (nodeIsAttached) {
      return !node.getClientRects().length;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isTabbable = function isTabbable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");

// node_modules/@arc-web/components/dist/internal/tabbable.js
function getTabbableBoundary(root) {
  const allElements = [];
  function walk(el) {
    if (el instanceof HTMLElement) {
      allElements.push(el);
      if (el.shadowRoot && el.shadowRoot.mode === "open") {
        walk(el.shadowRoot);
      }
    }
    [...el.querySelectorAll("*")].map((e) => walk(e));
  }
  walk(root);
  const start = allElements.find((el) => isTabbable(el)) || null;
  const end = allElements.reverse().find((el) => isTabbable(el)) || null;
  return { start, end };
}

export {
  ICON_TYPES,
  when,
  FONT_SIZES,
  FONT_SPACING,
  INPUT_SIZES,
  THEME_COLORS,
  ifDefined,
  getTabbableBoundary,
  literal,
  html2 as html,
  styleMap,
  setBasePath,
  getBasePath,
  ArcIcon,
  ArcSpinner,
  ArcIconButton
};
/*! Bundled license information:

lit-html/development/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 5.3.3
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
//# sourceMappingURL=chunk-UNKQZFFD.js.map
