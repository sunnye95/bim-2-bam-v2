import {
  ICON_TYPES,
  getTabbableBoundary,
  ifDefined
} from "./chunk-UNKQZFFD.js";
import {
  ARC_ANIMATION_OPTIONS,
  ARC_EVENTS,
  LitElement,
  __decorate,
  classMap,
  component_styles_default,
  css,
  emit,
  getAnimation,
  html,
  property,
  query,
  setDefaultAnimation,
  startAnimations,
  stopAnimations,
  waitForEvent,
  watch
} from "./chunk-AF26NG3C.js";

// node_modules/@arc-web/components/dist/internal/scroll.js
var locks = /* @__PURE__ */ new Set();
function lockBodyScrolling(lockingEl) {
  locks.add(lockingEl);
  document.body.classList.add("arc-scroll-lock");
}
function unlockBodyScrolling(lockingEl) {
  locks.delete(lockingEl);
  if (locks.size === 0) {
    document.body.classList.remove("arc-scroll-lock");
  }
}

// node_modules/@arc-web/components/dist/internal/string.js
function isPascalCase(string) {
  return /^([A-Z]([a-z]+))(([A-Z]([a-z]+))+)$/.test(string);
}
function isCamelCase(string) {
  return /^([a-z]+)(([A-Z]([a-z]+))+)$/.test(string);
}
function uppercaseFirstLetter(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}
function stringToInitials(string) {
  const fullName = string.split(" ");
  const firstName = fullName.shift() || "";
  const lastName = fullName.pop() || "";
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}
function stringToSpaceSeparated(string) {
  if (!isPascalCase(string) && !isCamelCase(string)) {
    return uppercaseFirstLetter(string);
  }
  const camelStr = `${string.charAt(0).toLowerCase()}${string.slice(1)}`;
  const spacedString = camelStr.replace(/([A-Z])/g, " $1");
  return uppercaseFirstLetter(spacedString);
}
function stringToHyphenSeparated(string) {
  if (!isPascalCase(string) && !isCamelCase(string))
    return string;
  const camelStr = `${string.charAt(0).toLowerCase()}${string.slice(1)}`;
  const hyphenString = camelStr.replace(/([A-Z])/g, "-$1");
  return hyphenString.toLowerCase();
}
function stringToArray(string) {
  return string.split(/[ ,]+/);
}
function stringifyObject(object) {
  try {
    return JSON.stringify(object);
  } catch (e) {
    throw new Error("Invalid JSON object");
  }
}
function parseObject(string) {
  try {
    return JSON.parse(string);
  } catch (e) {
    throw new Error("Invalid JSON string");
  }
}

