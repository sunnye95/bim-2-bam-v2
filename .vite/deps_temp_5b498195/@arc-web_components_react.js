import {
  ArcCard
} from "./chunk-EK6G52C7.js";
import {
  ArcAccessibility,
  ArcBottombar,
  ArcButton,
  ArcContainer,
  ArcRadio,
  ArcRadioGroup,
  FormController,
  control_styles_default,
  getPropertyValue,
  getRootValue,
  isPrimitive,
  isSingleExpression,
  live,
  noFOUC,
  setRootValue
} from "./chunk-HEMKG2WR.js";
import {
  ArcDrawer,
  stringToArray,
  stringToInitials
} from "./chunk-B2T3EXDY.js";
import {
  ArcDropdown,
  ArcMenu,
  ArcMenuItem,
  ArcNavbar,
  FLOATING_PLACEMENTS,
  arrow,
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift
} from "./chunk-F6C2SCVF.js";
import {
  HasSlotController
} from "./chunk-VBEXRFW5.js";
import "./chunk-JKKIFBOK.js";
import {
  ArcIcon,
  ArcIconButton,
  ArcSpinner,
  ICON_TYPES,
  INPUT_SIZES,
  getBasePath,
  html as html2,
  ifDefined,
  setBasePath,
  styleMap,
  when
} from "./chunk-UNKQZFFD.js";
import {
  ARC_ANIMATION_OPTIONS,
  ARC_EVENTS,
  Directive,
  LitElement,
  PartType,
  __decorate,
  classMap,
  component_styles_default,
  css,
  directive,
  emit,
  getAnimation,
  html,
  mobileBreakpoint,
  noChange,
  parseDuration,
  property,
  query,
  setDefaultAnimation,
  startAnimations,
  state,
  stopAnimations,
  waitForEvent,
  watch
} from "./chunk-AF26NG3C.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/@lit-labs/react/development/create-component.js
var NODE_MODE = false;
var DEV_MODE = true;
var reservedReactProperties = /* @__PURE__ */ new Set([
  "children",
  "localName",
  "ref",
  "style",
  "className"
]);
var listenedEvents = /* @__PURE__ */ new WeakMap();
var addOrUpdateEventListener = (node, event, listener) => {
  let events = listenedEvents.get(node);
  if (events === void 0) {
    listenedEvents.set(node, events = /* @__PURE__ */ new Map());
  }
  let handler = events.get(event);
  if (listener !== void 0) {
    if (handler === void 0) {
      events.set(event, handler = { handleEvent: listener });
      node.addEventListener(event, handler);
    } else {
      handler.handleEvent = listener;
    }
  } else if (handler !== void 0) {
    events.delete(event);
    node.removeEventListener(event, handler);
  }
};
var setProperty = (node, name3, value, old, events) => {
  const event = events === null || events === void 0 ? void 0 : events[name3];
  if (event !== void 0 && value !== old) {
    addOrUpdateEventListener(node, event, value);
    return;
  }
  if ((value === void 0 || value === null) && name3 in HTMLElement.prototype) {
    node.removeAttribute(name3);
    return;
  }
  node[name3] = value;
};
var setRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else {
    ref.current = value;
  }
};
function createComponent(ReactOrOptions = window.React, tagName, elementClass, events, displayName) {
  let React25;
  let tag;
  let element;
  if (tagName === void 0) {
    const options = ReactOrOptions;
    ({ tagName: tag, elementClass: element, events, displayName } = options);
    React25 = options.react;
  } else {
    React25 = ReactOrOptions;
    element = elementClass;
    tag = tagName;
  }
  if (DEV_MODE) {
    for (const p2 of reservedReactProperties) {
      if (p2 in element.prototype && !(p2 in HTMLElement.prototype)) {
        console.warn(`${tagName} contains property ${p2} which is a React
reserved property. It will be used by React and not set on
the element.`);
      }
    }
  }
  const Component = React25.Component;
  const createElement = React25.createElement;
  const eventProps = new Set(Object.keys(events !== null && events !== void 0 ? events : {}));
  class ReactComponent extends Component {
    constructor() {
      super(...arguments);
      this._element = null;
    }
    _updateElement(oldProps) {
      if (this._element === null) {
        return;
      }
      for (const prop in this._elementProps) {
        setProperty(this._element, prop, this.props[prop], oldProps ? oldProps[prop] : void 0, events);
      }
    }
    /**
     * Updates element properties correctly setting properties
     * on mount.
     */
    componentDidMount() {
      var _a;
      this._updateElement();
      (_a = this._element) === null || _a === void 0 ? void 0 : _a.removeAttribute("defer-hydration");
    }
    /**
     * Updates element properties correctly setting properties
     * on every update. Note, this does not include mount.
     */
    componentDidUpdate(old) {
      this._updateElement(old);
    }
    /**
     * Renders the custom element with a `ref` prop which allows this
     * component to reference the custom element.
     *
     * Standard attributes are passed to React and element properties and events
     * are updated in componentDidMount/componentDidUpdate.
     *
     */
    render() {
      const { __forwardedRef, ...userProps } = this.props;
      if (this._forwardedRef !== __forwardedRef) {
        this._ref = (value) => {
          if (__forwardedRef !== null) {
            setRef(__forwardedRef, value);
          }
          this._element = value;
          this._forwardedRef = __forwardedRef;
        };
      }
      this._elementProps = {};
      const props = { ref: this._ref };
      for (const [k, v2] of Object.entries(userProps)) {
        if (reservedReactProperties.has(k)) {
          props[k === "className" ? "class" : k] = v2;
          continue;
        }
        if (eventProps.has(k) || k in element.prototype) {
          this._elementProps[k] = v2;
          continue;
        }
        props[k] = v2;
      }
      if (NODE_MODE && createElement.name === "litPatchedCreateElement" && Object.keys(this._elementProps).length) {
        props["_$litProps$"] = this._elementProps;
        return createElement(tag, props);
      }
      props["suppressHydrationWarning"] = true;
      return createElement(tag, props);
    }
  }
  ReactComponent.displayName = displayName !== null && displayName !== void 0 ? displayName : element.name;
  const ForwardedComponent = React25.forwardRef((props, __forwardedRef) => createElement(ReactComponent, { ...props, __forwardedRef }, props === null || props === void 0 ? void 0 : props.children));
  ForwardedComponent.displayName = ReactComponent.displayName;
  return ForwardedComponent;
}

// node_modules/@arc-web/components/dist/components/accessibility/react.js
var import_react2 = __toESM(require_react());
var ArcAccessibility2 = createComponent({
  tagName: "arc-accessibility",
  elementClass: ArcAccessibility,
  react: import_react2.default,
  events: {
    onArcAccessibilityChange: ARC_EVENTS.accessibilityChange
  }
});

// node_modules/@arc-web/components/dist/components/bottombar/react.js
var import_react4 = __toESM(require_react());
var ArcBottombar2 = createComponent({ tagName: "arc-bottombar", elementClass: ArcBottombar, react: import_react4.default });

// node_modules/@arc-web/components/dist/components/button/react.js
var import_react6 = __toESM(require_react());
var ArcButton2 = createComponent({ tagName: "arc-button", elementClass: ArcButton, react: import_react6.default });

// node_modules/@arc-web/components/dist/components/card/react.js
var import_react8 = __toESM(require_react());
var ArcCard2 = createComponent({
  tagName: "arc-card",
  elementClass: ArcCard,
  react: import_react8.default,
  events: {
    onArcShow: ARC_EVENTS.show,
    onArcAfterShow: ARC_EVENTS.afterShow,
    onArcHide: ARC_EVENTS.hide,
    onArcAfterHide: ARC_EVENTS.afterHide
  }
});

// node_modules/@arc-web/components/dist/components/container/react.js
var import_react10 = __toESM(require_react());
var ArcContainer2 = createComponent({
  tagName: "arc-container",
  elementClass: ArcContainer,
  react: import_react10.default,
  events: {
    onArcAccessibilityChange: ARC_EVENTS.accessibilityChange
  }
});

// node_modules/@arc-web/components/dist/components/drawer/react.js
var import_react12 = __toESM(require_react());
var ArcDrawer2 = createComponent({
  tagName: "arc-container",
  elementClass: ArcDrawer,
  react: import_react12.default,
  events: {
    onArcShow: ARC_EVENTS.show,
    onArcAfterShow: ARC_EVENTS.afterShow,
    onArcHide: ARC_EVENTS.hide,
    onArcAfterHide: ARC_EVENTS.afterHide,
    onArcInitialFocus: ARC_EVENTS.initialFocus,
    onArcRequestClose: ARC_EVENTS.requestClose
  }
});

// node_modules/@arc-web/components/dist/components/dropdown/react.js
var import_react14 = __toESM(require_react());
var ArcDropdown2 = createComponent({
  tagName: "arc-dropdown",
  elementClass: ArcDropdown,
  react: import_react14.default,
  events: {
    onArcShow: ARC_EVENTS.show,
    onArcAfterShow: ARC_EVENTS.afterShow,
    onArcHide: ARC_EVENTS.hide,
    onArcAfterHide: ARC_EVENTS.afterHide
  }
});

// node_modules/@arc-web/components/dist/components/hero/react.js
var import_react16 = __toESM(require_react());

// node_modules/@arc-web/components/dist/components/hero/arc-hero.styles.js
var arc_hero_styles_default = [
  component_styles_default,
  css`
    :host {
      --content-gap: 5rem;
    }

    .hero {
      height: auto;
      padding: var(--arc-spacing-banner) var(--arc-spacing-medium);
      display: grid;
      align-content: start;
      grid-auto-columns: 1fr;
      gap: var(--content-gap);
    }

    .hero--fullscreen {
      height: 100%;
      align-items: center;
    }

    #title,
    #content {
      font-size: var(--arc-font-size-xxxx-large);
      word-break: break-word;
      margin: 0;
    }

    #content {
      padding: 0;
      font-size: var(--arc-font-size-x-large);
    }

    @media (min-width: ${mobileBreakpoint}rem) {
      .hero {
        padding: var(--arc-spacing-banner);
        grid-auto-flow: column;
        align-content: normal;
      }
    }
  `
];

// node_modules/@arc-web/components/dist/components/hero/ArcHero.js
var ArcHero = class extends LitElement {
  constructor() {
    super(...arguments);
    this.fullscreen = false;
  }
  render() {
    const imageStyle = {
      background: `url(${this.background}) no-repeat center center`,
      backgroundSize: "cover"
    };
    return html2`
      <header
        id="main"
        class=${classMap({
      hero: true,
      "hero--fullscreen": this.fullscreen
    })}
        style=${ifDefined(this.background ? styleMap(imageStyle) : void 0)}
        aria-label=${ifDefined(this.title || void 0)}
        aria-labelledby="${ifDefined(this.title ? void 0 : "title")}"
      >
        <div>
          <h1 id="title"><slot name="title">${this.title}</slot></h1>
          <slot name="subtitle">${this.subtitle}</slot>
        </div>
        <h2 id="content"><slot></slot></h2>
      </header>
    `;
  }
};
ArcHero.tag = "arc-hero";
ArcHero.styles = arc_hero_styles_default;
__decorate([
  property({ type: Boolean })
], ArcHero.prototype, "fullscreen", void 0);
__decorate([
  property({ type: String })
], ArcHero.prototype, "title", void 0);
__decorate([
  property({ type: String })
], ArcHero.prototype, "subtitle", void 0);
__decorate([
  property({ type: String })
], ArcHero.prototype, "background", void 0);

// node_modules/@arc-web/components/dist/components/hero/arc-hero.js
customElements.define("arc-hero", ArcHero);

// node_modules/@arc-web/components/dist/components/hero/react.js
var ArcHero2 = createComponent({ tagName: "arc-hero", elementClass: ArcHero, react: import_react16.default });

// node_modules/@arc-web/components/dist/components/icon/react.js
var import_react18 = __toESM(require_react());
var ArcIcon2 = createComponent({ tagName: "arc-icon", elementClass: ArcIcon, react: import_react18.default });

// node_modules/@arc-web/components/dist/components/icon-button/react.js
var import_react20 = __toESM(require_react());
var ArcIconButton2 = createComponent({
  tagName: "arc-icon-button",
  elementClass: ArcIconButton,
  react: import_react20.default
});

// node_modules/@arc-web/components/dist/components/image/react.js
var import_react22 = __toESM(require_react());

// node_modules/@arc-web/components/dist/components/image/arc-image.styles.js
var arc_image_styles_default = [
  component_styles_default,
  css`
    .image {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img,
    .image--has-image #overlay,
    .image--loading #placeholder,
    #loader {
      display: none;
    }

    .image--has-image img {
      width: 100%;
      height: 100%;
      display: block;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      object-fit: cover;
    }

    /* Loading state */
    #overlay {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(var(--arc-grey-020));
    }

    .image--loading #loader {
      --shadow-p: 0.6em 0.6em 0 0.3em currentcolor;
      --shadow-n: -0.6em -0.6em 0 0.3em currentcolor;
      --shadow-pn: 0.6em -0.6em 0 0.3em currentcolor;
      --shadow-np: -0.6em 0.6em 0 0.3em currentcolor;
      width: 0.3em;
      height: 0.3em;
      display: block;
      color: rgb(var(--arc-grey-030));
    }
  `
];

// node_modules/@arc-web/components/dist/components/image/ArcImage.js
var ArcImage = class extends LitElement {
  constructor() {
    super(...arguments);
    this._observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 1]
    };
    this._loadTimer = null;
    this._loading = false;
    this._hasImage = false;
    this.delay = 1e3;
  }
  handleSrcChange() {
    this._attachObserver();
  }
  async handleLoadingChange() {
    if (this._loading) {
      await stopAnimations(this.loader);
      const { keyframes, options } = getAnimation(this.loader, "loader.show");
      await startAnimations(this.loader, keyframes, options);
    } else {
      await stopAnimations(this.loader);
    }
  }
  firstUpdated() {
    this._attachObserver();
  }
  _attachObserver() {
    this._removeObserver();
    this._intersectionObserver = new IntersectionObserver(this._handleIntersection.bind(this), this._observerOptions);
    this._intersectionObserver.observe(this.container);
  }
  _removeObserver() {
    if (!this._intersectionObserver)
      return;
    this._intersectionObserver.disconnect();
  }
  _handleIntersection(entries) {
    entries.forEach(({ intersectionRatio }) => {
      if (intersectionRatio === 0) {
        if (this._loadTimer) {
          clearTimeout(this._loadTimer);
          this._loadTimer = null;
        }
      } else if (intersectionRatio === 1) {
        this._loadTimer = window.setTimeout(this._loadImage.bind(this), this.delay);
      }
    });
  }
  _loadImage() {
    this._loading = true;
    this.image.src = this.src;
    this.image.onload = this._imageResponse.bind(this);
    this.image.onerror = this._imageResponse.bind(this);
  }
  _imageResponse(e2) {
    this._loading = false;
    this._hasImage = e2.type === "load";
    this._removeObserver();
    emit(this, this._hasImage ? ARC_EVENTS.loaded : ARC_EVENTS.error, {
      detail: e2
    });
  }
  handleSize(size) {
    if (size.endsWith("px") || size.endsWith("%")) {
      return size;
    }
    return `${size}px`;
  }
  render() {
    const imageStyles = {
      width: this.width ? this.handleSize(this.width) : void 0,
      height: this.height ? this.handleSize(this.height) : void 0
    };
    return html`
      <div
        id="main"
        class=${classMap({
      image: true,
      "image--has-image": this._hasImage,
      "image--loading": this._loading
    })}
        style=${styleMap(imageStyles)}
      >
        <img id="image" src="" alt=${this.alt} />
        <div id="overlay">
          <div id="loader"></div>
          <svg
            id="placeholder"
            width="100%"
            height="100%"
            viewBox="0 0 360 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M182.36 55L216.446 114.04H148.273L182.36 55Z" fill="rgb(var(--arc-grey-030))" />
            <circle cx="236" cy="55" r="17" fill="rgb(var(--arc-grey-030))" />
            <rect x="122" y="87" width="27" height="27" fill="rgb(var(--arc-grey-030))" />
          </svg>
        </div>
      </div>
    `;
  }
};
ArcImage.tag = "arc-image";
ArcImage.styles = arc_image_styles_default;
__decorate([
  query("#main")
], ArcImage.prototype, "container", void 0);
__decorate([
  query("#image")
], ArcImage.prototype, "image", void 0);
__decorate([
  query("#loader")
], ArcImage.prototype, "loader", void 0);
__decorate([
  state()
], ArcImage.prototype, "_loading", void 0);
__decorate([
  state()
], ArcImage.prototype, "_hasImage", void 0);
__decorate([
  property({ type: String })
], ArcImage.prototype, "src", void 0);
__decorate([
  property({ type: String })
], ArcImage.prototype, "alt", void 0);
__decorate([
  property({
    type: Number,
    converter: (attrValue) => attrValue ? parseDuration(attrValue) : 1e3
  })
], ArcImage.prototype, "delay", void 0);
__decorate([
  property({ type: String })
], ArcImage.prototype, "width", void 0);
__decorate([
  property({ type: String })
], ArcImage.prototype, "height", void 0);
__decorate([
  watch("src", { waitUntilFirstUpdate: true })
], ArcImage.prototype, "handleSrcChange", null);
__decorate([
  watch("_loading", { waitUntilFirstUpdate: true })
], ArcImage.prototype, "handleLoadingChange", null);
setDefaultAnimation("loader.show", {
  keyframes: [
    { boxShadow: "var(--shadow-n), var(--shadow-n), var(--shadow-n), var(--shadow-n)" },
    { boxShadow: "var(--shadow-n), var(--shadow-pn), var(--shadow-pn), var(--shadow-pn)" },
    { boxShadow: "var(--shadow-n), var(--shadow-pn), var(--shadow-p), var(--shadow-p)" },
    { boxShadow: "var(--shadow-n), var(--shadow-pn), var(--shadow-p), var(--shadow-np)" },
    { boxShadow: "var(--shadow-n), var(--shadow-pn), var(--shadow-p), var(--shadow-n)" },
    { boxShadow: "var(--shadow-pn), var(--shadow-pn), var(--shadow-p), var(--shadow-pn)" },
    { boxShadow: "var(--shadow-p), var(--shadow-p), var(--shadow-p), var(--shadow-p)" },
    { boxShadow: "var(--shadow-np), var(--shadow-np), var(--shadow-p), var(--shadow-np)" },
    { boxShadow: "var(--shadow-n), var(--shadow-n), var(--shadow-p), var(--shadow-np)" },
    { boxShadow: "var(--shadow-n), var(--shadow-pn), var(--shadow-p), var(--shadow-np)" },
    { boxShadow: "var(--shadow-n), var(--shadow-p), var(--shadow-p), var(--shadow-np)" },
    { boxShadow: "var(--shadow-n), var(--shadow-np), var(--shadow-np), var(--shadow-np)" },
    { boxShadow: "var(--shadow-n), var(--shadow-n), var(--shadow-n), var(--shadow-n)" }
  ],
  options: {
    duration: 6e3,
    iterations: Infinity
  }
});

// node_modules/@arc-web/components/dist/components/image/arc-image.js
customElements.define("arc-image", ArcImage);

// node_modules/@arc-web/components/dist/components/image/react.js
var ArcImage2 = createComponent({
  tagName: "arc-image",
  elementClass: ArcImage,
  react: import_react22.default,
  events: {
    onArcLoaded: ARC_EVENTS.loaded
  }
});

// node_modules/@arc-web/components/dist/components/menu/react.js
var import_react24 = __toESM(require_react());
var ArcMenu2 = createComponent({
  tagName: "arc-menu",
  elementClass: ArcMenu,
  react: import_react24.default,
  events: {
    onArcSelect: ARC_EVENTS.select
  }
});

// node_modules/@arc-web/components/dist/components/menu-item/react.js
var import_react26 = __toESM(require_react());
var ArcMenuItem2 = createComponent({ tagName: "arc-menu-item", elementClass: ArcMenuItem, react: import_react26.default });

// node_modules/@arc-web/components/dist/components/navbar/react.js
var import_react28 = __toESM(require_react());
var ArcNavbar2 = createComponent({
  tagName: "arc-navbar",
  elementClass: ArcNavbar,
  react: import_react28.default,
  events: {
    onArcShowAccessibility: ARC_EVENTS.showAccessibility
  }
});

// node_modules/@arc-web/components/dist/components/radio/react.js
var import_react30 = __toESM(require_react());
var ArcRadio2 = createComponent({
  tagName: "arc-radio",
  elementClass: ArcRadio,
  react: import_react30.default,
  events: {
    onArcChange: ARC_EVENTS.change
  }
});

// node_modules/@arc-web/components/dist/components/radio-group/react.js
var import_react32 = __toESM(require_react());
var ArcRadioGroup2 = createComponent({
  tagName: "arc-radio-group",
  elementClass: ArcRadioGroup,
  react: import_react32.default
});

// node_modules/@arc-web/components/dist/components/sidebar/react.js
var import_react34 = __toESM(require_react());

// node_modules/@arc-web/components/dist/components/sidebar/arc-sidebar.styles.js
var arc_sidebar_styles_default = [
  component_styles_default,
  css`
    :host {
      --gap-distance: var(--arc-spacing-normal);
      --sidebar-width: clamp(15rem, 30%, 23rem);
      transform: translateX(-1.5rem);
      transition: width 0.5s ease 0s;
      width: 0;
    }

    :host([open]) {
      transform: translateX(0);
      width: var(--sidebar-width);
      overflow: auto;
    }

    /* Open sidebar */
    #main,
    #content {
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    #header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--arc-spacing-small);
      padding-left: var(--arc-spacing-medium);
      user-select: none;
    }

    #header span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    #content ::slotted(*) {
      flex: 1 1 100%;
    }

    #content.gap {
      gap: var(--gap-distance);
    }

    #toggleOpen::part(icon) {
      padding: var(--arc-spacing-normal) 0.25rem var(--arc-spacing-normal) 0.25rem;
      border-radius: 0;
    }

    /* Background */
    ::slotted(*),
    #header,
    #toggleOpen {
      background-color: rgb(var(--arc-container-color));
    }
  `
];

// node_modules/@arc-web/components/dist/components/sidebar/ArcSidebar.js
var ArcSidebar = class extends LitElement {
  constructor() {
    super(...arguments);
    this.open = true;
  }
  async handleOpenChange() {
    if (this.open) {
      emit(this, ARC_EVENTS.show);
      emit(this, ARC_EVENTS.afterShow);
    } else {
      emit(this, ARC_EVENTS.hide);
      emit(this, ARC_EVENTS.afterHide);
    }
  }
  show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, ARC_EVENTS.afterShow);
  }
  hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, ARC_EVENTS.afterHide);
  }
  _handleClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }
  handleSlots(e2) {
    const childNodes = e2.target.assignedElements({ flatten: true });
    if (childNodes.length > 1) {
      this.content.classList.add("gap");
    }
  }
  render() {
    return this.open ? html`
          <aside
            id="main"
            aria-label=${ifDefined(this.label || void 0)}
            aria-labelledby="${ifDefined(this.label ? void 0 : "title")}"
          >
            <div id="header">
              <slot id="title" name="label"><span>${this.label}</span></slot>
              <arc-icon-button
                id="toggleClose"
                name=${ICON_TYPES["arrow-left"]}
                label="Close sidebar"
                @click=${this._handleClick}
              ></arc-icon-button>
            </div>
            <div id="content">
              <slot @slotchange=${this.handleSlots}></slot>
            </div>
          </aside>
        ` : html`
          <arc-icon-button
            id="toggleOpen"
            name=${ICON_TYPES["arrow-right"]}
            label="Open sidebar"
            @click=${this._handleClick}
          ></arc-icon-button>
        `;
  }
};
ArcSidebar.tag = "arc-sidebar";
ArcSidebar.styles = arc_sidebar_styles_default;
__decorate([
  query("#content")
], ArcSidebar.prototype, "content", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcSidebar.prototype, "open", void 0);
__decorate([
  property({ type: String })
], ArcSidebar.prototype, "label", void 0);
__decorate([
  watch("open", { waitUntilFirstUpdate: true })
], ArcSidebar.prototype, "handleOpenChange", null);

// node_modules/@arc-web/components/dist/components/sidebar/arc-sidebar.js
customElements.define("arc-sidebar", ArcSidebar);

// node_modules/@arc-web/components/dist/components/sidebar/react.js
var ArcSidebar2 = createComponent({
  tagName: "arc-sidebar",
  elementClass: ArcSidebar,
  react: import_react34.default,
  events: {
    onArcShow: ARC_EVENTS.show,
    onArcAfterShow: ARC_EVENTS.afterShow,
    onArcHide: ARC_EVENTS.hide,
    onArcAfterHide: ARC_EVENTS.afterHide
  }
});

// node_modules/@arc-web/components/dist/components/spinner/react.js
var import_react36 = __toESM(require_react());
var ArcSpinner2 = createComponent({ tagName: "arc-spinner", elementClass: ArcSpinner, react: import_react36.default });

// node_modules/@arc-web/components/dist/components/sso/react.js
var import_react38 = __toESM(require_react());

// node_modules/lit-html/development/async-directive.js
var DEV_MODE2 = true;
var notifyChildrenConnectedChanged = (parent, isConnected) => {
  var _a, _b;
  const children = parent._$disconnectableChildren;
  if (children === void 0) {
    return false;
  }
  for (const obj of children) {
    (_b = (_a = obj)["_$notifyDirectiveConnectionChanged"]) === null || _b === void 0 ? void 0 : _b.call(_a, isConnected, false);
    notifyChildrenConnectedChanged(obj, isConnected);
  }
  return true;
};
var removeDisconnectableFromParent = (obj) => {
  let parent, children;
  do {
    if ((parent = obj._$parent) === void 0) {
      break;
    }
    children = parent._$disconnectableChildren;
    children.delete(obj);
    obj = parent;
  } while ((children === null || children === void 0 ? void 0 : children.size) === 0);
};
var addDisconnectableToParent = (obj) => {
  for (let parent; parent = obj._$parent; obj = parent) {
    let children = parent._$disconnectableChildren;
    if (children === void 0) {
      parent._$disconnectableChildren = children = /* @__PURE__ */ new Set();
    } else if (children.has(obj)) {
      break;
    }
    children.add(obj);
    installDisconnectAPI(parent);
  }
};
function reparentDisconnectables(newParent) {
  if (this._$disconnectableChildren !== void 0) {
    removeDisconnectableFromParent(this);
    this._$parent = newParent;
    addDisconnectableToParent(this);
  } else {
    this._$parent = newParent;
  }
}
function notifyChildPartConnectedChanged(isConnected, isClearingValue = false, fromPartIndex = 0) {
  const value = this._$committedValue;
  const children = this._$disconnectableChildren;
  if (children === void 0 || children.size === 0) {
    return;
  }
  if (isClearingValue) {
    if (Array.isArray(value)) {
      for (let i2 = fromPartIndex; i2 < value.length; i2++) {
        notifyChildrenConnectedChanged(value[i2], false);
        removeDisconnectableFromParent(value[i2]);
      }
    } else if (value != null) {
      notifyChildrenConnectedChanged(value, false);
      removeDisconnectableFromParent(value);
    }
  } else {
    notifyChildrenConnectedChanged(this, isConnected);
  }
}
var installDisconnectAPI = (obj) => {
  var _a, _b;
  var _c, _d;
  if (obj.type == PartType.CHILD) {
    (_a = (_c = obj)._$notifyConnectionChanged) !== null && _a !== void 0 ? _a : _c._$notifyConnectionChanged = notifyChildPartConnectedChanged;
    (_b = (_d = obj)._$reparentDisconnectables) !== null && _b !== void 0 ? _b : _d._$reparentDisconnectables = reparentDisconnectables;
  }
};
var AsyncDirective = class extends Directive {
  constructor() {
    super(...arguments);
    this._$disconnectableChildren = void 0;
  }
  /**
   * Initialize the part with internal fields
   * @param part
   * @param parent
   * @param attributeIndex
   */
  _$initialize(part, parent, attributeIndex) {
    super._$initialize(part, parent, attributeIndex);
    addDisconnectableToParent(this);
    this.isConnected = part._$isConnected;
  }
  // This property needs to remain unminified.
  /**
   * Called from the core code when a directive is going away from a part (in
   * which case `shouldRemoveFromParent` should be true), and from the
   * `setChildrenConnected` helper function when recursively changing the
   * connection state of a tree (in which case `shouldRemoveFromParent` should
   * be false).
   *
   * @param isConnected
   * @param isClearingDirective - True when the directive itself is being
   *     removed; false when the tree is being disconnected
   * @internal
   */
  ["_$notifyDirectiveConnectionChanged"](isConnected, isClearingDirective = true) {
    var _a, _b;
    if (isConnected !== this.isConnected) {
      this.isConnected = isConnected;
      if (isConnected) {
        (_a = this.reconnected) === null || _a === void 0 ? void 0 : _a.call(this);
      } else {
        (_b = this.disconnected) === null || _b === void 0 ? void 0 : _b.call(this);
      }
    }
    if (isClearingDirective) {
      notifyChildrenConnectedChanged(this, isConnected);
      removeDisconnectableFromParent(this);
    }
  }
  /**
   * Sets the value of the directive's Part outside the normal `update`/`render`
   * lifecycle of a directive.
   *
   * This method should not be called synchronously from a directive's `update`
   * or `render`.
   *
   * @param directive The directive to update
   * @param value The value to set
   */
  setValue(value) {
    if (isSingleExpression(this.__part)) {
      this.__part._$setValue(value, this);
    } else {
      if (DEV_MODE2 && this.__attributeIndex === void 0) {
        throw new Error(`Expected this.__attributeIndex to be a number`);
      }
      const newValues = [...this.__part._$committedValue];
      newValues[this.__attributeIndex] = value;
      this.__part._$setValue(newValues, this, 0);
    }
  }
  /**
   * User callbacks for implementing logic to release any resources/subscriptions
   * that may have been retained by this directive. Since directives may also be
   * re-connected, `reconnected` should also be implemented to restore the
   * working state of the directive prior to the next render.
   */
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/lit-html/development/directives/private-async-helpers.js
var PseudoWeakRef = class {
  constructor(ref) {
    this._ref = ref;
  }
  /**
   * Disassociates the ref with the backing instance.
   */
  disconnect() {
    this._ref = void 0;
  }
  /**
   * Reassociates the ref with the backing instance.
   */
  reconnect(ref) {
    this._ref = ref;
  }
  /**
   * Retrieves the backing instance (will be undefined when disconnected)
   */
  deref() {
    return this._ref;
  }
};
var Pauser = class {
  constructor() {
    this._promise = void 0;
    this._resolve = void 0;
  }
  /**
   * When paused, returns a promise to be awaited; when unpaused, returns
   * undefined. Note that in the microtask between the pauser being resumed
   * an an await of this promise resolving, the pauser could be paused again,
   * hence callers should check the promise in a loop when awaiting.
   * @returns A promise to be awaited when paused or undefined
   */
  get() {
    return this._promise;
  }
  /**
   * Creates a promise to be awaited
   */
  pause() {
    var _a;
    (_a = this._promise) !== null && _a !== void 0 ? _a : this._promise = new Promise((resolve) => this._resolve = resolve);
  }
  /**
   * Resolves the promise which may be awaited
   */
  resume() {
    var _a;
    (_a = this._resolve) === null || _a === void 0 ? void 0 : _a.call(this);
    this._promise = this._resolve = void 0;
  }
};

// node_modules/lit-html/development/directives/until.js
var isPromise = (x2) => {
  return !isPrimitive(x2) && typeof x2.then === "function";
};
var _infinity = 1073741823;
var UntilDirective = class extends AsyncDirective {
  constructor() {
    super(...arguments);
    this.__lastRenderedIndex = _infinity;
    this.__values = [];
    this.__weakThis = new PseudoWeakRef(this);
    this.__pauser = new Pauser();
  }
  render(...args) {
    var _a;
    return (_a = args.find((x2) => !isPromise(x2))) !== null && _a !== void 0 ? _a : noChange;
  }
  update(_part, args) {
    const previousValues = this.__values;
    let previousLength = previousValues.length;
    this.__values = args;
    const weakThis = this.__weakThis;
    const pauser = this.__pauser;
    if (!this.isConnected) {
      this.disconnected();
    }
    for (let i2 = 0; i2 < args.length; i2++) {
      if (i2 > this.__lastRenderedIndex) {
        break;
      }
      const value = args[i2];
      if (!isPromise(value)) {
        this.__lastRenderedIndex = i2;
        return value;
      }
      if (i2 < previousLength && value === previousValues[i2]) {
        continue;
      }
      this.__lastRenderedIndex = _infinity;
      previousLength = 0;
      Promise.resolve(value).then(async (result) => {
        while (pauser.get()) {
          await pauser.get();
        }
        const _this = weakThis.deref();
        if (_this !== void 0) {
          const index = _this.__values.indexOf(value);
          if (index > -1 && index < _this.__lastRenderedIndex) {
            _this.__lastRenderedIndex = index;
            _this.setValue(result);
          }
        }
      });
    }
    return noChange;
  }
  disconnected() {
    this.__weakThis.disconnect();
    this.__pauser.pause();
  }
  reconnected() {
    this.__weakThis.reconnect(this);
    this.__pauser.resume();
  }
};
var until = directive(UntilDirective);

// node_modules/@azure/msal-browser/dist/_virtual/_tslib.js
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign3(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s2, e2) {
  var t2 = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __read(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i2 = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i2["return"]))
        m2.call(i2);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
    ar = ar.concat(__read(arguments[i2]));
  return ar;
}

// node_modules/@azure/msal-common/dist/_virtual/_tslib.js
var extendStatics2 = function(d2, b2) {
  extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d3[p2] = b3[p2];
  };
  return extendStatics2(d2, b2);
};
function __extends2(d2, b2) {
  extendStatics2(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign2 = function() {
  __assign2 = Object.assign || function __assign3(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign2.apply(this, arguments);
};
function __awaiter2(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator2(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArrays() {
  for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
    s2 += arguments[i2].length;
  for (var r2 = Array(s2), k = 0, i2 = 0; i2 < il; i2++)
    for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k++)
      r2[k] = a2[j2];
  return r2;
}

// node_modules/@azure/msal-common/dist/utils/Constants.js
var Constants = {
  LIBRARY_NAME: "MSAL.JS",
  SKU: "msal.js.common",
  // Prefix for all library cache entries
  CACHE_PREFIX: "msal",
  // default authority
  DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
  DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
  DEFAULT_COMMON_TENANT: "common",
  // ADFS String
  ADFS: "adfs",
  DSTS: "dstsv2",
  // Default AAD Instance Discovery Endpoint
  AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
  // CIAM URL
  CIAM_AUTH_URL: ".ciamlogin.com",
  AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com",
  // Resource delimiter - used for certain cache entries
  RESOURCE_DELIM: "|",
  // Placeholder for non-existent account ids/objects
  NO_ACCOUNT: "NO_ACCOUNT",
  // Claims
  CLAIMS: "claims",
  // Consumer UTID
  CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
  // Default scopes
  OPENID_SCOPE: "openid",
  PROFILE_SCOPE: "profile",
  OFFLINE_ACCESS_SCOPE: "offline_access",
  EMAIL_SCOPE: "email",
  // Default response type for authorization code flow
  CODE_RESPONSE_TYPE: "code",
  CODE_GRANT_TYPE: "authorization_code",
  RT_GRANT_TYPE: "refresh_token",
  FRAGMENT_RESPONSE_MODE: "fragment",
  S256_CODE_CHALLENGE_METHOD: "S256",
  URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
  AUTHORIZATION_PENDING: "authorization_pending",
  NOT_DEFINED: "not_defined",
  EMPTY_STRING: "",
  NOT_APPLICABLE: "N/A",
  FORWARD_SLASH: "/",
  IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
  IMDS_VERSION: "2020-06-01",
  IMDS_TIMEOUT: 2e3,
  AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
  REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
  REGIONAL_AUTH_NON_MSI_QUERY_STRING: "allowestsrnonmsi=true",
  KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"],
  TOKEN_RESPONSE_TYPE: "token",
  ID_TOKEN_RESPONSE_TYPE: "id_token",
  SHR_NONCE_VALIDITY: 240,
  INVALID_INSTANCE: "invalid_instance"
};
var OIDC_DEFAULT_SCOPES = [
  Constants.OPENID_SCOPE,
  Constants.PROFILE_SCOPE,
  Constants.OFFLINE_ACCESS_SCOPE
];
var OIDC_SCOPES = __spreadArrays(OIDC_DEFAULT_SCOPES, [
  Constants.EMAIL_SCOPE
]);
var HeaderNames;
(function(HeaderNames2) {
  HeaderNames2["CONTENT_TYPE"] = "Content-Type";
  HeaderNames2["RETRY_AFTER"] = "Retry-After";
  HeaderNames2["CCS_HEADER"] = "X-AnchorMailbox";
  HeaderNames2["WWWAuthenticate"] = "WWW-Authenticate";
  HeaderNames2["AuthenticationInfo"] = "Authentication-Info";
  HeaderNames2["X_MS_REQUEST_ID"] = "x-ms-request-id";
  HeaderNames2["X_MS_HTTP_VERSION"] = "x-ms-httpver";
})(HeaderNames || (HeaderNames = {}));
var PersistentCacheKeys;
(function(PersistentCacheKeys2) {
  PersistentCacheKeys2["ID_TOKEN"] = "idtoken";
  PersistentCacheKeys2["CLIENT_INFO"] = "client.info";
  PersistentCacheKeys2["ADAL_ID_TOKEN"] = "adal.idtoken";
  PersistentCacheKeys2["ERROR"] = "error";
  PersistentCacheKeys2["ERROR_DESC"] = "error.description";
  PersistentCacheKeys2["ACTIVE_ACCOUNT"] = "active-account";
  PersistentCacheKeys2["ACTIVE_ACCOUNT_FILTERS"] = "active-account-filters";
})(PersistentCacheKeys || (PersistentCacheKeys = {}));
var AADAuthorityConstants;
(function(AADAuthorityConstants2) {
  AADAuthorityConstants2["COMMON"] = "common";
  AADAuthorityConstants2["ORGANIZATIONS"] = "organizations";
  AADAuthorityConstants2["CONSUMERS"] = "consumers";
})(AADAuthorityConstants || (AADAuthorityConstants = {}));
var AADServerParamKeys;
(function(AADServerParamKeys2) {
  AADServerParamKeys2["CLIENT_ID"] = "client_id";
  AADServerParamKeys2["REDIRECT_URI"] = "redirect_uri";
  AADServerParamKeys2["RESPONSE_TYPE"] = "response_type";
  AADServerParamKeys2["RESPONSE_MODE"] = "response_mode";
  AADServerParamKeys2["GRANT_TYPE"] = "grant_type";
  AADServerParamKeys2["CLAIMS"] = "claims";
  AADServerParamKeys2["SCOPE"] = "scope";
  AADServerParamKeys2["ERROR"] = "error";
  AADServerParamKeys2["ERROR_DESCRIPTION"] = "error_description";
  AADServerParamKeys2["ACCESS_TOKEN"] = "access_token";
  AADServerParamKeys2["ID_TOKEN"] = "id_token";
  AADServerParamKeys2["REFRESH_TOKEN"] = "refresh_token";
  AADServerParamKeys2["EXPIRES_IN"] = "expires_in";
  AADServerParamKeys2["STATE"] = "state";
  AADServerParamKeys2["NONCE"] = "nonce";
  AADServerParamKeys2["PROMPT"] = "prompt";
  AADServerParamKeys2["SESSION_STATE"] = "session_state";
  AADServerParamKeys2["CLIENT_INFO"] = "client_info";
  AADServerParamKeys2["CODE"] = "code";
  AADServerParamKeys2["CODE_CHALLENGE"] = "code_challenge";
  AADServerParamKeys2["CODE_CHALLENGE_METHOD"] = "code_challenge_method";
  AADServerParamKeys2["CODE_VERIFIER"] = "code_verifier";
  AADServerParamKeys2["CLIENT_REQUEST_ID"] = "client-request-id";
  AADServerParamKeys2["X_CLIENT_SKU"] = "x-client-SKU";
  AADServerParamKeys2["X_CLIENT_VER"] = "x-client-VER";
  AADServerParamKeys2["X_CLIENT_OS"] = "x-client-OS";
  AADServerParamKeys2["X_CLIENT_CPU"] = "x-client-CPU";
  AADServerParamKeys2["X_CLIENT_CURR_TELEM"] = "x-client-current-telemetry";
  AADServerParamKeys2["X_CLIENT_LAST_TELEM"] = "x-client-last-telemetry";
  AADServerParamKeys2["X_MS_LIB_CAPABILITY"] = "x-ms-lib-capability";
  AADServerParamKeys2["X_APP_NAME"] = "x-app-name";
  AADServerParamKeys2["X_APP_VER"] = "x-app-ver";
  AADServerParamKeys2["POST_LOGOUT_URI"] = "post_logout_redirect_uri";
  AADServerParamKeys2["ID_TOKEN_HINT"] = "id_token_hint";
  AADServerParamKeys2["DEVICE_CODE"] = "device_code";
  AADServerParamKeys2["CLIENT_SECRET"] = "client_secret";
  AADServerParamKeys2["CLIENT_ASSERTION"] = "client_assertion";
  AADServerParamKeys2["CLIENT_ASSERTION_TYPE"] = "client_assertion_type";
  AADServerParamKeys2["TOKEN_TYPE"] = "token_type";
  AADServerParamKeys2["REQ_CNF"] = "req_cnf";
  AADServerParamKeys2["OBO_ASSERTION"] = "assertion";
  AADServerParamKeys2["REQUESTED_TOKEN_USE"] = "requested_token_use";
  AADServerParamKeys2["ON_BEHALF_OF"] = "on_behalf_of";
  AADServerParamKeys2["FOCI"] = "foci";
  AADServerParamKeys2["CCS_HEADER"] = "X-AnchorMailbox";
  AADServerParamKeys2["RETURN_SPA_CODE"] = "return_spa_code";
  AADServerParamKeys2["NATIVE_BROKER"] = "nativebroker";
  AADServerParamKeys2["LOGOUT_HINT"] = "logout_hint";
})(AADServerParamKeys || (AADServerParamKeys = {}));
var ClaimsRequestKeys;
(function(ClaimsRequestKeys2) {
  ClaimsRequestKeys2["ACCESS_TOKEN"] = "access_token";
  ClaimsRequestKeys2["XMS_CC"] = "xms_cc";
})(ClaimsRequestKeys || (ClaimsRequestKeys = {}));
var PromptValue = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
};
var SSOTypes;
(function(SSOTypes2) {
  SSOTypes2["ACCOUNT"] = "account";
  SSOTypes2["SID"] = "sid";
  SSOTypes2["LOGIN_HINT"] = "login_hint";
  SSOTypes2["ID_TOKEN"] = "id_token";
  SSOTypes2["DOMAIN_HINT"] = "domain_hint";
  SSOTypes2["ORGANIZATIONS"] = "organizations";
  SSOTypes2["CONSUMERS"] = "consumers";
  SSOTypes2["ACCOUNT_ID"] = "accountIdentifier";
  SSOTypes2["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
})(SSOTypes || (SSOTypes = {}));
var CodeChallengeMethodValues = {
  PLAIN: "plain",
  S256: "S256"
};
var ResponseMode;
(function(ResponseMode2) {
  ResponseMode2["QUERY"] = "query";
  ResponseMode2["FRAGMENT"] = "fragment";
  ResponseMode2["FORM_POST"] = "form_post";
})(ResponseMode || (ResponseMode = {}));
var GrantType;
(function(GrantType2) {
  GrantType2["IMPLICIT_GRANT"] = "implicit";
  GrantType2["AUTHORIZATION_CODE_GRANT"] = "authorization_code";
  GrantType2["CLIENT_CREDENTIALS_GRANT"] = "client_credentials";
  GrantType2["RESOURCE_OWNER_PASSWORD_GRANT"] = "password";
  GrantType2["REFRESH_TOKEN_GRANT"] = "refresh_token";
  GrantType2["DEVICE_CODE_GRANT"] = "device_code";
  GrantType2["JWT_BEARER"] = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(GrantType || (GrantType = {}));
var CacheAccountType;
(function(CacheAccountType2) {
  CacheAccountType2["MSSTS_ACCOUNT_TYPE"] = "MSSTS";
  CacheAccountType2["ADFS_ACCOUNT_TYPE"] = "ADFS";
  CacheAccountType2["MSAV1_ACCOUNT_TYPE"] = "MSA";
  CacheAccountType2["GENERIC_ACCOUNT_TYPE"] = "Generic";
})(CacheAccountType || (CacheAccountType = {}));
var Separators;
(function(Separators2) {
  Separators2["CACHE_KEY_SEPARATOR"] = "-";
  Separators2["CLIENT_INFO_SEPARATOR"] = ".";
})(Separators || (Separators = {}));
var CredentialType;
(function(CredentialType2) {
  CredentialType2["ID_TOKEN"] = "IdToken";
  CredentialType2["ACCESS_TOKEN"] = "AccessToken";
  CredentialType2["ACCESS_TOKEN_WITH_AUTH_SCHEME"] = "AccessToken_With_AuthScheme";
  CredentialType2["REFRESH_TOKEN"] = "RefreshToken";
})(CredentialType || (CredentialType = {}));
var CacheType;
(function(CacheType2) {
  CacheType2[CacheType2["ADFS"] = 1001] = "ADFS";
  CacheType2[CacheType2["MSA"] = 1002] = "MSA";
  CacheType2[CacheType2["MSSTS"] = 1003] = "MSSTS";
  CacheType2[CacheType2["GENERIC"] = 1004] = "GENERIC";
  CacheType2[CacheType2["ACCESS_TOKEN"] = 2001] = "ACCESS_TOKEN";
  CacheType2[CacheType2["REFRESH_TOKEN"] = 2002] = "REFRESH_TOKEN";
  CacheType2[CacheType2["ID_TOKEN"] = 2003] = "ID_TOKEN";
  CacheType2[CacheType2["APP_METADATA"] = 3001] = "APP_METADATA";
  CacheType2[CacheType2["UNDEFINED"] = 9999] = "UNDEFINED";
})(CacheType || (CacheType = {}));
var APP_METADATA = "appmetadata";
var CLIENT_INFO = "client_info";
var THE_FAMILY_ID = "1";
var AUTHORITY_METADATA_CONSTANTS = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
  // 24 Hours
};
var AuthorityMetadataSource;
(function(AuthorityMetadataSource2) {
  AuthorityMetadataSource2["CONFIG"] = "config";
  AuthorityMetadataSource2["CACHE"] = "cache";
  AuthorityMetadataSource2["NETWORK"] = "network";
  AuthorityMetadataSource2["HARDCODED_VALUES"] = "hardcoded_values";
})(AuthorityMetadataSource || (AuthorityMetadataSource = {}));
var SERVER_TELEM_CONSTANTS = {
  SCHEMA_VERSION: 5,
  MAX_CUR_HEADER_BYTES: 80,
  MAX_LAST_HEADER_BYTES: 330,
  MAX_CACHED_ERRORS: 50,
  CACHE_KEY: "server-telemetry",
  CATEGORY_SEPARATOR: "|",
  VALUE_SEPARATOR: ",",
  OVERFLOW_TRUE: "1",
  OVERFLOW_FALSE: "0",
  UNKNOWN_ERROR: "unknown_error"
};
var AuthenticationScheme;
(function(AuthenticationScheme2) {
  AuthenticationScheme2["BEARER"] = "Bearer";
  AuthenticationScheme2["POP"] = "pop";
  AuthenticationScheme2["SSH"] = "ssh-cert";
})(AuthenticationScheme || (AuthenticationScheme = {}));
var ThrottlingConstants = {
  // Default time to throttle RequestThumbprint in seconds
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  // Default maximum time to throttle in seconds, overrides what the server sends back
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  // Prefix for storing throttling entries
  THROTTLING_PREFIX: "throttling",
  // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
};
var Errors = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
};
var PasswordGrantConstants;
(function(PasswordGrantConstants2) {
  PasswordGrantConstants2["username"] = "username";
  PasswordGrantConstants2["password"] = "password";
})(PasswordGrantConstants || (PasswordGrantConstants = {}));
var ResponseCodes;
(function(ResponseCodes2) {
  ResponseCodes2[ResponseCodes2["httpSuccess"] = 200] = "httpSuccess";
  ResponseCodes2[ResponseCodes2["httpBadRequest"] = 400] = "httpBadRequest";
})(ResponseCodes || (ResponseCodes = {}));
var RegionDiscoverySources;
(function(RegionDiscoverySources2) {
  RegionDiscoverySources2["FAILED_AUTO_DETECTION"] = "1";
  RegionDiscoverySources2["INTERNAL_CACHE"] = "2";
  RegionDiscoverySources2["ENVIRONMENT_VARIABLE"] = "3";
  RegionDiscoverySources2["IMDS"] = "4";
})(RegionDiscoverySources || (RegionDiscoverySources = {}));
var RegionDiscoveryOutcomes;
(function(RegionDiscoveryOutcomes2) {
  RegionDiscoveryOutcomes2["CONFIGURED_MATCHES_DETECTED"] = "1";
  RegionDiscoveryOutcomes2["CONFIGURED_NO_AUTO_DETECTION"] = "2";
  RegionDiscoveryOutcomes2["CONFIGURED_NOT_DETECTED"] = "3";
  RegionDiscoveryOutcomes2["AUTO_DETECTION_REQUESTED_SUCCESSFUL"] = "4";
  RegionDiscoveryOutcomes2["AUTO_DETECTION_REQUESTED_FAILED"] = "5";
})(RegionDiscoveryOutcomes || (RegionDiscoveryOutcomes = {}));
var CacheOutcome;
(function(CacheOutcome2) {
  CacheOutcome2["NO_CACHE_HIT"] = "0";
  CacheOutcome2["FORCE_REFRESH"] = "1";
  CacheOutcome2["NO_CACHED_ACCESS_TOKEN"] = "2";
  CacheOutcome2["CACHED_ACCESS_TOKEN_EXPIRED"] = "3";
  CacheOutcome2["REFRESH_CACHED_ACCESS_TOKEN"] = "4";
})(CacheOutcome || (CacheOutcome = {}));
var JsonTypes;
(function(JsonTypes2) {
  JsonTypes2["Jwt"] = "JWT";
  JsonTypes2["Jwk"] = "JWK";
  JsonTypes2["Pop"] = "pop";
})(JsonTypes || (JsonTypes = {}));

// node_modules/@azure/msal-common/dist/error/AuthError.js
var AuthErrorMessage = {
  unexpectedError: {
    code: "unexpected_error",
    desc: "Unexpected error in authentication."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  }
};
var AuthError = (
  /** @class */
  function(_super) {
    __extends2(AuthError2, _super);
    function AuthError2(errorCode, errorMessage, suberror) {
      var _this = this;
      var errorString = errorMessage ? errorCode + ": " + errorMessage : errorCode;
      _this = _super.call(this, errorString) || this;
      Object.setPrototypeOf(_this, AuthError2.prototype);
      _this.errorCode = errorCode || Constants.EMPTY_STRING;
      _this.errorMessage = errorMessage || Constants.EMPTY_STRING;
      _this.subError = suberror || Constants.EMPTY_STRING;
      _this.name = "AuthError";
      return _this;
    }
    AuthError2.prototype.setCorrelationId = function(correlationId) {
      this.correlationId = correlationId;
    };
    AuthError2.createUnexpectedError = function(errDesc) {
      return new AuthError2(AuthErrorMessage.unexpectedError.code, AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    AuthError2.createPostRequestFailed = function(errDesc) {
      return new AuthError2(AuthErrorMessage.postRequestFailed.code, AuthErrorMessage.postRequestFailed.desc + ": " + errDesc);
    };
    return AuthError2;
  }(Error)
);

// node_modules/@azure/msal-common/dist/crypto/ICrypto.js
var DEFAULT_CRYPTO_IMPLEMENTATION = {
  createNewGuid: function() {
    var notImplErr = "Crypto interface - createNewGuid() has not been implemented";
    throw AuthError.createUnexpectedError(notImplErr);
  },
  base64Decode: function() {
    var notImplErr = "Crypto interface - base64Decode() has not been implemented";
    throw AuthError.createUnexpectedError(notImplErr);
  },
  base64Encode: function() {
    var notImplErr = "Crypto interface - base64Encode() has not been implemented";
    throw AuthError.createUnexpectedError(notImplErr);
  },
  generatePkceCodes: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Crypto interface - generatePkceCodes() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  },
  getPublicKeyThumbprint: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Crypto interface - getPublicKeyThumbprint() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  },
  removeTokenBindingKey: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Crypto interface - removeTokenBindingKey() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  },
  clearKeystore: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Crypto interface - clearKeystore() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  },
  signJwt: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Crypto interface - signJwt() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  },
  hashString: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Crypto interface - hashString() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  }
};

// node_modules/@azure/msal-common/dist/error/ClientAuthError.js
var ClientAuthErrorMessage = {
  clientInfoDecodingError: {
    code: "client_info_decoding_error",
    desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
  },
  clientInfoEmptyError: {
    code: "client_info_empty_error",
    desc: "The client info was empty. Please review the trace to determine the root cause."
  },
  tokenParsingError: {
    code: "token_parsing_error",
    desc: "Token cannot be parsed. Please review stack trace to determine root cause."
  },
  nullOrEmptyToken: {
    code: "null_or_empty_token",
    desc: "The token is null or empty. Please review the trace to determine the root cause."
  },
  endpointResolutionError: {
    code: "endpoints_resolution_error",
    desc: "Error: could not resolve endpoints. Please check network and try again."
  },
  networkError: {
    code: "network_error",
    desc: "Network request failed. Please check network trace to determine root cause."
  },
  unableToGetOpenidConfigError: {
    code: "openid_config_error",
    desc: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints."
  },
  hashNotDeserialized: {
    code: "hash_not_deserialized",
    desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause."
  },
  blankGuidGenerated: {
    code: "blank_guid_generated",
    desc: "The guid generated was blank. Please review the trace to determine the root cause."
  },
  invalidStateError: {
    code: "invalid_state",
    desc: "State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState()."
  },
  stateMismatchError: {
    code: "state_mismatch",
    desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow."
  },
  stateNotFoundError: {
    code: "state_not_found",
    desc: "State not found"
  },
  nonceMismatchError: {
    code: "nonce_mismatch",
    desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests."
  },
  nonceNotFoundError: {
    code: "nonce_not_found",
    desc: "nonce not found"
  },
  authTimeNotFoundError: {
    code: "auth_time_not_found",
    desc: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information."
  },
  maxAgeTranspiredError: {
    code: "max_age_transpired",
    desc: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication."
  },
  noTokensFoundError: {
    code: "no_tokens_found",
    desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()."
  },
  multipleMatchingTokens: {
    code: "multiple_matching_tokens",
    desc: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account."
  },
  multipleMatchingAccounts: {
    code: "multiple_matching_accounts",
    desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account"
  },
  multipleMatchingAppMetadata: {
    code: "multiple_matching_appMetadata",
    desc: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata"
  },
  tokenRequestCannotBeMade: {
    code: "request_cannot_be_made",
    desc: "Token request cannot be made without authorization code or refresh token."
  },
  appendEmptyScopeError: {
    code: "cannot_append_empty_scope",
    desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info."
  },
  removeEmptyScopeError: {
    code: "cannot_remove_empty_scope",
    desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info."
  },
  appendScopeSetError: {
    code: "cannot_append_scopeset",
    desc: "Cannot append ScopeSet due to error."
  },
  emptyInputScopeSetError: {
    code: "empty_input_scopeset",
    desc: "Empty input ScopeSet cannot be processed."
  },
  DeviceCodePollingCancelled: {
    code: "device_code_polling_cancelled",
    desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true."
  },
  DeviceCodeExpired: {
    code: "device_code_expired",
    desc: "Device code is expired."
  },
  DeviceCodeUnknownError: {
    code: "device_code_unknown_error",
    desc: "Device code stopped polling for unknown reasons."
  },
  NoAccountInSilentRequest: {
    code: "no_account_in_silent_request",
    desc: "Please pass an account object, silent flow is not supported without account information"
  },
  invalidCacheRecord: {
    code: "invalid_cache_record",
    desc: "Cache record object was null or undefined."
  },
  invalidCacheEnvironment: {
    code: "invalid_cache_environment",
    desc: "Invalid environment when attempting to create cache entry"
  },
  noAccountFound: {
    code: "no_account_found",
    desc: "No account found in cache for given key."
  },
  CachePluginError: {
    code: "no cache plugin set on CacheManager",
    desc: "ICachePlugin needs to be set before using readFromStorage or writeFromStorage"
  },
  noCryptoObj: {
    code: "no_crypto_object",
    desc: "No crypto object detected. This is required for the following operation: "
  },
  invalidCacheType: {
    code: "invalid_cache_type",
    desc: "Invalid cache type"
  },
  unexpectedAccountType: {
    code: "unexpected_account_type",
    desc: "Unexpected account type."
  },
  unexpectedCredentialType: {
    code: "unexpected_credential_type",
    desc: "Unexpected credential type."
  },
  invalidAssertion: {
    code: "invalid_assertion",
    desc: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515"
  },
  invalidClientCredential: {
    code: "invalid_client_credential",
    desc: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential"
  },
  tokenRefreshRequired: {
    code: "token_refresh_required",
    desc: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired."
  },
  userTimeoutReached: {
    code: "user_timeout_reached",
    desc: "User defined timeout for device code polling reached"
  },
  tokenClaimsRequired: {
    code: "token_claims_cnf_required_for_signedjwt",
    desc: "Cannot generate a POP jwt if the token_claims are not populated"
  },
  noAuthorizationCodeFromServer: {
    code: "authorization_code_missing_from_server_response",
    desc: "Server response does not contain an authorization code to proceed"
  },
  noAzureRegionDetected: {
    code: "no_azure_region_detected",
    desc: "No azure region was detected and no fallback was made available"
  },
  accessTokenEntityNullError: {
    code: "access_token_entity_null",
    desc: "Access token entity is null, please check logs and cache to ensure a valid access token is present."
  },
  bindingKeyNotRemovedError: {
    code: "binding_key_not_removed",
    desc: "Could not remove the credential's binding key from storage."
  },
  logoutNotSupported: {
    code: "end_session_endpoint_not_supported",
    desc: "Provided authority does not support logout."
  },
  keyIdMissing: {
    code: "key_id_missing",
    desc: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key."
  },
  noNetworkConnectivity: {
    code: "no_network_connectivity",
    desc: "No network connectivity. Check your internet connection."
  },
  userCanceledError: {
    code: "user_canceled",
    desc: "User canceled the flow."
  }
};
var ClientAuthError = (
  /** @class */
  function(_super) {
    __extends2(ClientAuthError2, _super);
    function ClientAuthError2(errorCode, errorMessage) {
      var _this = _super.call(this, errorCode, errorMessage) || this;
      _this.name = "ClientAuthError";
      Object.setPrototypeOf(_this, ClientAuthError2.prototype);
      return _this;
    }
    ClientAuthError2.createClientInfoDecodingError = function(caughtError) {
      return new ClientAuthError2(ClientAuthErrorMessage.clientInfoDecodingError.code, ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError2.createClientInfoEmptyError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.clientInfoEmptyError.code, "" + ClientAuthErrorMessage.clientInfoEmptyError.desc);
    };
    ClientAuthError2.createTokenParsingError = function(caughtExtractionError) {
      return new ClientAuthError2(ClientAuthErrorMessage.tokenParsingError.code, ClientAuthErrorMessage.tokenParsingError.desc + " Failed with error: " + caughtExtractionError);
    };
    ClientAuthError2.createTokenNullOrEmptyError = function(invalidRawTokenString) {
      return new ClientAuthError2(ClientAuthErrorMessage.nullOrEmptyToken.code, ClientAuthErrorMessage.nullOrEmptyToken.desc + " Raw Token Value: " + invalidRawTokenString);
    };
    ClientAuthError2.createEndpointDiscoveryIncompleteError = function(errDetail) {
      return new ClientAuthError2(ClientAuthErrorMessage.endpointResolutionError.code, ClientAuthErrorMessage.endpointResolutionError.desc + " Detail: " + errDetail);
    };
    ClientAuthError2.createNetworkError = function(endpoint, errDetail) {
      return new ClientAuthError2(ClientAuthErrorMessage.networkError.code, ClientAuthErrorMessage.networkError.desc + " | Fetch client threw: " + errDetail + " | Attempted to reach: " + endpoint.split("?")[0]);
    };
    ClientAuthError2.createUnableToGetOpenidConfigError = function(errDetail) {
      return new ClientAuthError2(ClientAuthErrorMessage.unableToGetOpenidConfigError.code, ClientAuthErrorMessage.unableToGetOpenidConfigError.desc + " Attempted to retrieve endpoints from: " + errDetail);
    };
    ClientAuthError2.createHashNotDeserializedError = function(hashParamObj) {
      return new ClientAuthError2(ClientAuthErrorMessage.hashNotDeserialized.code, ClientAuthErrorMessage.hashNotDeserialized.desc + " Given Object: " + hashParamObj);
    };
    ClientAuthError2.createInvalidStateError = function(invalidState, errorString) {
      return new ClientAuthError2(ClientAuthErrorMessage.invalidStateError.code, ClientAuthErrorMessage.invalidStateError.desc + " Invalid State: " + invalidState + ", Root Err: " + errorString);
    };
    ClientAuthError2.createStateMismatchError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.stateMismatchError.code, ClientAuthErrorMessage.stateMismatchError.desc);
    };
    ClientAuthError2.createStateNotFoundError = function(missingState) {
      return new ClientAuthError2(ClientAuthErrorMessage.stateNotFoundError.code, ClientAuthErrorMessage.stateNotFoundError.desc + ":  " + missingState);
    };
    ClientAuthError2.createNonceMismatchError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.nonceMismatchError.code, ClientAuthErrorMessage.nonceMismatchError.desc);
    };
    ClientAuthError2.createAuthTimeNotFoundError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.authTimeNotFoundError.code, ClientAuthErrorMessage.authTimeNotFoundError.desc);
    };
    ClientAuthError2.createMaxAgeTranspiredError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.maxAgeTranspiredError.code, ClientAuthErrorMessage.maxAgeTranspiredError.desc);
    };
    ClientAuthError2.createNonceNotFoundError = function(missingNonce) {
      return new ClientAuthError2(ClientAuthErrorMessage.nonceNotFoundError.code, ClientAuthErrorMessage.nonceNotFoundError.desc + ":  " + missingNonce);
    };
    ClientAuthError2.createMultipleMatchingTokensInCacheError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.multipleMatchingTokens.code, ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
    };
    ClientAuthError2.createMultipleMatchingAccountsInCacheError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.multipleMatchingAccounts.code, ClientAuthErrorMessage.multipleMatchingAccounts.desc);
    };
    ClientAuthError2.createMultipleMatchingAppMetadataInCacheError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.multipleMatchingAppMetadata.code, ClientAuthErrorMessage.multipleMatchingAppMetadata.desc);
    };
    ClientAuthError2.createTokenRequestCannotBeMadeError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.tokenRequestCannotBeMade.code, ClientAuthErrorMessage.tokenRequestCannotBeMade.desc);
    };
    ClientAuthError2.createAppendEmptyScopeToSetError = function(givenScope) {
      return new ClientAuthError2(ClientAuthErrorMessage.appendEmptyScopeError.code, ClientAuthErrorMessage.appendEmptyScopeError.desc + " Given Scope: " + givenScope);
    };
    ClientAuthError2.createRemoveEmptyScopeFromSetError = function(givenScope) {
      return new ClientAuthError2(ClientAuthErrorMessage.removeEmptyScopeError.code, ClientAuthErrorMessage.removeEmptyScopeError.desc + " Given Scope: " + givenScope);
    };
    ClientAuthError2.createAppendScopeSetError = function(appendError) {
      return new ClientAuthError2(ClientAuthErrorMessage.appendScopeSetError.code, ClientAuthErrorMessage.appendScopeSetError.desc + " Detail Error: " + appendError);
    };
    ClientAuthError2.createEmptyInputScopeSetError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.emptyInputScopeSetError.code, "" + ClientAuthErrorMessage.emptyInputScopeSetError.desc);
    };
    ClientAuthError2.createDeviceCodeCancelledError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.DeviceCodePollingCancelled.code, "" + ClientAuthErrorMessage.DeviceCodePollingCancelled.desc);
    };
    ClientAuthError2.createDeviceCodeExpiredError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.DeviceCodeExpired.code, "" + ClientAuthErrorMessage.DeviceCodeExpired.desc);
    };
    ClientAuthError2.createDeviceCodeUnknownError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.DeviceCodeUnknownError.code, "" + ClientAuthErrorMessage.DeviceCodeUnknownError.desc);
    };
    ClientAuthError2.createNoAccountInSilentRequestError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.NoAccountInSilentRequest.code, "" + ClientAuthErrorMessage.NoAccountInSilentRequest.desc);
    };
    ClientAuthError2.createNullOrUndefinedCacheRecord = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.invalidCacheRecord.code, ClientAuthErrorMessage.invalidCacheRecord.desc);
    };
    ClientAuthError2.createInvalidCacheEnvironmentError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.invalidCacheEnvironment.code, ClientAuthErrorMessage.invalidCacheEnvironment.desc);
    };
    ClientAuthError2.createNoAccountFoundError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.noAccountFound.code, ClientAuthErrorMessage.noAccountFound.desc);
    };
    ClientAuthError2.createCachePluginError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.CachePluginError.code, "" + ClientAuthErrorMessage.CachePluginError.desc);
    };
    ClientAuthError2.createNoCryptoObjectError = function(operationName) {
      return new ClientAuthError2(ClientAuthErrorMessage.noCryptoObj.code, "" + ClientAuthErrorMessage.noCryptoObj.desc + operationName);
    };
    ClientAuthError2.createInvalidCacheTypeError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.invalidCacheType.code, "" + ClientAuthErrorMessage.invalidCacheType.desc);
    };
    ClientAuthError2.createUnexpectedAccountTypeError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.unexpectedAccountType.code, "" + ClientAuthErrorMessage.unexpectedAccountType.desc);
    };
    ClientAuthError2.createUnexpectedCredentialTypeError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.unexpectedCredentialType.code, "" + ClientAuthErrorMessage.unexpectedCredentialType.desc);
    };
    ClientAuthError2.createInvalidAssertionError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.invalidAssertion.code, "" + ClientAuthErrorMessage.invalidAssertion.desc);
    };
    ClientAuthError2.createInvalidCredentialError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.invalidClientCredential.code, "" + ClientAuthErrorMessage.invalidClientCredential.desc);
    };
    ClientAuthError2.createRefreshRequiredError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.tokenRefreshRequired.code, ClientAuthErrorMessage.tokenRefreshRequired.desc);
    };
    ClientAuthError2.createUserTimeoutReachedError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.userTimeoutReached.code, ClientAuthErrorMessage.userTimeoutReached.desc);
    };
    ClientAuthError2.createTokenClaimsRequiredError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.tokenClaimsRequired.code, ClientAuthErrorMessage.tokenClaimsRequired.desc);
    };
    ClientAuthError2.createNoAuthCodeInServerResponseError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.noAuthorizationCodeFromServer.code, ClientAuthErrorMessage.noAuthorizationCodeFromServer.desc);
    };
    ClientAuthError2.createBindingKeyNotRemovedError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.bindingKeyNotRemovedError.code, ClientAuthErrorMessage.bindingKeyNotRemovedError.desc);
    };
    ClientAuthError2.createLogoutNotSupportedError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.logoutNotSupported.code, ClientAuthErrorMessage.logoutNotSupported.desc);
    };
    ClientAuthError2.createKeyIdMissingError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.keyIdMissing.code, ClientAuthErrorMessage.keyIdMissing.desc);
    };
    ClientAuthError2.createNoNetworkConnectivityError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.noNetworkConnectivity.code, ClientAuthErrorMessage.noNetworkConnectivity.desc);
    };
    ClientAuthError2.createUserCanceledError = function() {
      return new ClientAuthError2(ClientAuthErrorMessage.userCanceledError.code, ClientAuthErrorMessage.userCanceledError.desc);
    };
    return ClientAuthError2;
  }(AuthError)
);

// node_modules/@azure/msal-common/dist/utils/StringUtils.js
var StringUtils = (
  /** @class */
  function() {
    function StringUtils2() {
    }
    StringUtils2.decodeAuthToken = function(authToken) {
      if (StringUtils2.isEmpty(authToken)) {
        throw ClientAuthError.createTokenNullOrEmptyError(authToken);
      }
      var tokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
      var matches = tokenPartsRegex.exec(authToken);
      if (!matches || matches.length < 4) {
        throw ClientAuthError.createTokenParsingError("Given token is malformed: " + JSON.stringify(authToken));
      }
      var crackedToken = {
        header: matches[1],
        JWSPayload: matches[2],
        JWSSig: matches[3]
      };
      return crackedToken;
    };
    StringUtils2.isEmpty = function(str) {
      return typeof str === "undefined" || !str || 0 === str.length;
    };
    StringUtils2.isEmptyObj = function(strObj) {
      if (strObj && !StringUtils2.isEmpty(strObj)) {
        try {
          var obj = JSON.parse(strObj);
          return Object.keys(obj).length === 0;
        } catch (e2) {
        }
      }
      return true;
    };
    StringUtils2.startsWith = function(str, search) {
      return str.indexOf(search) === 0;
    };
    StringUtils2.endsWith = function(str, search) {
      return str.length >= search.length && str.lastIndexOf(search) === str.length - search.length;
    };
    StringUtils2.queryStringToObject = function(query2) {
      var obj = {};
      var params = query2.split("&");
      var decode = function(s2) {
        return decodeURIComponent(s2.replace(/\+/g, " "));
      };
      params.forEach(function(pair) {
        if (pair.trim()) {
          var _a = pair.split(/=(.+)/g, 2), key = _a[0], value = _a[1];
          if (key && value) {
            obj[decode(key)] = decode(value);
          }
        }
      });
      return obj;
    };
    StringUtils2.trimArrayEntries = function(arr) {
      return arr.map(function(entry) {
        return entry.trim();
      });
    };
    StringUtils2.removeEmptyStringsFromArray = function(arr) {
      return arr.filter(function(entry) {
        return !StringUtils2.isEmpty(entry);
      });
    };
    StringUtils2.jsonParseHelper = function(str) {
      try {
        return JSON.parse(str);
      } catch (e2) {
        return null;
      }
    };
    StringUtils2.matchPattern = function(pattern, input) {
      var regex = new RegExp(pattern.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?"));
      return regex.test(input);
    };
    return StringUtils2;
  }()
);

// node_modules/@azure/msal-common/dist/logger/Logger.js
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["Error"] = 0] = "Error";
  LogLevel2[LogLevel2["Warning"] = 1] = "Warning";
  LogLevel2[LogLevel2["Info"] = 2] = "Info";
  LogLevel2[LogLevel2["Verbose"] = 3] = "Verbose";
  LogLevel2[LogLevel2["Trace"] = 4] = "Trace";
})(LogLevel || (LogLevel = {}));
var Logger = (
  /** @class */
  function() {
    function Logger2(loggerOptions, packageName, packageVersion) {
      this.level = LogLevel.Info;
      var defaultLoggerCallback = function() {
        return;
      };
      var setLoggerOptions = loggerOptions || Logger2.createDefaultLoggerOptions();
      this.localCallback = setLoggerOptions.loggerCallback || defaultLoggerCallback;
      this.piiLoggingEnabled = setLoggerOptions.piiLoggingEnabled || false;
      this.level = typeof setLoggerOptions.logLevel === "number" ? setLoggerOptions.logLevel : LogLevel.Info;
      this.correlationId = setLoggerOptions.correlationId || Constants.EMPTY_STRING;
      this.packageName = packageName || Constants.EMPTY_STRING;
      this.packageVersion = packageVersion || Constants.EMPTY_STRING;
    }
    Logger2.createDefaultLoggerOptions = function() {
      return {
        loggerCallback: function() {
        },
        piiLoggingEnabled: false,
        logLevel: LogLevel.Info
      };
    };
    Logger2.prototype.clone = function(packageName, packageVersion, correlationId) {
      return new Logger2({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: correlationId || this.correlationId }, packageName, packageVersion);
    };
    Logger2.prototype.logMessage = function(logMessage, options) {
      if (options.logLevel > this.level || !this.piiLoggingEnabled && options.containsPii) {
        return;
      }
      var timestamp = (/* @__PURE__ */ new Date()).toUTCString();
      var logHeader;
      if (!StringUtils.isEmpty(options.correlationId)) {
        logHeader = "[" + timestamp + "] : [" + options.correlationId + "]";
      } else if (!StringUtils.isEmpty(this.correlationId)) {
        logHeader = "[" + timestamp + "] : [" + this.correlationId + "]";
      } else {
        logHeader = "[" + timestamp + "]";
      }
      var log = logHeader + " : " + this.packageName + "@" + this.packageVersion + " : " + LogLevel[options.logLevel] + " - " + logMessage;
      this.executeCallback(options.logLevel, log, options.containsPii || false);
    };
    Logger2.prototype.executeCallback = function(level, message, containsPii) {
      if (this.localCallback) {
        this.localCallback(level, message, containsPii);
      }
    };
    Logger2.prototype.error = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Error,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.errorPii = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Error,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.warning = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Warning,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.warningPii = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Warning,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.info = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Info,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.infoPii = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Info,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.verbose = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Verbose,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.verbosePii = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Verbose,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.trace = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Trace,
        containsPii: false,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.tracePii = function(message, correlationId) {
      this.logMessage(message, {
        logLevel: LogLevel.Trace,
        containsPii: true,
        correlationId: correlationId || Constants.EMPTY_STRING
      });
    };
    Logger2.prototype.isPiiLoggingEnabled = function() {
      return this.piiLoggingEnabled || false;
    };
    return Logger2;
  }()
);

// node_modules/@azure/msal-common/dist/packageMetadata.js
var name = "@azure/msal-common";
var version = "13.1.0";

// node_modules/@azure/msal-common/dist/authority/AuthorityOptions.js
var AzureCloudInstance;
(function(AzureCloudInstance2) {
  AzureCloudInstance2[AzureCloudInstance2["None"] = 0] = "None";
  AzureCloudInstance2["AzurePublic"] = "https://login.microsoftonline.com";
  AzureCloudInstance2["AzurePpe"] = "https://login.windows-ppe.net";
  AzureCloudInstance2["AzureChina"] = "https://login.chinacloudapi.cn";
  AzureCloudInstance2["AzureGermany"] = "https://login.microsoftonline.de";
  AzureCloudInstance2["AzureUsGovernment"] = "https://login.microsoftonline.us";
})(AzureCloudInstance || (AzureCloudInstance = {}));

// node_modules/@azure/msal-common/dist/error/ClientConfigurationError.js
var ClientConfigurationErrorMessage = {
  redirectUriNotSet: {
    code: "redirect_uri_empty",
    desc: "A redirect URI is required for all calls, and none has been set."
  },
  postLogoutUriNotSet: {
    code: "post_logout_uri_empty",
    desc: "A post logout redirect has not been set."
  },
  claimsRequestParsingError: {
    code: "claims_request_parsing_error",
    desc: "Could not parse the given claims request object."
  },
  authorityUriInsecure: {
    code: "authority_uri_insecure",
    desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options"
  },
  urlParseError: {
    code: "url_parse_error",
    desc: "URL could not be parsed into appropriate segments."
  },
  urlEmptyError: {
    code: "empty_url_error",
    desc: "URL was empty or null."
  },
  emptyScopesError: {
    code: "empty_input_scopes_error",
    desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token."
  },
  nonArrayScopesError: {
    code: "nonarray_input_scopes_error",
    desc: "Scopes cannot be passed as non-array."
  },
  clientIdSingleScopeError: {
    code: "clientid_input_scopes_error",
    desc: "Client ID can only be provided as a single scope."
  },
  invalidPrompt: {
    code: "invalid_prompt_value",
    desc: "Supported prompt values are 'login', 'select_account', 'consent', 'create', 'none' and 'no_session'.  Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest"
  },
  invalidClaimsRequest: {
    code: "invalid_claims",
    desc: "Given claims parameter must be a stringified JSON object."
  },
  tokenRequestEmptyError: {
    code: "token_request_empty",
    desc: "Token request was empty and not found in cache."
  },
  logoutRequestEmptyError: {
    code: "logout_request_empty",
    desc: "The logout request was null or undefined."
  },
  invalidCodeChallengeMethod: {
    code: "invalid_code_challenge_method",
    desc: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".'
  },
  invalidCodeChallengeParams: {
    code: "pkce_params_missing",
    desc: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request"
  },
  invalidCloudDiscoveryMetadata: {
    code: "invalid_cloud_discovery_metadata",
    desc: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields"
  },
  invalidAuthorityMetadata: {
    code: "invalid_authority_metadata",
    desc: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields."
  },
  untrustedAuthority: {
    code: "untrusted_authority",
    desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter."
  },
  invalidAzureCloudInstance: {
    code: "invalid_azure_cloud_instance",
    desc: "Invalid AzureCloudInstance provided. Please refer MSAL JS docs: aks.ms/msaljs/azure_cloud_instance for valid values"
  },
  missingSshJwk: {
    code: "missing_ssh_jwk",
    desc: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme."
  },
  missingSshKid: {
    code: "missing_ssh_kid",
    desc: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme."
  },
  missingNonceAuthenticationHeader: {
    code: "missing_nonce_authentication_header",
    desc: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce."
  },
  invalidAuthenticationHeader: {
    code: "invalid_authentication_header",
    desc: "Invalid authentication header provided"
  },
  authorityMismatch: {
    code: "authority_mismatch",
    desc: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority."
  }
};
var ClientConfigurationError = (
  /** @class */
  function(_super) {
    __extends2(ClientConfigurationError2, _super);
    function ClientConfigurationError2(errorCode, errorMessage) {
      var _this = _super.call(this, errorCode, errorMessage) || this;
      _this.name = "ClientConfigurationError";
      Object.setPrototypeOf(_this, ClientConfigurationError2.prototype);
      return _this;
    }
    ClientConfigurationError2.createRedirectUriEmptyError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.redirectUriNotSet.code, ClientConfigurationErrorMessage.redirectUriNotSet.desc);
    };
    ClientConfigurationError2.createPostLogoutRedirectUriEmptyError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.postLogoutUriNotSet.code, ClientConfigurationErrorMessage.postLogoutUriNotSet.desc);
    };
    ClientConfigurationError2.createClaimsRequestParsingError = function(claimsRequestParseError) {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.claimsRequestParsingError.code, ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    ClientConfigurationError2.createInsecureAuthorityUriError = function(urlString) {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.authorityUriInsecure.code, ClientConfigurationErrorMessage.authorityUriInsecure.desc + " Given URI: " + urlString);
    };
    ClientConfigurationError2.createUrlParseError = function(urlParseError) {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.urlParseError.code, ClientConfigurationErrorMessage.urlParseError.desc + " Given Error: " + urlParseError);
    };
    ClientConfigurationError2.createUrlEmptyError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.urlEmptyError.code, ClientConfigurationErrorMessage.urlEmptyError.desc);
    };
    ClientConfigurationError2.createEmptyScopesArrayError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.emptyScopesError.code, "" + ClientConfigurationErrorMessage.emptyScopesError.desc);
    };
    ClientConfigurationError2.createClientIdSingleScopeError = function(inputScopes) {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.clientIdSingleScopeError.code, ClientConfigurationErrorMessage.clientIdSingleScopeError.desc + " Given Scopes: " + inputScopes);
    };
    ClientConfigurationError2.createInvalidPromptError = function(promptValue) {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidPrompt.code, ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    ClientConfigurationError2.createInvalidClaimsRequestError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidClaimsRequest.code, ClientConfigurationErrorMessage.invalidClaimsRequest.desc);
    };
    ClientConfigurationError2.createEmptyLogoutRequestError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.logoutRequestEmptyError.code, ClientConfigurationErrorMessage.logoutRequestEmptyError.desc);
    };
    ClientConfigurationError2.createEmptyTokenRequestError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.tokenRequestEmptyError.code, ClientConfigurationErrorMessage.tokenRequestEmptyError.desc);
    };
    ClientConfigurationError2.createInvalidCodeChallengeMethodError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidCodeChallengeMethod.code, ClientConfigurationErrorMessage.invalidCodeChallengeMethod.desc);
    };
    ClientConfigurationError2.createInvalidCodeChallengeParamsError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidCodeChallengeParams.code, ClientConfigurationErrorMessage.invalidCodeChallengeParams.desc);
    };
    ClientConfigurationError2.createInvalidCloudDiscoveryMetadataError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.code, ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.desc);
    };
    ClientConfigurationError2.createInvalidAuthorityMetadataError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidAuthorityMetadata.code, ClientConfigurationErrorMessage.invalidAuthorityMetadata.desc);
    };
    ClientConfigurationError2.createUntrustedAuthorityError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.untrustedAuthority.code, ClientConfigurationErrorMessage.untrustedAuthority.desc);
    };
    ClientConfigurationError2.createInvalidAzureCloudInstanceError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidAzureCloudInstance.code, ClientConfigurationErrorMessage.invalidAzureCloudInstance.desc);
    };
    ClientConfigurationError2.createMissingSshJwkError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.missingSshJwk.code, ClientConfigurationErrorMessage.missingSshJwk.desc);
    };
    ClientConfigurationError2.createMissingSshKidError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.missingSshKid.code, ClientConfigurationErrorMessage.missingSshKid.desc);
    };
    ClientConfigurationError2.createMissingNonceAuthenticationHeadersError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.missingNonceAuthenticationHeader.code, ClientConfigurationErrorMessage.missingNonceAuthenticationHeader.desc);
    };
    ClientConfigurationError2.createInvalidAuthenticationHeaderError = function(invalidHeaderName, details) {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.invalidAuthenticationHeader.code, ClientConfigurationErrorMessage.invalidAuthenticationHeader.desc + ". Invalid header: " + invalidHeaderName + ". Details: " + details);
    };
    ClientConfigurationError2.createAuthorityMismatchError = function() {
      return new ClientConfigurationError2(ClientConfigurationErrorMessage.authorityMismatch.code, ClientConfigurationErrorMessage.authorityMismatch.desc);
    };
    return ClientConfigurationError2;
  }(ClientAuthError)
);

// node_modules/@azure/msal-common/dist/request/ScopeSet.js
var ScopeSet = (
  /** @class */
  function() {
    function ScopeSet2(inputScopes) {
      var _this = this;
      var scopeArr = inputScopes ? StringUtils.trimArrayEntries(__spreadArrays(inputScopes)) : [];
      var filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
      this.validateInputScopes(filteredInput);
      this.scopes = /* @__PURE__ */ new Set();
      filteredInput.forEach(function(scope) {
        return _this.scopes.add(scope);
      });
    }
    ScopeSet2.fromString = function(inputScopeString) {
      var scopeString = inputScopeString || Constants.EMPTY_STRING;
      var inputScopes = scopeString.split(" ");
      return new ScopeSet2(inputScopes);
    };
    ScopeSet2.createSearchScopes = function(inputScopeString) {
      var scopeSet = new ScopeSet2(inputScopeString);
      if (!scopeSet.containsOnlyOIDCScopes()) {
        scopeSet.removeOIDCScopes();
      } else {
        scopeSet.removeScope(Constants.OFFLINE_ACCESS_SCOPE);
      }
      return scopeSet;
    };
    ScopeSet2.prototype.validateInputScopes = function(inputScopes) {
      if (!inputScopes || inputScopes.length < 1) {
        throw ClientConfigurationError.createEmptyScopesArrayError();
      }
    };
    ScopeSet2.prototype.containsScope = function(scope) {
      var lowerCaseScopes = this.printScopesLowerCase().split(" ");
      var lowerCaseScopesSet = new ScopeSet2(lowerCaseScopes);
      return !StringUtils.isEmpty(scope) ? lowerCaseScopesSet.scopes.has(scope.toLowerCase()) : false;
    };
    ScopeSet2.prototype.containsScopeSet = function(scopeSet) {
      var _this = this;
      if (!scopeSet || scopeSet.scopes.size <= 0) {
        return false;
      }
      return this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every(function(scope) {
        return _this.containsScope(scope);
      });
    };
    ScopeSet2.prototype.containsOnlyOIDCScopes = function() {
      var _this = this;
      var defaultScopeCount = 0;
      OIDC_SCOPES.forEach(function(defaultScope) {
        if (_this.containsScope(defaultScope)) {
          defaultScopeCount += 1;
        }
      });
      return this.scopes.size === defaultScopeCount;
    };
    ScopeSet2.prototype.appendScope = function(newScope) {
      if (!StringUtils.isEmpty(newScope)) {
        this.scopes.add(newScope.trim());
      }
    };
    ScopeSet2.prototype.appendScopes = function(newScopes) {
      var _this = this;
      try {
        newScopes.forEach(function(newScope) {
          return _this.appendScope(newScope);
        });
      } catch (e2) {
        throw ClientAuthError.createAppendScopeSetError(e2);
      }
    };
    ScopeSet2.prototype.removeScope = function(scope) {
      if (StringUtils.isEmpty(scope)) {
        throw ClientAuthError.createRemoveEmptyScopeFromSetError(scope);
      }
      this.scopes.delete(scope.trim());
    };
    ScopeSet2.prototype.removeOIDCScopes = function() {
      var _this = this;
      OIDC_SCOPES.forEach(function(defaultScope) {
        _this.scopes.delete(defaultScope);
      });
    };
    ScopeSet2.prototype.unionScopeSets = function(otherScopes) {
      if (!otherScopes) {
        throw ClientAuthError.createEmptyInputScopeSetError();
      }
      var unionScopes = /* @__PURE__ */ new Set();
      otherScopes.scopes.forEach(function(scope) {
        return unionScopes.add(scope.toLowerCase());
      });
      this.scopes.forEach(function(scope) {
        return unionScopes.add(scope.toLowerCase());
      });
      return unionScopes;
    };
    ScopeSet2.prototype.intersectingScopeSets = function(otherScopes) {
      if (!otherScopes) {
        throw ClientAuthError.createEmptyInputScopeSetError();
      }
      if (!otherScopes.containsOnlyOIDCScopes()) {
        otherScopes.removeOIDCScopes();
      }
      var unionScopes = this.unionScopeSets(otherScopes);
      var sizeOtherScopes = otherScopes.getScopeCount();
      var sizeThisScopes = this.getScopeCount();
      var sizeUnionScopes = unionScopes.size;
      return sizeUnionScopes < sizeThisScopes + sizeOtherScopes;
    };
    ScopeSet2.prototype.getScopeCount = function() {
      return this.scopes.size;
    };
    ScopeSet2.prototype.asArray = function() {
      var array = [];
      this.scopes.forEach(function(val) {
        return array.push(val);
      });
      return array;
    };
    ScopeSet2.prototype.printScopes = function() {
      if (this.scopes) {
        var scopeArr = this.asArray();
        return scopeArr.join(" ");
      }
      return Constants.EMPTY_STRING;
    };
    ScopeSet2.prototype.printScopesLowerCase = function() {
      return this.printScopes().toLowerCase();
    };
    return ScopeSet2;
  }()
);

// node_modules/@azure/msal-common/dist/account/ClientInfo.js
function buildClientInfo(rawClientInfo, crypto) {
  if (StringUtils.isEmpty(rawClientInfo)) {
    throw ClientAuthError.createClientInfoEmptyError();
  }
  try {
    var decodedClientInfo = crypto.base64Decode(rawClientInfo);
    return JSON.parse(decodedClientInfo);
  } catch (e2) {
    throw ClientAuthError.createClientInfoDecodingError(e2.message);
  }
}
function buildClientInfoFromHomeAccountId(homeAccountId) {
  if (StringUtils.isEmpty(homeAccountId)) {
    throw ClientAuthError.createClientInfoDecodingError("Home account ID was empty.");
  }
  var clientInfoParts = homeAccountId.split(Separators.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: clientInfoParts[0],
    utid: clientInfoParts.length < 2 ? Constants.EMPTY_STRING : clientInfoParts[1]
  };
}

// node_modules/@azure/msal-common/dist/authority/AuthorityType.js
var AuthorityType;
(function(AuthorityType2) {
  AuthorityType2[AuthorityType2["Default"] = 0] = "Default";
  AuthorityType2[AuthorityType2["Adfs"] = 1] = "Adfs";
  AuthorityType2[AuthorityType2["Dsts"] = 2] = "Dsts";
  AuthorityType2[AuthorityType2["Ciam"] = 3] = "Ciam";
})(AuthorityType || (AuthorityType = {}));

// node_modules/@azure/msal-common/dist/cache/entities/AccountEntity.js
var AccountEntity = (
  /** @class */
  function() {
    function AccountEntity2() {
    }
    AccountEntity2.prototype.generateAccountId = function() {
      var accountId = [this.homeAccountId, this.environment];
      return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    AccountEntity2.prototype.generateAccountKey = function() {
      return AccountEntity2.generateAccountCacheKey({
        homeAccountId: this.homeAccountId,
        environment: this.environment,
        tenantId: this.realm,
        username: this.username,
        localAccountId: this.localAccountId
      });
    };
    AccountEntity2.prototype.generateType = function() {
      switch (this.authorityType) {
        case CacheAccountType.ADFS_ACCOUNT_TYPE:
          return CacheType.ADFS;
        case CacheAccountType.MSAV1_ACCOUNT_TYPE:
          return CacheType.MSA;
        case CacheAccountType.MSSTS_ACCOUNT_TYPE:
          return CacheType.MSSTS;
        case CacheAccountType.GENERIC_ACCOUNT_TYPE:
          return CacheType.GENERIC;
        default: {
          throw ClientAuthError.createUnexpectedAccountTypeError();
        }
      }
    };
    AccountEntity2.prototype.getAccountInfo = function() {
      return {
        homeAccountId: this.homeAccountId,
        environment: this.environment,
        tenantId: this.realm,
        username: this.username,
        localAccountId: this.localAccountId,
        name: this.name,
        idTokenClaims: this.idTokenClaims,
        nativeAccountId: this.nativeAccountId
      };
    };
    AccountEntity2.generateAccountCacheKey = function(accountInterface) {
      var accountKey = [
        accountInterface.homeAccountId,
        accountInterface.environment || Constants.EMPTY_STRING,
        accountInterface.tenantId || Constants.EMPTY_STRING
      ];
      return accountKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    AccountEntity2.createAccount = function(clientInfo, homeAccountId, idToken, authority, cloudGraphHostName, msGraphHost, environment, nativeAccountId) {
      var _a, _b, _c, _d, _e2, _f;
      var account = new AccountEntity2();
      account.authorityType = CacheAccountType.MSSTS_ACCOUNT_TYPE;
      account.clientInfo = clientInfo;
      account.homeAccountId = homeAccountId;
      account.nativeAccountId = nativeAccountId;
      var env = environment || authority && authority.getPreferredCache();
      if (!env) {
        throw ClientAuthError.createInvalidCacheEnvironmentError();
      }
      account.environment = env;
      account.realm = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.tid) || Constants.EMPTY_STRING;
      if (idToken) {
        account.idTokenClaims = idToken.claims;
        account.localAccountId = ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.oid) || ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.sub) || Constants.EMPTY_STRING;
        var preferredUsername = (_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.preferred_username;
        var email = ((_e2 = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _e2 === void 0 ? void 0 : _e2.emails) ? idToken.claims.emails[0] : null;
        account.username = preferredUsername || email || Constants.EMPTY_STRING;
        account.name = (_f = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _f === void 0 ? void 0 : _f.name;
      }
      account.cloudGraphHostName = cloudGraphHostName;
      account.msGraphHost = msGraphHost;
      return account;
    };
    AccountEntity2.createGenericAccount = function(homeAccountId, idToken, authority, cloudGraphHostName, msGraphHost, environment) {
      var _a, _b, _c, _d;
      var account = new AccountEntity2();
      account.authorityType = authority && authority.authorityType === AuthorityType.Adfs ? CacheAccountType.ADFS_ACCOUNT_TYPE : CacheAccountType.GENERIC_ACCOUNT_TYPE;
      account.homeAccountId = homeAccountId;
      account.realm = Constants.EMPTY_STRING;
      var env = environment || authority && authority.getPreferredCache();
      if (!env) {
        throw ClientAuthError.createInvalidCacheEnvironmentError();
      }
      if (idToken) {
        account.localAccountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.oid) || ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.sub) || Constants.EMPTY_STRING;
        account.username = ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.upn) || Constants.EMPTY_STRING;
        account.name = ((_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.name) || Constants.EMPTY_STRING;
        account.idTokenClaims = idToken === null || idToken === void 0 ? void 0 : idToken.claims;
      }
      account.environment = env;
      account.cloudGraphHostName = cloudGraphHostName;
      account.msGraphHost = msGraphHost;
      return account;
    };
    AccountEntity2.generateHomeAccountId = function(serverClientInfo, authType, logger, cryptoObj, idToken) {
      var _a;
      var accountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.sub) ? idToken.claims.sub : Constants.EMPTY_STRING;
      if (authType === AuthorityType.Adfs || authType === AuthorityType.Dsts) {
        return accountId;
      }
      if (serverClientInfo) {
        try {
          var clientInfo = buildClientInfo(serverClientInfo, cryptoObj);
          if (!StringUtils.isEmpty(clientInfo.uid) && !StringUtils.isEmpty(clientInfo.utid)) {
            return "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid;
          }
        } catch (e2) {
        }
      }
      logger.verbose("No client info in response");
      return accountId;
    };
    AccountEntity2.isAccountEntity = function(entity) {
      if (!entity) {
        return false;
      }
      return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("realm") && entity.hasOwnProperty("localAccountId") && entity.hasOwnProperty("username") && entity.hasOwnProperty("authorityType");
    };
    AccountEntity2.accountInfoIsEqual = function(accountA, accountB, compareClaims) {
      if (!accountA || !accountB) {
        return false;
      }
      var claimsMatch = true;
      if (compareClaims) {
        var accountAClaims = accountA.idTokenClaims || {};
        var accountBClaims = accountB.idTokenClaims || {};
        claimsMatch = accountAClaims.iat === accountBClaims.iat && accountAClaims.nonce === accountBClaims.nonce;
      }
      return accountA.homeAccountId === accountB.homeAccountId && accountA.localAccountId === accountB.localAccountId && accountA.username === accountB.username && accountA.tenantId === accountB.tenantId && accountA.environment === accountB.environment && accountA.nativeAccountId === accountB.nativeAccountId && claimsMatch;
    };
    return AccountEntity2;
  }()
);

// node_modules/@azure/msal-common/dist/account/AuthToken.js
var AuthToken = (
  /** @class */
  function() {
    function AuthToken2(rawToken, crypto) {
      if (StringUtils.isEmpty(rawToken)) {
        throw ClientAuthError.createTokenNullOrEmptyError(rawToken);
      }
      this.rawToken = rawToken;
      this.claims = AuthToken2.extractTokenClaims(rawToken, crypto);
    }
    AuthToken2.extractTokenClaims = function(encodedToken, crypto) {
      var decodedToken = StringUtils.decodeAuthToken(encodedToken);
      try {
        var base64TokenPayload = decodedToken.JWSPayload;
        var base64Decoded = crypto.base64Decode(base64TokenPayload);
        return JSON.parse(base64Decoded);
      } catch (err) {
        throw ClientAuthError.createTokenParsingError(err);
      }
    };
    AuthToken2.checkMaxAge = function(authTime, maxAge) {
      var fiveMinuteSkew = 3e5;
      if (maxAge === 0 || Date.now() - fiveMinuteSkew > authTime + maxAge) {
        throw ClientAuthError.createMaxAgeTranspiredError();
      }
    };
    return AuthToken2;
  }()
);

// node_modules/@azure/msal-common/dist/cache/CacheManager.js
var CacheManager = (
  /** @class */
  function() {
    function CacheManager2(clientId, cryptoImpl, logger) {
      this.clientId = clientId;
      this.cryptoImpl = cryptoImpl;
      this.commonLogger = logger.clone(name, version);
    }
    CacheManager2.prototype.getAllAccounts = function() {
      var _this = this;
      var allAccountKeys = this.getAccountKeys();
      if (allAccountKeys.length < 1) {
        return [];
      }
      var accountEntities = allAccountKeys.reduce(function(accounts, key) {
        var entity = _this.getAccount(key);
        if (!entity) {
          return accounts;
        }
        accounts.push(entity);
        return accounts;
      }, []);
      if (accountEntities.length < 1) {
        return [];
      } else {
        var allAccounts = accountEntities.map(function(accountEntity) {
          return _this.getAccountInfoFromEntity(accountEntity);
        });
        return allAccounts;
      }
    };
    CacheManager2.prototype.getAccountInfoFilteredBy = function(accountFilter) {
      var allAccounts = this.getAccountsFilteredBy(accountFilter);
      if (allAccounts.length > 0) {
        return this.getAccountInfoFromEntity(allAccounts[0]);
      } else {
        return null;
      }
    };
    CacheManager2.prototype.getAccountInfoFromEntity = function(accountEntity) {
      var accountInfo = accountEntity.getAccountInfo();
      var idToken = this.getIdToken(accountInfo);
      if (idToken) {
        accountInfo.idToken = idToken.secret;
        accountInfo.idTokenClaims = new AuthToken(idToken.secret, this.cryptoImpl).claims;
      }
      return accountInfo;
    };
    CacheManager2.prototype.saveCacheRecord = function(cacheRecord) {
      return __awaiter2(this, void 0, void 0, function() {
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!cacheRecord) {
                throw ClientAuthError.createNullOrUndefinedCacheRecord();
              }
              if (!!cacheRecord.account) {
                this.setAccount(cacheRecord.account);
              }
              if (!!cacheRecord.idToken) {
                this.setIdTokenCredential(cacheRecord.idToken);
              }
              if (!!!cacheRecord.accessToken)
                return [3, 2];
              return [4, this.saveAccessToken(cacheRecord.accessToken)];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              if (!!cacheRecord.refreshToken) {
                this.setRefreshTokenCredential(cacheRecord.refreshToken);
              }
              if (!!cacheRecord.appMetadata) {
                this.setAppMetadata(cacheRecord.appMetadata);
              }
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CacheManager2.prototype.saveAccessToken = function(credential) {
      return __awaiter2(this, void 0, void 0, function() {
        var accessTokenFilter, tokenKeys, currentScopes, removedAccessTokens;
        var _this = this;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              accessTokenFilter = {
                clientId: credential.clientId,
                credentialType: credential.credentialType,
                environment: credential.environment,
                homeAccountId: credential.homeAccountId,
                realm: credential.realm,
                tokenType: credential.tokenType,
                requestedClaimsHash: credential.requestedClaimsHash
              };
              tokenKeys = this.getTokenKeys();
              currentScopes = ScopeSet.fromString(credential.target);
              removedAccessTokens = [];
              tokenKeys.accessToken.forEach(function(key) {
                if (!_this.accessTokenKeyMatchesFilter(key, accessTokenFilter, false)) {
                  return;
                }
                var tokenEntity = _this.getAccessTokenCredential(key);
                if (tokenEntity && _this.credentialMatchesFilter(tokenEntity, accessTokenFilter)) {
                  var tokenScopeSet = ScopeSet.fromString(tokenEntity.target);
                  if (tokenScopeSet.intersectingScopeSets(currentScopes)) {
                    removedAccessTokens.push(_this.removeAccessToken(key));
                  }
                }
              });
              return [4, Promise.all(removedAccessTokens)];
            case 1:
              _a.sent();
              this.setAccessTokenCredential(credential);
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CacheManager2.prototype.getAccountsFilteredBy = function(accountFilter) {
      var _this = this;
      var allAccountKeys = this.getAccountKeys();
      var matchingAccounts = [];
      allAccountKeys.forEach(function(cacheKey) {
        if (!_this.isAccountKey(cacheKey, accountFilter.homeAccountId, accountFilter.realm)) {
          return;
        }
        var entity = _this.getAccount(cacheKey);
        if (!entity) {
          return;
        }
        if (!!accountFilter.homeAccountId && !_this.matchHomeAccountId(entity, accountFilter.homeAccountId)) {
          return;
        }
        if (!!accountFilter.localAccountId && !_this.matchLocalAccountId(entity, accountFilter.localAccountId)) {
          return;
        }
        if (!!accountFilter.username && !_this.matchUsername(entity, accountFilter.username)) {
          return;
        }
        if (!!accountFilter.environment && !_this.matchEnvironment(entity, accountFilter.environment)) {
          return;
        }
        if (!!accountFilter.realm && !_this.matchRealm(entity, accountFilter.realm)) {
          return;
        }
        if (!!accountFilter.nativeAccountId && !_this.matchNativeAccountId(entity, accountFilter.nativeAccountId)) {
          return;
        }
        matchingAccounts.push(entity);
      });
      return matchingAccounts;
    };
    CacheManager2.prototype.isAccountKey = function(key, homeAccountId, tenantId) {
      if (key.split(Separators.CACHE_KEY_SEPARATOR).length < 3) {
        return false;
      }
      if (homeAccountId && !key.toLowerCase().includes(homeAccountId.toLowerCase())) {
        return false;
      }
      if (tenantId && !key.toLowerCase().includes(tenantId.toLowerCase())) {
        return false;
      }
      return true;
    };
    CacheManager2.prototype.isCredentialKey = function(key) {
      if (key.split(Separators.CACHE_KEY_SEPARATOR).length < 6) {
        return false;
      }
      var lowerCaseKey = key.toLowerCase();
      if (lowerCaseKey.indexOf(CredentialType.ID_TOKEN.toLowerCase()) === -1 && lowerCaseKey.indexOf(CredentialType.ACCESS_TOKEN.toLowerCase()) === -1 && lowerCaseKey.indexOf(CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 && lowerCaseKey.indexOf(CredentialType.REFRESH_TOKEN.toLowerCase()) === -1) {
        return false;
      }
      if (lowerCaseKey.indexOf(CredentialType.REFRESH_TOKEN.toLowerCase()) > -1) {
        var clientIdValidation = "" + CredentialType.REFRESH_TOKEN + Separators.CACHE_KEY_SEPARATOR + this.clientId + Separators.CACHE_KEY_SEPARATOR;
        var familyIdValidation = "" + CredentialType.REFRESH_TOKEN + Separators.CACHE_KEY_SEPARATOR + THE_FAMILY_ID + Separators.CACHE_KEY_SEPARATOR;
        if (lowerCaseKey.indexOf(clientIdValidation.toLowerCase()) === -1 && lowerCaseKey.indexOf(familyIdValidation.toLowerCase()) === -1) {
          return false;
        }
      } else if (lowerCaseKey.indexOf(this.clientId.toLowerCase()) === -1) {
        return false;
      }
      return true;
    };
    CacheManager2.prototype.credentialMatchesFilter = function(entity, filter) {
      if (!!filter.clientId && !this.matchClientId(entity, filter.clientId)) {
        return false;
      }
      if (!!filter.userAssertionHash && !this.matchUserAssertionHash(entity, filter.userAssertionHash)) {
        return false;
      }
      if (typeof filter.homeAccountId === "string" && !this.matchHomeAccountId(entity, filter.homeAccountId)) {
        return false;
      }
      if (!!filter.environment && !this.matchEnvironment(entity, filter.environment)) {
        return false;
      }
      if (!!filter.realm && !this.matchRealm(entity, filter.realm)) {
        return false;
      }
      if (!!filter.credentialType && !this.matchCredentialType(entity, filter.credentialType)) {
        return false;
      }
      if (!!filter.familyId && !this.matchFamilyId(entity, filter.familyId)) {
        return false;
      }
      if (!!filter.target && !this.matchTarget(entity, filter.target)) {
        return false;
      }
      if (filter.requestedClaimsHash || entity.requestedClaimsHash) {
        if (entity.requestedClaimsHash !== filter.requestedClaimsHash) {
          return false;
        }
      }
      if (entity.credentialType === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
        if (!!filter.tokenType && !this.matchTokenType(entity, filter.tokenType)) {
          return false;
        }
        if (filter.tokenType === AuthenticationScheme.SSH) {
          if (filter.keyId && !this.matchKeyId(entity, filter.keyId)) {
            return false;
          }
        }
      }
      return true;
    };
    CacheManager2.prototype.getAppMetadataFilteredBy = function(filter) {
      return this.getAppMetadataFilteredByInternal(filter.environment, filter.clientId);
    };
    CacheManager2.prototype.getAppMetadataFilteredByInternal = function(environment, clientId) {
      var _this = this;
      var allCacheKeys = this.getKeys();
      var matchingAppMetadata = {};
      allCacheKeys.forEach(function(cacheKey) {
        if (!_this.isAppMetadata(cacheKey)) {
          return;
        }
        var entity = _this.getAppMetadata(cacheKey);
        if (!entity) {
          return;
        }
        if (!!environment && !_this.matchEnvironment(entity, environment)) {
          return;
        }
        if (!!clientId && !_this.matchClientId(entity, clientId)) {
          return;
        }
        matchingAppMetadata[cacheKey] = entity;
      });
      return matchingAppMetadata;
    };
    CacheManager2.prototype.getAuthorityMetadataByAlias = function(host) {
      var _this = this;
      var allCacheKeys = this.getAuthorityMetadataKeys();
      var matchedEntity = null;
      allCacheKeys.forEach(function(cacheKey) {
        if (!_this.isAuthorityMetadata(cacheKey) || cacheKey.indexOf(_this.clientId) === -1) {
          return;
        }
        var entity = _this.getAuthorityMetadata(cacheKey);
        if (!entity) {
          return;
        }
        if (entity.aliases.indexOf(host) === -1) {
          return;
        }
        matchedEntity = entity;
      });
      return matchedEntity;
    };
    CacheManager2.prototype.removeAllAccounts = function() {
      return __awaiter2(this, void 0, void 0, function() {
        var allAccountKeys, removedAccounts;
        var _this = this;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              allAccountKeys = this.getAccountKeys();
              removedAccounts = [];
              allAccountKeys.forEach(function(cacheKey) {
                removedAccounts.push(_this.removeAccount(cacheKey));
              });
              return [4, Promise.all(removedAccounts)];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CacheManager2.prototype.removeAccount = function(accountKey) {
      return __awaiter2(this, void 0, void 0, function() {
        var account;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              account = this.getAccount(accountKey);
              if (!account) {
                throw ClientAuthError.createNoAccountFoundError();
              }
              return [4, this.removeAccountContext(account)];
            case 1:
              _a.sent();
              this.removeItem(accountKey);
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CacheManager2.prototype.removeAccountContext = function(account) {
      return __awaiter2(this, void 0, void 0, function() {
        var allTokenKeys, accountId, removedCredentials;
        var _this = this;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              allTokenKeys = this.getTokenKeys();
              accountId = account.generateAccountId();
              removedCredentials = [];
              allTokenKeys.idToken.forEach(function(key) {
                if (key.indexOf(accountId) === 0) {
                  _this.removeIdToken(key);
                }
              });
              allTokenKeys.accessToken.forEach(function(key) {
                if (key.indexOf(accountId) === 0) {
                  removedCredentials.push(_this.removeAccessToken(key));
                }
              });
              allTokenKeys.refreshToken.forEach(function(key) {
                if (key.indexOf(accountId) === 0) {
                  _this.removeRefreshToken(key);
                }
              });
              return [4, Promise.all(removedCredentials)];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    CacheManager2.prototype.removeAccessToken = function(key) {
      return __awaiter2(this, void 0, void 0, function() {
        var credential, accessTokenWithAuthSchemeEntity, kid;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              credential = this.getAccessTokenCredential(key);
              if (!credential) {
                return [
                  2
                  /*return*/
                ];
              }
              if (!(credential.credentialType.toLowerCase() === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()))
                return [3, 4];
              if (!(credential.tokenType === AuthenticationScheme.POP))
                return [3, 4];
              accessTokenWithAuthSchemeEntity = credential;
              kid = accessTokenWithAuthSchemeEntity.keyId;
              if (!kid)
                return [3, 4];
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4, this.cryptoImpl.removeTokenBindingKey(kid)];
            case 2:
              _a.sent();
              return [3, 4];
            case 3:
              _a.sent();
              throw ClientAuthError.createBindingKeyNotRemovedError();
            case 4:
              return [2, this.removeItem(key)];
          }
        });
      });
    };
    CacheManager2.prototype.removeAppMetadata = function() {
      var _this = this;
      var allCacheKeys = this.getKeys();
      allCacheKeys.forEach(function(cacheKey) {
        if (_this.isAppMetadata(cacheKey)) {
          _this.removeItem(cacheKey);
        }
      });
      return true;
    };
    CacheManager2.prototype.readCacheRecord = function(account, request, environment) {
      var tokenKeys = this.getTokenKeys();
      var cachedAccount = this.readAccountFromCache(account);
      var cachedIdToken = this.getIdToken(account, tokenKeys);
      var cachedAccessToken = this.getAccessToken(account, request, tokenKeys);
      var cachedRefreshToken = this.getRefreshToken(account, false, tokenKeys);
      var cachedAppMetadata = this.readAppMetadataFromCache(environment);
      if (cachedAccount && cachedIdToken) {
        cachedAccount.idTokenClaims = new AuthToken(cachedIdToken.secret, this.cryptoImpl).claims;
      }
      return {
        account: cachedAccount,
        idToken: cachedIdToken,
        accessToken: cachedAccessToken,
        refreshToken: cachedRefreshToken,
        appMetadata: cachedAppMetadata
      };
    };
    CacheManager2.prototype.readAccountFromCache = function(account) {
      var accountKey = AccountEntity.generateAccountCacheKey(account);
      return this.getAccount(accountKey);
    };
    CacheManager2.prototype.getIdToken = function(account, tokenKeys) {
      this.commonLogger.trace("CacheManager - getIdToken called");
      var idTokenFilter = {
        homeAccountId: account.homeAccountId,
        environment: account.environment,
        credentialType: CredentialType.ID_TOKEN,
        clientId: this.clientId,
        realm: account.tenantId
      };
      var idTokens = this.getIdTokensByFilter(idTokenFilter, tokenKeys);
      var numIdTokens = idTokens.length;
      if (numIdTokens < 1) {
        this.commonLogger.info("CacheManager:getIdToken - No token found");
        return null;
      } else if (numIdTokens > 1) {
        throw ClientAuthError.createMultipleMatchingTokensInCacheError();
      }
      this.commonLogger.info("CacheManager:getIdToken - Returning id token");
      return idTokens[0];
    };
    CacheManager2.prototype.getIdTokensByFilter = function(filter, tokenKeys) {
      var _this = this;
      var idTokenKeys = tokenKeys && tokenKeys.idToken || this.getTokenKeys().idToken;
      var idTokens = [];
      idTokenKeys.forEach(function(key) {
        if (!_this.idTokenKeyMatchesFilter(key, __assign2({ clientId: _this.clientId }, filter))) {
          return;
        }
        var idToken = _this.getIdTokenCredential(key);
        if (idToken && _this.credentialMatchesFilter(idToken, filter)) {
          idTokens.push(idToken);
        }
      });
      return idTokens;
    };
    CacheManager2.prototype.idTokenKeyMatchesFilter = function(inputKey, filter) {
      var key = inputKey.toLowerCase();
      if (filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
        return false;
      }
      if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
        return false;
      }
      return true;
    };
    CacheManager2.prototype.removeIdToken = function(key) {
      this.removeItem(key);
    };
    CacheManager2.prototype.removeRefreshToken = function(key) {
      this.removeItem(key);
    };
    CacheManager2.prototype.getAccessToken = function(account, request, tokenKeys) {
      var _this = this;
      this.commonLogger.trace("CacheManager - getAccessToken called");
      var scopes = ScopeSet.createSearchScopes(request.scopes);
      var authScheme = request.authenticationScheme || AuthenticationScheme.BEARER;
      var credentialType = authScheme && authScheme.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase() ? CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME : CredentialType.ACCESS_TOKEN;
      var accessTokenFilter = {
        homeAccountId: account.homeAccountId,
        environment: account.environment,
        credentialType,
        clientId: this.clientId,
        realm: account.tenantId,
        target: scopes,
        tokenType: authScheme,
        keyId: request.sshKid,
        requestedClaimsHash: request.requestedClaimsHash
      };
      var accessTokenKeys = tokenKeys && tokenKeys.accessToken || this.getTokenKeys().accessToken;
      var accessTokens = [];
      accessTokenKeys.forEach(function(key) {
        if (_this.accessTokenKeyMatchesFilter(key, accessTokenFilter, true)) {
          var accessToken = _this.getAccessTokenCredential(key);
          if (accessToken && _this.credentialMatchesFilter(accessToken, accessTokenFilter)) {
            accessTokens.push(accessToken);
          }
        }
      });
      var numAccessTokens = accessTokens.length;
      if (numAccessTokens < 1) {
        this.commonLogger.info("CacheManager:getAccessToken - No token found");
        return null;
      } else if (numAccessTokens > 1) {
        throw ClientAuthError.createMultipleMatchingTokensInCacheError();
      }
      this.commonLogger.info("CacheManager:getAccessToken - Returning access token");
      return accessTokens[0];
    };
    CacheManager2.prototype.accessTokenKeyMatchesFilter = function(inputKey, filter, keyMustContainAllScopes) {
      var key = inputKey.toLowerCase();
      if (filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
        return false;
      }
      if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
        return false;
      }
      if (filter.realm && key.indexOf(filter.realm.toLowerCase()) === -1) {
        return false;
      }
      if (filter.requestedClaimsHash && key.indexOf(filter.requestedClaimsHash.toLowerCase()) === -1) {
        return false;
      }
      if (filter.target) {
        var scopes = filter.target.asArray();
        for (var i2 = 0; i2 < scopes.length; i2++) {
          if (keyMustContainAllScopes && !key.includes(scopes[i2].toLowerCase())) {
            return false;
          } else if (!keyMustContainAllScopes && key.includes(scopes[i2].toLowerCase())) {
            return true;
          }
        }
      }
      return true;
    };
    CacheManager2.prototype.getAccessTokensByFilter = function(filter) {
      var _this = this;
      var tokenKeys = this.getTokenKeys();
      var accessTokens = [];
      tokenKeys.accessToken.forEach(function(key) {
        if (!_this.accessTokenKeyMatchesFilter(key, filter, true)) {
          return;
        }
        var accessToken = _this.getAccessTokenCredential(key);
        if (accessToken && _this.credentialMatchesFilter(accessToken, filter)) {
          accessTokens.push(accessToken);
        }
      });
      return accessTokens;
    };
    CacheManager2.prototype.getRefreshToken = function(account, familyRT, tokenKeys) {
      var _this = this;
      this.commonLogger.trace("CacheManager - getRefreshToken called");
      var id = familyRT ? THE_FAMILY_ID : void 0;
      var refreshTokenFilter = {
        homeAccountId: account.homeAccountId,
        environment: account.environment,
        credentialType: CredentialType.REFRESH_TOKEN,
        clientId: this.clientId,
        familyId: id
      };
      var refreshTokenKeys = tokenKeys && tokenKeys.refreshToken || this.getTokenKeys().refreshToken;
      var refreshTokens = [];
      refreshTokenKeys.forEach(function(key) {
        if (_this.refreshTokenKeyMatchesFilter(key, refreshTokenFilter)) {
          var refreshToken = _this.getRefreshTokenCredential(key);
          if (refreshToken && _this.credentialMatchesFilter(refreshToken, refreshTokenFilter)) {
            refreshTokens.push(refreshToken);
          }
        }
      });
      var numRefreshTokens = refreshTokens.length;
      if (numRefreshTokens < 1) {
        this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found.");
        return null;
      }
      this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token");
      return refreshTokens[0];
    };
    CacheManager2.prototype.refreshTokenKeyMatchesFilter = function(inputKey, filter) {
      var key = inputKey.toLowerCase();
      if (filter.familyId && key.indexOf(filter.familyId.toLowerCase()) === -1) {
        return false;
      }
      if (!filter.familyId && filter.clientId && key.indexOf(filter.clientId.toLowerCase()) === -1) {
        return false;
      }
      if (filter.homeAccountId && key.indexOf(filter.homeAccountId.toLowerCase()) === -1) {
        return false;
      }
      return true;
    };
    CacheManager2.prototype.readAppMetadataFromCache = function(environment) {
      var appMetadataFilter = {
        environment,
        clientId: this.clientId
      };
      var appMetadata = this.getAppMetadataFilteredBy(appMetadataFilter);
      var appMetadataEntries = Object.keys(appMetadata).map(function(key) {
        return appMetadata[key];
      });
      var numAppMetadata = appMetadataEntries.length;
      if (numAppMetadata < 1) {
        return null;
      } else if (numAppMetadata > 1) {
        throw ClientAuthError.createMultipleMatchingAppMetadataInCacheError();
      }
      return appMetadataEntries[0];
    };
    CacheManager2.prototype.isAppMetadataFOCI = function(environment) {
      var appMetadata = this.readAppMetadataFromCache(environment);
      return !!(appMetadata && appMetadata.familyId === THE_FAMILY_ID);
    };
    CacheManager2.prototype.matchHomeAccountId = function(entity, homeAccountId) {
      return !!(typeof entity.homeAccountId === "string" && homeAccountId === entity.homeAccountId);
    };
    CacheManager2.prototype.matchLocalAccountId = function(entity, localAccountId) {
      return !!(typeof entity.localAccountId === "string" && localAccountId === entity.localAccountId);
    };
    CacheManager2.prototype.matchUsername = function(entity, username) {
      return !!(typeof entity.username === "string" && username.toLowerCase() === entity.username.toLowerCase());
    };
    CacheManager2.prototype.matchUserAssertionHash = function(entity, userAssertionHash) {
      return !!(entity.userAssertionHash && userAssertionHash === entity.userAssertionHash);
    };
    CacheManager2.prototype.matchEnvironment = function(entity, environment) {
      var cloudMetadata = this.getAuthorityMetadataByAlias(environment);
      if (cloudMetadata && cloudMetadata.aliases.indexOf(entity.environment) > -1) {
        return true;
      }
      return false;
    };
    CacheManager2.prototype.matchCredentialType = function(entity, credentialType) {
      return entity.credentialType && credentialType.toLowerCase() === entity.credentialType.toLowerCase();
    };
    CacheManager2.prototype.matchClientId = function(entity, clientId) {
      return !!(entity.clientId && clientId === entity.clientId);
    };
    CacheManager2.prototype.matchFamilyId = function(entity, familyId) {
      return !!(entity.familyId && familyId === entity.familyId);
    };
    CacheManager2.prototype.matchRealm = function(entity, realm) {
      return !!(entity.realm && realm === entity.realm);
    };
    CacheManager2.prototype.matchNativeAccountId = function(entity, nativeAccountId) {
      return !!(entity.nativeAccountId && nativeAccountId === entity.nativeAccountId);
    };
    CacheManager2.prototype.matchTarget = function(entity, target) {
      var isNotAccessTokenCredential = entity.credentialType !== CredentialType.ACCESS_TOKEN && entity.credentialType !== CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
      if (isNotAccessTokenCredential || !entity.target) {
        return false;
      }
      var entityScopeSet = ScopeSet.fromString(entity.target);
      return entityScopeSet.containsScopeSet(target);
    };
    CacheManager2.prototype.matchTokenType = function(entity, tokenType) {
      return !!(entity.tokenType && entity.tokenType === tokenType);
    };
    CacheManager2.prototype.matchKeyId = function(entity, keyId) {
      return !!(entity.keyId && entity.keyId === keyId);
    };
    CacheManager2.prototype.isAppMetadata = function(key) {
      return key.indexOf(APP_METADATA) !== -1;
    };
    CacheManager2.prototype.isAuthorityMetadata = function(key) {
      return key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) !== -1;
    };
    CacheManager2.prototype.generateAuthorityMetadataCacheKey = function(authority) {
      return AUTHORITY_METADATA_CONSTANTS.CACHE_KEY + "-" + this.clientId + "-" + authority;
    };
    CacheManager2.toObject = function(obj, json) {
      for (var propertyName in json) {
        obj[propertyName] = json[propertyName];
      }
      return obj;
    };
    return CacheManager2;
  }()
);
var DefaultStorageClass = (
  /** @class */
  function(_super) {
    __extends2(DefaultStorageClass2, _super);
    function DefaultStorageClass2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultStorageClass2.prototype.setAccount = function() {
      var notImplErr = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.getAccount = function() {
      var notImplErr = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.setIdTokenCredential = function() {
      var notImplErr = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.getIdTokenCredential = function() {
      var notImplErr = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.setAccessTokenCredential = function() {
      var notImplErr = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.getAccessTokenCredential = function() {
      var notImplErr = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.setRefreshTokenCredential = function() {
      var notImplErr = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.getRefreshTokenCredential = function() {
      var notImplErr = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.setAppMetadata = function() {
      var notImplErr = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.getAppMetadata = function() {
      var notImplErr = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.setServerTelemetry = function() {
      var notImplErr = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.getServerTelemetry = function() {
      var notImplErr = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.setAuthorityMetadata = function() {
      var notImplErr = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.getAuthorityMetadata = function() {
      var notImplErr = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.getAuthorityMetadataKeys = function() {
      var notImplErr = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.setThrottlingCache = function() {
      var notImplErr = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.getThrottlingCache = function() {
      var notImplErr = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.removeItem = function() {
      var notImplErr = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.containsKey = function() {
      var notImplErr = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.getKeys = function() {
      var notImplErr = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.getAccountKeys = function() {
      var notImplErr = "Storage interface - getAccountKeys() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.getTokenKeys = function() {
      var notImplErr = "Storage interface - getTokenKeys() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass2.prototype.clear = function() {
      return __awaiter2(this, void 0, void 0, function() {
        var notImplErr;
        return __generator2(this, function(_a) {
          notImplErr = "Storage interface - clear() has not been implemented for the cacheStorage interface.";
          throw AuthError.createUnexpectedError(notImplErr);
        });
      });
    };
    DefaultStorageClass2.prototype.updateCredentialCacheKey = function() {
      var notImplErr = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
      throw AuthError.createUnexpectedError(notImplErr);
    };
    return DefaultStorageClass2;
  }(CacheManager)
);

// node_modules/@azure/msal-common/dist/config/ClientConfiguration.js
var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;
var DEFAULT_SYSTEM_OPTIONS = {
  tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
  preventCorsPreflight: false
};
var DEFAULT_LOGGER_IMPLEMENTATION = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: false,
  logLevel: LogLevel.Info,
  correlationId: Constants.EMPTY_STRING
};
var DEFAULT_NETWORK_IMPLEMENTATION = {
  sendGetRequestAsync: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Network interface - sendGetRequestAsync() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  },
  sendPostRequestAsync: function() {
    return __awaiter2(this, void 0, void 0, function() {
      var notImplErr;
      return __generator2(this, function(_a) {
        notImplErr = "Network interface - sendPostRequestAsync() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
      });
    });
  }
};
var DEFAULT_LIBRARY_INFO = {
  sku: Constants.SKU,
  version,
  cpu: Constants.EMPTY_STRING,
  os: Constants.EMPTY_STRING
};
var DEFAULT_CLIENT_CREDENTIALS = {
  clientSecret: Constants.EMPTY_STRING,
  clientAssertion: void 0
};
var DEFAULT_AZURE_CLOUD_OPTIONS = {
  azureCloudInstance: AzureCloudInstance.None,
  tenant: "" + Constants.DEFAULT_COMMON_TENANT
};
var DEFAULT_TELEMETRY_OPTIONS = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function buildClientConfiguration(_a) {
  var userAuthOptions = _a.authOptions, userSystemOptions = _a.systemOptions, userLoggerOption = _a.loggerOptions, storageImplementation = _a.storageInterface, networkImplementation = _a.networkInterface, cryptoImplementation = _a.cryptoInterface, clientCredentials = _a.clientCredentials, libraryInfo = _a.libraryInfo, telemetry = _a.telemetry, serverTelemetryManager = _a.serverTelemetryManager, persistencePlugin = _a.persistencePlugin, serializableCache = _a.serializableCache;
  var loggerOptions = __assign2(__assign2({}, DEFAULT_LOGGER_IMPLEMENTATION), userLoggerOption);
  return {
    authOptions: buildAuthOptions(userAuthOptions),
    systemOptions: __assign2(__assign2({}, DEFAULT_SYSTEM_OPTIONS), userSystemOptions),
    loggerOptions,
    storageInterface: storageImplementation || new DefaultStorageClass(userAuthOptions.clientId, DEFAULT_CRYPTO_IMPLEMENTATION, new Logger(loggerOptions)),
    networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
    cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
    clientCredentials: clientCredentials || DEFAULT_CLIENT_CREDENTIALS,
    libraryInfo: __assign2(__assign2({}, DEFAULT_LIBRARY_INFO), libraryInfo),
    telemetry: __assign2(__assign2({}, DEFAULT_TELEMETRY_OPTIONS), telemetry),
    serverTelemetryManager: serverTelemetryManager || null,
    persistencePlugin: persistencePlugin || null,
    serializableCache: serializableCache || null
  };
}
function buildAuthOptions(authOptions) {
  return __assign2({ clientCapabilities: [], azureCloudOptions: DEFAULT_AZURE_CLOUD_OPTIONS, skipAuthorityMetadataCache: false }, authOptions);
}

// node_modules/@azure/msal-common/dist/error/ServerError.js
var ServerError = (
  /** @class */
  function(_super) {
    __extends2(ServerError2, _super);
    function ServerError2(errorCode, errorMessage, subError) {
      var _this = _super.call(this, errorCode, errorMessage, subError) || this;
      _this.name = "ServerError";
      Object.setPrototypeOf(_this, ServerError2.prototype);
      return _this;
    }
    return ServerError2;
  }(AuthError)
);

// node_modules/@azure/msal-common/dist/network/ThrottlingUtils.js
var ThrottlingUtils = (
  /** @class */
  function() {
    function ThrottlingUtils2() {
    }
    ThrottlingUtils2.generateThrottlingStorageKey = function(thumbprint) {
      return ThrottlingConstants.THROTTLING_PREFIX + "." + JSON.stringify(thumbprint);
    };
    ThrottlingUtils2.preProcess = function(cacheManager, thumbprint) {
      var _a;
      var key = ThrottlingUtils2.generateThrottlingStorageKey(thumbprint);
      var value = cacheManager.getThrottlingCache(key);
      if (value) {
        if (value.throttleTime < Date.now()) {
          cacheManager.removeItem(key);
          return;
        }
        throw new ServerError(((_a = value.errorCodes) === null || _a === void 0 ? void 0 : _a.join(" ")) || Constants.EMPTY_STRING, value.errorMessage, value.subError);
      }
    };
    ThrottlingUtils2.postProcess = function(cacheManager, thumbprint, response) {
      if (ThrottlingUtils2.checkResponseStatus(response) || ThrottlingUtils2.checkResponseForRetryAfter(response)) {
        var thumbprintValue = {
          throttleTime: ThrottlingUtils2.calculateThrottleTime(parseInt(response.headers[HeaderNames.RETRY_AFTER])),
          error: response.body.error,
          errorCodes: response.body.error_codes,
          errorMessage: response.body.error_description,
          subError: response.body.suberror
        };
        cacheManager.setThrottlingCache(ThrottlingUtils2.generateThrottlingStorageKey(thumbprint), thumbprintValue);
      }
    };
    ThrottlingUtils2.checkResponseStatus = function(response) {
      return response.status === 429 || response.status >= 500 && response.status < 600;
    };
    ThrottlingUtils2.checkResponseForRetryAfter = function(response) {
      if (response.headers) {
        return response.headers.hasOwnProperty(HeaderNames.RETRY_AFTER) && (response.status < 200 || response.status >= 300);
      }
      return false;
    };
    ThrottlingUtils2.calculateThrottleTime = function(throttleTime) {
      var time = throttleTime <= 0 ? 0 : throttleTime;
      var currentSeconds = Date.now() / 1e3;
      return Math.floor(Math.min(currentSeconds + (time || ThrottlingConstants.DEFAULT_THROTTLE_TIME_SECONDS), currentSeconds + ThrottlingConstants.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
    };
    ThrottlingUtils2.removeThrottle = function(cacheManager, clientId, request, homeAccountIdentifier) {
      var thumbprint = {
        clientId,
        authority: request.authority,
        scopes: request.scopes,
        homeAccountIdentifier,
        claims: request.claims,
        authenticationScheme: request.authenticationScheme,
        resourceRequestMethod: request.resourceRequestMethod,
        resourceRequestUri: request.resourceRequestUri,
        shrClaims: request.shrClaims,
        sshKid: request.sshKid
      };
      var key = this.generateThrottlingStorageKey(thumbprint);
      cacheManager.removeItem(key);
    };
    return ThrottlingUtils2;
  }()
);

// node_modules/@azure/msal-common/dist/network/NetworkManager.js
var NetworkManager = (
  /** @class */
  function() {
    function NetworkManager2(networkClient, cacheManager) {
      this.networkClient = networkClient;
      this.cacheManager = cacheManager;
    }
    NetworkManager2.prototype.sendPostRequest = function(thumbprint, tokenEndpoint, options) {
      return __awaiter2(this, void 0, void 0, function() {
        var response, e_1;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              ThrottlingUtils.preProcess(this.cacheManager, thumbprint);
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4, this.networkClient.sendPostRequestAsync(tokenEndpoint, options)];
            case 2:
              response = _a.sent();
              return [3, 4];
            case 3:
              e_1 = _a.sent();
              if (e_1 instanceof AuthError) {
                throw e_1;
              } else {
                throw ClientAuthError.createNetworkError(tokenEndpoint, e_1);
              }
            case 4:
              ThrottlingUtils.postProcess(this.cacheManager, thumbprint, response);
              return [2, response];
          }
        });
      });
    };
    return NetworkManager2;
  }()
);

// node_modules/@azure/msal-common/dist/account/CcsCredential.js
var CcsCredentialType;
(function(CcsCredentialType2) {
  CcsCredentialType2["HOME_ACCOUNT_ID"] = "home_account_id";
  CcsCredentialType2["UPN"] = "UPN";
})(CcsCredentialType || (CcsCredentialType = {}));

// node_modules/@azure/msal-common/dist/request/RequestValidator.js
var RequestValidator = (
  /** @class */
  function() {
    function RequestValidator2() {
    }
    RequestValidator2.validateRedirectUri = function(redirectUri) {
      if (StringUtils.isEmpty(redirectUri)) {
        throw ClientConfigurationError.createRedirectUriEmptyError();
      }
    };
    RequestValidator2.validatePrompt = function(prompt) {
      var promptValues = [];
      for (var value in PromptValue) {
        promptValues.push(PromptValue[value]);
      }
      if (promptValues.indexOf(prompt) < 0) {
        throw ClientConfigurationError.createInvalidPromptError(prompt);
      }
    };
    RequestValidator2.validateClaims = function(claims) {
      try {
        JSON.parse(claims);
      } catch (e2) {
        throw ClientConfigurationError.createInvalidClaimsRequestError();
      }
    };
    RequestValidator2.validateCodeChallengeParams = function(codeChallenge, codeChallengeMethod) {
      if (StringUtils.isEmpty(codeChallenge) || StringUtils.isEmpty(codeChallengeMethod)) {
        throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
      } else {
        this.validateCodeChallengeMethod(codeChallengeMethod);
      }
    };
    RequestValidator2.validateCodeChallengeMethod = function(codeChallengeMethod) {
      if ([
        CodeChallengeMethodValues.PLAIN,
        CodeChallengeMethodValues.S256
      ].indexOf(codeChallengeMethod) < 0) {
        throw ClientConfigurationError.createInvalidCodeChallengeMethodError();
      }
    };
    RequestValidator2.sanitizeEQParams = function(eQParams, queryParams) {
      if (!eQParams) {
        return {};
      }
      queryParams.forEach(function(value, key) {
        if (eQParams[key]) {
          delete eQParams[key];
        }
      });
      return Object.fromEntries(Object.entries(eQParams).filter(function(_a) {
        var value = _a[1];
        return value !== "";
      }));
    };
    return RequestValidator2;
  }()
);

// node_modules/@azure/msal-common/dist/request/RequestParameterBuilder.js
var RequestParameterBuilder = (
  /** @class */
  function() {
    function RequestParameterBuilder2() {
      this.parameters = /* @__PURE__ */ new Map();
    }
    RequestParameterBuilder2.prototype.addResponseTypeCode = function() {
      this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants.CODE_RESPONSE_TYPE));
    };
    RequestParameterBuilder2.prototype.addResponseTypeForTokenAndIdToken = function() {
      this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants.TOKEN_RESPONSE_TYPE + " " + Constants.ID_TOKEN_RESPONSE_TYPE));
    };
    RequestParameterBuilder2.prototype.addResponseMode = function(responseMode) {
      this.parameters.set(AADServerParamKeys.RESPONSE_MODE, encodeURIComponent(responseMode ? responseMode : ResponseMode.QUERY));
    };
    RequestParameterBuilder2.prototype.addNativeBroker = function() {
      this.parameters.set(AADServerParamKeys.NATIVE_BROKER, encodeURIComponent("1"));
    };
    RequestParameterBuilder2.prototype.addScopes = function(scopes, addOidcScopes) {
      if (addOidcScopes === void 0) {
        addOidcScopes = true;
      }
      var requestScopes = addOidcScopes ? __spreadArrays(scopes || [], OIDC_DEFAULT_SCOPES) : scopes || [];
      var scopeSet = new ScopeSet(requestScopes);
      this.parameters.set(AADServerParamKeys.SCOPE, encodeURIComponent(scopeSet.printScopes()));
    };
    RequestParameterBuilder2.prototype.addClientId = function(clientId) {
      this.parameters.set(AADServerParamKeys.CLIENT_ID, encodeURIComponent(clientId));
    };
    RequestParameterBuilder2.prototype.addRedirectUri = function(redirectUri) {
      RequestValidator.validateRedirectUri(redirectUri);
      this.parameters.set(AADServerParamKeys.REDIRECT_URI, encodeURIComponent(redirectUri));
    };
    RequestParameterBuilder2.prototype.addPostLogoutRedirectUri = function(redirectUri) {
      RequestValidator.validateRedirectUri(redirectUri);
      this.parameters.set(AADServerParamKeys.POST_LOGOUT_URI, encodeURIComponent(redirectUri));
    };
    RequestParameterBuilder2.prototype.addIdTokenHint = function(idTokenHint) {
      this.parameters.set(AADServerParamKeys.ID_TOKEN_HINT, encodeURIComponent(idTokenHint));
    };
    RequestParameterBuilder2.prototype.addDomainHint = function(domainHint) {
      this.parameters.set(SSOTypes.DOMAIN_HINT, encodeURIComponent(domainHint));
    };
    RequestParameterBuilder2.prototype.addLoginHint = function(loginHint) {
      this.parameters.set(SSOTypes.LOGIN_HINT, encodeURIComponent(loginHint));
    };
    RequestParameterBuilder2.prototype.addCcsUpn = function(loginHint) {
      this.parameters.set(HeaderNames.CCS_HEADER, encodeURIComponent("UPN:" + loginHint));
    };
    RequestParameterBuilder2.prototype.addCcsOid = function(clientInfo) {
      this.parameters.set(HeaderNames.CCS_HEADER, encodeURIComponent("Oid:" + clientInfo.uid + "@" + clientInfo.utid));
    };
    RequestParameterBuilder2.prototype.addSid = function(sid) {
      this.parameters.set(SSOTypes.SID, encodeURIComponent(sid));
    };
    RequestParameterBuilder2.prototype.addClaims = function(claims, clientCapabilities) {
      var mergedClaims = this.addClientCapabilitiesToClaims(claims, clientCapabilities);
      RequestValidator.validateClaims(mergedClaims);
      this.parameters.set(AADServerParamKeys.CLAIMS, encodeURIComponent(mergedClaims));
    };
    RequestParameterBuilder2.prototype.addCorrelationId = function(correlationId) {
      this.parameters.set(AADServerParamKeys.CLIENT_REQUEST_ID, encodeURIComponent(correlationId));
    };
    RequestParameterBuilder2.prototype.addLibraryInfo = function(libraryInfo) {
      this.parameters.set(AADServerParamKeys.X_CLIENT_SKU, libraryInfo.sku);
      this.parameters.set(AADServerParamKeys.X_CLIENT_VER, libraryInfo.version);
      if (libraryInfo.os) {
        this.parameters.set(AADServerParamKeys.X_CLIENT_OS, libraryInfo.os);
      }
      if (libraryInfo.cpu) {
        this.parameters.set(AADServerParamKeys.X_CLIENT_CPU, libraryInfo.cpu);
      }
    };
    RequestParameterBuilder2.prototype.addApplicationTelemetry = function(appTelemetry) {
      if (appTelemetry === null || appTelemetry === void 0 ? void 0 : appTelemetry.appName) {
        this.parameters.set(AADServerParamKeys.X_APP_NAME, appTelemetry.appName);
      }
      if (appTelemetry === null || appTelemetry === void 0 ? void 0 : appTelemetry.appVersion) {
        this.parameters.set(AADServerParamKeys.X_APP_VER, appTelemetry.appVersion);
      }
    };
    RequestParameterBuilder2.prototype.addPrompt = function(prompt) {
      RequestValidator.validatePrompt(prompt);
      this.parameters.set("" + AADServerParamKeys.PROMPT, encodeURIComponent(prompt));
    };
    RequestParameterBuilder2.prototype.addState = function(state2) {
      if (!StringUtils.isEmpty(state2)) {
        this.parameters.set(AADServerParamKeys.STATE, encodeURIComponent(state2));
      }
    };
    RequestParameterBuilder2.prototype.addNonce = function(nonce) {
      this.parameters.set(AADServerParamKeys.NONCE, encodeURIComponent(nonce));
    };
    RequestParameterBuilder2.prototype.addCodeChallengeParams = function(codeChallenge, codeChallengeMethod) {
      RequestValidator.validateCodeChallengeParams(codeChallenge, codeChallengeMethod);
      if (codeChallenge && codeChallengeMethod) {
        this.parameters.set(AADServerParamKeys.CODE_CHALLENGE, encodeURIComponent(codeChallenge));
        this.parameters.set(AADServerParamKeys.CODE_CHALLENGE_METHOD, encodeURIComponent(codeChallengeMethod));
      } else {
        throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
      }
    };
    RequestParameterBuilder2.prototype.addAuthorizationCode = function(code) {
      this.parameters.set(AADServerParamKeys.CODE, encodeURIComponent(code));
    };
    RequestParameterBuilder2.prototype.addDeviceCode = function(code) {
      this.parameters.set(AADServerParamKeys.DEVICE_CODE, encodeURIComponent(code));
    };
    RequestParameterBuilder2.prototype.addRefreshToken = function(refreshToken) {
      this.parameters.set(AADServerParamKeys.REFRESH_TOKEN, encodeURIComponent(refreshToken));
    };
    RequestParameterBuilder2.prototype.addCodeVerifier = function(codeVerifier) {
      this.parameters.set(AADServerParamKeys.CODE_VERIFIER, encodeURIComponent(codeVerifier));
    };
    RequestParameterBuilder2.prototype.addClientSecret = function(clientSecret) {
      this.parameters.set(AADServerParamKeys.CLIENT_SECRET, encodeURIComponent(clientSecret));
    };
    RequestParameterBuilder2.prototype.addClientAssertion = function(clientAssertion) {
      if (!StringUtils.isEmpty(clientAssertion)) {
        this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION, encodeURIComponent(clientAssertion));
      }
    };
    RequestParameterBuilder2.prototype.addClientAssertionType = function(clientAssertionType) {
      if (!StringUtils.isEmpty(clientAssertionType)) {
        this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION_TYPE, encodeURIComponent(clientAssertionType));
      }
    };
    RequestParameterBuilder2.prototype.addOboAssertion = function(oboAssertion) {
      this.parameters.set(AADServerParamKeys.OBO_ASSERTION, encodeURIComponent(oboAssertion));
    };
    RequestParameterBuilder2.prototype.addRequestTokenUse = function(tokenUse) {
      this.parameters.set(AADServerParamKeys.REQUESTED_TOKEN_USE, encodeURIComponent(tokenUse));
    };
    RequestParameterBuilder2.prototype.addGrantType = function(grantType) {
      this.parameters.set(AADServerParamKeys.GRANT_TYPE, encodeURIComponent(grantType));
    };
    RequestParameterBuilder2.prototype.addClientInfo = function() {
      this.parameters.set(CLIENT_INFO, "1");
    };
    RequestParameterBuilder2.prototype.addExtraQueryParameters = function(eQParams) {
      var _this = this;
      var sanitizedEQParams = RequestValidator.sanitizeEQParams(eQParams, this.parameters);
      Object.keys(sanitizedEQParams).forEach(function(key) {
        _this.parameters.set(key, eQParams[key]);
      });
    };
    RequestParameterBuilder2.prototype.addClientCapabilitiesToClaims = function(claims, clientCapabilities) {
      var mergedClaims;
      if (!claims) {
        mergedClaims = {};
      } else {
        try {
          mergedClaims = JSON.parse(claims);
        } catch (e2) {
          throw ClientConfigurationError.createInvalidClaimsRequestError();
        }
      }
      if (clientCapabilities && clientCapabilities.length > 0) {
        if (!mergedClaims.hasOwnProperty(ClaimsRequestKeys.ACCESS_TOKEN)) {
          mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN] = {};
        }
        mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN][ClaimsRequestKeys.XMS_CC] = {
          values: clientCapabilities
        };
      }
      return JSON.stringify(mergedClaims);
    };
    RequestParameterBuilder2.prototype.addUsername = function(username) {
      this.parameters.set(PasswordGrantConstants.username, encodeURIComponent(username));
    };
    RequestParameterBuilder2.prototype.addPassword = function(password) {
      this.parameters.set(PasswordGrantConstants.password, encodeURIComponent(password));
    };
    RequestParameterBuilder2.prototype.addPopToken = function(cnfString) {
      if (!StringUtils.isEmpty(cnfString)) {
        this.parameters.set(AADServerParamKeys.TOKEN_TYPE, AuthenticationScheme.POP);
        this.parameters.set(AADServerParamKeys.REQ_CNF, encodeURIComponent(cnfString));
      }
    };
    RequestParameterBuilder2.prototype.addSshJwk = function(sshJwkString) {
      if (!StringUtils.isEmpty(sshJwkString)) {
        this.parameters.set(AADServerParamKeys.TOKEN_TYPE, AuthenticationScheme.SSH);
        this.parameters.set(AADServerParamKeys.REQ_CNF, encodeURIComponent(sshJwkString));
      }
    };
    RequestParameterBuilder2.prototype.addServerTelemetry = function(serverTelemetryManager) {
      this.parameters.set(AADServerParamKeys.X_CLIENT_CURR_TELEM, serverTelemetryManager.generateCurrentRequestHeaderValue());
      this.parameters.set(AADServerParamKeys.X_CLIENT_LAST_TELEM, serverTelemetryManager.generateLastRequestHeaderValue());
    };
    RequestParameterBuilder2.prototype.addThrottling = function() {
      this.parameters.set(AADServerParamKeys.X_MS_LIB_CAPABILITY, ThrottlingConstants.X_MS_LIB_CAPABILITY_VALUE);
    };
    RequestParameterBuilder2.prototype.addLogoutHint = function(logoutHint) {
      this.parameters.set(AADServerParamKeys.LOGOUT_HINT, encodeURIComponent(logoutHint));
    };
    RequestParameterBuilder2.prototype.createQueryString = function() {
      var queryParameterArray = new Array();
      this.parameters.forEach(function(value, key) {
        queryParameterArray.push(key + "=" + value);
      });
      return queryParameterArray.join("&");
    };
    return RequestParameterBuilder2;
  }()
);

// node_modules/@azure/msal-common/dist/client/BaseClient.js
var BaseClient = (
  /** @class */
  function() {
    function BaseClient2(configuration, performanceClient) {
      this.config = buildClientConfiguration(configuration);
      this.logger = new Logger(this.config.loggerOptions, name, version);
      this.cryptoUtils = this.config.cryptoInterface;
      this.cacheManager = this.config.storageInterface;
      this.networkClient = this.config.networkInterface;
      this.networkManager = new NetworkManager(this.networkClient, this.cacheManager);
      this.serverTelemetryManager = this.config.serverTelemetryManager;
      this.authority = this.config.authOptions.authority;
      this.performanceClient = performanceClient;
    }
    BaseClient2.prototype.createTokenRequestHeaders = function(ccsCred) {
      var headers = {};
      headers[HeaderNames.CONTENT_TYPE] = Constants.URL_FORM_CONTENT_TYPE;
      if (!this.config.systemOptions.preventCorsPreflight && ccsCred) {
        switch (ccsCred.type) {
          case CcsCredentialType.HOME_ACCOUNT_ID:
            try {
              var clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
              headers[HeaderNames.CCS_HEADER] = "Oid:" + clientInfo.uid + "@" + clientInfo.utid;
            } catch (e2) {
              this.logger.verbose("Could not parse home account ID for CCS Header: " + e2);
            }
            break;
          case CcsCredentialType.UPN:
            headers[HeaderNames.CCS_HEADER] = "UPN: " + ccsCred.credential;
            break;
        }
      }
      return headers;
    };
    BaseClient2.prototype.executePostToTokenEndpoint = function(tokenEndpoint, queryString, headers, thumbprint) {
      return __awaiter2(this, void 0, void 0, function() {
        var response;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.networkManager.sendPostRequest(thumbprint, tokenEndpoint, { body: queryString, headers })];
            case 1:
              response = _a.sent();
              if (this.config.serverTelemetryManager && response.status < 500 && response.status !== 429) {
                this.config.serverTelemetryManager.clearTelemetryCache();
              }
              return [2, response];
          }
        });
      });
    };
    BaseClient2.prototype.updateAuthority = function(updatedAuthority) {
      if (!updatedAuthority.discoveryComplete()) {
        throw ClientAuthError.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
      }
      this.authority = updatedAuthority;
    };
    BaseClient2.prototype.createTokenQueryParameters = function(request) {
      var parameterBuilder = new RequestParameterBuilder();
      if (request.tokenQueryParameters) {
        parameterBuilder.addExtraQueryParameters(request.tokenQueryParameters);
      }
      return parameterBuilder.createQueryString();
    };
    return BaseClient2;
  }()
);

// node_modules/@azure/msal-common/dist/cache/entities/CredentialEntity.js
var CredentialEntity = (
  /** @class */
  function() {
    function CredentialEntity2() {
    }
    CredentialEntity2.prototype.generateAccountId = function() {
      return CredentialEntity2.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
    };
    CredentialEntity2.prototype.generateCredentialId = function() {
      return CredentialEntity2.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
    };
    CredentialEntity2.prototype.generateTarget = function() {
      return CredentialEntity2.generateTargetForCacheKey(this.target);
    };
    CredentialEntity2.prototype.generateCredentialKey = function() {
      return CredentialEntity2.generateCredentialCacheKey(this.homeAccountId, this.environment, this.credentialType, this.clientId, this.realm, this.target, this.familyId, this.tokenType, this.requestedClaimsHash);
    };
    CredentialEntity2.prototype.generateType = function() {
      switch (this.credentialType) {
        case CredentialType.ID_TOKEN:
          return CacheType.ID_TOKEN;
        case CredentialType.ACCESS_TOKEN:
        case CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          return CacheType.ACCESS_TOKEN;
        case CredentialType.REFRESH_TOKEN:
          return CacheType.REFRESH_TOKEN;
        default: {
          throw ClientAuthError.createUnexpectedCredentialTypeError();
        }
      }
    };
    CredentialEntity2.generateCredentialCacheKey = function(homeAccountId, environment, credentialType, clientId, realm, target, familyId, tokenType, requestedClaimsHash) {
      var credentialKey = [
        this.generateAccountIdForCacheKey(homeAccountId, environment),
        this.generateCredentialIdForCacheKey(credentialType, clientId, realm, familyId),
        this.generateTargetForCacheKey(target),
        this.generateClaimsHashForCacheKey(requestedClaimsHash),
        this.generateSchemeForCacheKey(tokenType)
      ];
      return credentialKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    CredentialEntity2.generateAccountIdForCacheKey = function(homeAccountId, environment) {
      var accountId = [homeAccountId, environment];
      return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    CredentialEntity2.generateCredentialIdForCacheKey = function(credentialType, clientId, realm, familyId) {
      var clientOrFamilyId = credentialType === CredentialType.REFRESH_TOKEN ? familyId || clientId : clientId;
      var credentialId = [
        credentialType,
        clientOrFamilyId,
        realm || Constants.EMPTY_STRING
      ];
      return credentialId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    CredentialEntity2.generateTargetForCacheKey = function(scopes) {
      return (scopes || Constants.EMPTY_STRING).toLowerCase();
    };
    CredentialEntity2.generateClaimsHashForCacheKey = function(requestedClaimsHash) {
      return (requestedClaimsHash || Constants.EMPTY_STRING).toLowerCase();
    };
    CredentialEntity2.generateSchemeForCacheKey = function(tokenType) {
      return tokenType && tokenType.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase() ? tokenType.toLowerCase() : Constants.EMPTY_STRING;
    };
    return CredentialEntity2;
  }()
);

// node_modules/@azure/msal-common/dist/cache/entities/IdTokenEntity.js
var IdTokenEntity = (
  /** @class */
  function(_super) {
    __extends2(IdTokenEntity2, _super);
    function IdTokenEntity2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    IdTokenEntity2.createIdTokenEntity = function(homeAccountId, environment, idToken, clientId, tenantId) {
      var idTokenEntity = new IdTokenEntity2();
      idTokenEntity.credentialType = CredentialType.ID_TOKEN;
      idTokenEntity.homeAccountId = homeAccountId;
      idTokenEntity.environment = environment;
      idTokenEntity.clientId = clientId;
      idTokenEntity.secret = idToken;
      idTokenEntity.realm = tenantId;
      return idTokenEntity;
    };
    IdTokenEntity2.isIdTokenEntity = function(entity) {
      if (!entity) {
        return false;
      }
      return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("credentialType") && entity.hasOwnProperty("realm") && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("secret") && entity["credentialType"] === CredentialType.ID_TOKEN;
    };
    return IdTokenEntity2;
  }(CredentialEntity)
);

// node_modules/@azure/msal-common/dist/utils/TimeUtils.js
var TimeUtils = (
  /** @class */
  function() {
    function TimeUtils2() {
    }
    TimeUtils2.nowSeconds = function() {
      return Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
    };
    TimeUtils2.isTokenExpired = function(expiresOn, offset2) {
      var expirationSec = Number(expiresOn) || 0;
      var offsetCurrentTimeSec = TimeUtils2.nowSeconds() + offset2;
      return offsetCurrentTimeSec > expirationSec;
    };
    TimeUtils2.wasClockTurnedBack = function(cachedAt) {
      var cachedAtSec = Number(cachedAt);
      return cachedAtSec > TimeUtils2.nowSeconds();
    };
    TimeUtils2.delay = function(t2, value) {
      return new Promise(function(resolve) {
        return setTimeout(function() {
          return resolve(value);
        }, t2);
      });
    };
    return TimeUtils2;
  }()
);

// node_modules/@azure/msal-common/dist/cache/entities/AccessTokenEntity.js
var AccessTokenEntity = (
  /** @class */
  function(_super) {
    __extends2(AccessTokenEntity2, _super);
    function AccessTokenEntity2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    AccessTokenEntity2.createAccessTokenEntity = function(homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn, cryptoUtils, refreshOn, tokenType, userAssertionHash, keyId, requestedClaims, requestedClaimsHash) {
      var _a, _b;
      var atEntity = new AccessTokenEntity2();
      atEntity.homeAccountId = homeAccountId;
      atEntity.credentialType = CredentialType.ACCESS_TOKEN;
      atEntity.secret = accessToken;
      var currentTime = TimeUtils.nowSeconds();
      atEntity.cachedAt = currentTime.toString();
      atEntity.expiresOn = expiresOn.toString();
      atEntity.extendedExpiresOn = extExpiresOn.toString();
      if (refreshOn) {
        atEntity.refreshOn = refreshOn.toString();
      }
      atEntity.environment = environment;
      atEntity.clientId = clientId;
      atEntity.realm = tenantId;
      atEntity.target = scopes;
      atEntity.userAssertionHash = userAssertionHash;
      atEntity.tokenType = StringUtils.isEmpty(tokenType) ? AuthenticationScheme.BEARER : tokenType;
      if (requestedClaims) {
        atEntity.requestedClaims = requestedClaims;
        atEntity.requestedClaimsHash = requestedClaimsHash;
      }
      if (((_a = atEntity.tokenType) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== AuthenticationScheme.BEARER.toLowerCase()) {
        atEntity.credentialType = CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
        switch (atEntity.tokenType) {
          case AuthenticationScheme.POP:
            var tokenClaims = AuthToken.extractTokenClaims(accessToken, cryptoUtils);
            if (!((_b = tokenClaims === null || tokenClaims === void 0 ? void 0 : tokenClaims.cnf) === null || _b === void 0 ? void 0 : _b.kid)) {
              throw ClientAuthError.createTokenClaimsRequiredError();
            }
            atEntity.keyId = tokenClaims.cnf.kid;
            break;
          case AuthenticationScheme.SSH:
            atEntity.keyId = keyId;
        }
      }
      return atEntity;
    };
    AccessTokenEntity2.isAccessTokenEntity = function(entity) {
      if (!entity) {
        return false;
      }
      return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("credentialType") && entity.hasOwnProperty("realm") && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("secret") && entity.hasOwnProperty("target") && (entity["credentialType"] === CredentialType.ACCESS_TOKEN || entity["credentialType"] === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME);
    };
    return AccessTokenEntity2;
  }(CredentialEntity)
);

// node_modules/@azure/msal-common/dist/cache/entities/RefreshTokenEntity.js
var RefreshTokenEntity = (
  /** @class */
  function(_super) {
    __extends2(RefreshTokenEntity2, _super);
    function RefreshTokenEntity2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    RefreshTokenEntity2.createRefreshTokenEntity = function(homeAccountId, environment, refreshToken, clientId, familyId, userAssertionHash) {
      var rtEntity = new RefreshTokenEntity2();
      rtEntity.clientId = clientId;
      rtEntity.credentialType = CredentialType.REFRESH_TOKEN;
      rtEntity.environment = environment;
      rtEntity.homeAccountId = homeAccountId;
      rtEntity.secret = refreshToken;
      rtEntity.userAssertionHash = userAssertionHash;
      if (familyId)
        rtEntity.familyId = familyId;
      return rtEntity;
    };
    RefreshTokenEntity2.isRefreshTokenEntity = function(entity) {
      if (!entity) {
        return false;
      }
      return entity.hasOwnProperty("homeAccountId") && entity.hasOwnProperty("environment") && entity.hasOwnProperty("credentialType") && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("secret") && entity["credentialType"] === CredentialType.REFRESH_TOKEN;
    };
    return RefreshTokenEntity2;
  }(CredentialEntity)
);

// node_modules/@azure/msal-common/dist/error/InteractionRequiredAuthError.js
var InteractionRequiredServerErrorMessage = [
  "interaction_required",
  "consent_required",
  "login_required"
];
var InteractionRequiredAuthSubErrorMessage = [
  "message_only",
  "additional_action",
  "basic_action",
  "user_password_expired",
  "consent_required"
];
var InteractionRequiredAuthErrorMessage = {
  noTokensFoundError: {
    code: "no_tokens_found",
    desc: "No refresh token found in the cache. Please sign-in."
  },
  native_account_unavailable: {
    code: "native_account_unavailable",
    desc: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API."
  }
};
var InteractionRequiredAuthError = (
  /** @class */
  function(_super) {
    __extends2(InteractionRequiredAuthError2, _super);
    function InteractionRequiredAuthError2(errorCode, errorMessage, subError, timestamp, traceId, correlationId, claims) {
      var _this = _super.call(this, errorCode, errorMessage, subError) || this;
      Object.setPrototypeOf(_this, InteractionRequiredAuthError2.prototype);
      _this.timestamp = timestamp || Constants.EMPTY_STRING;
      _this.traceId = traceId || Constants.EMPTY_STRING;
      _this.correlationId = correlationId || Constants.EMPTY_STRING;
      _this.claims = claims || Constants.EMPTY_STRING;
      _this.name = "InteractionRequiredAuthError";
      return _this;
    }
    InteractionRequiredAuthError2.isInteractionRequiredError = function(errorCode, errorString, subError) {
      var isInteractionRequiredErrorCode = !!errorCode && InteractionRequiredServerErrorMessage.indexOf(errorCode) > -1;
      var isInteractionRequiredSubError = !!subError && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
      var isInteractionRequiredErrorDesc = !!errorString && InteractionRequiredServerErrorMessage.some(function(irErrorCode) {
        return errorString.indexOf(irErrorCode) > -1;
      });
      return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
    };
    InteractionRequiredAuthError2.createNoTokensFoundError = function() {
      return new InteractionRequiredAuthError2(InteractionRequiredAuthErrorMessage.noTokensFoundError.code, InteractionRequiredAuthErrorMessage.noTokensFoundError.desc);
    };
    InteractionRequiredAuthError2.createNativeAccountUnavailableError = function() {
      return new InteractionRequiredAuthError2(InteractionRequiredAuthErrorMessage.native_account_unavailable.code, InteractionRequiredAuthErrorMessage.native_account_unavailable.desc);
    };
    return InteractionRequiredAuthError2;
  }(AuthError)
);

// node_modules/@azure/msal-common/dist/cache/entities/CacheRecord.js
var CacheRecord = (
  /** @class */
  function() {
    function CacheRecord2(accountEntity, idTokenEntity, accessTokenEntity, refreshTokenEntity, appMetadataEntity) {
      this.account = accountEntity || null;
      this.idToken = idTokenEntity || null;
      this.accessToken = accessTokenEntity || null;
      this.refreshToken = refreshTokenEntity || null;
      this.appMetadata = appMetadataEntity || null;
    }
    return CacheRecord2;
  }()
);

// node_modules/@azure/msal-common/dist/utils/ProtocolUtils.js
var ProtocolUtils = (
  /** @class */
  function() {
    function ProtocolUtils2() {
    }
    ProtocolUtils2.setRequestState = function(cryptoObj, userState, meta) {
      var libraryState = ProtocolUtils2.generateLibraryState(cryptoObj, meta);
      return !StringUtils.isEmpty(userState) ? "" + libraryState + Constants.RESOURCE_DELIM + userState : libraryState;
    };
    ProtocolUtils2.generateLibraryState = function(cryptoObj, meta) {
      if (!cryptoObj) {
        throw ClientAuthError.createNoCryptoObjectError("generateLibraryState");
      }
      var stateObj = {
        id: cryptoObj.createNewGuid()
      };
      if (meta) {
        stateObj.meta = meta;
      }
      var stateString = JSON.stringify(stateObj);
      return cryptoObj.base64Encode(stateString);
    };
    ProtocolUtils2.parseRequestState = function(cryptoObj, state2) {
      if (!cryptoObj) {
        throw ClientAuthError.createNoCryptoObjectError("parseRequestState");
      }
      if (StringUtils.isEmpty(state2)) {
        throw ClientAuthError.createInvalidStateError(state2, "Null, undefined or empty state");
      }
      try {
        var splitState = state2.split(Constants.RESOURCE_DELIM);
        var libraryState = splitState[0];
        var userState = splitState.length > 1 ? splitState.slice(1).join(Constants.RESOURCE_DELIM) : Constants.EMPTY_STRING;
        var libraryStateString = cryptoObj.base64Decode(libraryState);
        var libraryStateObj = JSON.parse(libraryStateString);
        return {
          userRequestState: !StringUtils.isEmpty(userState) ? userState : Constants.EMPTY_STRING,
          libraryState: libraryStateObj
        };
      } catch (e2) {
        throw ClientAuthError.createInvalidStateError(state2, e2);
      }
    };
    return ProtocolUtils2;
  }()
);

// node_modules/@azure/msal-common/dist/url/UrlString.js
var UrlString = (
  /** @class */
  function() {
    function UrlString2(url) {
      this._urlString = url;
      if (StringUtils.isEmpty(this._urlString)) {
        throw ClientConfigurationError.createUrlEmptyError();
      }
      if (StringUtils.isEmpty(this.getHash())) {
        this._urlString = UrlString2.canonicalizeUri(url);
      }
    }
    Object.defineProperty(UrlString2.prototype, "urlString", {
      get: function() {
        return this._urlString;
      },
      enumerable: false,
      configurable: true
    });
    UrlString2.canonicalizeUri = function(url) {
      if (url) {
        var lowerCaseUrl = url.toLowerCase();
        if (StringUtils.endsWith(lowerCaseUrl, "?")) {
          lowerCaseUrl = lowerCaseUrl.slice(0, -1);
        } else if (StringUtils.endsWith(lowerCaseUrl, "?/")) {
          lowerCaseUrl = lowerCaseUrl.slice(0, -2);
        }
        if (!StringUtils.endsWith(lowerCaseUrl, "/")) {
          lowerCaseUrl += "/";
        }
        return lowerCaseUrl;
      }
      return url;
    };
    UrlString2.prototype.validateAsUri = function() {
      var components;
      try {
        components = this.getUrlComponents();
      } catch (e2) {
        throw ClientConfigurationError.createUrlParseError(e2);
      }
      if (!components.HostNameAndPort || !components.PathSegments) {
        throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
      }
      if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
        throw ClientConfigurationError.createInsecureAuthorityUriError(this.urlString);
      }
    };
    UrlString2.appendQueryString = function(url, queryString) {
      if (StringUtils.isEmpty(queryString)) {
        return url;
      }
      return url.indexOf("?") < 0 ? url + "?" + queryString : url + "&" + queryString;
    };
    UrlString2.removeHashFromUrl = function(url) {
      return UrlString2.canonicalizeUri(url.split("#")[0]);
    };
    UrlString2.prototype.replaceTenantPath = function(tenantId) {
      var urlObject = this.getUrlComponents();
      var pathArray = urlObject.PathSegments;
      if (tenantId && (pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS))) {
        pathArray[0] = tenantId;
      }
      return UrlString2.constructAuthorityUriFromObject(urlObject);
    };
    UrlString2.prototype.getHash = function() {
      return UrlString2.parseHash(this.urlString);
    };
    UrlString2.prototype.getUrlComponents = function() {
      var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
      var match = this.urlString.match(regEx);
      if (!match) {
        throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
      }
      var urlComponents = {
        Protocol: match[1],
        HostNameAndPort: match[4],
        AbsolutePath: match[5],
        QueryString: match[7]
      };
      var pathSegments = urlComponents.AbsolutePath.split("/");
      pathSegments = pathSegments.filter(function(val) {
        return val && val.length > 0;
      });
      urlComponents.PathSegments = pathSegments;
      if (!StringUtils.isEmpty(urlComponents.QueryString) && urlComponents.QueryString.endsWith("/")) {
        urlComponents.QueryString = urlComponents.QueryString.substring(0, urlComponents.QueryString.length - 1);
      }
      return urlComponents;
    };
    UrlString2.getDomainFromUrl = function(url) {
      var regEx = RegExp("^([^:/?#]+://)?([^/?#]*)");
      var match = url.match(regEx);
      if (!match) {
        throw ClientConfigurationError.createUrlParseError("Given url string: " + url);
      }
      return match[2];
    };
    UrlString2.getAbsoluteUrl = function(relativeUrl, baseUrl) {
      if (relativeUrl[0] === Constants.FORWARD_SLASH) {
        var url = new UrlString2(baseUrl);
        var baseComponents = url.getUrlComponents();
        return baseComponents.Protocol + "//" + baseComponents.HostNameAndPort + relativeUrl;
      }
      return relativeUrl;
    };
    UrlString2.parseHash = function(hashString) {
      var hashIndex1 = hashString.indexOf("#");
      var hashIndex2 = hashString.indexOf("#/");
      if (hashIndex2 > -1) {
        return hashString.substring(hashIndex2 + 2);
      } else if (hashIndex1 > -1) {
        return hashString.substring(hashIndex1 + 1);
      }
      return Constants.EMPTY_STRING;
    };
    UrlString2.parseQueryString = function(queryString) {
      var queryIndex1 = queryString.indexOf("?");
      var queryIndex2 = queryString.indexOf("/?");
      if (queryIndex2 > -1) {
        return queryString.substring(queryIndex2 + 2);
      } else if (queryIndex1 > -1) {
        return queryString.substring(queryIndex1 + 1);
      }
      return Constants.EMPTY_STRING;
    };
    UrlString2.constructAuthorityUriFromObject = function(urlObject) {
      return new UrlString2(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
    };
    UrlString2.getDeserializedHash = function(hash) {
      if (StringUtils.isEmpty(hash)) {
        return {};
      }
      var parsedHash = UrlString2.parseHash(hash);
      var deserializedHash = StringUtils.queryStringToObject(StringUtils.isEmpty(parsedHash) ? hash : parsedHash);
      if (!deserializedHash) {
        throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedHash));
      }
      return deserializedHash;
    };
    UrlString2.getDeserializedQueryString = function(query2) {
      if (StringUtils.isEmpty(query2)) {
        return {};
      }
      var parsedQueryString = UrlString2.parseQueryString(query2);
      var deserializedQueryString = StringUtils.queryStringToObject(StringUtils.isEmpty(parsedQueryString) ? query2 : parsedQueryString);
      if (!deserializedQueryString) {
        throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedQueryString));
      }
      return deserializedQueryString;
    };
    UrlString2.hashContainsKnownProperties = function(hash) {
      if (StringUtils.isEmpty(hash) || hash.indexOf("=") < 0) {
        return false;
      }
      var parameters = UrlString2.getDeserializedHash(hash);
      return !!(parameters.code || parameters.error_description || parameters.error || parameters.state);
    };
    return UrlString2;
  }()
);

// node_modules/@azure/msal-common/dist/telemetry/performance/PerformanceEvent.js
var PerformanceEvents;
(function(PerformanceEvents2) {
  PerformanceEvents2["AcquireTokenByCode"] = "acquireTokenByCode";
  PerformanceEvents2["AcquireTokenByRefreshToken"] = "acquireTokenByRefreshToken";
  PerformanceEvents2["AcquireTokenSilent"] = "acquireTokenSilent";
  PerformanceEvents2["AcquireTokenSilentAsync"] = "acquireTokenSilentAsync";
  PerformanceEvents2["AcquireTokenPopup"] = "acquireTokenPopup";
  PerformanceEvents2["CryptoOptsGetPublicKeyThumbprint"] = "cryptoOptsGetPublicKeyThumbprint";
  PerformanceEvents2["CryptoOptsSignJwt"] = "cryptoOptsSignJwt";
  PerformanceEvents2["SilentCacheClientAcquireToken"] = "silentCacheClientAcquireToken";
  PerformanceEvents2["SilentIframeClientAcquireToken"] = "silentIframeClientAcquireToken";
  PerformanceEvents2["SilentRefreshClientAcquireToken"] = "silentRefreshClientAcquireToken";
  PerformanceEvents2["SsoSilent"] = "ssoSilent";
  PerformanceEvents2["StandardInteractionClientGetDiscoveredAuthority"] = "standardInteractionClientGetDiscoveredAuthority";
  PerformanceEvents2["FetchAccountIdWithNativeBroker"] = "fetchAccountIdWithNativeBroker";
  PerformanceEvents2["NativeInteractionClientAcquireToken"] = "nativeInteractionClientAcquireToken";
  PerformanceEvents2["BaseClientCreateTokenRequestHeaders"] = "baseClientCreateTokenRequestHeaders";
  PerformanceEvents2["BrokerHandhshake"] = "brokerHandshake";
  PerformanceEvents2["AcquireTokenByRefreshTokenInBroker"] = "acquireTokenByRefreshTokenInBroker";
  PerformanceEvents2["AcquireTokenByBroker"] = "acquireTokenByBroker";
  PerformanceEvents2["RefreshTokenClientExecuteTokenRequest"] = "refreshTokenClientExecuteTokenRequest";
  PerformanceEvents2["RefreshTokenClientAcquireToken"] = "refreshTokenClientAcquireToken";
  PerformanceEvents2["RefreshTokenClientAcquireTokenWithCachedRefreshToken"] = "refreshTokenClientAcquireTokenWithCachedRefreshToken";
  PerformanceEvents2["RefreshTokenClientAcquireTokenByRefreshToken"] = "refreshTokenClientAcquireTokenByRefreshToken";
  PerformanceEvents2["RefreshTokenClientCreateTokenRequestBody"] = "refreshTokenClientCreateTokenRequestBody";
  PerformanceEvents2["AcquireTokenFromCache"] = "acquireTokenFromCache";
  PerformanceEvents2["AcquireTokenBySilentIframe"] = "acquireTokenBySilentIframe";
  PerformanceEvents2["InitializeBaseRequest"] = "initializeBaseRequest";
  PerformanceEvents2["InitializeSilentRequest"] = "initializeSilentRequest";
  PerformanceEvents2["InitializeClientApplication"] = "initializeClientApplication";
  PerformanceEvents2["SilentIframeClientTokenHelper"] = "silentIframeClientTokenHelper";
  PerformanceEvents2["SilentHandlerInitiateAuthRequest"] = "silentHandlerInitiateAuthRequest";
  PerformanceEvents2["SilentHandlerMonitorIframeForHash"] = "silentHandlerMonitorIframeForHash";
  PerformanceEvents2["SilentHandlerLoadFrame"] = "silentHandlerLoadFrame";
  PerformanceEvents2["StandardInteractionClientCreateAuthCodeClient"] = "standardInteractionClientCreateAuthCodeClient";
  PerformanceEvents2["StandardInteractionClientGetClientConfiguration"] = "standardInteractionClientGetClientConfiguration";
  PerformanceEvents2["StandardInteractionClientInitializeAuthorizationRequest"] = "standardInteractionClientInitializeAuthorizationRequest";
  PerformanceEvents2["StandardInteractionClientInitializeAuthorizationCodeRequest"] = "standardInteractionClientInitializeAuthorizationCodeRequest";
  PerformanceEvents2["GetAuthCodeUrl"] = "getAuthCodeUrl";
  PerformanceEvents2["HandleCodeResponseFromServer"] = "handleCodeResponseFromServer";
  PerformanceEvents2["HandleCodeResponseFromHash"] = "handleCodeResponseFromHash";
  PerformanceEvents2["UpdateTokenEndpointAuthority"] = "updateTokenEndpointAuthority";
  PerformanceEvents2["AuthClientAcquireToken"] = "authClientAcquireToken";
  PerformanceEvents2["AuthClientExecuteTokenRequest"] = "authClientExecuteTokenRequest";
  PerformanceEvents2["AuthClientCreateTokenRequestBody"] = "authClientCreateTokenRequestBody";
  PerformanceEvents2["AuthClientCreateQueryString"] = "authClientCreateQueryString";
  PerformanceEvents2["PopTokenGenerateCnf"] = "popTokenGenerateCnf";
  PerformanceEvents2["PopTokenGenerateKid"] = "popTokenGenerateKid";
  PerformanceEvents2["HandleServerTokenResponse"] = "handleServerTokenResponse";
  PerformanceEvents2["AuthorityFactoryCreateDiscoveredInstance"] = "authorityFactoryCreateDiscoveredInstance";
  PerformanceEvents2["AuthorityResolveEndpointsAsync"] = "authorityResolveEndpointsAsync";
  PerformanceEvents2["AuthorityGetCloudDiscoveryMetadataFromNetwork"] = "authorityGetCloudDiscoveryMetadataFromNetwork";
  PerformanceEvents2["AuthorityUpdateCloudDiscoveryMetadata"] = "authorityUpdateCloudDiscoveryMetadata";
  PerformanceEvents2["AuthorityGetEndpointMetadataFromNetwork"] = "authorityGetEndpointMetadataFromNetwork";
  PerformanceEvents2["AuthorityUpdateEndpointMetadata"] = "authorityUpdateEndpointMetadata";
  PerformanceEvents2["AuthorityUpdateMetadataWithRegionalInformation"] = "authorityUpdateMetadataWithRegionalInformation";
  PerformanceEvents2["RegionDiscoveryDetectRegion"] = "regionDiscoveryDetectRegion";
  PerformanceEvents2["RegionDiscoveryGetRegionFromIMDS"] = "regionDiscoveryGetRegionFromIMDS";
  PerformanceEvents2["RegionDiscoveryGetCurrentVersion"] = "regionDiscoveryGetCurrentVersion";
  PerformanceEvents2["AcquireTokenByCodeAsync"] = "acquireTokenByCodeAsync";
  PerformanceEvents2["GetEndpointMetadataFromNetwork"] = "getEndpointMetadataFromNetwork";
  PerformanceEvents2["GetCloudDiscoveryMetadataFromNetworkMeasurement"] = "getCloudDiscoveryMetadataFromNetworkMeasurement";
  PerformanceEvents2["HandleRedirectPromiseMeasurement"] = "handleRedirectPromiseMeasurement";
  PerformanceEvents2["UpdateCloudDiscoveryMetadataMeasurement"] = "updateCloudDiscoveryMetadataMeasurement";
  PerformanceEvents2["UsernamePasswordClientAcquireToken"] = "usernamePasswordClientAcquireToken";
  PerformanceEvents2["NativeMessageHandlerHandshake"] = "nativeMessageHandlerHandshake";
})(PerformanceEvents || (PerformanceEvents = {}));
var PerformanceEventStatus;
(function(PerformanceEventStatus2) {
  PerformanceEventStatus2[PerformanceEventStatus2["NotStarted"] = 0] = "NotStarted";
  PerformanceEventStatus2[PerformanceEventStatus2["InProgress"] = 1] = "InProgress";
  PerformanceEventStatus2[PerformanceEventStatus2["Completed"] = 2] = "Completed";
})(PerformanceEventStatus || (PerformanceEventStatus = {}));
var IntFields = /* @__PURE__ */ new Set([
  "accessTokenSize",
  "durationMs",
  "idTokenSize",
  "matsSilentStatus",
  "matsHttpStatus",
  "refreshTokenSize",
  "queuedTimeMs",
  "startTimeMs",
  "status"
]);

// node_modules/@azure/msal-common/dist/crypto/PopTokenGenerator.js
var KeyLocation;
(function(KeyLocation2) {
  KeyLocation2["SW"] = "sw";
  KeyLocation2["UHW"] = "uhw";
})(KeyLocation || (KeyLocation = {}));
var PopTokenGenerator = (
  /** @class */
  function() {
    function PopTokenGenerator2(cryptoUtils, performanceClient) {
      this.cryptoUtils = cryptoUtils;
      this.performanceClient = performanceClient;
    }
    PopTokenGenerator2.prototype.generateCnf = function(request) {
      var _a, _b;
      return __awaiter2(this, void 0, void 0, function() {
        var reqCnf, reqCnfString, _c;
        return __generator2(this, function(_d) {
          switch (_d.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.PopTokenGenerateCnf, request.correlationId);
              (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.setPreQueueTime(PerformanceEvents.PopTokenGenerateKid, request.correlationId);
              return [4, this.generateKid(request)];
            case 1:
              reqCnf = _d.sent();
              reqCnfString = this.cryptoUtils.base64Encode(JSON.stringify(reqCnf));
              _c = {
                kid: reqCnf.kid,
                reqCnfString
              };
              return [4, this.cryptoUtils.hashString(reqCnfString)];
            case 2:
              return [2, (_c.reqCnfHash = _d.sent(), _c)];
          }
        });
      });
    };
    PopTokenGenerator2.prototype.generateKid = function(request) {
      var _a;
      return __awaiter2(this, void 0, void 0, function() {
        var kidThumbprint;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.PopTokenGenerateKid, request.correlationId);
              return [4, this.cryptoUtils.getPublicKeyThumbprint(request)];
            case 1:
              kidThumbprint = _b.sent();
              return [2, {
                kid: kidThumbprint,
                xms_ksl: KeyLocation.SW
              }];
          }
        });
      });
    };
    PopTokenGenerator2.prototype.signPopToken = function(accessToken, keyId, request) {
      return __awaiter2(this, void 0, void 0, function() {
        return __generator2(this, function(_a) {
          return [2, this.signPayload(accessToken, keyId, request)];
        });
      });
    };
    PopTokenGenerator2.prototype.signPayload = function(payload, keyId, request, claims) {
      return __awaiter2(this, void 0, void 0, function() {
        var resourceRequestMethod, resourceRequestUri, shrClaims, shrNonce, resourceUrlString, resourceUrlComponents;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              resourceRequestMethod = request.resourceRequestMethod, resourceRequestUri = request.resourceRequestUri, shrClaims = request.shrClaims, shrNonce = request.shrNonce;
              resourceUrlString = resourceRequestUri ? new UrlString(resourceRequestUri) : void 0;
              resourceUrlComponents = resourceUrlString === null || resourceUrlString === void 0 ? void 0 : resourceUrlString.getUrlComponents();
              return [4, this.cryptoUtils.signJwt(__assign2({ at: payload, ts: TimeUtils.nowSeconds(), m: resourceRequestMethod === null || resourceRequestMethod === void 0 ? void 0 : resourceRequestMethod.toUpperCase(), u: resourceUrlComponents === null || resourceUrlComponents === void 0 ? void 0 : resourceUrlComponents.HostNameAndPort, nonce: shrNonce || this.cryptoUtils.createNewGuid(), p: resourceUrlComponents === null || resourceUrlComponents === void 0 ? void 0 : resourceUrlComponents.AbsolutePath, q: (resourceUrlComponents === null || resourceUrlComponents === void 0 ? void 0 : resourceUrlComponents.QueryString) ? [[], resourceUrlComponents.QueryString] : void 0, client_claims: shrClaims || void 0 }, claims), keyId, request.correlationId)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    return PopTokenGenerator2;
  }()
);

// node_modules/@azure/msal-common/dist/cache/entities/AppMetadataEntity.js
var AppMetadataEntity = (
  /** @class */
  function() {
    function AppMetadataEntity2() {
    }
    AppMetadataEntity2.prototype.generateAppMetadataKey = function() {
      return AppMetadataEntity2.generateAppMetadataCacheKey(this.environment, this.clientId);
    };
    AppMetadataEntity2.generateAppMetadataCacheKey = function(environment, clientId) {
      var appMetaDataKeyArray = [
        APP_METADATA,
        environment,
        clientId
      ];
      return appMetaDataKeyArray.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    AppMetadataEntity2.createAppMetadataEntity = function(clientId, environment, familyId) {
      var appMetadata = new AppMetadataEntity2();
      appMetadata.clientId = clientId;
      appMetadata.environment = environment;
      if (familyId) {
        appMetadata.familyId = familyId;
      }
      return appMetadata;
    };
    AppMetadataEntity2.isAppMetadataEntity = function(key, entity) {
      if (!entity) {
        return false;
      }
      return key.indexOf(APP_METADATA) === 0 && entity.hasOwnProperty("clientId") && entity.hasOwnProperty("environment");
    };
    return AppMetadataEntity2;
  }()
);

// node_modules/@azure/msal-common/dist/cache/persistence/TokenCacheContext.js
var TokenCacheContext = (
  /** @class */
  function() {
    function TokenCacheContext2(tokenCache, hasChanged) {
      this.cache = tokenCache;
      this.hasChanged = hasChanged;
    }
    Object.defineProperty(TokenCacheContext2.prototype, "cacheHasChanged", {
      /**
       * boolean which indicates the changes in cache
       */
      get: function() {
        return this.hasChanged;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TokenCacheContext2.prototype, "tokenCache", {
      /**
       * function to retrieve the token cache
       */
      get: function() {
        return this.cache;
      },
      enumerable: false,
      configurable: true
    });
    return TokenCacheContext2;
  }()
);

// node_modules/@azure/msal-common/dist/response/ResponseHandler.js
var ResponseHandler = (
  /** @class */
  function() {
    function ResponseHandler2(clientId, cacheStorage, cryptoObj, logger, serializableCache, persistencePlugin, performanceClient) {
      this.clientId = clientId;
      this.cacheStorage = cacheStorage;
      this.cryptoObj = cryptoObj;
      this.logger = logger;
      this.serializableCache = serializableCache;
      this.persistencePlugin = persistencePlugin;
      this.performanceClient = performanceClient;
    }
    ResponseHandler2.prototype.validateServerAuthorizationCodeResponse = function(serverResponseHash, cachedState, cryptoObj) {
      if (!serverResponseHash.state || !cachedState) {
        throw !serverResponseHash.state ? ClientAuthError.createStateNotFoundError("Server State") : ClientAuthError.createStateNotFoundError("Cached State");
      }
      if (decodeURIComponent(serverResponseHash.state) !== decodeURIComponent(cachedState)) {
        throw ClientAuthError.createStateMismatchError();
      }
      if (serverResponseHash.error || serverResponseHash.error_description || serverResponseHash.suberror) {
        if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror)) {
          throw new InteractionRequiredAuthError(serverResponseHash.error || Constants.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror, serverResponseHash.timestamp || Constants.EMPTY_STRING, serverResponseHash.trace_id || Constants.EMPTY_STRING, serverResponseHash.correlation_id || Constants.EMPTY_STRING, serverResponseHash.claims || Constants.EMPTY_STRING);
        }
        throw new ServerError(serverResponseHash.error || Constants.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror);
      }
      if (serverResponseHash.client_info) {
        buildClientInfo(serverResponseHash.client_info, cryptoObj);
      }
    };
    ResponseHandler2.prototype.validateTokenResponse = function(serverResponse) {
      if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
        if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
          throw new InteractionRequiredAuthError(serverResponse.error, serverResponse.error_description, serverResponse.suberror, serverResponse.timestamp || Constants.EMPTY_STRING, serverResponse.trace_id || Constants.EMPTY_STRING, serverResponse.correlation_id || Constants.EMPTY_STRING, serverResponse.claims || Constants.EMPTY_STRING);
        }
        var errString = serverResponse.error_codes + " - [" + serverResponse.timestamp + "]: " + serverResponse.error_description + " - Correlation ID: " + serverResponse.correlation_id + " - Trace ID: " + serverResponse.trace_id;
        throw new ServerError(serverResponse.error, errString, serverResponse.suberror);
      }
    };
    ResponseHandler2.prototype.handleServerTokenResponse = function(serverTokenResponse, authority, reqTimestamp, request, authCodePayload, userAssertionHash, handlingRefreshTokenResponse, forceCacheRefreshTokenResponse, serverRequestId) {
      var _a;
      return __awaiter2(this, void 0, void 0, function() {
        var idTokenObj, authTime, requestStateObj, cacheRecord, cacheContext, key, account;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.HandleServerTokenResponse, serverTokenResponse.correlation_id);
              if (serverTokenResponse.id_token) {
                idTokenObj = new AuthToken(serverTokenResponse.id_token || Constants.EMPTY_STRING, this.cryptoObj);
                if (authCodePayload && !StringUtils.isEmpty(authCodePayload.nonce)) {
                  if (idTokenObj.claims.nonce !== authCodePayload.nonce) {
                    throw ClientAuthError.createNonceMismatchError();
                  }
                }
                if (request.maxAge || request.maxAge === 0) {
                  authTime = idTokenObj.claims.auth_time;
                  if (!authTime) {
                    throw ClientAuthError.createAuthTimeNotFoundError();
                  }
                  AuthToken.checkMaxAge(authTime, request.maxAge);
                }
              }
              this.homeAccountIdentifier = AccountEntity.generateHomeAccountId(serverTokenResponse.client_info || Constants.EMPTY_STRING, authority.authorityType, this.logger, this.cryptoObj, idTokenObj);
              if (!!authCodePayload && !!authCodePayload.state) {
                requestStateObj = ProtocolUtils.parseRequestState(this.cryptoObj, authCodePayload.state);
              }
              serverTokenResponse.key_id = serverTokenResponse.key_id || request.sshKid || void 0;
              cacheRecord = this.generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenObj, userAssertionHash, authCodePayload);
              _b.label = 1;
            case 1:
              _b.trys.push([1, , 5, 8]);
              if (!(this.persistencePlugin && this.serializableCache))
                return [3, 3];
              this.logger.verbose("Persistence enabled, calling beforeCacheAccess");
              cacheContext = new TokenCacheContext(this.serializableCache, true);
              return [4, this.persistencePlugin.beforeCacheAccess(cacheContext)];
            case 2:
              _b.sent();
              _b.label = 3;
            case 3:
              if (handlingRefreshTokenResponse && !forceCacheRefreshTokenResponse && cacheRecord.account) {
                key = cacheRecord.account.generateAccountKey();
                account = this.cacheStorage.getAccount(key);
                if (!account) {
                  this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache");
                  return [2, ResponseHandler2.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenObj, requestStateObj, void 0, serverRequestId)];
                }
              }
              return [4, this.cacheStorage.saveCacheRecord(cacheRecord)];
            case 4:
              _b.sent();
              return [3, 8];
            case 5:
              if (!(this.persistencePlugin && this.serializableCache && cacheContext))
                return [3, 7];
              this.logger.verbose("Persistence enabled, calling afterCacheAccess");
              return [4, this.persistencePlugin.afterCacheAccess(cacheContext)];
            case 6:
              _b.sent();
              _b.label = 7;
            case 7:
              return [
                7
                /*endfinally*/
              ];
            case 8:
              return [2, ResponseHandler2.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenObj, requestStateObj, serverTokenResponse, serverRequestId)];
          }
        });
      });
    };
    ResponseHandler2.prototype.generateCacheRecord = function(serverTokenResponse, authority, reqTimestamp, request, idTokenObj, userAssertionHash, authCodePayload) {
      var env = authority.getPreferredCache();
      if (StringUtils.isEmpty(env)) {
        throw ClientAuthError.createInvalidCacheEnvironmentError();
      }
      var cachedIdToken;
      var cachedAccount;
      if (!StringUtils.isEmpty(serverTokenResponse.id_token) && !!idTokenObj) {
        cachedIdToken = IdTokenEntity.createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token || Constants.EMPTY_STRING, this.clientId, idTokenObj.claims.tid || Constants.EMPTY_STRING);
        cachedAccount = this.generateAccountEntity(serverTokenResponse, idTokenObj, authority, authCodePayload);
      }
      var cachedAccessToken = null;
      if (!StringUtils.isEmpty(serverTokenResponse.access_token)) {
        var responseScopes = serverTokenResponse.scope ? ScopeSet.fromString(serverTokenResponse.scope) : new ScopeSet(request.scopes || []);
        var expiresIn = (typeof serverTokenResponse.expires_in === "string" ? parseInt(serverTokenResponse.expires_in, 10) : serverTokenResponse.expires_in) || 0;
        var extExpiresIn = (typeof serverTokenResponse.ext_expires_in === "string" ? parseInt(serverTokenResponse.ext_expires_in, 10) : serverTokenResponse.ext_expires_in) || 0;
        var refreshIn = (typeof serverTokenResponse.refresh_in === "string" ? parseInt(serverTokenResponse.refresh_in, 10) : serverTokenResponse.refresh_in) || void 0;
        var tokenExpirationSeconds = reqTimestamp + expiresIn;
        var extendedTokenExpirationSeconds = tokenExpirationSeconds + extExpiresIn;
        var refreshOnSeconds = refreshIn && refreshIn > 0 ? reqTimestamp + refreshIn : void 0;
        cachedAccessToken = AccessTokenEntity.createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token || Constants.EMPTY_STRING, this.clientId, idTokenObj ? idTokenObj.claims.tid || Constants.EMPTY_STRING : authority.tenant, responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds, this.cryptoObj, refreshOnSeconds, serverTokenResponse.token_type, userAssertionHash, serverTokenResponse.key_id, request.claims, request.requestedClaimsHash);
      }
      var cachedRefreshToken = null;
      if (!StringUtils.isEmpty(serverTokenResponse.refresh_token)) {
        cachedRefreshToken = RefreshTokenEntity.createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token || Constants.EMPTY_STRING, this.clientId, serverTokenResponse.foci, userAssertionHash);
      }
      var cachedAppMetadata = null;
      if (!StringUtils.isEmpty(serverTokenResponse.foci)) {
        cachedAppMetadata = AppMetadataEntity.createAppMetadataEntity(this.clientId, env, serverTokenResponse.foci);
      }
      return new CacheRecord(cachedAccount, cachedIdToken, cachedAccessToken, cachedRefreshToken, cachedAppMetadata);
    };
    ResponseHandler2.prototype.generateAccountEntity = function(serverTokenResponse, idToken, authority, authCodePayload) {
      var authorityType = authority.authorityType;
      var cloudGraphHostName = authCodePayload ? authCodePayload.cloud_graph_host_name : Constants.EMPTY_STRING;
      var msGraphhost = authCodePayload ? authCodePayload.msgraph_host : Constants.EMPTY_STRING;
      if (authorityType === AuthorityType.Adfs) {
        this.logger.verbose("Authority type is ADFS, creating ADFS account");
        return AccountEntity.createGenericAccount(this.homeAccountIdentifier, idToken, authority, cloudGraphHostName, msGraphhost);
      }
      if (StringUtils.isEmpty(serverTokenResponse.client_info) && authority.protocolMode === "AAD") {
        throw ClientAuthError.createClientInfoEmptyError();
      }
      return serverTokenResponse.client_info ? AccountEntity.createAccount(serverTokenResponse.client_info, this.homeAccountIdentifier, idToken, authority, cloudGraphHostName, msGraphhost) : AccountEntity.createGenericAccount(this.homeAccountIdentifier, idToken, authority, cloudGraphHostName, msGraphhost);
    };
    ResponseHandler2.generateAuthenticationResult = function(cryptoObj, authority, cacheRecord, fromTokenCache, request, idTokenObj, requestState, serverTokenResponse, requestId) {
      var _a, _b, _c;
      return __awaiter2(this, void 0, void 0, function() {
        var accessToken, responseScopes, expiresOn, extExpiresOn, familyId, popTokenGenerator, _d, secret, keyId, uid, tid;
        return __generator2(this, function(_e2) {
          switch (_e2.label) {
            case 0:
              accessToken = Constants.EMPTY_STRING;
              responseScopes = [];
              expiresOn = null;
              familyId = Constants.EMPTY_STRING;
              if (!cacheRecord.accessToken)
                return [3, 4];
              if (!(cacheRecord.accessToken.tokenType === AuthenticationScheme.POP))
                return [3, 2];
              popTokenGenerator = new PopTokenGenerator(cryptoObj);
              _d = cacheRecord.accessToken, secret = _d.secret, keyId = _d.keyId;
              if (!keyId) {
                throw ClientAuthError.createKeyIdMissingError();
              }
              return [4, popTokenGenerator.signPopToken(secret, keyId, request)];
            case 1:
              accessToken = _e2.sent();
              return [3, 3];
            case 2:
              accessToken = cacheRecord.accessToken.secret;
              _e2.label = 3;
            case 3:
              responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
              expiresOn = new Date(Number(cacheRecord.accessToken.expiresOn) * 1e3);
              extExpiresOn = new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1e3);
              _e2.label = 4;
            case 4:
              if (cacheRecord.appMetadata) {
                familyId = cacheRecord.appMetadata.familyId === THE_FAMILY_ID ? THE_FAMILY_ID : Constants.EMPTY_STRING;
              }
              uid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.oid) || (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.sub) || Constants.EMPTY_STRING;
              tid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.tid) || Constants.EMPTY_STRING;
              if ((serverTokenResponse === null || serverTokenResponse === void 0 ? void 0 : serverTokenResponse.spa_accountid) && !!cacheRecord.account) {
                cacheRecord.account.nativeAccountId = serverTokenResponse === null || serverTokenResponse === void 0 ? void 0 : serverTokenResponse.spa_accountid;
              }
              return [2, {
                authority: authority.canonicalAuthority,
                uniqueId: uid,
                tenantId: tid,
                scopes: responseScopes,
                account: cacheRecord.account ? cacheRecord.account.getAccountInfo() : null,
                idToken: idTokenObj ? idTokenObj.rawToken : Constants.EMPTY_STRING,
                idTokenClaims: idTokenObj ? idTokenObj.claims : {},
                accessToken,
                fromCache: fromTokenCache,
                expiresOn,
                correlationId: request.correlationId,
                requestId: requestId || Constants.EMPTY_STRING,
                extExpiresOn,
                familyId,
                tokenType: ((_a = cacheRecord.accessToken) === null || _a === void 0 ? void 0 : _a.tokenType) || Constants.EMPTY_STRING,
                state: requestState ? requestState.userRequestState : Constants.EMPTY_STRING,
                cloudGraphHostName: ((_b = cacheRecord.account) === null || _b === void 0 ? void 0 : _b.cloudGraphHostName) || Constants.EMPTY_STRING,
                msGraphHost: ((_c = cacheRecord.account) === null || _c === void 0 ? void 0 : _c.msGraphHost) || Constants.EMPTY_STRING,
                code: serverTokenResponse === null || serverTokenResponse === void 0 ? void 0 : serverTokenResponse.spa_code,
                fromNativeBroker: false
              }];
          }
        });
      });
    };
    return ResponseHandler2;
  }()
);

// node_modules/@azure/msal-common/dist/client/AuthorizationCodeClient.js
var AuthorizationCodeClient = (
  /** @class */
  function(_super) {
    __extends2(AuthorizationCodeClient2, _super);
    function AuthorizationCodeClient2(configuration, performanceClient) {
      var _this = _super.call(this, configuration, performanceClient) || this;
      _this.includeRedirectUri = true;
      return _this;
    }
    AuthorizationCodeClient2.prototype.getAuthCodeUrl = function(request) {
      var _a, _b;
      return __awaiter2(this, void 0, void 0, function() {
        var queryString;
        return __generator2(this, function(_c) {
          switch (_c.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.GetAuthCodeUrl, request.correlationId);
              (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.setPreQueueTime(PerformanceEvents.AuthClientCreateQueryString, request.correlationId);
              return [4, this.createAuthCodeUrlQueryString(request)];
            case 1:
              queryString = _c.sent();
              return [2, UrlString.appendQueryString(this.authority.authorizationEndpoint, queryString)];
          }
        });
      });
    };
    AuthorizationCodeClient2.prototype.acquireToken = function(request, authCodePayload) {
      var _a, _b, _c, _d, _e2, _f;
      return __awaiter2(this, void 0, void 0, function() {
        var atsMeasurement, reqTimestamp, response, requestId, httpVerAuthority, responseHandler;
        var _this = this;
        return __generator2(this, function(_g) {
          switch (_g.label) {
            case 0:
              if (!request || !request.code) {
                throw ClientAuthError.createTokenRequestCannotBeMadeError();
              }
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.AuthClientAcquireToken, request.correlationId);
              atsMeasurement = (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.startMeasurement("AuthCodeClientAcquireToken", request.correlationId);
              this.logger.info("in acquireToken call in auth-code client");
              reqTimestamp = TimeUtils.nowSeconds();
              (_c = this.performanceClient) === null || _c === void 0 ? void 0 : _c.setPreQueueTime(PerformanceEvents.AuthClientExecuteTokenRequest, request.correlationId);
              return [4, this.executeTokenRequest(this.authority, request)];
            case 1:
              response = _g.sent();
              requestId = (_d = response.headers) === null || _d === void 0 ? void 0 : _d[HeaderNames.X_MS_REQUEST_ID];
              httpVerAuthority = (_e2 = response.headers) === null || _e2 === void 0 ? void 0 : _e2[HeaderNames.X_MS_HTTP_VERSION];
              if (httpVerAuthority) {
                atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.addStaticFields({
                  httpVerAuthority
                });
              }
              responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
              responseHandler.validateTokenResponse(response.body);
              (_f = this.performanceClient) === null || _f === void 0 ? void 0 : _f.setPreQueueTime(PerformanceEvents.HandleServerTokenResponse, request.correlationId);
              return [2, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request, authCodePayload, void 0, void 0, void 0, requestId).then(function(result) {
                atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.endMeasurement({
                  success: true
                });
                return result;
              }).catch(function(error) {
                _this.logger.verbose("Error in fetching token in ACC", request.correlationId);
                atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.endMeasurement({
                  errorCode: error.errorCode,
                  subErrorCode: error.subError,
                  success: false
                });
                throw error;
              })];
          }
        });
      });
    };
    AuthorizationCodeClient2.prototype.handleFragmentResponse = function(hashFragment, cachedState) {
      var responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null);
      var hashUrlString = new UrlString(hashFragment);
      var serverParams = UrlString.getDeserializedHash(hashUrlString.getHash());
      responseHandler.validateServerAuthorizationCodeResponse(serverParams, cachedState, this.cryptoUtils);
      if (!serverParams.code) {
        throw ClientAuthError.createNoAuthCodeInServerResponseError();
      }
      return __assign2(__assign2({}, serverParams), {
        // Code param is optional in ServerAuthorizationCodeResponse but required in AuthorizationCodePaylod
        code: serverParams.code
      });
    };
    AuthorizationCodeClient2.prototype.getLogoutUri = function(logoutRequest) {
      if (!logoutRequest) {
        throw ClientConfigurationError.createEmptyLogoutRequestError();
      }
      var queryString = this.createLogoutUrlQueryString(logoutRequest);
      return UrlString.appendQueryString(this.authority.endSessionEndpoint, queryString);
    };
    AuthorizationCodeClient2.prototype.executeTokenRequest = function(authority, request) {
      var _a, _b;
      return __awaiter2(this, void 0, void 0, function() {
        var queryParametersString, endpoint, requestBody, ccsCredential, clientInfo, headers, thumbprint;
        return __generator2(this, function(_c) {
          switch (_c.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.AuthClientExecuteTokenRequest, request.correlationId);
              (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.setPreQueueTime(PerformanceEvents.AuthClientCreateTokenRequestBody, request.correlationId);
              queryParametersString = this.createTokenQueryParameters(request);
              endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
              return [4, this.createTokenRequestBody(request)];
            case 1:
              requestBody = _c.sent();
              ccsCredential = void 0;
              if (request.clientInfo) {
                try {
                  clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils);
                  ccsCredential = {
                    credential: "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid,
                    type: CcsCredentialType.HOME_ACCOUNT_ID
                  };
                } catch (e2) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + e2);
                }
              }
              headers = this.createTokenRequestHeaders(ccsCredential || request.ccsCredential);
              thumbprint = {
                clientId: this.config.authOptions.clientId,
                authority: authority.canonicalAuthority,
                scopes: request.scopes,
                claims: request.claims,
                authenticationScheme: request.authenticationScheme,
                resourceRequestMethod: request.resourceRequestMethod,
                resourceRequestUri: request.resourceRequestUri,
                shrClaims: request.shrClaims,
                sshKid: request.sshKid
              };
              return [2, this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint)];
          }
        });
      });
    };
    AuthorizationCodeClient2.prototype.createTokenRequestBody = function(request) {
      var _a, _b;
      return __awaiter2(this, void 0, void 0, function() {
        var parameterBuilder, clientAssertion, popTokenGenerator, reqCnfData, correlationId, ccsCred, clientInfo, clientInfo;
        var _c;
        return __generator2(this, function(_d) {
          switch (_d.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.AuthClientCreateTokenRequestBody, request.correlationId);
              parameterBuilder = new RequestParameterBuilder();
              parameterBuilder.addClientId(this.config.authOptions.clientId);
              if (!this.includeRedirectUri) {
                RequestValidator.validateRedirectUri(request.redirectUri);
              } else {
                parameterBuilder.addRedirectUri(request.redirectUri);
              }
              parameterBuilder.addScopes(request.scopes);
              parameterBuilder.addAuthorizationCode(request.code);
              parameterBuilder.addLibraryInfo(this.config.libraryInfo);
              parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
              parameterBuilder.addThrottling();
              if (this.serverTelemetryManager) {
                parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
              }
              if (request.codeVerifier) {
                parameterBuilder.addCodeVerifier(request.codeVerifier);
              }
              if (this.config.clientCredentials.clientSecret) {
                parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
              }
              if (this.config.clientCredentials.clientAssertion) {
                clientAssertion = this.config.clientCredentials.clientAssertion;
                parameterBuilder.addClientAssertion(clientAssertion.assertion);
                parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
              }
              parameterBuilder.addGrantType(GrantType.AUTHORIZATION_CODE_GRANT);
              parameterBuilder.addClientInfo();
              if (!(request.authenticationScheme === AuthenticationScheme.POP))
                return [3, 2];
              popTokenGenerator = new PopTokenGenerator(this.cryptoUtils, this.performanceClient);
              (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.setPreQueueTime(PerformanceEvents.PopTokenGenerateCnf, request.correlationId);
              return [4, popTokenGenerator.generateCnf(request)];
            case 1:
              reqCnfData = _d.sent();
              parameterBuilder.addPopToken(reqCnfData.reqCnfString);
              return [3, 3];
            case 2:
              if (request.authenticationScheme === AuthenticationScheme.SSH) {
                if (request.sshJwk) {
                  parameterBuilder.addSshJwk(request.sshJwk);
                } else {
                  throw ClientConfigurationError.createMissingSshJwkError();
                }
              }
              _d.label = 3;
            case 3:
              correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
              parameterBuilder.addCorrelationId(correlationId);
              if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
              }
              ccsCred = void 0;
              if (request.clientInfo) {
                try {
                  clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils);
                  ccsCred = {
                    credential: "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid,
                    type: CcsCredentialType.HOME_ACCOUNT_ID
                  };
                } catch (e2) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + e2);
                }
              } else {
                ccsCred = request.ccsCredential;
              }
              if (this.config.systemOptions.preventCorsPreflight && ccsCred) {
                switch (ccsCred.type) {
                  case CcsCredentialType.HOME_ACCOUNT_ID:
                    try {
                      clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
                      parameterBuilder.addCcsOid(clientInfo);
                    } catch (e2) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + e2);
                    }
                    break;
                  case CcsCredentialType.UPN:
                    parameterBuilder.addCcsUpn(ccsCred.credential);
                    break;
                }
              }
              if (request.tokenBodyParameters) {
                parameterBuilder.addExtraQueryParameters(request.tokenBodyParameters);
              }
              if (request.enableSpaAuthorizationCode && (!request.tokenBodyParameters || !request.tokenBodyParameters[AADServerParamKeys.RETURN_SPA_CODE])) {
                parameterBuilder.addExtraQueryParameters((_c = {}, _c[AADServerParamKeys.RETURN_SPA_CODE] = "1", _c));
              }
              return [2, parameterBuilder.createQueryString()];
          }
        });
      });
    };
    AuthorizationCodeClient2.prototype.createAuthCodeUrlQueryString = function(request) {
      var _a;
      return __awaiter2(this, void 0, void 0, function() {
        var parameterBuilder, requestScopes, correlationId, accountSid, accountLoginHintClaim, clientInfo, clientInfo, clientInfo, popTokenGenerator, reqCnfData;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.AuthClientCreateQueryString, request.correlationId);
              parameterBuilder = new RequestParameterBuilder();
              parameterBuilder.addClientId(this.config.authOptions.clientId);
              requestScopes = __spreadArrays(request.scopes || [], request.extraScopesToConsent || []);
              parameterBuilder.addScopes(requestScopes);
              parameterBuilder.addRedirectUri(request.redirectUri);
              correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
              parameterBuilder.addCorrelationId(correlationId);
              parameterBuilder.addResponseMode(request.responseMode);
              parameterBuilder.addResponseTypeCode();
              parameterBuilder.addLibraryInfo(this.config.libraryInfo);
              parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
              parameterBuilder.addClientInfo();
              if (request.codeChallenge && request.codeChallengeMethod) {
                parameterBuilder.addCodeChallengeParams(request.codeChallenge, request.codeChallengeMethod);
              }
              if (request.prompt) {
                parameterBuilder.addPrompt(request.prompt);
              }
              if (request.domainHint) {
                parameterBuilder.addDomainHint(request.domainHint);
              }
              if (request.prompt !== PromptValue.SELECT_ACCOUNT) {
                if (request.sid && request.prompt === PromptValue.NONE) {
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request");
                  parameterBuilder.addSid(request.sid);
                } else if (request.account) {
                  accountSid = this.extractAccountSid(request.account);
                  accountLoginHintClaim = this.extractLoginHint(request.account);
                  if (accountLoginHintClaim) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account");
                    parameterBuilder.addLoginHint(accountLoginHintClaim);
                    try {
                      clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
                      parameterBuilder.addCcsOid(clientInfo);
                    } catch (e2) {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (accountSid && request.prompt === PromptValue.NONE) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account");
                    parameterBuilder.addSid(accountSid);
                    try {
                      clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
                      parameterBuilder.addCcsOid(clientInfo);
                    } catch (e2) {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (request.loginHint) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request");
                    parameterBuilder.addLoginHint(request.loginHint);
                    parameterBuilder.addCcsUpn(request.loginHint);
                  } else if (request.account.username) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account");
                    parameterBuilder.addLoginHint(request.account.username);
                    try {
                      clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
                      parameterBuilder.addCcsOid(clientInfo);
                    } catch (e2) {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  }
                } else if (request.loginHint) {
                  this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request");
                  parameterBuilder.addLoginHint(request.loginHint);
                  parameterBuilder.addCcsUpn(request.loginHint);
                }
              } else {
                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
              }
              if (request.nonce) {
                parameterBuilder.addNonce(request.nonce);
              }
              if (request.state) {
                parameterBuilder.addState(request.state);
              }
              if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
              }
              if (request.extraQueryParameters) {
                parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
              }
              if (!request.nativeBroker)
                return [3, 2];
              parameterBuilder.addNativeBroker();
              if (!(request.authenticationScheme === AuthenticationScheme.POP))
                return [3, 2];
              popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
              return [4, popTokenGenerator.generateCnf(request)];
            case 1:
              reqCnfData = _b.sent();
              parameterBuilder.addPopToken(reqCnfData.reqCnfString);
              _b.label = 2;
            case 2:
              return [2, parameterBuilder.createQueryString()];
          }
        });
      });
    };
    AuthorizationCodeClient2.prototype.createLogoutUrlQueryString = function(request) {
      var parameterBuilder = new RequestParameterBuilder();
      if (request.postLogoutRedirectUri) {
        parameterBuilder.addPostLogoutRedirectUri(request.postLogoutRedirectUri);
      }
      if (request.correlationId) {
        parameterBuilder.addCorrelationId(request.correlationId);
      }
      if (request.idTokenHint) {
        parameterBuilder.addIdTokenHint(request.idTokenHint);
      }
      if (request.state) {
        parameterBuilder.addState(request.state);
      }
      if (request.logoutHint) {
        parameterBuilder.addLogoutHint(request.logoutHint);
      }
      if (request.extraQueryParameters) {
        parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
      }
      return parameterBuilder.createQueryString();
    };
    AuthorizationCodeClient2.prototype.extractAccountSid = function(account) {
      var _a;
      return ((_a = account.idTokenClaims) === null || _a === void 0 ? void 0 : _a.sid) || null;
    };
    AuthorizationCodeClient2.prototype.extractLoginHint = function(account) {
      var _a;
      return ((_a = account.idTokenClaims) === null || _a === void 0 ? void 0 : _a.login_hint) || null;
    };
    return AuthorizationCodeClient2;
  }(BaseClient)
);

// node_modules/@azure/msal-common/dist/client/DeviceCodeClient.js
var DeviceCodeClient = (
  /** @class */
  function(_super) {
    __extends2(DeviceCodeClient2, _super);
    function DeviceCodeClient2(configuration) {
      return _super.call(this, configuration) || this;
    }
    DeviceCodeClient2.prototype.acquireToken = function(request) {
      return __awaiter2(this, void 0, void 0, function() {
        var deviceCodeResponse, reqTimestamp, response, responseHandler;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.getDeviceCode(request)];
            case 1:
              deviceCodeResponse = _a.sent();
              request.deviceCodeCallback(deviceCodeResponse);
              reqTimestamp = TimeUtils.nowSeconds();
              return [4, this.acquireTokenWithDeviceCode(request, deviceCodeResponse)];
            case 2:
              response = _a.sent();
              responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
              responseHandler.validateTokenResponse(response);
              return [4, responseHandler.handleServerTokenResponse(response, this.authority, reqTimestamp, request)];
            case 3:
              return [2, _a.sent()];
          }
        });
      });
    };
    DeviceCodeClient2.prototype.getDeviceCode = function(request) {
      return __awaiter2(this, void 0, void 0, function() {
        var queryParametersString, endpoint, queryString, headers, thumbprint;
        return __generator2(this, function(_a) {
          queryParametersString = this.createExtraQueryParameters(request);
          endpoint = UrlString.appendQueryString(this.authority.deviceCodeEndpoint, queryParametersString);
          queryString = this.createQueryString(request);
          headers = this.createTokenRequestHeaders();
          thumbprint = {
            clientId: this.config.authOptions.clientId,
            authority: request.authority,
            scopes: request.scopes,
            claims: request.claims,
            authenticationScheme: request.authenticationScheme,
            resourceRequestMethod: request.resourceRequestMethod,
            resourceRequestUri: request.resourceRequestUri,
            shrClaims: request.shrClaims,
            sshKid: request.sshKid
          };
          return [2, this.executePostRequestToDeviceCodeEndpoint(endpoint, queryString, headers, thumbprint)];
        });
      });
    };
    DeviceCodeClient2.prototype.createExtraQueryParameters = function(request) {
      var parameterBuilder = new RequestParameterBuilder();
      if (request.extraQueryParameters) {
        parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
      }
      return parameterBuilder.createQueryString();
    };
    DeviceCodeClient2.prototype.executePostRequestToDeviceCodeEndpoint = function(deviceCodeEndpoint, queryString, headers, thumbprint) {
      return __awaiter2(this, void 0, void 0, function() {
        var _a, userCode, deviceCode, verificationUri, expiresIn, interval, message;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, this.networkManager.sendPostRequest(thumbprint, deviceCodeEndpoint, {
                body: queryString,
                headers
              })];
            case 1:
              _a = _b.sent().body, userCode = _a.user_code, deviceCode = _a.device_code, verificationUri = _a.verification_uri, expiresIn = _a.expires_in, interval = _a.interval, message = _a.message;
              return [2, {
                userCode,
                deviceCode,
                verificationUri,
                expiresIn,
                interval,
                message
              }];
          }
        });
      });
    };
    DeviceCodeClient2.prototype.createQueryString = function(request) {
      var parameterBuilder = new RequestParameterBuilder();
      parameterBuilder.addScopes(request.scopes);
      parameterBuilder.addClientId(this.config.authOptions.clientId);
      if (request.extraQueryParameters) {
        parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
      }
      if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
      }
      return parameterBuilder.createQueryString();
    };
    DeviceCodeClient2.prototype.continuePolling = function(deviceCodeExpirationTime, userSpecifiedTimeout, userSpecifiedCancelFlag) {
      if (userSpecifiedCancelFlag) {
        this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true");
        throw ClientAuthError.createDeviceCodeCancelledError();
      } else if (userSpecifiedTimeout && userSpecifiedTimeout < deviceCodeExpirationTime && TimeUtils.nowSeconds() > userSpecifiedTimeout) {
        this.logger.error("User defined timeout for device code polling reached. The timeout was set for " + userSpecifiedTimeout);
        throw ClientAuthError.createUserTimeoutReachedError();
      } else if (TimeUtils.nowSeconds() > deviceCodeExpirationTime) {
        if (userSpecifiedTimeout) {
          this.logger.verbose("User specified timeout ignored as the device code has expired before the timeout elapsed. The user specified timeout was set for " + userSpecifiedTimeout);
        }
        this.logger.error("Device code expired. Expiration time of device code was " + deviceCodeExpirationTime);
        throw ClientAuthError.createDeviceCodeExpiredError();
      }
      return true;
    };
    DeviceCodeClient2.prototype.acquireTokenWithDeviceCode = function(request, deviceCodeResponse) {
      return __awaiter2(this, void 0, void 0, function() {
        var queryParametersString, endpoint, requestBody, headers, userSpecifiedTimeout, deviceCodeExpirationTime, pollingIntervalMilli, thumbprint, response;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              queryParametersString = this.createTokenQueryParameters(request);
              endpoint = UrlString.appendQueryString(this.authority.tokenEndpoint, queryParametersString);
              requestBody = this.createTokenRequestBody(request, deviceCodeResponse);
              headers = this.createTokenRequestHeaders();
              userSpecifiedTimeout = request.timeout ? TimeUtils.nowSeconds() + request.timeout : void 0;
              deviceCodeExpirationTime = TimeUtils.nowSeconds() + deviceCodeResponse.expiresIn;
              pollingIntervalMilli = deviceCodeResponse.interval * 1e3;
              _a.label = 1;
            case 1:
              if (!this.continuePolling(deviceCodeExpirationTime, userSpecifiedTimeout, request.cancel))
                return [3, 8];
              thumbprint = {
                clientId: this.config.authOptions.clientId,
                authority: request.authority,
                scopes: request.scopes,
                claims: request.claims,
                authenticationScheme: request.authenticationScheme,
                resourceRequestMethod: request.resourceRequestMethod,
                resourceRequestUri: request.resourceRequestUri,
                shrClaims: request.shrClaims,
                sshKid: request.sshKid
              };
              return [4, this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint)];
            case 2:
              response = _a.sent();
              if (!(response.body && response.body.error))
                return [3, 6];
              if (!(response.body.error === Constants.AUTHORIZATION_PENDING))
                return [3, 4];
              this.logger.info("Authorization pending. Continue polling.");
              return [4, TimeUtils.delay(pollingIntervalMilli)];
            case 3:
              _a.sent();
              return [3, 5];
            case 4:
              this.logger.info("Unexpected error in polling from the server");
              throw ServerError.createPostRequestFailed(response.body.error);
            case 5:
              return [3, 7];
            case 6:
              this.logger.verbose("Authorization completed successfully. Polling stopped.");
              return [2, response.body];
            case 7:
              return [3, 1];
            case 8:
              this.logger.error("Polling stopped for unknown reasons.");
              throw ClientAuthError.createDeviceCodeUnknownError();
          }
        });
      });
    };
    DeviceCodeClient2.prototype.createTokenRequestBody = function(request, deviceCodeResponse) {
      var requestParameters = new RequestParameterBuilder();
      requestParameters.addScopes(request.scopes);
      requestParameters.addClientId(this.config.authOptions.clientId);
      requestParameters.addGrantType(GrantType.DEVICE_CODE_GRANT);
      requestParameters.addDeviceCode(deviceCodeResponse.deviceCode);
      var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
      requestParameters.addCorrelationId(correlationId);
      requestParameters.addClientInfo();
      requestParameters.addLibraryInfo(this.config.libraryInfo);
      requestParameters.addApplicationTelemetry(this.config.telemetry.application);
      requestParameters.addThrottling();
      if (this.serverTelemetryManager) {
        requestParameters.addServerTelemetry(this.serverTelemetryManager);
      }
      if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        requestParameters.addClaims(request.claims, this.config.authOptions.clientCapabilities);
      }
      return requestParameters.createQueryString();
    };
    return DeviceCodeClient2;
  }(BaseClient)
);

// node_modules/@azure/msal-common/dist/client/RefreshTokenClient.js
var RefreshTokenClient = (
  /** @class */
  function(_super) {
    __extends2(RefreshTokenClient2, _super);
    function RefreshTokenClient2(configuration, performanceClient) {
      return _super.call(this, configuration, performanceClient) || this;
    }
    RefreshTokenClient2.prototype.acquireToken = function(request) {
      var _a, _b, _c, _d, _e2, _f, _g;
      return __awaiter2(this, void 0, void 0, function() {
        var atsMeasurement, reqTimestamp, response, httpVerToken, requestId, responseHandler;
        var _this = this;
        return __generator2(this, function(_h) {
          switch (_h.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.RefreshTokenClientAcquireToken, request.correlationId);
              atsMeasurement = (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.startMeasurement(PerformanceEvents.RefreshTokenClientAcquireToken, request.correlationId);
              this.logger.verbose("RefreshTokenClientAcquireToken called", request.correlationId);
              reqTimestamp = TimeUtils.nowSeconds();
              (_c = this.performanceClient) === null || _c === void 0 ? void 0 : _c.setPreQueueTime(PerformanceEvents.RefreshTokenClientExecuteTokenRequest, request.correlationId);
              return [4, this.executeTokenRequest(request, this.authority)];
            case 1:
              response = _h.sent();
              httpVerToken = (_d = response.headers) === null || _d === void 0 ? void 0 : _d[HeaderNames.X_MS_HTTP_VERSION];
              atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.addStaticFields({
                refreshTokenSize: ((_e2 = response.body.refresh_token) === null || _e2 === void 0 ? void 0 : _e2.length) || 0
              });
              if (httpVerToken) {
                atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.addStaticFields({
                  httpVerToken
                });
              }
              requestId = (_f = response.headers) === null || _f === void 0 ? void 0 : _f[HeaderNames.X_MS_REQUEST_ID];
              responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
              responseHandler.validateTokenResponse(response.body);
              (_g = this.performanceClient) === null || _g === void 0 ? void 0 : _g.setPreQueueTime(PerformanceEvents.HandleServerTokenResponse, request.correlationId);
              return [2, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request, void 0, void 0, true, request.forceCache, requestId).then(function(result) {
                atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.endMeasurement({
                  success: true
                });
                return result;
              }).catch(function(error) {
                _this.logger.verbose("Error in fetching refresh token", request.correlationId);
                atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.endMeasurement({
                  errorCode: error.errorCode,
                  subErrorCode: error.subError,
                  success: false
                });
                throw error;
              })];
          }
        });
      });
    };
    RefreshTokenClient2.prototype.acquireTokenByRefreshToken = function(request) {
      var _a, _b, _c, _d;
      return __awaiter2(this, void 0, void 0, function() {
        var isFOCI, noFamilyRTInCache, clientMismatchErrorWithFamilyRT;
        return __generator2(this, function(_e2) {
          if (!request) {
            throw ClientConfigurationError.createEmptyTokenRequestError();
          }
          (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.RefreshTokenClientAcquireTokenByRefreshToken, request.correlationId);
          if (!request.account) {
            throw ClientAuthError.createNoAccountInSilentRequestError();
          }
          isFOCI = this.cacheManager.isAppMetadataFOCI(request.account.environment);
          if (isFOCI) {
            try {
              (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.setPreQueueTime(PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, request.correlationId);
              return [2, this.acquireTokenWithCachedRefreshToken(request, true)];
            } catch (e2) {
              noFamilyRTInCache = e2 instanceof InteractionRequiredAuthError && e2.errorCode === InteractionRequiredAuthErrorMessage.noTokensFoundError.code;
              clientMismatchErrorWithFamilyRT = e2 instanceof ServerError && e2.errorCode === Errors.INVALID_GRANT_ERROR && e2.subError === Errors.CLIENT_MISMATCH_ERROR;
              if (noFamilyRTInCache || clientMismatchErrorWithFamilyRT) {
                (_c = this.performanceClient) === null || _c === void 0 ? void 0 : _c.setPreQueueTime(PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, request.correlationId);
                return [2, this.acquireTokenWithCachedRefreshToken(request, false)];
              } else {
                throw e2;
              }
            }
          }
          (_d = this.performanceClient) === null || _d === void 0 ? void 0 : _d.setPreQueueTime(PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, request.correlationId);
          return [2, this.acquireTokenWithCachedRefreshToken(request, false)];
        });
      });
    };
    RefreshTokenClient2.prototype.acquireTokenWithCachedRefreshToken = function(request, foci) {
      var _a, _b, _c;
      return __awaiter2(this, void 0, void 0, function() {
        var atsMeasurement, refreshToken, refreshTokenRequest;
        return __generator2(this, function(_d) {
          (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, request.correlationId);
          atsMeasurement = (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.startMeasurement(PerformanceEvents.RefreshTokenClientAcquireTokenWithCachedRefreshToken, request.correlationId);
          this.logger.verbose("RefreshTokenClientAcquireTokenWithCachedRefreshToken called", request.correlationId);
          refreshToken = this.cacheManager.getRefreshToken(request.account, foci);
          if (!refreshToken) {
            atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.discardMeasurement();
            throw InteractionRequiredAuthError.createNoTokensFoundError();
          }
          atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.endMeasurement({
            success: true
          });
          refreshTokenRequest = __assign2(__assign2({}, request), { refreshToken: refreshToken.secret, authenticationScheme: request.authenticationScheme || AuthenticationScheme.BEARER, ccsCredential: {
            credential: request.account.homeAccountId,
            type: CcsCredentialType.HOME_ACCOUNT_ID
          } });
          (_c = this.performanceClient) === null || _c === void 0 ? void 0 : _c.setPreQueueTime(PerformanceEvents.RefreshTokenClientAcquireToken, request.correlationId);
          return [2, this.acquireToken(refreshTokenRequest)];
        });
      });
    };
    RefreshTokenClient2.prototype.executeTokenRequest = function(request, authority) {
      var _a, _b, _c;
      return __awaiter2(this, void 0, void 0, function() {
        var acquireTokenMeasurement, queryParametersString, endpoint, requestBody, headers, thumbprint;
        return __generator2(this, function(_d) {
          switch (_d.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.RefreshTokenClientExecuteTokenRequest, request.correlationId);
              acquireTokenMeasurement = (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.startMeasurement(PerformanceEvents.RefreshTokenClientExecuteTokenRequest, request.correlationId);
              (_c = this.performanceClient) === null || _c === void 0 ? void 0 : _c.setPreQueueTime(PerformanceEvents.RefreshTokenClientCreateTokenRequestBody, request.correlationId);
              queryParametersString = this.createTokenQueryParameters(request);
              endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
              return [4, this.createTokenRequestBody(request)];
            case 1:
              requestBody = _d.sent();
              headers = this.createTokenRequestHeaders(request.ccsCredential);
              thumbprint = {
                clientId: this.config.authOptions.clientId,
                authority: authority.canonicalAuthority,
                scopes: request.scopes,
                claims: request.claims,
                authenticationScheme: request.authenticationScheme,
                resourceRequestMethod: request.resourceRequestMethod,
                resourceRequestUri: request.resourceRequestUri,
                shrClaims: request.shrClaims,
                sshKid: request.sshKid
              };
              return [2, this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint).then(function(result) {
                acquireTokenMeasurement === null || acquireTokenMeasurement === void 0 ? void 0 : acquireTokenMeasurement.endMeasurement({
                  success: true
                });
                return result;
              }).catch(function(error) {
                acquireTokenMeasurement === null || acquireTokenMeasurement === void 0 ? void 0 : acquireTokenMeasurement.endMeasurement({
                  success: false
                });
                throw error;
              })];
          }
        });
      });
    };
    RefreshTokenClient2.prototype.createTokenRequestBody = function(request) {
      var _a, _b, _c;
      return __awaiter2(this, void 0, void 0, function() {
        var correlationId, acquireTokenMeasurement, parameterBuilder, clientAssertion, popTokenGenerator, reqCnfData, clientInfo;
        return __generator2(this, function(_d) {
          switch (_d.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.RefreshTokenClientCreateTokenRequestBody, request.correlationId);
              correlationId = request.correlationId;
              acquireTokenMeasurement = (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.startMeasurement(PerformanceEvents.BaseClientCreateTokenRequestHeaders, correlationId);
              parameterBuilder = new RequestParameterBuilder();
              parameterBuilder.addClientId(this.config.authOptions.clientId);
              parameterBuilder.addScopes(request.scopes);
              parameterBuilder.addGrantType(GrantType.REFRESH_TOKEN_GRANT);
              parameterBuilder.addClientInfo();
              parameterBuilder.addLibraryInfo(this.config.libraryInfo);
              parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
              parameterBuilder.addThrottling();
              if (this.serverTelemetryManager) {
                parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
              }
              parameterBuilder.addCorrelationId(correlationId);
              parameterBuilder.addRefreshToken(request.refreshToken);
              if (this.config.clientCredentials.clientSecret) {
                parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
              }
              if (this.config.clientCredentials.clientAssertion) {
                clientAssertion = this.config.clientCredentials.clientAssertion;
                parameterBuilder.addClientAssertion(clientAssertion.assertion);
                parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
              }
              if (!(request.authenticationScheme === AuthenticationScheme.POP))
                return [3, 2];
              popTokenGenerator = new PopTokenGenerator(this.cryptoUtils, this.performanceClient);
              (_c = this.performanceClient) === null || _c === void 0 ? void 0 : _c.setPreQueueTime(PerformanceEvents.PopTokenGenerateCnf, request.correlationId);
              return [4, popTokenGenerator.generateCnf(request)];
            case 1:
              reqCnfData = _d.sent();
              parameterBuilder.addPopToken(reqCnfData.reqCnfString);
              return [3, 3];
            case 2:
              if (request.authenticationScheme === AuthenticationScheme.SSH) {
                if (request.sshJwk) {
                  parameterBuilder.addSshJwk(request.sshJwk);
                } else {
                  acquireTokenMeasurement === null || acquireTokenMeasurement === void 0 ? void 0 : acquireTokenMeasurement.endMeasurement({
                    success: false
                  });
                  throw ClientConfigurationError.createMissingSshJwkError();
                }
              }
              _d.label = 3;
            case 3:
              if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
              }
              if (this.config.systemOptions.preventCorsPreflight && request.ccsCredential) {
                switch (request.ccsCredential.type) {
                  case CcsCredentialType.HOME_ACCOUNT_ID:
                    try {
                      clientInfo = buildClientInfoFromHomeAccountId(request.ccsCredential.credential);
                      parameterBuilder.addCcsOid(clientInfo);
                    } catch (e2) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + e2);
                    }
                    break;
                  case CcsCredentialType.UPN:
                    parameterBuilder.addCcsUpn(request.ccsCredential.credential);
                    break;
                }
              }
              acquireTokenMeasurement === null || acquireTokenMeasurement === void 0 ? void 0 : acquireTokenMeasurement.endMeasurement({
                success: true
              });
              return [2, parameterBuilder.createQueryString()];
          }
        });
      });
    };
    return RefreshTokenClient2;
  }(BaseClient)
);

// node_modules/@azure/msal-common/dist/client/ClientCredentialClient.js
var ClientCredentialClient = (
  /** @class */
  function(_super) {
    __extends2(ClientCredentialClient2, _super);
    function ClientCredentialClient2(configuration, appTokenProvider) {
      var _this = _super.call(this, configuration) || this;
      _this.appTokenProvider = appTokenProvider;
      return _this;
    }
    ClientCredentialClient2.prototype.acquireToken = function(request) {
      return __awaiter2(this, void 0, void 0, function() {
        var cachedAuthenticationResult;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.scopeSet = new ScopeSet(request.scopes || []);
              if (!request.skipCache)
                return [3, 2];
              return [4, this.executeTokenRequest(request, this.authority)];
            case 1:
              return [2, _a.sent()];
            case 2:
              return [4, this.getCachedAuthenticationResult(request)];
            case 3:
              cachedAuthenticationResult = _a.sent();
              if (!cachedAuthenticationResult)
                return [3, 4];
              return [2, cachedAuthenticationResult];
            case 4:
              return [4, this.executeTokenRequest(request, this.authority)];
            case 5:
              return [2, _a.sent()];
          }
        });
      });
    };
    ClientCredentialClient2.prototype.getCachedAuthenticationResult = function(request) {
      var _a, _b;
      return __awaiter2(this, void 0, void 0, function() {
        var cachedAccessToken;
        return __generator2(this, function(_c) {
          switch (_c.label) {
            case 0:
              cachedAccessToken = this.readAccessTokenFromCache();
              if (!cachedAccessToken) {
                (_a = this.serverTelemetryManager) === null || _a === void 0 ? void 0 : _a.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN);
                return [2, null];
              }
              if (TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                (_b = this.serverTelemetryManager) === null || _b === void 0 ? void 0 : _b.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED);
                return [2, null];
              }
              return [4, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, {
                account: null,
                idToken: null,
                accessToken: cachedAccessToken,
                refreshToken: null,
                appMetadata: null
              }, true, request)];
            case 1:
              return [2, _c.sent()];
          }
        });
      });
    };
    ClientCredentialClient2.prototype.readAccessTokenFromCache = function() {
      var accessTokenFilter = {
        homeAccountId: Constants.EMPTY_STRING,
        environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
        credentialType: CredentialType.ACCESS_TOKEN,
        clientId: this.config.authOptions.clientId,
        realm: this.authority.tenant,
        target: ScopeSet.createSearchScopes(this.scopeSet.asArray())
      };
      var accessTokens = this.cacheManager.getAccessTokensByFilter(accessTokenFilter);
      if (accessTokens.length < 1) {
        return null;
      } else if (accessTokens.length > 1) {
        throw ClientAuthError.createMultipleMatchingTokensInCacheError();
      }
      return accessTokens[0];
    };
    ClientCredentialClient2.prototype.executeTokenRequest = function(request, authority) {
      return __awaiter2(this, void 0, void 0, function() {
        var serverTokenResponse, reqTimestamp, appTokenPropviderParameters, appTokenProviderResult, queryParametersString, endpoint, requestBody, headers, thumbprint, response, responseHandler, tokenResponse;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!this.appTokenProvider)
                return [3, 2];
              this.logger.info("Using appTokenProvider extensibility.");
              appTokenPropviderParameters = {
                correlationId: request.correlationId,
                tenantId: this.config.authOptions.authority.tenant,
                scopes: request.scopes,
                claims: request.claims
              };
              reqTimestamp = TimeUtils.nowSeconds();
              return [4, this.appTokenProvider(appTokenPropviderParameters)];
            case 1:
              appTokenProviderResult = _a.sent();
              serverTokenResponse = {
                access_token: appTokenProviderResult.accessToken,
                expires_in: appTokenProviderResult.expiresInSeconds,
                refresh_in: appTokenProviderResult.refreshInSeconds,
                token_type: AuthenticationScheme.BEARER
              };
              return [3, 4];
            case 2:
              queryParametersString = this.createTokenQueryParameters(request);
              endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
              requestBody = this.createTokenRequestBody(request);
              headers = this.createTokenRequestHeaders();
              thumbprint = {
                clientId: this.config.authOptions.clientId,
                authority: request.authority,
                scopes: request.scopes,
                claims: request.claims,
                authenticationScheme: request.authenticationScheme,
                resourceRequestMethod: request.resourceRequestMethod,
                resourceRequestUri: request.resourceRequestUri,
                shrClaims: request.shrClaims,
                sshKid: request.sshKid
              };
              reqTimestamp = TimeUtils.nowSeconds();
              return [4, this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint)];
            case 3:
              response = _a.sent();
              serverTokenResponse = response.body;
              _a.label = 4;
            case 4:
              responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
              responseHandler.validateTokenResponse(serverTokenResponse);
              return [4, responseHandler.handleServerTokenResponse(serverTokenResponse, this.authority, reqTimestamp, request)];
            case 5:
              tokenResponse = _a.sent();
              return [2, tokenResponse];
          }
        });
      });
    };
    ClientCredentialClient2.prototype.createTokenRequestBody = function(request) {
      var parameterBuilder = new RequestParameterBuilder();
      parameterBuilder.addClientId(this.config.authOptions.clientId);
      parameterBuilder.addScopes(request.scopes, false);
      parameterBuilder.addGrantType(GrantType.CLIENT_CREDENTIALS_GRANT);
      parameterBuilder.addLibraryInfo(this.config.libraryInfo);
      parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
      parameterBuilder.addThrottling();
      if (this.serverTelemetryManager) {
        parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
      }
      var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
      parameterBuilder.addCorrelationId(correlationId);
      if (this.config.clientCredentials.clientSecret) {
        parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
      }
      var clientAssertion = request.clientAssertion || this.config.clientCredentials.clientAssertion;
      if (clientAssertion) {
        parameterBuilder.addClientAssertion(clientAssertion.assertion);
        parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
      }
      if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
      }
      return parameterBuilder.createQueryString();
    };
    return ClientCredentialClient2;
  }(BaseClient)
);

// node_modules/@azure/msal-common/dist/client/OnBehalfOfClient.js
var OnBehalfOfClient = (
  /** @class */
  function(_super) {
    __extends2(OnBehalfOfClient2, _super);
    function OnBehalfOfClient2(configuration) {
      return _super.call(this, configuration) || this;
    }
    OnBehalfOfClient2.prototype.acquireToken = function(request) {
      return __awaiter2(this, void 0, void 0, function() {
        var _a;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              this.scopeSet = new ScopeSet(request.scopes || []);
              _a = this;
              return [4, this.cryptoUtils.hashString(request.oboAssertion)];
            case 1:
              _a.userAssertionHash = _b.sent();
              if (!request.skipCache)
                return [3, 3];
              return [4, this.executeTokenRequest(request, this.authority, this.userAssertionHash)];
            case 2:
              return [2, _b.sent()];
            case 3:
              _b.trys.push([3, 5, , 7]);
              return [4, this.getCachedAuthenticationResult(request)];
            case 4:
              return [2, _b.sent()];
            case 5:
              _b.sent();
              return [4, this.executeTokenRequest(request, this.authority, this.userAssertionHash)];
            case 6:
              return [2, _b.sent()];
            case 7:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    OnBehalfOfClient2.prototype.getCachedAuthenticationResult = function(request) {
      var _a, _b;
      return __awaiter2(this, void 0, void 0, function() {
        var cachedAccessToken, cachedIdToken, idTokenObject, cachedAccount, localAccountId, accountInfo;
        return __generator2(this, function(_c) {
          switch (_c.label) {
            case 0:
              cachedAccessToken = this.readAccessTokenFromCacheForOBO(this.config.authOptions.clientId, request);
              if (!cachedAccessToken) {
                (_a = this.serverTelemetryManager) === null || _a === void 0 ? void 0 : _a.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN);
                this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties.");
                throw ClientAuthError.createRefreshRequiredError();
              } else if (TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                (_b = this.serverTelemetryManager) === null || _b === void 0 ? void 0 : _b.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED);
                this.logger.info("OnbehalfofFlow:getCachedAuthenticationResult - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds.");
                throw ClientAuthError.createRefreshRequiredError();
              }
              cachedIdToken = this.readIdTokenFromCacheForOBO(cachedAccessToken.homeAccountId);
              cachedAccount = null;
              if (cachedIdToken) {
                idTokenObject = new AuthToken(cachedIdToken.secret, this.config.cryptoInterface);
                localAccountId = idTokenObject.claims.oid ? idTokenObject.claims.oid : idTokenObject.claims.sub;
                accountInfo = {
                  homeAccountId: cachedIdToken.homeAccountId,
                  environment: cachedIdToken.environment,
                  tenantId: cachedIdToken.realm,
                  username: Constants.EMPTY_STRING,
                  localAccountId: localAccountId || Constants.EMPTY_STRING
                };
                cachedAccount = this.cacheManager.readAccountFromCache(accountInfo);
              }
              if (this.config.serverTelemetryManager) {
                this.config.serverTelemetryManager.incrementCacheHits();
              }
              return [4, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, {
                account: cachedAccount,
                accessToken: cachedAccessToken,
                idToken: cachedIdToken,
                refreshToken: null,
                appMetadata: null
              }, true, request, idTokenObject)];
            case 1:
              return [2, _c.sent()];
          }
        });
      });
    };
    OnBehalfOfClient2.prototype.readIdTokenFromCacheForOBO = function(atHomeAccountId) {
      var idTokenFilter = {
        homeAccountId: atHomeAccountId,
        environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
        credentialType: CredentialType.ID_TOKEN,
        clientId: this.config.authOptions.clientId,
        realm: this.authority.tenant
      };
      var idTokens = this.cacheManager.getIdTokensByFilter(idTokenFilter);
      if (idTokens.length < 1) {
        return null;
      }
      return idTokens[0];
    };
    OnBehalfOfClient2.prototype.readAccessTokenFromCacheForOBO = function(clientId, request) {
      var authScheme = request.authenticationScheme || AuthenticationScheme.BEARER;
      var credentialType = authScheme && authScheme.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase() ? CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME : CredentialType.ACCESS_TOKEN;
      var accessTokenFilter = {
        credentialType,
        clientId,
        target: ScopeSet.createSearchScopes(this.scopeSet.asArray()),
        tokenType: authScheme,
        keyId: request.sshKid,
        requestedClaimsHash: request.requestedClaimsHash,
        userAssertionHash: this.userAssertionHash
      };
      var accessTokens = this.cacheManager.getAccessTokensByFilter(accessTokenFilter);
      var numAccessTokens = accessTokens.length;
      if (numAccessTokens < 1) {
        return null;
      } else if (numAccessTokens > 1) {
        throw ClientAuthError.createMultipleMatchingTokensInCacheError();
      }
      return accessTokens[0];
    };
    OnBehalfOfClient2.prototype.executeTokenRequest = function(request, authority, userAssertionHash) {
      return __awaiter2(this, void 0, void 0, function() {
        var queryParametersString, endpoint, requestBody, headers, thumbprint, reqTimestamp, response, responseHandler, tokenResponse;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              queryParametersString = this.createTokenQueryParameters(request);
              endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
              requestBody = this.createTokenRequestBody(request);
              headers = this.createTokenRequestHeaders();
              thumbprint = {
                clientId: this.config.authOptions.clientId,
                authority: request.authority,
                scopes: request.scopes,
                claims: request.claims,
                authenticationScheme: request.authenticationScheme,
                resourceRequestMethod: request.resourceRequestMethod,
                resourceRequestUri: request.resourceRequestUri,
                shrClaims: request.shrClaims,
                sshKid: request.sshKid
              };
              reqTimestamp = TimeUtils.nowSeconds();
              return [4, this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint)];
            case 1:
              response = _a.sent();
              responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
              responseHandler.validateTokenResponse(response.body);
              return [4, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request, void 0, userAssertionHash)];
            case 2:
              tokenResponse = _a.sent();
              return [2, tokenResponse];
          }
        });
      });
    };
    OnBehalfOfClient2.prototype.createTokenRequestBody = function(request) {
      var parameterBuilder = new RequestParameterBuilder();
      parameterBuilder.addClientId(this.config.authOptions.clientId);
      parameterBuilder.addScopes(request.scopes);
      parameterBuilder.addGrantType(GrantType.JWT_BEARER);
      parameterBuilder.addClientInfo();
      parameterBuilder.addLibraryInfo(this.config.libraryInfo);
      parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
      parameterBuilder.addThrottling();
      if (this.serverTelemetryManager) {
        parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
      }
      var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
      parameterBuilder.addCorrelationId(correlationId);
      parameterBuilder.addRequestTokenUse(AADServerParamKeys.ON_BEHALF_OF);
      parameterBuilder.addOboAssertion(request.oboAssertion);
      if (this.config.clientCredentials.clientSecret) {
        parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
      }
      if (this.config.clientCredentials.clientAssertion) {
        var clientAssertion = this.config.clientCredentials.clientAssertion;
        parameterBuilder.addClientAssertion(clientAssertion.assertion);
        parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
      }
      if (request.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
      }
      return parameterBuilder.createQueryString();
    };
    return OnBehalfOfClient2;
  }(BaseClient)
);

// node_modules/@azure/msal-common/dist/client/SilentFlowClient.js
var SilentFlowClient = (
  /** @class */
  function(_super) {
    __extends2(SilentFlowClient2, _super);
    function SilentFlowClient2(configuration, performanceClient) {
      return _super.call(this, configuration, performanceClient) || this;
    }
    SilentFlowClient2.prototype.acquireToken = function(request) {
      return __awaiter2(this, void 0, void 0, function() {
        var e_1, refreshTokenClient;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [4, this.acquireCachedToken(request)];
            case 1:
              return [2, _a.sent()];
            case 2:
              e_1 = _a.sent();
              if (e_1 instanceof ClientAuthError && e_1.errorCode === ClientAuthErrorMessage.tokenRefreshRequired.code) {
                refreshTokenClient = new RefreshTokenClient(this.config, this.performanceClient);
                return [2, refreshTokenClient.acquireTokenByRefreshToken(request)];
              } else {
                throw e_1;
              }
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    SilentFlowClient2.prototype.acquireCachedToken = function(request) {
      var _a, _b, _c, _d;
      return __awaiter2(this, void 0, void 0, function() {
        var environment, cacheRecord;
        return __generator2(this, function(_e2) {
          switch (_e2.label) {
            case 0:
              if (!request) {
                throw ClientConfigurationError.createEmptyTokenRequestError();
              }
              if (request.forceRefresh) {
                (_a = this.serverTelemetryManager) === null || _a === void 0 ? void 0 : _a.setCacheOutcome(CacheOutcome.FORCE_REFRESH);
                this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true.");
                throw ClientAuthError.createRefreshRequiredError();
              }
              if (!request.account) {
                throw ClientAuthError.createNoAccountInSilentRequestError();
              }
              environment = request.authority || this.authority.getPreferredCache();
              cacheRecord = this.cacheManager.readCacheRecord(request.account, request, environment);
              if (!cacheRecord.accessToken) {
                (_b = this.serverTelemetryManager) === null || _b === void 0 ? void 0 : _b.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN);
                this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties.");
                throw ClientAuthError.createRefreshRequiredError();
              } else if (TimeUtils.wasClockTurnedBack(cacheRecord.accessToken.cachedAt) || TimeUtils.isTokenExpired(cacheRecord.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                (_c = this.serverTelemetryManager) === null || _c === void 0 ? void 0 : _c.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED);
                this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds.");
                throw ClientAuthError.createRefreshRequiredError();
              } else if (cacheRecord.accessToken.refreshOn && TimeUtils.isTokenExpired(cacheRecord.accessToken.refreshOn, 0)) {
                (_d = this.serverTelemetryManager) === null || _d === void 0 ? void 0 : _d.setCacheOutcome(CacheOutcome.REFRESH_CACHED_ACCESS_TOKEN);
                this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'.");
                throw ClientAuthError.createRefreshRequiredError();
              }
              if (this.config.serverTelemetryManager) {
                this.config.serverTelemetryManager.incrementCacheHits();
              }
              return [4, this.generateResultFromCacheRecord(cacheRecord, request)];
            case 1:
              return [2, _e2.sent()];
          }
        });
      });
    };
    SilentFlowClient2.prototype.generateResultFromCacheRecord = function(cacheRecord, request) {
      return __awaiter2(this, void 0, void 0, function() {
        var idTokenObj, authTime;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (cacheRecord.idToken) {
                idTokenObj = new AuthToken(cacheRecord.idToken.secret, this.config.cryptoInterface);
              }
              if (request.maxAge || request.maxAge === 0) {
                authTime = idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.auth_time;
                if (!authTime) {
                  throw ClientAuthError.createAuthTimeNotFoundError();
                }
                AuthToken.checkMaxAge(authTime, request.maxAge);
              }
              return [4, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, cacheRecord, true, request, idTokenObj)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    return SilentFlowClient2;
  }(BaseClient)
);

// node_modules/@azure/msal-common/dist/client/UsernamePasswordClient.js
var UsernamePasswordClient = (
  /** @class */
  function(_super) {
    __extends2(UsernamePasswordClient2, _super);
    function UsernamePasswordClient2(configuration) {
      return _super.call(this, configuration) || this;
    }
    UsernamePasswordClient2.prototype.acquireToken = function(request) {
      var _a, _b;
      return __awaiter2(this, void 0, void 0, function() {
        var atsMeasurement, reqTimestamp, response, httpVerToken, responseHandler, tokenResponse;
        return __generator2(this, function(_c) {
          switch (_c.label) {
            case 0:
              atsMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement("UsernamePasswordClientAcquireToken", request.correlationId);
              this.logger.info("in acquireToken call in username-password client");
              reqTimestamp = TimeUtils.nowSeconds();
              return [4, this.executeTokenRequest(this.authority, request)];
            case 1:
              response = _c.sent();
              httpVerToken = (_b = response.headers) === null || _b === void 0 ? void 0 : _b[HeaderNames.X_MS_HTTP_VERSION];
              atsMeasurement === null || atsMeasurement === void 0 ? void 0 : atsMeasurement.addStaticFields({
                httpVerToken
              });
              responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
              responseHandler.validateTokenResponse(response.body);
              tokenResponse = responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request);
              return [2, tokenResponse];
          }
        });
      });
    };
    UsernamePasswordClient2.prototype.executeTokenRequest = function(authority, request) {
      return __awaiter2(this, void 0, void 0, function() {
        var queryParametersString, endpoint, requestBody, headers, thumbprint;
        return __generator2(this, function(_a) {
          queryParametersString = this.createTokenQueryParameters(request);
          endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParametersString);
          requestBody = this.createTokenRequestBody(request);
          headers = this.createTokenRequestHeaders({
            credential: request.username,
            type: CcsCredentialType.UPN
          });
          thumbprint = {
            clientId: this.config.authOptions.clientId,
            authority: authority.canonicalAuthority,
            scopes: request.scopes,
            claims: request.claims,
            authenticationScheme: request.authenticationScheme,
            resourceRequestMethod: request.resourceRequestMethod,
            resourceRequestUri: request.resourceRequestUri,
            shrClaims: request.shrClaims,
            sshKid: request.sshKid
          };
          return [2, this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint)];
        });
      });
    };
    UsernamePasswordClient2.prototype.createTokenRequestBody = function(request) {
      var parameterBuilder = new RequestParameterBuilder();
      parameterBuilder.addClientId(this.config.authOptions.clientId);
      parameterBuilder.addUsername(request.username);
      parameterBuilder.addPassword(request.password);
      parameterBuilder.addScopes(request.scopes);
      parameterBuilder.addResponseTypeForTokenAndIdToken();
      parameterBuilder.addGrantType(GrantType.RESOURCE_OWNER_PASSWORD_GRANT);
      parameterBuilder.addClientInfo();
      parameterBuilder.addLibraryInfo(this.config.libraryInfo);
      parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
      parameterBuilder.addThrottling();
      if (this.serverTelemetryManager) {
        parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
      }
      var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
      parameterBuilder.addCorrelationId(correlationId);
      if (this.config.clientCredentials.clientSecret) {
        parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
      }
      if (this.config.clientCredentials.clientAssertion) {
        var clientAssertion = this.config.clientCredentials.clientAssertion;
        parameterBuilder.addClientAssertion(clientAssertion.assertion);
        parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
      }
      if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
        parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
      }
      if (this.config.systemOptions.preventCorsPreflight && request.username) {
        parameterBuilder.addCcsUpn(request.username);
      }
      return parameterBuilder.createQueryString();
    };
    return UsernamePasswordClient2;
  }(BaseClient)
);

// node_modules/@azure/msal-common/dist/authority/OpenIdConfigResponse.js
function isOpenIdConfigResponse(response) {
  return response.hasOwnProperty("authorization_endpoint") && response.hasOwnProperty("token_endpoint") && response.hasOwnProperty("issuer") && response.hasOwnProperty("jwks_uri");
}

// node_modules/@azure/msal-common/dist/authority/AuthorityMetadata.js
var rawMetdataJSON = { "endpointMetadata": { "https://login.microsoftonline.com/common/": { "token_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.com/common/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.com/common/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.com/common/kerberos", "tenant_region_scope": null, "cloud_instance_name": "microsoftonline.com", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { "token_endpoint": "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", "authorization_endpoint": "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.chinacloudapi.cn/common/kerberos", "tenant_region_scope": null, "cloud_instance_name": "partner.microsoftonline.cn", "cloud_graph_host_name": "graph.chinacloudapi.cn", "msgraph_host": "microsoftgraph.chinacloudapi.cn", "rbac_url": "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { "token_endpoint": "https://login.microsoftonline.us/common/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.us/common/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.us/{tenantid}/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.us/common/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.us/common/kerberos", "tenant_region_scope": null, "cloud_instance_name": "microsoftonline.us", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { "token_endpoint": "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.com/consumers/kerberos", "tenant_region_scope": null, "cloud_instance_name": "microsoftonline.com", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { "token_endpoint": "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", "authorization_endpoint": "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.chinacloudapi.cn/consumers/kerberos", "tenant_region_scope": null, "cloud_instance_name": "partner.microsoftonline.cn", "cloud_graph_host_name": "graph.chinacloudapi.cn", "msgraph_host": "microsoftgraph.chinacloudapi.cn", "rbac_url": "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { "token_endpoint": "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.us/consumers/kerberos", "tenant_region_scope": null, "cloud_instance_name": "microsoftonline.us", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { "token_endpoint": "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.com/{tenantid}/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.com/organizations/kerberos", "tenant_region_scope": null, "cloud_instance_name": "microsoftonline.com", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { "token_endpoint": "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", "authorization_endpoint": "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.chinacloudapi.cn/organizations/kerberos", "tenant_region_scope": null, "cloud_instance_name": "partner.microsoftonline.cn", "cloud_graph_host_name": "graph.chinacloudapi.cn", "msgraph_host": "microsoftgraph.chinacloudapi.cn", "rbac_url": "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { "token_endpoint": "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", "token_endpoint_auth_methods_supported": ["client_secret_post", "private_key_jwt", "client_secret_basic"], "jwks_uri": "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", "response_modes_supported": ["query", "fragment", "form_post"], "subject_types_supported": ["pairwise"], "id_token_signing_alg_values_supported": ["RS256"], "response_types_supported": ["code", "id_token", "code id_token", "id_token token"], "scopes_supported": ["openid", "profile", "email", "offline_access"], "issuer": "https://login.microsoftonline.us/{tenantid}/v2.0", "request_uri_parameter_supported": false, "userinfo_endpoint": "https://graph.microsoft.com/oidc/userinfo", "authorization_endpoint": "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", "device_authorization_endpoint": "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", "http_logout_supported": true, "frontchannel_logout_supported": true, "end_session_endpoint": "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", "claims_supported": ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], "kerberos_endpoint": "https://login.microsoftonline.us/organizations/kerberos", "tenant_region_scope": null, "cloud_instance_name": "microsoftonline.us", "cloud_graph_host_name": "graph.windows.net", "msgraph_host": "graph.microsoft.com", "rbac_url": "https://pasff.usgovcloudapi.net" } }, "instanceDiscoveryMetadata": { "https://login.microsoftonline.com/common/": { "tenant_discovery_endpoint": "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { "tenant_discovery_endpoint": "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { "tenant_discovery_endpoint": "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { "tenant_discovery_endpoint": "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { "tenant_discovery_endpoint": "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { "tenant_discovery_endpoint": "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { "tenant_discovery_endpoint": "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { "tenant_discovery_endpoint": "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { "tenant_discovery_endpoint": "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", "metadata": [{ "preferred_network": "login.microsoftonline.com", "preferred_cache": "login.windows.net", "aliases": ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { "preferred_network": "login.partner.microsoftonline.cn", "preferred_cache": "login.partner.microsoftonline.cn", "aliases": ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { "preferred_network": "login.microsoftonline.de", "preferred_cache": "login.microsoftonline.de", "aliases": ["login.microsoftonline.de"] }, { "preferred_network": "login.microsoftonline.us", "preferred_cache": "login.microsoftonline.us", "aliases": ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { "preferred_network": "login-us.microsoftonline.com", "preferred_cache": "login-us.microsoftonline.com", "aliases": ["login-us.microsoftonline.com"] }] } } };
var EndpointMetadata = rawMetdataJSON.endpointMetadata;
var InstanceDiscoveryMetadata = rawMetdataJSON.instanceDiscoveryMetadata;

// node_modules/@azure/msal-common/dist/authority/ProtocolMode.js
var ProtocolMode;
(function(ProtocolMode2) {
  ProtocolMode2["AAD"] = "AAD";
  ProtocolMode2["OIDC"] = "OIDC";
})(ProtocolMode || (ProtocolMode = {}));

// node_modules/@azure/msal-common/dist/cache/entities/AuthorityMetadataEntity.js
var AuthorityMetadataEntity = (
  /** @class */
  function() {
    function AuthorityMetadataEntity2() {
      this.expiresAt = TimeUtils.nowSeconds() + AUTHORITY_METADATA_CONSTANTS.REFRESH_TIME_SECONDS;
    }
    AuthorityMetadataEntity2.prototype.updateCloudDiscoveryMetadata = function(metadata, fromNetwork) {
      this.aliases = metadata.aliases;
      this.preferred_cache = metadata.preferred_cache;
      this.preferred_network = metadata.preferred_network;
      this.aliasesFromNetwork = fromNetwork;
    };
    AuthorityMetadataEntity2.prototype.updateEndpointMetadata = function(metadata, fromNetwork) {
      this.authorization_endpoint = metadata.authorization_endpoint;
      this.token_endpoint = metadata.token_endpoint;
      this.end_session_endpoint = metadata.end_session_endpoint;
      this.issuer = metadata.issuer;
      this.endpointsFromNetwork = fromNetwork;
      this.jwks_uri = metadata.jwks_uri;
    };
    AuthorityMetadataEntity2.prototype.updateCanonicalAuthority = function(authority) {
      this.canonical_authority = authority;
    };
    AuthorityMetadataEntity2.prototype.resetExpiresAt = function() {
      this.expiresAt = TimeUtils.nowSeconds() + AUTHORITY_METADATA_CONSTANTS.REFRESH_TIME_SECONDS;
    };
    AuthorityMetadataEntity2.prototype.isExpired = function() {
      return this.expiresAt <= TimeUtils.nowSeconds();
    };
    AuthorityMetadataEntity2.isAuthorityMetadataEntity = function(key, entity) {
      if (!entity) {
        return false;
      }
      return key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) === 0 && entity.hasOwnProperty("aliases") && entity.hasOwnProperty("preferred_cache") && entity.hasOwnProperty("preferred_network") && entity.hasOwnProperty("canonical_authority") && entity.hasOwnProperty("authorization_endpoint") && entity.hasOwnProperty("token_endpoint") && entity.hasOwnProperty("issuer") && entity.hasOwnProperty("aliasesFromNetwork") && entity.hasOwnProperty("endpointsFromNetwork") && entity.hasOwnProperty("expiresAt") && entity.hasOwnProperty("jwks_uri");
    };
    return AuthorityMetadataEntity2;
  }()
);

// node_modules/@azure/msal-common/dist/authority/CloudInstanceDiscoveryResponse.js
function isCloudInstanceDiscoveryResponse(response) {
  return response.hasOwnProperty("tenant_discovery_endpoint") && response.hasOwnProperty("metadata");
}

// node_modules/@azure/msal-common/dist/authority/CloudInstanceDiscoveryErrorResponse.js
function isCloudInstanceDiscoveryErrorResponse(response) {
  return response.hasOwnProperty("error") && response.hasOwnProperty("error_description");
}

// node_modules/@azure/msal-common/dist/authority/RegionDiscovery.js
var RegionDiscovery = (
  /** @class */
  function() {
    function RegionDiscovery2(networkInterface, performanceClient, correlationId) {
      this.networkInterface = networkInterface;
      this.performanceClient = performanceClient;
      this.correlationId = correlationId;
    }
    RegionDiscovery2.prototype.detectRegion = function(environmentRegion, regionDiscoveryMetadata) {
      var _a, _b, _c, _d;
      return __awaiter2(this, void 0, void 0, function() {
        var autodetectedRegionName, options, localIMDSVersionResponse, currentIMDSVersion, currentIMDSVersionResponse;
        return __generator2(this, function(_e2) {
          switch (_e2.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.RegionDiscoveryDetectRegion, this.correlationId);
              autodetectedRegionName = environmentRegion;
              if (!!autodetectedRegionName)
                return [3, 8];
              options = RegionDiscovery2.IMDS_OPTIONS;
              _e2.label = 1;
            case 1:
              _e2.trys.push([1, 6, , 7]);
              (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.setPreQueueTime(PerformanceEvents.RegionDiscoveryGetRegionFromIMDS, this.correlationId);
              return [4, this.getRegionFromIMDS(Constants.IMDS_VERSION, options)];
            case 2:
              localIMDSVersionResponse = _e2.sent();
              if (localIMDSVersionResponse.status === ResponseCodes.httpSuccess) {
                autodetectedRegionName = localIMDSVersionResponse.body;
                regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
              }
              if (!(localIMDSVersionResponse.status === ResponseCodes.httpBadRequest))
                return [3, 5];
              (_c = this.performanceClient) === null || _c === void 0 ? void 0 : _c.setPreQueueTime(PerformanceEvents.RegionDiscoveryGetCurrentVersion, this.correlationId);
              return [4, this.getCurrentVersion(options)];
            case 3:
              currentIMDSVersion = _e2.sent();
              if (!currentIMDSVersion) {
                regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
                return [2, null];
              }
              (_d = this.performanceClient) === null || _d === void 0 ? void 0 : _d.setPreQueueTime(PerformanceEvents.RegionDiscoveryGetRegionFromIMDS, this.correlationId);
              return [4, this.getRegionFromIMDS(currentIMDSVersion, options)];
            case 4:
              currentIMDSVersionResponse = _e2.sent();
              if (currentIMDSVersionResponse.status === ResponseCodes.httpSuccess) {
                autodetectedRegionName = currentIMDSVersionResponse.body;
                regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
              }
              _e2.label = 5;
            case 5:
              return [3, 7];
            case 6:
              _e2.sent();
              regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
              return [2, null];
            case 7:
              return [3, 9];
            case 8:
              regionDiscoveryMetadata.region_source = RegionDiscoverySources.ENVIRONMENT_VARIABLE;
              _e2.label = 9;
            case 9:
              if (!autodetectedRegionName) {
                regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
              }
              return [2, autodetectedRegionName || null];
          }
        });
      });
    };
    RegionDiscovery2.prototype.getRegionFromIMDS = function(version3, options) {
      var _a;
      return __awaiter2(this, void 0, void 0, function() {
        return __generator2(this, function(_b) {
          (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.RegionDiscoveryGetRegionFromIMDS, this.correlationId);
          return [2, this.networkInterface.sendGetRequestAsync(Constants.IMDS_ENDPOINT + "?api-version=" + version3 + "&format=text", options, Constants.IMDS_TIMEOUT)];
        });
      });
    };
    RegionDiscovery2.prototype.getCurrentVersion = function(options) {
      var _a;
      return __awaiter2(this, void 0, void 0, function() {
        var response;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.RegionDiscoveryGetCurrentVersion, this.correlationId);
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, this.networkInterface.sendGetRequestAsync(Constants.IMDS_ENDPOINT + "?format=json", options)];
            case 2:
              response = _b.sent();
              if (response.status === ResponseCodes.httpBadRequest && response.body && response.body["newest-versions"] && response.body["newest-versions"].length > 0) {
                return [2, response.body["newest-versions"][0]];
              }
              return [2, null];
            case 3:
              _b.sent();
              return [2, null];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    RegionDiscovery2.IMDS_OPTIONS = {
      headers: {
        Metadata: "true"
      }
    };
    return RegionDiscovery2;
  }()
);

// node_modules/@azure/msal-common/dist/authority/Authority.js
var Authority = (
  /** @class */
  function() {
    function Authority2(authority, networkInterface, cacheManager, authorityOptions, logger, performanceClient, correlationId) {
      this.canonicalAuthority = authority;
      this._canonicalAuthority.validateAsUri();
      this.networkInterface = networkInterface;
      this.cacheManager = cacheManager;
      this.authorityOptions = authorityOptions;
      this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 };
      this.logger = logger;
      this.performanceClient = performanceClient;
      this.correlationId = correlationId;
      this.regionDiscovery = new RegionDiscovery(networkInterface, this.performanceClient, this.correlationId);
    }
    Authority2.prototype.getAuthorityType = function(authorityUri) {
      if (authorityUri.HostNameAndPort.endsWith(Constants.CIAM_AUTH_URL)) {
        return AuthorityType.Ciam;
      }
      var pathSegments = authorityUri.PathSegments;
      if (pathSegments.length) {
        switch (pathSegments[0].toLowerCase()) {
          case Constants.ADFS:
            return AuthorityType.Adfs;
          case Constants.DSTS:
            return AuthorityType.Dsts;
        }
      }
      return AuthorityType.Default;
    };
    Object.defineProperty(Authority2.prototype, "authorityType", {
      // See above for AuthorityType
      get: function() {
        return this.getAuthorityType(this.canonicalAuthorityUrlComponents);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Authority2.prototype, "protocolMode", {
      /**
       * ProtocolMode enum representing the way endpoints are constructed.
       */
      get: function() {
        return this.authorityOptions.protocolMode;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Authority2.prototype, "options", {
      /**
       * Returns authorityOptions which can be used to reinstantiate a new authority instance
       */
      get: function() {
        return this.authorityOptions;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Authority2.prototype, "canonicalAuthority", {
      /**
       * A URL that is the authority set by the developer
       */
      get: function() {
        return this._canonicalAuthority.urlString;
      },
      /**
       * Sets canonical authority.
       */
      set: function(url) {
        this._canonicalAuthority = new UrlString(url);
        this._canonicalAuthority.validateAsUri();
        this._canonicalAuthorityUrlComponents = null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Authority2.prototype, "canonicalAuthorityUrlComponents", {
      /**
       * Get authority components.
       */
      get: function() {
        if (!this._canonicalAuthorityUrlComponents) {
          this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
        }
        return this._canonicalAuthorityUrlComponents;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Authority2.prototype, "hostnameAndPort", {
      /**
       * Get hostname and port i.e. login.microsoftonline.com
       */
      get: function() {
        return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Authority2.prototype, "tenant", {
      /**
       * Get tenant for authority.
       */
      get: function() {
        return this.canonicalAuthorityUrlComponents.PathSegments[0];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Authority2.prototype, "authorizationEndpoint", {
      /**
       * OAuth /authorize endpoint for requests
       */
      get: function() {
        if (this.discoveryComplete()) {
          return this.replacePath(this.metadata.authorization_endpoint);
        } else {
          throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Authority2.prototype, "tokenEndpoint", {
      /**
       * OAuth /token endpoint for requests
       */
      get: function() {
        if (this.discoveryComplete()) {
          return this.replacePath(this.metadata.token_endpoint);
        } else {
          throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Authority2.prototype, "deviceCodeEndpoint", {
      get: function() {
        if (this.discoveryComplete()) {
          return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        } else {
          throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Authority2.prototype, "endSessionEndpoint", {
      /**
       * OAuth logout endpoint for requests
       */
      get: function() {
        if (this.discoveryComplete()) {
          if (!this.metadata.end_session_endpoint) {
            throw ClientAuthError.createLogoutNotSupportedError();
          }
          return this.replacePath(this.metadata.end_session_endpoint);
        } else {
          throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Authority2.prototype, "selfSignedJwtAudience", {
      /**
       * OAuth issuer for requests
       */
      get: function() {
        if (this.discoveryComplete()) {
          return this.replacePath(this.metadata.issuer);
        } else {
          throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Authority2.prototype, "jwksUri", {
      /**
       * Jwks_uri for token signing keys
       */
      get: function() {
        if (this.discoveryComplete()) {
          return this.replacePath(this.metadata.jwks_uri);
        } else {
          throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
        }
      },
      enumerable: false,
      configurable: true
    });
    Authority2.prototype.canReplaceTenant = function(authorityUri) {
      return authorityUri.PathSegments.length === 1 && !Authority2.reservedTenantDomains.has(authorityUri.PathSegments[0]) && this.getAuthorityType(authorityUri) === AuthorityType.Default && this.protocolMode === ProtocolMode.AAD;
    };
    Authority2.prototype.replaceTenant = function(urlString) {
      return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
    };
    Authority2.prototype.replacePath = function(urlString) {
      var _this = this;
      var endpoint = urlString;
      var cachedAuthorityUrl = new UrlString(this.metadata.canonical_authority);
      var cachedAuthorityUrlComponents = cachedAuthorityUrl.getUrlComponents();
      var cachedAuthorityParts = cachedAuthorityUrlComponents.PathSegments;
      var currentAuthorityParts = this.canonicalAuthorityUrlComponents.PathSegments;
      currentAuthorityParts.forEach(function(currentPart, index) {
        var cachedPart = cachedAuthorityParts[index];
        if (index === 0 && _this.canReplaceTenant(cachedAuthorityUrlComponents)) {
          var tenantId = new UrlString(_this.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
          if (cachedPart !== tenantId) {
            _this.logger.verbose("Replacing tenant domain name " + cachedPart + " with id " + tenantId);
            cachedPart = tenantId;
          }
        }
        if (currentPart !== cachedPart) {
          endpoint = endpoint.replace("/" + cachedPart + "/", "/" + currentPart + "/");
        }
      });
      return this.replaceTenant(endpoint);
    };
    Object.defineProperty(Authority2.prototype, "defaultOpenIdConfigurationEndpoint", {
      /**
       * The default open id configuration endpoint for any canonical authority.
       */
      get: function() {
        if (this.authorityType === AuthorityType.Adfs || this.authorityType === AuthorityType.Dsts || this.protocolMode === ProtocolMode.OIDC) {
          return this.canonicalAuthority + ".well-known/openid-configuration";
        }
        return this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
      },
      enumerable: false,
      configurable: true
    });
    Authority2.prototype.discoveryComplete = function() {
      return !!this.metadata;
    };
    Authority2.prototype.resolveEndpointsAsync = function() {
      var _a, _b, _c;
      return __awaiter2(this, void 0, void 0, function() {
        var metadataEntity, cloudDiscoverySource, endpointSource, cacheKey;
        return __generator2(this, function(_d) {
          switch (_d.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.AuthorityResolveEndpointsAsync, this.correlationId);
              metadataEntity = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
              if (!metadataEntity) {
                metadataEntity = new AuthorityMetadataEntity();
                metadataEntity.updateCanonicalAuthority(this.canonicalAuthority);
              }
              (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.setPreQueueTime(PerformanceEvents.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId);
              return [4, this.updateCloudDiscoveryMetadata(metadataEntity)];
            case 1:
              cloudDiscoverySource = _d.sent();
              this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, metadataEntity.preferred_network);
              (_c = this.performanceClient) === null || _c === void 0 ? void 0 : _c.setPreQueueTime(PerformanceEvents.AuthorityUpdateEndpointMetadata, this.correlationId);
              return [4, this.updateEndpointMetadata(metadataEntity)];
            case 2:
              endpointSource = _d.sent();
              if (cloudDiscoverySource !== AuthorityMetadataSource.CACHE && endpointSource !== AuthorityMetadataSource.CACHE) {
                metadataEntity.resetExpiresAt();
                metadataEntity.updateCanonicalAuthority(this.canonicalAuthority);
              }
              cacheKey = this.cacheManager.generateAuthorityMetadataCacheKey(metadataEntity.preferred_cache);
              this.cacheManager.setAuthorityMetadata(cacheKey, metadataEntity);
              this.metadata = metadataEntity;
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Authority2.prototype.updateEndpointMetadata = function(metadataEntity) {
      var _a, _b, _c, _d, _e2, _f;
      return __awaiter2(this, void 0, void 0, function() {
        var metadata, harcodedMetadata;
        return __generator2(this, function(_g) {
          switch (_g.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.AuthorityUpdateEndpointMetadata, this.correlationId);
              metadata = this.getEndpointMetadataFromConfig();
              if (metadata) {
                metadataEntity.updateEndpointMetadata(metadata, false);
                return [2, AuthorityMetadataSource.CONFIG];
              }
              if (this.isAuthoritySameType(metadataEntity) && metadataEntity.endpointsFromNetwork && !metadataEntity.isExpired()) {
                return [2, AuthorityMetadataSource.CACHE];
              }
              (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.setPreQueueTime(PerformanceEvents.AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
              return [4, this.getEndpointMetadataFromNetwork()];
            case 1:
              metadata = _g.sent();
              if (!metadata)
                return [3, 4];
              if (!((_c = this.authorityOptions.azureRegionConfiguration) === null || _c === void 0 ? void 0 : _c.azureRegion))
                return [3, 3];
              (_d = this.performanceClient) === null || _d === void 0 ? void 0 : _d.setPreQueueTime(PerformanceEvents.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
              return [4, this.updateMetadataWithRegionalInformation(metadata)];
            case 2:
              metadata = _g.sent();
              _g.label = 3;
            case 3:
              metadataEntity.updateEndpointMetadata(metadata, true);
              return [2, AuthorityMetadataSource.NETWORK];
            case 4:
              harcodedMetadata = this.getEndpointMetadataFromHardcodedValues();
              if (!(harcodedMetadata && !this.authorityOptions.skipAuthorityMetadataCache))
                return [3, 7];
              if (!((_e2 = this.authorityOptions.azureRegionConfiguration) === null || _e2 === void 0 ? void 0 : _e2.azureRegion))
                return [3, 6];
              (_f = this.performanceClient) === null || _f === void 0 ? void 0 : _f.setPreQueueTime(PerformanceEvents.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
              return [4, this.updateMetadataWithRegionalInformation(harcodedMetadata)];
            case 5:
              harcodedMetadata = _g.sent();
              _g.label = 6;
            case 6:
              metadataEntity.updateEndpointMetadata(harcodedMetadata, false);
              return [2, AuthorityMetadataSource.HARDCODED_VALUES];
            case 7:
              throw ClientAuthError.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
          }
        });
      });
    };
    Authority2.prototype.isAuthoritySameType = function(metadataEntity) {
      var cachedAuthorityUrl = new UrlString(metadataEntity.canonical_authority);
      var cachedParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
      return cachedParts.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
    };
    Authority2.prototype.getEndpointMetadataFromConfig = function() {
      if (this.authorityOptions.authorityMetadata) {
        try {
          return JSON.parse(this.authorityOptions.authorityMetadata);
        } catch (e2) {
          throw ClientConfigurationError.createInvalidAuthorityMetadataError();
        }
      }
      return null;
    };
    Authority2.prototype.getEndpointMetadataFromNetwork = function() {
      var _a;
      return __awaiter2(this, void 0, void 0, function() {
        var options, response;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
              options = {};
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, options)];
            case 2:
              response = _b.sent();
              return [2, isOpenIdConfigResponse(response.body) ? response.body : null];
            case 3:
              _b.sent();
              return [2, null];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    Authority2.prototype.getEndpointMetadataFromHardcodedValues = function() {
      if (this.canonicalAuthority in EndpointMetadata) {
        return EndpointMetadata[this.canonicalAuthority];
      }
      return null;
    };
    Authority2.prototype.updateMetadataWithRegionalInformation = function(metadata) {
      var _a, _b, _c, _d, _e2, _f, _g;
      return __awaiter2(this, void 0, void 0, function() {
        var autodetectedRegionName, azureRegion;
        return __generator2(this, function(_h) {
          switch (_h.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
              (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.setPreQueueTime(PerformanceEvents.RegionDiscoveryDetectRegion, this.correlationId);
              return [4, this.regionDiscovery.detectRegion((_c = this.authorityOptions.azureRegionConfiguration) === null || _c === void 0 ? void 0 : _c.environmentRegion, this.regionDiscoveryMetadata)];
            case 1:
              autodetectedRegionName = _h.sent();
              azureRegion = ((_d = this.authorityOptions.azureRegionConfiguration) === null || _d === void 0 ? void 0 : _d.azureRegion) === Constants.AZURE_REGION_AUTO_DISCOVER_FLAG ? autodetectedRegionName : (_e2 = this.authorityOptions.azureRegionConfiguration) === null || _e2 === void 0 ? void 0 : _e2.azureRegion;
              if (((_f = this.authorityOptions.azureRegionConfiguration) === null || _f === void 0 ? void 0 : _f.azureRegion) === Constants.AZURE_REGION_AUTO_DISCOVER_FLAG) {
                this.regionDiscoveryMetadata.region_outcome = autodetectedRegionName ? RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_SUCCESSFUL : RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_FAILED;
              } else {
                if (autodetectedRegionName) {
                  this.regionDiscoveryMetadata.region_outcome = ((_g = this.authorityOptions.azureRegionConfiguration) === null || _g === void 0 ? void 0 : _g.azureRegion) === autodetectedRegionName ? RegionDiscoveryOutcomes.CONFIGURED_MATCHES_DETECTED : RegionDiscoveryOutcomes.CONFIGURED_NOT_DETECTED;
                } else {
                  this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.CONFIGURED_NO_AUTO_DETECTION;
                }
              }
              if (azureRegion) {
                this.regionDiscoveryMetadata.region_used = azureRegion;
                return [2, Authority2.replaceWithRegionalInformation(metadata, azureRegion)];
              }
              return [2, metadata];
          }
        });
      });
    };
    Authority2.prototype.updateCloudDiscoveryMetadata = function(metadataEntity) {
      var _a, _b;
      return __awaiter2(this, void 0, void 0, function() {
        var metadata, metadataEntityExpired, harcodedMetadata;
        return __generator2(this, function(_c) {
          switch (_c.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId);
              this.logger.verbose("Attempting to get cloud discovery metadata in the config");
              this.logger.verbosePii("Known Authorities: " + (this.authorityOptions.knownAuthorities || Constants.NOT_APPLICABLE));
              this.logger.verbosePii("Authority Metadata: " + (this.authorityOptions.authorityMetadata || Constants.NOT_APPLICABLE));
              this.logger.verbosePii("Canonical Authority: " + (metadataEntity.canonical_authority || Constants.NOT_APPLICABLE));
              metadata = this.getCloudDiscoveryMetadataFromConfig();
              if (metadata) {
                this.logger.verbose("Found cloud discovery metadata in the config.");
                metadataEntity.updateCloudDiscoveryMetadata(metadata, false);
                return [2, AuthorityMetadataSource.CONFIG];
              }
              this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the cache.");
              metadataEntityExpired = metadataEntity.isExpired();
              if (this.isAuthoritySameType(metadataEntity) && metadataEntity.aliasesFromNetwork && !metadataEntityExpired) {
                this.logger.verbose("Found metadata in the cache.");
                return [2, AuthorityMetadataSource.CACHE];
              } else if (metadataEntityExpired) {
                this.logger.verbose("The metadata entity is expired.");
              }
              this.logger.verbose("Did not find cloud discovery metadata in the cache... Attempting to get cloud discovery metadata from the network.");
              (_b = this.performanceClient) === null || _b === void 0 ? void 0 : _b.setPreQueueTime(PerformanceEvents.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
              return [4, this.getCloudDiscoveryMetadataFromNetwork()];
            case 1:
              metadata = _c.sent();
              if (metadata) {
                this.logger.verbose("cloud discovery metadata was successfully returned from getCloudDiscoveryMetadataFromNetwork()");
                metadataEntity.updateCloudDiscoveryMetadata(metadata, true);
                return [2, AuthorityMetadataSource.NETWORK];
              }
              this.logger.verbose("Did not find cloud discovery metadata from the network... Attempting to get cloud discovery metadata from hardcoded values.");
              harcodedMetadata = this.getCloudDiscoveryMetadataFromHarcodedValues();
              if (harcodedMetadata && !this.options.skipAuthorityMetadataCache) {
                this.logger.verbose("Found cloud discovery metadata from hardcoded values.");
                metadataEntity.updateCloudDiscoveryMetadata(harcodedMetadata, false);
                return [2, AuthorityMetadataSource.HARDCODED_VALUES];
              }
              this.logger.error("Did not find cloud discovery metadata from hardcoded values... Metadata could not be obtained from config, cache, network or hardcoded values. Throwing Untrusted Authority Error.");
              throw ClientConfigurationError.createUntrustedAuthorityError();
          }
        });
      });
    };
    Authority2.prototype.getCloudDiscoveryMetadataFromConfig = function() {
      if (this.authorityType === AuthorityType.Ciam) {
        this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host.");
        return Authority2.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
      }
      if (this.authorityOptions.cloudDiscoveryMetadata) {
        this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
        try {
          this.logger.verbose("Attempting to parse the cloud discovery metadata.");
          var parsedResponse = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata);
          var metadata = Authority2.getCloudDiscoveryMetadataFromNetworkResponse(parsedResponse.metadata, this.hostnameAndPort);
          this.logger.verbose("Parsed the cloud discovery metadata.");
          if (metadata) {
            this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata.");
            return metadata;
          } else {
            this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.");
          }
        } catch (e2) {
          this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error.");
          throw ClientConfigurationError.createInvalidCloudDiscoveryMetadataError();
        }
      }
      if (this.isInKnownAuthorities()) {
        this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host.");
        return Authority2.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
      }
      return null;
    };
    Authority2.prototype.getCloudDiscoveryMetadataFromNetwork = function() {
      var _a;
      return __awaiter2(this, void 0, void 0, function() {
        var instanceDiscoveryEndpoint, options, match, response, typedResponseBody, metadata, error_1, typedError;
        return __generator2(this, function(_b) {
          switch (_b.label) {
            case 0:
              (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.addQueueMeasurement(PerformanceEvents.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
              instanceDiscoveryEndpoint = "" + Constants.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize";
              options = {};
              match = null;
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, this.networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint, options)];
            case 2:
              response = _b.sent();
              typedResponseBody = void 0;
              metadata = void 0;
              if (isCloudInstanceDiscoveryResponse(response.body)) {
                typedResponseBody = response.body;
                metadata = typedResponseBody.metadata;
                this.logger.verbosePii("tenant_discovery_endpoint is: " + typedResponseBody.tenant_discovery_endpoint);
              } else if (isCloudInstanceDiscoveryErrorResponse(response.body)) {
                this.logger.warning("A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: " + response.status);
                typedResponseBody = response.body;
                if (typedResponseBody.error === Constants.INVALID_INSTANCE) {
                  this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance.");
                  return [2, null];
                }
                this.logger.warning("The CloudInstanceDiscoveryErrorResponse error is " + typedResponseBody.error);
                this.logger.warning("The CloudInstanceDiscoveryErrorResponse error description is " + typedResponseBody.error_description);
                this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []");
                metadata = [];
              } else {
                this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse");
                return [2, null];
              }
              this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request.");
              match = Authority2.getCloudDiscoveryMetadataFromNetworkResponse(metadata, this.hostnameAndPort);
              return [3, 4];
            case 3:
              error_1 = _b.sent();
              if (error_1 instanceof AuthError) {
                this.logger.error("There was a network error while attempting to get the cloud discovery instance metadata.\nError: " + error_1.errorCode + "\nError Description: " + error_1.errorMessage);
              } else {
                typedError = error_1;
                this.logger.error("A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.\nError: " + typedError.name + "\nError Description: " + typedError.message);
              }
              return [2, null];
            case 4:
              if (!match) {
                this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request.");
                this.logger.verbose("Creating custom Authority for custom domain scenario.");
                match = Authority2.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
              }
              return [2, match];
          }
        });
      });
    };
    Authority2.prototype.getCloudDiscoveryMetadataFromHarcodedValues = function() {
      if (this.canonicalAuthority in InstanceDiscoveryMetadata) {
        return InstanceDiscoveryMetadata[this.canonicalAuthority];
      }
      return null;
    };
    Authority2.prototype.isInKnownAuthorities = function() {
      var _this = this;
      var matches = this.authorityOptions.knownAuthorities.filter(function(authority) {
        return UrlString.getDomainFromUrl(authority).toLowerCase() === _this.hostnameAndPort;
      });
      return matches.length > 0;
    };
    Authority2.generateAuthority = function(authorityString, azureCloudOptions) {
      var authorityAzureCloudInstance;
      if (azureCloudOptions && azureCloudOptions.azureCloudInstance !== AzureCloudInstance.None) {
        var tenant = azureCloudOptions.tenant ? azureCloudOptions.tenant : Constants.DEFAULT_COMMON_TENANT;
        authorityAzureCloudInstance = azureCloudOptions.azureCloudInstance + "/" + tenant + "/";
      }
      return authorityAzureCloudInstance ? authorityAzureCloudInstance : authorityString;
    };
    Authority2.createCloudDiscoveryMetadataFromHost = function(host) {
      return {
        preferred_network: host,
        preferred_cache: host,
        aliases: [host]
      };
    };
    Authority2.getCloudDiscoveryMetadataFromNetworkResponse = function(response, authority) {
      for (var i2 = 0; i2 < response.length; i2++) {
        var metadata = response[i2];
        if (metadata.aliases.indexOf(authority) > -1) {
          return metadata;
        }
      }
      return null;
    };
    Authority2.prototype.getPreferredCache = function() {
      if (this.discoveryComplete()) {
        return this.metadata.preferred_cache;
      } else {
        throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      }
    };
    Authority2.prototype.isAlias = function(host) {
      return this.metadata.aliases.indexOf(host) > -1;
    };
    Authority2.isPublicCloudAuthority = function(host) {
      return Constants.KNOWN_PUBLIC_CLOUDS.indexOf(host) >= 0;
    };
    Authority2.buildRegionalAuthorityString = function(host, region, queryString) {
      var authorityUrlInstance = new UrlString(host);
      authorityUrlInstance.validateAsUri();
      var authorityUrlParts = authorityUrlInstance.getUrlComponents();
      var hostNameAndPort = region + "." + authorityUrlParts.HostNameAndPort;
      if (this.isPublicCloudAuthority(authorityUrlParts.HostNameAndPort)) {
        hostNameAndPort = region + "." + Constants.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX;
      }
      var url = UrlString.constructAuthorityUriFromObject(__assign2(__assign2({}, authorityUrlInstance.getUrlComponents()), { HostNameAndPort: hostNameAndPort })).urlString;
      if (queryString)
        return url + "?" + queryString;
      return url;
    };
    Authority2.replaceWithRegionalInformation = function(metadata, azureRegion) {
      metadata.authorization_endpoint = Authority2.buildRegionalAuthorityString(metadata.authorization_endpoint, azureRegion);
      metadata.token_endpoint = Authority2.buildRegionalAuthorityString(metadata.token_endpoint, azureRegion, Constants.REGIONAL_AUTH_NON_MSI_QUERY_STRING);
      if (metadata.end_session_endpoint) {
        metadata.end_session_endpoint = Authority2.buildRegionalAuthorityString(metadata.end_session_endpoint, azureRegion);
      }
      return metadata;
    };
    Authority2.transformCIAMAuthority = function(authority) {
      var ciamAuthority = authority.endsWith(Constants.FORWARD_SLASH) ? authority : "" + authority + Constants.FORWARD_SLASH;
      var authorityUrl = new UrlString(authority);
      var authorityUrlComponents = authorityUrl.getUrlComponents();
      if (authorityUrlComponents.PathSegments.length === 0 && authorityUrlComponents.HostNameAndPort.endsWith(Constants.CIAM_AUTH_URL)) {
        var tenantIdOrDomain = authorityUrlComponents.HostNameAndPort.split(".")[0];
        ciamAuthority = "" + ciamAuthority + tenantIdOrDomain + Constants.AAD_TENANT_DOMAIN_SUFFIX;
      }
      return ciamAuthority;
    };
    Authority2.reservedTenantDomains = /* @__PURE__ */ new Set([
      "{tenant}",
      "{tenantid}",
      AADAuthorityConstants.COMMON,
      AADAuthorityConstants.CONSUMERS,
      AADAuthorityConstants.ORGANIZATIONS
    ]);
    return Authority2;
  }()
);

// node_modules/@azure/msal-common/dist/authority/AuthorityFactory.js
var AuthorityFactory = (
  /** @class */
  function() {
    function AuthorityFactory2() {
    }
    AuthorityFactory2.createDiscoveredInstance = function(authorityUri, networkClient, cacheManager, authorityOptions, logger, performanceClient, correlationId) {
      return __awaiter2(this, void 0, void 0, function() {
        var authorityUriFinal, acquireTokenAuthority, e_1;
        return __generator2(this, function(_a) {
          switch (_a.label) {
            case 0:
              performanceClient === null || performanceClient === void 0 ? void 0 : performanceClient.addQueueMeasurement(PerformanceEvents.AuthorityFactoryCreateDiscoveredInstance, correlationId);
              authorityUriFinal = Authority.transformCIAMAuthority(authorityUri);
              acquireTokenAuthority = AuthorityFactory2.createInstance(authorityUriFinal, networkClient, cacheManager, authorityOptions, logger, performanceClient, correlationId);
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              performanceClient === null || performanceClient === void 0 ? void 0 : performanceClient.setPreQueueTime(PerformanceEvents.AuthorityResolveEndpointsAsync, correlationId);
              return [4, acquireTokenAuthority.resolveEndpointsAsync()];
            case 2:
              _a.sent();
              return [2, acquireTokenAuthority];
            case 3:
              e_1 = _a.sent();
              throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_1);
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    AuthorityFactory2.createInstance = function(authorityUrl, networkInterface, cacheManager, authorityOptions, logger, performanceClient, correlationId) {
      if (StringUtils.isEmpty(authorityUrl)) {
        throw ClientConfigurationError.createUrlEmptyError();
      }
      return new Authority(authorityUrl, networkInterface, cacheManager, authorityOptions, logger, performanceClient, correlationId);
    };
    return AuthorityFactory2;
  }()
);

// node_modules/@azure/msal-common/dist/cache/entities/ServerTelemetryEntity.js
var ServerTelemetryEntity = (
  /** @class */
  function() {
    function ServerTelemetryEntity2() {
      this.failedRequests = [];
      this.errors = [];
      this.cacheHits = 0;
    }
    ServerTelemetryEntity2.isServerTelemetryEntity = function(key, entity) {
      var validateKey = key.indexOf(SERVER_TELEM_CONSTANTS.CACHE_KEY) === 0;
      var validateEntity = true;
      if (entity) {
        validateEntity = entity.hasOwnProperty("failedRequests") && entity.hasOwnProperty("errors") && entity.hasOwnProperty("cacheHits");
      }
      return validateKey && validateEntity;
    };
    return ServerTelemetryEntity2;
  }()
);

// node_modules/@azure/msal-common/dist/cache/entities/ThrottlingEntity.js
var ThrottlingEntity = (
  /** @class */
  function() {
    function ThrottlingEntity2() {
    }
    ThrottlingEntity2.isThrottlingEntity = function(key, entity) {
      var validateKey = false;
      if (key) {
        validateKey = key.indexOf(ThrottlingConstants.THROTTLING_PREFIX) === 0;
      }
      var validateEntity = true;
      if (entity) {
        validateEntity = entity.hasOwnProperty("throttleTime");
      }
      return validateKey && validateEntity;
    };
    return ThrottlingEntity2;
  }()
);

// node_modules/@azure/msal-common/dist/network/INetworkModule.js
var StubbedNetworkModule = {
  sendGetRequestAsync: function() {
    var notImplErr = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(AuthError.createUnexpectedError(notImplErr));
  },
  sendPostRequestAsync: function() {
    var notImplErr = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(AuthError.createUnexpectedError(notImplErr));
  }
};

// node_modules/@azure/msal-common/dist/error/JoseHeaderError.js
var JoseHeaderErrorMessage = {
  missingKidError: {
    code: "missing_kid_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided."
  },
  missingAlgError: {
    code: "missing_alg_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
  }
};
var JoseHeaderError = (
  /** @class */
  function(_super) {
    __extends2(JoseHeaderError2, _super);
    function JoseHeaderError2(errorCode, errorMessage) {
      var _this = _super.call(this, errorCode, errorMessage) || this;
      _this.name = "JoseHeaderError";
      Object.setPrototypeOf(_this, JoseHeaderError2.prototype);
      return _this;
    }
    JoseHeaderError2.createMissingKidError = function() {
      return new JoseHeaderError2(JoseHeaderErrorMessage.missingKidError.code, JoseHeaderErrorMessage.missingKidError.desc);
    };
    JoseHeaderError2.createMissingAlgError = function() {
      return new JoseHeaderError2(JoseHeaderErrorMessage.missingAlgError.code, JoseHeaderErrorMessage.missingAlgError.desc);
    };
    return JoseHeaderError2;
  }(AuthError)
);

// node_modules/@azure/msal-common/dist/crypto/JoseHeader.js
var JoseHeader = (
  /** @class */
  function() {
    function JoseHeader2(options) {
      this.typ = options.typ;
      this.alg = options.alg;
      this.kid = options.kid;
    }
    JoseHeader2.getShrHeaderString = function(shrHeaderOptions) {
      if (!shrHeaderOptions.kid) {
        throw JoseHeaderError.createMissingKidError();
      }
      if (!shrHeaderOptions.alg) {
        throw JoseHeaderError.createMissingAlgError();
      }
      var shrHeader = new JoseHeader2({
        // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
        typ: shrHeaderOptions.typ || JsonTypes.Pop,
        kid: shrHeaderOptions.kid,
        alg: shrHeaderOptions.alg
      });
      return JSON.stringify(shrHeader);
    };
    return JoseHeader2;
  }()
);

// node_modules/@azure/msal-common/dist/request/AuthenticationHeaderParser.js
var AuthenticationHeaderParser = (
  /** @class */
  function() {
    function AuthenticationHeaderParser2(headers) {
      this.headers = headers;
    }
    AuthenticationHeaderParser2.prototype.getShrNonce = function() {
      var authenticationInfo = this.headers[HeaderNames.AuthenticationInfo];
      if (authenticationInfo) {
        var authenticationInfoChallenges = this.parseChallenges(authenticationInfo);
        if (authenticationInfoChallenges.nextnonce) {
          return authenticationInfoChallenges.nextnonce;
        }
        throw ClientConfigurationError.createInvalidAuthenticationHeaderError(HeaderNames.AuthenticationInfo, "nextnonce challenge is missing.");
      }
      var wwwAuthenticate = this.headers[HeaderNames.WWWAuthenticate];
      if (wwwAuthenticate) {
        var wwwAuthenticateChallenges = this.parseChallenges(wwwAuthenticate);
        if (wwwAuthenticateChallenges.nonce) {
          return wwwAuthenticateChallenges.nonce;
        }
        throw ClientConfigurationError.createInvalidAuthenticationHeaderError(HeaderNames.WWWAuthenticate, "nonce challenge is missing.");
      }
      throw ClientConfigurationError.createMissingNonceAuthenticationHeadersError();
    };
    AuthenticationHeaderParser2.prototype.parseChallenges = function(header) {
      var schemeSeparator = header.indexOf(" ");
      var challenges = header.substr(schemeSeparator + 1).split(",");
      var challengeMap = {};
      challenges.forEach(function(challenge) {
        var _a = challenge.split("="), key = _a[0], value = _a[1];
        challengeMap[key] = unescape(value.replace(/['"]+/g, Constants.EMPTY_STRING));
      });
      return challengeMap;
    };
    return AuthenticationHeaderParser2;
  }()
);

// node_modules/@azure/msal-common/dist/telemetry/server/ServerTelemetryManager.js
var ServerTelemetryManager = (
  /** @class */
  function() {
    function ServerTelemetryManager2(telemetryRequest, cacheManager) {
      this.cacheOutcome = CacheOutcome.NO_CACHE_HIT;
      this.cacheManager = cacheManager;
      this.apiId = telemetryRequest.apiId;
      this.correlationId = telemetryRequest.correlationId;
      this.wrapperSKU = telemetryRequest.wrapperSKU || Constants.EMPTY_STRING;
      this.wrapperVer = telemetryRequest.wrapperVer || Constants.EMPTY_STRING;
      this.telemetryCacheKey = SERVER_TELEM_CONSTANTS.CACHE_KEY + Separators.CACHE_KEY_SEPARATOR + telemetryRequest.clientId;
    }
    ServerTelemetryManager2.prototype.generateCurrentRequestHeaderValue = function() {
      var request = "" + this.apiId + SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR + this.cacheOutcome;
      var platformFields = [this.wrapperSKU, this.wrapperVer].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
      var regionDiscoveryFields = this.getRegionDiscoveryFields();
      var requestWithRegionDiscoveryFields = [request, regionDiscoveryFields].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
      return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, requestWithRegionDiscoveryFields, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
    };
    ServerTelemetryManager2.prototype.generateLastRequestHeaderValue = function() {
      var lastRequests = this.getLastRequests();
      var maxErrors = ServerTelemetryManager2.maxErrorsToSend(lastRequests);
      var failedRequests = lastRequests.failedRequests.slice(0, 2 * maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
      var errors = lastRequests.errors.slice(0, maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
      var errorCount = lastRequests.errors.length;
      var overflow = maxErrors < errorCount ? SERVER_TELEM_CONSTANTS.OVERFLOW_TRUE : SERVER_TELEM_CONSTANTS.OVERFLOW_FALSE;
      var platformFields = [errorCount, overflow].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
      return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, lastRequests.cacheHits, failedRequests, errors, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
    };
    ServerTelemetryManager2.prototype.cacheFailedRequest = function(error) {
      var lastRequests = this.getLastRequests();
      if (lastRequests.errors.length >= SERVER_TELEM_CONSTANTS.MAX_CACHED_ERRORS) {
        lastRequests.failedRequests.shift();
        lastRequests.failedRequests.shift();
        lastRequests.errors.shift();
      }
      lastRequests.failedRequests.push(this.apiId, this.correlationId);
      if (!StringUtils.isEmpty(error.subError)) {
        lastRequests.errors.push(error.subError);
      } else if (!StringUtils.isEmpty(error.errorCode)) {
        lastRequests.errors.push(error.errorCode);
      } else if (!!error && error.toString()) {
        lastRequests.errors.push(error.toString());
      } else {
        lastRequests.errors.push(SERVER_TELEM_CONSTANTS.UNKNOWN_ERROR);
      }
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
      return;
    };
    ServerTelemetryManager2.prototype.incrementCacheHits = function() {
      var lastRequests = this.getLastRequests();
      lastRequests.cacheHits += 1;
      this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
      return lastRequests.cacheHits;
    };
    ServerTelemetryManager2.prototype.getLastRequests = function() {
      var initialValue = new ServerTelemetryEntity();
      var lastRequests = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
      return lastRequests || initialValue;
    };
    ServerTelemetryManager2.prototype.clearTelemetryCache = function() {
      var lastRequests = this.getLastRequests();
      var numErrorsFlushed = ServerTelemetryManager2.maxErrorsToSend(lastRequests);
      var errorCount = lastRequests.errors.length;
      if (numErrorsFlushed === errorCount) {
        this.cacheManager.removeItem(this.telemetryCacheKey);
      } else {
        var serverTelemEntity = new ServerTelemetryEntity();
        serverTelemEntity.failedRequests = lastRequests.failedRequests.slice(numErrorsFlushed * 2);
        serverTelemEntity.errors = lastRequests.errors.slice(numErrorsFlushed);
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, serverTelemEntity);
      }
    };
    ServerTelemetryManager2.maxErrorsToSend = function(serverTelemetryEntity) {
      var i2;
      var maxErrors = 0;
      var dataSize = 0;
      var errorCount = serverTelemetryEntity.errors.length;
      for (i2 = 0; i2 < errorCount; i2++) {
        var apiId = serverTelemetryEntity.failedRequests[2 * i2] || Constants.EMPTY_STRING;
        var correlationId = serverTelemetryEntity.failedRequests[2 * i2 + 1] || Constants.EMPTY_STRING;
        var errorCode = serverTelemetryEntity.errors[i2] || Constants.EMPTY_STRING;
        dataSize += apiId.toString().length + correlationId.toString().length + errorCode.length + 3;
        if (dataSize < SERVER_TELEM_CONSTANTS.MAX_LAST_HEADER_BYTES) {
          maxErrors += 1;
        } else {
          break;
        }
      }
      return maxErrors;
    };
    ServerTelemetryManager2.prototype.getRegionDiscoveryFields = function() {
      var regionDiscoveryFields = [];
      regionDiscoveryFields.push(this.regionUsed || Constants.EMPTY_STRING);
      regionDiscoveryFields.push(this.regionSource || Constants.EMPTY_STRING);
      regionDiscoveryFields.push(this.regionOutcome || Constants.EMPTY_STRING);
      return regionDiscoveryFields.join(",");
    };
    ServerTelemetryManager2.prototype.updateRegionDiscoveryMetadata = function(regionDiscoveryMetadata) {
      this.regionUsed = regionDiscoveryMetadata.region_used;
      this.regionSource = regionDiscoveryMetadata.region_source;
      this.regionOutcome = regionDiscoveryMetadata.region_outcome;
    };
    ServerTelemetryManager2.prototype.setCacheOutcome = function(cacheOutcome) {
      this.cacheOutcome = cacheOutcome;
    };
    return ServerTelemetryManager2;
  }()
);

// node_modules/@azure/msal-common/dist/telemetry/performance/PerformanceClient.js
var PerformanceClient = (
  /** @class */
  function() {
    function PerformanceClient2(clientId, authority, logger, libraryName, libraryVersion, applicationTelemetry) {
      this.authority = authority;
      this.libraryName = libraryName;
      this.libraryVersion = libraryVersion;
      this.applicationTelemetry = applicationTelemetry;
      this.clientId = clientId;
      this.logger = logger;
      this.callbacks = /* @__PURE__ */ new Map();
      this.eventsByCorrelationId = /* @__PURE__ */ new Map();
      this.queueMeasurements = /* @__PURE__ */ new Map();
      this.preQueueTimeByCorrelationId = /* @__PURE__ */ new Map();
    }
    PerformanceClient2.prototype.startPerformanceMeasurement = function(measureName, correlationId) {
      return {};
    };
    PerformanceClient2.prototype.startPerformanceMeasuremeant = function(measureName, correlationId) {
      return {};
    };
    PerformanceClient2.prototype.getIntFields = function() {
      return IntFields;
    };
    PerformanceClient2.prototype.getPreQueueTime = function(eventName, correlationId) {
      var preQueueEvent = this.preQueueTimeByCorrelationId.get(correlationId);
      if (!preQueueEvent) {
        this.logger.trace("PerformanceClient.getPreQueueTime: no pre-queue times found for correlationId: " + correlationId + ", unable to add queue measurement");
        return;
      } else if (preQueueEvent.name !== eventName) {
        this.logger.trace("PerformanceClient.getPreQueueTime: no pre-queue time found for " + eventName + ", unable to add queue measurement");
        return;
      }
      return preQueueEvent.time;
    };
    PerformanceClient2.prototype.calculateQueuedTime = function(preQueueTime, currentTime) {
      if (preQueueTime < 1) {
        this.logger.trace("PerformanceClient: preQueueTime should be a positive integer and not " + preQueueTime);
        return 0;
      }
      if (currentTime < 1) {
        this.logger.trace("PerformanceClient: currentTime should be a positive integer and not " + currentTime);
        return 0;
      }
      if (currentTime < preQueueTime) {
        this.logger.trace("PerformanceClient: currentTime is less than preQueueTime, check how time is being retrieved");
        return 0;
      }
      return currentTime - preQueueTime;
    };
    PerformanceClient2.prototype.addQueueMeasurement = function(eventName, correlationId, queueTime, manuallyCompleted) {
      if (!correlationId) {
        this.logger.trace("PerformanceClient.addQueueMeasurement: correlationId not provided for " + eventName + ", cannot add queue measurement");
        return;
      }
      if (queueTime === 0) {
        this.logger.trace("PerformanceClient.addQueueMeasurement: queue time provided for " + eventName + " is " + queueTime);
      } else if (!queueTime) {
        this.logger.trace("PerformanceClient.addQueueMeasurement: no queue time provided for " + eventName);
        return;
      }
      var queueMeasurement = { eventName, queueTime, manuallyCompleted };
      var existingMeasurements = this.queueMeasurements.get(correlationId);
      if (existingMeasurements) {
        existingMeasurements.push(queueMeasurement);
        this.queueMeasurements.set(correlationId, existingMeasurements);
      } else {
        this.logger.trace("PerformanceClient.addQueueMeasurement: adding correlationId " + correlationId + " to queue measurements");
        var measurementArray = [queueMeasurement];
        this.queueMeasurements.set(correlationId, measurementArray);
      }
      this.preQueueTimeByCorrelationId.delete(correlationId);
    };
    PerformanceClient2.prototype.startMeasurement = function(measureName, correlationId) {
      var _this = this;
      var _a, _b;
      var eventCorrelationId = correlationId || this.generateId();
      if (!correlationId) {
        this.logger.info("PerformanceClient: No correlation id provided for " + measureName + ", generating", eventCorrelationId);
      }
      this.logger.trace("PerformanceClient: Performance measurement started for " + measureName, eventCorrelationId);
      var performanceMeasurement = this.startPerformanceMeasuremeant(measureName, eventCorrelationId);
      performanceMeasurement.startMeasurement();
      var inProgressEvent = {
        eventId: this.generateId(),
        status: PerformanceEventStatus.InProgress,
        authority: this.authority,
        libraryName: this.libraryName,
        libraryVersion: this.libraryVersion,
        clientId: this.clientId,
        name: measureName,
        startTimeMs: Date.now(),
        correlationId: eventCorrelationId,
        appName: (_a = this.applicationTelemetry) === null || _a === void 0 ? void 0 : _a.appName,
        appVersion: (_b = this.applicationTelemetry) === null || _b === void 0 ? void 0 : _b.appVersion
      };
      this.cacheEventByCorrelationId(inProgressEvent);
      return {
        endMeasurement: function(event) {
          return _this.endMeasurement(__assign2(__assign2({}, inProgressEvent), event), performanceMeasurement);
        },
        discardMeasurement: function() {
          return _this.discardMeasurements(inProgressEvent.correlationId);
        },
        addStaticFields: function(fields) {
          return _this.addStaticFields(fields, inProgressEvent.correlationId);
        },
        increment: function(counters) {
          return _this.increment(counters, inProgressEvent.correlationId);
        },
        measurement: performanceMeasurement,
        event: inProgressEvent
      };
    };
    PerformanceClient2.prototype.endMeasurement = function(event, measurement) {
      var _this = this;
      var _a, _b;
      var rootEvent = this.eventsByCorrelationId.get(event.correlationId);
      if (!rootEvent) {
        this.logger.trace("PerformanceClient: Measurement not found for " + event.eventId, event.correlationId);
        return null;
      }
      var isRoot = event.eventId === rootEvent.eventId;
      var queueInfo = {
        totalQueueTime: 0,
        totalQueueCount: 0,
        manuallyCompletedCount: 0
      };
      if (isRoot) {
        queueInfo = this.getQueueInfo(event.correlationId);
        this.discardCache(rootEvent.correlationId);
      } else {
        (_a = rootEvent.incompleteSubMeasurements) === null || _a === void 0 ? void 0 : _a.delete(event.eventId);
      }
      measurement === null || measurement === void 0 ? void 0 : measurement.endMeasurement();
      var durationMs = measurement === null || measurement === void 0 ? void 0 : measurement.flushMeasurement();
      if (!durationMs) {
        this.logger.trace("PerformanceClient: Performance measurement not taken", rootEvent.correlationId);
        return null;
      }
      this.logger.trace("PerformanceClient: Performance measurement ended for " + event.name + ": " + durationMs + " ms", event.correlationId);
      if (!isRoot) {
        rootEvent[event.name + "DurationMs"] = Math.floor(durationMs);
        return __assign2({}, rootEvent);
      }
      var finalEvent = __assign2(__assign2({}, rootEvent), event);
      var incompleteSubsCount = 0;
      (_b = finalEvent.incompleteSubMeasurements) === null || _b === void 0 ? void 0 : _b.forEach(function(subMeasurement) {
        _this.logger.trace("PerformanceClient: Incomplete submeasurement " + subMeasurement.name + " found for " + event.name, finalEvent.correlationId);
        incompleteSubsCount++;
      });
      finalEvent.incompleteSubMeasurements = void 0;
      finalEvent = __assign2(__assign2({}, finalEvent), { durationMs: Math.round(durationMs), queuedTimeMs: queueInfo.totalQueueTime, queuedCount: queueInfo.totalQueueCount, queuedManuallyCompletedCount: queueInfo.manuallyCompletedCount, status: PerformanceEventStatus.Completed, incompleteSubsCount });
      this.truncateIntegralFields(finalEvent, this.getIntFields());
      this.emitEvents([finalEvent], event.correlationId);
      return finalEvent;
    };
    PerformanceClient2.prototype.addStaticFields = function(fields, correlationId) {
      this.logger.trace("PerformanceClient: Updating static fields");
      var event = this.eventsByCorrelationId.get(correlationId);
      if (event) {
        this.eventsByCorrelationId.set(correlationId, __assign2(__assign2({}, event), fields));
      } else {
        this.logger.trace("PerformanceClient: Event not found for", correlationId);
      }
    };
    PerformanceClient2.prototype.increment = function(counters, correlationId) {
      this.logger.trace("PerformanceClient: Updating counters");
      var event = this.eventsByCorrelationId.get(correlationId);
      if (event) {
        for (var counter in counters) {
          if (!event.hasOwnProperty(counter)) {
            event[counter] = 0;
          }
          event[counter] += counters[counter];
        }
      } else {
        this.logger.trace("PerformanceClient: Event not found for", correlationId);
      }
    };
    PerformanceClient2.prototype.cacheEventByCorrelationId = function(event) {
      var rootEvent = this.eventsByCorrelationId.get(event.correlationId);
      if (rootEvent) {
        this.logger.trace("PerformanceClient: Performance measurement for " + event.name + " added/updated", event.correlationId);
        rootEvent.incompleteSubMeasurements = rootEvent.incompleteSubMeasurements || /* @__PURE__ */ new Map();
        rootEvent.incompleteSubMeasurements.set(event.eventId, { name: event.name, startTimeMs: event.startTimeMs });
      } else {
        this.logger.trace("PerformanceClient: Performance measurement for " + event.name + " started", event.correlationId);
        this.eventsByCorrelationId.set(event.correlationId, __assign2({}, event));
      }
    };
    PerformanceClient2.prototype.getQueueInfo = function(correlationId) {
      var queueMeasurementForCorrelationId = this.queueMeasurements.get(correlationId);
      if (!queueMeasurementForCorrelationId) {
        this.logger.trace("PerformanceClient: no queue measurements found for for correlationId: " + correlationId);
      }
      var totalQueueTime = 0;
      var totalQueueCount = 0;
      var manuallyCompletedCount = 0;
      queueMeasurementForCorrelationId === null || queueMeasurementForCorrelationId === void 0 ? void 0 : queueMeasurementForCorrelationId.forEach(function(measurement) {
        totalQueueTime += measurement.queueTime;
        totalQueueCount++;
        manuallyCompletedCount += measurement.manuallyCompleted ? 1 : 0;
      });
      return {
        totalQueueTime,
        totalQueueCount,
        manuallyCompletedCount
      };
    };
    PerformanceClient2.prototype.discardMeasurements = function(correlationId) {
      this.logger.trace("PerformanceClient: Performance measurements discarded", correlationId);
      this.eventsByCorrelationId.delete(correlationId);
    };
    PerformanceClient2.prototype.discardCache = function(correlationId) {
      this.discardMeasurements(correlationId);
      this.logger.trace("PerformanceClient: QueueMeasurements discarded", correlationId);
      this.queueMeasurements.delete(correlationId);
      this.logger.trace("PerformanceClient: Pre-queue times discarded", correlationId);
      this.preQueueTimeByCorrelationId.delete(correlationId);
    };
    PerformanceClient2.prototype.addPerformanceCallback = function(callback) {
      var callbackId = this.generateId();
      this.callbacks.set(callbackId, callback);
      this.logger.verbose("PerformanceClient: Performance callback registered with id: " + callbackId);
      return callbackId;
    };
    PerformanceClient2.prototype.removePerformanceCallback = function(callbackId) {
      var result = this.callbacks.delete(callbackId);
      if (result) {
        this.logger.verbose("PerformanceClient: Performance callback " + callbackId + " removed.");
      } else {
        this.logger.verbose("PerformanceClient: Performance callback " + callbackId + " not removed.");
      }
      return result;
    };
    PerformanceClient2.prototype.emitEvents = function(events, correlationId) {
      var _this = this;
      this.logger.verbose("PerformanceClient: Emitting performance events", correlationId);
      this.callbacks.forEach(function(callback, callbackId) {
        _this.logger.trace("PerformanceClient: Emitting event to callback " + callbackId, correlationId);
        callback.apply(null, [events]);
      });
    };
    PerformanceClient2.prototype.truncateIntegralFields = function(event, intFields) {
      intFields.forEach(function(key) {
        if (key in event && typeof event[key] === "number") {
          event[key] = Math.floor(event[key]);
        }
      });
    };
    return PerformanceClient2;
  }()
);

// node_modules/@azure/msal-common/dist/telemetry/performance/StubPerformanceClient.js
var StubPerformanceMeasurement = (
  /** @class */
  function() {
    function StubPerformanceMeasurement2() {
    }
    StubPerformanceMeasurement2.prototype.startMeasurement = function() {
    };
    StubPerformanceMeasurement2.prototype.endMeasurement = function() {
    };
    StubPerformanceMeasurement2.prototype.flushMeasurement = function() {
      return null;
    };
    return StubPerformanceMeasurement2;
  }()
);
var StubPerformanceClient = (
  /** @class */
  function(_super) {
    __extends2(StubPerformanceClient2, _super);
    function StubPerformanceClient2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    StubPerformanceClient2.prototype.generateId = function() {
      return "callback-id";
    };
    StubPerformanceClient2.prototype.startPerformanceMeasuremeant = function() {
      return new StubPerformanceMeasurement();
    };
    StubPerformanceClient2.prototype.startPerformanceMeasurement = function() {
      return new StubPerformanceMeasurement();
    };
    StubPerformanceClient2.prototype.calculateQueuedTime = function(preQueueTime, currentTime) {
      return 0;
    };
    StubPerformanceClient2.prototype.addQueueMeasurement = function(eventName, correlationId, queueTime) {
      return;
    };
    StubPerformanceClient2.prototype.setPreQueueTime = function(eventName, correlationId) {
      return;
    };
    return StubPerformanceClient2;
  }(PerformanceClient)
);

// node_modules/@azure/msal-browser/dist/error/BrowserAuthError.js
var BrowserAuthErrorMessage = {
  pkceNotGenerated: {
    code: "pkce_not_created",
    desc: "The PKCE code challenge and verifier could not be generated."
  },
  cryptoDoesNotExist: {
    code: "crypto_nonexistent",
    desc: "The crypto object or function is not available."
  },
  httpMethodNotImplementedError: {
    code: "http_method_not_implemented",
    desc: "The HTTP method given has not been implemented in this library."
  },
  emptyNavigateUriError: {
    code: "empty_navigate_uri",
    desc: "Navigation URI is empty. Please check stack trace for more info."
  },
  hashEmptyError: {
    code: "hash_empty_error",
    desc: "Hash value cannot be processed because it is empty. Please verify that your redirectUri is not clearing the hash. For more visit: aka.ms/msaljs/browser-errors."
  },
  hashDoesNotContainStateError: {
    code: "no_state_in_hash",
    desc: "Hash does not contain state. Please verify that the request originated from msal."
  },
  hashDoesNotContainKnownPropertiesError: {
    code: "hash_does_not_contain_known_properties",
    desc: "Hash does not contain known properites. Please verify that your redirectUri is not changing the hash. For more visit: aka.ms/msaljs/browser-errors."
  },
  unableToParseStateError: {
    code: "unable_to_parse_state",
    desc: "Unable to parse state. Please verify that the request originated from msal."
  },
  stateInteractionTypeMismatchError: {
    code: "state_interaction_type_mismatch",
    desc: "Hash contains state but the interaction type does not match the caller."
  },
  interactionInProgress: {
    code: "interaction_in_progress",
    desc: "Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.  For more visit: aka.ms/msaljs/browser-errors."
  },
  popupWindowError: {
    code: "popup_window_error",
    desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
  },
  emptyWindowError: {
    code: "empty_window_error",
    desc: "window.open returned null or undefined window object."
  },
  userCancelledError: {
    code: "user_cancelled",
    desc: "User cancelled the flow."
  },
  monitorPopupTimeoutError: {
    code: "monitor_window_timeout",
    desc: "Token acquisition in popup failed due to timeout. For more visit: aka.ms/msaljs/browser-errors."
  },
  monitorIframeTimeoutError: {
    code: "monitor_window_timeout",
    desc: "Token acquisition in iframe failed due to timeout. For more visit: aka.ms/msaljs/browser-errors."
  },
  redirectInIframeError: {
    code: "redirect_in_iframe",
    desc: "Redirects are not supported for iframed or brokered applications. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs."
  },
  blockTokenRequestsInHiddenIframeError: {
    code: "block_iframe_reload",
    desc: "Request was blocked inside an iframe because MSAL detected an authentication response. For more visit: aka.ms/msaljs/browser-errors"
  },
  blockAcquireTokenInPopupsError: {
    code: "block_nested_popups",
    desc: "Request was blocked inside a popup because MSAL detected it was running in a popup."
  },
  iframeClosedPrematurelyError: {
    code: "iframe_closed_prematurely",
    desc: "The iframe being monitored was closed prematurely."
  },
  silentLogoutUnsupportedError: {
    code: "silent_logout_unsupported",
    desc: "Silent logout not supported. Please call logoutRedirect or logoutPopup instead."
  },
  noAccountError: {
    code: "no_account_error",
    desc: "No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request."
  },
  silentPromptValueError: {
    code: "silent_prompt_value_error",
    desc: "The value given for the prompt value is not valid for silent requests - must be set to 'none' or 'no_session'."
  },
  noTokenRequestCacheError: {
    code: "no_token_request_cache_error",
    desc: "No token request found in cache."
  },
  unableToParseTokenRequestCacheError: {
    code: "unable_to_parse_token_request_cache_error",
    desc: "The cached token request could not be parsed."
  },
  noCachedAuthorityError: {
    code: "no_cached_authority_error",
    desc: "No cached authority found."
  },
  authRequestNotSet: {
    code: "auth_request_not_set_error",
    desc: "Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler"
  },
  invalidCacheType: {
    code: "invalid_cache_type",
    desc: "Invalid cache type"
  },
  notInBrowserEnvironment: {
    code: "non_browser_environment",
    desc: "Login and token requests are not supported in non-browser environments."
  },
  databaseNotOpen: {
    code: "database_not_open",
    desc: "Database is not open!"
  },
  noNetworkConnectivity: {
    code: "no_network_connectivity",
    desc: "No network connectivity. Check your internet connection."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Network request failed: If the browser threw a CORS error, check that the redirectUri is registered in the Azure App Portal as type 'SPA'"
  },
  getRequestFailed: {
    code: "get_request_failed",
    desc: "Network request failed. Please check the network trace to determine root cause."
  },
  failedToParseNetworkResponse: {
    code: "failed_to_parse_response",
    desc: "Failed to parse network response. Check network trace."
  },
  unableToLoadTokenError: {
    code: "unable_to_load_token",
    desc: "Error loading token to cache."
  },
  signingKeyNotFoundInStorage: {
    code: "crypto_key_not_found",
    desc: "Cryptographic Key or Keypair not found in browser storage."
  },
  authCodeRequired: {
    code: "auth_code_required",
    desc: "An authorization code must be provided (as the `code` property on the request) to this flow."
  },
  authCodeOrNativeAccountRequired: {
    code: "auth_code_or_nativeAccountId_required",
    desc: "An authorization code or nativeAccountId must be provided to this flow."
  },
  spaCodeAndNativeAccountPresent: {
    code: "spa_code_and_nativeAccountId_present",
    desc: "Request cannot contain both spa code and native account id."
  },
  databaseUnavailable: {
    code: "database_unavailable",
    desc: "IndexedDB, which is required for persistent cryptographic key storage, is unavailable. This may be caused by browser privacy features which block persistent storage in third-party contexts."
  },
  unableToAcquireTokenFromNativePlatform: {
    code: "unable_to_acquire_token_from_native_platform",
    desc: "Unable to acquire token from native platform. For a list of possible reasons visit aka.ms/msaljs/browser-errors."
  },
  nativeHandshakeTimeout: {
    code: "native_handshake_timeout",
    desc: "Timed out while attempting to establish connection to browser extension"
  },
  nativeExtensionNotInstalled: {
    code: "native_extension_not_installed",
    desc: "Native extension is not installed. If you think this is a mistake call the initialize function."
  },
  nativeConnectionNotEstablished: {
    code: "native_connection_not_established",
    desc: "Connection to native platform has not been established. Please install a compatible browser extension and run initialize(). For more please visit aka.ms/msaljs/browser-errors."
  },
  nativeBrokerCalledBeforeInitialize: {
    code: "native_broker_called_before_initialize",
    desc: "You must call and await the initialize function before attempting to call any other MSAL API when native brokering is enabled. For more please visit aka.ms/msaljs/browser-errors."
  },
  nativePromptNotSupported: {
    code: "native_prompt_not_supported",
    desc: "The provided prompt is not supported by the native platform. This request should be routed to the web based flow."
  }
};
var BrowserAuthError = (
  /** @class */
  function(_super) {
    __extends(BrowserAuthError2, _super);
    function BrowserAuthError2(errorCode, errorMessage) {
      var _this = _super.call(this, errorCode, errorMessage) || this;
      Object.setPrototypeOf(_this, BrowserAuthError2.prototype);
      _this.name = "BrowserAuthError";
      return _this;
    }
    BrowserAuthError2.createPkceNotGeneratedError = function(errDetail) {
      return new BrowserAuthError2(BrowserAuthErrorMessage.pkceNotGenerated.code, BrowserAuthErrorMessage.pkceNotGenerated.desc + " Detail:" + errDetail);
    };
    BrowserAuthError2.createCryptoNotAvailableError = function(errDetail) {
      return new BrowserAuthError2(BrowserAuthErrorMessage.cryptoDoesNotExist.code, BrowserAuthErrorMessage.cryptoDoesNotExist.desc + " Detail:" + errDetail);
    };
    BrowserAuthError2.createHttpMethodNotImplementedError = function(method) {
      return new BrowserAuthError2(BrowserAuthErrorMessage.httpMethodNotImplementedError.code, BrowserAuthErrorMessage.httpMethodNotImplementedError.desc + " Given Method: " + method);
    };
    BrowserAuthError2.createEmptyNavigationUriError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.emptyNavigateUriError.code, BrowserAuthErrorMessage.emptyNavigateUriError.desc);
    };
    BrowserAuthError2.createEmptyHashError = function(hashValue) {
      return new BrowserAuthError2(BrowserAuthErrorMessage.hashEmptyError.code, BrowserAuthErrorMessage.hashEmptyError.desc + " Given Url: " + hashValue);
    };
    BrowserAuthError2.createHashDoesNotContainStateError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.hashDoesNotContainStateError.code, BrowserAuthErrorMessage.hashDoesNotContainStateError.desc);
    };
    BrowserAuthError2.createHashDoesNotContainKnownPropertiesError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.hashDoesNotContainKnownPropertiesError.code, BrowserAuthErrorMessage.hashDoesNotContainKnownPropertiesError.desc);
    };
    BrowserAuthError2.createUnableToParseStateError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.unableToParseStateError.code, BrowserAuthErrorMessage.unableToParseStateError.desc);
    };
    BrowserAuthError2.createStateInteractionTypeMismatchError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.stateInteractionTypeMismatchError.code, BrowserAuthErrorMessage.stateInteractionTypeMismatchError.desc);
    };
    BrowserAuthError2.createInteractionInProgressError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.interactionInProgress.code, BrowserAuthErrorMessage.interactionInProgress.desc);
    };
    BrowserAuthError2.createPopupWindowError = function(errDetail) {
      var errorMessage = BrowserAuthErrorMessage.popupWindowError.desc;
      errorMessage = !StringUtils.isEmpty(errDetail) ? errorMessage + " Details: " + errDetail : errorMessage;
      return new BrowserAuthError2(BrowserAuthErrorMessage.popupWindowError.code, errorMessage);
    };
    BrowserAuthError2.createEmptyWindowCreatedError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.emptyWindowError.code, BrowserAuthErrorMessage.emptyWindowError.desc);
    };
    BrowserAuthError2.createUserCancelledError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.userCancelledError.code, BrowserAuthErrorMessage.userCancelledError.desc);
    };
    BrowserAuthError2.createMonitorPopupTimeoutError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.monitorPopupTimeoutError.code, BrowserAuthErrorMessage.monitorPopupTimeoutError.desc);
    };
    BrowserAuthError2.createMonitorIframeTimeoutError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.monitorIframeTimeoutError.code, BrowserAuthErrorMessage.monitorIframeTimeoutError.desc);
    };
    BrowserAuthError2.createRedirectInIframeError = function(windowParentCheck) {
      return new BrowserAuthError2(BrowserAuthErrorMessage.redirectInIframeError.code, BrowserAuthErrorMessage.redirectInIframeError.desc + " (window.parent !== window) => " + windowParentCheck);
    };
    BrowserAuthError2.createBlockReloadInHiddenIframeError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.blockTokenRequestsInHiddenIframeError.code, BrowserAuthErrorMessage.blockTokenRequestsInHiddenIframeError.desc);
    };
    BrowserAuthError2.createBlockAcquireTokenInPopupsError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.blockAcquireTokenInPopupsError.code, BrowserAuthErrorMessage.blockAcquireTokenInPopupsError.desc);
    };
    BrowserAuthError2.createIframeClosedPrematurelyError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.iframeClosedPrematurelyError.code, BrowserAuthErrorMessage.iframeClosedPrematurelyError.desc);
    };
    BrowserAuthError2.createSilentLogoutUnsupportedError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.silentLogoutUnsupportedError.code, BrowserAuthErrorMessage.silentLogoutUnsupportedError.desc);
    };
    BrowserAuthError2.createNoAccountError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.noAccountError.code, BrowserAuthErrorMessage.noAccountError.desc);
    };
    BrowserAuthError2.createSilentPromptValueError = function(givenPrompt) {
      return new BrowserAuthError2(BrowserAuthErrorMessage.silentPromptValueError.code, BrowserAuthErrorMessage.silentPromptValueError.desc + " Given value: " + givenPrompt);
    };
    BrowserAuthError2.createUnableToParseTokenRequestCacheError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.unableToParseTokenRequestCacheError.code, BrowserAuthErrorMessage.unableToParseTokenRequestCacheError.desc);
    };
    BrowserAuthError2.createNoTokenRequestCacheError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.noTokenRequestCacheError.code, BrowserAuthErrorMessage.noTokenRequestCacheError.desc);
    };
    BrowserAuthError2.createAuthRequestNotSetError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.authRequestNotSet.code, BrowserAuthErrorMessage.authRequestNotSet.desc);
    };
    BrowserAuthError2.createNoCachedAuthorityError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.noCachedAuthorityError.code, BrowserAuthErrorMessage.noCachedAuthorityError.desc);
    };
    BrowserAuthError2.createInvalidCacheTypeError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.invalidCacheType.code, "" + BrowserAuthErrorMessage.invalidCacheType.desc);
    };
    BrowserAuthError2.createNonBrowserEnvironmentError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.notInBrowserEnvironment.code, BrowserAuthErrorMessage.notInBrowserEnvironment.desc);
    };
    BrowserAuthError2.createDatabaseNotOpenError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.databaseNotOpen.code, BrowserAuthErrorMessage.databaseNotOpen.desc);
    };
    BrowserAuthError2.createNoNetworkConnectivityError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.noNetworkConnectivity.code, BrowserAuthErrorMessage.noNetworkConnectivity.desc);
    };
    BrowserAuthError2.createPostRequestFailedError = function(errorDesc, endpoint) {
      return new BrowserAuthError2(BrowserAuthErrorMessage.postRequestFailed.code, BrowserAuthErrorMessage.postRequestFailed.desc + " | Network client threw: " + errorDesc + " | Attempted to reach: " + endpoint.split("?")[0]);
    };
    BrowserAuthError2.createGetRequestFailedError = function(errorDesc, endpoint) {
      return new BrowserAuthError2(BrowserAuthErrorMessage.getRequestFailed.code, BrowserAuthErrorMessage.getRequestFailed.desc + " | Network client threw: " + errorDesc + " | Attempted to reach: " + endpoint.split("?")[0]);
    };
    BrowserAuthError2.createFailedToParseNetworkResponseError = function(endpoint) {
      return new BrowserAuthError2(BrowserAuthErrorMessage.failedToParseNetworkResponse.code, BrowserAuthErrorMessage.failedToParseNetworkResponse.desc + " | Attempted to reach: " + endpoint.split("?")[0]);
    };
    BrowserAuthError2.createUnableToLoadTokenError = function(errorDetail) {
      return new BrowserAuthError2(BrowserAuthErrorMessage.unableToLoadTokenError.code, BrowserAuthErrorMessage.unableToLoadTokenError.desc + " | " + errorDetail);
    };
    BrowserAuthError2.createSigningKeyNotFoundInStorageError = function(keyId) {
      return new BrowserAuthError2(BrowserAuthErrorMessage.signingKeyNotFoundInStorage.code, BrowserAuthErrorMessage.signingKeyNotFoundInStorage.desc + " | No match found for KeyId: " + keyId);
    };
    BrowserAuthError2.createAuthCodeRequiredError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.authCodeRequired.code, BrowserAuthErrorMessage.authCodeRequired.desc);
    };
    BrowserAuthError2.createAuthCodeOrNativeAccountIdRequiredError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.authCodeOrNativeAccountRequired.code, BrowserAuthErrorMessage.authCodeOrNativeAccountRequired.desc);
    };
    BrowserAuthError2.createSpaCodeAndNativeAccountIdPresentError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.spaCodeAndNativeAccountPresent.code, BrowserAuthErrorMessage.spaCodeAndNativeAccountPresent.desc);
    };
    BrowserAuthError2.createDatabaseUnavailableError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.databaseUnavailable.code, BrowserAuthErrorMessage.databaseUnavailable.desc);
    };
    BrowserAuthError2.createUnableToAcquireTokenFromNativePlatformError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.unableToAcquireTokenFromNativePlatform.code, BrowserAuthErrorMessage.unableToAcquireTokenFromNativePlatform.desc);
    };
    BrowserAuthError2.createNativeHandshakeTimeoutError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.nativeHandshakeTimeout.code, BrowserAuthErrorMessage.nativeHandshakeTimeout.desc);
    };
    BrowserAuthError2.createNativeExtensionNotInstalledError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.nativeExtensionNotInstalled.code, BrowserAuthErrorMessage.nativeExtensionNotInstalled.desc);
    };
    BrowserAuthError2.createNativeConnectionNotEstablishedError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.nativeConnectionNotEstablished.code, BrowserAuthErrorMessage.nativeConnectionNotEstablished.desc);
    };
    BrowserAuthError2.createNativeBrokerCalledBeforeInitialize = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.nativeBrokerCalledBeforeInitialize.code, BrowserAuthErrorMessage.nativeBrokerCalledBeforeInitialize.desc);
    };
    BrowserAuthError2.createNativePromptParameterNotSupportedError = function() {
      return new BrowserAuthError2(BrowserAuthErrorMessage.nativePromptNotSupported.code, BrowserAuthErrorMessage.nativePromptNotSupported.desc);
    };
    return BrowserAuthError2;
  }(AuthError)
);

// node_modules/@azure/msal-browser/dist/utils/BrowserConstants.js
var BrowserConstants = {
  /**
   * Interaction in progress cache value
   */
  INTERACTION_IN_PROGRESS_VALUE: "interaction_in_progress",
  /**
   * Invalid grant error code
   */
  INVALID_GRANT_ERROR: "invalid_grant",
  /**
   * Default popup window width
   */
  POPUP_WIDTH: 483,
  /**
   * Default popup window height
   */
  POPUP_HEIGHT: 600,
  /**
   * Name of the popup window starts with
   */
  POPUP_NAME_PREFIX: "msal",
  /**
   * Default popup monitor poll interval in milliseconds
   */
  DEFAULT_POLL_INTERVAL_MS: 30,
  /**
   * Msal-browser SKU
   */
  MSAL_SKU: "msal.js.browser"
};
var NativeConstants = {
  CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
  PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
  MATS_TELEMETRY: "MATS"
};
var NativeExtensionMethod;
(function(NativeExtensionMethod2) {
  NativeExtensionMethod2["HandshakeRequest"] = "Handshake";
  NativeExtensionMethod2["HandshakeResponse"] = "HandshakeResponse";
  NativeExtensionMethod2["GetToken"] = "GetToken";
  NativeExtensionMethod2["Response"] = "Response";
})(NativeExtensionMethod || (NativeExtensionMethod = {}));
var BrowserCacheLocation;
(function(BrowserCacheLocation2) {
  BrowserCacheLocation2["LocalStorage"] = "localStorage";
  BrowserCacheLocation2["SessionStorage"] = "sessionStorage";
  BrowserCacheLocation2["MemoryStorage"] = "memoryStorage";
})(BrowserCacheLocation || (BrowserCacheLocation = {}));
var HTTP_REQUEST_TYPE;
(function(HTTP_REQUEST_TYPE2) {
  HTTP_REQUEST_TYPE2["GET"] = "GET";
  HTTP_REQUEST_TYPE2["POST"] = "POST";
})(HTTP_REQUEST_TYPE || (HTTP_REQUEST_TYPE = {}));
var TemporaryCacheKeys;
(function(TemporaryCacheKeys2) {
  TemporaryCacheKeys2["AUTHORITY"] = "authority";
  TemporaryCacheKeys2["ACQUIRE_TOKEN_ACCOUNT"] = "acquireToken.account";
  TemporaryCacheKeys2["SESSION_STATE"] = "session.state";
  TemporaryCacheKeys2["REQUEST_STATE"] = "request.state";
  TemporaryCacheKeys2["NONCE_IDTOKEN"] = "nonce.id_token";
  TemporaryCacheKeys2["ORIGIN_URI"] = "request.origin";
  TemporaryCacheKeys2["RENEW_STATUS"] = "token.renew.status";
  TemporaryCacheKeys2["URL_HASH"] = "urlHash";
  TemporaryCacheKeys2["REQUEST_PARAMS"] = "request.params";
  TemporaryCacheKeys2["SCOPES"] = "scopes";
  TemporaryCacheKeys2["INTERACTION_STATUS_KEY"] = "interaction.status";
  TemporaryCacheKeys2["CCS_CREDENTIAL"] = "ccs.credential";
  TemporaryCacheKeys2["CORRELATION_ID"] = "request.correlationId";
  TemporaryCacheKeys2["NATIVE_REQUEST"] = "request.native";
  TemporaryCacheKeys2["REDIRECT_CONTEXT"] = "request.redirect.context";
})(TemporaryCacheKeys || (TemporaryCacheKeys = {}));
var StaticCacheKeys;
(function(StaticCacheKeys2) {
  StaticCacheKeys2["ACCOUNT_KEYS"] = "msal.account.keys";
  StaticCacheKeys2["TOKEN_KEYS"] = "msal.token.keys";
})(StaticCacheKeys || (StaticCacheKeys = {}));
var InMemoryCacheKeys;
(function(InMemoryCacheKeys2) {
  InMemoryCacheKeys2["WRAPPER_SKU"] = "wrapper.sku";
  InMemoryCacheKeys2["WRAPPER_VER"] = "wrapper.version";
})(InMemoryCacheKeys || (InMemoryCacheKeys = {}));
var ApiId;
(function(ApiId2) {
  ApiId2[ApiId2["acquireTokenRedirect"] = 861] = "acquireTokenRedirect";
  ApiId2[ApiId2["acquireTokenPopup"] = 862] = "acquireTokenPopup";
  ApiId2[ApiId2["ssoSilent"] = 863] = "ssoSilent";
  ApiId2[ApiId2["acquireTokenSilent_authCode"] = 864] = "acquireTokenSilent_authCode";
  ApiId2[ApiId2["handleRedirectPromise"] = 865] = "handleRedirectPromise";
  ApiId2[ApiId2["acquireTokenByCode"] = 866] = "acquireTokenByCode";
  ApiId2[ApiId2["acquireTokenSilent_silentFlow"] = 61] = "acquireTokenSilent_silentFlow";
  ApiId2[ApiId2["logout"] = 961] = "logout";
  ApiId2[ApiId2["logoutPopup"] = 962] = "logoutPopup";
})(ApiId || (ApiId = {}));
var InteractionType;
(function(InteractionType2) {
  InteractionType2["Redirect"] = "redirect";
  InteractionType2["Popup"] = "popup";
  InteractionType2["Silent"] = "silent";
  InteractionType2["None"] = "none";
})(InteractionType || (InteractionType = {}));
var InteractionStatus;
(function(InteractionStatus2) {
  InteractionStatus2["Startup"] = "startup";
  InteractionStatus2["Login"] = "login";
  InteractionStatus2["Logout"] = "logout";
  InteractionStatus2["AcquireToken"] = "acquireToken";
  InteractionStatus2["SsoSilent"] = "ssoSilent";
  InteractionStatus2["HandleRedirect"] = "handleRedirect";
  InteractionStatus2["None"] = "none";
})(InteractionStatus || (InteractionStatus = {}));
var DEFAULT_REQUEST = {
  scopes: OIDC_DEFAULT_SCOPES
};
var KEY_FORMAT_JWK = "jwk";
var WrapperSKU;
(function(WrapperSKU2) {
  WrapperSKU2["React"] = "@azure/msal-react";
  WrapperSKU2["Angular"] = "@azure/msal-angular";
})(WrapperSKU || (WrapperSKU = {}));
var DB_NAME = "msal.db";
var DB_VERSION = 1;
var DB_TABLE_NAME = DB_NAME + ".keys";
var CacheLookupPolicy;
(function(CacheLookupPolicy2) {
  CacheLookupPolicy2[CacheLookupPolicy2["Default"] = 0] = "Default";
  CacheLookupPolicy2[CacheLookupPolicy2["AccessToken"] = 1] = "AccessToken";
  CacheLookupPolicy2[CacheLookupPolicy2["AccessTokenAndRefreshToken"] = 2] = "AccessTokenAndRefreshToken";
  CacheLookupPolicy2[CacheLookupPolicy2["RefreshToken"] = 3] = "RefreshToken";
  CacheLookupPolicy2[CacheLookupPolicy2["RefreshTokenAndNetwork"] = 4] = "RefreshTokenAndNetwork";
  CacheLookupPolicy2[CacheLookupPolicy2["Skip"] = 5] = "Skip";
})(CacheLookupPolicy || (CacheLookupPolicy = {}));

// node_modules/@azure/msal-browser/dist/error/BrowserConfigurationAuthError.js
var BrowserConfigurationAuthErrorMessage = {
  redirectUriNotSet: {
    code: "redirect_uri_empty",
    desc: "A redirect URI is required for all calls, and none has been set."
  },
  postLogoutUriNotSet: {
    code: "post_logout_uri_empty",
    desc: "A post logout redirect has not been set."
  },
  storageNotSupportedError: {
    code: "storage_not_supported",
    desc: "Given storage configuration option was not supported."
  },
  noRedirectCallbacksSet: {
    code: "no_redirect_callbacks",
    desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
  },
  invalidCallbackObject: {
    code: "invalid_callback_object",
    desc: "The object passed for the callback was invalid. More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
  },
  stubPcaInstanceCalled: {
    code: "stubbed_public_client_application_called",
    desc: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors"
  },
  inMemRedirectUnavailable: {
    code: "in_mem_redirect_unavailable",
    desc: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true."
  },
  entropyNotProvided: {
    code: "entropy_not_provided",
    desc: "The available browser crypto interface requires entropy set via system.cryptoOptions.entropy configuration option."
  }
};
var BrowserConfigurationAuthError = (
  /** @class */
  function(_super) {
    __extends(BrowserConfigurationAuthError2, _super);
    function BrowserConfigurationAuthError2(errorCode, errorMessage) {
      var _this = _super.call(this, errorCode, errorMessage) || this;
      _this.name = "BrowserConfigurationAuthError";
      Object.setPrototypeOf(_this, BrowserConfigurationAuthError2.prototype);
      return _this;
    }
    BrowserConfigurationAuthError2.createRedirectUriEmptyError = function() {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.redirectUriNotSet.code, BrowserConfigurationAuthErrorMessage.redirectUriNotSet.desc);
    };
    BrowserConfigurationAuthError2.createPostLogoutRedirectUriEmptyError = function() {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.code, BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.desc);
    };
    BrowserConfigurationAuthError2.createStorageNotSupportedError = function(givenStorageLocation) {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.storageNotSupportedError.code, BrowserConfigurationAuthErrorMessage.storageNotSupportedError.desc + " Given Location: " + givenStorageLocation);
    };
    BrowserConfigurationAuthError2.createRedirectCallbacksNotSetError = function() {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.code, BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.desc);
    };
    BrowserConfigurationAuthError2.createStubPcaInstanceCalledError = function() {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.stubPcaInstanceCalled.code, BrowserConfigurationAuthErrorMessage.stubPcaInstanceCalled.desc);
    };
    BrowserConfigurationAuthError2.createInMemoryRedirectUnavailableError = function() {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.inMemRedirectUnavailable.code, BrowserConfigurationAuthErrorMessage.inMemRedirectUnavailable.desc);
    };
    BrowserConfigurationAuthError2.createEntropyNotProvided = function() {
      return new BrowserConfigurationAuthError2(BrowserConfigurationAuthErrorMessage.entropyNotProvided.code, BrowserConfigurationAuthErrorMessage.entropyNotProvided.desc);
    };
    return BrowserConfigurationAuthError2;
  }(AuthError)
);

// node_modules/@azure/msal-browser/dist/cache/BrowserStorage.js
var BrowserStorage = (
  /** @class */
  function() {
    function BrowserStorage2(cacheLocation) {
      this.validateWindowStorage(cacheLocation);
      this.windowStorage = window[cacheLocation];
    }
    BrowserStorage2.prototype.validateWindowStorage = function(cacheLocation) {
      if (cacheLocation !== BrowserCacheLocation.LocalStorage && cacheLocation !== BrowserCacheLocation.SessionStorage) {
        throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
      }
      var storageSupported = !!window[cacheLocation];
      if (!storageSupported) {
        throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
      }
    };
    BrowserStorage2.prototype.getItem = function(key) {
      return this.windowStorage.getItem(key);
    };
    BrowserStorage2.prototype.setItem = function(key, value) {
      this.windowStorage.setItem(key, value);
    };
    BrowserStorage2.prototype.removeItem = function(key) {
      this.windowStorage.removeItem(key);
    };
    BrowserStorage2.prototype.getKeys = function() {
      return Object.keys(this.windowStorage);
    };
    BrowserStorage2.prototype.containsKey = function(key) {
      return this.windowStorage.hasOwnProperty(key);
    };
    return BrowserStorage2;
  }()
);

// node_modules/@azure/msal-browser/dist/cache/MemoryStorage.js
var MemoryStorage = (
  /** @class */
  function() {
    function MemoryStorage2() {
      this.cache = /* @__PURE__ */ new Map();
    }
    MemoryStorage2.prototype.getItem = function(key) {
      return this.cache.get(key) || null;
    };
    MemoryStorage2.prototype.setItem = function(key, value) {
      this.cache.set(key, value);
    };
    MemoryStorage2.prototype.removeItem = function(key) {
      this.cache.delete(key);
    };
    MemoryStorage2.prototype.getKeys = function() {
      var cacheKeys = [];
      this.cache.forEach(function(value, key) {
        cacheKeys.push(key);
      });
      return cacheKeys;
    };
    MemoryStorage2.prototype.containsKey = function(key) {
      return this.cache.has(key);
    };
    MemoryStorage2.prototype.clear = function() {
      this.cache.clear();
    };
    return MemoryStorage2;
  }()
);

// node_modules/@azure/msal-browser/dist/utils/BrowserProtocolUtils.js
var BrowserProtocolUtils = (
  /** @class */
  function() {
    function BrowserProtocolUtils2() {
    }
    BrowserProtocolUtils2.extractBrowserRequestState = function(browserCrypto, state2) {
      if (StringUtils.isEmpty(state2)) {
        return null;
      }
      try {
        var requestStateObj = ProtocolUtils.parseRequestState(browserCrypto, state2);
        return requestStateObj.libraryState.meta;
      } catch (e2) {
        throw ClientAuthError.createInvalidStateError(state2, e2);
      }
    };
    BrowserProtocolUtils2.parseServerResponseFromHash = function(locationHash) {
      if (!locationHash) {
        return {};
      }
      var hashUrlString = new UrlString(locationHash);
      return UrlString.getDeserializedHash(hashUrlString.getHash());
    };
    return BrowserProtocolUtils2;
  }()
);

// node_modules/@azure/msal-browser/dist/cache/BrowserCacheManager.js
var BrowserCacheManager = (
  /** @class */
  function(_super) {
    __extends(BrowserCacheManager2, _super);
    function BrowserCacheManager2(clientId, cacheConfig, cryptoImpl, logger) {
      var _this = _super.call(this, clientId, cryptoImpl, logger) || this;
      _this.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3;
      _this.cacheConfig = cacheConfig;
      _this.logger = logger;
      _this.internalStorage = new MemoryStorage();
      _this.browserStorage = _this.setupBrowserStorage(_this.cacheConfig.cacheLocation);
      _this.temporaryCacheStorage = _this.setupTemporaryCacheStorage(_this.cacheConfig.temporaryCacheLocation, _this.cacheConfig.cacheLocation);
      if (cacheConfig.cacheMigrationEnabled) {
        _this.migrateCacheEntries();
        _this.createKeyMaps();
      }
      return _this;
    }
    BrowserCacheManager2.prototype.setupBrowserStorage = function(cacheLocation) {
      switch (cacheLocation) {
        case BrowserCacheLocation.LocalStorage:
        case BrowserCacheLocation.SessionStorage:
          try {
            return new BrowserStorage(cacheLocation);
          } catch (e2) {
            this.logger.verbose(e2);
            break;
          }
      }
      this.cacheConfig.cacheLocation = BrowserCacheLocation.MemoryStorage;
      return new MemoryStorage();
    };
    BrowserCacheManager2.prototype.setupTemporaryCacheStorage = function(temporaryCacheLocation, cacheLocation) {
      switch (cacheLocation) {
        case BrowserCacheLocation.LocalStorage:
        case BrowserCacheLocation.SessionStorage:
          try {
            return new BrowserStorage(temporaryCacheLocation || BrowserCacheLocation.SessionStorage);
          } catch (e2) {
            this.logger.verbose(e2);
            return this.internalStorage;
          }
        case BrowserCacheLocation.MemoryStorage:
        default:
          return this.internalStorage;
      }
    };
    BrowserCacheManager2.prototype.migrateCacheEntries = function() {
      var _this = this;
      var idTokenKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ID_TOKEN;
      var clientInfoKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.CLIENT_INFO;
      var errorKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR;
      var errorDescKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR_DESC;
      var idTokenValue = this.browserStorage.getItem(idTokenKey);
      var clientInfoValue = this.browserStorage.getItem(clientInfoKey);
      var errorValue = this.browserStorage.getItem(errorKey);
      var errorDescValue = this.browserStorage.getItem(errorDescKey);
      var values = [idTokenValue, clientInfoValue, errorValue, errorDescValue];
      var keysToMigrate = [PersistentCacheKeys.ID_TOKEN, PersistentCacheKeys.CLIENT_INFO, PersistentCacheKeys.ERROR, PersistentCacheKeys.ERROR_DESC];
      keysToMigrate.forEach(function(cacheKey, index) {
        return _this.migrateCacheEntry(cacheKey, values[index]);
      });
    };
    BrowserCacheManager2.prototype.migrateCacheEntry = function(newKey, value) {
      if (value) {
        this.setTemporaryCache(newKey, value, true);
      }
    };
    BrowserCacheManager2.prototype.createKeyMaps = function() {
      var _this = this;
      this.logger.trace("BrowserCacheManager - createKeyMaps called.");
      var accountKeys = this.getItem(StaticCacheKeys.ACCOUNT_KEYS);
      var tokenKeys = this.getItem(StaticCacheKeys.TOKEN_KEYS + "." + this.clientId);
      if (accountKeys && tokenKeys) {
        this.logger.verbose("BrowserCacheManager:createKeyMaps - account and token key maps already exist, skipping migration.");
        return;
      }
      var allKeys = this.browserStorage.getKeys();
      allKeys.forEach(function(key) {
        if (_this.isCredentialKey(key)) {
          var value = _this.getItem(key);
          if (value) {
            var credObj = _this.validateAndParseJson(value);
            if (credObj && credObj.hasOwnProperty("credentialType")) {
              switch (credObj["credentialType"]) {
                case CredentialType.ID_TOKEN:
                  if (IdTokenEntity.isIdTokenEntity(credObj)) {
                    _this.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map");
                    _this.logger.tracePii("BrowserCacheManager:createKeyMaps - idToken with key: " + key + " found, saving key to token key map");
                    var idTokenEntity = CacheManager.toObject(new IdTokenEntity(), credObj);
                    var newKey = _this.updateCredentialCacheKey(key, idTokenEntity);
                    _this.addTokenKey(newKey, CredentialType.ID_TOKEN);
                    return;
                  } else {
                    _this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping.");
                    _this.logger.tracePii("BrowserCacheManager:createKeyMaps - failed idToken validation on key: " + key);
                  }
                  break;
                case CredentialType.ACCESS_TOKEN:
                case CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                  if (AccessTokenEntity.isAccessTokenEntity(credObj)) {
                    _this.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map");
                    _this.logger.tracePii("BrowserCacheManager:createKeyMaps - accessToken with key: " + key + " found, saving key to token key map");
                    var accessTokenEntity = CacheManager.toObject(new AccessTokenEntity(), credObj);
                    var newKey = _this.updateCredentialCacheKey(key, accessTokenEntity);
                    _this.addTokenKey(newKey, CredentialType.ACCESS_TOKEN);
                    return;
                  } else {
                    _this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping.");
                    _this.logger.tracePii("BrowserCacheManager:createKeyMaps - failed accessToken validation on key: " + key);
                  }
                  break;
                case CredentialType.REFRESH_TOKEN:
                  if (RefreshTokenEntity.isRefreshTokenEntity(credObj)) {
                    _this.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map");
                    _this.logger.tracePii("BrowserCacheManager:createKeyMaps - refreshToken with key: " + key + " found, saving key to token key map");
                    var refreshTokenEntity = CacheManager.toObject(new RefreshTokenEntity(), credObj);
                    var newKey = _this.updateCredentialCacheKey(key, refreshTokenEntity);
                    _this.addTokenKey(newKey, CredentialType.REFRESH_TOKEN);
                    return;
                  } else {
                    _this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching refreshToken schema with value containing refreshToken credentialType field but value failed RefreshTokenEntity validation, skipping.");
                    _this.logger.tracePii("BrowserCacheManager:createKeyMaps - failed refreshToken validation on key: " + key);
                  }
                  break;
              }
            }
          }
        }
        if (_this.isAccountKey(key)) {
          var value = _this.getItem(key);
          if (value) {
            var accountObj = _this.validateAndParseJson(value);
            if (accountObj && AccountEntity.isAccountEntity(accountObj)) {
              _this.logger.trace("BrowserCacheManager:createKeyMaps - account found, saving key to account key map");
              _this.logger.tracePii("BrowserCacheManager:createKeyMaps - account with key: " + key + " found, saving key to account key map");
              _this.addAccountKeyToMap(key);
            }
          }
        }
      });
    };
    BrowserCacheManager2.prototype.validateAndParseJson = function(jsonValue) {
      try {
        var parsedJson = JSON.parse(jsonValue);
        return parsedJson && typeof parsedJson === "object" ? parsedJson : null;
      } catch (error) {
        return null;
      }
    };
    BrowserCacheManager2.prototype.getItem = function(key) {
      return this.browserStorage.getItem(key);
    };
    BrowserCacheManager2.prototype.setItem = function(key, value) {
      this.browserStorage.setItem(key, value);
    };
    BrowserCacheManager2.prototype.getAccount = function(accountKey) {
      this.logger.trace("BrowserCacheManager.getAccount called");
      var account = this.getItem(accountKey);
      if (!account) {
        this.removeAccountKeyFromMap(accountKey);
        return null;
      }
      var parsedAccount = this.validateAndParseJson(account);
      if (!parsedAccount || !AccountEntity.isAccountEntity(parsedAccount)) {
        this.removeAccountKeyFromMap(accountKey);
        return null;
      }
      return CacheManager.toObject(new AccountEntity(), parsedAccount);
    };
    BrowserCacheManager2.prototype.setAccount = function(account) {
      this.logger.trace("BrowserCacheManager.setAccount called");
      var key = account.generateAccountKey();
      this.setItem(key, JSON.stringify(account));
      this.addAccountKeyToMap(key);
    };
    BrowserCacheManager2.prototype.getAccountKeys = function() {
      this.logger.trace("BrowserCacheManager.getAccountKeys called");
      var accountKeys = this.getItem(StaticCacheKeys.ACCOUNT_KEYS);
      if (accountKeys) {
        return JSON.parse(accountKeys);
      }
      this.logger.verbose("BrowserCacheManager.getAccountKeys - No account keys found");
      return [];
    };
    BrowserCacheManager2.prototype.addAccountKeyToMap = function(key) {
      this.logger.trace("BrowserCacheManager.addAccountKeyToMap called");
      this.logger.tracePii("BrowserCacheManager.addAccountKeyToMap called with key: " + key);
      var accountKeys = this.getAccountKeys();
      if (accountKeys.indexOf(key) === -1) {
        accountKeys.push(key);
        this.setItem(StaticCacheKeys.ACCOUNT_KEYS, JSON.stringify(accountKeys));
        this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added");
      } else {
        this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map");
      }
    };
    BrowserCacheManager2.prototype.removeAccountKeyFromMap = function(key) {
      this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called");
      this.logger.tracePii("BrowserCacheManager.removeAccountKeyFromMap called with key: " + key);
      var accountKeys = this.getAccountKeys();
      var removalIndex = accountKeys.indexOf(key);
      if (removalIndex > -1) {
        accountKeys.splice(removalIndex, 1);
        this.setItem(StaticCacheKeys.ACCOUNT_KEYS, JSON.stringify(accountKeys));
        this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed");
      } else {
        this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map");
      }
    };
    BrowserCacheManager2.prototype.removeAccount = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          _super.prototype.removeAccount.call(this, key);
          this.removeAccountKeyFromMap(key);
          return [
            2
            /*return*/
          ];
        });
      });
    };
    BrowserCacheManager2.prototype.removeIdToken = function(key) {
      _super.prototype.removeIdToken.call(this, key);
      this.removeTokenKey(key, CredentialType.ID_TOKEN);
    };
    BrowserCacheManager2.prototype.removeAccessToken = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          _super.prototype.removeAccessToken.call(this, key);
          this.removeTokenKey(key, CredentialType.ACCESS_TOKEN);
          return [
            2
            /*return*/
          ];
        });
      });
    };
    BrowserCacheManager2.prototype.removeRefreshToken = function(key) {
      _super.prototype.removeRefreshToken.call(this, key);
      this.removeTokenKey(key, CredentialType.REFRESH_TOKEN);
    };
    BrowserCacheManager2.prototype.getTokenKeys = function() {
      this.logger.trace("BrowserCacheManager.getTokenKeys called");
      var item = this.getItem(StaticCacheKeys.TOKEN_KEYS + "." + this.clientId);
      if (item) {
        var tokenKeys = this.validateAndParseJson(item);
        if (tokenKeys && tokenKeys.hasOwnProperty("idToken") && tokenKeys.hasOwnProperty("accessToken") && tokenKeys.hasOwnProperty("refreshToken")) {
          return tokenKeys;
        } else {
          this.logger.error("BrowserCacheManager.getTokenKeys - Token keys found but in an unknown format. Returning empty key map.");
        }
      } else {
        this.logger.verbose("BrowserCacheManager.getTokenKeys - No token keys found");
      }
      return {
        idToken: [],
        accessToken: [],
        refreshToken: []
      };
    };
    BrowserCacheManager2.prototype.addTokenKey = function(key, type) {
      this.logger.trace("BrowserCacheManager addTokenKey called");
      var tokenKeys = this.getTokenKeys();
      switch (type) {
        case CredentialType.ID_TOKEN:
          if (tokenKeys.idToken.indexOf(key) === -1) {
            this.logger.info("BrowserCacheManager: addTokenKey - idToken added to map");
            tokenKeys.idToken.push(key);
          }
          break;
        case CredentialType.ACCESS_TOKEN:
          if (tokenKeys.accessToken.indexOf(key) === -1) {
            this.logger.info("BrowserCacheManager: addTokenKey - accessToken added to map");
            tokenKeys.accessToken.push(key);
          }
          break;
        case CredentialType.REFRESH_TOKEN:
          if (tokenKeys.refreshToken.indexOf(key) === -1) {
            this.logger.info("BrowserCacheManager: addTokenKey - refreshToken added to map");
            tokenKeys.refreshToken.push(key);
          }
          break;
        default:
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + type);
          ClientAuthError.createUnexpectedCredentialTypeError();
      }
      this.setItem(StaticCacheKeys.TOKEN_KEYS + "." + this.clientId, JSON.stringify(tokenKeys));
    };
    BrowserCacheManager2.prototype.removeTokenKey = function(key, type) {
      this.logger.trace("BrowserCacheManager removeTokenKey called");
      var tokenKeys = this.getTokenKeys();
      switch (type) {
        case CredentialType.ID_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: " + key + " from map");
          var idRemoval = tokenKeys.idToken.indexOf(key);
          if (idRemoval > -1) {
            this.logger.info("BrowserCacheManager: removeTokenKey - idToken removed from map");
            tokenKeys.idToken.splice(idRemoval, 1);
          } else {
            this.logger.info("BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added.");
          }
          break;
        case CredentialType.ACCESS_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: " + key + " from map");
          var accessRemoval = tokenKeys.accessToken.indexOf(key);
          if (accessRemoval > -1) {
            this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map");
            tokenKeys.accessToken.splice(accessRemoval, 1);
          } else {
            this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
          }
          break;
        case CredentialType.REFRESH_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: " + key + " from map");
          var refreshRemoval = tokenKeys.refreshToken.indexOf(key);
          if (refreshRemoval > -1) {
            this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken removed from map");
            tokenKeys.refreshToken.splice(refreshRemoval, 1);
          } else {
            this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added.");
          }
          break;
        default:
          this.logger.error("BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: " + type);
          ClientAuthError.createUnexpectedCredentialTypeError();
      }
      this.setItem(StaticCacheKeys.TOKEN_KEYS + "." + this.clientId, JSON.stringify(tokenKeys));
    };
    BrowserCacheManager2.prototype.getIdTokenCredential = function(idTokenKey) {
      var value = this.getItem(idTokenKey);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit");
        this.removeTokenKey(idTokenKey, CredentialType.ID_TOKEN);
        return null;
      }
      var parsedIdToken = this.validateAndParseJson(value);
      if (!parsedIdToken || !IdTokenEntity.isIdTokenEntity(parsedIdToken)) {
        this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit");
        this.removeTokenKey(idTokenKey, CredentialType.ID_TOKEN);
        return null;
      }
      this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit");
      return CacheManager.toObject(new IdTokenEntity(), parsedIdToken);
    };
    BrowserCacheManager2.prototype.setIdTokenCredential = function(idToken) {
      this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
      var idTokenKey = idToken.generateCredentialKey();
      this.setItem(idTokenKey, JSON.stringify(idToken));
      this.addTokenKey(idTokenKey, CredentialType.ID_TOKEN);
    };
    BrowserCacheManager2.prototype.getAccessTokenCredential = function(accessTokenKey) {
      var value = this.getItem(accessTokenKey);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit");
        this.removeTokenKey(accessTokenKey, CredentialType.ACCESS_TOKEN);
        return null;
      }
      var parsedAccessToken = this.validateAndParseJson(value);
      if (!parsedAccessToken || !AccessTokenEntity.isAccessTokenEntity(parsedAccessToken)) {
        this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit");
        this.removeTokenKey(accessTokenKey, CredentialType.ACCESS_TOKEN);
        return null;
      }
      this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit");
      return CacheManager.toObject(new AccessTokenEntity(), parsedAccessToken);
    };
    BrowserCacheManager2.prototype.setAccessTokenCredential = function(accessToken) {
      this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
      var accessTokenKey = accessToken.generateCredentialKey();
      this.setItem(accessTokenKey, JSON.stringify(accessToken));
      this.addTokenKey(accessTokenKey, CredentialType.ACCESS_TOKEN);
    };
    BrowserCacheManager2.prototype.getRefreshTokenCredential = function(refreshTokenKey) {
      var value = this.getItem(refreshTokenKey);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit");
        this.removeTokenKey(refreshTokenKey, CredentialType.REFRESH_TOKEN);
        return null;
      }
      var parsedRefreshToken = this.validateAndParseJson(value);
      if (!parsedRefreshToken || !RefreshTokenEntity.isRefreshTokenEntity(parsedRefreshToken)) {
        this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit");
        this.removeTokenKey(refreshTokenKey, CredentialType.REFRESH_TOKEN);
        return null;
      }
      this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit");
      return CacheManager.toObject(new RefreshTokenEntity(), parsedRefreshToken);
    };
    BrowserCacheManager2.prototype.setRefreshTokenCredential = function(refreshToken) {
      this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
      var refreshTokenKey = refreshToken.generateCredentialKey();
      this.setItem(refreshTokenKey, JSON.stringify(refreshToken));
      this.addTokenKey(refreshTokenKey, CredentialType.REFRESH_TOKEN);
    };
    BrowserCacheManager2.prototype.getAppMetadata = function(appMetadataKey) {
      var value = this.getItem(appMetadataKey);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit");
        return null;
      }
      var parsedMetadata = this.validateAndParseJson(value);
      if (!parsedMetadata || !AppMetadataEntity.isAppMetadataEntity(appMetadataKey, parsedMetadata)) {
        this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit");
        return null;
      }
      this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit");
      return CacheManager.toObject(new AppMetadataEntity(), parsedMetadata);
    };
    BrowserCacheManager2.prototype.setAppMetadata = function(appMetadata) {
      this.logger.trace("BrowserCacheManager.setAppMetadata called");
      var appMetadataKey = appMetadata.generateAppMetadataKey();
      this.setItem(appMetadataKey, JSON.stringify(appMetadata));
    };
    BrowserCacheManager2.prototype.getServerTelemetry = function(serverTelemetryKey) {
      var value = this.getItem(serverTelemetryKey);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit");
        return null;
      }
      var parsedMetadata = this.validateAndParseJson(value);
      if (!parsedMetadata || !ServerTelemetryEntity.isServerTelemetryEntity(serverTelemetryKey, parsedMetadata)) {
        this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit");
        return null;
      }
      this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit");
      return CacheManager.toObject(new ServerTelemetryEntity(), parsedMetadata);
    };
    BrowserCacheManager2.prototype.setServerTelemetry = function(serverTelemetryKey, serverTelemetry) {
      this.logger.trace("BrowserCacheManager.setServerTelemetry called");
      this.setItem(serverTelemetryKey, JSON.stringify(serverTelemetry));
    };
    BrowserCacheManager2.prototype.getAuthorityMetadata = function(key) {
      var value = this.internalStorage.getItem(key);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit");
        return null;
      }
      var parsedMetadata = this.validateAndParseJson(value);
      if (parsedMetadata && AuthorityMetadataEntity.isAuthorityMetadataEntity(key, parsedMetadata)) {
        this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit");
        return CacheManager.toObject(new AuthorityMetadataEntity(), parsedMetadata);
      }
      return null;
    };
    BrowserCacheManager2.prototype.getAuthorityMetadataKeys = function() {
      var _this = this;
      var allKeys = this.internalStorage.getKeys();
      return allKeys.filter(function(key) {
        return _this.isAuthorityMetadata(key);
      });
    };
    BrowserCacheManager2.prototype.setWrapperMetadata = function(wrapperSKU, wrapperVersion) {
      this.internalStorage.setItem(InMemoryCacheKeys.WRAPPER_SKU, wrapperSKU);
      this.internalStorage.setItem(InMemoryCacheKeys.WRAPPER_VER, wrapperVersion);
    };
    BrowserCacheManager2.prototype.getWrapperMetadata = function() {
      var sku = this.internalStorage.getItem(InMemoryCacheKeys.WRAPPER_SKU) || Constants.EMPTY_STRING;
      var version3 = this.internalStorage.getItem(InMemoryCacheKeys.WRAPPER_VER) || Constants.EMPTY_STRING;
      return [sku, version3];
    };
    BrowserCacheManager2.prototype.setAuthorityMetadata = function(key, entity) {
      this.logger.trace("BrowserCacheManager.setAuthorityMetadata called");
      this.internalStorage.setItem(key, JSON.stringify(entity));
    };
    BrowserCacheManager2.prototype.getActiveAccount = function() {
      var activeAccountKeyFilters = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT_FILTERS);
      var activeAccountValueFilters = this.getItem(activeAccountKeyFilters);
      if (!activeAccountValueFilters) {
        this.logger.trace("BrowserCacheManager.getActiveAccount: No active account filters cache schema found, looking for legacy schema");
        var activeAccountKeyLocal = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT);
        var activeAccountValueLocal = this.getItem(activeAccountKeyLocal);
        if (!activeAccountValueLocal) {
          this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found");
          return null;
        }
        var activeAccount = this.getAccountInfoByFilter({ localAccountId: activeAccountValueLocal })[0] || null;
        if (activeAccount) {
          this.logger.trace("BrowserCacheManager.getActiveAccount: Legacy active account cache schema found");
          this.logger.trace("BrowserCacheManager.getActiveAccount: Adding active account filters cache schema");
          this.setActiveAccount(activeAccount);
          return activeAccount;
        }
        return null;
      }
      var activeAccountValueObj = this.validateAndParseJson(activeAccountValueFilters);
      if (activeAccountValueObj) {
        this.logger.trace("BrowserCacheManager.getActiveAccount: Active account filters schema found");
        return this.getAccountInfoByFilter({
          homeAccountId: activeAccountValueObj.homeAccountId,
          localAccountId: activeAccountValueObj.localAccountId
        })[0] || null;
      }
      this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found");
      return null;
    };
    BrowserCacheManager2.prototype.setActiveAccount = function(account) {
      var activeAccountKey = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT_FILTERS);
      var activeAccountKeyLocal = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT);
      if (account) {
        this.logger.verbose("setActiveAccount: Active account set");
        var activeAccountValue = {
          homeAccountId: account.homeAccountId,
          localAccountId: account.localAccountId
        };
        this.browserStorage.setItem(activeAccountKey, JSON.stringify(activeAccountValue));
        this.browserStorage.setItem(activeAccountKeyLocal, account.localAccountId);
      } else {
        this.logger.verbose("setActiveAccount: No account passed, active account not set");
        this.browserStorage.removeItem(activeAccountKey);
        this.browserStorage.removeItem(activeAccountKeyLocal);
      }
    };
    BrowserCacheManager2.prototype.getAccountInfoByFilter = function(accountFilter) {
      var allAccounts = this.getAllAccounts();
      this.logger.trace("BrowserCacheManager.getAccountInfoByFilter: total " + allAccounts.length + " accounts found");
      return allAccounts.filter(function(accountObj) {
        if (accountFilter.username && accountFilter.username.toLowerCase() !== accountObj.username.toLowerCase()) {
          return false;
        }
        if (accountFilter.homeAccountId && accountFilter.homeAccountId !== accountObj.homeAccountId) {
          return false;
        }
        if (accountFilter.localAccountId && accountFilter.localAccountId !== accountObj.localAccountId) {
          return false;
        }
        if (accountFilter.tenantId && accountFilter.tenantId !== accountObj.tenantId) {
          return false;
        }
        if (accountFilter.environment && accountFilter.environment !== accountObj.environment) {
          return false;
        }
        return true;
      });
    };
    BrowserCacheManager2.prototype.getAccountInfoByHints = function(loginHint, sid) {
      var matchingAccounts = this.getAllAccounts().filter(function(accountInfo) {
        if (sid) {
          var accountSid = accountInfo.idTokenClaims && accountInfo.idTokenClaims["sid"];
          return sid === accountSid;
        }
        if (loginHint) {
          return loginHint === accountInfo.username;
        }
        return false;
      });
      if (matchingAccounts.length === 1) {
        return matchingAccounts[0];
      } else if (matchingAccounts.length > 1) {
        throw ClientAuthError.createMultipleMatchingAccountsInCacheError();
      }
      return null;
    };
    BrowserCacheManager2.prototype.getThrottlingCache = function(throttlingCacheKey) {
      var value = this.getItem(throttlingCacheKey);
      if (!value) {
        this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit");
        return null;
      }
      var parsedThrottlingCache = this.validateAndParseJson(value);
      if (!parsedThrottlingCache || !ThrottlingEntity.isThrottlingEntity(throttlingCacheKey, parsedThrottlingCache)) {
        this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit");
        return null;
      }
      this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit");
      return CacheManager.toObject(new ThrottlingEntity(), parsedThrottlingCache);
    };
    BrowserCacheManager2.prototype.setThrottlingCache = function(throttlingCacheKey, throttlingCache) {
      this.logger.trace("BrowserCacheManager.setThrottlingCache called");
      this.setItem(throttlingCacheKey, JSON.stringify(throttlingCache));
    };
    BrowserCacheManager2.prototype.getTemporaryCache = function(cacheKey, generateKey) {
      var key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
      if (this.cacheConfig.storeAuthStateInCookie) {
        var itemCookie = this.getItemCookie(key);
        if (itemCookie) {
          this.logger.trace("BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies");
          return itemCookie;
        }
      }
      var value = this.temporaryCacheStorage.getItem(key);
      if (!value) {
        if (this.cacheConfig.cacheLocation === BrowserCacheLocation.LocalStorage) {
          var item = this.browserStorage.getItem(key);
          if (item) {
            this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage");
            return item;
          }
        }
        this.logger.trace("BrowserCacheManager.getTemporaryCache: No cache item found in local storage");
        return null;
      }
      this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item returned");
      return value;
    };
    BrowserCacheManager2.prototype.setTemporaryCache = function(cacheKey, value, generateKey) {
      var key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
      this.temporaryCacheStorage.setItem(key, value);
      if (this.cacheConfig.storeAuthStateInCookie) {
        this.logger.trace("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie");
        this.setItemCookie(key, value);
      }
    };
    BrowserCacheManager2.prototype.removeItem = function(key) {
      this.browserStorage.removeItem(key);
      this.temporaryCacheStorage.removeItem(key);
      if (this.cacheConfig.storeAuthStateInCookie) {
        this.logger.trace("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie");
        this.clearItemCookie(key);
      }
    };
    BrowserCacheManager2.prototype.containsKey = function(key) {
      return this.browserStorage.containsKey(key) || this.temporaryCacheStorage.containsKey(key);
    };
    BrowserCacheManager2.prototype.getKeys = function() {
      return __spread(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
    };
    BrowserCacheManager2.prototype.clear = function() {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.removeAllAccounts()];
            case 1:
              _a.sent();
              this.removeAppMetadata();
              this.getKeys().forEach(function(cacheKey) {
                if ((_this.browserStorage.containsKey(cacheKey) || _this.temporaryCacheStorage.containsKey(cacheKey)) && (cacheKey.indexOf(Constants.CACHE_PREFIX) !== -1 || cacheKey.indexOf(_this.clientId) !== -1)) {
                  _this.removeItem(cacheKey);
                }
              });
              this.internalStorage.clear();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    BrowserCacheManager2.prototype.setItemCookie = function(cookieName, cookieValue, expires) {
      var cookieStr = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue) + ";path=/;SameSite=Lax;";
      if (expires) {
        var expireTime = this.getCookieExpirationTime(expires);
        cookieStr += "expires=" + expireTime + ";";
      }
      if (this.cacheConfig.secureCookies) {
        cookieStr += "Secure;";
      }
      document.cookie = cookieStr;
    };
    BrowserCacheManager2.prototype.getItemCookie = function(cookieName) {
      var name3 = encodeURIComponent(cookieName) + "=";
      var cookieList = document.cookie.split(";");
      for (var i2 = 0; i2 < cookieList.length; i2++) {
        var cookie = cookieList[i2];
        while (cookie.charAt(0) === " ") {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name3) === 0) {
          return decodeURIComponent(cookie.substring(name3.length, cookie.length));
        }
      }
      return Constants.EMPTY_STRING;
    };
    BrowserCacheManager2.prototype.clearMsalCookies = function() {
      var _this = this;
      var cookiePrefix = Constants.CACHE_PREFIX + "." + this.clientId;
      var cookieList = document.cookie.split(";");
      cookieList.forEach(function(cookie) {
        while (cookie.charAt(0) === " ") {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookiePrefix) === 0) {
          var cookieKey = cookie.split("=")[0];
          _this.clearItemCookie(cookieKey);
        }
      });
    };
    BrowserCacheManager2.prototype.clearItemCookie = function(cookieName) {
      this.setItemCookie(cookieName, Constants.EMPTY_STRING, -1);
    };
    BrowserCacheManager2.prototype.getCookieExpirationTime = function(cookieLifeDays) {
      var today = /* @__PURE__ */ new Date();
      var expr = new Date(today.getTime() + cookieLifeDays * this.COOKIE_LIFE_MULTIPLIER);
      return expr.toUTCString();
    };
    BrowserCacheManager2.prototype.getCache = function() {
      return this.browserStorage;
    };
    BrowserCacheManager2.prototype.setCache = function() {
    };
    BrowserCacheManager2.prototype.generateCacheKey = function(key) {
      var generatedKey = this.validateAndParseJson(key);
      if (!generatedKey) {
        if (StringUtils.startsWith(key, Constants.CACHE_PREFIX) || StringUtils.startsWith(key, PersistentCacheKeys.ADAL_ID_TOKEN)) {
          return key;
        }
        return Constants.CACHE_PREFIX + "." + this.clientId + "." + key;
      }
      return JSON.stringify(key);
    };
    BrowserCacheManager2.prototype.generateAuthorityKey = function(stateString) {
      var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
      return this.generateCacheKey(TemporaryCacheKeys.AUTHORITY + "." + stateId);
    };
    BrowserCacheManager2.prototype.generateNonceKey = function(stateString) {
      var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
      return this.generateCacheKey(TemporaryCacheKeys.NONCE_IDTOKEN + "." + stateId);
    };
    BrowserCacheManager2.prototype.generateStateKey = function(stateString) {
      var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
      return this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE + "." + stateId);
    };
    BrowserCacheManager2.prototype.getCachedAuthority = function(cachedState) {
      var stateCacheKey = this.generateStateKey(cachedState);
      var state2 = this.getTemporaryCache(stateCacheKey);
      if (!state2) {
        return null;
      }
      var authorityCacheKey = this.generateAuthorityKey(state2);
      return this.getTemporaryCache(authorityCacheKey);
    };
    BrowserCacheManager2.prototype.updateCacheEntries = function(state2, nonce, authorityInstance, loginHint, account) {
      this.logger.trace("BrowserCacheManager.updateCacheEntries called");
      var stateCacheKey = this.generateStateKey(state2);
      this.setTemporaryCache(stateCacheKey, state2, false);
      var nonceCacheKey = this.generateNonceKey(state2);
      this.setTemporaryCache(nonceCacheKey, nonce, false);
      var authorityCacheKey = this.generateAuthorityKey(state2);
      this.setTemporaryCache(authorityCacheKey, authorityInstance, false);
      if (account) {
        var ccsCredential = {
          credential: account.homeAccountId,
          type: CcsCredentialType.HOME_ACCOUNT_ID
        };
        this.setTemporaryCache(TemporaryCacheKeys.CCS_CREDENTIAL, JSON.stringify(ccsCredential), true);
      } else if (!StringUtils.isEmpty(loginHint)) {
        var ccsCredential = {
          credential: loginHint,
          type: CcsCredentialType.UPN
        };
        this.setTemporaryCache(TemporaryCacheKeys.CCS_CREDENTIAL, JSON.stringify(ccsCredential), true);
      }
    };
    BrowserCacheManager2.prototype.resetRequestCache = function(state2) {
      var _this = this;
      this.logger.trace("BrowserCacheManager.resetRequestCache called");
      if (!StringUtils.isEmpty(state2)) {
        this.getKeys().forEach(function(key) {
          if (key.indexOf(state2) !== -1) {
            _this.removeItem(key);
          }
        });
      }
      if (state2) {
        this.removeItem(this.generateStateKey(state2));
        this.removeItem(this.generateNonceKey(state2));
        this.removeItem(this.generateAuthorityKey(state2));
      }
      this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
      this.removeItem(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
      this.removeItem(this.generateCacheKey(TemporaryCacheKeys.URL_HASH));
      this.removeItem(this.generateCacheKey(TemporaryCacheKeys.CORRELATION_ID));
      this.removeItem(this.generateCacheKey(TemporaryCacheKeys.CCS_CREDENTIAL));
      this.removeItem(this.generateCacheKey(TemporaryCacheKeys.NATIVE_REQUEST));
      this.setInteractionInProgress(false);
    };
    BrowserCacheManager2.prototype.cleanRequestByState = function(stateString) {
      this.logger.trace("BrowserCacheManager.cleanRequestByState called");
      if (stateString) {
        var stateKey = this.generateStateKey(stateString);
        var cachedState = this.temporaryCacheStorage.getItem(stateKey);
        this.logger.infoPii("BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: " + cachedState);
        this.resetRequestCache(cachedState || Constants.EMPTY_STRING);
      }
      this.clearMsalCookies();
    };
    BrowserCacheManager2.prototype.cleanRequestByInteractionType = function(interactionType) {
      var _this = this;
      this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called");
      this.getKeys().forEach(function(key) {
        if (key.indexOf(TemporaryCacheKeys.REQUEST_STATE) === -1) {
          return;
        }
        var stateValue = _this.temporaryCacheStorage.getItem(key);
        if (!stateValue) {
          return;
        }
        var parsedState = BrowserProtocolUtils.extractBrowserRequestState(_this.cryptoImpl, stateValue);
        if (parsedState && parsedState.interactionType === interactionType) {
          _this.logger.infoPii("BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: " + stateValue);
          _this.resetRequestCache(stateValue);
        }
      });
      this.clearMsalCookies();
      this.setInteractionInProgress(false);
    };
    BrowserCacheManager2.prototype.cacheCodeRequest = function(authCodeRequest, browserCrypto) {
      this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
      var encodedValue = browserCrypto.base64Encode(JSON.stringify(authCodeRequest));
      this.setTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, encodedValue, true);
    };
    BrowserCacheManager2.prototype.getCachedRequest = function(state2, browserCrypto) {
      this.logger.trace("BrowserCacheManager.getCachedRequest called");
      var encodedTokenRequest = this.getTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, true);
      if (!encodedTokenRequest) {
        throw BrowserAuthError.createNoTokenRequestCacheError();
      }
      var parsedRequest = this.validateAndParseJson(browserCrypto.base64Decode(encodedTokenRequest));
      if (!parsedRequest) {
        throw BrowserAuthError.createUnableToParseTokenRequestCacheError();
      }
      this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
      if (StringUtils.isEmpty(parsedRequest.authority)) {
        var authorityCacheKey = this.generateAuthorityKey(state2);
        var cachedAuthority = this.getTemporaryCache(authorityCacheKey);
        if (!cachedAuthority) {
          throw BrowserAuthError.createNoCachedAuthorityError();
        }
        parsedRequest.authority = cachedAuthority;
      }
      return parsedRequest;
    };
    BrowserCacheManager2.prototype.getCachedNativeRequest = function() {
      this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
      var cachedRequest = this.getTemporaryCache(TemporaryCacheKeys.NATIVE_REQUEST, true);
      if (!cachedRequest) {
        this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found");
        return null;
      }
      var parsedRequest = this.validateAndParseJson(cachedRequest);
      if (!parsedRequest) {
        this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request");
        return null;
      }
      return parsedRequest;
    };
    BrowserCacheManager2.prototype.isInteractionInProgress = function(matchClientId) {
      var clientId = this.getInteractionInProgress();
      if (matchClientId) {
        return clientId === this.clientId;
      } else {
        return !!clientId;
      }
    };
    BrowserCacheManager2.prototype.getInteractionInProgress = function() {
      var key = Constants.CACHE_PREFIX + "." + TemporaryCacheKeys.INTERACTION_STATUS_KEY;
      return this.getTemporaryCache(key, false);
    };
    BrowserCacheManager2.prototype.setInteractionInProgress = function(inProgress) {
      var key = Constants.CACHE_PREFIX + "." + TemporaryCacheKeys.INTERACTION_STATUS_KEY;
      if (inProgress) {
        if (this.getInteractionInProgress()) {
          throw BrowserAuthError.createInteractionInProgressError();
        } else {
          this.setTemporaryCache(key, this.clientId, false);
        }
      } else if (!inProgress && this.getInteractionInProgress() === this.clientId) {
        this.removeItem(key);
      }
    };
    BrowserCacheManager2.prototype.getLegacyLoginHint = function() {
      var adalIdTokenString = this.getTemporaryCache(PersistentCacheKeys.ADAL_ID_TOKEN);
      if (adalIdTokenString) {
        this.browserStorage.removeItem(PersistentCacheKeys.ADAL_ID_TOKEN);
        this.logger.verbose("Cached ADAL id token retrieved.");
      }
      var msalIdTokenString = this.getTemporaryCache(PersistentCacheKeys.ID_TOKEN, true);
      if (msalIdTokenString) {
        this.removeItem(this.generateCacheKey(PersistentCacheKeys.ID_TOKEN));
        this.logger.verbose("Cached MSAL.js v1 id token retrieved");
      }
      var cachedIdTokenString = msalIdTokenString || adalIdTokenString;
      if (cachedIdTokenString) {
        var cachedIdToken = new AuthToken(cachedIdTokenString, this.cryptoImpl);
        if (cachedIdToken.claims && cachedIdToken.claims.preferred_username) {
          this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint");
          return cachedIdToken.claims.preferred_username;
        } else if (cachedIdToken.claims && cachedIdToken.claims.upn) {
          this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint");
          return cachedIdToken.claims.upn;
        } else {
          this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO.");
        }
      }
      return null;
    };
    BrowserCacheManager2.prototype.updateCredentialCacheKey = function(currentCacheKey, credential) {
      var updatedCacheKey = credential.generateCredentialKey();
      if (currentCacheKey !== updatedCacheKey) {
        var cacheItem = this.getItem(currentCacheKey);
        if (cacheItem) {
          this.removeItem(currentCacheKey);
          this.setItem(updatedCacheKey, cacheItem);
          this.logger.verbose("Updated an outdated " + credential.credentialType + " cache key");
          return updatedCacheKey;
        } else {
          this.logger.error("Attempted to update an outdated " + credential.credentialType + " cache key but no item matching the outdated key was found in storage");
        }
      }
      return currentCacheKey;
    };
    BrowserCacheManager2.prototype.getRedirectRequestContext = function() {
      return this.getTemporaryCache(TemporaryCacheKeys.REDIRECT_CONTEXT, true);
    };
    BrowserCacheManager2.prototype.setRedirectRequestContext = function(value) {
      this.setTemporaryCache(TemporaryCacheKeys.REDIRECT_CONTEXT, value, true);
    };
    return BrowserCacheManager2;
  }(CacheManager)
);
var DEFAULT_BROWSER_CACHE_MANAGER = function(clientId, logger) {
  var cacheOptions = {
    cacheLocation: BrowserCacheLocation.MemoryStorage,
    temporaryCacheLocation: BrowserCacheLocation.MemoryStorage,
    storeAuthStateInCookie: false,
    secureCookies: false,
    cacheMigrationEnabled: false
  };
  return new BrowserCacheManager(clientId, cacheOptions, DEFAULT_CRYPTO_IMPLEMENTATION, logger);
};

// node_modules/@azure/msal-browser/dist/packageMetadata.js
var name2 = "@azure/msal-browser";
var version2 = "2.37.1";

// node_modules/@azure/msal-browser/dist/network/FetchClient.js
var FetchClient = (
  /** @class */
  function() {
    function FetchClient2() {
    }
    FetchClient2.prototype.sendGetRequestAsync = function(url, options) {
      return __awaiter(this, void 0, void 0, function() {
        var response, e_1, _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _b.trys.push([0, 2, , 3]);
              return [4, fetch(url, {
                method: HTTP_REQUEST_TYPE.GET,
                headers: this.getFetchHeaders(options)
              })];
            case 1:
              response = _b.sent();
              return [3, 3];
            case 2:
              e_1 = _b.sent();
              if (window.navigator.onLine) {
                throw BrowserAuthError.createGetRequestFailedError(e_1, url);
              } else {
                throw BrowserAuthError.createNoNetworkConnectivityError();
              }
            case 3:
              _b.trys.push([3, 5, , 6]);
              _a = {
                headers: this.getHeaderDict(response.headers)
              };
              return [4, response.json()];
            case 4:
              return [2, (_a.body = _b.sent(), _a.status = response.status, _a)];
            case 5:
              _b.sent();
              throw BrowserAuthError.createFailedToParseNetworkResponseError(url);
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    FetchClient2.prototype.sendPostRequestAsync = function(url, options) {
      return __awaiter(this, void 0, void 0, function() {
        var reqBody, response, e_3, _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              reqBody = options && options.body || Constants.EMPTY_STRING;
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, fetch(url, {
                method: HTTP_REQUEST_TYPE.POST,
                headers: this.getFetchHeaders(options),
                body: reqBody
              })];
            case 2:
              response = _b.sent();
              return [3, 4];
            case 3:
              e_3 = _b.sent();
              if (window.navigator.onLine) {
                throw BrowserAuthError.createPostRequestFailedError(e_3, url);
              } else {
                throw BrowserAuthError.createNoNetworkConnectivityError();
              }
            case 4:
              _b.trys.push([4, 6, , 7]);
              _a = {
                headers: this.getHeaderDict(response.headers)
              };
              return [4, response.json()];
            case 5:
              return [2, (_a.body = _b.sent(), _a.status = response.status, _a)];
            case 6:
              _b.sent();
              throw BrowserAuthError.createFailedToParseNetworkResponseError(url);
            case 7:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    FetchClient2.prototype.getFetchHeaders = function(options) {
      var headers = new Headers();
      if (!(options && options.headers)) {
        return headers;
      }
      var optionsHeaders = options.headers;
      Object.keys(optionsHeaders).forEach(function(key) {
        headers.append(key, optionsHeaders[key]);
      });
      return headers;
    };
    FetchClient2.prototype.getHeaderDict = function(headers) {
      var headerDict = {};
      headers.forEach(function(value, key) {
        headerDict[key] = value;
      });
      return headerDict;
    };
    return FetchClient2;
  }()
);

// node_modules/@azure/msal-browser/dist/network/XhrClient.js
var XhrClient = (
  /** @class */
  function() {
    function XhrClient2() {
    }
    XhrClient2.prototype.sendGetRequestAsync = function(url, options) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.GET, options)];
        });
      });
    };
    XhrClient2.prototype.sendPostRequestAsync = function(url, options) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.POST, options)];
        });
      });
    };
    XhrClient2.prototype.sendRequestAsync = function(url, method, options) {
      var _this = this;
      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(
          method,
          url,
          /* async: */
          true
        );
        _this.setXhrHeaders(xhr, options);
        xhr.onload = function() {
          if (xhr.status < 200 || xhr.status >= 300) {
            if (method === HTTP_REQUEST_TYPE.POST) {
              reject(BrowserAuthError.createPostRequestFailedError("Failed with status " + xhr.status, url));
            } else {
              reject(BrowserAuthError.createGetRequestFailedError("Failed with status " + xhr.status, url));
            }
          }
          try {
            var jsonResponse = JSON.parse(xhr.responseText);
            var networkResponse = {
              headers: _this.getHeaderDict(xhr),
              body: jsonResponse,
              status: xhr.status
            };
            resolve(networkResponse);
          } catch (e2) {
            reject(BrowserAuthError.createFailedToParseNetworkResponseError(url));
          }
        };
        xhr.onerror = function() {
          if (window.navigator.onLine) {
            if (method === HTTP_REQUEST_TYPE.POST) {
              reject(BrowserAuthError.createPostRequestFailedError("Failed with status " + xhr.status, url));
            } else {
              reject(BrowserAuthError.createGetRequestFailedError("Failed with status " + xhr.status, url));
            }
          } else {
            reject(BrowserAuthError.createNoNetworkConnectivityError());
          }
        };
        if (method === HTTP_REQUEST_TYPE.POST && options && options.body) {
          xhr.send(options.body);
        } else if (method === HTTP_REQUEST_TYPE.GET) {
          xhr.send();
        } else {
          throw BrowserAuthError.createHttpMethodNotImplementedError(method);
        }
      });
    };
    XhrClient2.prototype.setXhrHeaders = function(xhr, options) {
      if (options && options.headers) {
        var headers_1 = options.headers;
        Object.keys(headers_1).forEach(function(key) {
          xhr.setRequestHeader(key, headers_1[key]);
        });
      }
    };
    XhrClient2.prototype.getHeaderDict = function(xhr) {
      var headerString = xhr.getAllResponseHeaders();
      var headerArr = headerString.trim().split(/[\r\n]+/);
      var headerDict = {};
      headerArr.forEach(function(value) {
        var parts = value.split(": ");
        var headerName = parts.shift();
        var headerVal = parts.join(": ");
        if (headerName && headerVal) {
          headerDict[headerName] = headerVal;
        }
      });
      return headerDict;
    };
    return XhrClient2;
  }()
);

// node_modules/@azure/msal-browser/dist/utils/BrowserUtils.js
var BrowserUtils = (
  /** @class */
  function() {
    function BrowserUtils2() {
    }
    BrowserUtils2.clearHash = function(contentWindow) {
      contentWindow.location.hash = Constants.EMPTY_STRING;
      if (typeof contentWindow.history.replaceState === "function") {
        contentWindow.history.replaceState(null, Constants.EMPTY_STRING, "" + contentWindow.location.origin + contentWindow.location.pathname + contentWindow.location.search);
      }
    };
    BrowserUtils2.replaceHash = function(url) {
      var urlParts = url.split("#");
      urlParts.shift();
      window.location.hash = urlParts.length > 0 ? urlParts.join("#") : Constants.EMPTY_STRING;
    };
    BrowserUtils2.isInIframe = function() {
      return window.parent !== window;
    };
    BrowserUtils2.isInPopup = function() {
      return typeof window !== "undefined" && !!window.opener && window.opener !== window && typeof window.name === "string" && window.name.indexOf(BrowserConstants.POPUP_NAME_PREFIX + ".") === 0;
    };
    BrowserUtils2.getCurrentUri = function() {
      return window.location.href.split("?")[0].split("#")[0];
    };
    BrowserUtils2.getHomepage = function() {
      var currentUrl = new UrlString(window.location.href);
      var urlComponents = currentUrl.getUrlComponents();
      return urlComponents.Protocol + "//" + urlComponents.HostNameAndPort + "/";
    };
    BrowserUtils2.getBrowserNetworkClient = function() {
      if (window.fetch && window.Headers) {
        return new FetchClient();
      } else {
        return new XhrClient();
      }
    };
    BrowserUtils2.blockReloadInHiddenIframes = function() {
      var isResponseHash = UrlString.hashContainsKnownProperties(window.location.hash);
      if (isResponseHash && BrowserUtils2.isInIframe()) {
        throw BrowserAuthError.createBlockReloadInHiddenIframeError();
      }
    };
    BrowserUtils2.blockRedirectInIframe = function(interactionType, allowRedirectInIframe) {
      var isIframedApp = BrowserUtils2.isInIframe();
      if (interactionType === InteractionType.Redirect && isIframedApp && !allowRedirectInIframe) {
        throw BrowserAuthError.createRedirectInIframeError(isIframedApp);
      }
    };
    BrowserUtils2.blockAcquireTokenInPopups = function() {
      if (BrowserUtils2.isInPopup()) {
        throw BrowserAuthError.createBlockAcquireTokenInPopupsError();
      }
    };
    BrowserUtils2.blockNonBrowserEnvironment = function(isBrowserEnvironment) {
      if (!isBrowserEnvironment) {
        throw BrowserAuthError.createNonBrowserEnvironmentError();
      }
    };
    BrowserUtils2.blockNativeBrokerCalledBeforeInitialized = function(allowNativeBroker, initialized) {
      if (allowNativeBroker && !initialized) {
        throw BrowserAuthError.createNativeBrokerCalledBeforeInitialize();
      }
    };
    BrowserUtils2.detectIEOrEdge = function() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");
      var msie11 = ua.indexOf("Trident/");
      var msedge = ua.indexOf("Edge/");
      var isIE = msie > 0 || msie11 > 0;
      var isEdge = msedge > 0;
      return isIE || isEdge;
    };
    return BrowserUtils2;
  }()
);

// node_modules/@azure/msal-browser/dist/interaction_client/BaseInteractionClient.js
var BaseInteractionClient = (
  /** @class */
  function() {
    function BaseInteractionClient2(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) {
      this.config = config;
      this.browserStorage = storageImpl;
      this.browserCrypto = browserCrypto;
      this.networkClient = this.config.system.networkClient;
      this.eventHandler = eventHandler;
      this.navigationClient = navigationClient;
      this.nativeMessageHandler = nativeMessageHandler;
      this.correlationId = correlationId || this.browserCrypto.createNewGuid();
      this.logger = logger.clone(BrowserConstants.MSAL_SKU, version2, this.correlationId);
      this.performanceClient = performanceClient;
    }
    BaseInteractionClient2.prototype.clearCacheOnLogout = function(account) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!account)
                return [3, 5];
              if (AccountEntity.accountInfoIsEqual(account, this.browserStorage.getActiveAccount(), false)) {
                this.logger.verbose("Setting active account to null");
                this.browserStorage.setActiveAccount(null);
              }
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4, this.browserStorage.removeAccount(AccountEntity.generateAccountCacheKey(account))];
            case 2:
              _a.sent();
              this.logger.verbose("Cleared cache items belonging to the account provided in the logout request.");
              return [3, 4];
            case 3:
              _a.sent();
              this.logger.error("Account provided in logout request was not found. Local cache unchanged.");
              return [3, 4];
            case 4:
              return [3, 9];
            case 5:
              _a.trys.push([5, 8, , 9]);
              this.logger.verbose("No account provided in logout request, clearing all cache items.", this.correlationId);
              return [4, this.browserStorage.clear()];
            case 6:
              _a.sent();
              return [4, this.browserCrypto.clearKeystore()];
            case 7:
              _a.sent();
              return [3, 9];
            case 8:
              _a.sent();
              this.logger.error("Attempted to clear all MSAL cache items and failed. Local cache unchanged.");
              return [3, 9];
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    BaseInteractionClient2.prototype.initializeBaseRequest = function(request, account) {
      return __awaiter(this, void 0, void 0, function() {
        var authority, scopes, validatedRequest, _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.InitializeBaseRequest, request.correlationId);
              this.logger.verbose("Initializing BaseAuthRequest");
              authority = request.authority || this.config.auth.authority;
              if (!account)
                return [3, 2];
              return [4, this.validateRequestAuthority(authority, account)];
            case 1:
              _b.sent();
              _b.label = 2;
            case 2:
              scopes = __spread(request && request.scopes || []);
              validatedRequest = __assign(__assign({}, request), {
                correlationId: this.correlationId,
                authority,
                scopes
              });
              if (!validatedRequest.authenticationScheme) {
                validatedRequest.authenticationScheme = AuthenticationScheme.BEARER;
                this.logger.verbose(`Authentication Scheme wasn't explicitly set in request, defaulting to "Bearer" request`);
              } else {
                if (validatedRequest.authenticationScheme === AuthenticationScheme.SSH) {
                  if (!request.sshJwk) {
                    throw ClientConfigurationError.createMissingSshJwkError();
                  }
                  if (!request.sshKid) {
                    throw ClientConfigurationError.createMissingSshKidError();
                  }
                }
                this.logger.verbose('Authentication Scheme set to "' + validatedRequest.authenticationScheme + '" as configured in Auth request');
              }
              if (!(request.claims && !StringUtils.isEmpty(request.claims)))
                return [3, 4];
              _a = validatedRequest;
              return [4, this.browserCrypto.hashString(request.claims)];
            case 3:
              _a.requestedClaimsHash = _b.sent();
              _b.label = 4;
            case 4:
              return [2, validatedRequest];
          }
        });
      });
    };
    BaseInteractionClient2.prototype.getRedirectUri = function(requestRedirectUri) {
      this.logger.verbose("getRedirectUri called");
      var redirectUri = requestRedirectUri || this.config.auth.redirectUri || BrowserUtils.getCurrentUri();
      return UrlString.getAbsoluteUrl(redirectUri, BrowserUtils.getCurrentUri());
    };
    BaseInteractionClient2.prototype.validateRequestAuthority = function(authority, account) {
      return __awaiter(this, void 0, void 0, function() {
        var discoveredAuthority;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.getDiscoveredAuthority(authority)];
            case 1:
              discoveredAuthority = _a.sent();
              if (!discoveredAuthority.isAlias(account.environment)) {
                throw ClientConfigurationError.createAuthorityMismatchError();
              }
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    BaseInteractionClient2.prototype.initializeServerTelemetryManager = function(apiId, forceRefresh) {
      this.logger.verbose("initializeServerTelemetryManager called");
      var telemetryPayload = {
        clientId: this.config.auth.clientId,
        correlationId: this.correlationId,
        apiId,
        forceRefresh: forceRefresh || false,
        wrapperSKU: this.browserStorage.getWrapperMetadata()[0],
        wrapperVer: this.browserStorage.getWrapperMetadata()[1]
      };
      return new ServerTelemetryManager(telemetryPayload, this.browserStorage);
    };
    BaseInteractionClient2.prototype.getDiscoveredAuthority = function(requestAuthority) {
      return __awaiter(this, void 0, void 0, function() {
        var authorityOptions;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.logger.verbose("getDiscoveredAuthority called");
              authorityOptions = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata
              };
              if (!requestAuthority)
                return [3, 2];
              this.logger.verbose("Creating discovered authority with request authority");
              return [4, AuthorityFactory.createDiscoveredInstance(requestAuthority, this.config.system.networkClient, this.browserStorage, authorityOptions, this.logger)];
            case 1:
              return [2, _a.sent()];
            case 2:
              this.logger.verbose("Creating discovered authority with configured authority");
              return [4, AuthorityFactory.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, authorityOptions, this.logger)];
            case 3:
              return [2, _a.sent()];
          }
        });
      });
    };
    return BaseInteractionClient2;
  }()
);

// node_modules/@azure/msal-browser/dist/interaction_client/StandardInteractionClient.js
var StandardInteractionClient = (
  /** @class */
  function(_super) {
    __extends(StandardInteractionClient2, _super);
    function StandardInteractionClient2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    StandardInteractionClient2.prototype.initializeAuthorizationCodeRequest = function(request) {
      return __awaiter(this, void 0, void 0, function() {
        var generatedPkceParams, authCodeRequest;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientInitializeAuthorizationCodeRequest, request.correlationId);
              this.logger.verbose("initializeAuthorizationRequest called", request.correlationId);
              return [4, this.browserCrypto.generatePkceCodes()];
            case 1:
              generatedPkceParams = _a.sent();
              authCodeRequest = __assign(__assign({}, request), { redirectUri: request.redirectUri, code: Constants.EMPTY_STRING, codeVerifier: generatedPkceParams.verifier });
              request.codeChallenge = generatedPkceParams.challenge;
              request.codeChallengeMethod = Constants.S256_CODE_CHALLENGE_METHOD;
              return [2, authCodeRequest];
          }
        });
      });
    };
    StandardInteractionClient2.prototype.initializeLogoutRequest = function(logoutRequest) {
      this.logger.verbose("initializeLogoutRequest called", logoutRequest === null || logoutRequest === void 0 ? void 0 : logoutRequest.correlationId);
      var validLogoutRequest = __assign({ correlationId: this.correlationId || this.browserCrypto.createNewGuid() }, logoutRequest);
      if (logoutRequest) {
        if (!logoutRequest.logoutHint) {
          if (logoutRequest.account) {
            var logoutHint = this.getLogoutHintFromIdTokenClaims(logoutRequest.account);
            if (logoutHint) {
              this.logger.verbose("Setting logoutHint to login_hint ID Token Claim value for the account provided");
              validLogoutRequest.logoutHint = logoutHint;
            }
          } else {
            this.logger.verbose("logoutHint was not set and account was not passed into logout request, logoutHint will not be set");
          }
        } else {
          this.logger.verbose("logoutHint has already been set in logoutRequest");
        }
      } else {
        this.logger.verbose("logoutHint will not be set since no logout request was configured");
      }
      if (!logoutRequest || logoutRequest.postLogoutRedirectUri !== null) {
        if (logoutRequest && logoutRequest.postLogoutRedirectUri) {
          this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", validLogoutRequest.correlationId);
          validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(logoutRequest.postLogoutRedirectUri, BrowserUtils.getCurrentUri());
        } else if (this.config.auth.postLogoutRedirectUri === null) {
          this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", validLogoutRequest.correlationId);
        } else if (this.config.auth.postLogoutRedirectUri) {
          this.logger.verbose("Setting postLogoutRedirectUri to configured uri", validLogoutRequest.correlationId);
          validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, BrowserUtils.getCurrentUri());
        } else {
          this.logger.verbose("Setting postLogoutRedirectUri to current page", validLogoutRequest.correlationId);
          validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(BrowserUtils.getCurrentUri(), BrowserUtils.getCurrentUri());
        }
      } else {
        this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", validLogoutRequest.correlationId);
      }
      return validLogoutRequest;
    };
    StandardInteractionClient2.prototype.getLogoutHintFromIdTokenClaims = function(account) {
      var idTokenClaims = account.idTokenClaims;
      if (idTokenClaims) {
        if (idTokenClaims.login_hint) {
          return idTokenClaims.login_hint;
        } else {
          this.logger.verbose("The ID Token Claims tied to the provided account do not contain a login_hint claim, logoutHint will not be added to logout request");
        }
      } else {
        this.logger.verbose("The provided account does not contain ID Token Claims, logoutHint will not be added to logout request");
      }
      return null;
    };
    StandardInteractionClient2.prototype.createAuthCodeClient = function(serverTelemetryManager, authorityUrl, requestAzureCloudOptions) {
      return __awaiter(this, void 0, void 0, function() {
        var clientConfig;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, this.correlationId);
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.correlationId);
              return [4, this.getClientConfiguration(serverTelemetryManager, authorityUrl, requestAzureCloudOptions)];
            case 1:
              clientConfig = _a.sent();
              return [2, new AuthorizationCodeClient(clientConfig, this.performanceClient)];
          }
        });
      });
    };
    StandardInteractionClient2.prototype.getClientConfiguration = function(serverTelemetryManager, requestAuthority, requestAzureCloudOptions) {
      return __awaiter(this, void 0, void 0, function() {
        var discoveredAuthority, logger;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.correlationId);
              this.logger.verbose("getClientConfiguration called", this.correlationId);
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.correlationId);
              return [4, this.getDiscoveredAuthority(requestAuthority, requestAzureCloudOptions)];
            case 1:
              discoveredAuthority = _a.sent();
              logger = this.config.system.loggerOptions;
              return [2, {
                authOptions: {
                  clientId: this.config.auth.clientId,
                  authority: discoveredAuthority,
                  clientCapabilities: this.config.auth.clientCapabilities
                },
                systemOptions: {
                  tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
                  preventCorsPreflight: true
                },
                loggerOptions: {
                  loggerCallback: logger.loggerCallback,
                  piiLoggingEnabled: logger.piiLoggingEnabled,
                  logLevel: logger.logLevel,
                  correlationId: this.correlationId
                },
                cryptoInterface: this.browserCrypto,
                networkInterface: this.networkClient,
                storageInterface: this.browserStorage,
                serverTelemetryManager,
                libraryInfo: {
                  sku: BrowserConstants.MSAL_SKU,
                  version: version2,
                  cpu: Constants.EMPTY_STRING,
                  os: Constants.EMPTY_STRING
                },
                telemetry: this.config.telemetry
              }];
          }
        });
      });
    };
    StandardInteractionClient2.prototype.validateAndExtractStateFromHash = function(serverParams, interactionType, requestCorrelationId) {
      this.logger.verbose("validateAndExtractStateFromHash called", requestCorrelationId);
      if (!serverParams.state) {
        throw BrowserAuthError.createHashDoesNotContainStateError();
      }
      var platformStateObj = BrowserProtocolUtils.extractBrowserRequestState(this.browserCrypto, serverParams.state);
      if (!platformStateObj) {
        throw BrowserAuthError.createUnableToParseStateError();
      }
      if (platformStateObj.interactionType !== interactionType) {
        throw BrowserAuthError.createStateInteractionTypeMismatchError();
      }
      this.logger.verbose("Returning state from hash", requestCorrelationId);
      return serverParams.state;
    };
    StandardInteractionClient2.prototype.getDiscoveredAuthority = function(requestAuthority, requestAzureCloudOptions) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var getAuthorityMeasurement, authorityOptions, userAuthority, builtAuthority;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.correlationId);
              this.logger.verbose("getDiscoveredAuthority called", this.correlationId);
              getAuthorityMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.correlationId);
              authorityOptions = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata,
                skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
              };
              userAuthority = requestAuthority ? requestAuthority : this.config.auth.authority;
              builtAuthority = Authority.generateAuthority(userAuthority, requestAzureCloudOptions || this.config.auth.azureCloudOptions);
              this.logger.verbose("Creating discovered authority with configured authority", this.correlationId);
              this.performanceClient.setPreQueueTime(PerformanceEvents.AuthorityFactoryCreateDiscoveredInstance, this.correlationId);
              return [4, AuthorityFactory.createDiscoveredInstance(builtAuthority, this.config.system.networkClient, this.browserStorage, authorityOptions, this.logger, this.performanceClient, this.correlationId).then(function(result) {
                getAuthorityMeasurement.endMeasurement({
                  success: true
                });
                return result;
              }).catch(function(error) {
                getAuthorityMeasurement.endMeasurement({
                  errorCode: error.errorCode,
                  subErrorCode: error.subError,
                  success: false
                });
                throw error;
              })];
            case 1:
              return [2, _b.sent()];
          }
        });
      });
    };
    StandardInteractionClient2.prototype.initializeAuthorizationRequest = function(request, interactionType) {
      return __awaiter(this, void 0, void 0, function() {
        var redirectUri, browserState, state2, validatedRequest, _a, account, legacyLoginHint;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, this.correlationId);
              this.logger.verbose("initializeAuthorizationRequest called", this.correlationId);
              redirectUri = this.getRedirectUri(request.redirectUri);
              browserState = {
                interactionType
              };
              state2 = ProtocolUtils.setRequestState(this.browserCrypto, request && request.state || Constants.EMPTY_STRING, browserState);
              this.performanceClient.setPreQueueTime(PerformanceEvents.InitializeBaseRequest, this.correlationId);
              _a = [{}];
              return [4, this.initializeBaseRequest(request)];
            case 1:
              validatedRequest = __assign.apply(void 0, [__assign.apply(void 0, _a.concat([_b.sent()])), { redirectUri, state: state2, nonce: request.nonce || this.browserCrypto.createNewGuid(), responseMode: ResponseMode.FRAGMENT }]);
              account = request.account || this.browserStorage.getActiveAccount();
              if (account) {
                this.logger.verbose("Setting validated request account", this.correlationId);
                this.logger.verbosePii("Setting validated request account: " + account.homeAccountId, this.correlationId);
                validatedRequest.account = account;
              }
              if (StringUtils.isEmpty(validatedRequest.loginHint) && !account) {
                legacyLoginHint = this.browserStorage.getLegacyLoginHint();
                if (legacyLoginHint) {
                  validatedRequest.loginHint = legacyLoginHint;
                }
              }
              return [2, validatedRequest];
          }
        });
      });
    };
    return StandardInteractionClient2;
  }(BaseInteractionClient)
);

// node_modules/@azure/msal-browser/dist/interaction_handler/InteractionHandler.js
var InteractionHandler = (
  /** @class */
  function() {
    function InteractionHandler2(authCodeModule, storageImpl, authCodeRequest, logger, performanceClient) {
      this.authModule = authCodeModule;
      this.browserStorage = storageImpl;
      this.authCodeRequest = authCodeRequest;
      this.logger = logger;
      this.performanceClient = performanceClient;
    }
    InteractionHandler2.prototype.handleCodeResponseFromHash = function(locationHash, state2, authority, networkModule) {
      return __awaiter(this, void 0, void 0, function() {
        var stateKey, requestState, authCodeResponse;
        return __generator(this, function(_a) {
          this.performanceClient.addQueueMeasurement(PerformanceEvents.HandleCodeResponseFromHash, this.authCodeRequest.correlationId);
          this.logger.verbose("InteractionHandler.handleCodeResponse called");
          if (StringUtils.isEmpty(locationHash)) {
            throw BrowserAuthError.createEmptyHashError(locationHash);
          }
          stateKey = this.browserStorage.generateStateKey(state2);
          requestState = this.browserStorage.getTemporaryCache(stateKey);
          if (!requestState) {
            throw ClientAuthError.createStateNotFoundError("Cached State");
          }
          try {
            authCodeResponse = this.authModule.handleFragmentResponse(locationHash, requestState);
          } catch (e2) {
            if (e2 instanceof ServerError && e2.subError === BrowserAuthErrorMessage.userCancelledError.code) {
              throw BrowserAuthError.createUserCancelledError();
            } else {
              throw e2;
            }
          }
          this.performanceClient.setPreQueueTime(PerformanceEvents.HandleCodeResponseFromServer, this.authCodeRequest.correlationId);
          return [2, this.handleCodeResponseFromServer(authCodeResponse, state2, authority, networkModule)];
        });
      });
    };
    InteractionHandler2.prototype.handleCodeResponseFromServer = function(authCodeResponse, state2, authority, networkModule, validateNonce) {
      if (validateNonce === void 0) {
        validateNonce = true;
      }
      return __awaiter(this, void 0, void 0, function() {
        var stateKey, requestState, nonceKey, cachedNonce, cachedCcsCred, tokenResponse;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.HandleCodeResponseFromServer, this.authCodeRequest.correlationId);
              this.logger.trace("InteractionHandler.handleCodeResponseFromServer called");
              stateKey = this.browserStorage.generateStateKey(state2);
              requestState = this.browserStorage.getTemporaryCache(stateKey);
              if (!requestState) {
                throw ClientAuthError.createStateNotFoundError("Cached State");
              }
              nonceKey = this.browserStorage.generateNonceKey(requestState);
              cachedNonce = this.browserStorage.getTemporaryCache(nonceKey);
              this.authCodeRequest.code = authCodeResponse.code;
              if (!authCodeResponse.cloud_instance_host_name)
                return [3, 2];
              this.performanceClient.setPreQueueTime(PerformanceEvents.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId);
              return [4, this.updateTokenEndpointAuthority(authCodeResponse.cloud_instance_host_name, authority, networkModule)];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              if (validateNonce) {
                authCodeResponse.nonce = cachedNonce || void 0;
              }
              authCodeResponse.state = requestState;
              if (authCodeResponse.client_info) {
                this.authCodeRequest.clientInfo = authCodeResponse.client_info;
              } else {
                cachedCcsCred = this.checkCcsCredentials();
                if (cachedCcsCred) {
                  this.authCodeRequest.ccsCredential = cachedCcsCred;
                }
              }
              this.performanceClient.setPreQueueTime(PerformanceEvents.AuthClientAcquireToken, this.authCodeRequest.correlationId);
              return [4, this.authModule.acquireToken(this.authCodeRequest, authCodeResponse)];
            case 3:
              tokenResponse = _a.sent();
              this.browserStorage.cleanRequestByState(state2);
              return [2, tokenResponse];
          }
        });
      });
    };
    InteractionHandler2.prototype.updateTokenEndpointAuthority = function(cloudInstanceHostname, authority, networkModule) {
      return __awaiter(this, void 0, void 0, function() {
        var cloudInstanceAuthorityUri, cloudInstanceAuthority;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId);
              cloudInstanceAuthorityUri = "https://" + cloudInstanceHostname + "/" + authority.tenant + "/";
              return [4, AuthorityFactory.createDiscoveredInstance(cloudInstanceAuthorityUri, networkModule, this.browserStorage, authority.options, this.logger, this.performanceClient, this.authCodeRequest.correlationId)];
            case 1:
              cloudInstanceAuthority = _a.sent();
              this.authModule.updateAuthority(cloudInstanceAuthority);
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    InteractionHandler2.prototype.checkCcsCredentials = function() {
      var cachedCcsCred = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.CCS_CREDENTIAL, true);
      if (cachedCcsCred) {
        try {
          return JSON.parse(cachedCcsCred);
        } catch (e2) {
          this.authModule.logger.error("Cache credential could not be parsed");
          this.authModule.logger.errorPii("Cache credential could not be parsed: " + cachedCcsCred);
        }
      }
      return null;
    };
    return InteractionHandler2;
  }()
);

// node_modules/@azure/msal-browser/dist/interaction_handler/RedirectHandler.js
var RedirectHandler = (
  /** @class */
  function(_super) {
    __extends(RedirectHandler2, _super);
    function RedirectHandler2(authCodeModule, storageImpl, authCodeRequest, logger, browserCrypto, performanceClient) {
      var _this = _super.call(this, authCodeModule, storageImpl, authCodeRequest, logger, performanceClient) || this;
      _this.browserCrypto = browserCrypto;
      return _this;
    }
    RedirectHandler2.prototype.initiateAuthRequest = function(requestUrl, params) {
      return __awaiter(this, void 0, void 0, function() {
        var navigationOptions, navigate;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.logger.verbose("RedirectHandler.initiateAuthRequest called");
              if (!!StringUtils.isEmpty(requestUrl))
                return [3, 7];
              if (params.redirectStartPage) {
                this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page");
                this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, params.redirectStartPage, true);
              }
              this.browserStorage.setTemporaryCache(TemporaryCacheKeys.CORRELATION_ID, this.authCodeRequest.correlationId, true);
              this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto);
              this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + requestUrl);
              navigationOptions = {
                apiId: ApiId.acquireTokenRedirect,
                timeout: params.redirectTimeout,
                noHistory: false
              };
              if (!(typeof params.onRedirectNavigate === "function"))
                return [3, 4];
              this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback");
              navigate = params.onRedirectNavigate(requestUrl);
              if (!(navigate !== false))
                return [3, 2];
              this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating");
              return [4, params.navigationClient.navigateExternal(requestUrl, navigationOptions)];
            case 1:
              _a.sent();
              return [
                2
                /*return*/
              ];
            case 2:
              this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation");
              return [
                2
                /*return*/
              ];
            case 3:
              return [3, 6];
            case 4:
              this.logger.verbose("RedirectHandler.initiateAuthRequest: Navigating window to navigate url");
              return [4, params.navigationClient.navigateExternal(requestUrl, navigationOptions)];
            case 5:
              _a.sent();
              return [
                2
                /*return*/
              ];
            case 6:
              return [3, 8];
            case 7:
              this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty");
              throw BrowserAuthError.createEmptyNavigationUriError();
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    RedirectHandler2.prototype.handleCodeResponseFromHash = function(locationHash, state2, authority, networkModule) {
      return __awaiter(this, void 0, void 0, function() {
        var stateKey, requestState, authCodeResponse, nonceKey, cachedNonce, cachedCcsCred, tokenResponse;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.logger.verbose("RedirectHandler.handleCodeResponse called");
              if (StringUtils.isEmpty(locationHash)) {
                throw BrowserAuthError.createEmptyHashError(locationHash);
              }
              this.browserStorage.setInteractionInProgress(false);
              stateKey = this.browserStorage.generateStateKey(state2);
              requestState = this.browserStorage.getTemporaryCache(stateKey);
              if (!requestState) {
                throw ClientAuthError.createStateNotFoundError("Cached State");
              }
              try {
                authCodeResponse = this.authModule.handleFragmentResponse(locationHash, requestState);
              } catch (e2) {
                if (e2 instanceof ServerError && e2.subError === BrowserAuthErrorMessage.userCancelledError.code) {
                  throw BrowserAuthError.createUserCancelledError();
                } else {
                  throw e2;
                }
              }
              nonceKey = this.browserStorage.generateNonceKey(requestState);
              cachedNonce = this.browserStorage.getTemporaryCache(nonceKey);
              this.authCodeRequest.code = authCodeResponse.code;
              if (!authCodeResponse.cloud_instance_host_name)
                return [3, 2];
              return [4, this.updateTokenEndpointAuthority(authCodeResponse.cloud_instance_host_name, authority, networkModule)];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              authCodeResponse.nonce = cachedNonce || void 0;
              authCodeResponse.state = requestState;
              if (authCodeResponse.client_info) {
                this.authCodeRequest.clientInfo = authCodeResponse.client_info;
              } else {
                cachedCcsCred = this.checkCcsCredentials();
                if (cachedCcsCred) {
                  this.authCodeRequest.ccsCredential = cachedCcsCred;
                }
              }
              return [4, this.authModule.acquireToken(this.authCodeRequest, authCodeResponse)];
            case 3:
              tokenResponse = _a.sent();
              this.browserStorage.cleanRequestByState(state2);
              return [2, tokenResponse];
          }
        });
      });
    };
    return RedirectHandler2;
  }(InteractionHandler)
);

// node_modules/@azure/msal-browser/dist/event/EventType.js
var EventType;
(function(EventType2) {
  EventType2["INITIALIZE_START"] = "msal:initializeStart";
  EventType2["INITIALIZE_END"] = "msal:initializeEnd";
  EventType2["ACCOUNT_ADDED"] = "msal:accountAdded";
  EventType2["ACCOUNT_REMOVED"] = "msal:accountRemoved";
  EventType2["LOGIN_START"] = "msal:loginStart";
  EventType2["LOGIN_SUCCESS"] = "msal:loginSuccess";
  EventType2["LOGIN_FAILURE"] = "msal:loginFailure";
  EventType2["ACQUIRE_TOKEN_START"] = "msal:acquireTokenStart";
  EventType2["ACQUIRE_TOKEN_SUCCESS"] = "msal:acquireTokenSuccess";
  EventType2["ACQUIRE_TOKEN_FAILURE"] = "msal:acquireTokenFailure";
  EventType2["ACQUIRE_TOKEN_NETWORK_START"] = "msal:acquireTokenFromNetworkStart";
  EventType2["SSO_SILENT_START"] = "msal:ssoSilentStart";
  EventType2["SSO_SILENT_SUCCESS"] = "msal:ssoSilentSuccess";
  EventType2["SSO_SILENT_FAILURE"] = "msal:ssoSilentFailure";
  EventType2["ACQUIRE_TOKEN_BY_CODE_START"] = "msal:acquireTokenByCodeStart";
  EventType2["ACQUIRE_TOKEN_BY_CODE_SUCCESS"] = "msal:acquireTokenByCodeSuccess";
  EventType2["ACQUIRE_TOKEN_BY_CODE_FAILURE"] = "msal:acquireTokenByCodeFailure";
  EventType2["HANDLE_REDIRECT_START"] = "msal:handleRedirectStart";
  EventType2["HANDLE_REDIRECT_END"] = "msal:handleRedirectEnd";
  EventType2["POPUP_OPENED"] = "msal:popupOpened";
  EventType2["LOGOUT_START"] = "msal:logoutStart";
  EventType2["LOGOUT_SUCCESS"] = "msal:logoutSuccess";
  EventType2["LOGOUT_FAILURE"] = "msal:logoutFailure";
  EventType2["LOGOUT_END"] = "msal:logoutEnd";
  EventType2["RESTORE_FROM_BFCACHE"] = "msal:restoreFromBFCache";
})(EventType || (EventType = {}));

// node_modules/@azure/msal-browser/dist/error/NativeAuthError.js
var NativeStatusCode;
(function(NativeStatusCode2) {
  NativeStatusCode2["USER_INTERACTION_REQUIRED"] = "USER_INTERACTION_REQUIRED";
  NativeStatusCode2["USER_CANCEL"] = "USER_CANCEL";
  NativeStatusCode2["NO_NETWORK"] = "NO_NETWORK";
  NativeStatusCode2["TRANSIENT_ERROR"] = "TRANSIENT_ERROR";
  NativeStatusCode2["PERSISTENT_ERROR"] = "PERSISTENT_ERROR";
  NativeStatusCode2["DISABLED"] = "DISABLED";
  NativeStatusCode2["ACCOUNT_UNAVAILABLE"] = "ACCOUNT_UNAVAILABLE";
})(NativeStatusCode || (NativeStatusCode = {}));
var NativeAuthErrorMessage = {
  extensionError: {
    code: "ContentError"
  },
  userSwitch: {
    code: "user_switch",
    desc: "User attempted to switch accounts in the native broker, which is not allowed. All new accounts must sign-in through the standard web flow first, please try again."
  },
  tokensNotFoundInCache: {
    code: "tokens_not_found_in_internal_memory_cache",
    desc: "Tokens not cached in MSAL JS internal memory, please make the WAM request"
  }
};
var NativeAuthError = (
  /** @class */
  function(_super) {
    __extends(NativeAuthError2, _super);
    function NativeAuthError2(errorCode, description, ext) {
      var _this = _super.call(this, errorCode, description) || this;
      Object.setPrototypeOf(_this, NativeAuthError2.prototype);
      _this.name = "NativeAuthError";
      _this.ext = ext;
      return _this;
    }
    NativeAuthError2.prototype.isFatal = function() {
      if (this.ext && this.ext.status && (this.ext.status === NativeStatusCode.PERSISTENT_ERROR || this.ext.status === NativeStatusCode.DISABLED)) {
        return true;
      }
      switch (this.errorCode) {
        case NativeAuthErrorMessage.extensionError.code:
          return true;
        default:
          return false;
      }
    };
    NativeAuthError2.createError = function(code, description, ext) {
      if (ext && ext.status) {
        switch (ext.status) {
          case NativeStatusCode.ACCOUNT_UNAVAILABLE:
            return InteractionRequiredAuthError.createNativeAccountUnavailableError();
          case NativeStatusCode.USER_INTERACTION_REQUIRED:
            return new InteractionRequiredAuthError(code, description);
          case NativeStatusCode.USER_CANCEL:
            return BrowserAuthError.createUserCancelledError();
          case NativeStatusCode.NO_NETWORK:
            return BrowserAuthError.createNoNetworkConnectivityError();
        }
      }
      return new NativeAuthError2(code, description, ext);
    };
    NativeAuthError2.createUserSwitchError = function() {
      return new NativeAuthError2(NativeAuthErrorMessage.userSwitch.code, NativeAuthErrorMessage.userSwitch.desc);
    };
    NativeAuthError2.createTokensNotFoundInCacheError = function() {
      return new NativeAuthError2(NativeAuthErrorMessage.tokensNotFoundInCache.code, NativeAuthErrorMessage.tokensNotFoundInCache.desc);
    };
    return NativeAuthError2;
  }(AuthError)
);

// node_modules/@azure/msal-browser/dist/interaction_client/SilentCacheClient.js
var SilentCacheClient = (
  /** @class */
  function(_super) {
    __extends(SilentCacheClient2, _super);
    function SilentCacheClient2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SilentCacheClient2.prototype.acquireToken = function(silentRequest) {
      return __awaiter(this, void 0, void 0, function() {
        var acquireTokenMeasurement, serverTelemetryManager, silentAuthClient, cachedToken, error_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              acquireTokenMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SilentCacheClientAcquireToken, silentRequest.correlationId);
              serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow);
              return [4, this.createSilentFlowClient(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions)];
            case 1:
              silentAuthClient = _a.sent();
              this.logger.verbose("Silent auth client created");
              _a.label = 2;
            case 2:
              _a.trys.push([2, 4, , 5]);
              return [4, silentAuthClient.acquireCachedToken(silentRequest)];
            case 3:
              cachedToken = _a.sent();
              acquireTokenMeasurement.endMeasurement({
                success: true,
                fromCache: true
              });
              return [2, cachedToken];
            case 4:
              error_1 = _a.sent();
              if (error_1 instanceof BrowserAuthError && error_1.errorCode === BrowserAuthErrorMessage.signingKeyNotFoundInStorage.code) {
                this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair.");
              }
              acquireTokenMeasurement.endMeasurement({
                errorCode: error_1 instanceof AuthError && error_1.errorCode || void 0,
                subErrorCode: error_1 instanceof AuthError && error_1.subError || void 0,
                success: false
              });
              throw error_1;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    SilentCacheClient2.prototype.logout = function() {
      return Promise.reject(BrowserAuthError.createSilentLogoutUnsupportedError());
    };
    SilentCacheClient2.prototype.createSilentFlowClient = function(serverTelemetryManager, authorityUrl, azureCloudOptions) {
      return __awaiter(this, void 0, void 0, function() {
        var clientConfig;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.correlationId);
              return [4, this.getClientConfiguration(serverTelemetryManager, authorityUrl, azureCloudOptions)];
            case 1:
              clientConfig = _a.sent();
              return [2, new SilentFlowClient(clientConfig, this.performanceClient)];
          }
        });
      });
    };
    SilentCacheClient2.prototype.initializeSilentRequest = function(request, account) {
      return __awaiter(this, void 0, void 0, function() {
        var _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.InitializeSilentRequest, this.correlationId);
              this.performanceClient.setPreQueueTime(PerformanceEvents.InitializeBaseRequest, this.correlationId);
              _a = [__assign({}, request)];
              return [4, this.initializeBaseRequest(request, account)];
            case 1:
              return [2, __assign.apply(void 0, [__assign.apply(void 0, _a.concat([_b.sent()])), { account, forceRefresh: request.forceRefresh || false }])];
          }
        });
      });
    };
    return SilentCacheClient2;
  }(StandardInteractionClient)
);

// node_modules/@azure/msal-browser/dist/interaction_client/NativeInteractionClient.js
var NativeInteractionClient = (
  /** @class */
  function(_super) {
    __extends(NativeInteractionClient2, _super);
    function NativeInteractionClient2(config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, provider, accountId, nativeStorageImpl, correlationId) {
      var _this = _super.call(this, config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, performanceClient, provider, correlationId) || this;
      _this.apiId = apiId;
      _this.accountId = accountId;
      _this.nativeMessageHandler = provider;
      _this.nativeStorageManager = nativeStorageImpl;
      _this.silentCacheClient = new SilentCacheClient(config, _this.nativeStorageManager, browserCrypto, logger, eventHandler, navigationClient, performanceClient, provider, correlationId);
      return _this;
    }
    NativeInteractionClient2.prototype.acquireToken = function(request) {
      return __awaiter(this, void 0, void 0, function() {
        var nativeATMeasurement, reqTimestamp, nativeRequest, result, messageBody, response, validatedResponse;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.logger.trace("NativeInteractionClient - acquireToken called.");
              nativeATMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.NativeInteractionClientAcquireToken, request.correlationId);
              reqTimestamp = TimeUtils.nowSeconds();
              return [4, this.initializeNativeRequest(request)];
            case 1:
              nativeRequest = _a.sent();
              _a.label = 2;
            case 2:
              _a.trys.push([2, 4, , 5]);
              return [4, this.acquireTokensFromCache(this.accountId, nativeRequest)];
            case 3:
              result = _a.sent();
              nativeATMeasurement.endMeasurement({
                success: true,
                isNativeBroker: false,
                fromCache: true
              });
              return [2, result];
            case 4:
              _a.sent();
              this.logger.info("MSAL internal Cache does not contain tokens, proceed to make a native call");
              return [3, 5];
            case 5:
              messageBody = {
                method: NativeExtensionMethod.GetToken,
                request: nativeRequest
              };
              return [4, this.nativeMessageHandler.sendMessage(messageBody)];
            case 6:
              response = _a.sent();
              validatedResponse = this.validateNativeResponse(response);
              return [2, this.handleNativeResponse(validatedResponse, nativeRequest, reqTimestamp).then(function(result2) {
                nativeATMeasurement.endMeasurement({
                  success: true,
                  isNativeBroker: true,
                  requestId: result2.requestId
                });
                return result2;
              }).catch(function(error) {
                nativeATMeasurement.endMeasurement({
                  success: false,
                  errorCode: error.errorCode,
                  subErrorCode: error.subError,
                  isNativeBroker: true
                });
                throw error;
              })];
          }
        });
      });
    };
    NativeInteractionClient2.prototype.createSilentCacheRequest = function(request, cachedAccount) {
      return {
        authority: request.authority,
        correlationId: this.correlationId,
        scopes: ScopeSet.fromString(request.scope).asArray(),
        account: cachedAccount,
        forceRefresh: false
      };
    };
    NativeInteractionClient2.prototype.acquireTokensFromCache = function(nativeAccountId, request) {
      return __awaiter(this, void 0, void 0, function() {
        var account, silentRequest, result, e_2;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!nativeAccountId) {
                this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided");
                throw ClientAuthError.createNoAccountFoundError();
              }
              account = this.browserStorage.getAccountInfoFilteredBy({ nativeAccountId });
              if (!account) {
                throw ClientAuthError.createNoAccountFoundError();
              }
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              silentRequest = this.createSilentCacheRequest(request, account);
              return [4, this.silentCacheClient.acquireToken(silentRequest)];
            case 2:
              result = _a.sent();
              return [2, result];
            case 3:
              e_2 = _a.sent();
              throw e_2;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    NativeInteractionClient2.prototype.acquireTokenRedirect = function(request) {
      return __awaiter(this, void 0, void 0, function() {
        var nativeRequest, messageBody, response, e_3, navigationOptions, redirectUri;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.logger.trace("NativeInteractionClient - acquireTokenRedirect called.");
              return [4, this.initializeNativeRequest(request)];
            case 1:
              nativeRequest = _a.sent();
              messageBody = {
                method: NativeExtensionMethod.GetToken,
                request: nativeRequest
              };
              _a.label = 2;
            case 2:
              _a.trys.push([2, 4, , 5]);
              return [4, this.nativeMessageHandler.sendMessage(messageBody)];
            case 3:
              response = _a.sent();
              this.validateNativeResponse(response);
              return [3, 5];
            case 4:
              e_3 = _a.sent();
              if (e_3 instanceof NativeAuthError && e_3.isFatal()) {
                throw e_3;
              }
              return [3, 5];
            case 5:
              this.browserStorage.setTemporaryCache(TemporaryCacheKeys.NATIVE_REQUEST, JSON.stringify(nativeRequest), true);
              navigationOptions = {
                apiId: ApiId.acquireTokenRedirect,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: false
              };
              redirectUri = this.config.auth.navigateToLoginRequestUrl ? window.location.href : this.getRedirectUri(request.redirectUri);
              return [4, this.navigationClient.navigateExternal(redirectUri, navigationOptions)];
            case 6:
              _a.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    NativeInteractionClient2.prototype.handleRedirectPromise = function() {
      return __awaiter(this, void 0, void 0, function() {
        var cachedRequest, prompt, request, messageBody, reqTimestamp, response, result, e_4;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.logger.trace("NativeInteractionClient - handleRedirectPromise called.");
              if (!this.browserStorage.isInteractionInProgress(true)) {
                this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
                return [2, null];
              }
              cachedRequest = this.browserStorage.getCachedNativeRequest();
              if (!cachedRequest) {
                this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null.");
                return [2, null];
              }
              prompt = cachedRequest.prompt, request = __rest(cachedRequest, ["prompt"]);
              if (prompt) {
                this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window.");
              }
              this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.NATIVE_REQUEST));
              messageBody = {
                method: NativeExtensionMethod.GetToken,
                request
              };
              reqTimestamp = TimeUtils.nowSeconds();
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              this.logger.verbose("NativeInteractionClient - handleRedirectPromise sending message to native broker.");
              return [4, this.nativeMessageHandler.sendMessage(messageBody)];
            case 2:
              response = _a.sent();
              this.validateNativeResponse(response);
              result = this.handleNativeResponse(response, request, reqTimestamp);
              this.browserStorage.setInteractionInProgress(false);
              return [2, result];
            case 3:
              e_4 = _a.sent();
              this.browserStorage.setInteractionInProgress(false);
              throw e_4;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    NativeInteractionClient2.prototype.logout = function() {
      this.logger.trace("NativeInteractionClient - logout called.");
      return Promise.reject("Logout not implemented yet");
    };
    NativeInteractionClient2.prototype.handleNativeResponse = function(response, request, reqTimestamp) {
      return __awaiter(this, void 0, void 0, function() {
        var authority, authorityPreferredCache, idTokenObj, homeAccountIdentifier, accountEntity, result;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.logger.trace("NativeInteractionClient - handleNativeResponse called.");
              if (response.account.id !== request.accountId) {
                throw NativeAuthError.createUserSwitchError();
              }
              return [4, this.getDiscoveredAuthority(request.authority)];
            case 1:
              authority = _a.sent();
              authorityPreferredCache = authority.getPreferredCache();
              idTokenObj = this.createIdTokenObj(response);
              homeAccountIdentifier = this.createHomeAccountIdentifier(response, idTokenObj);
              accountEntity = this.createAccountEntity(response, homeAccountIdentifier, idTokenObj, authorityPreferredCache);
              return [4, this.generateAuthenticationResult(response, request, idTokenObj, accountEntity, authority.canonicalAuthority, reqTimestamp)];
            case 2:
              result = _a.sent();
              this.cacheAccount(accountEntity);
              this.cacheNativeTokens(response, request, homeAccountIdentifier, accountEntity, idTokenObj, result.accessToken, result.tenantId, reqTimestamp);
              return [2, result];
          }
        });
      });
    };
    NativeInteractionClient2.prototype.createIdTokenObj = function(response) {
      return new AuthToken(response.id_token || Constants.EMPTY_STRING, this.browserCrypto);
    };
    NativeInteractionClient2.prototype.createHomeAccountIdentifier = function(response, idTokenObj) {
      var homeAccountIdentifier = AccountEntity.generateHomeAccountId(response.client_info || Constants.EMPTY_STRING, AuthorityType.Default, this.logger, this.browserCrypto, idTokenObj);
      return homeAccountIdentifier;
    };
    NativeInteractionClient2.prototype.createAccountEntity = function(response, homeAccountIdentifier, idTokenObj, authority) {
      return AccountEntity.createAccount(response.client_info, homeAccountIdentifier, idTokenObj, void 0, void 0, void 0, authority, response.account.id);
    };
    NativeInteractionClient2.prototype.generateScopes = function(response, request) {
      return response.scope ? ScopeSet.fromString(response.scope) : ScopeSet.fromString(request.scope);
    };
    NativeInteractionClient2.prototype.generatePopAccessToken = function(response, request) {
      return __awaiter(this, void 0, void 0, function() {
        var popTokenGenerator, shrParameters;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!(request.tokenType === AuthenticationScheme.POP))
                return [3, 2];
              if (response.shr) {
                this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer");
                return [2, response.shr];
              }
              popTokenGenerator = new PopTokenGenerator(this.browserCrypto);
              shrParameters = {
                resourceRequestMethod: request.resourceRequestMethod,
                resourceRequestUri: request.resourceRequestUri,
                shrClaims: request.shrClaims,
                shrNonce: request.shrNonce
              };
              if (!request.keyId) {
                throw ClientAuthError.createKeyIdMissingError();
              }
              return [4, popTokenGenerator.signPopToken(response.access_token, request.keyId, shrParameters)];
            case 1:
              return [2, _a.sent()];
            case 2:
              return [2, response.access_token];
          }
        });
      });
    };
    NativeInteractionClient2.prototype.generateAuthenticationResult = function(response, request, idTokenObj, accountEntity, authority, reqTimestamp) {
      return __awaiter(this, void 0, void 0, function() {
        var mats, responseScopes, accountProperties, uid, tid, responseAccessToken, tokenType, result;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              mats = this.addTelemetryFromNativeResponse(response);
              responseScopes = response.scope ? ScopeSet.fromString(response.scope) : ScopeSet.fromString(request.scope);
              accountProperties = response.account.properties || {};
              uid = accountProperties["UID"] || idTokenObj.claims.oid || idTokenObj.claims.sub || Constants.EMPTY_STRING;
              tid = accountProperties["TenantId"] || idTokenObj.claims.tid || Constants.EMPTY_STRING;
              return [4, this.generatePopAccessToken(response, request)];
            case 1:
              responseAccessToken = _a.sent();
              tokenType = request.tokenType === AuthenticationScheme.POP ? AuthenticationScheme.POP : AuthenticationScheme.BEARER;
              result = {
                authority,
                uniqueId: uid,
                tenantId: tid,
                scopes: responseScopes.asArray(),
                account: accountEntity.getAccountInfo(),
                idToken: response.id_token,
                idTokenClaims: idTokenObj.claims,
                accessToken: responseAccessToken,
                fromCache: mats ? this.isResponseFromCache(mats) : false,
                expiresOn: new Date(Number(reqTimestamp + response.expires_in) * 1e3),
                tokenType,
                correlationId: this.correlationId,
                state: response.state,
                fromNativeBroker: true
              };
              return [2, result];
          }
        });
      });
    };
    NativeInteractionClient2.prototype.cacheAccount = function(accountEntity) {
      var _this = this;
      this.browserStorage.setAccount(accountEntity);
      this.browserStorage.removeAccountContext(accountEntity).catch(function(e2) {
        _this.logger.error("Error occurred while removing account context from browser storage. " + e2);
      });
    };
    NativeInteractionClient2.prototype.cacheNativeTokens = function(response, request, homeAccountIdentifier, accountEntity, idTokenObj, responseAccessToken, tenantId, reqTimestamp) {
      var cachedIdToken = IdTokenEntity.createIdTokenEntity(homeAccountIdentifier, request.authority, response.id_token || Constants.EMPTY_STRING, request.clientId, idTokenObj.claims.tid || Constants.EMPTY_STRING);
      var expiresIn = request.tokenType === AuthenticationScheme.POP ? Constants.SHR_NONCE_VALIDITY : (typeof response.expires_in === "string" ? parseInt(response.expires_in, 10) : response.expires_in) || 0;
      var tokenExpirationSeconds = reqTimestamp + expiresIn;
      var responseScopes = this.generateScopes(response, request);
      var cachedAccessToken = AccessTokenEntity.createAccessTokenEntity(homeAccountIdentifier, request.authority, responseAccessToken, request.clientId, idTokenObj ? idTokenObj.claims.tid || Constants.EMPTY_STRING : tenantId, responseScopes.printScopes(), tokenExpirationSeconds, 0, this.browserCrypto);
      var nativeCacheRecord = new CacheRecord(accountEntity, cachedIdToken, cachedAccessToken);
      this.nativeStorageManager.saveCacheRecord(nativeCacheRecord);
    };
    NativeInteractionClient2.prototype.addTelemetryFromNativeResponse = function(response) {
      var mats = this.getMATSFromResponse(response);
      if (!mats) {
        return null;
      }
      this.performanceClient.addStaticFields({
        extensionId: this.nativeMessageHandler.getExtensionId(),
        extensionVersion: this.nativeMessageHandler.getExtensionVersion(),
        matsBrokerVersion: mats.broker_version,
        matsAccountJoinOnStart: mats.account_join_on_start,
        matsAccountJoinOnEnd: mats.account_join_on_end,
        matsDeviceJoin: mats.device_join,
        matsPromptBehavior: mats.prompt_behavior,
        matsApiErrorCode: mats.api_error_code,
        matsUiVisible: mats.ui_visible,
        matsSilentCode: mats.silent_code,
        matsSilentBiSubCode: mats.silent_bi_sub_code,
        matsSilentMessage: mats.silent_message,
        matsSilentStatus: mats.silent_status,
        matsHttpStatus: mats.http_status,
        matsHttpEventCount: mats.http_event_count
      }, this.correlationId);
      return mats;
    };
    NativeInteractionClient2.prototype.validateNativeResponse = function(response) {
      if (response.hasOwnProperty("access_token") && response.hasOwnProperty("id_token") && response.hasOwnProperty("client_info") && response.hasOwnProperty("account") && response.hasOwnProperty("scope") && response.hasOwnProperty("expires_in")) {
        return response;
      } else {
        throw NativeAuthError.createUnexpectedError("Response missing expected properties.");
      }
    };
    NativeInteractionClient2.prototype.getMATSFromResponse = function(response) {
      if (response.properties.MATS) {
        try {
          return JSON.parse(response.properties.MATS);
        } catch (e2) {
          this.logger.error("NativeInteractionClient - Error parsing MATS telemetry, returning null instead");
        }
      }
      return null;
    };
    NativeInteractionClient2.prototype.isResponseFromCache = function(mats) {
      if (typeof mats.is_cached === "undefined") {
        this.logger.verbose("NativeInteractionClient - MATS telemetry does not contain field indicating if response was served from cache. Returning false.");
        return false;
      }
      return !!mats.is_cached;
    };
    NativeInteractionClient2.prototype.initializeNativeRequest = function(request) {
      return __awaiter(this, void 0, void 0, function() {
        var authority, canonicalAuthority, scopes, remainingProperties, scopeSet, getPrompt, validatedRequest, shrParameters, popTokenGenerator, reqCnfData;
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.logger.trace("NativeInteractionClient - initializeNativeRequest called");
              authority = request.authority || this.config.auth.authority;
              if (!request.account)
                return [3, 2];
              return [4, this.validateRequestAuthority(authority, request.account)];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              canonicalAuthority = new UrlString(authority);
              canonicalAuthority.validateAsUri();
              scopes = request.scopes, remainingProperties = __rest(request, ["scopes"]);
              scopeSet = new ScopeSet(scopes || []);
              scopeSet.appendScopes(OIDC_DEFAULT_SCOPES);
              getPrompt = function() {
                switch (_this.apiId) {
                  case ApiId.ssoSilent:
                  case ApiId.acquireTokenSilent_silentFlow:
                    _this.logger.trace("initializeNativeRequest: silent request sets prompt to none");
                    return PromptValue.NONE;
                }
                if (!request.prompt) {
                  _this.logger.trace("initializeNativeRequest: prompt was not provided");
                  return void 0;
                }
                switch (request.prompt) {
                  case PromptValue.NONE:
                  case PromptValue.CONSENT:
                  case PromptValue.LOGIN:
                    _this.logger.trace("initializeNativeRequest: prompt is compatible with native flow");
                    return request.prompt;
                  default:
                    _this.logger.trace("initializeNativeRequest: prompt = " + request.prompt + " is not compatible with native flow");
                    throw BrowserAuthError.createNativePromptParameterNotSupportedError();
                }
              };
              validatedRequest = __assign(__assign({}, remainingProperties), {
                accountId: this.accountId,
                clientId: this.config.auth.clientId,
                authority: canonicalAuthority.urlString,
                scope: scopeSet.printScopes(),
                redirectUri: this.getRedirectUri(request.redirectUri),
                prompt: getPrompt(),
                correlationId: this.correlationId,
                tokenType: request.authenticationScheme,
                windowTitleSubstring: document.title,
                extraParameters: __assign(__assign(__assign({}, request.extraQueryParameters), request.tokenQueryParameters), { telemetry: NativeConstants.MATS_TELEMETRY }),
                extendedExpiryToken: false
                // Make this configurable?
              });
              if (!(request.authenticationScheme === AuthenticationScheme.POP))
                return [3, 4];
              shrParameters = {
                resourceRequestUri: request.resourceRequestUri,
                resourceRequestMethod: request.resourceRequestMethod,
                shrClaims: request.shrClaims,
                shrNonce: request.shrNonce
              };
              popTokenGenerator = new PopTokenGenerator(this.browserCrypto);
              return [4, popTokenGenerator.generateCnf(shrParameters)];
            case 3:
              reqCnfData = _a.sent();
              validatedRequest.reqCnf = reqCnfData.reqCnfString;
              validatedRequest.keyId = reqCnfData.kid;
              _a.label = 4;
            case 4:
              return [2, validatedRequest];
          }
        });
      });
    };
    return NativeInteractionClient2;
  }(BaseInteractionClient)
);

// node_modules/@azure/msal-browser/dist/broker/nativeBroker/NativeMessageHandler.js
var NativeMessageHandler = (
  /** @class */
  function() {
    function NativeMessageHandler2(logger, handshakeTimeoutMs, performanceClient, extensionId) {
      this.logger = logger;
      this.handshakeTimeoutMs = handshakeTimeoutMs;
      this.extensionId = extensionId;
      this.resolvers = /* @__PURE__ */ new Map();
      this.handshakeResolvers = /* @__PURE__ */ new Map();
      this.responseId = 0;
      this.messageChannel = new MessageChannel();
      this.windowListener = this.onWindowMessage.bind(this);
      this.performanceClient = performanceClient;
      this.handshakeEvent = performanceClient.startMeasurement(PerformanceEvents.NativeMessageHandlerHandshake);
    }
    NativeMessageHandler2.prototype.sendMessage = function(body) {
      return __awaiter(this, void 0, void 0, function() {
        var req;
        var _this = this;
        return __generator(this, function(_a) {
          this.logger.trace("NativeMessageHandler - sendMessage called.");
          req = {
            channel: NativeConstants.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body
          };
          this.logger.trace("NativeMessageHandler - Sending request to browser extension");
          this.logger.tracePii("NativeMessageHandler - Sending request to browser extension: " + JSON.stringify(req));
          this.messageChannel.port1.postMessage(req);
          return [2, new Promise(function(resolve, reject) {
            _this.resolvers.set(req.responseId, { resolve, reject });
          })];
        });
      });
    };
    NativeMessageHandler2.createProvider = function(logger, handshakeTimeoutMs, performanceClient) {
      return __awaiter(this, void 0, void 0, function() {
        var preferredProvider, backupProvider;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              logger.trace("NativeMessageHandler - createProvider called.");
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 5]);
              preferredProvider = new NativeMessageHandler2(logger, handshakeTimeoutMs, performanceClient, NativeConstants.PREFERRED_EXTENSION_ID);
              return [4, preferredProvider.sendHandshakeRequest()];
            case 2:
              _a.sent();
              return [2, preferredProvider];
            case 3:
              _a.sent();
              backupProvider = new NativeMessageHandler2(logger, handshakeTimeoutMs, performanceClient);
              return [4, backupProvider.sendHandshakeRequest()];
            case 4:
              _a.sent();
              return [2, backupProvider];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    NativeMessageHandler2.prototype.sendHandshakeRequest = function() {
      return __awaiter(this, void 0, void 0, function() {
        var req;
        var _this = this;
        return __generator(this, function(_a) {
          this.logger.trace("NativeMessageHandler - sendHandshakeRequest called.");
          window.addEventListener("message", this.windowListener, false);
          req = {
            channel: NativeConstants.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: {
              method: NativeExtensionMethod.HandshakeRequest
            }
          };
          this.handshakeEvent.addStaticFields({
            extensionId: this.extensionId,
            extensionHandshakeTimeoutMs: this.handshakeTimeoutMs
          });
          this.messageChannel.port1.onmessage = function(event) {
            _this.onChannelMessage(event);
          };
          window.postMessage(req, window.origin, [this.messageChannel.port2]);
          return [2, new Promise(function(resolve, reject) {
            _this.handshakeResolvers.set(req.responseId, { resolve, reject });
            _this.timeoutId = window.setTimeout(function() {
              window.removeEventListener("message", _this.windowListener, false);
              _this.messageChannel.port1.close();
              _this.messageChannel.port2.close();
              _this.handshakeEvent.endMeasurement({ extensionHandshakeTimedOut: true, success: false });
              reject(BrowserAuthError.createNativeHandshakeTimeoutError());
              _this.handshakeResolvers.delete(req.responseId);
            }, _this.handshakeTimeoutMs);
          })];
        });
      });
    };
    NativeMessageHandler2.prototype.onWindowMessage = function(event) {
      this.logger.trace("NativeMessageHandler - onWindowMessage called");
      if (event.source !== window) {
        return;
      }
      var request = event.data;
      if (!request.channel || request.channel !== NativeConstants.CHANNEL_ID) {
        return;
      }
      if (request.extensionId && request.extensionId !== this.extensionId) {
        return;
      }
      if (request.body.method === NativeExtensionMethod.HandshakeRequest) {
        this.logger.verbose(request.extensionId ? "Extension with id: " + request.extensionId + " not installed" : "No extension installed");
        clearTimeout(this.timeoutId);
        this.messageChannel.port1.close();
        this.messageChannel.port2.close();
        window.removeEventListener("message", this.windowListener, false);
        var handshakeResolver = this.handshakeResolvers.get(request.responseId);
        if (handshakeResolver) {
          this.handshakeEvent.endMeasurement({ success: false, extensionInstalled: false });
          handshakeResolver.reject(BrowserAuthError.createNativeExtensionNotInstalledError());
        }
      }
    };
    NativeMessageHandler2.prototype.onChannelMessage = function(event) {
      this.logger.trace("NativeMessageHandler - onChannelMessage called.");
      var request = event.data;
      var resolver = this.resolvers.get(request.responseId);
      var handshakeResolver = this.handshakeResolvers.get(request.responseId);
      try {
        var method = request.body.method;
        if (method === NativeExtensionMethod.Response) {
          if (!resolver) {
            return;
          }
          var response = request.body.response;
          this.logger.trace("NativeMessageHandler - Received response from browser extension");
          this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(response));
          if (response.status !== "Success") {
            resolver.reject(NativeAuthError.createError(response.code, response.description, response.ext));
          } else if (response.result) {
            if (response.result["code"] && response.result["description"]) {
              resolver.reject(NativeAuthError.createError(response.result["code"], response.result["description"], response.result["ext"]));
            } else {
              resolver.resolve(response.result);
            }
          } else {
            throw AuthError.createUnexpectedError("Event does not contain result.");
          }
          this.resolvers.delete(request.responseId);
        } else if (method === NativeExtensionMethod.HandshakeResponse) {
          if (!handshakeResolver) {
            return;
          }
          clearTimeout(this.timeoutId);
          window.removeEventListener("message", this.windowListener, false);
          this.extensionId = request.extensionId;
          this.extensionVersion = request.body.version;
          this.logger.verbose("NativeMessageHandler - Received HandshakeResponse from extension: " + this.extensionId);
          this.handshakeEvent.endMeasurement({ extensionInstalled: true, success: true });
          handshakeResolver.resolve();
          this.handshakeResolvers.delete(request.responseId);
        }
      } catch (err) {
        this.logger.error("Error parsing response from WAM Extension");
        this.logger.errorPii("Error parsing response from WAM Extension: " + err.toString());
        this.logger.errorPii("Unable to parse " + event);
        if (resolver) {
          resolver.reject(err);
        } else if (handshakeResolver) {
          handshakeResolver.reject(err);
        }
      }
    };
    NativeMessageHandler2.prototype.getExtensionId = function() {
      return this.extensionId;
    };
    NativeMessageHandler2.prototype.getExtensionVersion = function() {
      return this.extensionVersion;
    };
    NativeMessageHandler2.isNativeAvailable = function(config, logger, nativeExtensionProvider, authenticationScheme) {
      logger.trace("isNativeAvailable called");
      if (!config.system.allowNativeBroker) {
        logger.trace("isNativeAvailable: allowNativeBroker is not enabled, returning false");
        return false;
      }
      if (!nativeExtensionProvider) {
        logger.trace("isNativeAvailable: WAM extension provider is not initialized, returning false");
        return false;
      }
      if (authenticationScheme) {
        switch (authenticationScheme) {
          case AuthenticationScheme.BEARER:
          case AuthenticationScheme.POP:
            logger.trace("isNativeAvailable: authenticationScheme is supported, returning true");
            return true;
          default:
            logger.trace("isNativeAvailable: authenticationScheme is not supported, returning false");
            return false;
        }
      }
      return true;
    };
    return NativeMessageHandler2;
  }()
);

// node_modules/@azure/msal-browser/dist/interaction_client/RedirectClient.js
var RedirectClient = (
  /** @class */
  function(_super) {
    __extends(RedirectClient2, _super);
    function RedirectClient2(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeStorageImpl, nativeMessageHandler, correlationId) {
      var _this = _super.call(this, config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) || this;
      _this.nativeStorage = nativeStorageImpl;
      return _this;
    }
    RedirectClient2.prototype.acquireToken = function(request) {
      return __awaiter(this, void 0, void 0, function() {
        var validRequest, serverTelemetryManager, handleBackButton, authCodeRequest, authClient, interactionHandler, navigateUrl, redirectStartPage, e_1;
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, request.correlationId);
              return [4, this.initializeAuthorizationRequest(request, InteractionType.Redirect)];
            case 1:
              validRequest = _a.sent();
              this.browserStorage.updateCacheEntries(validRequest.state, validRequest.nonce, validRequest.authority, validRequest.loginHint || Constants.EMPTY_STRING, validRequest.account || null);
              serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenRedirect);
              handleBackButton = function(event) {
                if (event.persisted) {
                  _this.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache.");
                  _this.browserStorage.cleanRequestByState(validRequest.state);
                  _this.eventHandler.emitEvent(EventType.RESTORE_FROM_BFCACHE, InteractionType.Redirect);
                }
              };
              _a.label = 2;
            case 2:
              _a.trys.push([2, 7, , 8]);
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientInitializeAuthorizationCodeRequest, request.correlationId);
              return [4, this.initializeAuthorizationCodeRequest(validRequest)];
            case 3:
              authCodeRequest = _a.sent();
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, request.correlationId);
              return [4, this.createAuthCodeClient(serverTelemetryManager, validRequest.authority, validRequest.azureCloudOptions)];
            case 4:
              authClient = _a.sent();
              this.logger.verbose("Auth code client created");
              interactionHandler = new RedirectHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.browserCrypto, this.performanceClient);
              return [4, authClient.getAuthCodeUrl(__assign(__assign({}, validRequest), { nativeBroker: NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, request.authenticationScheme) }))];
            case 5:
              navigateUrl = _a.sent();
              redirectStartPage = this.getRedirectStartPage(request.redirectStartPage);
              this.logger.verbosePii("Redirect start page: " + redirectStartPage);
              window.addEventListener("pageshow", handleBackButton);
              return [4, interactionHandler.initiateAuthRequest(navigateUrl, {
                navigationClient: this.navigationClient,
                redirectTimeout: this.config.system.redirectNavigationTimeout,
                redirectStartPage,
                onRedirectNavigate: request.onRedirectNavigate
              })];
            case 6:
              return [2, _a.sent()];
            case 7:
              e_1 = _a.sent();
              if (e_1 instanceof AuthError) {
                e_1.setCorrelationId(this.correlationId);
              }
              window.removeEventListener("pageshow", handleBackButton);
              serverTelemetryManager.cacheFailedRequest(e_1);
              this.browserStorage.cleanRequestByState(validRequest.state);
              throw e_1;
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    RedirectClient2.prototype.handleRedirectPromise = function(hash) {
      return __awaiter(this, void 0, void 0, function() {
        var serverTelemetryManager, responseHash, state2, serverParams, loginRequestUrl, loginRequestUrlNormalized, currentUrlNormalized, handleHashResult, navigationOptions, processHashOnRedirect, homepage, e_2;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.handleRedirectPromise);
              _a.label = 1;
            case 1:
              _a.trys.push([1, 10, , 11]);
              if (!this.browserStorage.isInteractionInProgress(true)) {
                this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
                return [2, null];
              }
              responseHash = this.getRedirectResponseHash(hash || window.location.hash);
              if (!responseHash) {
                this.logger.info("handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache.");
                this.browserStorage.cleanRequestByInteractionType(InteractionType.Redirect);
                return [2, null];
              }
              state2 = void 0;
              try {
                serverParams = UrlString.getDeserializedHash(responseHash);
                state2 = this.validateAndExtractStateFromHash(serverParams, InteractionType.Redirect);
                this.logger.verbose("State extracted from hash");
              } catch (e2) {
                this.logger.info("handleRedirectPromise was unable to extract state due to: " + e2);
                this.browserStorage.cleanRequestByInteractionType(InteractionType.Redirect);
                return [2, null];
              }
              loginRequestUrl = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, true) || Constants.EMPTY_STRING;
              loginRequestUrlNormalized = UrlString.removeHashFromUrl(loginRequestUrl);
              currentUrlNormalized = UrlString.removeHashFromUrl(window.location.href);
              if (!(loginRequestUrlNormalized === currentUrlNormalized && this.config.auth.navigateToLoginRequestUrl))
                return [3, 3];
              this.logger.verbose("Current page is loginRequestUrl, handling hash");
              return [4, this.handleHash(responseHash, state2, serverTelemetryManager)];
            case 2:
              handleHashResult = _a.sent();
              if (loginRequestUrl.indexOf("#") > -1) {
                BrowserUtils.replaceHash(loginRequestUrl);
              }
              return [2, handleHashResult];
            case 3:
              if (!!this.config.auth.navigateToLoginRequestUrl)
                return [3, 4];
              this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash");
              return [2, this.handleHash(responseHash, state2, serverTelemetryManager)];
            case 4:
              if (!(!BrowserUtils.isInIframe() || this.config.system.allowRedirectInIframe))
                return [3, 9];
              this.browserStorage.setTemporaryCache(TemporaryCacheKeys.URL_HASH, responseHash, true);
              navigationOptions = {
                apiId: ApiId.handleRedirectPromise,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: true
              };
              processHashOnRedirect = true;
              if (!(!loginRequestUrl || loginRequestUrl === "null"))
                return [3, 6];
              homepage = BrowserUtils.getHomepage();
              this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, homepage, true);
              this.logger.warning("Unable to get valid login request url from cache, redirecting to home page");
              return [4, this.navigationClient.navigateInternal(homepage, navigationOptions)];
            case 5:
              processHashOnRedirect = _a.sent();
              return [3, 8];
            case 6:
              this.logger.verbose("Navigating to loginRequestUrl: " + loginRequestUrl);
              return [4, this.navigationClient.navigateInternal(loginRequestUrl, navigationOptions)];
            case 7:
              processHashOnRedirect = _a.sent();
              _a.label = 8;
            case 8:
              if (!processHashOnRedirect) {
                return [2, this.handleHash(responseHash, state2, serverTelemetryManager)];
              }
              _a.label = 9;
            case 9:
              return [2, null];
            case 10:
              e_2 = _a.sent();
              if (e_2 instanceof AuthError) {
                e_2.setCorrelationId(this.correlationId);
              }
              serverTelemetryManager.cacheFailedRequest(e_2);
              this.browserStorage.cleanRequestByInteractionType(InteractionType.Redirect);
              throw e_2;
            case 11:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    RedirectClient2.prototype.getRedirectResponseHash = function(hash) {
      this.logger.verbose("getRedirectResponseHash called");
      var isResponseHash = UrlString.hashContainsKnownProperties(hash);
      if (isResponseHash) {
        BrowserUtils.clearHash(window);
        this.logger.verbose("Hash contains known properties, returning response hash");
        return hash;
      }
      var cachedHash = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.URL_HASH, true);
      this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.URL_HASH));
      this.logger.verbose("Hash does not contain known properties, returning cached hash");
      return cachedHash;
    };
    RedirectClient2.prototype.handleHash = function(hash, state2, serverTelemetryManager) {
      return __awaiter(this, void 0, void 0, function() {
        var cachedRequest, serverParams, nativeInteractionClient, userRequestState, currentAuthority, authClient, interactionHandler;
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              cachedRequest = this.browserStorage.getCachedRequest(state2, this.browserCrypto);
              this.logger.verbose("handleHash called, retrieved cached request");
              serverParams = UrlString.getDeserializedHash(hash);
              if (serverParams.accountId) {
                this.logger.verbose("Account id found in hash, calling WAM for token");
                if (!this.nativeMessageHandler) {
                  throw BrowserAuthError.createNativeConnectionNotEstablishedError();
                }
                nativeInteractionClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, this.nativeStorage, cachedRequest.correlationId);
                userRequestState = ProtocolUtils.parseRequestState(this.browserCrypto, state2).userRequestState;
                return [2, nativeInteractionClient.acquireToken(__assign(__assign({}, cachedRequest), {
                  state: userRequestState,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  _this.browserStorage.cleanRequestByState(state2);
                })];
              }
              currentAuthority = this.browserStorage.getCachedAuthority(state2);
              if (!currentAuthority) {
                throw BrowserAuthError.createNoCachedAuthorityError();
              }
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, cachedRequest.correlationId);
              return [4, this.createAuthCodeClient(serverTelemetryManager, currentAuthority)];
            case 1:
              authClient = _a.sent();
              this.logger.verbose("Auth code client created");
              ThrottlingUtils.removeThrottle(this.browserStorage, this.config.auth.clientId, cachedRequest);
              interactionHandler = new RedirectHandler(authClient, this.browserStorage, cachedRequest, this.logger, this.browserCrypto, this.performanceClient);
              return [4, interactionHandler.handleCodeResponseFromHash(hash, state2, authClient.authority, this.networkClient)];
            case 2:
              return [2, _a.sent()];
          }
        });
      });
    };
    RedirectClient2.prototype.logout = function(logoutRequest) {
      return __awaiter(this, void 0, void 0, function() {
        var validLogoutRequest, serverTelemetryManager, navigationOptions, authClient, logoutUri, navigate, e_3;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.logger.verbose("logoutRedirect called");
              validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
              serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.logout);
              _a.label = 1;
            case 1:
              _a.trys.push([1, 10, , 11]);
              this.eventHandler.emitEvent(EventType.LOGOUT_START, InteractionType.Redirect, logoutRequest);
              return [4, this.clearCacheOnLogout(validLogoutRequest.account)];
            case 2:
              _a.sent();
              navigationOptions = {
                apiId: ApiId.logout,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: false
              };
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, validLogoutRequest.correlationId);
              return [4, this.createAuthCodeClient(serverTelemetryManager, logoutRequest && logoutRequest.authority)];
            case 3:
              authClient = _a.sent();
              this.logger.verbose("Auth code client created");
              logoutUri = authClient.getLogoutUri(validLogoutRequest);
              this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Redirect, validLogoutRequest);
              if (!(logoutRequest && typeof logoutRequest.onRedirectNavigate === "function"))
                return [3, 7];
              navigate = logoutRequest.onRedirectNavigate(logoutUri);
              if (!(navigate !== false))
                return [3, 5];
              this.logger.verbose("Logout onRedirectNavigate did not return false, navigating");
              if (!this.browserStorage.getInteractionInProgress()) {
                this.browserStorage.setInteractionInProgress(true);
              }
              return [4, this.navigationClient.navigateExternal(logoutUri, navigationOptions)];
            case 4:
              _a.sent();
              return [
                2
                /*return*/
              ];
            case 5:
              this.browserStorage.setInteractionInProgress(false);
              this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation");
              _a.label = 6;
            case 6:
              return [3, 9];
            case 7:
              if (!this.browserStorage.getInteractionInProgress()) {
                this.browserStorage.setInteractionInProgress(true);
              }
              return [4, this.navigationClient.navigateExternal(logoutUri, navigationOptions)];
            case 8:
              _a.sent();
              return [
                2
                /*return*/
              ];
            case 9:
              return [3, 11];
            case 10:
              e_3 = _a.sent();
              if (e_3 instanceof AuthError) {
                e_3.setCorrelationId(this.correlationId);
              }
              serverTelemetryManager.cacheFailedRequest(e_3);
              this.eventHandler.emitEvent(EventType.LOGOUT_FAILURE, InteractionType.Redirect, null, e_3);
              this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Redirect);
              throw e_3;
            case 11:
              this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Redirect);
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    RedirectClient2.prototype.getRedirectStartPage = function(requestStartPage) {
      var redirectStartPage = requestStartPage || window.location.href;
      return UrlString.getAbsoluteUrl(redirectStartPage, BrowserUtils.getCurrentUri());
    };
    return RedirectClient2;
  }(StandardInteractionClient)
);

// node_modules/@azure/msal-browser/dist/interaction_client/PopupClient.js
var PopupClient = (
  /** @class */
  function(_super) {
    __extends(PopupClient2, _super);
    function PopupClient2(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeStorageImpl, nativeMessageHandler, correlationId) {
      var _this = _super.call(this, config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) || this;
      _this.unloadWindow = _this.unloadWindow.bind(_this);
      _this.nativeStorage = nativeStorageImpl;
      return _this;
    }
    PopupClient2.prototype.acquireToken = function(request) {
      try {
        var popupName = this.generatePopupName(request.scopes || OIDC_DEFAULT_SCOPES, request.authority || this.config.auth.authority);
        var popupWindowAttributes = request.popupWindowAttributes || {};
        if (this.config.system.asyncPopups) {
          this.logger.verbose("asyncPopups set to true, acquiring token");
          return this.acquireTokenPopupAsync(request, popupName, popupWindowAttributes);
        } else {
          this.logger.verbose("asyncPopup set to false, opening popup before acquiring token");
          var popup = this.openSizedPopup("about:blank", popupName, popupWindowAttributes);
          return this.acquireTokenPopupAsync(request, popupName, popupWindowAttributes, popup);
        }
      } catch (e2) {
        return Promise.reject(e2);
      }
    };
    PopupClient2.prototype.logout = function(logoutRequest) {
      try {
        this.logger.verbose("logoutPopup called");
        var validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
        var popupName = this.generateLogoutPopupName(validLogoutRequest);
        var authority = logoutRequest && logoutRequest.authority;
        var mainWindowRedirectUri = logoutRequest && logoutRequest.mainWindowRedirectUri;
        var popupWindowAttributes = (logoutRequest === null || logoutRequest === void 0 ? void 0 : logoutRequest.popupWindowAttributes) || {};
        if (this.config.system.asyncPopups) {
          this.logger.verbose("asyncPopups set to true");
          return this.logoutPopupAsync(validLogoutRequest, popupName, popupWindowAttributes, authority, void 0, mainWindowRedirectUri);
        } else {
          this.logger.verbose("asyncPopup set to false, opening popup");
          var popup = this.openSizedPopup("about:blank", popupName, popupWindowAttributes);
          return this.logoutPopupAsync(validLogoutRequest, popupName, popupWindowAttributes, authority, popup, mainWindowRedirectUri);
        }
      } catch (e2) {
        return Promise.reject(e2);
      }
    };
    PopupClient2.prototype.acquireTokenPopupAsync = function(request, popupName, popupWindowAttributes, popup) {
      return __awaiter(this, void 0, void 0, function() {
        var serverTelemetryManager, validRequest, authCodeRequest, authClient, isNativeBroker, fetchNativeAccountIdMeasurement, navigateUrl, interactionHandler, popupParameters, popupWindow, hash, serverParams, state_1, nativeInteractionClient, userRequestState, result, e_1;
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.logger.verbose("acquireTokenPopupAsync called");
              serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenPopup);
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, request.correlationId);
              return [4, this.initializeAuthorizationRequest(request, InteractionType.Popup)];
            case 1:
              validRequest = _a.sent();
              this.browserStorage.updateCacheEntries(validRequest.state, validRequest.nonce, validRequest.authority, validRequest.loginHint || Constants.EMPTY_STRING, validRequest.account || null);
              _a.label = 2;
            case 2:
              _a.trys.push([2, 8, , 9]);
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientInitializeAuthorizationCodeRequest, request.correlationId);
              return [4, this.initializeAuthorizationCodeRequest(validRequest)];
            case 3:
              authCodeRequest = _a.sent();
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, request.correlationId);
              return [4, this.createAuthCodeClient(serverTelemetryManager, validRequest.authority, validRequest.azureCloudOptions)];
            case 4:
              authClient = _a.sent();
              this.logger.verbose("Auth code client created");
              isNativeBroker = NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, request.authenticationScheme);
              fetchNativeAccountIdMeasurement = void 0;
              if (isNativeBroker) {
                fetchNativeAccountIdMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.FetchAccountIdWithNativeBroker, request.correlationId);
              }
              return [4, authClient.getAuthCodeUrl(__assign(__assign({}, validRequest), { nativeBroker: isNativeBroker }))];
            case 5:
              navigateUrl = _a.sent();
              interactionHandler = new InteractionHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.performanceClient);
              popupParameters = {
                popup,
                popupName,
                popupWindowAttributes
              };
              popupWindow = this.initiateAuthRequest(navigateUrl, popupParameters);
              this.eventHandler.emitEvent(EventType.POPUP_OPENED, InteractionType.Popup, { popupWindow }, null);
              return [4, this.monitorPopupForHash(popupWindow)];
            case 6:
              hash = _a.sent();
              serverParams = UrlString.getDeserializedHash(hash);
              state_1 = this.validateAndExtractStateFromHash(serverParams, InteractionType.Popup, validRequest.correlationId);
              ThrottlingUtils.removeThrottle(this.browserStorage, this.config.auth.clientId, authCodeRequest);
              if (serverParams.accountId) {
                this.logger.verbose("Account id found in hash, calling WAM for token");
                if (fetchNativeAccountIdMeasurement) {
                  fetchNativeAccountIdMeasurement.endMeasurement({
                    success: true,
                    isNativeBroker: true
                  });
                }
                if (!this.nativeMessageHandler) {
                  throw BrowserAuthError.createNativeConnectionNotEstablishedError();
                }
                nativeInteractionClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, this.nativeStorage, validRequest.correlationId);
                userRequestState = ProtocolUtils.parseRequestState(this.browserCrypto, state_1).userRequestState;
                return [2, nativeInteractionClient.acquireToken(__assign(__assign({}, validRequest), {
                  state: userRequestState,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  _this.browserStorage.cleanRequestByState(state_1);
                })];
              }
              return [4, interactionHandler.handleCodeResponseFromHash(hash, state_1, authClient.authority, this.networkClient)];
            case 7:
              result = _a.sent();
              return [2, result];
            case 8:
              e_1 = _a.sent();
              if (popup) {
                popup.close();
              }
              if (e_1 instanceof AuthError) {
                e_1.setCorrelationId(this.correlationId);
              }
              serverTelemetryManager.cacheFailedRequest(e_1);
              this.browserStorage.cleanRequestByState(validRequest.state);
              throw e_1;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    PopupClient2.prototype.logoutPopupAsync = function(validRequest, popupName, popupWindowAttributes, requestAuthority, popup, mainWindowRedirectUri) {
      return __awaiter(this, void 0, void 0, function() {
        var serverTelemetryManager, authClient, logoutUri, popupWindow, navigationOptions, absoluteUrl, e_2;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.logger.verbose("logoutPopupAsync called");
              this.eventHandler.emitEvent(EventType.LOGOUT_START, InteractionType.Popup, validRequest);
              serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.logoutPopup);
              _a.label = 1;
            case 1:
              _a.trys.push([1, 5, , 6]);
              return [4, this.clearCacheOnLogout(validRequest.account)];
            case 2:
              _a.sent();
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, validRequest.correlationId);
              return [4, this.createAuthCodeClient(serverTelemetryManager, requestAuthority)];
            case 3:
              authClient = _a.sent();
              this.logger.verbose("Auth code client created");
              logoutUri = authClient.getLogoutUri(validRequest);
              this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Popup, validRequest);
              popupWindow = this.openPopup(logoutUri, { popupName, popupWindowAttributes, popup });
              this.eventHandler.emitEvent(EventType.POPUP_OPENED, InteractionType.Popup, { popupWindow }, null);
              return [4, this.waitForLogoutPopup(popupWindow)];
            case 4:
              _a.sent();
              if (mainWindowRedirectUri) {
                navigationOptions = {
                  apiId: ApiId.logoutPopup,
                  timeout: this.config.system.redirectNavigationTimeout,
                  noHistory: false
                };
                absoluteUrl = UrlString.getAbsoluteUrl(mainWindowRedirectUri, BrowserUtils.getCurrentUri());
                this.logger.verbose("Redirecting main window to url specified in the request");
                this.logger.verbosePii("Redirecting main window to: " + absoluteUrl);
                this.navigationClient.navigateInternal(absoluteUrl, navigationOptions);
              } else {
                this.logger.verbose("No main window navigation requested");
              }
              return [3, 6];
            case 5:
              e_2 = _a.sent();
              if (popup) {
                popup.close();
              }
              if (e_2 instanceof AuthError) {
                e_2.setCorrelationId(this.correlationId);
              }
              this.browserStorage.setInteractionInProgress(false);
              this.eventHandler.emitEvent(EventType.LOGOUT_FAILURE, InteractionType.Popup, null, e_2);
              this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Popup);
              serverTelemetryManager.cacheFailedRequest(e_2);
              throw e_2;
            case 6:
              this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Popup);
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    PopupClient2.prototype.initiateAuthRequest = function(requestUrl, params) {
      if (!StringUtils.isEmpty(requestUrl)) {
        this.logger.infoPii("Navigate to: " + requestUrl);
        return this.openPopup(requestUrl, params);
      } else {
        this.logger.error("Navigate url is empty");
        throw BrowserAuthError.createEmptyNavigationUriError();
      }
    };
    PopupClient2.prototype.monitorPopupForHash = function(popupWindow) {
      var _this = this;
      return new Promise(function(resolve, reject) {
        var maxTicks = _this.config.system.windowHashTimeout / _this.config.system.pollIntervalMilliseconds;
        var ticks = 0;
        _this.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
        var intervalId = setInterval(function() {
          if (popupWindow.closed) {
            _this.logger.error("PopupHandler.monitorPopupForHash - window closed");
            _this.cleanPopup();
            clearInterval(intervalId);
            reject(BrowserAuthError.createUserCancelledError());
            return;
          }
          var href = Constants.EMPTY_STRING;
          var hash = Constants.EMPTY_STRING;
          try {
            href = popupWindow.location.href;
            hash = popupWindow.location.hash;
          } catch (e2) {
          }
          if (StringUtils.isEmpty(href) || href === "about:blank") {
            return;
          }
          _this.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller");
          ticks++;
          if (hash) {
            _this.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url");
            clearInterval(intervalId);
            _this.cleanPopup(popupWindow);
            if (UrlString.hashContainsKnownProperties(hash)) {
              _this.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning.");
              resolve(hash);
            } else {
              _this.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely.");
              _this.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + hash);
              reject(BrowserAuthError.createHashDoesNotContainKnownPropertiesError());
            }
          } else if (ticks > maxTicks) {
            _this.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out");
            clearInterval(intervalId);
            reject(BrowserAuthError.createMonitorPopupTimeoutError());
          }
        }, _this.config.system.pollIntervalMilliseconds);
      });
    };
    PopupClient2.prototype.waitForLogoutPopup = function(popupWindow) {
      var _this = this;
      return new Promise(function(resolve) {
        _this.logger.verbose("PopupHandler.waitForLogoutPopup - polling started");
        var intervalId = setInterval(function() {
          if (popupWindow.closed) {
            _this.logger.error("PopupHandler.waitForLogoutPopup - window closed");
            _this.cleanPopup();
            clearInterval(intervalId);
            resolve();
          }
          var href = Constants.EMPTY_STRING;
          try {
            href = popupWindow.location.href;
          } catch (e2) {
          }
          if (StringUtils.isEmpty(href) || href === "about:blank") {
            return;
          }
          _this.logger.verbose("PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing.");
          clearInterval(intervalId);
          _this.cleanPopup(popupWindow);
          resolve();
        }, _this.config.system.pollIntervalMilliseconds);
      });
    };
    PopupClient2.prototype.openPopup = function(urlNavigate, popupParams) {
      try {
        var popupWindow = void 0;
        if (popupParams.popup) {
          popupWindow = popupParams.popup;
          this.logger.verbosePii("Navigating popup window to: " + urlNavigate);
          popupWindow.location.assign(urlNavigate);
        } else if (typeof popupParams.popup === "undefined") {
          this.logger.verbosePii("Opening popup window to: " + urlNavigate);
          popupWindow = this.openSizedPopup(urlNavigate, popupParams.popupName, popupParams.popupWindowAttributes);
        }
        if (!popupWindow) {
          throw BrowserAuthError.createEmptyWindowCreatedError();
        }
        if (popupWindow.focus) {
          popupWindow.focus();
        }
        this.currentWindow = popupWindow;
        window.addEventListener("beforeunload", this.unloadWindow);
        return popupWindow;
      } catch (e2) {
        this.logger.error("error opening popup " + e2.message);
        this.browserStorage.setInteractionInProgress(false);
        throw BrowserAuthError.createPopupWindowError(e2.toString());
      }
    };
    PopupClient2.prototype.openSizedPopup = function(urlNavigate, popupName, popupWindowAttributes) {
      var _a, _b, _c, _d;
      var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
      var winTop = window.screenTop ? window.screenTop : window.screenY;
      var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      var width = (_a = popupWindowAttributes.popupSize) === null || _a === void 0 ? void 0 : _a.width;
      var height = (_b = popupWindowAttributes.popupSize) === null || _b === void 0 ? void 0 : _b.height;
      var top = (_c = popupWindowAttributes.popupPosition) === null || _c === void 0 ? void 0 : _c.top;
      var left = (_d = popupWindowAttributes.popupPosition) === null || _d === void 0 ? void 0 : _d.left;
      if (!width || width < 0 || width > winWidth) {
        this.logger.verbose("Default popup window width used. Window width not configured or invalid.");
        width = BrowserConstants.POPUP_WIDTH;
      }
      if (!height || height < 0 || height > winHeight) {
        this.logger.verbose("Default popup window height used. Window height not configured or invalid.");
        height = BrowserConstants.POPUP_HEIGHT;
      }
      if (!top || top < 0 || top > winHeight) {
        this.logger.verbose("Default popup window top position used. Window top not configured or invalid.");
        top = Math.max(0, winHeight / 2 - BrowserConstants.POPUP_HEIGHT / 2 + winTop);
      }
      if (!left || left < 0 || left > winWidth) {
        this.logger.verbose("Default popup window left position used. Window left not configured or invalid.");
        left = Math.max(0, winWidth / 2 - BrowserConstants.POPUP_WIDTH / 2 + winLeft);
      }
      return window.open(urlNavigate, popupName, "width=" + width + ", height=" + height + ", top=" + top + ", left=" + left + ", scrollbars=yes");
    };
    PopupClient2.prototype.unloadWindow = function(e2) {
      this.browserStorage.cleanRequestByInteractionType(InteractionType.Popup);
      if (this.currentWindow) {
        this.currentWindow.close();
      }
      e2.preventDefault();
    };
    PopupClient2.prototype.cleanPopup = function(popupWindow) {
      if (popupWindow) {
        popupWindow.close();
      }
      window.removeEventListener("beforeunload", this.unloadWindow);
      this.browserStorage.setInteractionInProgress(false);
    };
    PopupClient2.prototype.generatePopupName = function(scopes, authority) {
      return BrowserConstants.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + scopes.join("-") + "." + authority + "." + this.correlationId;
    };
    PopupClient2.prototype.generateLogoutPopupName = function(request) {
      var homeAccountId = request.account && request.account.homeAccountId;
      return BrowserConstants.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + homeAccountId + "." + this.correlationId;
    };
    return PopupClient2;
  }(StandardInteractionClient)
);

// node_modules/@azure/msal-browser/dist/navigation/NavigationClient.js
var NavigationClient = (
  /** @class */
  function() {
    function NavigationClient2() {
    }
    NavigationClient2.prototype.navigateInternal = function(url, options) {
      return NavigationClient2.defaultNavigateWindow(url, options);
    };
    NavigationClient2.prototype.navigateExternal = function(url, options) {
      return NavigationClient2.defaultNavigateWindow(url, options);
    };
    NavigationClient2.defaultNavigateWindow = function(url, options) {
      if (options.noHistory) {
        window.location.replace(url);
      } else {
        window.location.assign(url);
      }
      return new Promise(function(resolve) {
        setTimeout(function() {
          resolve(true);
        }, options.timeout);
      });
    };
    return NavigationClient2;
  }()
);

// node_modules/@azure/msal-browser/dist/config/Configuration.js
var DEFAULT_POPUP_TIMEOUT_MS = 6e4;
var DEFAULT_IFRAME_TIMEOUT_MS = 6e3;
var DEFAULT_REDIRECT_TIMEOUT_MS = 3e4;
var DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS = 2e3;
function buildConfiguration(_a, isBrowserEnvironment) {
  var userInputAuth = _a.auth, userInputCache = _a.cache, userInputSystem = _a.system, userInputTelemetry = _a.telemetry;
  var DEFAULT_AUTH_OPTIONS = {
    clientId: Constants.EMPTY_STRING,
    authority: "" + Constants.DEFAULT_AUTHORITY,
    knownAuthorities: [],
    cloudDiscoveryMetadata: Constants.EMPTY_STRING,
    authorityMetadata: Constants.EMPTY_STRING,
    redirectUri: Constants.EMPTY_STRING,
    postLogoutRedirectUri: Constants.EMPTY_STRING,
    navigateToLoginRequestUrl: true,
    clientCapabilities: [],
    protocolMode: ProtocolMode.AAD,
    azureCloudOptions: {
      azureCloudInstance: AzureCloudInstance.None,
      tenant: Constants.EMPTY_STRING
    },
    skipAuthorityMetadataCache: false
  };
  var DEFAULT_CACHE_OPTIONS = {
    cacheLocation: BrowserCacheLocation.SessionStorage,
    temporaryCacheLocation: BrowserCacheLocation.SessionStorage,
    storeAuthStateInCookie: false,
    secureCookies: false,
    // Default cache migration to true if cache location is localStorage since entries are preserved across tabs/windows. Migration has little to no benefit in sessionStorage and memoryStorage
    cacheMigrationEnabled: userInputCache && userInputCache.cacheLocation === BrowserCacheLocation.LocalStorage ? true : false
  };
  var DEFAULT_LOGGER_OPTIONS = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    loggerCallback: function() {
    },
    logLevel: LogLevel.Info,
    piiLoggingEnabled: false
  };
  var DEFAULT_BROWSER_SYSTEM_OPTIONS = __assign(__assign({}, DEFAULT_SYSTEM_OPTIONS), {
    loggerOptions: DEFAULT_LOGGER_OPTIONS,
    networkClient: isBrowserEnvironment ? BrowserUtils.getBrowserNetworkClient() : StubbedNetworkModule,
    navigationClient: new NavigationClient(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: (userInputSystem === null || userInputSystem === void 0 ? void 0 : userInputSystem.loadFrameTimeout) || DEFAULT_POPUP_TIMEOUT_MS,
    iframeHashTimeout: (userInputSystem === null || userInputSystem === void 0 ? void 0 : userInputSystem.loadFrameTimeout) || DEFAULT_IFRAME_TIMEOUT_MS,
    navigateFrameWait: isBrowserEnvironment && BrowserUtils.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: DEFAULT_REDIRECT_TIMEOUT_MS,
    asyncPopups: false,
    allowRedirectInIframe: false,
    allowNativeBroker: false,
    nativeBrokerHandshakeTimeout: (userInputSystem === null || userInputSystem === void 0 ? void 0 : userInputSystem.nativeBrokerHandshakeTimeout) || DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS,
    pollIntervalMilliseconds: BrowserConstants.DEFAULT_POLL_INTERVAL_MS,
    cryptoOptions: {
      useMsrCrypto: false,
      entropy: void 0
    }
  });
  var providedSystemOptions = __assign(__assign({}, userInputSystem), { loggerOptions: (userInputSystem === null || userInputSystem === void 0 ? void 0 : userInputSystem.loggerOptions) || DEFAULT_LOGGER_OPTIONS });
  var DEFAULT_TELEMETRY_OPTIONS2 = {
    application: {
      appName: Constants.EMPTY_STRING,
      appVersion: Constants.EMPTY_STRING
    }
  };
  var overlayedConfig = {
    auth: __assign(__assign({}, DEFAULT_AUTH_OPTIONS), userInputAuth),
    cache: __assign(__assign({}, DEFAULT_CACHE_OPTIONS), userInputCache),
    system: __assign(__assign({}, DEFAULT_BROWSER_SYSTEM_OPTIONS), providedSystemOptions),
    telemetry: __assign(__assign({}, DEFAULT_TELEMETRY_OPTIONS2), userInputTelemetry)
  };
  return overlayedConfig;
}

// node_modules/@azure/msal-browser/dist/interaction_handler/SilentHandler.js
var SilentHandler = (
  /** @class */
  function(_super) {
    __extends(SilentHandler2, _super);
    function SilentHandler2(authCodeModule, storageImpl, authCodeRequest, logger, systemOptions, performanceClient) {
      var _this = _super.call(this, authCodeModule, storageImpl, authCodeRequest, logger, performanceClient) || this;
      _this.navigateFrameWait = systemOptions.navigateFrameWait;
      _this.pollIntervalMilliseconds = systemOptions.pollIntervalMilliseconds;
      return _this;
    }
    SilentHandler2.prototype.initiateAuthRequest = function(requestUrl) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentHandlerInitiateAuthRequest, this.authCodeRequest.correlationId);
              if (StringUtils.isEmpty(requestUrl)) {
                this.logger.info("Navigate url is empty");
                throw BrowserAuthError.createEmptyNavigationUriError();
              }
              if (!this.navigateFrameWait)
                return [3, 2];
              this.performanceClient.setPreQueueTime(PerformanceEvents.SilentHandlerLoadFrame, this.authCodeRequest.correlationId);
              return [4, this.loadFrame(requestUrl)];
            case 1:
              return [2, _a.sent()];
            case 2:
              return [2, this.loadFrameSync(requestUrl)];
          }
        });
      });
    };
    SilentHandler2.prototype.monitorIframeForHash = function(iframe, timeout) {
      var _this = this;
      this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentHandlerMonitorIframeForHash, this.authCodeRequest.correlationId);
      return new Promise(function(resolve, reject) {
        if (timeout < DEFAULT_IFRAME_TIMEOUT_MS) {
          _this.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + timeout + "ms) than the default (" + DEFAULT_IFRAME_TIMEOUT_MS + "ms). This may result in timeouts.");
        }
        var nowMark = window.performance.now();
        var timeoutMark = nowMark + timeout;
        var intervalId = setInterval(function() {
          if (window.performance.now() > timeoutMark) {
            _this.removeHiddenIframe(iframe);
            clearInterval(intervalId);
            reject(BrowserAuthError.createMonitorIframeTimeoutError());
            return;
          }
          var href = Constants.EMPTY_STRING;
          var contentWindow = iframe.contentWindow;
          try {
            href = contentWindow ? contentWindow.location.href : Constants.EMPTY_STRING;
          } catch (e2) {
          }
          if (StringUtils.isEmpty(href)) {
            return;
          }
          var contentHash = contentWindow ? contentWindow.location.hash : Constants.EMPTY_STRING;
          if (UrlString.hashContainsKnownProperties(contentHash)) {
            _this.removeHiddenIframe(iframe);
            clearInterval(intervalId);
            resolve(contentHash);
            return;
          }
        }, _this.pollIntervalMilliseconds);
      });
    };
    SilentHandler2.prototype.loadFrame = function(urlNavigate) {
      var _this = this;
      this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentHandlerLoadFrame, this.authCodeRequest.correlationId);
      return new Promise(function(resolve, reject) {
        var frameHandle = _this.createHiddenIframe();
        setTimeout(function() {
          if (!frameHandle) {
            reject("Unable to load iframe");
            return;
          }
          frameHandle.src = urlNavigate;
          resolve(frameHandle);
        }, _this.navigateFrameWait);
      });
    };
    SilentHandler2.prototype.loadFrameSync = function(urlNavigate) {
      var frameHandle = this.createHiddenIframe();
      frameHandle.src = urlNavigate;
      return frameHandle;
    };
    SilentHandler2.prototype.createHiddenIframe = function() {
      var authFrame = document.createElement("iframe");
      authFrame.style.visibility = "hidden";
      authFrame.style.position = "absolute";
      authFrame.style.width = authFrame.style.height = "0";
      authFrame.style.border = "0";
      authFrame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
      document.getElementsByTagName("body")[0].appendChild(authFrame);
      return authFrame;
    };
    SilentHandler2.prototype.removeHiddenIframe = function(iframe) {
      if (document.body === iframe.parentNode) {
        document.body.removeChild(iframe);
      }
    };
    return SilentHandler2;
  }(InteractionHandler)
);

// node_modules/@azure/msal-browser/dist/interaction_client/SilentIframeClient.js
var SilentIframeClient = (
  /** @class */
  function(_super) {
    __extends(SilentIframeClient2, _super);
    function SilentIframeClient2(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, nativeStorageImpl, nativeMessageHandler, correlationId) {
      var _this = _super.call(this, config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) || this;
      _this.apiId = apiId;
      _this.nativeStorage = nativeStorageImpl;
      return _this;
    }
    SilentIframeClient2.prototype.acquireToken = function(request) {
      return __awaiter(this, void 0, void 0, function() {
        var acquireTokenMeasurement, silentRequest, serverTelemetryManager, authClient, e_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentIframeClientAcquireToken, request.correlationId);
              this.logger.verbose("acquireTokenByIframe called");
              acquireTokenMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SilentIframeClientAcquireToken, request.correlationId);
              if (StringUtils.isEmpty(request.loginHint) && StringUtils.isEmpty(request.sid) && (!request.account || StringUtils.isEmpty(request.account.username))) {
                this.logger.warning("No user hint provided. The authorization server may need more information to complete this request.");
              }
              if (request.prompt && request.prompt !== PromptValue.NONE && request.prompt !== PromptValue.NO_SESSION) {
                acquireTokenMeasurement.endMeasurement({
                  success: false
                });
                throw BrowserAuthError.createSilentPromptValueError(request.prompt);
              }
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, request.correlationId);
              return [4, this.initializeAuthorizationRequest(__assign(__assign({}, request), { prompt: request.prompt || PromptValue.NONE }), InteractionType.Silent)];
            case 1:
              silentRequest = _a.sent();
              this.browserStorage.updateCacheEntries(silentRequest.state, silentRequest.nonce, silentRequest.authority, silentRequest.loginHint || Constants.EMPTY_STRING, silentRequest.account || null);
              serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
              _a.label = 2;
            case 2:
              _a.trys.push([2, 5, , 6]);
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientCreateAuthCodeClient, request.correlationId);
              return [4, this.createAuthCodeClient(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions)];
            case 3:
              authClient = _a.sent();
              this.logger.verbose("Auth code client created");
              this.performanceClient.setPreQueueTime(PerformanceEvents.SilentIframeClientTokenHelper, request.correlationId);
              return [4, this.silentTokenHelper(authClient, silentRequest).then(function(result) {
                acquireTokenMeasurement.endMeasurement({
                  success: true,
                  fromCache: false,
                  requestId: result.requestId
                });
                return result;
              })];
            case 4:
              return [2, _a.sent()];
            case 5:
              e_1 = _a.sent();
              if (e_1 instanceof AuthError) {
                e_1.setCorrelationId(this.correlationId);
              }
              serverTelemetryManager.cacheFailedRequest(e_1);
              this.browserStorage.cleanRequestByState(silentRequest.state);
              acquireTokenMeasurement.endMeasurement({
                errorCode: e_1 instanceof AuthError && e_1.errorCode || void 0,
                subErrorCode: e_1 instanceof AuthError && e_1.subError || void 0,
                success: false
              });
              throw e_1;
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    SilentIframeClient2.prototype.logout = function() {
      return Promise.reject(BrowserAuthError.createSilentLogoutUnsupportedError());
    };
    SilentIframeClient2.prototype.silentTokenHelper = function(authClient, silentRequest) {
      return __awaiter(this, void 0, void 0, function() {
        var authCodeRequest, navigateUrl, silentHandler, msalFrame, hash, serverParams, state2, nativeInteractionClient, userRequestState;
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentIframeClientTokenHelper, silentRequest.correlationId);
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientInitializeAuthorizationCodeRequest, silentRequest.correlationId);
              return [4, this.initializeAuthorizationCodeRequest(silentRequest)];
            case 1:
              authCodeRequest = _a.sent();
              this.performanceClient.setPreQueueTime(PerformanceEvents.GetAuthCodeUrl, silentRequest.correlationId);
              return [4, authClient.getAuthCodeUrl(__assign(__assign({}, silentRequest), { nativeBroker: NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, silentRequest.authenticationScheme) }))];
            case 2:
              navigateUrl = _a.sent();
              silentHandler = new SilentHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.config.system, this.performanceClient);
              this.performanceClient.setPreQueueTime(PerformanceEvents.SilentHandlerInitiateAuthRequest, silentRequest.correlationId);
              return [4, silentHandler.initiateAuthRequest(navigateUrl)];
            case 3:
              msalFrame = _a.sent();
              this.performanceClient.setPreQueueTime(PerformanceEvents.SilentHandlerMonitorIframeForHash, silentRequest.correlationId);
              return [4, silentHandler.monitorIframeForHash(msalFrame, this.config.system.iframeHashTimeout)];
            case 4:
              hash = _a.sent();
              serverParams = UrlString.getDeserializedHash(hash);
              state2 = this.validateAndExtractStateFromHash(serverParams, InteractionType.Silent, authCodeRequest.correlationId);
              if (serverParams.accountId) {
                this.logger.verbose("Account id found in hash, calling WAM for token");
                if (!this.nativeMessageHandler) {
                  throw BrowserAuthError.createNativeConnectionNotEstablishedError();
                }
                nativeInteractionClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, this.browserStorage, this.correlationId);
                userRequestState = ProtocolUtils.parseRequestState(this.browserCrypto, state2).userRequestState;
                return [2, nativeInteractionClient.acquireToken(__assign(__assign({}, silentRequest), { state: userRequestState, prompt: silentRequest.prompt || PromptValue.NONE })).finally(function() {
                  _this.browserStorage.cleanRequestByState(state2);
                })];
              }
              this.performanceClient.setPreQueueTime(PerformanceEvents.HandleCodeResponseFromHash, silentRequest.correlationId);
              return [2, silentHandler.handleCodeResponseFromHash(hash, state2, authClient.authority, this.networkClient)];
          }
        });
      });
    };
    return SilentIframeClient2;
  }(StandardInteractionClient)
);

// node_modules/@azure/msal-browser/dist/interaction_client/SilentRefreshClient.js
var SilentRefreshClient = (
  /** @class */
  function(_super) {
    __extends(SilentRefreshClient2, _super);
    function SilentRefreshClient2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    SilentRefreshClient2.prototype.acquireToken = function(request) {
      return __awaiter(this, void 0, void 0, function() {
        var silentRequest, _a, acquireTokenMeasurement, serverTelemetryManager, refreshTokenClient;
        var _this = this;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.SilentRefreshClientAcquireToken, request.correlationId);
              this.performanceClient.setPreQueueTime(PerformanceEvents.InitializeBaseRequest, request.correlationId);
              _a = [__assign({}, request)];
              return [4, this.initializeBaseRequest(request, request.account)];
            case 1:
              silentRequest = __assign.apply(void 0, _a.concat([_b.sent()]));
              acquireTokenMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SilentRefreshClientAcquireToken, silentRequest.correlationId);
              serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow);
              return [4, this.createRefreshTokenClient(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions)];
            case 2:
              refreshTokenClient = _b.sent();
              this.logger.verbose("Refresh token client created");
              this.performanceClient.setPreQueueTime(PerformanceEvents.RefreshTokenClientAcquireTokenByRefreshToken, request.correlationId);
              return [2, refreshTokenClient.acquireTokenByRefreshToken(silentRequest).then(function(result) {
                acquireTokenMeasurement.endMeasurement({
                  success: true,
                  fromCache: result.fromCache,
                  requestId: result.requestId
                });
                return result;
              }).catch(function(e2) {
                if (e2 instanceof AuthError) {
                  e2.setCorrelationId(_this.correlationId);
                }
                serverTelemetryManager.cacheFailedRequest(e2);
                acquireTokenMeasurement.endMeasurement({
                  errorCode: e2.errorCode,
                  subErrorCode: e2.subError,
                  success: false
                });
                throw e2;
              })];
          }
        });
      });
    };
    SilentRefreshClient2.prototype.logout = function() {
      return Promise.reject(BrowserAuthError.createSilentLogoutUnsupportedError());
    };
    SilentRefreshClient2.prototype.createRefreshTokenClient = function(serverTelemetryManager, authorityUrl, azureCloudOptions) {
      return __awaiter(this, void 0, void 0, function() {
        var clientConfig;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientGetClientConfiguration, this.correlationId);
              return [4, this.getClientConfiguration(serverTelemetryManager, authorityUrl, azureCloudOptions)];
            case 1:
              clientConfig = _a.sent();
              return [2, new RefreshTokenClient(clientConfig, this.performanceClient)];
          }
        });
      });
    };
    return SilentRefreshClient2;
  }(StandardInteractionClient)
);

// node_modules/@azure/msal-browser/dist/event/EventHandler.js
var EventHandler = (
  /** @class */
  function() {
    function EventHandler2(logger, browserCrypto) {
      this.eventCallbacks = /* @__PURE__ */ new Map();
      this.logger = logger;
      this.browserCrypto = browserCrypto;
      this.listeningToStorageEvents = false;
      this.handleAccountCacheChange = this.handleAccountCacheChange.bind(this);
    }
    EventHandler2.prototype.addEventCallback = function(callback) {
      if (typeof window !== "undefined") {
        var callbackId = this.browserCrypto.createNewGuid();
        this.eventCallbacks.set(callbackId, callback);
        this.logger.verbose("Event callback registered with id: " + callbackId);
        return callbackId;
      }
      return null;
    };
    EventHandler2.prototype.removeEventCallback = function(callbackId) {
      this.eventCallbacks.delete(callbackId);
      this.logger.verbose("Event callback " + callbackId + " removed.");
    };
    EventHandler2.prototype.enableAccountStorageEvents = function() {
      if (typeof window === "undefined") {
        return;
      }
      if (!this.listeningToStorageEvents) {
        this.logger.verbose("Adding account storage listener.");
        this.listeningToStorageEvents = true;
        window.addEventListener("storage", this.handleAccountCacheChange);
      } else {
        this.logger.verbose("Account storage listener already registered.");
      }
    };
    EventHandler2.prototype.disableAccountStorageEvents = function() {
      if (typeof window === "undefined") {
        return;
      }
      if (this.listeningToStorageEvents) {
        this.logger.verbose("Removing account storage listener.");
        window.removeEventListener("storage", this.handleAccountCacheChange);
        this.listeningToStorageEvents = false;
      } else {
        this.logger.verbose("No account storage listener registered.");
      }
    };
    EventHandler2.prototype.emitEvent = function(eventType, interactionType, payload, error) {
      var _this = this;
      if (typeof window !== "undefined") {
        var message_1 = {
          eventType,
          interactionType: interactionType || null,
          payload: payload || null,
          error: error || null,
          timestamp: Date.now()
        };
        this.logger.info("Emitting event: " + eventType);
        this.eventCallbacks.forEach(function(callback, callbackId) {
          _this.logger.verbose("Emitting event to callback " + callbackId + ": " + eventType);
          callback.apply(null, [message_1]);
        });
      }
    };
    EventHandler2.prototype.handleAccountCacheChange = function(e2) {
      try {
        var cacheValue = e2.newValue || e2.oldValue;
        if (!cacheValue) {
          return;
        }
        var parsedValue = JSON.parse(cacheValue);
        if (typeof parsedValue !== "object" || !AccountEntity.isAccountEntity(parsedValue)) {
          return;
        }
        var accountEntity = CacheManager.toObject(new AccountEntity(), parsedValue);
        var accountInfo = accountEntity.getAccountInfo();
        if (!e2.oldValue && e2.newValue) {
          this.logger.info("Account was added to cache in a different window");
          this.emitEvent(EventType.ACCOUNT_ADDED, void 0, accountInfo);
        } else if (!e2.newValue && e2.oldValue) {
          this.logger.info("Account was removed from cache in a different window");
          this.emitEvent(EventType.ACCOUNT_REMOVED, void 0, accountInfo);
        }
      } catch (e3) {
        return;
      }
    };
    return EventHandler2;
  }()
);

// node_modules/@azure/msal-browser/dist/utils/MathUtils.js
var MathUtils = (
  /** @class */
  function() {
    function MathUtils2() {
    }
    MathUtils2.decimalToHex = function(num) {
      var hex = num.toString(16);
      while (hex.length < 2) {
        hex = "0" + hex;
      }
      return hex;
    };
    return MathUtils2;
  }()
);

// node_modules/@azure/msal-browser/dist/crypto/GuidGenerator.js
var GuidGenerator = (
  /** @class */
  function() {
    function GuidGenerator2(cryptoObj) {
      this.cryptoObj = cryptoObj;
    }
    GuidGenerator2.prototype.generateGuid = function() {
      try {
        var buffer = new Uint8Array(16);
        this.cryptoObj.getRandomValues(buffer);
        buffer[6] |= 64;
        buffer[6] &= 79;
        buffer[8] |= 128;
        buffer[8] &= 191;
        return MathUtils.decimalToHex(buffer[0]) + MathUtils.decimalToHex(buffer[1]) + MathUtils.decimalToHex(buffer[2]) + MathUtils.decimalToHex(buffer[3]) + "-" + MathUtils.decimalToHex(buffer[4]) + MathUtils.decimalToHex(buffer[5]) + "-" + MathUtils.decimalToHex(buffer[6]) + MathUtils.decimalToHex(buffer[7]) + "-" + MathUtils.decimalToHex(buffer[8]) + MathUtils.decimalToHex(buffer[9]) + "-" + MathUtils.decimalToHex(buffer[10]) + MathUtils.decimalToHex(buffer[11]) + MathUtils.decimalToHex(buffer[12]) + MathUtils.decimalToHex(buffer[13]) + MathUtils.decimalToHex(buffer[14]) + MathUtils.decimalToHex(buffer[15]);
      } catch (err) {
        var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
        var hex = "0123456789abcdef";
        var r2 = 0;
        var guidResponse = Constants.EMPTY_STRING;
        for (var i2 = 0; i2 < 36; i2++) {
          if (guidHolder[i2] !== "-" && guidHolder[i2] !== "4") {
            r2 = Math.random() * 16 | 0;
          }
          if (guidHolder[i2] === "x") {
            guidResponse += hex[r2];
          } else if (guidHolder[i2] === "y") {
            r2 &= 3;
            r2 |= 8;
            guidResponse += hex[r2];
          } else {
            guidResponse += guidHolder[i2];
          }
        }
        return guidResponse;
      }
    };
    GuidGenerator2.prototype.isGuid = function(guid) {
      var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      return regexGuid.test(guid);
    };
    return GuidGenerator2;
  }()
);

// node_modules/@azure/msal-browser/dist/utils/BrowserStringUtils.js
var BrowserStringUtils = (
  /** @class */
  function() {
    function BrowserStringUtils2() {
    }
    BrowserStringUtils2.stringToUtf8Arr = function(sDOMStr) {
      var nChr;
      var nArrLen = 0;
      var nStrLen = sDOMStr.length;
      for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
        nChr = sDOMStr.charCodeAt(nMapIdx);
        nArrLen += nChr < 128 ? 1 : nChr < 2048 ? 2 : nChr < 65536 ? 3 : nChr < 2097152 ? 4 : nChr < 67108864 ? 5 : 6;
      }
      var aBytes = new Uint8Array(nArrLen);
      for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
        nChr = sDOMStr.charCodeAt(nChrIdx);
        if (nChr < 128) {
          aBytes[nIdx++] = nChr;
        } else if (nChr < 2048) {
          aBytes[nIdx++] = 192 + (nChr >>> 6);
          aBytes[nIdx++] = 128 + (nChr & 63);
        } else if (nChr < 65536) {
          aBytes[nIdx++] = 224 + (nChr >>> 12);
          aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
          aBytes[nIdx++] = 128 + (nChr & 63);
        } else if (nChr < 2097152) {
          aBytes[nIdx++] = 240 + (nChr >>> 18);
          aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
          aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
          aBytes[nIdx++] = 128 + (nChr & 63);
        } else if (nChr < 67108864) {
          aBytes[nIdx++] = 248 + (nChr >>> 24);
          aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
          aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
          aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
          aBytes[nIdx++] = 128 + (nChr & 63);
        } else {
          aBytes[nIdx++] = 252 + (nChr >>> 30);
          aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
          aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
          aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
          aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
          aBytes[nIdx++] = 128 + (nChr & 63);
        }
      }
      return aBytes;
    };
    BrowserStringUtils2.stringToArrayBuffer = function(dataString) {
      var data = new ArrayBuffer(dataString.length);
      var dataView = new Uint8Array(data);
      for (var i2 = 0; i2 < dataString.length; i2++) {
        dataView[i2] = dataString.charCodeAt(i2);
      }
      return data;
    };
    BrowserStringUtils2.utf8ArrToString = function(aBytes) {
      var sView = Constants.EMPTY_STRING;
      for (var nPart = void 0, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
        nPart = aBytes[nIdx];
        sView += String.fromCharCode(nPart > 251 && nPart < 254 && nIdx + 5 < nLen ? (
          /* six bytes */
          /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
          (nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
        ) : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? (
          /* five bytes */
          (nPart - 248 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
        ) : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? (
          /* four bytes */
          (nPart - 240 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
        ) : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? (
          /* three bytes */
          (nPart - 224 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
        ) : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? (
          /* two bytes */
          (nPart - 192 << 6) + aBytes[++nIdx] - 128
        ) : (
          /* nPart < 127 ? */
          /* one byte */
          nPart
        ));
      }
      return sView;
    };
    BrowserStringUtils2.getSortedObjectString = function(obj) {
      return JSON.stringify(obj, Object.keys(obj).sort());
    };
    return BrowserStringUtils2;
  }()
);

// node_modules/@azure/msal-browser/dist/encode/Base64Encode.js
var Base64Encode = (
  /** @class */
  function() {
    function Base64Encode2() {
    }
    Base64Encode2.prototype.urlEncode = function(input) {
      return encodeURIComponent(this.encode(input).replace(/=/g, Constants.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_"));
    };
    Base64Encode2.prototype.urlEncodeArr = function(inputArr) {
      return this.base64EncArr(inputArr).replace(/=/g, Constants.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
    };
    Base64Encode2.prototype.encode = function(input) {
      var inputUtf8Arr = BrowserStringUtils.stringToUtf8Arr(input);
      return this.base64EncArr(inputUtf8Arr);
    };
    Base64Encode2.prototype.base64EncArr = function(aBytes) {
      var eqLen = (3 - aBytes.length % 3) % 3;
      var sB64Enc = Constants.EMPTY_STRING;
      for (var nMod3 = void 0, nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
        nMod3 = nIdx % 3;
        nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
        if (nMod3 === 2 || aBytes.length - nIdx === 1) {
          sB64Enc += String.fromCharCode(this.uint6ToB64(nUint24 >>> 18 & 63), this.uint6ToB64(nUint24 >>> 12 & 63), this.uint6ToB64(nUint24 >>> 6 & 63), this.uint6ToB64(nUint24 & 63));
          nUint24 = 0;
        }
      }
      return eqLen === 0 ? sB64Enc : sB64Enc.substring(0, sB64Enc.length - eqLen) + (eqLen === 1 ? "=" : "==");
    };
    Base64Encode2.prototype.uint6ToB64 = function(nUint6) {
      return nUint6 < 26 ? nUint6 + 65 : nUint6 < 52 ? nUint6 + 71 : nUint6 < 62 ? nUint6 - 4 : nUint6 === 62 ? 43 : nUint6 === 63 ? 47 : 65;
    };
    return Base64Encode2;
  }()
);

// node_modules/@azure/msal-browser/dist/encode/Base64Decode.js
var Base64Decode = (
  /** @class */
  function() {
    function Base64Decode2() {
    }
    Base64Decode2.prototype.decode = function(input) {
      var encodedString = input.replace(/-/g, "+").replace(/_/g, "/");
      switch (encodedString.length % 4) {
        case 0:
          break;
        case 2:
          encodedString += "==";
          break;
        case 3:
          encodedString += "=";
          break;
        default:
          throw new Error("Invalid base64 string");
      }
      var inputUtf8Arr = this.base64DecToArr(encodedString);
      return BrowserStringUtils.utf8ArrToString(inputUtf8Arr);
    };
    Base64Decode2.prototype.base64DecToArr = function(base64String, nBlockSize) {
      var sB64Enc = base64String.replace(/[^A-Za-z0-9\+\/]/g, Constants.EMPTY_STRING);
      var nInLen = sB64Enc.length;
      var nOutLen = nBlockSize ? Math.ceil((nInLen * 3 + 1 >>> 2) / nBlockSize) * nBlockSize : nInLen * 3 + 1 >>> 2;
      var aBytes = new Uint8Array(nOutLen);
      for (var nMod3 = void 0, nMod4 = void 0, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
        nMod4 = nInIdx & 3;
        nUint24 |= this.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
        if (nMod4 === 3 || nInLen - nInIdx === 1) {
          for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
            aBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
          }
          nUint24 = 0;
        }
      }
      return aBytes;
    };
    Base64Decode2.prototype.b64ToUint6 = function(charNum) {
      return charNum > 64 && charNum < 91 ? charNum - 65 : charNum > 96 && charNum < 123 ? charNum - 71 : charNum > 47 && charNum < 58 ? charNum + 4 : charNum === 43 ? 62 : charNum === 47 ? 63 : 0;
    };
    return Base64Decode2;
  }()
);

// node_modules/@azure/msal-browser/dist/crypto/PkceGenerator.js
var RANDOM_BYTE_ARR_LENGTH = 32;
var PkceGenerator = (
  /** @class */
  function() {
    function PkceGenerator2(cryptoObj) {
      this.base64Encode = new Base64Encode();
      this.cryptoObj = cryptoObj;
    }
    PkceGenerator2.prototype.generateCodes = function() {
      return __awaiter(this, void 0, void 0, function() {
        var codeVerifier, codeChallenge;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              codeVerifier = this.generateCodeVerifier();
              return [4, this.generateCodeChallengeFromVerifier(codeVerifier)];
            case 1:
              codeChallenge = _a.sent();
              return [2, {
                verifier: codeVerifier,
                challenge: codeChallenge
              }];
          }
        });
      });
    };
    PkceGenerator2.prototype.generateCodeVerifier = function() {
      try {
        var buffer = new Uint8Array(RANDOM_BYTE_ARR_LENGTH);
        this.cryptoObj.getRandomValues(buffer);
        var pkceCodeVerifierB64 = this.base64Encode.urlEncodeArr(buffer);
        return pkceCodeVerifierB64;
      } catch (e2) {
        throw BrowserAuthError.createPkceNotGeneratedError(e2);
      }
    };
    PkceGenerator2.prototype.generateCodeChallengeFromVerifier = function(pkceCodeVerifier) {
      return __awaiter(this, void 0, void 0, function() {
        var pkceHashedCodeVerifier, e_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [4, this.cryptoObj.sha256Digest(pkceCodeVerifier)];
            case 1:
              pkceHashedCodeVerifier = _a.sent();
              return [2, this.base64Encode.urlEncodeArr(new Uint8Array(pkceHashedCodeVerifier))];
            case 2:
              e_1 = _a.sent();
              throw BrowserAuthError.createPkceNotGeneratedError(e_1);
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    return PkceGenerator2;
  }()
);

// node_modules/@azure/msal-browser/dist/crypto/ModernBrowserCrypto.js
var ModernBrowserCrypto = (
  /** @class */
  function() {
    function ModernBrowserCrypto2() {
    }
    ModernBrowserCrypto2.prototype.getRandomValues = function(dataBuffer) {
      return window.crypto.getRandomValues(dataBuffer);
    };
    ModernBrowserCrypto2.prototype.generateKey = function(algorithm, extractable, keyUsages) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, window.crypto.subtle.generateKey(algorithm, extractable, keyUsages)];
        });
      });
    };
    ModernBrowserCrypto2.prototype.exportKey = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, window.crypto.subtle.exportKey(KEY_FORMAT_JWK, key)];
        });
      });
    };
    ModernBrowserCrypto2.prototype.importKey = function(keyData, algorithm, extractable, keyUsages) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, window.crypto.subtle.importKey(KEY_FORMAT_JWK, keyData, algorithm, extractable, keyUsages)];
        });
      });
    };
    ModernBrowserCrypto2.prototype.sign = function(algorithm, key, data) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, window.crypto.subtle.sign(algorithm, key, data)];
        });
      });
    };
    ModernBrowserCrypto2.prototype.digest = function(algorithm, data) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, window.crypto.subtle.digest(algorithm, data)];
        });
      });
    };
    return ModernBrowserCrypto2;
  }()
);

// node_modules/@azure/msal-browser/dist/crypto/MsrBrowserCrypto.js
var MsrBrowserCrypto = (
  /** @class */
  function() {
    function MsrBrowserCrypto2() {
    }
    MsrBrowserCrypto2.prototype.initPrng = function(entropy) {
      return window.msrCrypto.initPrng(__spread(entropy));
    };
    MsrBrowserCrypto2.prototype.getRandomValues = function(dataBuffer) {
      return window.msrCrypto.getRandomValues(dataBuffer);
    };
    MsrBrowserCrypto2.prototype.generateKey = function(algorithm, extractable, keyUsages) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, window.msrCrypto.subtle.generateKey(algorithm, extractable, keyUsages)];
        });
      });
    };
    MsrBrowserCrypto2.prototype.exportKey = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, window.msrCrypto.subtle.exportKey(KEY_FORMAT_JWK, key)];
        });
      });
    };
    MsrBrowserCrypto2.prototype.importKey = function(keyData, algorithm, extractable, keyUsages) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, window.msrCrypto.subtle.importKey(KEY_FORMAT_JWK, keyData, algorithm, extractable, keyUsages)];
        });
      });
    };
    MsrBrowserCrypto2.prototype.sign = function(algorithm, key, data) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, window.msrCrypto.subtle.sign(algorithm, key, data)];
        });
      });
    };
    MsrBrowserCrypto2.prototype.digest = function(algorithm, data) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, window.msrCrypto.subtle.digest(algorithm, data)];
        });
      });
    };
    return MsrBrowserCrypto2;
  }()
);

// node_modules/@azure/msal-browser/dist/crypto/MsBrowserCrypto.js
var MsBrowserCrypto = (
  /** @class */
  function() {
    function MsBrowserCrypto2() {
    }
    MsBrowserCrypto2.prototype.getRandomValues = function(dataBuffer) {
      return window["msCrypto"].getRandomValues(dataBuffer);
    };
    MsBrowserCrypto2.prototype.generateKey = function(algorithm, extractable, keyUsages) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, new Promise(function(resolve, reject) {
            var msGenerateKey = window["msCrypto"].subtle.generateKey(algorithm, extractable, keyUsages);
            msGenerateKey.addEventListener("complete", function(e2) {
              resolve(e2.target.result);
            });
            msGenerateKey.addEventListener("error", function(error) {
              reject(error);
            });
          })];
        });
      });
    };
    MsBrowserCrypto2.prototype.exportKey = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, new Promise(function(resolve, reject) {
            var msExportKey = window["msCrypto"].subtle.exportKey(KEY_FORMAT_JWK, key);
            msExportKey.addEventListener("complete", function(e2) {
              var resultBuffer = e2.target.result;
              var resultString = BrowserStringUtils.utf8ArrToString(new Uint8Array(resultBuffer)).replace(/\r/g, Constants.EMPTY_STRING).replace(/\n/g, Constants.EMPTY_STRING).replace(/\t/g, Constants.EMPTY_STRING).split(" ").join(Constants.EMPTY_STRING).replace("\0", Constants.EMPTY_STRING);
              try {
                resolve(JSON.parse(resultString));
              } catch (e3) {
                reject(e3);
              }
            });
            msExportKey.addEventListener("error", function(error) {
              reject(error);
            });
          })];
        });
      });
    };
    MsBrowserCrypto2.prototype.importKey = function(keyData, algorithm, extractable, keyUsages) {
      return __awaiter(this, void 0, void 0, function() {
        var keyString, keyBuffer;
        return __generator(this, function(_a) {
          keyString = BrowserStringUtils.getSortedObjectString(keyData);
          keyBuffer = BrowserStringUtils.stringToArrayBuffer(keyString);
          return [2, new Promise(function(resolve, reject) {
            var msImportKey = window["msCrypto"].subtle.importKey(KEY_FORMAT_JWK, keyBuffer, algorithm, extractable, keyUsages);
            msImportKey.addEventListener("complete", function(e2) {
              resolve(e2.target.result);
            });
            msImportKey.addEventListener("error", function(error) {
              reject(error);
            });
          })];
        });
      });
    };
    MsBrowserCrypto2.prototype.sign = function(algorithm, key, data) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, new Promise(function(resolve, reject) {
            var msSign = window["msCrypto"].subtle.sign(algorithm, key, data);
            msSign.addEventListener("complete", function(e2) {
              resolve(e2.target.result);
            });
            msSign.addEventListener("error", function(error) {
              reject(error);
            });
          })];
        });
      });
    };
    MsBrowserCrypto2.prototype.digest = function(algorithm, data) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, new Promise(function(resolve, reject) {
            var digestOperation = window["msCrypto"].subtle.digest(algorithm, data.buffer);
            digestOperation.addEventListener("complete", function(e2) {
              resolve(e2.target.result);
            });
            digestOperation.addEventListener("error", function(error) {
              reject(error);
            });
          })];
        });
      });
    };
    return MsBrowserCrypto2;
  }()
);

// node_modules/@azure/msal-browser/dist/crypto/BrowserCrypto.js
var PKCS1_V15_KEYGEN_ALG = "RSASSA-PKCS1-v1_5";
var S256_HASH_ALG = "SHA-256";
var MODULUS_LENGTH = 2048;
var PUBLIC_EXPONENT = new Uint8Array([1, 0, 1]);
var BrowserCrypto = (
  /** @class */
  function() {
    function BrowserCrypto2(logger, cryptoOptions) {
      var _a, _b;
      this.logger = logger;
      this.cryptoOptions = cryptoOptions;
      if (this.hasBrowserCrypto()) {
        this.logger.verbose("BrowserCrypto: modern crypto interface available");
        this.subtleCrypto = new ModernBrowserCrypto();
      } else if (this.hasIECrypto()) {
        this.logger.verbose("BrowserCrypto: MS crypto interface available");
        this.subtleCrypto = new MsBrowserCrypto();
      } else if (this.hasMsrCrypto() && ((_a = this.cryptoOptions) === null || _a === void 0 ? void 0 : _a.useMsrCrypto)) {
        this.logger.verbose("BrowserCrypto: MSR crypto interface available");
        this.subtleCrypto = new MsrBrowserCrypto();
      } else {
        if (this.hasMsrCrypto()) {
          this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled");
        }
        this.logger.error("BrowserCrypto: No crypto interfaces available.");
        throw BrowserAuthError.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
      }
      if (this.subtleCrypto.initPrng) {
        this.logger.verbose("BrowserCrypto: Interface requires entropy");
        if (!((_b = this.cryptoOptions) === null || _b === void 0 ? void 0 : _b.entropy)) {
          this.logger.error("BrowserCrypto: Interface requires entropy but none provided.");
          throw BrowserConfigurationAuthError.createEntropyNotProvided();
        }
        this.logger.verbose("BrowserCrypto: Entropy provided");
        this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
      }
      this.keygenAlgorithmOptions = {
        name: PKCS1_V15_KEYGEN_ALG,
        hash: S256_HASH_ALG,
        modulusLength: MODULUS_LENGTH,
        publicExponent: PUBLIC_EXPONENT
      };
    }
    BrowserCrypto2.prototype.hasIECrypto = function() {
      return "msCrypto" in window;
    };
    BrowserCrypto2.prototype.hasBrowserCrypto = function() {
      return "crypto" in window;
    };
    BrowserCrypto2.prototype.hasMsrCrypto = function() {
      return "msrCrypto" in window;
    };
    BrowserCrypto2.prototype.sha256Digest = function(dataString) {
      return __awaiter(this, void 0, void 0, function() {
        var data;
        return __generator(this, function(_a) {
          data = BrowserStringUtils.stringToUtf8Arr(dataString);
          return [2, this.subtleCrypto.digest({ name: S256_HASH_ALG }, data)];
        });
      });
    };
    BrowserCrypto2.prototype.getRandomValues = function(dataBuffer) {
      return this.subtleCrypto.getRandomValues(dataBuffer);
    };
    BrowserCrypto2.prototype.generateKeyPair = function(extractable, usages) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, this.subtleCrypto.generateKey(this.keygenAlgorithmOptions, extractable, usages)];
        });
      });
    };
    BrowserCrypto2.prototype.exportJwk = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, this.subtleCrypto.exportKey(key)];
        });
      });
    };
    BrowserCrypto2.prototype.importJwk = function(key, extractable, usages) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, this.subtleCrypto.importKey(key, this.keygenAlgorithmOptions, extractable, usages)];
        });
      });
    };
    BrowserCrypto2.prototype.sign = function(key, data) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, this.subtleCrypto.sign(this.keygenAlgorithmOptions, key, data)];
        });
      });
    };
    return BrowserCrypto2;
  }()
);

// node_modules/@azure/msal-browser/dist/cache/DatabaseStorage.js
var DatabaseStorage = (
  /** @class */
  function() {
    function DatabaseStorage2() {
      this.dbName = DB_NAME;
      this.version = DB_VERSION;
      this.tableName = DB_TABLE_NAME;
      this.dbOpen = false;
    }
    DatabaseStorage2.prototype.open = function() {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          return [2, new Promise(function(resolve, reject) {
            var openDB = window.indexedDB.open(_this.dbName, _this.version);
            openDB.addEventListener("upgradeneeded", function(e2) {
              var event = e2;
              event.target.result.createObjectStore(_this.tableName);
            });
            openDB.addEventListener("success", function(e2) {
              var event = e2;
              _this.db = event.target.result;
              _this.dbOpen = true;
              resolve();
            });
            openDB.addEventListener("error", function() {
              return reject(BrowserAuthError.createDatabaseUnavailableError());
            });
          })];
        });
      });
    };
    DatabaseStorage2.prototype.closeConnection = function() {
      var db = this.db;
      if (db && this.dbOpen) {
        db.close();
        this.dbOpen = false;
      }
    };
    DatabaseStorage2.prototype.validateDbIsOpen = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              if (!!this.dbOpen)
                return [3, 2];
              return [4, this.open()];
            case 1:
              return [2, _a.sent()];
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    DatabaseStorage2.prototype.getItem = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              _a.sent();
              return [2, new Promise(function(resolve, reject) {
                if (!_this.db) {
                  return reject(BrowserAuthError.createDatabaseNotOpenError());
                }
                var transaction = _this.db.transaction([_this.tableName], "readonly");
                var objectStore = transaction.objectStore(_this.tableName);
                var dbGet = objectStore.get(key);
                dbGet.addEventListener("success", function(e2) {
                  var event = e2;
                  _this.closeConnection();
                  resolve(event.target.result);
                });
                dbGet.addEventListener("error", function(e2) {
                  _this.closeConnection();
                  reject(e2);
                });
              })];
          }
        });
      });
    };
    DatabaseStorage2.prototype.setItem = function(key, payload) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              _a.sent();
              return [2, new Promise(function(resolve, reject) {
                if (!_this.db) {
                  return reject(BrowserAuthError.createDatabaseNotOpenError());
                }
                var transaction = _this.db.transaction([_this.tableName], "readwrite");
                var objectStore = transaction.objectStore(_this.tableName);
                var dbPut = objectStore.put(payload, key);
                dbPut.addEventListener("success", function() {
                  _this.closeConnection();
                  resolve();
                });
                dbPut.addEventListener("error", function(e2) {
                  _this.closeConnection();
                  reject(e2);
                });
              })];
          }
        });
      });
    };
    DatabaseStorage2.prototype.removeItem = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              _a.sent();
              return [2, new Promise(function(resolve, reject) {
                if (!_this.db) {
                  return reject(BrowserAuthError.createDatabaseNotOpenError());
                }
                var transaction = _this.db.transaction([_this.tableName], "readwrite");
                var objectStore = transaction.objectStore(_this.tableName);
                var dbDelete = objectStore.delete(key);
                dbDelete.addEventListener("success", function() {
                  _this.closeConnection();
                  resolve();
                });
                dbDelete.addEventListener("error", function(e2) {
                  _this.closeConnection();
                  reject(e2);
                });
              })];
          }
        });
      });
    };
    DatabaseStorage2.prototype.getKeys = function() {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              _a.sent();
              return [2, new Promise(function(resolve, reject) {
                if (!_this.db) {
                  return reject(BrowserAuthError.createDatabaseNotOpenError());
                }
                var transaction = _this.db.transaction([_this.tableName], "readonly");
                var objectStore = transaction.objectStore(_this.tableName);
                var dbGetKeys = objectStore.getAllKeys();
                dbGetKeys.addEventListener("success", function(e2) {
                  var event = e2;
                  _this.closeConnection();
                  resolve(event.target.result);
                });
                dbGetKeys.addEventListener("error", function(e2) {
                  _this.closeConnection();
                  reject(e2);
                });
              })];
          }
        });
      });
    };
    DatabaseStorage2.prototype.containsKey = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        var _this = this;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              _a.sent();
              return [2, new Promise(function(resolve, reject) {
                if (!_this.db) {
                  return reject(BrowserAuthError.createDatabaseNotOpenError());
                }
                var transaction = _this.db.transaction([_this.tableName], "readonly");
                var objectStore = transaction.objectStore(_this.tableName);
                var dbContainsKey = objectStore.count(key);
                dbContainsKey.addEventListener("success", function(e2) {
                  var event = e2;
                  _this.closeConnection();
                  resolve(event.target.result === 1);
                });
                dbContainsKey.addEventListener("error", function(e2) {
                  _this.closeConnection();
                  reject(e2);
                });
              })];
          }
        });
      });
    };
    DatabaseStorage2.prototype.deleteDatabase = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          if (this.db && this.dbOpen) {
            this.closeConnection();
          }
          return [2, new Promise(function(resolve, reject) {
            var deleteDbRequest = window.indexedDB.deleteDatabase(DB_NAME);
            deleteDbRequest.addEventListener("success", function() {
              return resolve(true);
            });
            deleteDbRequest.addEventListener("blocked", function() {
              return resolve(true);
            });
            deleteDbRequest.addEventListener("error", function() {
              return reject(false);
            });
          })];
        });
      });
    };
    return DatabaseStorage2;
  }()
);

// node_modules/@azure/msal-browser/dist/cache/AsyncMemoryStorage.js
var AsyncMemoryStorage = (
  /** @class */
  function() {
    function AsyncMemoryStorage2(logger, storeName) {
      this.inMemoryCache = new MemoryStorage();
      this.indexedDBCache = new DatabaseStorage();
      this.logger = logger;
      this.storeName = storeName;
    }
    AsyncMemoryStorage2.prototype.handleDatabaseAccessError = function(error) {
      if (error instanceof BrowserAuthError && error.errorCode === BrowserAuthErrorMessage.databaseUnavailable.code) {
        this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
      } else {
        throw error;
      }
    };
    AsyncMemoryStorage2.prototype.getItem = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        var item, e_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              item = this.inMemoryCache.getItem(key);
              if (!!item)
                return [3, 4];
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              this.logger.verbose("Queried item not found in in-memory cache, now querying persistent storage.");
              return [4, this.indexedDBCache.getItem(key)];
            case 2:
              return [2, _a.sent()];
            case 3:
              e_1 = _a.sent();
              this.handleDatabaseAccessError(e_1);
              return [3, 4];
            case 4:
              return [2, item];
          }
        });
      });
    };
    AsyncMemoryStorage2.prototype.setItem = function(key, value) {
      return __awaiter(this, void 0, void 0, function() {
        var e_2;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.inMemoryCache.setItem(key, value);
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4, this.indexedDBCache.setItem(key, value)];
            case 2:
              _a.sent();
              return [3, 4];
            case 3:
              e_2 = _a.sent();
              this.handleDatabaseAccessError(e_2);
              return [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    AsyncMemoryStorage2.prototype.removeItem = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        var e_3;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.inMemoryCache.removeItem(key);
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4, this.indexedDBCache.removeItem(key)];
            case 2:
              _a.sent();
              return [3, 4];
            case 3:
              e_3 = _a.sent();
              this.handleDatabaseAccessError(e_3);
              return [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    AsyncMemoryStorage2.prototype.getKeys = function() {
      return __awaiter(this, void 0, void 0, function() {
        var cacheKeys, e_4;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              cacheKeys = this.inMemoryCache.getKeys();
              if (!(cacheKeys.length === 0))
                return [3, 4];
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              this.logger.verbose("In-memory cache is empty, now querying persistent storage.");
              return [4, this.indexedDBCache.getKeys()];
            case 2:
              return [2, _a.sent()];
            case 3:
              e_4 = _a.sent();
              this.handleDatabaseAccessError(e_4);
              return [3, 4];
            case 4:
              return [2, cacheKeys];
          }
        });
      });
    };
    AsyncMemoryStorage2.prototype.containsKey = function(key) {
      return __awaiter(this, void 0, void 0, function() {
        var containsKey, e_5;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              containsKey = this.inMemoryCache.containsKey(key);
              if (!!containsKey)
                return [3, 4];
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              this.logger.verbose("Key not found in in-memory cache, now querying persistent storage.");
              return [4, this.indexedDBCache.containsKey(key)];
            case 2:
              return [2, _a.sent()];
            case 3:
              e_5 = _a.sent();
              this.handleDatabaseAccessError(e_5);
              return [3, 4];
            case 4:
              return [2, containsKey];
          }
        });
      });
    };
    AsyncMemoryStorage2.prototype.clearInMemory = function() {
      this.logger.verbose("Deleting in-memory keystore " + this.storeName);
      this.inMemoryCache.clear();
      this.logger.verbose("In-memory keystore " + this.storeName + " deleted");
    };
    AsyncMemoryStorage2.prototype.clearPersistent = function() {
      return __awaiter(this, void 0, void 0, function() {
        var dbDeleted, e_6;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              this.logger.verbose("Deleting persistent keystore");
              return [4, this.indexedDBCache.deleteDatabase()];
            case 1:
              dbDeleted = _a.sent();
              if (dbDeleted) {
                this.logger.verbose("Persistent keystore deleted");
              }
              return [2, dbDeleted];
            case 2:
              e_6 = _a.sent();
              this.handleDatabaseAccessError(e_6);
              return [2, false];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    return AsyncMemoryStorage2;
  }()
);

// node_modules/@azure/msal-browser/dist/cache/CryptoKeyStore.js
var CryptoKeyStoreNames;
(function(CryptoKeyStoreNames2) {
  CryptoKeyStoreNames2["asymmetricKeys"] = "asymmetricKeys";
  CryptoKeyStoreNames2["symmetricKeys"] = "symmetricKeys";
})(CryptoKeyStoreNames || (CryptoKeyStoreNames = {}));
var CryptoKeyStore = (
  /** @class */
  function() {
    function CryptoKeyStore2(logger) {
      this.logger = logger;
      this.asymmetricKeys = new AsyncMemoryStorage(this.logger, CryptoKeyStoreNames.asymmetricKeys);
      this.symmetricKeys = new AsyncMemoryStorage(this.logger, CryptoKeyStoreNames.symmetricKeys);
    }
    CryptoKeyStore2.prototype.clear = function() {
      return __awaiter(this, void 0, void 0, function() {
        var e_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.asymmetricKeys.clearInMemory();
              this.symmetricKeys.clearInMemory();
              _a.label = 1;
            case 1:
              _a.trys.push([1, 3, , 4]);
              return [4, this.asymmetricKeys.clearPersistent()];
            case 2:
              _a.sent();
              return [2, true];
            case 3:
              e_1 = _a.sent();
              if (e_1 instanceof Error) {
                this.logger.error("Clearing keystore failed with error: " + e_1.message);
              } else {
                this.logger.error("Clearing keystore failed with unknown error");
              }
              return [2, false];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    return CryptoKeyStore2;
  }()
);

// node_modules/@azure/msal-browser/dist/crypto/CryptoOps.js
var CryptoOps = (
  /** @class */
  function() {
    function CryptoOps2(logger, performanceClient, cryptoConfig) {
      this.logger = logger;
      this.browserCrypto = new BrowserCrypto(this.logger, cryptoConfig);
      this.b64Encode = new Base64Encode();
      this.b64Decode = new Base64Decode();
      this.guidGenerator = new GuidGenerator(this.browserCrypto);
      this.pkceGenerator = new PkceGenerator(this.browserCrypto);
      this.cache = new CryptoKeyStore(this.logger);
      this.performanceClient = performanceClient;
    }
    CryptoOps2.prototype.createNewGuid = function() {
      return this.guidGenerator.generateGuid();
    };
    CryptoOps2.prototype.base64Encode = function(input) {
      return this.b64Encode.encode(input);
    };
    CryptoOps2.prototype.base64Decode = function(input) {
      return this.b64Decode.decode(input);
    };
    CryptoOps2.prototype.generatePkceCodes = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, this.pkceGenerator.generateCodes()];
        });
      });
    };
    CryptoOps2.prototype.getPublicKeyThumbprint = function(request) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var publicKeyThumbMeasurement, keyPair, publicKeyJwk, pubKeyThumprintObj, publicJwkString, publicJwkHash, privateKeyJwk, unextractablePrivateKey;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              publicKeyThumbMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.CryptoOptsGetPublicKeyThumbprint, request.correlationId);
              return [4, this.browserCrypto.generateKeyPair(CryptoOps2.EXTRACTABLE, CryptoOps2.POP_KEY_USAGES)];
            case 1:
              keyPair = _b.sent();
              return [4, this.browserCrypto.exportJwk(keyPair.publicKey)];
            case 2:
              publicKeyJwk = _b.sent();
              pubKeyThumprintObj = {
                e: publicKeyJwk.e,
                kty: publicKeyJwk.kty,
                n: publicKeyJwk.n
              };
              publicJwkString = BrowserStringUtils.getSortedObjectString(pubKeyThumprintObj);
              return [4, this.hashString(publicJwkString)];
            case 3:
              publicJwkHash = _b.sent();
              return [4, this.browserCrypto.exportJwk(keyPair.privateKey)];
            case 4:
              privateKeyJwk = _b.sent();
              return [4, this.browserCrypto.importJwk(privateKeyJwk, false, ["sign"])];
            case 5:
              unextractablePrivateKey = _b.sent();
              return [4, this.cache.asymmetricKeys.setItem(publicJwkHash, {
                privateKey: unextractablePrivateKey,
                publicKey: keyPair.publicKey,
                requestMethod: request.resourceRequestMethod,
                requestUri: request.resourceRequestUri
              })];
            case 6:
              _b.sent();
              if (publicKeyThumbMeasurement) {
                publicKeyThumbMeasurement.endMeasurement({
                  success: true
                });
              }
              return [2, publicJwkHash];
          }
        });
      });
    };
    CryptoOps2.prototype.removeTokenBindingKey = function(kid) {
      return __awaiter(this, void 0, void 0, function() {
        var keyFound;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.cache.asymmetricKeys.removeItem(kid)];
            case 1:
              _a.sent();
              return [4, this.cache.asymmetricKeys.containsKey(kid)];
            case 2:
              keyFound = _a.sent();
              return [2, !keyFound];
          }
        });
      });
    };
    CryptoOps2.prototype.clearKeystore = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.cache.clear()];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    CryptoOps2.prototype.signJwt = function(payload, kid, correlationId) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var signJwtMeasurement, cachedKeyPair, publicKeyJwk, publicKeyJwkString, encodedKeyIdThumbprint, shrHeader, encodedShrHeader, encodedPayload, tokenString, tokenBuffer, signatureBuffer, encodedSignature, signedJwt;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              signJwtMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.CryptoOptsSignJwt, correlationId);
              return [4, this.cache.asymmetricKeys.getItem(kid)];
            case 1:
              cachedKeyPair = _b.sent();
              if (!cachedKeyPair) {
                throw BrowserAuthError.createSigningKeyNotFoundInStorageError(kid);
              }
              return [4, this.browserCrypto.exportJwk(cachedKeyPair.publicKey)];
            case 2:
              publicKeyJwk = _b.sent();
              publicKeyJwkString = BrowserStringUtils.getSortedObjectString(publicKeyJwk);
              encodedKeyIdThumbprint = this.b64Encode.urlEncode(JSON.stringify({ kid }));
              shrHeader = JoseHeader.getShrHeaderString({ kid: encodedKeyIdThumbprint, alg: publicKeyJwk.alg });
              encodedShrHeader = this.b64Encode.urlEncode(shrHeader);
              payload.cnf = {
                jwk: JSON.parse(publicKeyJwkString)
              };
              encodedPayload = this.b64Encode.urlEncode(JSON.stringify(payload));
              tokenString = encodedShrHeader + "." + encodedPayload;
              tokenBuffer = BrowserStringUtils.stringToArrayBuffer(tokenString);
              return [4, this.browserCrypto.sign(cachedKeyPair.privateKey, tokenBuffer)];
            case 3:
              signatureBuffer = _b.sent();
              encodedSignature = this.b64Encode.urlEncodeArr(new Uint8Array(signatureBuffer));
              signedJwt = tokenString + "." + encodedSignature;
              if (signJwtMeasurement) {
                signJwtMeasurement.endMeasurement({
                  success: true
                });
              }
              return [2, signedJwt];
          }
        });
      });
    };
    CryptoOps2.prototype.hashString = function(plainText) {
      return __awaiter(this, void 0, void 0, function() {
        var hashBuffer, hashBytes;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.browserCrypto.sha256Digest(plainText)];
            case 1:
              hashBuffer = _a.sent();
              hashBytes = new Uint8Array(hashBuffer);
              return [2, this.b64Encode.urlEncodeArr(hashBytes)];
          }
        });
      });
    };
    CryptoOps2.POP_KEY_USAGES = ["sign", "verify"];
    CryptoOps2.EXTRACTABLE = true;
    return CryptoOps2;
  }()
);

// node_modules/@azure/msal-browser/dist/telemetry/BrowserPerformanceMeasurement.js
var BrowserPerformanceMeasurement = (
  /** @class */
  function() {
    function BrowserPerformanceMeasurement2(name3, correlationId) {
      this.correlationId = correlationId;
      this.measureName = BrowserPerformanceMeasurement2.makeMeasureName(name3, correlationId);
      this.startMark = BrowserPerformanceMeasurement2.makeStartMark(name3, correlationId);
      this.endMark = BrowserPerformanceMeasurement2.makeEndMark(name3, correlationId);
    }
    BrowserPerformanceMeasurement2.makeMeasureName = function(name3, correlationId) {
      return "msal.measure." + name3 + "." + correlationId;
    };
    BrowserPerformanceMeasurement2.makeStartMark = function(name3, correlationId) {
      return "msal.start." + name3 + "." + correlationId;
    };
    BrowserPerformanceMeasurement2.makeEndMark = function(name3, correlationId) {
      return "msal.end." + name3 + "." + correlationId;
    };
    BrowserPerformanceMeasurement2.supportsBrowserPerformance = function() {
      return typeof window !== "undefined" && typeof window.performance !== "undefined" && typeof window.performance.mark === "function" && typeof window.performance.measure === "function" && typeof window.performance.clearMarks === "function" && typeof window.performance.clearMeasures === "function" && typeof window.performance.getEntriesByName === "function";
    };
    BrowserPerformanceMeasurement2.flushMeasurements = function(correlationId, measurements) {
      if (BrowserPerformanceMeasurement2.supportsBrowserPerformance()) {
        try {
          measurements.forEach(function(measurement) {
            var measureName = BrowserPerformanceMeasurement2.makeMeasureName(measurement.name, correlationId);
            var entriesForMeasurement = window.performance.getEntriesByName(measureName, "measure");
            if (entriesForMeasurement.length > 0) {
              window.performance.clearMeasures(measureName);
              window.performance.clearMarks(BrowserPerformanceMeasurement2.makeStartMark(measureName, correlationId));
              window.performance.clearMarks(BrowserPerformanceMeasurement2.makeEndMark(measureName, correlationId));
            }
          });
        } catch (e2) {
        }
      }
    };
    BrowserPerformanceMeasurement2.prototype.startMeasurement = function() {
      if (BrowserPerformanceMeasurement2.supportsBrowserPerformance()) {
        try {
          window.performance.mark(this.startMark);
        } catch (e2) {
        }
      }
    };
    BrowserPerformanceMeasurement2.prototype.endMeasurement = function() {
      if (BrowserPerformanceMeasurement2.supportsBrowserPerformance()) {
        try {
          window.performance.mark(this.endMark);
          window.performance.measure(this.measureName, this.startMark, this.endMark);
        } catch (e2) {
        }
      }
    };
    BrowserPerformanceMeasurement2.prototype.flushMeasurement = function() {
      if (BrowserPerformanceMeasurement2.supportsBrowserPerformance()) {
        try {
          var entriesForMeasurement = window.performance.getEntriesByName(this.measureName, "measure");
          if (entriesForMeasurement.length > 0) {
            var durationMs = entriesForMeasurement[0].duration;
            window.performance.clearMeasures(this.measureName);
            window.performance.clearMarks(this.startMark);
            window.performance.clearMarks(this.endMark);
            return durationMs;
          }
        } catch (e2) {
        }
      }
      return null;
    };
    return BrowserPerformanceMeasurement2;
  }()
);

// node_modules/@azure/msal-browser/dist/telemetry/BrowserPerformanceClient.js
var BrowserPerformanceClient = (
  /** @class */
  function(_super) {
    __extends(BrowserPerformanceClient2, _super);
    function BrowserPerformanceClient2(clientId, authority, logger, libraryName, libraryVersion, applicationTelemetry, cryptoOptions) {
      var _this = _super.call(this, clientId, authority, logger, libraryName, libraryVersion, applicationTelemetry) || this;
      _this.browserCrypto = new BrowserCrypto(_this.logger, cryptoOptions);
      _this.guidGenerator = new GuidGenerator(_this.browserCrypto);
      return _this;
    }
    BrowserPerformanceClient2.prototype.startPerformanceMeasuremeant = function(measureName, correlationId) {
      return new BrowserPerformanceMeasurement(measureName, correlationId);
    };
    BrowserPerformanceClient2.prototype.generateId = function() {
      return this.guidGenerator.generateGuid();
    };
    BrowserPerformanceClient2.prototype.getPageVisibility = function() {
      var _a;
      return ((_a = document.visibilityState) === null || _a === void 0 ? void 0 : _a.toString()) || null;
    };
    BrowserPerformanceClient2.prototype.deleteIncompleteSubMeasurements = function(inProgressEvent) {
      var rootEvent = this.eventsByCorrelationId.get(inProgressEvent.event.correlationId);
      var isRootEvent = rootEvent && rootEvent.eventId === inProgressEvent.event.eventId;
      var incompleteMeasurements = [];
      if (isRootEvent && (rootEvent === null || rootEvent === void 0 ? void 0 : rootEvent.incompleteSubMeasurements)) {
        rootEvent.incompleteSubMeasurements.forEach(function(subMeasurement) {
          incompleteMeasurements.push(__assign({}, subMeasurement));
        });
      }
      if (incompleteMeasurements.length > 0) {
        BrowserPerformanceMeasurement.flushMeasurements(inProgressEvent.event.correlationId, incompleteMeasurements);
      }
    };
    BrowserPerformanceClient2.prototype.supportsBrowserPerformanceNow = function() {
      return typeof window !== "undefined" && typeof window.performance !== "undefined" && typeof window.performance.now === "function";
    };
    BrowserPerformanceClient2.prototype.startMeasurement = function(measureName, correlationId) {
      var _this = this;
      var startPageVisibility = this.getPageVisibility();
      var inProgressEvent = _super.prototype.startMeasurement.call(this, measureName, correlationId);
      return __assign(__assign({}, inProgressEvent), { endMeasurement: function(event) {
        var res = inProgressEvent.endMeasurement(__assign({ startPageVisibility, endPageVisibility: _this.getPageVisibility() }, event));
        _this.deleteIncompleteSubMeasurements(inProgressEvent);
        return res;
      }, discardMeasurement: function() {
        inProgressEvent.discardMeasurement();
        _this.deleteIncompleteSubMeasurements(inProgressEvent);
        inProgressEvent.measurement.flushMeasurement();
      } });
    };
    BrowserPerformanceClient2.prototype.setPreQueueTime = function(eventName, correlationId) {
      if (!this.supportsBrowserPerformanceNow()) {
        this.logger.trace("BrowserPerformanceClient: window performance API not available, unable to set telemetry queue time for " + eventName);
        return;
      }
      if (!correlationId) {
        this.logger.trace("BrowserPerformanceClient: correlationId for " + eventName + " not provided, unable to set telemetry queue time");
        return;
      }
      var preQueueEvent = this.preQueueTimeByCorrelationId.get(correlationId);
      if (preQueueEvent) {
        this.logger.trace("BrowserPerformanceClient: Incomplete pre-queue " + preQueueEvent.name + " found", correlationId);
        this.addQueueMeasurement(preQueueEvent.name, correlationId, void 0, true);
      }
      this.preQueueTimeByCorrelationId.set(correlationId, { name: eventName, time: window.performance.now() });
    };
    BrowserPerformanceClient2.prototype.addQueueMeasurement = function(eventName, correlationId, queueTime, manuallyCompleted) {
      if (!this.supportsBrowserPerformanceNow()) {
        this.logger.trace("BrowserPerformanceClient: window performance API not available, unable to add queue measurement for " + eventName);
        return;
      }
      if (!correlationId) {
        this.logger.trace("BrowserPerformanceClient: correlationId for " + eventName + " not provided, unable to add queue measurement");
        return;
      }
      var preQueueTime = _super.prototype.getPreQueueTime.call(this, eventName, correlationId);
      if (!preQueueTime) {
        return;
      }
      var currentTime = window.performance.now();
      var resQueueTime = queueTime || _super.prototype.calculateQueuedTime.call(this, preQueueTime, currentTime);
      return _super.prototype.addQueueMeasurement.call(this, eventName, correlationId, resQueueTime, manuallyCompleted);
    };
    return BrowserPerformanceClient2;
  }(PerformanceClient)
);

// node_modules/@azure/msal-browser/dist/cache/TokenCache.js
var TokenCache = (
  /** @class */
  function() {
    function TokenCache2(configuration, storage, logger, cryptoObj) {
      this.isBrowserEnvironment = typeof window !== "undefined";
      this.config = configuration;
      this.storage = storage;
      this.logger = logger;
      this.cryptoObj = cryptoObj;
    }
    TokenCache2.prototype.loadExternalTokens = function(request, response, options) {
      this.logger.info("TokenCache - loadExternalTokens called");
      if (!response.id_token) {
        throw BrowserAuthError.createUnableToLoadTokenError("Please ensure server response includes id token.");
      }
      var idToken = new AuthToken(response.id_token, this.cryptoObj);
      var cacheRecord;
      var authority;
      if (request.account) {
        var cacheRecordAccount = this.loadAccount(idToken, request.account.environment, void 0, void 0, request.account.homeAccountId);
        cacheRecord = new CacheRecord(cacheRecordAccount, this.loadIdToken(idToken, cacheRecordAccount.homeAccountId, request.account.environment, request.account.tenantId), this.loadAccessToken(request, response, cacheRecordAccount.homeAccountId, request.account.environment, request.account.tenantId, options), this.loadRefreshToken(request, response, cacheRecordAccount.homeAccountId, request.account.environment));
      } else if (request.authority) {
        var authorityUrl = Authority.generateAuthority(request.authority, request.azureCloudOptions);
        var authorityOptions = {
          protocolMode: this.config.auth.protocolMode,
          knownAuthorities: this.config.auth.knownAuthorities,
          cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
          authorityMetadata: this.config.auth.authorityMetadata,
          skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
        };
        authority = new Authority(authorityUrl, this.config.system.networkClient, this.storage, authorityOptions, this.logger);
        if (options.clientInfo) {
          this.logger.trace("TokenCache - homeAccountId from options");
          var cacheRecordAccount = this.loadAccount(idToken, authority.hostnameAndPort, options.clientInfo, authority.authorityType);
          cacheRecord = new CacheRecord(cacheRecordAccount, this.loadIdToken(idToken, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant), this.loadAccessToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant, options), this.loadRefreshToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort));
        } else if (response.client_info) {
          this.logger.trace("TokenCache - homeAccountId from response");
          var cacheRecordAccount = this.loadAccount(idToken, authority.hostnameAndPort, response.client_info, authority.authorityType);
          cacheRecord = new CacheRecord(cacheRecordAccount, this.loadIdToken(idToken, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant), this.loadAccessToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort, authority.tenant, options), this.loadRefreshToken(request, response, cacheRecordAccount.homeAccountId, authority.hostnameAndPort));
        } else {
          throw BrowserAuthError.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
        }
      } else {
        throw BrowserAuthError.createUnableToLoadTokenError("Please provide a request with an account or a request with authority.");
      }
      return this.generateAuthenticationResult(request, idToken, cacheRecord, authority);
    };
    TokenCache2.prototype.loadAccount = function(idToken, environment, clientInfo, authorityType, requestHomeAccountId) {
      var homeAccountId;
      if (requestHomeAccountId) {
        homeAccountId = requestHomeAccountId;
      } else if (authorityType !== void 0 && clientInfo) {
        homeAccountId = AccountEntity.generateHomeAccountId(clientInfo, authorityType, this.logger, this.cryptoObj, idToken);
      }
      if (!homeAccountId) {
        throw BrowserAuthError.createUnableToLoadTokenError("Unexpected missing homeAccountId");
      }
      var accountEntity = clientInfo ? AccountEntity.createAccount(clientInfo, homeAccountId, idToken, void 0, void 0, void 0, environment) : AccountEntity.createGenericAccount(homeAccountId, idToken, void 0, void 0, void 0, environment);
      if (this.isBrowserEnvironment) {
        this.logger.verbose("TokenCache - loading account");
        this.storage.setAccount(accountEntity);
        return accountEntity;
      } else {
        throw BrowserAuthError.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
      }
    };
    TokenCache2.prototype.loadIdToken = function(idToken, homeAccountId, environment, tenantId) {
      var idTokenEntity = IdTokenEntity.createIdTokenEntity(homeAccountId, environment, idToken.rawToken, this.config.auth.clientId, tenantId);
      if (this.isBrowserEnvironment) {
        this.logger.verbose("TokenCache - loading id token");
        this.storage.setIdTokenCredential(idTokenEntity);
        return idTokenEntity;
      } else {
        throw BrowserAuthError.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
      }
    };
    TokenCache2.prototype.loadAccessToken = function(request, response, homeAccountId, environment, tenantId, options) {
      if (!response.access_token) {
        this.logger.verbose("TokenCache - No access token provided for caching");
        return null;
      }
      if (!response.expires_in) {
        throw BrowserAuthError.createUnableToLoadTokenError("Please ensure server response includes expires_in value.");
      }
      if (!options.extendedExpiresOn) {
        throw BrowserAuthError.createUnableToLoadTokenError("Please provide an extendedExpiresOn value in the options.");
      }
      var scopes = new ScopeSet(request.scopes).printScopes();
      var expiresOn = options.expiresOn || response.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3;
      var extendedExpiresOn = options.extendedExpiresOn;
      var accessTokenEntity = AccessTokenEntity.createAccessTokenEntity(homeAccountId, environment, response.access_token, this.config.auth.clientId, tenantId, scopes, expiresOn, extendedExpiresOn, this.cryptoObj);
      if (this.isBrowserEnvironment) {
        this.logger.verbose("TokenCache - loading access token");
        this.storage.setAccessTokenCredential(accessTokenEntity);
        return accessTokenEntity;
      } else {
        throw BrowserAuthError.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
      }
    };
    TokenCache2.prototype.loadRefreshToken = function(request, response, homeAccountId, environment) {
      if (!response.refresh_token) {
        this.logger.verbose("TokenCache - No refresh token provided for caching");
        return null;
      }
      var refreshTokenEntity = RefreshTokenEntity.createRefreshTokenEntity(homeAccountId, environment, response.refresh_token, this.config.auth.clientId);
      if (this.isBrowserEnvironment) {
        this.logger.verbose("TokenCache - loading refresh token");
        this.storage.setRefreshTokenCredential(refreshTokenEntity);
        return refreshTokenEntity;
      } else {
        throw BrowserAuthError.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
      }
    };
    TokenCache2.prototype.generateAuthenticationResult = function(request, idTokenObj, cacheRecord, authority) {
      var _a, _b, _c;
      var accessToken = Constants.EMPTY_STRING;
      var responseScopes = [];
      var expiresOn = null;
      var extExpiresOn;
      if (cacheRecord === null || cacheRecord === void 0 ? void 0 : cacheRecord.accessToken) {
        accessToken = cacheRecord.accessToken.secret;
        responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
        expiresOn = new Date(Number(cacheRecord.accessToken.expiresOn) * 1e3);
        extExpiresOn = new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1e3);
      }
      var uid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.oid) || (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.sub) || Constants.EMPTY_STRING;
      var tid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.tid) || Constants.EMPTY_STRING;
      return {
        authority: authority ? authority.canonicalAuthority : Constants.EMPTY_STRING,
        uniqueId: uid,
        tenantId: tid,
        scopes: responseScopes,
        account: (cacheRecord === null || cacheRecord === void 0 ? void 0 : cacheRecord.account) ? cacheRecord.account.getAccountInfo() : null,
        idToken: idTokenObj ? idTokenObj.rawToken : Constants.EMPTY_STRING,
        idTokenClaims: idTokenObj ? idTokenObj.claims : {},
        accessToken,
        fromCache: true,
        expiresOn,
        correlationId: request.correlationId || Constants.EMPTY_STRING,
        requestId: Constants.EMPTY_STRING,
        extExpiresOn,
        familyId: Constants.EMPTY_STRING,
        tokenType: ((_a = cacheRecord === null || cacheRecord === void 0 ? void 0 : cacheRecord.accessToken) === null || _a === void 0 ? void 0 : _a.tokenType) || Constants.EMPTY_STRING,
        state: Constants.EMPTY_STRING,
        cloudGraphHostName: ((_b = cacheRecord === null || cacheRecord === void 0 ? void 0 : cacheRecord.account) === null || _b === void 0 ? void 0 : _b.cloudGraphHostName) || Constants.EMPTY_STRING,
        msGraphHost: ((_c = cacheRecord === null || cacheRecord === void 0 ? void 0 : cacheRecord.account) === null || _c === void 0 ? void 0 : _c.msGraphHost) || Constants.EMPTY_STRING,
        code: void 0,
        fromNativeBroker: false
      };
    };
    return TokenCache2;
  }()
);

// node_modules/@azure/msal-browser/dist/interaction_client/HybridSpaAuthorizationCodeClient.js
var HybridSpaAuthorizationCodeClient = (
  /** @class */
  function(_super) {
    __extends(HybridSpaAuthorizationCodeClient2, _super);
    function HybridSpaAuthorizationCodeClient2(config) {
      var _this = _super.call(this, config) || this;
      _this.includeRedirectUri = false;
      return _this;
    }
    return HybridSpaAuthorizationCodeClient2;
  }(AuthorizationCodeClient)
);

// node_modules/@azure/msal-browser/dist/interaction_client/SilentAuthCodeClient.js
var SilentAuthCodeClient = (
  /** @class */
  function(_super) {
    __extends(SilentAuthCodeClient2, _super);
    function SilentAuthCodeClient2(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, nativeMessageHandler, correlationId) {
      var _this = _super.call(this, config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) || this;
      _this.apiId = apiId;
      return _this;
    }
    SilentAuthCodeClient2.prototype.acquireToken = function(request) {
      return __awaiter(this, void 0, void 0, function() {
        var silentRequest, serverTelemetryManager, authCodeRequest, clientConfig, authClient, silentHandler, e_1;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.logger.trace("SilentAuthCodeClient.acquireToken called");
              if (!request.code) {
                throw BrowserAuthError.createAuthCodeRequiredError();
              }
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientInitializeAuthorizationRequest, request.correlationId);
              return [4, this.initializeAuthorizationRequest(request, InteractionType.Silent)];
            case 1:
              silentRequest = _a.sent();
              this.browserStorage.updateCacheEntries(silentRequest.state, silentRequest.nonce, silentRequest.authority, silentRequest.loginHint || Constants.EMPTY_STRING, silentRequest.account || null);
              serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
              _a.label = 2;
            case 2:
              _a.trys.push([2, 4, , 5]);
              authCodeRequest = __assign(__assign({}, silentRequest), { code: request.code });
              this.performanceClient.setPreQueueTime(PerformanceEvents.StandardInteractionClientGetClientConfiguration, request.correlationId);
              return [4, this.getClientConfiguration(serverTelemetryManager, silentRequest.authority)];
            case 3:
              clientConfig = _a.sent();
              authClient = new HybridSpaAuthorizationCodeClient(clientConfig);
              this.logger.verbose("Auth code client created");
              silentHandler = new SilentHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.config.system, this.performanceClient);
              return [2, silentHandler.handleCodeResponseFromServer({
                code: request.code,
                msgraph_host: request.msGraphHost,
                cloud_graph_host_name: request.cloudGraphHostName,
                cloud_instance_host_name: request.cloudInstanceHostName
              }, silentRequest.state, authClient.authority, this.networkClient, false)];
            case 4:
              e_1 = _a.sent();
              if (e_1 instanceof AuthError) {
                e_1.setCorrelationId(this.correlationId);
              }
              serverTelemetryManager.cacheFailedRequest(e_1);
              this.browserStorage.cleanRequestByState(silentRequest.state);
              throw e_1;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    SilentAuthCodeClient2.prototype.logout = function() {
      return Promise.reject(BrowserAuthError.createSilentLogoutUnsupportedError());
    };
    return SilentAuthCodeClient2;
  }(StandardInteractionClient)
);

// node_modules/@azure/msal-browser/dist/app/ClientApplication.js
var ClientApplication = (
  /** @class */
  function() {
    function ClientApplication2(configuration) {
      this.isBrowserEnvironment = typeof window !== "undefined";
      this.config = buildConfiguration(configuration, this.isBrowserEnvironment);
      this.initialized = false;
      this.logger = new Logger(this.config.system.loggerOptions, name2, version2);
      this.networkClient = this.config.system.networkClient;
      this.navigationClient = this.config.system.navigationClient;
      this.redirectResponse = /* @__PURE__ */ new Map();
      this.hybridAuthCodeResponses = /* @__PURE__ */ new Map();
      this.performanceClient = this.isBrowserEnvironment ? new BrowserPerformanceClient(this.config.auth.clientId, this.config.auth.authority, this.logger, name2, version2, this.config.telemetry.application, this.config.system.cryptoOptions) : new StubPerformanceClient(this.config.auth.clientId, this.config.auth.authority, this.logger, name2, version2, this.config.telemetry.application);
      this.browserCrypto = this.isBrowserEnvironment ? new CryptoOps(this.logger, this.performanceClient, this.config.system.cryptoOptions) : DEFAULT_CRYPTO_IMPLEMENTATION;
      this.eventHandler = new EventHandler(this.logger, this.browserCrypto);
      this.browserStorage = this.isBrowserEnvironment ? new BrowserCacheManager(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : DEFAULT_BROWSER_CACHE_MANAGER(this.config.auth.clientId, this.logger);
      var nativeCacheOptions = {
        cacheLocation: BrowserCacheLocation.MemoryStorage,
        temporaryCacheLocation: BrowserCacheLocation.MemoryStorage,
        storeAuthStateInCookie: false,
        secureCookies: false,
        cacheMigrationEnabled: false
      };
      this.nativeInternalStorage = new BrowserCacheManager(this.config.auth.clientId, nativeCacheOptions, this.browserCrypto, this.logger);
      this.tokenCache = new TokenCache(this.config, this.browserStorage, this.logger, this.browserCrypto);
      this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
    }
    ClientApplication2.prototype.initialize = function() {
      return __awaiter(this, void 0, void 0, function() {
        var allowNativeBroker, initMeasurement, _a, e_1;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              this.logger.trace("initialize called");
              if (this.initialized) {
                this.logger.info("initialize has already been called, exiting early.");
                return [
                  2
                  /*return*/
                ];
              }
              allowNativeBroker = this.config.system.allowNativeBroker;
              initMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.InitializeClientApplication);
              this.eventHandler.emitEvent(EventType.INITIALIZE_START);
              if (!allowNativeBroker)
                return [3, 4];
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              _a = this;
              return [4, NativeMessageHandler.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient)];
            case 2:
              _a.nativeExtensionProvider = _b.sent();
              return [3, 4];
            case 3:
              e_1 = _b.sent();
              this.logger.verbose(e_1);
              return [3, 4];
            case 4:
              this.initialized = true;
              this.eventHandler.emitEvent(EventType.INITIALIZE_END);
              initMeasurement.endMeasurement({ allowNativeBroker, success: true });
              return [
                2
                /*return*/
              ];
          }
        });
      });
    };
    ClientApplication2.prototype.handleRedirectPromise = function(hash) {
      return __awaiter(this, void 0, void 0, function() {
        var loggedInAccounts, redirectResponseKey, response, request, redirectResponse, nativeClient, correlationId, redirectClient;
        var _this = this;
        return __generator(this, function(_a) {
          this.logger.verbose("handleRedirectPromise called");
          BrowserUtils.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized);
          loggedInAccounts = this.getAllAccounts();
          if (this.isBrowserEnvironment) {
            redirectResponseKey = hash || Constants.EMPTY_STRING;
            response = this.redirectResponse.get(redirectResponseKey);
            if (typeof response === "undefined") {
              this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_START, InteractionType.Redirect);
              this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise");
              request = this.browserStorage.getCachedNativeRequest();
              redirectResponse = void 0;
              if (request && NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !hash) {
                this.logger.trace("handleRedirectPromise - acquiring token from native platform");
                nativeClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, request.accountId, this.nativeInternalStorage, request.correlationId);
                redirectResponse = nativeClient.handleRedirectPromise();
              } else {
                this.logger.trace("handleRedirectPromise - acquiring token from web flow");
                correlationId = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.CORRELATION_ID, true) || Constants.EMPTY_STRING;
                redirectClient = this.createRedirectClient(correlationId);
                redirectResponse = redirectClient.handleRedirectPromise(hash);
              }
              response = redirectResponse.then(function(result) {
                if (result) {
                  var isLoggingIn = loggedInAccounts.length < _this.getAllAccounts().length;
                  if (isLoggingIn) {
                    _this.eventHandler.emitEvent(EventType.LOGIN_SUCCESS, InteractionType.Redirect, result);
                    _this.logger.verbose("handleRedirectResponse returned result, login success");
                  } else {
                    _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Redirect, result);
                    _this.logger.verbose("handleRedirectResponse returned result, acquire token success");
                  }
                }
                _this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_END, InteractionType.Redirect);
                return result;
              }).catch(function(e2) {
                if (loggedInAccounts.length > 0) {
                  _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Redirect, null, e2);
                } else {
                  _this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Redirect, null, e2);
                }
                _this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_END, InteractionType.Redirect);
                throw e2;
              });
              this.redirectResponse.set(redirectResponseKey, response);
            } else {
              this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call");
            }
            return [2, response];
          }
          this.logger.verbose("handleRedirectPromise returns null, not browser environment");
          return [2, null];
        });
      });
    };
    ClientApplication2.prototype.acquireTokenRedirect = function(request) {
      return __awaiter(this, void 0, void 0, function() {
        var correlationId, isLoggedIn, result, nativeClient, redirectClient;
        var _this = this;
        return __generator(this, function(_a) {
          correlationId = this.getRequestCorrelationId(request);
          this.logger.verbose("acquireTokenRedirect called", correlationId);
          this.preflightBrowserEnvironmentCheck(InteractionType.Redirect);
          isLoggedIn = this.getAllAccounts().length > 0;
          if (isLoggedIn) {
            this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Redirect, request);
          } else {
            this.eventHandler.emitEvent(EventType.LOGIN_START, InteractionType.Redirect, request);
          }
          if (this.nativeExtensionProvider && this.canUseNative(request)) {
            nativeClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(request), this.nativeInternalStorage, request.correlationId);
            result = nativeClient.acquireTokenRedirect(request).catch(function(e2) {
              if (e2 instanceof NativeAuthError && e2.isFatal()) {
                _this.nativeExtensionProvider = void 0;
                var redirectClient2 = _this.createRedirectClient(request.correlationId);
                return redirectClient2.acquireToken(request);
              } else if (e2 instanceof InteractionRequiredAuthError) {
                _this.logger.verbose("acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow");
                var redirectClient2 = _this.createRedirectClient(request.correlationId);
                return redirectClient2.acquireToken(request);
              }
              _this.browserStorage.setInteractionInProgress(false);
              throw e2;
            });
          } else {
            redirectClient = this.createRedirectClient(request.correlationId);
            result = redirectClient.acquireToken(request);
          }
          return [2, result.catch(function(e2) {
            if (isLoggedIn) {
              _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Redirect, null, e2);
            } else {
              _this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Redirect, null, e2);
            }
            throw e2;
          })];
        });
      });
    };
    ClientApplication2.prototype.acquireTokenPopup = function(request) {
      var _this = this;
      var correlationId = this.getRequestCorrelationId(request);
      var atPopupMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenPopup, correlationId);
      try {
        this.logger.verbose("acquireTokenPopup called", correlationId);
        this.preflightBrowserEnvironmentCheck(InteractionType.Popup);
      } catch (e2) {
        return Promise.reject(e2);
      }
      var loggedInAccounts = this.getAllAccounts();
      if (loggedInAccounts.length > 0) {
        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Popup, request);
      } else {
        this.eventHandler.emitEvent(EventType.LOGIN_START, InteractionType.Popup, request);
      }
      var result;
      if (this.canUseNative(request)) {
        result = this.acquireTokenNative(request, ApiId.acquireTokenPopup).then(function(response) {
          _this.browserStorage.setInteractionInProgress(false);
          atPopupMeasurement.endMeasurement({
            success: true,
            isNativeBroker: true,
            requestId: response.requestId
          });
          return response;
        }).catch(function(e2) {
          if (e2 instanceof NativeAuthError && e2.isFatal()) {
            _this.nativeExtensionProvider = void 0;
            var popupClient2 = _this.createPopupClient(request.correlationId);
            return popupClient2.acquireToken(request);
          } else if (e2 instanceof InteractionRequiredAuthError) {
            _this.logger.verbose("acquireTokenPopup - Resolving interaction required error thrown by native broker by falling back to web flow");
            var popupClient2 = _this.createPopupClient(request.correlationId);
            return popupClient2.acquireToken(request);
          }
          _this.browserStorage.setInteractionInProgress(false);
          throw e2;
        });
      } else {
        var popupClient = this.createPopupClient(request.correlationId);
        result = popupClient.acquireToken(request);
      }
      return result.then(function(result2) {
        var isLoggingIn = loggedInAccounts.length < _this.getAllAccounts().length;
        if (isLoggingIn) {
          _this.eventHandler.emitEvent(EventType.LOGIN_SUCCESS, InteractionType.Popup, result2);
        } else {
          _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Popup, result2);
        }
        atPopupMeasurement.addStaticFields({
          accessTokenSize: result2.accessToken.length,
          idTokenSize: result2.idToken.length
        });
        atPopupMeasurement.endMeasurement({
          success: true,
          requestId: result2.requestId
        });
        return result2;
      }).catch(function(e2) {
        if (loggedInAccounts.length > 0) {
          _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Popup, null, e2);
        } else {
          _this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Popup, null, e2);
        }
        atPopupMeasurement.endMeasurement({
          errorCode: e2.errorCode,
          subErrorCode: e2.subError,
          success: false
        });
        return Promise.reject(e2);
      });
    };
    ClientApplication2.prototype.trackPageVisibilityWithMeasurement = function() {
      var measurement = this.ssoSilentMeasurement || this.acquireTokenByCodeAsyncMeasurement;
      if (!measurement) {
        return;
      }
      this.logger.info("Perf: Visibility change detected in ", measurement.event.name);
      measurement.increment({
        visibilityChangeCount: 1
      });
    };
    ClientApplication2.prototype.ssoSilent = function(request) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var correlationId, validRequest, result, silentIframeClient;
        var _this = this;
        return __generator(this, function(_b) {
          correlationId = this.getRequestCorrelationId(request);
          validRequest = __assign(__assign({}, request), {
            // will be PromptValue.NONE or PromptValue.NO_SESSION
            prompt: request.prompt,
            correlationId
          });
          this.preflightBrowserEnvironmentCheck(InteractionType.Silent);
          this.ssoSilentMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SsoSilent, correlationId);
          (_a = this.ssoSilentMeasurement) === null || _a === void 0 ? void 0 : _a.increment({
            visibilityChangeCount: 0
          });
          document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
          this.logger.verbose("ssoSilent called", correlationId);
          this.eventHandler.emitEvent(EventType.SSO_SILENT_START, InteractionType.Silent, validRequest);
          if (this.canUseNative(validRequest)) {
            result = this.acquireTokenNative(validRequest, ApiId.ssoSilent).catch(function(e2) {
              if (e2 instanceof NativeAuthError && e2.isFatal()) {
                _this.nativeExtensionProvider = void 0;
                var silentIframeClient2 = _this.createSilentIframeClient(validRequest.correlationId);
                return silentIframeClient2.acquireToken(validRequest);
              }
              throw e2;
            });
          } else {
            silentIframeClient = this.createSilentIframeClient(validRequest.correlationId);
            result = silentIframeClient.acquireToken(validRequest);
          }
          return [2, result.then(function(response) {
            var _a2, _b2;
            _this.eventHandler.emitEvent(EventType.SSO_SILENT_SUCCESS, InteractionType.Silent, response);
            (_a2 = _this.ssoSilentMeasurement) === null || _a2 === void 0 ? void 0 : _a2.addStaticFields({
              accessTokenSize: response.accessToken.length,
              idTokenSize: response.idToken.length
            });
            (_b2 = _this.ssoSilentMeasurement) === null || _b2 === void 0 ? void 0 : _b2.endMeasurement({
              success: true,
              isNativeBroker: response.fromNativeBroker,
              requestId: response.requestId
            });
            return response;
          }).catch(function(e2) {
            var _a2;
            _this.eventHandler.emitEvent(EventType.SSO_SILENT_FAILURE, InteractionType.Silent, null, e2);
            (_a2 = _this.ssoSilentMeasurement) === null || _a2 === void 0 ? void 0 : _a2.endMeasurement({
              errorCode: e2.errorCode,
              subErrorCode: e2.subError,
              success: false
            });
            throw e2;
          }).finally(function() {
            document.removeEventListener("visibilitychange", _this.trackPageVisibilityWithMeasurement);
          })];
        });
      });
    };
    ClientApplication2.prototype.acquireTokenByCode = function(request) {
      return __awaiter(this, void 0, void 0, function() {
        var correlationId, atbcMeasurement, hybridAuthCode_1, response;
        var _this = this;
        return __generator(this, function(_a) {
          correlationId = this.getRequestCorrelationId(request);
          this.preflightBrowserEnvironmentCheck(InteractionType.Silent);
          this.logger.trace("acquireTokenByCode called", correlationId);
          this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_START, InteractionType.Silent, request);
          atbcMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenByCode, request.correlationId);
          try {
            if (request.code && request.nativeAccountId) {
              throw BrowserAuthError.createSpaCodeAndNativeAccountIdPresentError();
            } else if (request.code) {
              hybridAuthCode_1 = request.code;
              response = this.hybridAuthCodeResponses.get(hybridAuthCode_1);
              if (!response) {
                this.logger.verbose("Initiating new acquireTokenByCode request", correlationId);
                response = this.acquireTokenByCodeAsync(__assign(__assign({}, request), { correlationId })).then(function(result) {
                  _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_SUCCESS, InteractionType.Silent, result);
                  _this.hybridAuthCodeResponses.delete(hybridAuthCode_1);
                  atbcMeasurement.addStaticFields({
                    accessTokenSize: result.accessToken.length,
                    idTokenSize: result.idToken.length
                  });
                  atbcMeasurement.endMeasurement({
                    success: true,
                    isNativeBroker: result.fromNativeBroker,
                    requestId: result.requestId
                  });
                  return result;
                }).catch(function(error) {
                  _this.hybridAuthCodeResponses.delete(hybridAuthCode_1);
                  _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_FAILURE, InteractionType.Silent, null, error);
                  atbcMeasurement.endMeasurement({
                    errorCode: error.errorCode,
                    subErrorCode: error.subError,
                    success: false
                  });
                  throw error;
                });
                this.hybridAuthCodeResponses.set(hybridAuthCode_1, response);
              } else {
                this.logger.verbose("Existing acquireTokenByCode request found", request.correlationId);
                atbcMeasurement.discardMeasurement();
              }
              return [2, response];
            } else if (request.nativeAccountId) {
              if (this.canUseNative(request, request.nativeAccountId)) {
                return [2, this.acquireTokenNative(request, ApiId.acquireTokenByCode, request.nativeAccountId).catch(function(e2) {
                  if (e2 instanceof NativeAuthError && e2.isFatal()) {
                    _this.nativeExtensionProvider = void 0;
                  }
                  throw e2;
                })];
              } else {
                throw BrowserAuthError.createUnableToAcquireTokenFromNativePlatformError();
              }
            } else {
              throw BrowserAuthError.createAuthCodeOrNativeAccountIdRequiredError();
            }
          } catch (e2) {
            this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_FAILURE, InteractionType.Silent, null, e2);
            atbcMeasurement.endMeasurement({
              errorCode: e2 instanceof AuthError && e2.errorCode || void 0,
              subErrorCode: e2 instanceof AuthError && e2.subError || void 0,
              success: false
            });
            throw e2;
          }
          return [
            2
            /*return*/
          ];
        });
      });
    };
    ClientApplication2.prototype.acquireTokenByCodeAsync = function(request) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var silentAuthCodeClient, silentTokenResult;
        var _this = this;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              this.logger.trace("acquireTokenByCodeAsync called", request.correlationId);
              this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenByCodeAsync, request.correlationId);
              (_a = this.acquireTokenByCodeAsyncMeasurement) === null || _a === void 0 ? void 0 : _a.increment({
                visibilityChangeCount: 0
              });
              document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
              silentAuthCodeClient = this.createSilentAuthCodeClient(request.correlationId);
              return [4, silentAuthCodeClient.acquireToken(request).then(function(response) {
                var _a2;
                (_a2 = _this.acquireTokenByCodeAsyncMeasurement) === null || _a2 === void 0 ? void 0 : _a2.endMeasurement({
                  success: true,
                  fromCache: response.fromCache,
                  isNativeBroker: response.fromNativeBroker,
                  requestId: response.requestId
                });
                return response;
              }).catch(function(tokenRenewalError) {
                var _a2;
                (_a2 = _this.acquireTokenByCodeAsyncMeasurement) === null || _a2 === void 0 ? void 0 : _a2.endMeasurement({
                  errorCode: tokenRenewalError.errorCode,
                  subErrorCode: tokenRenewalError.subError,
                  success: false
                });
                throw tokenRenewalError;
              }).finally(function() {
                document.removeEventListener("visibilitychange", _this.trackPageVisibilityWithMeasurement);
              })];
            case 1:
              silentTokenResult = _b.sent();
              return [2, silentTokenResult];
          }
        });
      });
    };
    ClientApplication2.prototype.acquireTokenFromCache = function(silentCacheClient, commonRequest, silentRequest) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          this.performanceClient.addQueueMeasurement(PerformanceEvents.AcquireTokenFromCache, commonRequest.correlationId);
          switch (silentRequest.cacheLookupPolicy) {
            case CacheLookupPolicy.Default:
            case CacheLookupPolicy.AccessToken:
            case CacheLookupPolicy.AccessTokenAndRefreshToken:
              return [2, silentCacheClient.acquireToken(commonRequest)];
            default:
              throw ClientAuthError.createRefreshRequiredError();
          }
          return [
            2
            /*return*/
          ];
        });
      });
    };
    ClientApplication2.prototype.acquireTokenByRefreshToken = function(commonRequest, silentRequest) {
      return __awaiter(this, void 0, void 0, function() {
        var silentRefreshClient;
        return __generator(this, function(_a) {
          this.performanceClient.addQueueMeasurement(PerformanceEvents.AcquireTokenByRefreshToken, commonRequest.correlationId);
          switch (silentRequest.cacheLookupPolicy) {
            case CacheLookupPolicy.Default:
            case CacheLookupPolicy.AccessTokenAndRefreshToken:
            case CacheLookupPolicy.RefreshToken:
            case CacheLookupPolicy.RefreshTokenAndNetwork:
              silentRefreshClient = this.createSilentRefreshClient(commonRequest.correlationId);
              this.performanceClient.setPreQueueTime(PerformanceEvents.SilentRefreshClientAcquireToken, commonRequest.correlationId);
              return [2, silentRefreshClient.acquireToken(commonRequest)];
            default:
              throw ClientAuthError.createRefreshRequiredError();
          }
          return [
            2
            /*return*/
          ];
        });
      });
    };
    ClientApplication2.prototype.acquireTokenBySilentIframe = function(request) {
      return __awaiter(this, void 0, void 0, function() {
        var silentIframeClient;
        return __generator(this, function(_a) {
          this.performanceClient.addQueueMeasurement(PerformanceEvents.AcquireTokenBySilentIframe, request.correlationId);
          silentIframeClient = this.createSilentIframeClient(request.correlationId);
          this.performanceClient.setPreQueueTime(PerformanceEvents.SilentIframeClientAcquireToken, request.correlationId);
          return [2, silentIframeClient.acquireToken(request)];
        });
      });
    };
    ClientApplication2.prototype.logout = function(logoutRequest) {
      return __awaiter(this, void 0, void 0, function() {
        var correlationId;
        return __generator(this, function(_a) {
          correlationId = this.getRequestCorrelationId(logoutRequest);
          this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", correlationId);
          return [2, this.logoutRedirect(__assign({ correlationId }, logoutRequest))];
        });
      });
    };
    ClientApplication2.prototype.logoutRedirect = function(logoutRequest) {
      return __awaiter(this, void 0, void 0, function() {
        var correlationId, redirectClient;
        return __generator(this, function(_a) {
          correlationId = this.getRequestCorrelationId(logoutRequest);
          this.preflightBrowserEnvironmentCheck(InteractionType.Redirect);
          redirectClient = this.createRedirectClient(correlationId);
          return [2, redirectClient.logout(logoutRequest)];
        });
      });
    };
    ClientApplication2.prototype.logoutPopup = function(logoutRequest) {
      try {
        var correlationId = this.getRequestCorrelationId(logoutRequest);
        this.preflightBrowserEnvironmentCheck(InteractionType.Popup);
        var popupClient = this.createPopupClient(correlationId);
        return popupClient.logout(logoutRequest);
      } catch (e2) {
        return Promise.reject(e2);
      }
    };
    ClientApplication2.prototype.getAllAccounts = function() {
      this.logger.verbose("getAllAccounts called");
      return this.isBrowserEnvironment ? this.browserStorage.getAllAccounts() : [];
    };
    ClientApplication2.prototype.getAccountByUsername = function(username) {
      this.logger.trace("getAccountByUsername called");
      if (!username) {
        this.logger.warning("getAccountByUsername: No username provided");
        return null;
      }
      var account = this.browserStorage.getAccountInfoFilteredBy({ username });
      if (account) {
        this.logger.verbose("getAccountByUsername: Account matching username found, returning");
        this.logger.verbosePii("getAccountByUsername: Returning signed-in accounts matching username: " + username);
        return account;
      } else {
        this.logger.verbose("getAccountByUsername: No matching account found, returning null");
        return null;
      }
    };
    ClientApplication2.prototype.getAccountByHomeId = function(homeAccountId) {
      this.logger.trace("getAccountByHomeId called");
      if (!homeAccountId) {
        this.logger.warning("getAccountByHomeId: No homeAccountId provided");
        return null;
      }
      var account = this.browserStorage.getAccountInfoFilteredBy({ homeAccountId });
      if (account) {
        this.logger.verbose("getAccountByHomeId: Account matching homeAccountId found, returning");
        this.logger.verbosePii("getAccountByHomeId: Returning signed-in accounts matching homeAccountId: " + homeAccountId);
        return account;
      } else {
        this.logger.verbose("getAccountByHomeId: No matching account found, returning null");
        return null;
      }
    };
    ClientApplication2.prototype.getAccountByLocalId = function(localAccountId) {
      this.logger.trace("getAccountByLocalId called");
      if (!localAccountId) {
        this.logger.warning("getAccountByLocalId: No localAccountId provided");
        return null;
      }
      var account = this.browserStorage.getAccountInfoFilteredBy({ localAccountId });
      if (account) {
        this.logger.verbose("getAccountByLocalId: Account matching localAccountId found, returning");
        this.logger.verbosePii("getAccountByLocalId: Returning signed-in accounts matching localAccountId: " + localAccountId);
        return account;
      } else {
        this.logger.verbose("getAccountByLocalId: No matching account found, returning null");
        return null;
      }
    };
    ClientApplication2.prototype.setActiveAccount = function(account) {
      this.browserStorage.setActiveAccount(account);
    };
    ClientApplication2.prototype.getActiveAccount = function() {
      return this.browserStorage.getActiveAccount();
    };
    ClientApplication2.prototype.preflightBrowserEnvironmentCheck = function(interactionType, setInteractionInProgress) {
      if (setInteractionInProgress === void 0) {
        setInteractionInProgress = true;
      }
      this.logger.verbose("preflightBrowserEnvironmentCheck started");
      BrowserUtils.blockNonBrowserEnvironment(this.isBrowserEnvironment);
      BrowserUtils.blockRedirectInIframe(interactionType, this.config.system.allowRedirectInIframe);
      BrowserUtils.blockReloadInHiddenIframes();
      BrowserUtils.blockAcquireTokenInPopups();
      BrowserUtils.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized);
      if (interactionType === InteractionType.Redirect && this.config.cache.cacheLocation === BrowserCacheLocation.MemoryStorage && !this.config.cache.storeAuthStateInCookie) {
        throw BrowserConfigurationAuthError.createInMemoryRedirectUnavailableError();
      }
      if (interactionType === InteractionType.Redirect || interactionType === InteractionType.Popup) {
        this.preflightInteractiveRequest(setInteractionInProgress);
      }
    };
    ClientApplication2.prototype.preflightInteractiveRequest = function(setInteractionInProgress) {
      this.logger.verbose("preflightInteractiveRequest called, validating app environment");
      BrowserUtils.blockReloadInHiddenIframes();
      if (setInteractionInProgress) {
        this.browserStorage.setInteractionInProgress(true);
      }
    };
    ClientApplication2.prototype.acquireTokenNative = function(request, apiId, accountId) {
      return __awaiter(this, void 0, void 0, function() {
        var nativeClient;
        return __generator(this, function(_a) {
          this.logger.trace("acquireTokenNative called");
          if (!this.nativeExtensionProvider) {
            throw BrowserAuthError.createNativeConnectionNotEstablishedError();
          }
          nativeClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, apiId, this.performanceClient, this.nativeExtensionProvider, accountId || this.getNativeAccountId(request), this.nativeInternalStorage, request.correlationId);
          return [2, nativeClient.acquireToken(request)];
        });
      });
    };
    ClientApplication2.prototype.canUseNative = function(request, accountId) {
      this.logger.trace("canUseNative called");
      if (!NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, request.authenticationScheme)) {
        this.logger.trace("canUseNative: isNativeAvailable returned false, returning false");
        return false;
      }
      if (request.prompt) {
        switch (request.prompt) {
          case PromptValue.NONE:
          case PromptValue.CONSENT:
          case PromptValue.LOGIN:
            this.logger.trace("canUseNative: prompt is compatible with native flow");
            break;
          default:
            this.logger.trace("canUseNative: prompt = " + request.prompt + " is not compatible with native flow, returning false");
            return false;
        }
      }
      if (!accountId && !this.getNativeAccountId(request)) {
        this.logger.trace("canUseNative: nativeAccountId is not available, returning false");
        return false;
      }
      return true;
    };
    ClientApplication2.prototype.getNativeAccountId = function(request) {
      var account = request.account || this.browserStorage.getAccountInfoByHints(request.loginHint, request.sid) || this.getActiveAccount();
      return account && account.nativeAccountId || "";
    };
    ClientApplication2.prototype.createPopupClient = function(correlationId) {
      return new PopupClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, correlationId);
    };
    ClientApplication2.prototype.createRedirectClient = function(correlationId) {
      return new RedirectClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, correlationId);
    };
    ClientApplication2.prototype.createSilentIframeClient = function(correlationId) {
      return new SilentIframeClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, correlationId);
    };
    ClientApplication2.prototype.createSilentCacheClient = function(correlationId) {
      return new SilentCacheClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, correlationId);
    };
    ClientApplication2.prototype.createSilentRefreshClient = function(correlationId) {
      return new SilentRefreshClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, correlationId);
    };
    ClientApplication2.prototype.createSilentAuthCodeClient = function(correlationId) {
      return new SilentAuthCodeClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, correlationId);
    };
    ClientApplication2.prototype.addEventCallback = function(callback) {
      return this.eventHandler.addEventCallback(callback);
    };
    ClientApplication2.prototype.removeEventCallback = function(callbackId) {
      this.eventHandler.removeEventCallback(callbackId);
    };
    ClientApplication2.prototype.addPerformanceCallback = function(callback) {
      return this.performanceClient.addPerformanceCallback(callback);
    };
    ClientApplication2.prototype.removePerformanceCallback = function(callbackId) {
      return this.performanceClient.removePerformanceCallback(callbackId);
    };
    ClientApplication2.prototype.enableAccountStorageEvents = function() {
      this.eventHandler.enableAccountStorageEvents();
    };
    ClientApplication2.prototype.disableAccountStorageEvents = function() {
      this.eventHandler.disableAccountStorageEvents();
    };
    ClientApplication2.prototype.getTokenCache = function() {
      return this.tokenCache;
    };
    ClientApplication2.prototype.getLogger = function() {
      return this.logger;
    };
    ClientApplication2.prototype.setLogger = function(logger) {
      this.logger = logger;
    };
    ClientApplication2.prototype.initializeWrapperLibrary = function(sku, version3) {
      this.browserStorage.setWrapperMetadata(sku, version3);
    };
    ClientApplication2.prototype.setNavigationClient = function(navigationClient) {
      this.navigationClient = navigationClient;
    };
    ClientApplication2.prototype.getConfiguration = function() {
      return this.config;
    };
    ClientApplication2.prototype.getRequestCorrelationId = function(request) {
      if (request === null || request === void 0 ? void 0 : request.correlationId) {
        return request.correlationId;
      }
      if (this.isBrowserEnvironment) {
        return this.browserCrypto.createNewGuid();
      }
      return Constants.EMPTY_STRING;
    };
    return ClientApplication2;
  }()
);

// node_modules/@azure/msal-browser/dist/app/PublicClientApplication.js
var PublicClientApplication = (
  /** @class */
  function(_super) {
    __extends(PublicClientApplication2, _super);
    function PublicClientApplication2(configuration) {
      var _this = _super.call(this, configuration) || this;
      _this.astsAsyncMeasurement = void 0;
      _this.activeSilentTokenRequests = /* @__PURE__ */ new Map();
      _this.trackPageVisibility = _this.trackPageVisibility.bind(_this);
      return _this;
    }
    PublicClientApplication2.prototype.loginRedirect = function(request) {
      return __awaiter(this, void 0, void 0, function() {
        var correlationId;
        return __generator(this, function(_a) {
          correlationId = this.getRequestCorrelationId(request);
          this.logger.verbose("loginRedirect called", correlationId);
          return [2, this.acquireTokenRedirect(__assign({ correlationId }, request || DEFAULT_REQUEST))];
        });
      });
    };
    PublicClientApplication2.prototype.loginPopup = function(request) {
      var correlationId = this.getRequestCorrelationId(request);
      this.logger.verbose("loginPopup called", correlationId);
      return this.acquireTokenPopup(__assign({ correlationId }, request || DEFAULT_REQUEST));
    };
    PublicClientApplication2.prototype.acquireTokenSilent = function(request) {
      return __awaiter(this, void 0, void 0, function() {
        var correlationId, atsMeasurement, account, thumbprint, silentRequestKey, cachedResponse, response;
        var _this = this;
        return __generator(this, function(_a) {
          correlationId = this.getRequestCorrelationId(request);
          atsMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenSilent, correlationId);
          atsMeasurement.addStaticFields({
            cacheLookupPolicy: request.cacheLookupPolicy
          });
          this.preflightBrowserEnvironmentCheck(InteractionType.Silent);
          this.logger.verbose("acquireTokenSilent called", correlationId);
          account = request.account || this.getActiveAccount();
          if (!account) {
            throw BrowserAuthError.createNoAccountError();
          }
          thumbprint = {
            clientId: this.config.auth.clientId,
            authority: request.authority || Constants.EMPTY_STRING,
            scopes: request.scopes,
            homeAccountIdentifier: account.homeAccountId,
            claims: request.claims,
            authenticationScheme: request.authenticationScheme,
            resourceRequestMethod: request.resourceRequestMethod,
            resourceRequestUri: request.resourceRequestUri,
            shrClaims: request.shrClaims,
            sshKid: request.sshKid
          };
          silentRequestKey = JSON.stringify(thumbprint);
          cachedResponse = this.activeSilentTokenRequests.get(silentRequestKey);
          if (typeof cachedResponse === "undefined") {
            this.logger.verbose("acquireTokenSilent called for the first time, storing active request", correlationId);
            this.performanceClient.setPreQueueTime(PerformanceEvents.AcquireTokenSilentAsync, correlationId);
            response = this.acquireTokenSilentAsync(__assign(__assign({}, request), { correlationId }), account).then(function(result) {
              _this.activeSilentTokenRequests.delete(silentRequestKey);
              atsMeasurement.addStaticFields({
                accessTokenSize: result.accessToken.length,
                idTokenSize: result.idToken.length
              });
              atsMeasurement.endMeasurement({
                success: true,
                fromCache: result.fromCache,
                isNativeBroker: result.fromNativeBroker,
                cacheLookupPolicy: request.cacheLookupPolicy,
                requestId: result.requestId
              });
              return result;
            }).catch(function(error) {
              _this.activeSilentTokenRequests.delete(silentRequestKey);
              atsMeasurement.endMeasurement({
                errorCode: error.errorCode,
                subErrorCode: error.subError,
                success: false
              });
              throw error;
            });
            this.activeSilentTokenRequests.set(silentRequestKey, response);
            return [2, response];
          } else {
            this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", correlationId);
            atsMeasurement.discardMeasurement();
            return [2, cachedResponse];
          }
        });
      });
    };
    PublicClientApplication2.prototype.trackPageVisibility = function() {
      if (!this.astsAsyncMeasurement) {
        return;
      }
      this.logger.info("Perf: Visibility change detected");
      this.astsAsyncMeasurement.increment({
        visibilityChangeCount: 1
      });
    };
    PublicClientApplication2.prototype.acquireTokenSilentAsync = function(request, account) {
      var _a;
      return __awaiter(this, void 0, void 0, function() {
        var result, silentRequest, silentCacheClient, silentRequest_1, requestWithCLP_1;
        var _this = this;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              this.performanceClient.addQueueMeasurement(PerformanceEvents.AcquireTokenSilentAsync, request.correlationId);
              this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Silent, request);
              this.astsAsyncMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenSilentAsync, request.correlationId);
              (_a = this.astsAsyncMeasurement) === null || _a === void 0 ? void 0 : _a.increment({
                visibilityChangeCount: 0
              });
              document.addEventListener("visibilitychange", this.trackPageVisibility);
              if (!(NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, request.authenticationScheme) && account.nativeAccountId))
                return [3, 1];
              this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform");
              silentRequest = __assign(__assign({}, request), { account });
              result = this.acquireTokenNative(silentRequest, ApiId.acquireTokenSilent_silentFlow).catch(function(e2) {
                return __awaiter(_this, void 0, void 0, function() {
                  var silentIframeClient;
                  return __generator(this, function(_a2) {
                    if (e2 instanceof NativeAuthError && e2.isFatal()) {
                      this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow");
                      this.nativeExtensionProvider = void 0;
                      silentIframeClient = this.createSilentIframeClient(request.correlationId);
                      return [2, silentIframeClient.acquireToken(request)];
                    }
                    throw e2;
                  });
                });
              });
              return [3, 3];
            case 1:
              this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow");
              silentCacheClient = this.createSilentCacheClient(request.correlationId);
              this.performanceClient.setPreQueueTime(PerformanceEvents.InitializeSilentRequest, request.correlationId);
              return [4, silentCacheClient.initializeSilentRequest(request, account)];
            case 2:
              silentRequest_1 = _b.sent();
              requestWithCLP_1 = __assign(__assign({}, request), {
                // set the request's CacheLookupPolicy to Default if it was not optionally passed in
                cacheLookupPolicy: request.cacheLookupPolicy || CacheLookupPolicy.Default
              });
              this.performanceClient.setPreQueueTime(PerformanceEvents.AcquireTokenFromCache, silentRequest_1.correlationId);
              result = this.acquireTokenFromCache(silentCacheClient, silentRequest_1, requestWithCLP_1).catch(function(cacheError) {
                if (requestWithCLP_1.cacheLookupPolicy === CacheLookupPolicy.AccessToken) {
                  throw cacheError;
                }
                BrowserUtils.blockReloadInHiddenIframes();
                _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_NETWORK_START, InteractionType.Silent, silentRequest_1);
                _this.performanceClient.setPreQueueTime(PerformanceEvents.AcquireTokenByRefreshToken, silentRequest_1.correlationId);
                return _this.acquireTokenByRefreshToken(silentRequest_1, requestWithCLP_1).catch(function(refreshTokenError) {
                  var isServerError = refreshTokenError instanceof ServerError;
                  var isInteractionRequiredError = refreshTokenError instanceof InteractionRequiredAuthError;
                  var isInvalidGrantError = refreshTokenError.errorCode === BrowserConstants.INVALID_GRANT_ERROR;
                  if ((!isServerError || !isInvalidGrantError || isInteractionRequiredError || requestWithCLP_1.cacheLookupPolicy === CacheLookupPolicy.AccessTokenAndRefreshToken || requestWithCLP_1.cacheLookupPolicy === CacheLookupPolicy.RefreshToken) && requestWithCLP_1.cacheLookupPolicy !== CacheLookupPolicy.Skip) {
                    throw refreshTokenError;
                  }
                  _this.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", request.correlationId);
                  _this.performanceClient.setPreQueueTime(PerformanceEvents.AcquireTokenBySilentIframe, silentRequest_1.correlationId);
                  return _this.acquireTokenBySilentIframe(silentRequest_1);
                });
              });
              _b.label = 3;
            case 3:
              return [2, result.then(function(response) {
                var _a2;
                _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Silent, response);
                (_a2 = _this.astsAsyncMeasurement) === null || _a2 === void 0 ? void 0 : _a2.endMeasurement({
                  success: true,
                  fromCache: response.fromCache,
                  isNativeBroker: response.fromNativeBroker,
                  requestId: response.requestId
                });
                return response;
              }).catch(function(tokenRenewalError) {
                var _a2;
                _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Silent, null, tokenRenewalError);
                (_a2 = _this.astsAsyncMeasurement) === null || _a2 === void 0 ? void 0 : _a2.endMeasurement({
                  errorCode: tokenRenewalError.errorCode,
                  subErrorCode: tokenRenewalError.subError,
                  success: false
                });
                throw tokenRenewalError;
              }).finally(function() {
                document.removeEventListener("visibilitychange", _this.trackPageVisibility);
              })];
          }
        });
      });
    };
    return PublicClientApplication2;
  }(ClientApplication)
);

// node_modules/@azure/msal-browser/dist/event/EventMessage.js
var EventMessageUtils = (
  /** @class */
  function() {
    function EventMessageUtils2() {
    }
    EventMessageUtils2.getInteractionStatusFromEvent = function(message, currentStatus) {
      switch (message.eventType) {
        case EventType.LOGIN_START:
          return InteractionStatus.Login;
        case EventType.SSO_SILENT_START:
          return InteractionStatus.SsoSilent;
        case EventType.ACQUIRE_TOKEN_START:
          if (message.interactionType === InteractionType.Redirect || message.interactionType === InteractionType.Popup) {
            return InteractionStatus.AcquireToken;
          }
          break;
        case EventType.HANDLE_REDIRECT_START:
          return InteractionStatus.HandleRedirect;
        case EventType.LOGOUT_START:
          return InteractionStatus.Logout;
        case EventType.SSO_SILENT_SUCCESS:
        case EventType.SSO_SILENT_FAILURE:
          if (currentStatus && currentStatus !== InteractionStatus.SsoSilent) {
            break;
          }
          return InteractionStatus.None;
        case EventType.LOGOUT_END:
          if (currentStatus && currentStatus !== InteractionStatus.Logout) {
            break;
          }
          return InteractionStatus.None;
        case EventType.HANDLE_REDIRECT_END:
          if (currentStatus && currentStatus !== InteractionStatus.HandleRedirect) {
            break;
          }
          return InteractionStatus.None;
        case EventType.LOGIN_SUCCESS:
        case EventType.LOGIN_FAILURE:
        case EventType.ACQUIRE_TOKEN_SUCCESS:
        case EventType.ACQUIRE_TOKEN_FAILURE:
        case EventType.RESTORE_FROM_BFCACHE:
          if (message.interactionType === InteractionType.Redirect || message.interactionType === InteractionType.Popup) {
            if (currentStatus && currentStatus !== InteractionStatus.Login && currentStatus !== InteractionStatus.AcquireToken) {
              break;
            }
            return InteractionStatus.None;
          }
          break;
      }
      return null;
    };
    return EventMessageUtils2;
  }()
);

// node_modules/@azure/msal-browser/dist/crypto/SignedHttpRequest.js
var SignedHttpRequest = (
  /** @class */
  function() {
    function SignedHttpRequest2(shrParameters, shrOptions) {
      var loggerOptions = shrOptions && shrOptions.loggerOptions || {};
      this.logger = new Logger(loggerOptions, name2, version2);
      this.cryptoOps = new CryptoOps(this.logger);
      this.popTokenGenerator = new PopTokenGenerator(this.cryptoOps);
      this.shrParameters = shrParameters;
    }
    SignedHttpRequest2.prototype.generatePublicKeyThumbprint = function() {
      return __awaiter(this, void 0, void 0, function() {
        var kid;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.popTokenGenerator.generateKid(this.shrParameters)];
            case 1:
              kid = _a.sent().kid;
              return [2, kid];
          }
        });
      });
    };
    SignedHttpRequest2.prototype.signRequest = function(payload, publicKeyThumbprint, claims) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, this.popTokenGenerator.signPayload(payload, publicKeyThumbprint, this.shrParameters, claims)];
        });
      });
    };
    SignedHttpRequest2.prototype.removeKeys = function(publicKeyThumbprint) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              return [4, this.cryptoOps.removeTokenBindingKey(publicKeyThumbprint)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    };
    return SignedHttpRequest2;
  }()
);

// node_modules/@arc-web/components/dist/components/sso/arc-sso.styles.js
var arc_sso_styles_default = [
  component_styles_default,
  css`
    :host,
    #main {
      display: inline-flex;
    }

    #desktopTrigger {
      display: none;
    }

    arc-avatar {
      --size: 1.5rem;
      cursor: pointer;
    }

    /* Medium devices and up. */
    @media (min-width: ${mobileBreakpoint}rem) {
      #mobileTrigger {
        display: none;
      }

      #desktopTrigger {
        display: initial;
        --btn-color: rgb(var(--arc-font-color));
      }
    }
  `
];

// node_modules/@arc-web/components/dist/components/avatar/arc-avatar.styles.js
var arc_avatar_styles_default = [
  component_styles_default,
  css`
    :host {
      display: inline-flex;
      border-radius: 50%;
      --size: 3rem;
    }

    .avatar {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: var(--size);
      height: var(--size);
      color: rgb(var(--arc-grey-000));
      user-select: none;
      vertical-align: middle;
    }

    .avatar:not(.avatar--has-image) {
      background-color: rgb(var(--arc-grey-050));
    }

    #avatar {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }

    .avatar,
    #avatar {
      border-radius: inherit;
    }

    #initials {
      font-size: calc(var(--size) * 0.4);
      line-height: 1;
    }

    #icon {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `
];

// node_modules/@arc-web/components/dist/components/avatar/ArcAvatar.js
var ArcAvatar = class extends LitElement {
  constructor() {
    super(...arguments);
    this._hasError = false;
  }
  handleImageChange() {
    this._hasError = false;
  }
  render() {
    return html`
      <div
        id="main"
        role="img"
        aria-label=${this.label}
        class=${classMap({
      avatar: true,
      "avatar--has-image": this.image && !this._hasError
    })}
      >
        ${when(this.image && !this._hasError, () => html`<img
              id="avatar"
              src=${this.image}
              alt="Avatar"
              @error=${() => {
      this._hasError = true;
    }}
            />`, () => when(this.name, () => html`<div id="initials">${this.name}</div>`, () => html`<div id="icon">
                <slot name="icon">
                  <arc-icon name="user"></arc-icon>
                </slot>
              </div>`))}
      </div>
    `;
  }
};
ArcAvatar.tag = "arc-avatar";
ArcAvatar.styles = arc_avatar_styles_default;
__decorate([
  state()
], ArcAvatar.prototype, "_hasError", void 0);
__decorate([
  property({ type: String })
], ArcAvatar.prototype, "image", void 0);
__decorate([
  property({ type: String })
], ArcAvatar.prototype, "label", void 0);
__decorate([
  property({
    type: String,
    converter: (attrValue) => attrValue ? stringToInitials(attrValue) : ""
  })
], ArcAvatar.prototype, "name", void 0);
__decorate([
  watch("image")
], ArcAvatar.prototype, "handleImageChange", null);

// node_modules/@arc-web/components/dist/components/avatar/arc-avatar.js
customElements.define("arc-avatar", ArcAvatar);

// node_modules/@arc-web/components/dist/components/sso/ArcSSO.js
var ArcSSO = class extends LitElement {
  constructor() {
    super(...arguments);
    this.loginRequest = {
      scopes: ["openid", "profile", "User.Read"]
    };
    this._isAuth = false;
  }
  async handleAuthChange() {
    emit(this, ARC_EVENTS.auth, {
      detail: {
        authenticated: this._isAuth,
        account: this.getAccount()
      }
    });
    if (this._isAuth) {
      this._avatar = await this.getAvatar();
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this._msalInstance = this._initMsal();
    if (this.scopes && this.scopes.length > 0) {
      this.loginRequest.scopes = this.loginRequest.scopes.concat(this.scopes);
    }
    this._isAuth = !!this.getAccount();
  }
  _initMsal() {
    const msalConfig = {
      auth: {
        clientId: this.clientId,
        authority: `https://login.microsoftonline.com/${this.tenantId ? this.tenantId : "common/"}`,
        redirectUri: this.redirectUri
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false
      }
    };
    return new PublicClientApplication(msalConfig);
  }
  _getAccessToken() {
    const account = this.getAccount();
    const accessTokenRequest = {
      account,
      scopes: this.loginRequest.scopes
    };
    return account ? this._msalInstance.acquireTokenSilent(accessTokenRequest).then((resp) => resp.accessToken) : void 0;
  }
  signIn() {
    this._msalInstance.addEventCallback((event) => {
      if (event.eventType === EventType.LOGIN_SUCCESS && !!event.payload) {
        this._msalInstance.setActiveAccount(event.payload);
        this._isAuth = true;
      }
    });
    this._msalInstance.handleRedirectPromise().then(() => {
      if (!this.getAccount()) {
        this._msalInstance.loginPopup(this.loginRequest);
      }
    });
  }
  signOut() {
    this._msalInstance.logoutRedirect();
  }
  getAccount() {
    return this._msalInstance.getAllAccounts()[0];
  }
  async getAvatar() {
    const token = await this._getAccessToken();
    return token ? fetch("https://graph.microsoft.com/v1.0/me/photos/48x48/$value", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "image/jpg"
      }
    }).then((resp) => resp.blob()).then((resp) => URL.createObjectURL(resp)) : "";
  }
  render() {
    const { name: name3 } = this.getAccount() || {};
    return html`
      <div id="main">
        <slot name="login" ?hidden=${this._isAuth}>
          <arc-button type="tab" @click=${this.signIn}>Login</arc-button>
        </slot>
        <slot name="logout" ?hidden=${!this._isAuth}>
          <arc-dropdown id="userMenu" placement=${FLOATING_PLACEMENTS["bottom-end"]} hoist>
            <arc-button id="desktopTrigger" slot="trigger" type="tab">
              ${name3}
              <arc-avatar slot="suffix" name=${name3} image=${until(this._avatar, "")} label="User avatar"></arc-avatar>
            </arc-button>
            <arc-avatar
              id="mobileTrigger"
              slot="trigger"
              image=${until(this._avatar, "")}
              name=${name3}
              label="User avatar"
            ></arc-avatar>
            <arc-menu>
              <arc-menu-item @click=${this.signOut}>Logout</arc-menu-item>
            </arc-menu>
          </arc-dropdown>
        </slot>
      </div>
    `;
  }
};
ArcSSO.tag = "arc-sso";
ArcSSO.styles = arc_sso_styles_default;
__decorate([
  state()
], ArcSSO.prototype, "_isAuth", void 0);
__decorate([
  state()
], ArcSSO.prototype, "_avatar", void 0);
__decorate([
  property({ type: String, attribute: "client-id" })
], ArcSSO.prototype, "clientId", void 0);
__decorate([
  property({ type: String, attribute: "tenant-id" })
], ArcSSO.prototype, "tenantId", void 0);
__decorate([
  property({ type: String, attribute: "redirect-uri" })
], ArcSSO.prototype, "redirectUri", void 0);
__decorate([
  property({
    type: Array,
    converter: (attrValue) => attrValue ? stringToArray(attrValue) : []
  })
], ArcSSO.prototype, "scopes", void 0);
__decorate([
  watch("_isAuth")
], ArcSSO.prototype, "handleAuthChange", null);

// node_modules/@arc-web/components/dist/components/sso/arc-sso.js
customElements.define("arc-sso", ArcSSO);

// node_modules/@arc-web/components/dist/components/sso/react.js
var ArcSSO2 = createComponent({
  tagName: "arc-sso",
  elementClass: ArcSSO,
  react: import_react38.default,
  events: {
    onArcAuth: ARC_EVENTS.auth
  }
});

// node_modules/@arc-web/components/dist/components/switch/react.js
var import_react40 = __toESM(require_react());

// node_modules/@arc-web/components/dist/components/switch/arc-switch.styles.js
var arc_switch_styles_default = [
  component_styles_default,
  control_styles_default,
  css`
    :host {
      --height: var(--arc-font-size-x-large);
      --width: calc(var(--height) * 2);
      --thumb-size: calc(var(--arc-font-size-x-large) - 4px);
    }

    .switch {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      cursor: pointer;
      gap: var(--arc-spacing-x-small);
    }

    #base {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--width);
      height: var(--height);
      background-color: rgb(var(--arc-grey-060));
      border-radius: var(--height);
    }

    #control {
      position: absolute;
      transform: translateX(calc((var(--width) - var(--height)) / -2));
    }

    #thumb {
      width: var(--thumb-size);
      height: var(--thumb-size);
      background-color: rgb(var(--arc-grey-000));
      border-radius: 50%;
    }

    /* Hover, Focus & Mouse down */
    .switch:not(.switch--disabled) input:hover + #control,
    .switch:not(.switch--disabled) input:focus-visible + #control {
      background-color: rgba(var(--arc-font-color), 10%);
    }
    .switch:not(.switch--disabled) input:active + #control {
      background-color: rgba(var(--arc-font-color), 30%);
    }

    /* Disabled */
    .switch--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Checked */
    .switch--checked #base {
      background-color: rgb(var(--arc-color-info));
    }

    .switch--checked #control {
      transform: translateX(calc((var(--width) - var(--height)) / 2));
    }
  `
];

// node_modules/@arc-web/components/dist/components/switch/ArcSwitch.js
var ArcSwitch = class extends LitElement {
  constructor() {
    super(...arguments);
    this.formController = new FormController(this, {
      value: (control) => control.checked ? control.value : void 0
    });
    this.disabled = false;
    this.required = false;
    this.checked = false;
    this.invalid = false;
  }
  handleDisabledChange() {
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }
  handleCheckedChange() {
    this.input.checked = this.checked;
    this.invalid = !this.input.checkValidity();
  }
  firstUpdated() {
    this.invalid = !this.input.checkValidity();
  }
  click() {
    this.input.click();
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  reportValidity() {
    return this.input.reportValidity();
  }
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  _handleClick() {
    this.checked = !this.checked;
    emit(this, ARC_EVENTS.change);
  }
  render() {
    return html`
      <label
        id="main"
        class=${classMap({
      switch: true,
      "switch--checked": this.checked,
      "switch--disabled": this.disabled
    })}
      >
        <span id="base">
          <input
            type="checkbox"
            name=${ifDefined(this.name)}
            .value=${ifDefined(this.value)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            aria-disabled=${this.disabled ? "true" : "false"}
            @click=${this._handleClick}
          />
          <span id="control">
            <span id="thumb"></span>
          </span>
        </span>
        <span id="label"><slot></slot></span>
      </label>
    `;
  }
};
ArcSwitch.tag = "arc-switch";
ArcSwitch.styles = arc_switch_styles_default;
__decorate([
  query('input[type="checkbox"]')
], ArcSwitch.prototype, "input", void 0);
__decorate([
  property({ type: String })
], ArcSwitch.prototype, "name", void 0);
__decorate([
  property({ type: String })
], ArcSwitch.prototype, "value", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcSwitch.prototype, "disabled", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcSwitch.prototype, "required", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcSwitch.prototype, "checked", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcSwitch.prototype, "invalid", void 0);
__decorate([
  watch("disabled", { waitUntilFirstUpdate: true })
], ArcSwitch.prototype, "handleDisabledChange", null);
__decorate([
  watch("checked", { waitUntilFirstUpdate: true })
], ArcSwitch.prototype, "handleCheckedChange", null);

// node_modules/@arc-web/components/dist/components/switch/arc-switch.js
customElements.define("arc-switch", ArcSwitch);

// node_modules/@arc-web/components/dist/components/switch/react.js
var ArcSwitch2 = createComponent({
  tagName: "arc-switch",
  elementClass: ArcSwitch,
  react: import_react40.default,
  events: {
    onArcChange: ARC_EVENTS.change
  }
});

// node_modules/@arc-web/components/dist/components/avatar/react.js
var import_react42 = __toESM(require_react());
var ArcAvatar2 = createComponent({ tagName: "arc-avatar", elementClass: ArcAvatar, react: import_react42.default });

// node_modules/@arc-web/components/dist/components/chip/react.js
var import_react44 = __toESM(require_react());

// node_modules/@arc-web/components/dist/components/chip/constants/ChipConstants.js
var CHIP_TYPES = {
  filled: "filled",
  outlined: "outlined"
};

// node_modules/@arc-web/components/dist/components/chip/arc-chip.styles.js
var arc_chip_styles_default = [
  component_styles_default,
  css`
    :host {
      display: inline-block;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      font-size: var(--arc-font-size-small);
      white-space: nowrap;
      cursor: default;
      padding: 0 var(--arc-spacing-small);
      gap: var(--arc-spacing-small);
      outline: 0;
      text-decoration: none;
      user-select: none;
      vertical-align: middle;
      background-color: rgb(var(--arc-color-default));
      border: none;
      height: var(--chip-size);
      border-radius: var(--chip-size);
    }

    .chip span {
      display: inherit;
      align-items: inherit;
    }

    .chip--small {
      --chip-size: var(--arc-input-height-small);
    }

    .chip--medium {
      --chip-size: var(--arc-input-height-medium);
    }

    .chip--large {
      --chip-size: var(--arc-input-height-large);
    }

    .chip--has-avatar {
      padding-left: calc(var(--chip-size) * 0.15);
    }

    .chip--outlined {
      background-color: transparent;
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
    }

    .chip--clearable {
      padding-right: 0;
    }

    ::slotted(arc-avatar) {
      --size: calc(var(--chip-size) - 0.5rem);
    }
  `
];

// node_modules/@arc-web/components/dist/components/chip/ArcChip.js
var ArcChip = class extends LitElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "avatar");
    this.size = INPUT_SIZES.small;
    this.type = CHIP_TYPES.filled;
    this.clearable = false;
  }
  _handleClear() {
    emit(this, ARC_EVENTS.clear);
  }
  render() {
    return html`
      <div
        id="main"
        class=${classMap({
      chip: true,
      "chip--small": this.size === INPUT_SIZES.small,
      "chip--medium": this.size === INPUT_SIZES.medium,
      "chip--large": this.size === INPUT_SIZES.large,
      "chip--outlined": this.type === CHIP_TYPES.outlined,
      "chip--has-avatar": this.hasSlotController.test("avatar"),
      "chip--clearable": this.clearable
    })}
      >
        <slot name="avatar"></slot>
        <span>
          <slot></slot>
          ${when(this.clearable, () => html`<arc-icon-button
                name="close-circle"
                label="Clear chip"
                @click=${this._handleClear}
              ></arc-icon-button>`)}
        </span>
      </div>
    `;
  }
};
ArcChip.tag = "arc-chip";
ArcChip.styles = arc_chip_styles_default;
__decorate([
  property({ type: String, reflect: true })
], ArcChip.prototype, "size", void 0);
__decorate([
  property({ type: String, reflect: true })
], ArcChip.prototype, "type", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcChip.prototype, "clearable", void 0);

// node_modules/@arc-web/components/dist/components/chip/arc-chip.js
customElements.define("arc-chip", ArcChip);

// node_modules/@arc-web/components/dist/components/chip/react.js
var ArcChip2 = createComponent({
  tagName: "arc-chip",
  elementClass: ArcChip,
  react: import_react44.default,
  events: {
    onArcClear: ARC_EVENTS.clear
  }
});

// node_modules/@arc-web/components/dist/components/tooltip/react.js
var import_react46 = __toESM(require_react());

// node_modules/@arc-web/components/dist/components/tooltip/arc-tooltip.styles.js
var arc_tooltip_styles_default = [
  component_styles_default,
  css`
    :host {
      --max-width: 20rem;
      --arrow-size: 4px;

      display: contents;
    }

    #target {
      display: contents;
    }

    #positioner {
      position: absolute;
      z-index: var(--arc-z-index-tooltip);
      pointer-events: none;
    }

    #positioner[data-placement^='top'] #tooltip {
      transform-origin: bottom;
    }

    #positioner[data-placement^='bottom'] #tooltip {
      transform-origin: top;
    }

    #positioner[data-placement^='left'] #tooltip {
      transform-origin: right;
    }

    #positioner[data-placement^='right'] #tooltip {
      transform-origin: left;
    }

    #arrow {
      position: absolute;
      background-color: rgb(var(--arc-background-color));
      width: calc(var(--arrow-size) * 2);
      height: calc(var(--arrow-size) * 2);
      transform: rotate(45deg);
      z-index: -1;
    }

    #content {
      max-width: var(--max-width);
      border-radius: var(--arc-border-radius-medium);
      background-color: rgb(var(--arc-background-color));
      padding: 0.25rem var(--arc-spacing-x-small);
    }
  `
];

// node_modules/@arc-web/components/dist/components/tooltip/ArcTooltip.js
var ArcTooltip = class extends LitElement {
  constructor() {
    super(...arguments);
    this.placement = FLOATING_PLACEMENTS.top;
    this.distance = 10;
    this.skidding = 0;
    this.delay = 150;
    this.trigger = "hover focus";
    this.open = false;
    this.disabled = false;
    this.hoist = false;
  }
  async handlePropChange() {
    if (this.disabled) {
      return;
    }
    if (this.open) {
      emit(this, ARC_EVENTS.show);
      await stopAnimations(this);
      this.startPositioner();
      this.tooltip.hidden = false;
      const { keyframes, options } = getAnimation(this, "tooltip.show");
      await startAnimations(this.tooltip, keyframes, options);
      emit(this, ARC_EVENTS.afterShow);
    } else {
      emit(this, ARC_EVENTS.hide);
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "tooltip.hide");
      await startAnimations(this.tooltip, keyframes, options);
      this.tooltip.hidden = true;
      this.stopPositioner();
      emit(this, ARC_EVENTS.afterHide);
    }
  }
  handlePopoverOptionsChange() {
    this.updatePositioner();
  }
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.updateComplete.then(() => {
      this.addEventListener("blur", this.handleBlur, true);
      this.addEventListener("focus", this.handleFocus, true);
      this.addEventListener("click", this.handleClick);
      this.addEventListener("keydown", this.handleKeyDown);
      this.addEventListener("mouseover", this.handleMouseOver);
      this.addEventListener("mouseout", this.handleMouseOut);
      this._target = this.getTarget();
    });
  }
  async firstUpdated() {
    this.tooltip.hidden = !this.open;
    if (this.open) {
      await this.updateComplete;
      this.startPositioner();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("blur", this.handleBlur, true);
    this.removeEventListener("focus", this.handleFocus, true);
    this.removeEventListener("click", this.handleClick);
    this.removeEventListener("keydown", this.handleKeyDown);
    this.removeEventListener("mouseover", this.handleMouseOver);
    this.removeEventListener("mouseout", this.handleMouseOut);
    this.stopPositioner();
  }
  startPositioner() {
    this.stopPositioner();
    this.updatePositioner();
    this._positionerCleanup = autoUpdate(this._target, this.positioner, this.updatePositioner.bind(this));
  }
  updatePositioner() {
    if (!this.open || !this._target || !this.positioner) {
      return;
    }
    computePosition(this._target, this.positioner, {
      placement: this.placement,
      middleware: [
        offset({ mainAxis: this.distance, crossAxis: this.skidding }),
        flip(),
        shift(),
        arrow({
          element: this.arrow,
          padding: 10
        })
      ],
      strategy: this.hoist ? "fixed" : "absolute"
    }).then(({ x: x2, y: y2, middlewareData, placement }) => {
      const arrowX = middlewareData.arrow.x;
      const arrowY = middlewareData.arrow.y;
      const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
      this.positioner.setAttribute("data-placement", placement);
      Object.assign(this.positioner.style, {
        position: this.hoist ? "fixed" : "absolute",
        left: `${x2}px`,
        top: `${y2}px`
      });
      Object.assign(this.arrow.style, {
        left: `${arrowX}px`,
        top: `${arrowY}px`,
        right: "",
        bottom: "",
        [staticSide]: "calc(var(--arrow-size) * -1)"
      });
    });
  }
  stopPositioner() {
    if (this._positionerCleanup) {
      this._positionerCleanup();
      this._positionerCleanup = void 0;
      this.positioner.removeAttribute("data-placement");
    }
  }
  show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, ARC_EVENTS.afterShow);
  }
  hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, ARC_EVENTS.afterHide);
  }
  getTarget() {
    const target = [...this.children].find((el) => el.tagName.toLowerCase() !== "style" && el.getAttribute("slot") !== "content");
    if (!target) {
      throw new Error("Invalid tooltip target: no child element was found.");
    }
    return target;
  }
  hasTrigger(triggerType) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(triggerType);
  }
  handleFocus() {
    if (this.hasTrigger("focus")) {
      this.show();
    }
  }
  handleBlur() {
    if (this.hasTrigger("focus")) {
      this.hide();
    }
  }
  handleClick() {
    if (this.hasTrigger("click")) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
  }
  handleMouseOver() {
    if (this.hasTrigger("hover")) {
      clearTimeout(this._hoverTimeout);
      this._hoverTimeout = window.setTimeout(() => this.show(), this.delay);
    }
  }
  handleMouseOut() {
    if (this.hasTrigger("hover")) {
      clearTimeout(this._hoverTimeout);
      this._hoverTimeout = window.setTimeout(() => this.hide(), 0);
    }
  }
  handleKeyDown(event) {
    if (this.open && event.key === "Escape") {
      event.stopPropagation();
      this.hide();
    }
  }
  render() {
    return html`
      <div id="target" aria-describedby="tooltip">
        <slot></slot>
      </div>

      <div id="positioner">
        <div id="tooltip" role="tooltip" aria-hidden=${this.open ? "false" : "true"}>
          <div id="arrow"></div>
          <div id="content" aria-live=${this.open ? "polite" : "off"}>
            <slot name="content">${this.content}</slot>
          </div>
        </div>
      </div>
    `;
  }
};
ArcTooltip.tag = "arc-tooltip";
ArcTooltip.styles = arc_tooltip_styles_default;
__decorate([
  query("#positioner")
], ArcTooltip.prototype, "positioner", void 0);
__decorate([
  query("#tooltip")
], ArcTooltip.prototype, "tooltip", void 0);
__decorate([
  query("#arrow")
], ArcTooltip.prototype, "arrow", void 0);
__decorate([
  property({ type: String })
], ArcTooltip.prototype, "content", void 0);
__decorate([
  property({ type: String })
], ArcTooltip.prototype, "placement", void 0);
__decorate([
  property({ type: Number })
], ArcTooltip.prototype, "distance", void 0);
__decorate([
  property({ type: Number })
], ArcTooltip.prototype, "skidding", void 0);
__decorate([
  property({
    type: Number,
    converter: (attrValue) => attrValue ? parseDuration(attrValue) : 150
  })
], ArcTooltip.prototype, "delay", void 0);
__decorate([
  property({ type: String })
], ArcTooltip.prototype, "trigger", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcTooltip.prototype, "open", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcTooltip.prototype, "disabled", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcTooltip.prototype, "hoist", void 0);
__decorate([
  watch("open", { waitUntilFirstUpdate: true })
], ArcTooltip.prototype, "handlePropChange", null);
__decorate([
  watch("content"),
  watch("distance"),
  watch("hoist"),
  watch("placement"),
  watch("skidding")
], ArcTooltip.prototype, "handlePopoverOptionsChange", null);
__decorate([
  watch("disabled")
], ArcTooltip.prototype, "handleDisabledChange", null);
setDefaultAnimation("tooltip.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.9)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: ARC_ANIMATION_OPTIONS.fast
});
setDefaultAnimation("tooltip.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.9)" }
  ],
  options: ARC_ANIMATION_OPTIONS.fast
});

// node_modules/@arc-web/components/dist/components/tooltip/arc-tooltip.js
customElements.define("arc-tooltip", ArcTooltip);

// node_modules/@arc-web/components/dist/components/tooltip/react.js
var ArcTooltip2 = createComponent({
  tagName: "arc-tooltip",
  elementClass: ArcTooltip,
  react: import_react46.default,
  events: {
    onArcShow: ARC_EVENTS.show,
    onArcAfterShow: ARC_EVENTS.afterShow,
    onArcHide: ARC_EVENTS.hide,
    onArcAfterHide: ARC_EVENTS.afterHide
  }
});

// node_modules/@arc-web/components/dist/components/table/react.js
var import_react48 = __toESM(require_react());

// node_modules/gridjs/dist/gridjs.module.js
function t(t2, e2) {
  for (var n2 = 0; n2 < e2.length; n2++) {
    var r2 = e2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
  }
}
function e(e2, n2, r2) {
  return n2 && t(e2.prototype, n2), r2 && t(e2, r2), e2;
}
function n() {
  return n = Object.assign || function(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var n2 = arguments[e2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (t2[r2] = n2[r2]);
    }
    return t2;
  }, n.apply(this, arguments);
}
function r(t2, e2) {
  t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, i(t2, e2);
}
function i(t2, e2) {
  return i = Object.setPrototypeOf || function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, i(t2, e2);
}
function o(t2) {
  if (void 0 === t2)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t2;
}
function s(t2, e2) {
  (null == e2 || e2 > t2.length) && (e2 = t2.length);
  for (var n2 = 0, r2 = new Array(e2); n2 < e2; n2++)
    r2[n2] = t2[n2];
  return r2;
}
function a(t2, e2) {
  var n2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
  if (n2)
    return (n2 = n2.call(t2)).next.bind(n2);
  if (Array.isArray(t2) || (n2 = function(t3, e3) {
    if (t3) {
      if ("string" == typeof t3)
        return s(t3, e3);
      var n3 = Object.prototype.toString.call(t3).slice(8, -1);
      return "Object" === n3 && t3.constructor && (n3 = t3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(t3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? s(t3, e3) : void 0;
    }
  }(t2)) || e2 && t2 && "number" == typeof t2.length) {
    n2 && (t2 = n2);
    var r2 = 0;
    return function() {
      return r2 >= t2.length ? { done: true } : { done: false, value: t2[r2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var u;
var l;
var c;
var p;
var h;
var f;
var d;
var _ = {};
var m = [];
var g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function v(t2, e2) {
  for (var n2 in e2)
    t2[n2] = e2[n2];
  return t2;
}
function y(t2) {
  var e2 = t2.parentNode;
  e2 && e2.removeChild(t2);
}
function b(t2, e2, n2) {
  var r2, i2, o2, s2 = {};
  for (o2 in e2)
    "key" == o2 ? r2 = e2[o2] : "ref" == o2 ? i2 = e2[o2] : s2[o2] = e2[o2];
  if (arguments.length > 2 && (s2.children = arguments.length > 3 ? u.call(arguments, 2) : n2), "function" == typeof t2 && null != t2.defaultProps)
    for (o2 in t2.defaultProps)
      void 0 === s2[o2] && (s2[o2] = t2.defaultProps[o2]);
  return w(t2, s2, r2, i2, null);
}
function w(t2, e2, n2, r2, i2) {
  var o2 = { type: t2, props: e2, key: n2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == i2 ? ++c : i2 };
  return null == i2 && null != l.vnode && l.vnode(o2), o2;
}
function S(t2) {
  return t2.children;
}
function C(t2, e2) {
  this.props = t2, this.context = e2;
}
function P(t2, e2) {
  if (null == e2)
    return t2.__ ? P(t2.__, t2.__.__k.indexOf(t2) + 1) : null;
  for (var n2; e2 < t2.__k.length; e2++)
    if (null != (n2 = t2.__k[e2]) && null != n2.__e)
      return n2.__e;
  return "function" == typeof t2.type ? P(t2) : null;
}
function x(t2) {
  var e2, n2;
  if (null != (t2 = t2.__) && null != t2.__c) {
    for (t2.__e = t2.__c.base = null, e2 = 0; e2 < t2.__k.length; e2++)
      if (null != (n2 = t2.__k[e2]) && null != n2.__e) {
        t2.__e = t2.__c.base = n2.__e;
        break;
      }
    return x(t2);
  }
}
function N(t2) {
  (!t2.__d && (t2.__d = true) && h.push(t2) && !E.__r++ || f !== l.debounceRendering) && ((f = l.debounceRendering) || setTimeout)(E);
}
function E() {
  for (var t2; E.__r = h.length; )
    t2 = h.sort(function(t3, e2) {
      return t3.__v.__b - e2.__v.__b;
    }), h = [], t2.some(function(t3) {
      var e2, n2, r2, i2, o2, s2;
      t3.__d && (o2 = (i2 = (e2 = t3).__v).__e, (s2 = e2.__P) && (n2 = [], (r2 = v({}, i2)).__v = i2.__v + 1, U(s2, i2, r2, e2.__n, void 0 !== s2.ownerSVGElement, null != i2.__h ? [o2] : null, n2, null == o2 ? P(i2) : o2, i2.__h), H(n2, i2), i2.__e != o2 && x(i2)));
    });
}
function F(t2, e2, n2, r2, i2, o2, s2, a2, u2, l2) {
  var c2, p2, h2, f2, d2, g2, v2, y2 = r2 && r2.__k || m, b2 = y2.length;
  for (n2.__k = [], c2 = 0; c2 < e2.length; c2++)
    if (null != (f2 = n2.__k[c2] = null == (f2 = e2[c2]) || "boolean" == typeof f2 ? null : "string" == typeof f2 || "number" == typeof f2 || "bigint" == typeof f2 ? w(null, f2, null, null, f2) : Array.isArray(f2) ? w(S, { children: f2 }, null, null, null) : f2.__b > 0 ? w(f2.type, f2.props, f2.key, null, f2.__v) : f2)) {
      if (f2.__ = n2, f2.__b = n2.__b + 1, null === (h2 = y2[c2]) || h2 && f2.key == h2.key && f2.type === h2.type)
        y2[c2] = void 0;
      else
        for (p2 = 0; p2 < b2; p2++) {
          if ((h2 = y2[p2]) && f2.key == h2.key && f2.type === h2.type) {
            y2[p2] = void 0;
            break;
          }
          h2 = null;
        }
      U(t2, f2, h2 = h2 || _, i2, o2, s2, a2, u2, l2), d2 = f2.__e, (p2 = f2.ref) && h2.ref != p2 && (v2 || (v2 = []), h2.ref && v2.push(h2.ref, null, f2), v2.push(p2, f2.__c || d2, f2)), null != d2 ? (null == g2 && (g2 = d2), "function" == typeof f2.type && f2.__k === h2.__k ? f2.__d = u2 = T(f2, u2, t2) : u2 = D(t2, f2, h2, y2, d2, u2), "function" == typeof n2.type && (n2.__d = u2)) : u2 && h2.__e == u2 && u2.parentNode != t2 && (u2 = P(h2));
    }
  for (n2.__e = g2, c2 = b2; c2--; )
    null != y2[c2] && ("function" == typeof n2.type && null != y2[c2].__e && y2[c2].__e == n2.__d && (n2.__d = P(r2, c2 + 1)), j(y2[c2], y2[c2]));
  if (v2)
    for (c2 = 0; c2 < v2.length; c2++)
      O(v2[c2], v2[++c2], v2[++c2]);
}
function T(t2, e2, n2) {
  for (var r2, i2 = t2.__k, o2 = 0; i2 && o2 < i2.length; o2++)
    (r2 = i2[o2]) && (r2.__ = t2, e2 = "function" == typeof r2.type ? T(r2, e2, n2) : D(n2, r2, r2, i2, r2.__e, e2));
  return e2;
}
function D(t2, e2, n2, r2, i2, o2) {
  var s2, a2, u2;
  if (void 0 !== e2.__d)
    s2 = e2.__d, e2.__d = void 0;
  else if (null == n2 || i2 != o2 || null == i2.parentNode)
    t:
      if (null == o2 || o2.parentNode !== t2)
        t2.appendChild(i2), s2 = null;
      else {
        for (a2 = o2, u2 = 0; (a2 = a2.nextSibling) && u2 < r2.length; u2 += 2)
          if (a2 == i2)
            break t;
        t2.insertBefore(i2, o2), s2 = o2;
      }
  return void 0 !== s2 ? s2 : i2.nextSibling;
}
function R(t2, e2, n2) {
  "-" === e2[0] ? t2.setProperty(e2, n2) : t2[e2] = null == n2 ? "" : "number" != typeof n2 || g.test(e2) ? n2 : n2 + "px";
}
function L(t2, e2, n2, r2, i2) {
  var o2;
  t:
    if ("style" === e2)
      if ("string" == typeof n2)
        t2.style.cssText = n2;
      else {
        if ("string" == typeof r2 && (t2.style.cssText = r2 = ""), r2)
          for (e2 in r2)
            n2 && e2 in n2 || R(t2.style, e2, "");
        if (n2)
          for (e2 in n2)
            r2 && n2[e2] === r2[e2] || R(t2.style, e2, n2[e2]);
      }
    else if ("o" === e2[0] && "n" === e2[1])
      o2 = e2 !== (e2 = e2.replace(/Capture$/, "")), e2 = e2.toLowerCase() in t2 ? e2.toLowerCase().slice(2) : e2.slice(2), t2.l || (t2.l = {}), t2.l[e2 + o2] = n2, n2 ? r2 || t2.addEventListener(e2, o2 ? I : A, o2) : t2.removeEventListener(e2, o2 ? I : A, o2);
    else if ("dangerouslySetInnerHTML" !== e2) {
      if (i2)
        e2 = e2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== e2 && "list" !== e2 && "form" !== e2 && "tabIndex" !== e2 && "download" !== e2 && e2 in t2)
        try {
          t2[e2] = null == n2 ? "" : n2;
          break t;
        } catch (t3) {
        }
      "function" == typeof n2 || (null != n2 && (false !== n2 || "a" === e2[0] && "r" === e2[1]) ? t2.setAttribute(e2, n2) : t2.removeAttribute(e2));
    }
}
function A(t2) {
  this.l[t2.type + false](l.event ? l.event(t2) : t2);
}
function I(t2) {
  this.l[t2.type + true](l.event ? l.event(t2) : t2);
}
function U(t2, e2, n2, r2, i2, o2, s2, a2, u2) {
  var c2, p2, h2, f2, d2, _2, m2, g2, y2, b2, w2, k, P2, x2 = e2.type;
  if (void 0 !== e2.constructor)
    return null;
  null != n2.__h && (u2 = n2.__h, a2 = e2.__e = n2.__e, e2.__h = null, o2 = [a2]), (c2 = l.__b) && c2(e2);
  try {
    t:
      if ("function" == typeof x2) {
        if (g2 = e2.props, y2 = (c2 = x2.contextType) && r2[c2.__c], b2 = c2 ? y2 ? y2.props.value : c2.__ : r2, n2.__c ? m2 = (p2 = e2.__c = n2.__c).__ = p2.__E : ("prototype" in x2 && x2.prototype.render ? e2.__c = p2 = new x2(g2, b2) : (e2.__c = p2 = new C(g2, b2), p2.constructor = x2, p2.render = W), y2 && y2.sub(p2), p2.props = g2, p2.state || (p2.state = {}), p2.context = b2, p2.__n = r2, h2 = p2.__d = true, p2.__h = []), null == p2.__s && (p2.__s = p2.state), null != x2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = v({}, p2.__s)), v(p2.__s, x2.getDerivedStateFromProps(g2, p2.__s))), f2 = p2.props, d2 = p2.state, h2)
          null == x2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
        else {
          if (null == x2.getDerivedStateFromProps && g2 !== f2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(g2, b2), !p2.__e && null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(g2, p2.__s, b2) || e2.__v === n2.__v) {
            p2.props = g2, p2.state = p2.__s, e2.__v !== n2.__v && (p2.__d = false), p2.__v = e2, e2.__e = n2.__e, e2.__k = n2.__k, e2.__k.forEach(function(t3) {
              t3 && (t3.__ = e2);
            }), p2.__h.length && s2.push(p2);
            break t;
          }
          null != p2.componentWillUpdate && p2.componentWillUpdate(g2, p2.__s, b2), null != p2.componentDidUpdate && p2.__h.push(function() {
            p2.componentDidUpdate(f2, d2, _2);
          });
        }
        if (p2.context = b2, p2.props = g2, p2.__v = e2, p2.__P = t2, w2 = l.__r, k = 0, "prototype" in x2 && x2.prototype.render)
          p2.state = p2.__s, p2.__d = false, w2 && w2(e2), c2 = p2.render(p2.props, p2.state, p2.context);
        else
          do {
            p2.__d = false, w2 && w2(e2), c2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
          } while (p2.__d && ++k < 25);
        p2.state = p2.__s, null != p2.getChildContext && (r2 = v(v({}, r2), p2.getChildContext())), h2 || null == p2.getSnapshotBeforeUpdate || (_2 = p2.getSnapshotBeforeUpdate(f2, d2)), P2 = null != c2 && c2.type === S && null == c2.key ? c2.props.children : c2, F(t2, Array.isArray(P2) ? P2 : [P2], e2, n2, r2, i2, o2, s2, a2, u2), p2.base = e2.__e, e2.__h = null, p2.__h.length && s2.push(p2), m2 && (p2.__E = p2.__ = null), p2.__e = false;
      } else
        null == o2 && e2.__v === n2.__v ? (e2.__k = n2.__k, e2.__e = n2.__e) : e2.__e = M(n2.__e, e2, n2, r2, i2, o2, s2, u2);
    (c2 = l.diffed) && c2(e2);
  } catch (t3) {
    e2.__v = null, (u2 || null != o2) && (e2.__e = a2, e2.__h = !!u2, o2[o2.indexOf(a2)] = null), l.__e(t3, e2, n2);
  }
}
function H(t2, e2) {
  l.__c && l.__c(e2, t2), t2.some(function(e3) {
    try {
      t2 = e3.__h, e3.__h = [], t2.some(function(t3) {
        t3.call(e3);
      });
    } catch (t3) {
      l.__e(t3, e3.__v);
    }
  });
}
function M(t2, e2, n2, r2, i2, o2, s2, a2) {
  var l2, c2, p2, h2 = n2.props, f2 = e2.props, d2 = e2.type, m2 = 0;
  if ("svg" === d2 && (i2 = true), null != o2) {
    for (; m2 < o2.length; m2++)
      if ((l2 = o2[m2]) && "setAttribute" in l2 == !!d2 && (d2 ? l2.localName === d2 : 3 === l2.nodeType)) {
        t2 = l2, o2[m2] = null;
        break;
      }
  }
  if (null == t2) {
    if (null === d2)
      return document.createTextNode(f2);
    t2 = i2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, f2.is && f2), o2 = null, a2 = false;
  }
  if (null === d2)
    h2 === f2 || a2 && t2.data === f2 || (t2.data = f2);
  else {
    if (o2 = o2 && u.call(t2.childNodes), c2 = (h2 = n2.props || _).dangerouslySetInnerHTML, p2 = f2.dangerouslySetInnerHTML, !a2) {
      if (null != o2)
        for (h2 = {}, m2 = 0; m2 < t2.attributes.length; m2++)
          h2[t2.attributes[m2].name] = t2.attributes[m2].value;
      (p2 || c2) && (p2 && (c2 && p2.__html == c2.__html || p2.__html === t2.innerHTML) || (t2.innerHTML = p2 && p2.__html || ""));
    }
    if (function(t3, e3, n3, r3, i3) {
      var o3;
      for (o3 in n3)
        "children" === o3 || "key" === o3 || o3 in e3 || L(t3, o3, null, n3[o3], r3);
      for (o3 in e3)
        i3 && "function" != typeof e3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || n3[o3] === e3[o3] || L(t3, o3, e3[o3], n3[o3], r3);
    }(t2, f2, h2, i2, a2), p2)
      e2.__k = [];
    else if (m2 = e2.props.children, F(t2, Array.isArray(m2) ? m2 : [m2], e2, n2, r2, i2 && "foreignObject" !== d2, o2, s2, o2 ? o2[0] : n2.__k && P(n2, 0), a2), null != o2)
      for (m2 = o2.length; m2--; )
        null != o2[m2] && y(o2[m2]);
    a2 || ("value" in f2 && void 0 !== (m2 = f2.value) && (m2 !== t2.value || "progress" === d2 && !m2 || "option" === d2 && m2 !== h2.value) && L(t2, "value", m2, h2.value, false), "checked" in f2 && void 0 !== (m2 = f2.checked) && m2 !== t2.checked && L(t2, "checked", m2, h2.checked, false));
  }
  return t2;
}
function O(t2, e2, n2) {
  try {
    "function" == typeof t2 ? t2(e2) : t2.current = e2;
  } catch (t3) {
    l.__e(t3, n2);
  }
}
function j(t2, e2, n2) {
  var r2, i2;
  if (l.unmount && l.unmount(t2), (r2 = t2.ref) && (r2.current && r2.current !== t2.__e || O(r2, null, e2)), null != (r2 = t2.__c)) {
    if (r2.componentWillUnmount)
      try {
        r2.componentWillUnmount();
      } catch (t3) {
        l.__e(t3, e2);
      }
    r2.base = r2.__P = null;
  }
  if (r2 = t2.__k)
    for (i2 = 0; i2 < r2.length; i2++)
      r2[i2] && j(r2[i2], e2, "function" != typeof t2.type);
  n2 || null == t2.__e || y(t2.__e), t2.__e = t2.__d = void 0;
}
function W(t2, e2, n2) {
  return this.constructor(t2, n2);
}
function B(t2, e2, n2) {
  var r2, i2, o2;
  l.__ && l.__(t2, e2), i2 = (r2 = "function" == typeof n2) ? null : n2 && n2.__k || e2.__k, o2 = [], U(e2, t2 = (!r2 && n2 || e2).__k = b(S, null, [t2]), i2 || _, _, void 0 !== e2.ownerSVGElement, !r2 && n2 ? [n2] : i2 ? null : e2.firstChild ? u.call(e2.childNodes) : null, o2, !r2 && n2 ? n2 : i2 ? i2.__e : e2.firstChild, r2), H(o2, t2);
}
function z() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t2) {
    var e2 = 16 * Math.random() | 0;
    return ("x" == t2 ? e2 : 3 & e2 | 8).toString(16);
  });
}
u = m.slice, l = { __e: function(t2, e2, n2, r2) {
  for (var i2, o2, s2; e2 = e2.__; )
    if ((i2 = e2.__c) && !i2.__)
      try {
        if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(t2)), s2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(t2, r2 || {}), s2 = i2.__d), s2)
          return i2.__E = i2;
      } catch (e3) {
        t2 = e3;
      }
  throw t2;
} }, c = 0, p = function(t2) {
  return null != t2 && void 0 === t2.constructor;
}, C.prototype.setState = function(t2, e2) {
  var n2;
  n2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof t2 && (t2 = t2(v({}, n2), this.props)), t2 && v(n2, t2), null != t2 && this.__v && (e2 && this.__h.push(e2), N(this));
}, C.prototype.forceUpdate = function(t2) {
  this.__v && (this.__e = true, t2 && this.__h.push(t2), N(this));
}, C.prototype.render = S, h = [], E.__r = 0, d = 0;
var q = function() {
  function t2(t3) {
    this._id = void 0, this._id = t3 || z();
  }
  return e(t2, [{ key: "id", get: function() {
    return this._id;
  } }]), t2;
}();
var V = { search: { placeholder: "Type a keyword..." }, sort: { sortAsc: "Sort column ascending", sortDesc: "Sort column descending" }, pagination: { previous: "Previous", next: "Next", navigate: function(t2, e2) {
  return "Page " + t2 + " of " + e2;
}, page: function(t2) {
  return "Page " + t2;
}, showing: "Showing", of: "of", to: "to", results: "results" }, loading: "Loading...", noRecordsFound: "No matching records found", error: "An error happened while fetching the data" };
var G = function() {
  function t2(t3) {
    this._language = void 0, this._defaultLanguage = void 0, this._language = t3, this._defaultLanguage = V;
  }
  var e2 = t2.prototype;
  return e2.getString = function(t3, e3) {
    if (!e3 || !t3)
      return null;
    var n2 = t3.split("."), r2 = n2[0];
    if (e3[r2]) {
      var i2 = e3[r2];
      return "string" == typeof i2 ? function() {
        return i2;
      } : "function" == typeof i2 ? i2 : this.getString(n2.slice(1).join("."), i2);
    }
    return null;
  }, e2.translate = function(t3) {
    var e3, n2 = this.getString(t3, this._language);
    return (e3 = n2 || this.getString(t3, this._defaultLanguage)) ? e3.apply(void 0, [].slice.call(arguments, 1)) : t3;
  }, t2;
}();
var X = function(t2) {
  function e2(e3, n2) {
    var r2, i2;
    return (r2 = t2.call(this, e3, n2) || this).config = void 0, r2._ = void 0, r2.config = function(t3) {
      if (!t3)
        return null;
      var e4 = Object.keys(t3);
      return e4.length ? t3[e4[0]].props.value : null;
    }(n2), r2.config && (r2._ = (i2 = r2.config.translator, function(t3) {
      return i2.translate.apply(i2, [t3].concat([].slice.call(arguments, 1)));
    })), r2;
  }
  return r(e2, t2), e2;
}(C);
var $ = function(t2) {
  function e2() {
    return t2.apply(this, arguments) || this;
  }
  return r(e2, t2), e2.prototype.render = function() {
    return b(this.props.parentElement, { dangerouslySetInnerHTML: { __html: this.props.content } });
  }, e2;
}(X);
function K(t2, e2) {
  return b($, { content: t2, parentElement: e2 });
}
$.defaultProps = { parentElement: "span" };
var Y;
var Z = function(t2) {
  function e2(e3) {
    var n3;
    return (n3 = t2.call(this) || this).data = void 0, n3.update(e3), n3;
  }
  r(e2, t2);
  var n2 = e2.prototype;
  return n2.cast = function(t3) {
    return t3 instanceof HTMLElement ? K(t3.outerHTML) : t3;
  }, n2.update = function(t3) {
    return this.data = this.cast(t3), this;
  }, e2;
}(q);
var J = function(t2) {
  function n2(e2) {
    var n3;
    return (n3 = t2.call(this) || this)._cells = void 0, n3.cells = e2 || [], n3;
  }
  r(n2, t2);
  var i2 = n2.prototype;
  return i2.cell = function(t3) {
    return this._cells[t3];
  }, i2.toArray = function() {
    return this.cells.map(function(t3) {
      return t3.data;
    });
  }, n2.fromCells = function(t3) {
    return new n2(t3.map(function(t4) {
      return new Z(t4.data);
    }));
  }, e(n2, [{ key: "cells", get: function() {
    return this._cells;
  }, set: function(t3) {
    this._cells = t3;
  } }, { key: "length", get: function() {
    return this.cells.length;
  } }]), n2;
}(q);
var Q = function(t2) {
  function n2(e2) {
    var n3;
    return (n3 = t2.call(this) || this)._rows = void 0, n3._length = void 0, n3.rows = e2 instanceof Array ? e2 : e2 instanceof J ? [e2] : [], n3;
  }
  return r(n2, t2), n2.prototype.toArray = function() {
    return this.rows.map(function(t3) {
      return t3.toArray();
    });
  }, n2.fromRows = function(t3) {
    return new n2(t3.map(function(t4) {
      return J.fromCells(t4.cells);
    }));
  }, n2.fromArray = function(t3) {
    return new n2((t3 = function(t4) {
      return !t4[0] || t4[0] instanceof Array ? t4 : [t4];
    }(t3)).map(function(t4) {
      return new J(t4.map(function(t5) {
        return new Z(t5);
      }));
    }));
  }, e(n2, [{ key: "rows", get: function() {
    return this._rows;
  }, set: function(t3) {
    this._rows = t3;
  } }, { key: "length", get: function() {
    return this._length || this.rows.length;
  }, set: function(t3) {
    this._length = t3;
  } }]), n2;
}(q);
var tt = function() {
  function t2() {
    this.callbacks = void 0;
  }
  var e2 = t2.prototype;
  return e2.init = function(t3) {
    this.callbacks || (this.callbacks = {}), t3 && !this.callbacks[t3] && (this.callbacks[t3] = []);
  }, e2.on = function(t3, e3) {
    return this.init(t3), this.callbacks[t3].push(e3), this;
  }, e2.off = function(t3, e3) {
    var n2 = t3;
    return this.init(), this.callbacks[n2] && 0 !== this.callbacks[n2].length ? (this.callbacks[n2] = this.callbacks[n2].filter(function(t4) {
      return t4 != e3;
    }), this) : this;
  }, e2.emit = function(t3) {
    var e3 = arguments, n2 = t3;
    return this.init(n2), this.callbacks[n2].length > 0 && (this.callbacks[n2].forEach(function(t4) {
      return t4.apply(void 0, [].slice.call(e3, 1));
    }), true);
  }, t2;
}();
!function(t2) {
  t2[t2.Initiator = 0] = "Initiator", t2[t2.ServerFilter = 1] = "ServerFilter", t2[t2.ServerSort = 2] = "ServerSort", t2[t2.ServerLimit = 3] = "ServerLimit", t2[t2.Extractor = 4] = "Extractor", t2[t2.Transformer = 5] = "Transformer", t2[t2.Filter = 6] = "Filter", t2[t2.Sort = 7] = "Sort", t2[t2.Limit = 8] = "Limit";
}(Y || (Y = {}));
var et = function(t2) {
  function n2(e2) {
    var n3;
    return (n3 = t2.call(this) || this).id = void 0, n3._props = void 0, n3._props = {}, n3.id = z(), e2 && n3.setProps(e2), n3;
  }
  r(n2, t2);
  var i2 = n2.prototype;
  return i2.process = function() {
    var t3 = [].slice.call(arguments);
    this.validateProps instanceof Function && this.validateProps.apply(this, t3), this.emit.apply(this, ["beforeProcess"].concat(t3));
    var e2 = this._process.apply(this, t3);
    return this.emit.apply(this, ["afterProcess"].concat(t3)), e2;
  }, i2.setProps = function(t3) {
    return Object.assign(this._props, t3), this.emit("propsUpdated", this), this;
  }, e(n2, [{ key: "props", get: function() {
    return this._props;
  } }]), n2;
}(tt);
var nt = function(t2) {
  function n2() {
    return t2.apply(this, arguments) || this;
  }
  return r(n2, t2), n2.prototype._process = function(t3) {
    return this.props.keyword ? (e2 = String(this.props.keyword).trim(), n3 = this.props.columns, r2 = this.props.ignoreHiddenColumns, i2 = t3, o2 = this.props.selector, e2 = e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), new Q(i2.rows.filter(function(t4, i3) {
      return t4.cells.some(function(t5, s2) {
        if (!t5)
          return false;
        if (r2 && n3 && n3[s2] && "object" == typeof n3[s2] && n3[s2].hidden)
          return false;
        var a2 = "";
        if ("function" == typeof o2)
          a2 = o2(t5.data, i3, s2);
        else if ("object" == typeof t5.data) {
          var u2 = t5.data;
          u2 && u2.props && u2.props.content && (a2 = u2.props.content);
        } else
          a2 = String(t5.data);
        return new RegExp(e2, "gi").test(a2);
      });
    }))) : t3;
    var e2, n3, r2, i2, o2;
  }, e(n2, [{ key: "type", get: function() {
    return Y.Filter;
  } }]), n2;
}(et);
function rt() {
  var t2 = "gridjs";
  return "" + t2 + [].slice.call(arguments).reduce(function(t3, e2) {
    return t3 + "-" + e2;
  }, "");
}
function it() {
  return [].slice.call(arguments).filter(function(t2) {
    return t2;
  }).reduce(function(t2, e2) {
    return (t2 || "") + " " + e2;
  }, "").trim() || null;
}
var ot;
var st = function(t2) {
  function n2(e2) {
    var n3;
    return (n3 = t2.call(this) || this)._state = void 0, n3.dispatcher = void 0, n3.dispatcher = e2, n3._state = n3.getInitialState(), e2.register(n3._handle.bind(o(n3))), n3;
  }
  r(n2, t2);
  var i2 = n2.prototype;
  return i2._handle = function(t3) {
    this.handle(t3.type, t3.payload);
  }, i2.setState = function(t3) {
    var e2 = this._state;
    this._state = t3, this.emit("updated", t3, e2);
  }, e(n2, [{ key: "state", get: function() {
    return this._state;
  } }]), n2;
}(tt);
var at = function(t2) {
  function e2() {
    return t2.apply(this, arguments) || this;
  }
  r(e2, t2);
  var n2 = e2.prototype;
  return n2.getInitialState = function() {
    return { keyword: null };
  }, n2.handle = function(t3, e3) {
    "SEARCH_KEYWORD" === t3 && this.search(e3.keyword);
  }, n2.search = function(t3) {
    this.setState({ keyword: t3 });
  }, e2;
}(st);
var ut = function() {
  function t2(t3) {
    this.dispatcher = void 0, this.dispatcher = t3;
  }
  return t2.prototype.dispatch = function(t3, e2) {
    this.dispatcher.dispatch({ type: t3, payload: e2 });
  }, t2;
}();
var lt = function(t2) {
  function e2() {
    return t2.apply(this, arguments) || this;
  }
  return r(e2, t2), e2.prototype.search = function(t3) {
    this.dispatch("SEARCH_KEYWORD", { keyword: t3 });
  }, e2;
}(ut);
var ct = function(t2) {
  function i2() {
    return t2.apply(this, arguments) || this;
  }
  return r(i2, t2), i2.prototype._process = function(t3) {
    if (!this.props.keyword)
      return t3;
    var e2 = {};
    return this.props.url && (e2.url = this.props.url(t3.url, this.props.keyword)), this.props.body && (e2.body = this.props.body(t3.body, this.props.keyword)), n({}, t3, e2);
  }, e(i2, [{ key: "type", get: function() {
    return Y.ServerFilter;
  } }]), i2;
}(et);
var pt = new (function() {
  function t2() {
  }
  var e2 = t2.prototype;
  return e2.format = function(t3, e3) {
    return "[Grid.js] [" + e3.toUpperCase() + "]: " + t3;
  }, e2.error = function(t3, e3) {
    void 0 === e3 && (e3 = false);
    var n2 = this.format(t3, "error");
    if (e3)
      throw Error(n2);
    console.error(n2);
  }, e2.warn = function(t3) {
    console.warn(this.format(t3, "warn"));
  }, e2.info = function(t3) {
    console.info(this.format(t3, "info"));
  }, t2;
}())();
var ht = function(t2) {
  function e2() {
    return t2.apply(this, arguments) || this;
  }
  return r(e2, t2), e2;
}(X);
!function(t2) {
  t2[t2.Header = 0] = "Header", t2[t2.Footer = 1] = "Footer", t2[t2.Cell = 2] = "Cell";
}(ot || (ot = {}));
var ft = function() {
  function t2() {
    this.plugins = void 0, this.plugins = [];
  }
  var e2 = t2.prototype;
  return e2.get = function(t3) {
    var e3 = this.plugins.filter(function(e4) {
      return e4.id === t3;
    });
    return e3.length > 0 ? e3[0] : null;
  }, e2.add = function(t3) {
    return t3.id ? null !== this.get(t3.id) ? (pt.error("Duplicate plugin ID: " + t3.id), this) : (this.plugins.push(t3), this) : (pt.error("Plugin ID cannot be empty"), this);
  }, e2.remove = function(t3) {
    return this.plugins.splice(this.plugins.indexOf(this.get(t3)), 1), this;
  }, e2.list = function(t3) {
    var e3;
    return e3 = null != t3 || null != t3 ? this.plugins.filter(function(e4) {
      return e4.position === t3;
    }) : this.plugins, e3.sort(function(t4, e4) {
      return t4.order - e4.order;
    });
  }, t2;
}();
var dt = function(t2) {
  function e2() {
    return t2.apply(this, arguments) || this;
  }
  return r(e2, t2), e2.prototype.render = function() {
    var t3 = this;
    if (this.props.pluginId) {
      var e3 = this.config.plugin.get(this.props.pluginId);
      return e3 ? b(S, {}, b(e3.component, n({ plugin: e3 }, e3.props, this.props.props))) : null;
    }
    return void 0 !== this.props.position ? b(S, {}, this.config.plugin.list(this.props.position).map(function(e4) {
      return b(e4.component, n({ plugin: e4 }, e4.props, t3.props.props));
    })) : null;
  }, e2;
}(X);
var _t = function(t2) {
  function e2(e3, n3) {
    var r2;
    (r2 = t2.call(this, e3, n3) || this).searchProcessor = void 0, r2.actions = void 0, r2.store = void 0, r2.storeUpdatedFn = void 0, r2.actions = new lt(r2.config.dispatcher), r2.store = new at(r2.config.dispatcher);
    var i2, s2 = e3.keyword;
    return e3.enabled && (s2 && r2.actions.search(s2), r2.storeUpdatedFn = r2.storeUpdated.bind(o(r2)), r2.store.on("updated", r2.storeUpdatedFn), i2 = e3.server ? new ct({ keyword: e3.keyword, url: e3.server.url, body: e3.server.body }) : new nt({ keyword: e3.keyword, columns: r2.config.header && r2.config.header.columns, ignoreHiddenColumns: e3.ignoreHiddenColumns || void 0 === e3.ignoreHiddenColumns, selector: e3.selector }), r2.searchProcessor = i2, r2.config.pipeline.register(i2)), r2;
  }
  r(e2, t2);
  var n2 = e2.prototype;
  return n2.componentWillUnmount = function() {
    this.config.pipeline.unregister(this.searchProcessor), this.store.off("updated", this.storeUpdatedFn);
  }, n2.storeUpdated = function(t3) {
    this.searchProcessor.setProps({ keyword: t3.keyword });
  }, n2.onChange = function(t3) {
    this.actions.search(t3.target.value);
  }, n2.render = function() {
    if (!this.props.enabled)
      return null;
    var t3, e3, n3, r2 = this.onChange.bind(this);
    return this.searchProcessor instanceof ct && (t3 = r2, e3 = this.props.debounceTimeout, r2 = function() {
      var r3 = arguments;
      return new Promise(function(i2) {
        n3 && clearTimeout(n3), n3 = setTimeout(function() {
          return i2(t3.apply(void 0, [].slice.call(r3)));
        }, e3);
      });
    }), b("div", { className: rt(it("search", this.config.className.search)) }, b("input", { type: "search", placeholder: this._("search.placeholder"), "aria-label": this._("search.placeholder"), onInput: r2, className: it(rt("input"), rt("search", "input")), value: this.store.state.keyword }));
  }, e2;
}(ht);
_t.defaultProps = { debounceTimeout: 250 };
var mt = function(t2) {
  function n2() {
    return t2.apply(this, arguments) || this;
  }
  r(n2, t2);
  var i2 = n2.prototype;
  return i2.validateProps = function() {
    if (isNaN(Number(this.props.limit)) || isNaN(Number(this.props.page)))
      throw Error("Invalid parameters passed");
  }, i2._process = function(t3) {
    var e2 = this.props.page;
    return new Q(t3.rows.slice(e2 * this.props.limit, (e2 + 1) * this.props.limit));
  }, e(n2, [{ key: "type", get: function() {
    return Y.Limit;
  } }]), n2;
}(et);
var gt = function(t2) {
  function i2() {
    return t2.apply(this, arguments) || this;
  }
  return r(i2, t2), i2.prototype._process = function(t3) {
    var e2 = {};
    return this.props.url && (e2.url = this.props.url(t3.url, this.props.page, this.props.limit)), this.props.body && (e2.body = this.props.body(t3.body, this.props.page, this.props.limit)), n({}, t3, e2);
  }, e(i2, [{ key: "type", get: function() {
    return Y.ServerLimit;
  } }]), i2;
}(et);
var vt = function(t2) {
  function n2(e2, n3) {
    var r2;
    return (r2 = t2.call(this, e2, n3) || this).processor = void 0, r2.onUpdateFn = void 0, r2.setTotalFromTabularFn = void 0, r2.state = { limit: e2.limit, page: e2.page || 0, total: 0 }, r2;
  }
  r(n2, t2);
  var i2 = n2.prototype;
  return i2.componentWillMount = function() {
    var t3, e2 = this;
    this.props.enabled && (this.setTotalFromTabularFn = this.setTotalFromTabular.bind(this), this.props.server ? (t3 = new gt({ limit: this.state.limit, page: this.state.page, url: this.props.server.url, body: this.props.server.body }), this.config.pipeline.on("afterProcess", this.setTotalFromTabularFn)) : (t3 = new mt({ limit: this.state.limit, page: this.state.page })).on("beforeProcess", this.setTotalFromTabularFn), this.processor = t3, this.config.pipeline.register(t3), this.config.pipeline.on("error", function() {
      e2.setState({ total: 0, page: 0 });
    }));
  }, i2.setTotalFromTabular = function(t3) {
    this.setTotal(t3.length);
  }, i2.onUpdate = function(t3) {
    this.props.resetPageOnUpdate && t3 !== this.processor && this.setPage(0);
  }, i2.componentDidMount = function() {
    this.onUpdateFn = this.onUpdate.bind(this), this.config.pipeline.on("updated", this.onUpdateFn);
  }, i2.componentWillUnmount = function() {
    this.config.pipeline.unregister(this.processor), this.config.pipeline.off("updated", this.onUpdateFn);
  }, i2.setPage = function(t3) {
    if (t3 >= this.pages || t3 < 0 || t3 === this.state.page)
      return null;
    this.setState({ page: t3 }), this.processor.setProps({ page: t3 });
  }, i2.setTotal = function(t3) {
    this.setState({ total: t3 });
  }, i2.renderPages = function() {
    var t3 = this;
    if (this.props.buttonsCount <= 0)
      return null;
    var e2 = Math.min(this.pages, this.props.buttonsCount), n3 = Math.min(this.state.page, Math.floor(e2 / 2));
    return this.state.page + Math.floor(e2 / 2) >= this.pages && (n3 = e2 - (this.pages - this.state.page)), b(S, null, this.pages > e2 && this.state.page - n3 > 0 && b(S, null, b("button", { tabIndex: 0, role: "button", onClick: this.setPage.bind(this, 0), title: this._("pagination.firstPage"), "aria-label": this._("pagination.firstPage"), className: this.config.className.paginationButton }, this._("1")), b("button", { tabIndex: -1, className: it(rt("spread"), this.config.className.paginationButton) }, "...")), Array.from(Array(e2).keys()).map(function(e3) {
      return t3.state.page + (e3 - n3);
    }).map(function(e3) {
      return b("button", { tabIndex: 0, role: "button", onClick: t3.setPage.bind(t3, e3), className: it(t3.state.page === e3 ? it(rt("currentPage"), t3.config.className.paginationButtonCurrent) : null, t3.config.className.paginationButton), title: t3._("pagination.page", e3 + 1), "aria-label": t3._("pagination.page", e3 + 1) }, t3._("" + (e3 + 1)));
    }), this.pages > e2 && this.pages > this.state.page + n3 + 1 && b(S, null, b("button", { tabIndex: -1, className: it(rt("spread"), this.config.className.paginationButton) }, "..."), b("button", { tabIndex: 0, role: "button", onClick: this.setPage.bind(this, this.pages - 1), title: this._("pagination.page", this.pages), "aria-label": this._("pagination.page", this.pages), className: this.config.className.paginationButton }, this._("" + this.pages))));
  }, i2.renderSummary = function() {
    return b(S, null, this.props.summary && this.state.total > 0 && b("div", { role: "status", "aria-live": "polite", className: it(rt("summary"), this.config.className.paginationSummary), title: this._("pagination.navigate", this.state.page + 1, this.pages) }, this._("pagination.showing"), " ", b("b", null, this._("" + (this.state.page * this.state.limit + 1))), " ", this._("pagination.to"), " ", b("b", null, this._("" + Math.min((this.state.page + 1) * this.state.limit, this.state.total))), " ", this._("pagination.of"), " ", b("b", null, this._("" + this.state.total)), " ", this._("pagination.results")));
  }, i2.render = function() {
    return this.props.enabled ? b("div", { className: it(rt("pagination"), this.config.className.pagination) }, this.renderSummary(), b("div", { className: rt("pages") }, this.props.prevButton && b("button", { tabIndex: 0, role: "button", disabled: 0 === this.state.page, onClick: this.setPage.bind(this, this.state.page - 1), title: this._("pagination.previous"), "aria-label": this._("pagination.previous"), className: it(this.config.className.paginationButton, this.config.className.paginationButtonPrev) }, this._("pagination.previous")), this.renderPages(), this.props.nextButton && b("button", { tabIndex: 0, role: "button", disabled: this.pages === this.state.page + 1 || 0 === this.pages, onClick: this.setPage.bind(this, this.state.page + 1), title: this._("pagination.next"), "aria-label": this._("pagination.next"), className: it(this.config.className.paginationButton, this.config.className.paginationButtonNext) }, this._("pagination.next")))) : null;
  }, e(n2, [{ key: "pages", get: function() {
    return Math.ceil(this.state.total / this.state.limit);
  } }]), n2;
}(ht);
function yt(t2, e2) {
  return "string" == typeof t2 ? t2.indexOf("%") > -1 ? e2 / 100 * parseInt(t2, 10) : parseInt(t2, 10) : t2;
}
function bt(t2) {
  return t2 ? Math.floor(t2) + "px" : "";
}
vt.defaultProps = { summary: true, nextButton: true, prevButton: true, buttonsCount: 3, limit: 10, resetPageOnUpdate: true };
var wt = function(t2) {
  function e2(e3, n2) {
    var r2;
    return (r2 = t2.call(this, e3, n2) || this).tableElement = void 0, r2.tableClassName = void 0, r2.tableStyle = void 0, r2.tableElement = r2.props.tableRef.current.base.cloneNode(true), r2.tableElement.style.position = "absolute", r2.tableElement.style.width = "100%", r2.tableElement.style.zIndex = "-2147483640", r2.tableElement.style.visibility = "hidden", r2.tableClassName = r2.tableElement.className, r2.tableStyle = r2.tableElement.style.cssText, r2;
  }
  r(e2, t2);
  var i2 = e2.prototype;
  return i2.widths = function() {
    this.tableElement.className = this.tableClassName + " " + rt("shadowTable"), this.tableElement.style.tableLayout = "auto", this.tableElement.style.width = "auto", this.tableElement.style.padding = "0", this.tableElement.style.margin = "0", this.tableElement.style.border = "none", this.tableElement.style.outline = "none";
    var t3 = Array.from(this.base.parentNode.querySelectorAll("thead th")).reduce(function(t4, e3) {
      var r2;
      return e3.style.width = e3.clientWidth + "px", n(((r2 = {})[e3.getAttribute("data-column-id")] = { minWidth: e3.clientWidth }, r2), t4);
    }, {});
    return this.tableElement.className = this.tableClassName, this.tableElement.style.cssText = this.tableStyle, this.tableElement.style.tableLayout = "auto", Array.from(this.base.parentNode.querySelectorAll("thead th")).reduce(function(t4, e3) {
      return t4[e3.getAttribute("data-column-id")].width = e3.clientWidth, t4;
    }, t3);
  }, i2.render = function() {
    var t3 = this;
    return this.props.tableRef.current ? b("div", { ref: function(e3) {
      e3 && e3.appendChild(t3.tableElement);
    } }) : null;
  }, e2;
}(X);
function kt(t2) {
  if (!t2)
    return "";
  var e2 = t2.split(" ");
  return 1 === e2.length && /([a-z][A-Z])+/g.test(t2) ? t2 : e2.map(function(t3, e3) {
    return 0 == e3 ? t3.toLowerCase() : t3.charAt(0).toUpperCase() + t3.slice(1).toLowerCase();
  }).join("");
}
var St = function(t2) {
  function i2() {
    var e2;
    return (e2 = t2.call(this) || this)._columns = void 0, e2._columns = [], e2;
  }
  r(i2, t2);
  var o2 = i2.prototype;
  return o2.adjustWidth = function(t3) {
    var e2 = t3.container, n2 = t3.tableRef, r2 = t3.tempRef, o3 = t3.tempRef || true;
    if (!e2)
      return this;
    var s2 = e2.clientWidth, u2 = { current: null }, l2 = {};
    if (n2.current && o3) {
      var c2 = b(wt, { tableRef: n2 });
      c2.ref = u2, B(c2, r2.current), l2 = u2.current.widths();
    }
    for (var p2, h2 = a(i2.tabularFormat(this.columns).reduce(function(t4, e3) {
      return t4.concat(e3);
    }, [])); !(p2 = h2()).done; ) {
      var f2 = p2.value;
      f2.columns && f2.columns.length > 0 || (!f2.width && o3 ? f2.id in l2 && (f2.width = bt(l2[f2.id].width), f2.minWidth = bt(l2[f2.id].minWidth)) : f2.width = bt(yt(f2.width, s2)));
    }
    return n2.current && o3 && B(null, r2.current), this;
  }, o2.setSort = function(t3, e2) {
    for (var r2, i3 = a(e2 || this.columns || []); !(r2 = i3()).done; ) {
      var o3 = r2.value;
      o3.columns && o3.columns.length > 0 && (o3.sort = { enabled: false }), void 0 === o3.sort && t3.sort && (o3.sort = { enabled: true }), o3.sort ? "object" == typeof o3.sort && (o3.sort = n({ enabled: true }, o3.sort)) : o3.sort = { enabled: false }, o3.columns && this.setSort(t3, o3.columns);
    }
  }, o2.setFixedHeader = function(t3, e2) {
    for (var n2, r2 = a(e2 || this.columns || []); !(n2 = r2()).done; ) {
      var i3 = n2.value;
      void 0 === i3.fixedHeader && (i3.fixedHeader = t3.fixedHeader), i3.columns && this.setFixedHeader(t3, i3.columns);
    }
  }, o2.setResizable = function(t3, e2) {
    for (var n2, r2 = a(e2 || this.columns || []); !(n2 = r2()).done; ) {
      var i3 = n2.value;
      void 0 === i3.resizable && (i3.resizable = t3.resizable), i3.columns && this.setResizable(t3, i3.columns);
    }
  }, o2.setID = function(t3) {
    for (var e2, n2 = a(t3 || this.columns || []); !(e2 = n2()).done; ) {
      var r2 = e2.value;
      r2.id || "string" != typeof r2.name || (r2.id = kt(r2.name)), r2.id || pt.error('Could not find a valid ID for one of the columns. Make sure a valid "id" is set for all columns.'), r2.columns && this.setID(r2.columns);
    }
  }, o2.populatePlugins = function(t3, e2) {
    for (var r2, i3 = a(e2); !(r2 = i3()).done; ) {
      var o3 = r2.value;
      void 0 !== o3.plugin && t3.plugin.add(n({ id: o3.id, props: {} }, o3.plugin, { position: ot.Cell }));
    }
  }, i2.fromColumns = function(t3) {
    for (var e2, n2 = new i2(), r2 = a(t3); !(e2 = r2()).done; ) {
      var o3 = e2.value;
      if ("string" == typeof o3 || p(o3))
        n2.columns.push({ name: o3 });
      else if ("object" == typeof o3) {
        var s2 = o3;
        s2.columns && (s2.columns = i2.fromColumns(s2.columns).columns), "object" == typeof s2.plugin && void 0 === s2.data && (s2.data = null), n2.columns.push(o3);
      }
    }
    return n2;
  }, i2.fromUserConfig = function(t3) {
    var e2 = new i2();
    return t3.from ? e2.columns = i2.fromHTMLTable(t3.from).columns : t3.columns ? e2.columns = i2.fromColumns(t3.columns).columns : !t3.data || "object" != typeof t3.data[0] || t3.data[0] instanceof Array || (e2.columns = Object.keys(t3.data[0]).map(function(t4) {
      return { name: t4 };
    })), e2.columns.length ? (e2.setID(), e2.setSort(t3), e2.setFixedHeader(t3), e2.setResizable(t3), e2.populatePlugins(t3, e2.columns), e2) : null;
  }, i2.fromHTMLTable = function(t3) {
    for (var e2, n2 = new i2(), r2 = a(t3.querySelector("thead").querySelectorAll("th")); !(e2 = r2()).done; ) {
      var o3 = e2.value;
      n2.columns.push({ name: o3.innerHTML, width: o3.width });
    }
    return n2;
  }, i2.tabularFormat = function(t3) {
    var e2 = [], n2 = t3 || [], r2 = [];
    if (n2 && n2.length) {
      e2.push(n2);
      for (var i3, o3 = a(n2); !(i3 = o3()).done; ) {
        var s2 = i3.value;
        s2.columns && s2.columns.length && (r2 = r2.concat(s2.columns));
      }
      r2.length && (e2 = e2.concat(this.tabularFormat(r2)));
    }
    return e2;
  }, i2.leafColumns = function(t3) {
    var e2 = [], n2 = t3 || [];
    if (n2 && n2.length)
      for (var r2, i3 = a(n2); !(r2 = i3()).done; ) {
        var o3 = r2.value;
        o3.columns && 0 !== o3.columns.length || e2.push(o3), o3.columns && (e2 = e2.concat(this.leafColumns(o3.columns)));
      }
    return e2;
  }, i2.maximumDepth = function(t3) {
    return this.tabularFormat([t3]).length - 1;
  }, e(i2, [{ key: "columns", get: function() {
    return this._columns;
  }, set: function(t3) {
    this._columns = t3;
  } }, { key: "visibleColumns", get: function() {
    return this._columns.filter(function(t3) {
      return !t3.hidden;
    });
  } }]), i2;
}(q);
var Ct = function() {
  function t2() {
    this._callbacks = void 0, this._isDispatching = void 0, this._isHandled = void 0, this._isPending = void 0, this._lastID = void 0, this._pendingPayload = void 0, this._callbacks = {}, this._isDispatching = false, this._isHandled = {}, this._isPending = {}, this._lastID = 1;
  }
  var e2 = t2.prototype;
  return e2.register = function(t3) {
    var e3 = "ID_" + this._lastID++;
    return this._callbacks[e3] = t3, e3;
  }, e2.unregister = function(t3) {
    if (!this._callbacks[t3])
      throw Error("Dispatcher.unregister(...): " + t3 + " does not map to a registered callback.");
    delete this._callbacks[t3];
  }, e2.waitFor = function(t3) {
    if (!this._isDispatching)
      throw Error("Dispatcher.waitFor(...): Must be invoked while dispatching.");
    for (var e3 = 0; e3 < t3.length; e3++) {
      var n2 = t3[e3];
      if (this._isPending[n2]) {
        if (!this._isHandled[n2])
          throw Error("Dispatcher.waitFor(...): Circular dependency detected while ' +\n            'waiting for " + n2 + ".");
      } else {
        if (!this._callbacks[n2])
          throw Error("Dispatcher.waitFor(...): " + n2 + " does not map to a registered callback.");
        this._invokeCallback(n2);
      }
    }
  }, e2.dispatch = function(t3) {
    if (this._isDispatching)
      throw Error("Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.");
    this._startDispatching(t3);
    try {
      for (var e3 in this._callbacks)
        this._isPending[e3] || this._invokeCallback(e3);
    } finally {
      this._stopDispatching();
    }
  }, e2.isDispatching = function() {
    return this._isDispatching;
  }, e2._invokeCallback = function(t3) {
    this._isPending[t3] = true, this._callbacks[t3](this._pendingPayload), this._isHandled[t3] = true;
  }, e2._startDispatching = function(t3) {
    for (var e3 in this._callbacks)
      this._isPending[e3] = false, this._isHandled[e3] = false;
    this._pendingPayload = t3, this._isDispatching = true;
  }, e2._stopDispatching = function() {
    delete this._pendingPayload, this._isDispatching = false;
  }, t2;
}();
var Pt = function() {
};
var xt = function(t2) {
  function e2(e3) {
    var n3;
    return (n3 = t2.call(this) || this).data = void 0, n3.set(e3), n3;
  }
  r(e2, t2);
  var n2 = e2.prototype;
  return n2.get = function() {
    try {
      return Promise.resolve(this.data()).then(function(t3) {
        return { data: t3, total: t3.length };
      });
    } catch (t3) {
      return Promise.reject(t3);
    }
  }, n2.set = function(t3) {
    return t3 instanceof Array ? this.data = function() {
      return t3;
    } : t3 instanceof Function && (this.data = t3), this;
  }, e2;
}(Pt);
var Nt = function(t2) {
  function e2(e3) {
    var n2;
    return (n2 = t2.call(this) || this).options = void 0, n2.options = e3, n2;
  }
  r(e2, t2);
  var i2 = e2.prototype;
  return i2.handler = function(t3) {
    return "function" == typeof this.options.handle ? this.options.handle(t3) : t3.ok ? t3.json() : (pt.error("Could not fetch data: " + t3.status + " - " + t3.statusText, true), null);
  }, i2.get = function(t3) {
    var e3 = n({}, this.options, t3);
    return "function" == typeof e3.data ? e3.data(e3) : fetch(e3.url, e3).then(this.handler.bind(this)).then(function(t4) {
      return { data: e3.then(t4), total: "function" == typeof e3.total ? e3.total(t4) : void 0 };
    });
  }, e2;
}(Pt);
var Et = function() {
  function t2() {
  }
  return t2.createFromUserConfig = function(t3) {
    var e2 = null;
    return t3.data && (e2 = new xt(t3.data)), t3.from && (e2 = new xt(this.tableElementToArray(t3.from)), t3.from.style.display = "none"), t3.server && (e2 = new Nt(t3.server)), e2 || pt.error("Could not determine the storage type", true), e2;
  }, t2.tableElementToArray = function(t3) {
    for (var e2, n2, r2 = [], i2 = a(t3.querySelector("tbody").querySelectorAll("tr")); !(e2 = i2()).done; ) {
      for (var o2, s2 = [], u2 = a(e2.value.querySelectorAll("td")); !(o2 = u2()).done; ) {
        var l2 = o2.value;
        1 === l2.childNodes.length && l2.childNodes[0].nodeType === Node.TEXT_NODE ? s2.push((n2 = l2.innerHTML, new DOMParser().parseFromString(n2, "text/html").documentElement.textContent)) : s2.push(K(l2.innerHTML));
      }
      r2.push(s2);
    }
    return r2;
  }, t2;
}();
var Ft = "undefined" != typeof Symbol ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function Tt(t2, e2, n2) {
  if (!t2.s) {
    if (n2 instanceof Dt) {
      if (!n2.s)
        return void (n2.o = Tt.bind(null, t2, e2));
      1 & e2 && (e2 = n2.s), n2 = n2.v;
    }
    if (n2 && n2.then)
      return void n2.then(Tt.bind(null, t2, e2), Tt.bind(null, t2, 2));
    t2.s = e2, t2.v = n2;
    var r2 = t2.o;
    r2 && r2(t2);
  }
}
var Dt = function() {
  function t2() {
  }
  return t2.prototype.then = function(e2, n2) {
    var r2 = new t2(), i2 = this.s;
    if (i2) {
      var o2 = 1 & i2 ? e2 : n2;
      if (o2) {
        try {
          Tt(r2, 1, o2(this.v));
        } catch (t3) {
          Tt(r2, 2, t3);
        }
        return r2;
      }
      return this;
    }
    return this.o = function(t3) {
      try {
        var i3 = t3.v;
        1 & t3.s ? Tt(r2, 1, e2 ? e2(i3) : i3) : n2 ? Tt(r2, 1, n2(i3)) : Tt(r2, 2, i3);
      } catch (t4) {
        Tt(r2, 2, t4);
      }
    }, r2;
  }, t2;
}();
function Rt(t2) {
  return t2 instanceof Dt && 1 & t2.s;
}
var Lt;
var At = function(t2) {
  function n2(e2) {
    var n3;
    return (n3 = t2.call(this) || this)._steps = /* @__PURE__ */ new Map(), n3.cache = /* @__PURE__ */ new Map(), n3.lastProcessorIndexUpdated = -1, e2 && e2.forEach(function(t3) {
      return n3.register(t3);
    }), n3;
  }
  r(n2, t2);
  var i2 = n2.prototype;
  return i2.clearCache = function() {
    this.cache = /* @__PURE__ */ new Map(), this.lastProcessorIndexUpdated = -1;
  }, i2.register = function(t3, e2) {
    if (void 0 === e2 && (e2 = null), null === t3.type)
      throw Error("Processor type is not defined");
    t3.on("propsUpdated", this.processorPropsUpdated.bind(this)), this.addProcessorByPriority(t3, e2), this.afterRegistered(t3);
  }, i2.unregister = function(t3) {
    if (t3) {
      var e2 = this._steps.get(t3.type);
      e2 && e2.length && (this._steps.set(t3.type, e2.filter(function(e3) {
        return e3 != t3;
      })), this.emit("updated", t3));
    }
  }, i2.addProcessorByPriority = function(t3, e2) {
    var n3 = this._steps.get(t3.type);
    if (!n3) {
      var r2 = [];
      this._steps.set(t3.type, r2), n3 = r2;
    }
    if (null === e2 || e2 < 0)
      n3.push(t3);
    else if (n3[e2]) {
      var i3 = n3.slice(0, e2 - 1), o2 = n3.slice(e2 + 1);
      this._steps.set(t3.type, i3.concat(t3).concat(o2));
    } else
      n3[e2] = t3;
  }, i2.getStepsByType = function(t3) {
    return this.steps.filter(function(e2) {
      return e2.type === t3;
    });
  }, i2.getSortedProcessorTypes = function() {
    return Object.keys(Y).filter(function(t3) {
      return !isNaN(Number(t3));
    }).map(function(t3) {
      return Number(t3);
    });
  }, i2.process = function(t3) {
    try {
      var e2 = this, n3 = function(t4) {
        return e2.lastProcessorIndexUpdated = i3.length, e2.emit("afterProcess", o2), o2;
      }, r2 = e2.lastProcessorIndexUpdated, i3 = e2.steps, o2 = t3, s2 = function(t4, n4) {
        try {
          var s3 = function(t5, e3, n5) {
            if ("function" == typeof t5[Ft]) {
              var r3, i4, o3, s4 = t5[Ft]();
              if (function t6(n6) {
                try {
                  for (; !(r3 = s4.next()).done; )
                    if ((n6 = e3(r3.value)) && n6.then) {
                      if (!Rt(n6))
                        return void n6.then(t6, o3 || (o3 = Tt.bind(null, i4 = new Dt(), 2)));
                      n6 = n6.v;
                    }
                  i4 ? Tt(i4, 1, n6) : i4 = n6;
                } catch (t7) {
                  Tt(i4 || (i4 = new Dt()), 2, t7);
                }
              }(), s4.return) {
                var a2 = function(t6) {
                  try {
                    r3.done || s4.return();
                  } catch (t7) {
                  }
                  return t6;
                };
                if (i4 && i4.then)
                  return i4.then(a2, function(t6) {
                    throw a2(t6);
                  });
                a2();
              }
              return i4;
            }
            if (!("length" in t5))
              throw new TypeError("Object is not iterable");
            for (var u2 = [], l2 = 0; l2 < t5.length; l2++)
              u2.push(t5[l2]);
            return function(t6, e4, n6) {
              var r4, i5, o4 = -1;
              return function n7(s5) {
                try {
                  for (; ++o4 < t6.length; )
                    if ((s5 = e4(o4)) && s5.then) {
                      if (!Rt(s5))
                        return void s5.then(n7, i5 || (i5 = Tt.bind(null, r4 = new Dt(), 2)));
                      s5 = s5.v;
                    }
                  r4 ? Tt(r4, 1, s5) : r4 = s5;
                } catch (t7) {
                  Tt(r4 || (r4 = new Dt()), 2, t7);
                }
              }(), r4;
            }(u2, function(t6) {
              return e3(u2[t6]);
            });
          }(i3, function(t5) {
            var n5 = e2.findProcessorIndexByID(t5.id), i4 = function() {
              if (n5 >= r2)
                return Promise.resolve(t5.process(o2)).then(function(n6) {
                  e2.cache.set(t5.id, o2 = n6);
                });
              o2 = e2.cache.get(t5.id);
            }();
            if (i4 && i4.then)
              return i4.then(function() {
              });
          });
        } catch (t5) {
          return n4(t5);
        }
        return s3 && s3.then ? s3.then(void 0, n4) : s3;
      }(0, function(t4) {
        throw pt.error(t4), e2.emit("error", o2), t4;
      });
      return Promise.resolve(s2 && s2.then ? s2.then(n3) : n3());
    } catch (t4) {
      return Promise.reject(t4);
    }
  }, i2.findProcessorIndexByID = function(t3) {
    return this.steps.findIndex(function(e2) {
      return e2.id == t3;
    });
  }, i2.setLastProcessorIndex = function(t3) {
    var e2 = this.findProcessorIndexByID(t3.id);
    this.lastProcessorIndexUpdated > e2 && (this.lastProcessorIndexUpdated = e2);
  }, i2.processorPropsUpdated = function(t3) {
    this.setLastProcessorIndex(t3), this.emit("propsUpdated"), this.emit("updated", t3);
  }, i2.afterRegistered = function(t3) {
    this.setLastProcessorIndex(t3), this.emit("afterRegister"), this.emit("updated", t3);
  }, e(n2, [{ key: "steps", get: function() {
    for (var t3, e2 = [], n3 = a(this.getSortedProcessorTypes()); !(t3 = n3()).done; ) {
      var r2 = this._steps.get(t3.value);
      r2 && r2.length && (e2 = e2.concat(r2));
    }
    return e2.filter(function(t4) {
      return t4;
    });
  } }]), n2;
}(tt);
var It = function(t2) {
  function n2() {
    return t2.apply(this, arguments) || this;
  }
  return r(n2, t2), n2.prototype._process = function(t3) {
    try {
      return Promise.resolve(this.props.storage.get(t3));
    } catch (t4) {
      return Promise.reject(t4);
    }
  }, e(n2, [{ key: "type", get: function() {
    return Y.Extractor;
  } }]), n2;
}(et);
var Ut = function(t2) {
  function n2() {
    return t2.apply(this, arguments) || this;
  }
  return r(n2, t2), n2.prototype._process = function(t3) {
    var e2 = Q.fromArray(t3.data);
    return e2.length = t3.total, e2;
  }, e(n2, [{ key: "type", get: function() {
    return Y.Transformer;
  } }]), n2;
}(et);
var Ht = function(t2) {
  function i2() {
    return t2.apply(this, arguments) || this;
  }
  return r(i2, t2), i2.prototype._process = function() {
    return Object.entries(this.props.serverStorageOptions).filter(function(t3) {
      return "function" != typeof t3[1];
    }).reduce(function(t3, e2) {
      var r2;
      return n({}, t3, ((r2 = {})[e2[0]] = e2[1], r2));
    }, {});
  }, e(i2, [{ key: "type", get: function() {
    return Y.Initiator;
  } }]), i2;
}(et);
var Mt = function(t2) {
  function n2() {
    return t2.apply(this, arguments) || this;
  }
  r(n2, t2);
  var i2 = n2.prototype;
  return i2.castData = function(t3) {
    if (!t3 || !t3.length)
      return [];
    if (!this.props.header || !this.props.header.columns)
      return t3;
    var e2 = St.leafColumns(this.props.header.columns);
    return t3[0] instanceof Array ? t3.map(function(t4) {
      var n3 = 0;
      return e2.map(function(e3, r2) {
        return void 0 !== e3.data ? (n3++, "function" == typeof e3.data ? e3.data(t4) : e3.data) : t4[r2 - n3];
      });
    }) : "object" != typeof t3[0] || t3[0] instanceof Array ? [] : t3.map(function(t4) {
      return e2.map(function(e3, n3) {
        return void 0 !== e3.data ? "function" == typeof e3.data ? e3.data(t4) : e3.data : e3.id ? t4[e3.id] : (pt.error("Could not find the correct cell for column at position " + n3 + ".\n                          Make sure either 'id' or 'selector' is defined for all columns."), null);
      });
    });
  }, i2._process = function(t3) {
    return { data: this.castData(t3.data), total: t3.total };
  }, e(n2, [{ key: "type", get: function() {
    return Y.Transformer;
  } }]), n2;
}(et);
var Ot = function() {
  function t2() {
  }
  return t2.createFromConfig = function(t3) {
    var e2 = new At();
    return t3.storage instanceof Nt && e2.register(new Ht({ serverStorageOptions: t3.server })), e2.register(new It({ storage: t3.storage })), e2.register(new Mt({ header: t3.header })), e2.register(new Ut()), e2;
  }, t2;
}();
var jt = function() {
  function t2(e3) {
    this._userConfig = void 0, Object.assign(this, n({}, t2.defaultConfig(), e3)), this._userConfig = {};
  }
  var e2 = t2.prototype;
  return e2.assign = function(t3) {
    for (var e3 = 0, n2 = Object.keys(t3); e3 < n2.length; e3++) {
      var r2 = n2[e3];
      "_userConfig" !== r2 && (this[r2] = t3[r2]);
    }
    return this;
  }, e2.update = function(e3) {
    return e3 ? (this._userConfig = n({}, this._userConfig, e3), this.assign(t2.fromUserConfig(this._userConfig)), this) : this;
  }, t2.defaultConfig = function() {
    return { plugin: new ft(), dispatcher: new Ct(), tableRef: { current: null }, tempRef: { current: null }, width: "100%", height: "auto", autoWidth: true, style: {}, className: {} };
  }, t2.fromUserConfig = function(e3) {
    var r2 = new t2(e3);
    return r2._userConfig = e3, "boolean" == typeof e3.sort && e3.sort && r2.assign({ sort: { multiColumn: true } }), r2.assign({ header: St.fromUserConfig(r2) }), r2.assign({ storage: Et.createFromUserConfig(e3) }), r2.assign({ pipeline: Ot.createFromConfig(r2) }), r2.assign({ translator: new G(e3.language) }), r2.plugin.add({ id: "search", position: ot.Header, component: _t, props: n({ enabled: true === e3.search || e3.search instanceof Object }, e3.search) }), r2.plugin.add({ id: "pagination", position: ot.Footer, component: vt, props: n({ enabled: true === e3.pagination || e3.pagination instanceof Object }, e3.pagination) }), e3.plugins && e3.plugins.forEach(function(t3) {
      return r2.plugin.add(t3);
    }), r2;
  }, t2;
}();
!function(t2) {
  t2[t2.Init = 0] = "Init", t2[t2.Loading = 1] = "Loading", t2[t2.Loaded = 2] = "Loaded", t2[t2.Rendered = 3] = "Rendered", t2[t2.Error = 4] = "Error";
}(Lt || (Lt = {}));
var Wt;
var Bt;
var zt;
var qt;
var Vt = function(t2) {
  function e2() {
    return t2.apply(this, arguments) || this;
  }
  r(e2, t2);
  var i2 = e2.prototype;
  return i2.content = function() {
    return this.props.column && "function" == typeof this.props.column.formatter ? this.props.column.formatter(this.props.cell.data, this.props.row, this.props.column) : this.props.column && this.props.column.plugin ? b(dt, { pluginId: this.props.column.id, props: { column: this.props.column, cell: this.props.cell, row: this.props.row } }) : this.props.cell.data;
  }, i2.handleClick = function(t3) {
    this.props.messageCell || this.config.eventEmitter.emit("cellClick", t3, this.props.cell, this.props.column, this.props.row);
  }, i2.getCustomAttributes = function(t3) {
    return t3 ? "function" == typeof t3.attributes ? t3.attributes(this.props.cell.data, this.props.row, this.props.column) : t3.attributes : {};
  }, i2.render = function() {
    return b("td", n({ role: this.props.role, colSpan: this.props.colSpan, "data-column-id": this.props.column && this.props.column.id, className: it(rt("td"), this.props.className, this.config.className.td), style: n({}, this.props.style, this.config.style.td), onClick: this.handleClick.bind(this) }, this.getCustomAttributes(this.props.column)), this.content());
  }, e2;
}(X);
var Gt = function(t2) {
  function e2() {
    return t2.apply(this, arguments) || this;
  }
  r(e2, t2);
  var n2 = e2.prototype;
  return n2.getColumn = function(t3) {
    if (this.props.header) {
      var e3 = St.leafColumns(this.props.header.columns);
      if (e3)
        return e3[t3];
    }
    return null;
  }, n2.handleClick = function(t3) {
    this.props.messageRow || this.config.eventEmitter.emit("rowClick", t3, this.props.row);
  }, n2.getChildren = function() {
    var t3 = this;
    return this.props.children ? this.props.children : b(S, null, this.props.row.cells.map(function(e3, n3) {
      var r2 = t3.getColumn(n3);
      return r2 && r2.hidden ? null : b(Vt, { key: e3.id, cell: e3, row: t3.props.row, column: r2 });
    }));
  }, n2.render = function() {
    return b("tr", { className: it(rt("tr"), this.config.className.tr), onClick: this.handleClick.bind(this) }, this.getChildren());
  }, e2;
}(X);
var Xt = function(t2) {
  function e2() {
    return t2.apply(this, arguments) || this;
  }
  return r(e2, t2), e2.prototype.render = function() {
    return b(Gt, { messageRow: true }, b(Vt, { role: "alert", colSpan: this.props.colSpan, messageCell: true, cell: new Z(this.props.message), className: it(rt("message"), this.props.className ? this.props.className : null) }));
  }, e2;
}(X);
var $t = function(t2) {
  function e2() {
    return t2.apply(this, arguments) || this;
  }
  r(e2, t2);
  var n2 = e2.prototype;
  return n2.headerLength = function() {
    return this.props.header ? this.props.header.visibleColumns.length : 0;
  }, n2.render = function() {
    var t3 = this;
    return b("tbody", { className: it(rt("tbody"), this.config.className.tbody) }, this.props.data && this.props.data.rows.map(function(e3) {
      return b(Gt, { key: e3.id, row: e3, header: t3.props.header });
    }), this.props.status === Lt.Loading && (!this.props.data || 0 === this.props.data.length) && b(Xt, { message: this._("loading"), colSpan: this.headerLength(), className: it(rt("loading"), this.config.className.loading) }), this.props.status === Lt.Rendered && this.props.data && 0 === this.props.data.length && b(Xt, { message: this._("noRecordsFound"), colSpan: this.headerLength(), className: it(rt("notfound"), this.config.className.notfound) }), this.props.status === Lt.Error && b(Xt, { message: this._("error"), colSpan: this.headerLength(), className: it(rt("error"), this.config.className.error) }));
  }, e2;
}(X);
var Kt = function(t2) {
  function n2() {
    return t2.apply(this, arguments) || this;
  }
  r(n2, t2);
  var i2 = n2.prototype;
  return i2.validateProps = function() {
    for (var t3, e2 = a(this.props.columns); !(t3 = e2()).done; ) {
      var n3 = t3.value;
      void 0 === n3.direction && (n3.direction = 1), 1 !== n3.direction && -1 !== n3.direction && pt.error("Invalid sort direction " + n3.direction);
    }
  }, i2.compare = function(t3, e2) {
    return t3 > e2 ? 1 : t3 < e2 ? -1 : 0;
  }, i2.compareWrapper = function(t3, e2) {
    for (var n3, r2 = 0, i3 = a(this.props.columns); !(n3 = i3()).done; ) {
      var o2 = n3.value;
      if (0 !== r2)
        break;
      var s2 = t3.cells[o2.index].data, u2 = e2.cells[o2.index].data;
      r2 |= "function" == typeof o2.compare ? o2.compare(s2, u2) * o2.direction : this.compare(s2, u2) * o2.direction;
    }
    return r2;
  }, i2._process = function(t3) {
    var e2 = [].concat(t3.rows);
    e2.sort(this.compareWrapper.bind(this));
    var n3 = new Q(e2);
    return n3.length = t3.length, n3;
  }, e(n2, [{ key: "type", get: function() {
    return Y.Sort;
  } }]), n2;
}(et);
var Yt = function(t2) {
  function e2() {
    return t2.apply(this, arguments) || this;
  }
  r(e2, t2);
  var n2 = e2.prototype;
  return n2.getInitialState = function() {
    return [];
  }, n2.handle = function(t3, e3) {
    "SORT_COLUMN" === t3 ? this.sortColumn(e3.index, e3.direction, e3.multi, e3.compare) : "SORT_COLUMN_TOGGLE" === t3 && this.sortToggle(e3.index, e3.multi, e3.compare);
  }, n2.sortToggle = function(t3, e3, n3) {
    var r2 = [].concat(this.state).find(function(e4) {
      return e4.index === t3;
    });
    this.sortColumn(t3, r2 && 1 === r2.direction ? -1 : 1, e3, n3);
  }, n2.sortColumn = function(t3, e3, n3, r2) {
    var i2 = [].concat(this.state), o2 = i2.length, s2 = i2.find(function(e4) {
      return e4.index === t3;
    }), a2 = false, u2 = false, l2 = false, c2 = false;
    if (void 0 !== s2 ? n3 ? -1 === s2.direction ? l2 = true : c2 = true : 1 === o2 ? c2 = true : o2 > 1 && (u2 = true, a2 = true) : 0 === o2 ? a2 = true : o2 > 0 && !n3 ? (a2 = true, u2 = true) : o2 > 0 && n3 && (a2 = true), u2 && (i2 = []), a2)
      i2.push({ index: t3, direction: e3, compare: r2 });
    else if (c2) {
      var p2 = i2.indexOf(s2);
      i2[p2].direction = e3;
    } else if (l2) {
      var h2 = i2.indexOf(s2);
      i2.splice(h2, 1);
    }
    this.setState(i2);
  }, e2;
}(st);
var Zt = function(t2) {
  function e2() {
    return t2.apply(this, arguments) || this;
  }
  r(e2, t2);
  var n2 = e2.prototype;
  return n2.sortColumn = function(t3, e3, n3, r2) {
    this.dispatch("SORT_COLUMN", { index: t3, direction: e3, multi: n3, compare: r2 });
  }, n2.sortToggle = function(t3, e3, n3) {
    this.dispatch("SORT_COLUMN_TOGGLE", { index: t3, multi: e3, compare: n3 });
  }, e2;
}(ut);
var Jt = function(t2) {
  function i2() {
    return t2.apply(this, arguments) || this;
  }
  return r(i2, t2), i2.prototype._process = function(t3) {
    var e2 = {};
    return this.props.url && (e2.url = this.props.url(t3.url, this.props.columns)), this.props.body && (e2.body = this.props.body(t3.body, this.props.columns)), n({}, t3, e2);
  }, e(i2, [{ key: "type", get: function() {
    return Y.ServerSort;
  } }]), i2;
}(et);
var Qt = function(t2) {
  function e2(e3, n2) {
    var r2;
    return (r2 = t2.call(this, e3, n2) || this).sortProcessor = void 0, r2.actions = void 0, r2.store = void 0, r2.updateStateFn = void 0, r2.updateSortProcessorFn = void 0, r2.actions = new Zt(r2.config.dispatcher), r2.store = new Yt(r2.config.dispatcher), e3.enabled && (r2.sortProcessor = r2.getOrCreateSortProcessor(), r2.updateStateFn = r2.updateState.bind(o(r2)), r2.store.on("updated", r2.updateStateFn), r2.state = { direction: 0 }), r2;
  }
  r(e2, t2);
  var i2 = e2.prototype;
  return i2.componentWillUnmount = function() {
    this.config.pipeline.unregister(this.sortProcessor), this.store.off("updated", this.updateStateFn), this.updateSortProcessorFn && this.store.off("updated", this.updateSortProcessorFn);
  }, i2.updateState = function() {
    var t3 = this, e3 = this.store.state.find(function(e4) {
      return e4.index === t3.props.index;
    });
    this.setState(e3 ? { direction: e3.direction } : { direction: 0 });
  }, i2.updateSortProcessor = function(t3) {
    this.sortProcessor.setProps({ columns: t3 });
  }, i2.getOrCreateSortProcessor = function() {
    var t3 = Y.Sort;
    this.config.sort && "object" == typeof this.config.sort.server && (t3 = Y.ServerSort);
    var e3, r2 = this.config.pipeline.getStepsByType(t3);
    return r2.length > 0 ? e3 = r2[0] : (this.updateSortProcessorFn = this.updateSortProcessor.bind(this), this.store.on("updated", this.updateSortProcessorFn), e3 = t3 === Y.ServerSort ? new Jt(n({ columns: this.store.state }, this.config.sort.server)) : new Kt({ columns: this.store.state }), this.config.pipeline.register(e3)), e3;
  }, i2.changeDirection = function(t3) {
    t3.preventDefault(), t3.stopPropagation(), this.actions.sortToggle(this.props.index, true === t3.shiftKey && this.config.sort.multiColumn, this.props.compare);
  }, i2.render = function() {
    if (!this.props.enabled)
      return null;
    var t3 = this.state.direction, e3 = "neutral";
    return 1 === t3 ? e3 = "asc" : -1 === t3 && (e3 = "desc"), b("button", { tabIndex: -1, "aria-label": this._("sort.sort" + (1 === t3 ? "Desc" : "Asc")), title: this._("sort.sort" + (1 === t3 ? "Desc" : "Asc")), className: it(rt("sort"), rt("sort", e3), this.config.className.sort), onClick: this.changeDirection.bind(this) });
  }, e2;
}(X);
var te = function(t2) {
  function e2() {
    for (var e3, n3 = arguments.length, r2 = new Array(n3), i2 = 0; i2 < n3; i2++)
      r2[i2] = arguments[i2];
    return (e3 = t2.call.apply(t2, [this].concat(r2)) || this).moveFn = void 0, e3.upFn = void 0, e3;
  }
  r(e2, t2);
  var n2 = e2.prototype;
  return n2.getPageX = function(t3) {
    return t3 instanceof MouseEvent ? Math.floor(t3.pageX) : Math.floor(t3.changedTouches[0].pageX);
  }, n2.start = function(t3) {
    var e3, n3, r2, i2, o2;
    t3.stopPropagation(), this.setState({ offsetStart: parseInt(this.props.thRef.current.style.width, 10) - this.getPageX(t3) }), this.upFn = this.end.bind(this), this.moveFn = (e3 = this.move.bind(this), void 0 === (n3 = 10) && (n3 = 100), function() {
      var t4 = [].slice.call(arguments);
      r2 ? (clearTimeout(i2), i2 = setTimeout(function() {
        Date.now() - o2 >= n3 && (e3.apply(void 0, t4), o2 = Date.now());
      }, Math.max(n3 - (Date.now() - o2), 0))) : (e3.apply(void 0, t4), o2 = Date.now(), r2 = true);
    }), document.addEventListener("mouseup", this.upFn), document.addEventListener("touchend", this.upFn), document.addEventListener("mousemove", this.moveFn), document.addEventListener("touchmove", this.moveFn);
  }, n2.move = function(t3) {
    t3.stopPropagation();
    var e3 = this.props.thRef.current;
    this.state.offsetStart + this.getPageX(t3) >= parseInt(e3.style.minWidth, 10) && (e3.style.width = this.state.offsetStart + this.getPageX(t3) + "px");
  }, n2.end = function(t3) {
    t3.stopPropagation(), document.removeEventListener("mouseup", this.upFn), document.removeEventListener("mousemove", this.moveFn), document.removeEventListener("touchmove", this.moveFn), document.removeEventListener("touchend", this.upFn);
  }, n2.render = function() {
    return b("div", { className: it(rt("th"), rt("resizable")), onMouseDown: this.start.bind(this), onTouchStart: this.start.bind(this), onClick: function(t3) {
      return t3.stopPropagation();
    } });
  }, e2;
}(X);
var ee = function(t2) {
  function e2(e3, n2) {
    var r2;
    return (r2 = t2.call(this, e3, n2) || this).sortRef = { current: null }, r2.thRef = { current: null }, r2.state = { style: {} }, r2;
  }
  r(e2, t2);
  var i2 = e2.prototype;
  return i2.isSortable = function() {
    return this.props.column.sort.enabled;
  }, i2.isResizable = function() {
    return this.props.column.resizable;
  }, i2.onClick = function(t3) {
    t3.stopPropagation(), this.isSortable() && this.sortRef.current.changeDirection(t3);
  }, i2.keyDown = function(t3) {
    this.isSortable() && 13 === t3.which && this.onClick(t3);
  }, i2.componentDidMount = function() {
    var t3 = this;
    setTimeout(function() {
      if (t3.props.column.fixedHeader && t3.thRef.current) {
        var e3 = t3.thRef.current.offsetTop;
        "number" == typeof e3 && t3.setState({ style: { top: e3 } });
      }
    }, 0);
  }, i2.content = function() {
    return void 0 !== this.props.column.name ? this.props.column.name : void 0 !== this.props.column.plugin ? b(dt, { pluginId: this.props.column.plugin.id, props: { column: this.props.column } }) : null;
  }, i2.getCustomAttributes = function() {
    var t3 = this.props.column;
    return t3 ? "function" == typeof t3.attributes ? t3.attributes(null, null, this.props.column) : t3.attributes : {};
  }, i2.render = function() {
    var t3 = {};
    return this.isSortable() && (t3.tabIndex = 0), b("th", n({ ref: this.thRef, "data-column-id": this.props.column && this.props.column.id, className: it(rt("th"), this.isSortable() ? rt("th", "sort") : null, this.props.column.fixedHeader ? rt("th", "fixed") : null, this.config.className.th), onClick: this.onClick.bind(this), style: n({}, this.config.style.th, { minWidth: this.props.column.minWidth, width: this.props.column.width }, this.state.style, this.props.style), onKeyDown: this.keyDown.bind(this), rowSpan: this.props.rowSpan > 1 ? this.props.rowSpan : void 0, colSpan: this.props.colSpan > 1 ? this.props.colSpan : void 0 }, this.getCustomAttributes(), t3), b("div", { className: rt("th", "content") }, this.content()), this.isSortable() && b(Qt, n({ ref: this.sortRef, index: this.props.index }, this.props.column.sort)), this.isResizable() && this.props.index < this.config.header.visibleColumns.length - 1 && b(te, { column: this.props.column, thRef: this.thRef }));
  }, e2;
}(X);
var ne = function(t2) {
  function e2() {
    return t2.apply(this, arguments) || this;
  }
  r(e2, t2);
  var n2 = e2.prototype;
  return n2.renderColumn = function(t3, e3, n3, r2) {
    var i2 = function(t4, e4, n4) {
      var r3 = St.maximumDepth(t4), i3 = n4 - e4;
      return { rowSpan: Math.floor(i3 - r3 - r3 / i3), colSpan: t4.columns && t4.columns.length || 1 };
    }(t3, e3, r2);
    return b(ee, { column: t3, index: n3, colSpan: i2.colSpan, rowSpan: i2.rowSpan });
  }, n2.renderRow = function(t3, e3, n3) {
    var r2 = this, i2 = St.leafColumns(this.props.header.columns);
    return b(Gt, null, t3.map(function(t4) {
      return t4.hidden ? null : r2.renderColumn(t4, e3, i2.indexOf(t4), n3);
    }));
  }, n2.renderRows = function() {
    var t3 = this, e3 = St.tabularFormat(this.props.header.columns);
    return e3.map(function(n3, r2) {
      return t3.renderRow(n3, r2, e3.length);
    });
  }, n2.render = function() {
    return this.props.header ? b("thead", { key: this.props.header.id, className: it(rt("thead"), this.config.className.thead) }, this.renderRows()) : null;
  }, e2;
}(X);
var re = function(t2) {
  function e2() {
    return t2.apply(this, arguments) || this;
  }
  return r(e2, t2), e2.prototype.render = function() {
    return b("table", { role: "grid", className: it(rt("table"), this.config.className.table), style: n({}, this.config.style.table, { height: this.props.height }) }, b(ne, { header: this.props.header }), b($t, { data: this.props.data, status: this.props.status, header: this.props.header }));
  }, e2;
}(X);
var ie = function(t2) {
  function e2(e3, n2) {
    var r2;
    return (r2 = t2.call(this, e3, n2) || this).headerRef = { current: null }, r2.state = { isActive: true }, r2;
  }
  r(e2, t2);
  var i2 = e2.prototype;
  return i2.componentDidMount = function() {
    0 === this.headerRef.current.children.length && this.setState({ isActive: false });
  }, i2.render = function() {
    return this.state.isActive ? b("div", { ref: this.headerRef, className: it(rt("head"), this.config.className.header), style: n({}, this.config.style.header) }, b(dt, { position: ot.Header })) : null;
  }, e2;
}(X);
var oe = function(t2) {
  function e2(e3, n2) {
    var r2;
    return (r2 = t2.call(this, e3, n2) || this).footerRef = { current: null }, r2.state = { isActive: true }, r2;
  }
  r(e2, t2);
  var i2 = e2.prototype;
  return i2.componentDidMount = function() {
    0 === this.footerRef.current.children.length && this.setState({ isActive: false });
  }, i2.render = function() {
    return this.state.isActive ? b("div", { ref: this.footerRef, className: it(rt("footer"), this.config.className.footer), style: n({}, this.config.style.footer) }, b(dt, { position: ot.Footer })) : null;
  }, e2;
}(X);
var se = function(t2) {
  function e2(e3, n2) {
    var r2;
    return (r2 = t2.call(this, e3, n2) || this).configContext = void 0, r2.processPipelineFn = void 0, r2.configContext = function(t3, e4) {
      var n3 = { __c: e4 = "__cC" + d++, __: null, Consumer: function(t4, e5) {
        return t4.children(e5);
      }, Provider: function(t4) {
        var n4, r3;
        return this.getChildContext || (n4 = [], (r3 = {})[e4] = this, this.getChildContext = function() {
          return r3;
        }, this.shouldComponentUpdate = function(t5) {
          this.props.value !== t5.value && n4.some(N);
        }, this.sub = function(t5) {
          n4.push(t5);
          var e5 = t5.componentWillUnmount;
          t5.componentWillUnmount = function() {
            n4.splice(n4.indexOf(t5), 1), e5 && e5.call(t5);
          };
        }), t4.children;
      } };
      return n3.Provider.__ = n3.Consumer.contextType = n3;
    }(), r2.state = { status: Lt.Loading, header: e3.header, data: null }, r2;
  }
  r(e2, t2);
  var i2 = e2.prototype;
  return i2.processPipeline = function() {
    try {
      var t3 = this;
      t3.props.config.eventEmitter.emit("beforeLoad"), t3.setState({ status: Lt.Loading });
      var e3 = function(e4, n2) {
        try {
          var r2 = Promise.resolve(t3.props.pipeline.process()).then(function(e5) {
            t3.setState({ data: e5, status: Lt.Loaded }), t3.props.config.eventEmitter.emit("load", e5);
          });
        } catch (t4) {
          return n2(t4);
        }
        return r2 && r2.then ? r2.then(void 0, n2) : r2;
      }(0, function(e4) {
        pt.error(e4), t3.setState({ status: Lt.Error, data: null });
      });
      return Promise.resolve(e3 && e3.then ? e3.then(function() {
      }) : void 0);
    } catch (t4) {
      return Promise.reject(t4);
    }
  }, i2.componentDidMount = function() {
    try {
      var t3 = this, e3 = t3.props.config;
      return Promise.resolve(t3.processPipeline()).then(function() {
        e3.header && t3.state.data && t3.state.data.length && t3.setState({ header: e3.header.adjustWidth(e3) }), t3.processPipelineFn = t3.processPipeline.bind(t3), t3.props.pipeline.on("updated", t3.processPipelineFn);
      });
    } catch (t4) {
      return Promise.reject(t4);
    }
  }, i2.componentWillUnmount = function() {
    this.props.pipeline.off("updated", this.processPipelineFn);
  }, i2.componentDidUpdate = function(t3, e3) {
    e3.status != Lt.Rendered && this.state.status == Lt.Loaded && (this.setState({ status: Lt.Rendered }), this.props.config.eventEmitter.emit("ready"));
  }, i2.render = function() {
    return b(this.configContext.Provider, { value: this.props.config }, b("div", { role: "complementary", className: it("gridjs", rt("container"), this.state.status === Lt.Loading ? rt("loading") : null, this.props.config.className.container), style: n({}, this.props.config.style.container, { width: this.props.width }) }, this.state.status === Lt.Loading && b("div", { className: rt("loading-bar") }), b(ie, null), b("div", { className: rt("wrapper"), style: { height: this.props.height } }, b(re, { ref: this.props.config.tableRef, data: this.state.data, header: this.state.header, width: this.props.width, height: this.props.height, status: this.state.status })), b(oe, null), b("div", { ref: this.props.config.tempRef, id: "gridjs-temp", className: rt("temp") })));
  }, e2;
}(X);
var ae = function(t2) {
  function e2(e3) {
    var n3;
    return (n3 = t2.call(this) || this).config = void 0, n3.plugin = void 0, n3.config = new jt({ instance: o(n3), eventEmitter: o(n3) }).update(e3), n3.plugin = n3.config.plugin, n3;
  }
  r(e2, t2);
  var n2 = e2.prototype;
  return n2.updateConfig = function(t3) {
    return this.config.update(t3), this;
  }, n2.createElement = function() {
    return b(se, { config: this.config, pipeline: this.config.pipeline, header: this.config.header, width: this.config.width, height: this.config.height });
  }, n2.forceRender = function() {
    return this.config && this.config.container || pt.error("Container is empty. Make sure you call render() before forceRender()", true), this.config.pipeline.clearCache(), B(null, this.config.container), B(this.createElement(), this.config.container), this;
  }, n2.render = function(t3) {
    return t3 || pt.error("Container element cannot be null", true), t3.childNodes.length > 0 ? (pt.error("The container element " + t3 + " is not empty. Make sure the container is empty and call render() again"), this) : (this.config.container = t3, B(this.createElement(), t3), this);
  }, e2;
}(tt);
var le = [];
var ce = [];
var pe = l.__b;
var he = l.__r;
var fe = l.diffed;
var de = l.__c;
var _e = l.unmount;
function ye() {
  for (var t2; t2 = le.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(we), t2.__H.__h.forEach(ke), t2.__H.__h = [];
      } catch (e2) {
        t2.__H.__h = [], l.__e(e2, t2.__v);
      }
}
l.__b = function(t2) {
  Bt = null, pe && pe(t2);
}, l.__r = function(t2) {
  he && he(t2), Wt = 0;
  var e2 = (Bt = t2.__c).__H;
  e2 && (zt === Bt ? (e2.__h = [], Bt.__h = [], e2.__.forEach(function(t3) {
    t3.__N && (t3.__ = t3.__N), t3.__V = ce, t3.__N = t3.i = void 0;
  })) : (e2.__h.forEach(we), e2.__h.forEach(ke), e2.__h = [])), zt = Bt;
}, l.diffed = function(t2) {
  fe && fe(t2);
  var e2 = t2.__c;
  e2 && e2.__H && (e2.__H.__h.length && (1 !== le.push(e2) && qt === l.requestAnimationFrame || ((qt = l.requestAnimationFrame) || function(t3) {
    var e3, n2 = function() {
      clearTimeout(r2), be && cancelAnimationFrame(e3), setTimeout(t3);
    }, r2 = setTimeout(n2, 100);
    be && (e3 = requestAnimationFrame(n2));
  })(ye)), e2.__H.__.forEach(function(t3) {
    t3.i && (t3.__H = t3.i), t3.__V !== ce && (t3.__ = t3.__V), t3.i = void 0, t3.__V = ce;
  })), zt = Bt = null;
}, l.__c = function(t2, e2) {
  e2.some(function(t3) {
    try {
      t3.__h.forEach(we), t3.__h = t3.__h.filter(function(t4) {
        return !t4.__ || ke(t4);
      });
    } catch (n2) {
      e2.some(function(t4) {
        t4.__h && (t4.__h = []);
      }), e2 = [], l.__e(n2, t3.__v);
    }
  }), de && de(t2, e2);
}, l.unmount = function(t2) {
  _e && _e(t2);
  var e2, n2 = t2.__c;
  n2 && n2.__H && (n2.__H.__.forEach(function(t3) {
    try {
      we(t3);
    } catch (t4) {
      e2 = t4;
    }
  }), e2 && l.__e(e2, n2.__v));
};
var be = "function" == typeof requestAnimationFrame;
function we(t2) {
  var e2 = Bt, n2 = t2.__c;
  "function" == typeof n2 && (t2.__c = void 0, n2()), Bt = e2;
}
function ke(t2) {
  var e2 = Bt;
  t2.__c = t2.__(), Bt = e2;
}

// node_modules/@arc-web/components/dist/components/table/arc-table.styles.js
var arc_table_styles_default = [
  component_styles_default,
  css`
    #main {
      height: 100%;
    }

    /* Overwrite the scrollbar-tracks to display a border that looks good with the table */
    ::-webkit-scrollbar-track {
      border-left: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-radius: 0;
    }
    ::-webkit-scrollbar-track:horizontal {
      border-top: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-left: none;
    }

    /* Container */
    .gridjs-container {
      display: inline-flex;
      flex-direction: column;
      height: inherit;
      overflow: hidden;
      color: rgb(var(--arc-font-color));
      position: relative;
      z-index: 0;
    }

    /* Header (contains the search input plugin) */
    .gridjs-head {
      width: 100%;
      padding-bottom: var(--arc-spacing-small);
    }
    .gridjs-head:empty,
    .gridjs-footer:empty {
      padding: 0;
      border: none;
    }

    /* Wrapper */
    .gridjs-wrapper {
      display: flex;
      width: 100%;
      position: relative;
      overflow: auto;
      border: var(--arc-border-style) var(--arc-border-width) rgb(var(--arc-color-default));
      z-index: 1;
      -webkit-font-smoothing: antialiased;
    }

    /* Table */
    table.gridjs-table {
      flex: 1 1 100%;
      border-collapse: collapse;
      text-align: left;
      display: table;
      table-layout: fixed;
      overflow: auto;
    }

    /* Rows */
    .gridjs-tr {
      border-top: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-bottom: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
    }
    .gridjs-tr:hover,
    .gridjs-tr-selected {
      background-color: rgba(var(--arc-font-color), 5%);
    }
    .gridjs-tr:first-of-type {
      border-top: none;
    }
    .gridjs-tr:last-of-type {
      border-bottom: none;
    }

    /* Headers */
    th.gridjs-th {
      position: relative;
      padding: var(--arc-spacing-small) var(--arc-spacing-medium);
      background-color: rgb(var(--arc-container-color));
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-top: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      white-space: nowrap;
      outline: none;
      vertical-align: middle;
    }
    th.gridjs-th .gridjs-th-content {
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      float: left;
    }
    th.gridjs-th-fixed {
      position: sticky;
      z-index: 1;
    }
    th.gridjs-th:first-of-type {
      border-left: none;
    }
    th.gridjs-th:last-of-type {
      border-right: none;
    }
    th.gridjs-th-sort {
      cursor: pointer;
    }
    th.gridjs-th-sort .gridjs-th-content {
      width: calc(100% - 15px);
    }
    th.gridjs-th-sort:hover,
    th.gridjs-th-sort:focus {
      background-color: currentcolor;
      background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
    }

    /* Data */
    td.gridjs-td {
      border-left: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-right: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      padding: var(--arc-spacing-small) var(--arc-spacing-medium);
      background-color: transparent;
      box-sizing: content-box;
    }
    td.gridjs-td:first-of-type {
      border-left: none;
    }
    td.gridjs-td:last-of-type {
      border-right: none;
    }

    /* Footer */
    .gridjs-footer {
      display: block;
      position: relative;
      width: 100%;
      z-index: 5;
      padding: var(--arc-spacing-small) var(--arc-spacing-medium);
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-top: none;
    }

    /* Error message */
    td.gridjs-message {
      color: rgb(var(--arc-grey-050));
      text-align: center;
    }

    /* Loading */
    .gridjs-loading-bar {
      z-index: 10;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: transparent;
      opacity: 0.5;
    }
    .gridjs-loading-bar::after {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(var(--arc-hover-dark) 0 0);
      background-repeat: no-repeat;
      display: inline-block;

      -webkit-animation-duration: 2s;
      -webkit-animation-fill-mode: forwards;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-name: shimmer;
      -webkit-animation-timing-function: linear;
    }

    @-webkit-keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }

    /* PLUGINS */
    /* Search filter */
    .gridjs-search {
      float: left;
    }
    .gridjs-search-input {
      width: 18.5rem;
    }
    input.gridjs-input {
      outline: none;
      color: inherit;
      background-color: transparent;
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      padding: var(--arc-spacing-x-small) var(--arc-spacing-normal);
      line-height: inherit;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    input.gridjs-input:focus {
      box-shadow: var(--arc-box-shadow);
      border-color: rgb(var(--arc-color-info));
    }

    /* Sorting icon */
    button.gridjs-sort {
      float: right;
      height: 24px;
      width: 13px;
      background-color: rgb(var(--arc-font-color));
      background-repeat: no-repeat;
      background-position-x: center;
      background-size: contain;
      cursor: pointer;
      border: none;
      outline: none;
    }
    button.gridjs-sort-neutral {
      opacity: 0.3;
      -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z'/%3E%3C/svg%3E");
      mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z'/%3E%3C/svg%3E");
    }
    button.gridjs-sort-asc {
      -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='8' fill='currentColor' stroke='currentColor' viewBox='0 0 24 24'%3E%3Cpath d='M0 21l12-18 12 18z'/%3E%3C/svg%3E")
        no-repeat 50% 35%;
      mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='8' fill='currentColor' stroke='currentColor' viewBox='0 0 24 24'%3E%3Cpath d='M0 21l12-18 12 18z'/%3E%3C/svg%3E")
        no-repeat 50% 35%;
    }
    button.gridjs-sort-desc {
      -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='8' fill='currentColor' stroke='currentColor' viewBox='0 0 24 24'%3E%3Cpath d='M24 3l-12 18-12-18z'/%3E%3C/svg%3E")
        no-repeat 50% 65%;
      mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='8' fill='currentColor' stroke='currentColor' viewBox='0 0 24 24'%3E%3Cpath d='M24 3l-12 18-12-18z'/%3E%3C/svg%3E")
        no-repeat 50% 65%;
    }
    button.gridjs-sort:focus {
      outline: none;
    }

    /* Resizable */
    .gridjs-resizable {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 3px;
    }
    .gridjs-resizable:hover {
      cursor: ew-resize;
      background-color: rgb(var(--arc-color-info));
    }

    /* Row selection */
    .gridjs-td .gridjs-checkbox {
      display: block;
      margin: auto;
      cursor: pointer;
    }

    /* Pagination */
    .gridjs-pagination,
    .gridjs-pagination .gridjs-pages {
      display: flex;
      align-items: center;
    }
    .gridjs-pagination {
      justify-content: space-between;
    }
    .gridjs-pagination .gridjs-pages {
      margin-left: auto;
    }
    .gridjs-pagination .gridjs-pages button {
      cursor: pointer;
      padding: var(--arc-spacing-x-small) var(--arc-spacing-small);
      border: none;
      color: inherit;
      background-color: transparent;
      outline: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .gridjs-pagination .gridjs-pages button.gridjs-currentPage {
      border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style) currentColor;
    }
    .gridjs-pagination .gridjs-pages button:hover,
    .gridjs-pagination .gridjs-pages button:focus-visible {
      background-color: rgba(var(--arc-font-color), 10%);
    }
    .gridjs-pagination .gridjs-pages button:disabled,
    .gridjs-pagination .gridjs-pages button[disabled],
    .gridjs-pagination .gridjs-pages button:hover:disabled {
      cursor: default;
      background-color: transparent;
      color: rgb(var(--arc-grey-050));
    }
    .gridjs-pagination .gridjs-pages button.gridjs-spread {
      cursor: default;
      box-shadow: none;
      background-color: transparent;
    }
  `
];

// node_modules/@arc-web/components/dist/components/table/ArcTable.js
var ArcTable = class extends LitElement {
  constructor() {
    super(...arguments);
    this.fixedHeader = false;
    this.pagination = false;
    this.paginationLimit = 10;
    this.paginationSummary = false;
    this.resizable = false;
    this.sort = false;
    this.search = false;
  }
  firstUpdated() {
    this._grid = new ae({
      columns: this.columns || [],
      data: this.data || [],
      height: this.height,
      fixedHeader: this.fixedHeader,
      language: {
        pagination: {
          previous: "˂",
          next: "˃"
        },
        loading: "Retrieving your data, please wait...",
        noRecordsFound: "No matching records found.",
        error: "An error occurred while fetching your data.",
        ...this.language
      },
      pagination: {
        enabled: this.pagination,
        limit: this.paginationLimit,
        summary: this.paginationSummary
      },
      resizable: this.resizable,
      sort: this.sort,
      search: this.search
    }).render(this.table);
    this._addTableListeners();
  }
  _emitTableEvent(type, args) {
    emit(this, ARC_EVENTS[type], {
      detail: args
    });
  }
  _addTableListeners() {
    this._grid.on("rowClick", (...args) => this._emitTableEvent("rowClick", args));
    this._grid.on("cellClick", (...args) => this._emitTableEvent("cellClick", args));
    this._grid.on("ready", () => this._emitTableEvent("tableReady"));
  }
  format(type, props, ...children) {
    return b(type, props, ...children);
  }
  updateConfig(userConfig) {
    const keys = Object.keys(userConfig);
    if (keys.length === 0) {
      throw new Error("Missing property: Please provide at least one property to update the configuration.");
    }
    this._grid.updateConfig({ ...userConfig });
    this._grid.forceRender();
    keys.forEach((key) => {
      if (!(key in this))
        return;
      this[key] = userConfig[key];
    });
  }
  render() {
    return html`<div id="main"></div>`;
  }
};
ArcTable.tag = "arc-table";
ArcTable.styles = arc_table_styles_default;
__decorate([
  query("#main")
], ArcTable.prototype, "table", void 0);
__decorate([
  property()
], ArcTable.prototype, "columns", void 0);
__decorate([
  property()
], ArcTable.prototype, "data", void 0);
__decorate([
  property({ type: Boolean, attribute: "fixed-header" })
], ArcTable.prototype, "fixedHeader", void 0);
__decorate([
  property()
], ArcTable.prototype, "height", void 0);
__decorate([
  property()
], ArcTable.prototype, "language", void 0);
__decorate([
  property({ type: Boolean })
], ArcTable.prototype, "pagination", void 0);
__decorate([
  property({ type: Number, attribute: "pagination-limit" })
], ArcTable.prototype, "paginationLimit", void 0);
__decorate([
  property({ type: Boolean, attribute: "pagination-summary" })
], ArcTable.prototype, "paginationSummary", void 0);
__decorate([
  property({ type: Boolean })
], ArcTable.prototype, "resizable", void 0);
__decorate([
  property({ type: Boolean })
], ArcTable.prototype, "sort", void 0);
__decorate([
  property({ type: Boolean })
], ArcTable.prototype, "search", void 0);

// node_modules/@arc-web/components/dist/components/table/arc-table.js
customElements.define("arc-table", ArcTable);

// node_modules/@arc-web/components/dist/components/table/react.js
var ArcTable2 = createComponent({
  tagName: "arc-table",
  elementClass: ArcTable,
  react: import_react48.default,
  events: {
    onArcRowClick: ARC_EVENTS.rowClick,
    onArcCellClick: ARC_EVENTS.cellClick,
    onArcTableReady: ARC_EVENTS.tableReady
  }
});

// node_modules/@arc-web/components/dist/utilities/form-utils.js
function serialize(form) {
  const formData = new FormData(form);
  const object = {};
  formData.forEach((value, key) => {
    if (Reflect.has(object, key)) {
      const entry = object[key];
      if (Array.isArray(entry)) {
        entry.push(value);
      } else {
        object[key] = [object[key], value];
      }
    } else {
      object[key] = value;
    }
  });
  return object;
}
export {
  ArcAccessibility2 as ArcAccessibility,
  ArcAvatar2 as ArcAvatar,
  ArcBottombar2 as ArcBottombar,
  ArcButton2 as ArcButton,
  ArcCard2 as ArcCard,
  ArcChip2 as ArcChip,
  ArcContainer2 as ArcContainer,
  ArcDrawer2 as ArcDrawer,
  ArcDropdown2 as ArcDropdown,
  ArcHero2 as ArcHero,
  ArcIcon2 as ArcIcon,
  ArcIconButton2 as ArcIconButton,
  ArcImage2 as ArcImage,
  ArcMenu2 as ArcMenu,
  ArcMenuItem2 as ArcMenuItem,
  ArcNavbar2 as ArcNavbar,
  ArcRadio2 as ArcRadio,
  ArcRadioGroup2 as ArcRadioGroup,
  ArcSSO2 as ArcSSO,
  ArcSidebar2 as ArcSidebar,
  ArcSpinner2 as ArcSpinner,
  ArcSwitch2 as ArcSwitch,
  ArcTable2 as ArcTable,
  ArcTooltip2 as ArcTooltip,
  getBasePath,
  getPropertyValue,
  getRootValue,
  noFOUC,
  serialize,
  setBasePath,
  setRootValue
};
/*! Bundled license information:

@lit-labs/react/development/create-component.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/react/development/index.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/private-async-helpers.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/until.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@azure/msal-browser/dist/_virtual/_tslib.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@azure/msal-common/dist/_virtual/_tslib.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@azure/msal-common/dist/utils/Constants.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/error/AuthError.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/crypto/ICrypto.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/error/ClientAuthError.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/utils/StringUtils.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/logger/Logger.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/packageMetadata.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/authority/AuthorityOptions.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/error/ClientConfigurationError.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/request/ScopeSet.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/account/ClientInfo.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/authority/AuthorityType.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/cache/entities/AccountEntity.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/account/AuthToken.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/cache/CacheManager.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/config/ClientConfiguration.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/error/ServerError.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/network/ThrottlingUtils.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/network/NetworkManager.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/account/CcsCredential.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/request/RequestValidator.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/request/RequestParameterBuilder.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/client/BaseClient.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/cache/entities/CredentialEntity.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/cache/entities/IdTokenEntity.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/utils/TimeUtils.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/cache/entities/AccessTokenEntity.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/cache/entities/RefreshTokenEntity.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/error/InteractionRequiredAuthError.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/cache/entities/CacheRecord.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/utils/ProtocolUtils.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/url/UrlString.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/telemetry/performance/PerformanceEvent.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/crypto/PopTokenGenerator.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/cache/entities/AppMetadataEntity.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/cache/persistence/TokenCacheContext.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/response/ResponseHandler.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/client/AuthorizationCodeClient.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/client/DeviceCodeClient.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/client/RefreshTokenClient.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/client/ClientCredentialClient.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/client/OnBehalfOfClient.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/client/SilentFlowClient.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/client/UsernamePasswordClient.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/authority/OpenIdConfigResponse.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/authority/AuthorityMetadata.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/authority/ProtocolMode.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/cache/entities/AuthorityMetadataEntity.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/authority/CloudInstanceDiscoveryResponse.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/authority/CloudInstanceDiscoveryErrorResponse.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/authority/RegionDiscovery.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/authority/Authority.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/authority/AuthorityFactory.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/cache/entities/ServerTelemetryEntity.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/cache/entities/ThrottlingEntity.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/network/INetworkModule.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/error/JoseHeaderError.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/crypto/JoseHeader.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/request/AuthenticationHeaderParser.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/telemetry/server/ServerTelemetryManager.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/telemetry/performance/PerformanceClient.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/telemetry/performance/StubPerformanceClient.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-common/dist/index.js:
  (*! @azure/msal-common v13.1.0 2023-06-07 *)

@azure/msal-browser/dist/error/BrowserAuthError.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/utils/BrowserConstants.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/error/BrowserConfigurationAuthError.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/cache/BrowserStorage.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/cache/MemoryStorage.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/utils/BrowserProtocolUtils.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/cache/BrowserCacheManager.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/packageMetadata.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/network/FetchClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/network/XhrClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/utils/BrowserUtils.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/interaction_client/BaseInteractionClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/interaction_client/StandardInteractionClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/interaction_handler/InteractionHandler.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/interaction_handler/RedirectHandler.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/event/EventType.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/error/NativeAuthError.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/interaction_client/SilentCacheClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/interaction_client/NativeInteractionClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/broker/nativeBroker/NativeMessageHandler.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/interaction_client/RedirectClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/interaction_client/PopupClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/navigation/NavigationClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/config/Configuration.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/interaction_handler/SilentHandler.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/interaction_client/SilentIframeClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/interaction_client/SilentRefreshClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/event/EventHandler.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/utils/MathUtils.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/crypto/GuidGenerator.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/utils/BrowserStringUtils.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/encode/Base64Encode.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/encode/Base64Decode.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/crypto/PkceGenerator.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/crypto/ModernBrowserCrypto.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/crypto/MsrBrowserCrypto.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/crypto/MsBrowserCrypto.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/crypto/BrowserCrypto.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/cache/DatabaseStorage.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/cache/AsyncMemoryStorage.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/cache/CryptoKeyStore.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/crypto/CryptoOps.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/telemetry/BrowserPerformanceMeasurement.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/telemetry/BrowserPerformanceClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/internals.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/cache/TokenCache.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/interaction_client/HybridSpaAuthorizationCodeClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/interaction_client/SilentAuthCodeClient.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/app/ClientApplication.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/app/PublicClientApplication.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/app/IPublicClientApplication.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/event/EventMessage.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/crypto/SignedHttpRequest.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)

@azure/msal-browser/dist/index.js:
  (*! @azure/msal-browser v2.37.1 2023-06-07 *)
*/
//# sourceMappingURL=@arc-web_components_react.js.map