// node_modules/@arc-web/components/dist/internal/modal.js
var activeModals = [];
var Modal = class {
  constructor(element) {
    this.tabDirection = "forward";
    this.element = element;
    this.handleFocusIn = this.handleFocusIn.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  activate() {
    activeModals.push(this.element);
    document.addEventListener("focusin", this.handleFocusIn);
    document.addEventListener("keydown", this.handleKeyDown);
  }
  deactivate() {
    activeModals = activeModals.filter((modal) => modal !== this.element);
    document.removeEventListener("focusin", this.handleFocusIn);
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  isActive() {
    return activeModals[activeModals.length - 1] === this.element;
  }
  handleFocusIn(event) {
    const path = event.composedPath();
    if (this.isActive() && !path.includes(this.element)) {
      const { start, end } = getTabbableBoundary(this.element);
      const target = this.tabDirection === "forward" ? start : end;
      if (typeof (target === null || target === void 0 ? void 0 : target.focus) === "function") {
        target.focus({ preventScroll: true });
      }
    }
  }
  handleKeyDown(event) {
    if (event.key === "Tab" && event.shiftKey) {
      this.tabDirection = "backward";
      setTimeout(() => {
        this.tabDirection = "forward";
      });
    }
  }
};

// node_modules/@arc-web/components/dist/components/drawer/constants/DrawerConstants.js
var DRAWER_PLACEMENTS = {
  top: "top",
  end: "end",
  bottom: "bottom",
  start: "start"
};

// node_modules/@arc-web/components/dist/components/drawer/arc-drawer.styles.js
var arc_drawer_styles_default = [
  component_styles_default,
  css`
    :host {
      --size: 25rem;
      display: contents;
    }

    .drawer {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      z-index: var(--arc-z-index-drawer);
    }

    .drawer--contained {
      position: absolute;
      z-index: initial;
    }

    #overlay {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(var(--arc-darker-40) 0 0);
      pointer-events: all;
    }

    .drawer--contained #overlay {
      position: absolute;
    }

    #panel {
      position: absolute;
      display: flex;
      flex-direction: column;
      z-index: 2;
      max-width: 100%;
      max-height: 100%;
      background-color: rgb(var(--arc-container-color));
      overflow: auto;
      pointer-events: all;
    }

    #panel:focus {
      outline: none;
    }

    /* Placements */
    .drawer--top #panel {
      top: 0;
      right: auto;
      bottom: auto;
      left: 0;
      width: 100%;
      height: var(--size);
    }

    .drawer--end #panel {
      top: 0;
      right: 0;
      bottom: auto;
      left: auto;
      width: var(--size);
      height: 100%;
    }

    .drawer--bottom #panel {
      top: auto;
      right: auto;
      bottom: 0;
      left: 0;
      width: 100%;
      height: var(--size);
    }

    .drawer--right #panel {
      top: 0;
      right: auto;
      bottom: auto;
      left: 0;
      width: var(--size);
      height: 100%;
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
      font-size: var(--arc-font-size-large);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    #body {
      flex: 1 1 auto;
      padding: var(--arc-spacing-medium);
      padding-top: var(--arc-spacing-normal);
      border-top: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }

    #footer {
      text-align: right;
      padding: var(--arc-spacing-medium);
    }
  `
];

// node_modules/@arc-web/components/dist/components/drawer/ArcDrawer.js
var ArcDrawer = class extends LitElement {
  constructor() {
    super(...arguments);
    this.open = false;
    this.contained = false;
    this.placement = DRAWER_PLACEMENTS.end;
  }
  async handleOpenChange() {
    if (this.open) {
      emit(this, ARC_EVENTS.show);
      this.originalTrigger = document.activeElement;
      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      this.drawer.hidden = false;
      requestAnimationFrame(() => {
        const arcInitialFocus = emit(this, ARC_EVENTS.initialFocus, { cancelable: true });
        if (!arcInitialFocus.defaultPrevented) {
          this.panel.focus({ preventScroll: true });
        }
      });
      const panelAnimation = getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`);
      const overlayAnimation = getAnimation(this, "drawer.overlay.show");
      await Promise.all([
        startAnimations(this.panel, panelAnimation.keyframes, panelAnimation.options),
        startAnimations(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      emit(this, ARC_EVENTS.afterShow);
    } else {
      emit(this, ARC_EVENTS.hide);
      this.modal.deactivate();
      unlockBodyScrolling(this);
      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`);
      const overlayAnimation = getAnimation(this, "drawer.overlay.hide");
      await Promise.all([
        startAnimations(this.panel, panelAnimation.keyframes, panelAnimation.options),
        startAnimations(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      this.drawer.hidden = true;
      const trigger = this.originalTrigger;
      if (typeof (trigger === null || trigger === void 0 ? void 0 : trigger.focus) === "function") {
        setTimeout(() => trigger.focus());
      }
      emit(this, ARC_EVENTS.afterHide);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.modal = new Modal(this);
  }
  firstUpdated() {
    this.drawer.hidden = !this.open;
    if (this.open && !this.contained) {
      this.modal.activate();
      lockBodyScrolling(this);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
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
  _requestClose() {
    const arcRequestClose = emit(this, ARC_EVENTS.requestClose, { cancelable: true });
    if (arcRequestClose.defaultPrevented) {
      const animation = getAnimation(this, "drawer.denyClose");
      startAnimations(this.panel, animation.keyframes, animation.options);
      return;
    }
    this.hide();
  }
  _handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      this._requestClose();
    }
  }
  render() {
    return html`
      <div
        id="main"
        class=${classMap({
      drawer: true,
      "drawer--contained": this.contained,
      "drawer--top": this.placement === DRAWER_PLACEMENTS.top,
      "drawer--end": this.placement === DRAWER_PLACEMENTS.end,
      "drawer--bottom": this.placement === DRAWER_PLACEMENTS.bottom,
      "drawer--start": this.placement === DRAWER_PLACEMENTS.start
    })}
        @keydown=${this._handleKeyDown}
      >
        <div id="overlay" @click=${this._requestClose} role="presentation" tabindex="-1"></div>
        <div
          id="panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${ifDefined(this.label || void 0)}
          aria-labelledby="${ifDefined(this.label ? void 0 : "title")}"
          tabindex="0"
        >
          <div id="header">
            <slot id="title" name="label"><span>${this.label}</span></slot>
            <arc-icon-button
              id="toggleClose"
              name=${ICON_TYPES.x}
              label="Close drawer"
              @click=${this._requestClose}
            ></arc-icon-button>
          </div>

          <div id="body">
            <slot></slot>
          </div>

          <footer id="footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
ArcDrawer.tag = "arc-drawer";
ArcDrawer.styles = arc_drawer_styles_default;
__decorate([
  query("#main")
], ArcDrawer.prototype, "drawer", void 0);
__decorate([
  query("#panel")
], ArcDrawer.prototype, "panel", void 0);
__decorate([
  query("#overlay")
], ArcDrawer.prototype, "overlay", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcDrawer.prototype, "open", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcDrawer.prototype, "contained", void 0);
__decorate([
  property({ type: String, reflect: true })
], ArcDrawer.prototype, "placement", void 0);
__decorate([
  property({ type: String })
], ArcDrawer.prototype, "label", void 0);
__decorate([
  watch("open", { waitUntilFirstUpdate: true })
], ArcDrawer.prototype, "handleOpenChange", null);
setDefaultAnimation("drawer.showTop", {
  keyframes: [
    { opacity: 0, transform: "translateY(-100%)" },
    { opacity: 1, transform: "translateY(0)" }
  ],
  options: ARC_ANIMATION_OPTIONS.slow
});
setDefaultAnimation("drawer.hideTop", {
  keyframes: [
    { opacity: 1, transform: "translateY(0)" },
    { opacity: 0, transform: "translateY(-100%)" }
  ],
  options: ARC_ANIMATION_OPTIONS.slow
});
setDefaultAnimation("drawer.showEnd", {
  keyframes: [
    { opacity: 0, transform: "translateX(100%)" },
    { opacity: 1, transform: "translateX(0)" }
  ],
  options: ARC_ANIMATION_OPTIONS.slow
});
setDefaultAnimation("drawer.hideEnd", {
  keyframes: [
    { opacity: 1, transform: "translateX(0)" },
    { opacity: 0, transform: "translateX(100%)" }
  ],
  options: ARC_ANIMATION_OPTIONS.slow
});
setDefaultAnimation("drawer.showBottom", {
  keyframes: [
    { opacity: 0, transform: "translateY(100%)" },
    { opacity: 1, transform: "translateY(0)" }
  ],
  options: ARC_ANIMATION_OPTIONS.slow
});
setDefaultAnimation("drawer.hideBottom", {
  keyframes: [
    { opacity: 1, transform: "translateY(0)" },
    { opacity: 0, transform: "translateY(100%)" }
  ],
  options: ARC_ANIMATION_OPTIONS.slow
});
setDefaultAnimation("drawer.showStart", {
  keyframes: [
    { opacity: 0, transform: "translateX(-100%)" },
    { opacity: 1, transform: "translateX(0)" }
  ],
  options: ARC_ANIMATION_OPTIONS.slow
});
setDefaultAnimation("drawer.hideStart", {
  keyframes: [
    { opacity: 1, transform: "translateX(0)" },
    { opacity: 0, transform: "translateX(-100%)" }
  ],
  options: ARC_ANIMATION_OPTIONS.slow
});
setDefaultAnimation("drawer.denyClose", {
  keyframes: [{ transform: "scale(1)" }, { transform: "scale(1.01)" }, { transform: "scale(1)" }],
  options: ARC_ANIMATION_OPTIONS.slow
});
setDefaultAnimation("drawer.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: ARC_ANIMATION_OPTIONS.slow
});
setDefaultAnimation("drawer.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: ARC_ANIMATION_OPTIONS.slow
});

export {
  uppercaseFirstLetter,
  stringToInitials,
  stringToSpaceSeparated,
  stringToHyphenSeparated,
  stringToArray,
  stringifyObject,
  parseObject,
  ArcDrawer
};
//# sourceMappingURL=chunk-B2T3EXDY.js.map
