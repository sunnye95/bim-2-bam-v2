import {
  ArcDrawer,
  parseObject,
  stringToHyphenSeparated,
  stringToSpaceSeparated,
  stringifyObject,
  uppercaseFirstLetter
} from "./chunk-B2T3EXDY.js";
import {
  map
} from "./chunk-JKKIFBOK.js";
import {
  FONT_SIZES,
  FONT_SPACING,
  ICON_TYPES,
  INPUT_SIZES,
  THEME_COLORS,
  html as html2,
  ifDefined,
  literal,
  when
} from "./chunk-UNKQZFFD.js";
import {
  ARC_EVENTS,
  Directive,
  LitElement,
  PartType,
  _$LH,
  __decorate,
  classMap,
  component_styles_default,
  css,
  directive,
  emit,
  html,
  mobileBreakpoint,
  noChange,
  nothing,
  prefersDark,
  property,
  query,
  state,
  watch
} from "./chunk-AF26NG3C.js";

// node_modules/@arc-web/components/dist/internal/theme.js
function isNight(date) {
  const currDate = date || /* @__PURE__ */ new Date();
  const currTime = currDate.getHours();
  return currTime >= 19 || currTime < 7;
}

// node_modules/@arc-web/components/dist/components/container/constants/ContainerConstants.js
var CONTAINER_THEMES = {
  auto: "auto",
  dark: "dark",
  light: "light"
};

// node_modules/@arc-web/components/dist/components/container/arc-container.styles.js
var arc_container_styles_default = [
  component_styles_default,
  css`
    #main {
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: rgb(var(--arc-background-color));
      color: rgb(var(--arc-font-color));
    }

    .container {
      flex: 1 1 100%;
      display: flex;
      overflow: hidden;
      gap: 0;
      padding: 0;
    }

    ::slotted(arc-sidebar) {
      display: none;
    }

    #content {
      flex: 1 1 100%;
      overflow: hidden;
      background-color: rgb(var(--arc-container-color));
    }

    arc-bottombar,
    ::slotted(arc-bottombar) {
      display: block;
    }

    /* Medium devices and up */
    @media (min-width: ${mobileBreakpoint}rem) {
      .container:not(.container--fullscreen) {
        gap: var(--arc-spacing-normal);
        padding: var(--arc-spacing-normal) var(--arc-spacing-medium);
      }

      ::slotted(arc-sidebar) {
        display: block;
      }

      arc-bottombar,
      ::slotted(arc-bottombar) {
        display: none;
      }
    }
  `
];

// node_modules/@arc-web/components/dist/utilities/style-utils.js
function getPropertyValue(element, property2) {
  const computedStyles = window.getComputedStyle(element);
  return computedStyles.getPropertyValue(property2).trim();
}
function getRootValue(property2) {
  const root = document.querySelector(":root");
  const computedStyles = getComputedStyle(root);
  return computedStyles.getPropertyValue(property2).trim();
}
function setRootValue(variable, newVal) {
  const root = document.querySelector(":root");
  if (getRootValue(variable) !== newVal) {
    root.style.setProperty(variable, newVal);
  }
}
function noFOUC() {
  document.documentElement.className = "no-fouc";
  if (document.readyState === "complete") {
    document.documentElement.classList.remove("no-fouc");
  }
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      document.documentElement.classList.remove("no-fouc");
    }
  };
}

// node_modules/@arc-web/components/dist/components/accessibility/constants/AccessibilityConstants.js
var ACCESSIBILITY_OPTIONS = [
  {
    name: "colourAdjustments",
    icon: "bulb",
    options: {
      theme: Object.values(CONTAINER_THEMES)
    }
  },
  {
    name: "contentAdjustments",
    icon: "book-open",
    options: {
      fontSize: [FONT_SIZES.medium, FONT_SIZES.large, FONT_SIZES["x-large"]],
      lineHeight: [FONT_SPACING.dense, FONT_SPACING.normal, FONT_SPACING.loose],
      letterSpacing: [FONT_SPACING.dense, FONT_SPACING.normal, FONT_SPACING.loose],
      highLegibilityFonts: null,
      highlightLinks: null,
      plainText: null
    }
  }
];

// node_modules/@arc-web/components/dist/components/accessibility/arc-accessibility.styles.js
var arc_accessibility_styles_default = [
  component_styles_default,
  css`
    #wrapper {
      display: grid;
      gap: var(--arc-spacing-small);
    }

    .label {
      display: flex;
      align-items: center;
      gap: var(--arc-spacing-small);
    }

    #wrapper .options {
      display: flex;
      flex-wrap: wrap;
      gap: var(--arc-spacing-small);
    }
  `
];

// node_modules/@arc-web/components/dist/components/drawer/arc-drawer.js
customElements.define("arc-drawer", ArcDrawer);

// node_modules/@arc-web/components/dist/components/radio-group/arc-radio-group.styles.js
var arc_radio_group_styles_default = [
  component_styles_default,
  css`
    :host {
      display: inline-flex;
    }

    #radioGroup {
      display: grid;
      position: relative;
      right: var(--arc-spacing-small);
      border: none;
      padding: 0;
      margin: 0;
      min-width: 0;
    }

    /* Medium devices and up */
    @media (min-width: ${mobileBreakpoint}rem) {
      :host([row]) #radioGroup {
        grid-auto-flow: column;
      }
    }
  `
];

// node_modules/@arc-web/components/dist/components/radio-group/ArcRadioGroup.js
var ArcRadioGroup = class extends LitElement {
  constructor() {
    super(...arguments);
    this.row = false;
  }
  handleFocusIn() {
    const slottedChildren = this.defaultSlot.assignedElements({ flatten: true });
    const checkedRadio = [...slottedChildren].find((el) => el.tagName === "ARC-RADIO" && el.checked);
    checkedRadio === null || checkedRadio === void 0 ? void 0 : checkedRadio.focus();
  }
  render() {
    return html`
      <div id="main">
        <label id="label">
          <slot name="label">${this.label}</slot>
        </label>
        <div id="radioGroup" role="radiogroup" @focusin=${this.handleFocusIn}>
          <slot></slot>
        </div>
      </div>
    `;
  }
};
ArcRadioGroup.tag = "arc-radio-group";
ArcRadioGroup.styles = arc_radio_group_styles_default;
__decorate([
  query("slot:not([name])")
], ArcRadioGroup.prototype, "defaultSlot", void 0);
__decorate([
  property({ type: String })
], ArcRadioGroup.prototype, "label", void 0);
__decorate([
  property({ type: Boolean })
], ArcRadioGroup.prototype, "row", void 0);

// node_modules/@arc-web/components/dist/components/radio-group/arc-radio-group.js
customElements.define("arc-radio-group", ArcRadioGroup);

// node_modules/lit-html/development/directive-helpers.js
var _a;
var _b;
var { _ChildPart: ChildPart } = _$LH;
var ENABLE_SHADYDOM_NOPATCH = true;
var wrap = ENABLE_SHADYDOM_NOPATCH && ((_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) && ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.noPatch) === true ? window.ShadyDOM.wrap : (node) => node;
var isPrimitive = (value) => value === null || typeof value != "object" && typeof value != "function";
var isSingleExpression = (part) => part.strings === void 0;
var RESET_VALUE = {};
var setCommittedValue = (part, value = RESET_VALUE) => part._$committedValue = value;

// node_modules/lit-html/development/directives/live.js
var LiveDirective = class extends Directive {
  constructor(partInfo) {
    super(partInfo);
    if (!(partInfo.type === PartType.PROPERTY || partInfo.type === PartType.ATTRIBUTE || partInfo.type === PartType.BOOLEAN_ATTRIBUTE)) {
      throw new Error("The `live` directive is not allowed on child or event bindings");
    }
    if (!isSingleExpression(partInfo)) {
      throw new Error("`live` bindings can only contain a single expression");
    }
  }
  render(value) {
    return value;
  }
  update(part, [value]) {
    if (value === noChange || value === nothing) {
      return value;
    }
    const element = part.element;
    const name = part.name;
    if (part.type === PartType.PROPERTY) {
      if (value === element[name]) {
        return noChange;
      }
    } else if (part.type === PartType.BOOLEAN_ATTRIBUTE) {
      if (!!value === element.hasAttribute(name)) {
        return noChange;
      }
    } else if (part.type === PartType.ATTRIBUTE) {
      if (element.getAttribute(name) === String(value)) {
        return noChange;
      }
    }
    setCommittedValue(part);
    return value;
  }
};
var live = directive(LiveDirective);

// node_modules/@arc-web/components/dist/internal/form-control.js
var FormController = class {
  constructor(host, options) {
    (this.host = host).addController(this);
    this.options = {
      form: (input) => input.closest("form"),
      name: (input) => input.name,
      value: (input) => input.value,
      disabled: (input) => input.disabled,
      reportValidity: (input) => typeof input.reportValidity === "function" ? input.reportValidity() : true,
      ...options
    };
    this.handleFormData = this.handleFormData.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  hostConnected() {
    this.form = this.options.form(this.host);
    if (this.form) {
      this.form.addEventListener("formdata", this.handleFormData);
      this.form.addEventListener("submit", this.handleFormSubmit);
    }
  }
  hostDisconnected() {
    if (this.form) {
      this.form.removeEventListener("formdata", this.handleFormData);
      this.form.removeEventListener("submit", this.handleFormSubmit);
      this.form = void 0;
    }
  }
  handleFormData(event) {
    const disabled = this.options.disabled(this.host);
    const name = this.options.name(this.host);
    const value = this.options.value(this.host);
    if (!disabled && !!name && !!value) {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          event.formData.append(name, val.toString());
        });
      } else {
        event.formData.append(name, value.toString());
      }
    }
  }
  handleFormSubmit(event) {
    const disabled = this.options.disabled(this.host);
    const { reportValidity } = this.options;
    if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
  submit() {
    if (this.form) {
      const button = document.createElement("button");
      this.form.append(button);
      button.click();
      button.remove();
    }
  }
};

// node_modules/@arc-web/components/dist/styles/control.styles.js
var control_styles_default = css`
  input {
    cursor: inherit;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 1;
  }

  #control {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    cursor: inherit;
    user-select: none;
    appearance: none;
    text-decoration: none;
    padding: var(--arc-spacing-small);
    border-radius: 50%;
  }

  #label {
    line-height: var(--arc-font-size-x-large);
    user-select: none;
  }
`;

// node_modules/@arc-web/components/dist/components/radio/arc-radio.styles.js
var arc_radio_styles_default = [
  component_styles_default,
  control_styles_default,
  css`
    .radio {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      cursor: pointer;
    }

    #icon {
      position: relative;
      display: flex;
    }

    #icon svg {
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentcolor;
      flex-shrink: 0;
      font-size: var(--arc-font-size-x-large);
    }

    #icon svg.fill {
      position: absolute;
      transform: scale(0);
    }

    /* Hover, Focus & Mouse down */
    .radio:not(.radio--disabled) input:hover + #control,
    .radio:not(.radio--disabled) input:focus-visible + #control {
      background-color: rgba(var(--arc-font-color), 10%);
    }
    .radio:not(.radio--disabled) input:active + #control {
      background-color: rgba(var(--arc-font-color), 30%);
    }

    /* Disabled */
    .radio--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Checked */
    .radio--checked #icon {
      color: rgb(var(--arc-color-info));
    }

    .radio--checked #icon svg.fill {
      transform: scale(1);
    }
  `
];

// node_modules/@arc-web/components/dist/components/radio/ArcRadio.js
var ArcRadio = class extends LitElement {
  constructor() {
    super(...arguments);
    this.formController = new FormController(this, {
      value: (control) => control.checked ? control.value : void 0
    });
    this.disabled = false;
    this.checked = false;
    this.invalid = false;
  }
  firstUpdated() {
    this.updateComplete.then(() => {
      const radios = this.getAllRadios();
      const checkedRadio = radios.find((radio) => radio.checked);
      radios.forEach((radio) => {
        radio.input.tabIndex = -1;
      });
      if (checkedRadio && !checkedRadio.disabled) {
        checkedRadio.input.tabIndex = 0;
      } else if (radios.length > 0) {
        const enabledRadios = this.getAllRadios({ includeDisabled: false });
        enabledRadios[0].input.tabIndex = 0;
      }
    });
  }
  handleDisabledChange() {
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
  }
  handleCheckedChange() {
    if (this.checked) {
      this.input.tabIndex = 0;
      this.getSiblingRadios().forEach((radio) => {
        radio.input.tabIndex = -1;
        radio.checked = false;
      });
    }
  }
  getAllRadios(options = { includeDisabled: true }) {
    const radioGroup = this.closest("arc-radio-group");
    const { includeDisabled } = options;
    if (!radioGroup)
      return [this];
    return [...radioGroup.querySelectorAll("arc-radio")].filter((radio) => {
      if (radio.name !== this.name)
        return false;
      return !(!includeDisabled && radio.disabled);
    });
  }
  getSiblingRadios() {
    return this.getAllRadios().filter((radio) => radio !== this);
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
    if (!this.checked) {
      this.checked = true;
      emit(this, ARC_EVENTS.change);
    }
  }
  handleKeyDown(event) {
    if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      const radios = this.getAllRadios({ includeDisabled: false });
      const incr = ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
      let index = radios.indexOf(this) + incr;
      if (index < 0)
        index = radios.length - 1;
      if (index > radios.length - 1)
        index = 0;
      this.getAllRadios().forEach((radio) => {
        radio.checked = false;
        radio.input.tabIndex = -1;
      });
      radios[index].input.focus();
      radios[index].checked = true;
      radios[index].input.tabIndex = 0;
      emit(radios[index], ARC_EVENTS.change);
      event.preventDefault();
    }
  }
  render() {
    return html`
      <label
        id="main"
        class=${classMap({
      radio: true,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled
    })}
        @keydown=${this.handleKeyDown}
      >
        <input
          type="radio"
          name=${ifDefined(this.name || void 0)}
          .value=${ifDefined(this.value || void 0)}
          .checked=${live(this.checked)}
          .disabled=${this.disabled}
          aria-checked=${this.checked ? "true" : "false"}
          aria-disabled=${this.disabled ? "true" : "false"}
          @click=${this._handleClick}
        />
        <span id="control">
          <span id="icon">
            <svg
              class="bg"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="RadioButtonUncheckedIcon"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
              ></path>
            </svg>
            <svg
              class="fill"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="RadioButtonCheckedIcon"
            >
              <path
                d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
              ></path>
            </svg>
          </span>
        </span>
        <span id="label"><slot></slot></span>
      </label>
    `;
  }
};
ArcRadio.tag = "arc-radio";
ArcRadio.styles = arc_radio_styles_default;
__decorate([
  query('input[type="radio"]')
], ArcRadio.prototype, "input", void 0);
__decorate([
  property({ type: String })
], ArcRadio.prototype, "name", void 0);
__decorate([
  property({ type: String })
], ArcRadio.prototype, "value", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcRadio.prototype, "disabled", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcRadio.prototype, "checked", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcRadio.prototype, "invalid", void 0);
__decorate([
  watch("disabled", { waitUntilFirstUpdate: true })
], ArcRadio.prototype, "handleDisabledChange", null);
__decorate([
  watch("checked", { waitUntilFirstUpdate: true })
], ArcRadio.prototype, "handleCheckedChange", null);

// node_modules/@arc-web/components/dist/components/radio/arc-radio.js
customElements.define("arc-radio", ArcRadio);

// node_modules/@arc-web/components/dist/components/button/constants/ButtonConstants.js
var BUTTON_TYPES = {
  filled: "filled",
  outlined: "outlined",
  tab: "tab"
};

// node_modules/@arc-web/components/dist/components/button/arc-button.styles.js
var arc_button_styles_default = [
  component_styles_default,
  css`
    :host {
      display: inline-block;
      position: relative;
      width: auto;
      cursor: pointer;
      --min-width: 0;
      --btn-color: rgb(var(--arc-input-color));
      --btn-background: initial;
    }

    :host([type='tab']) {
      height: 100%;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-width: var(--min-width);
      height: var(--button-size);
      min-height: 100%;
      border: none;
      border-radius: var(--button-size);
      font-weight: var(--arc-font-weight-semibold);
      font-family: var(--arc-font-button);
      font-size: inherit;
      letter-spacing: inherit;
      text-decoration: none;
      user-select: none;
      white-space: nowrap;
      vertical-align: middle;
      padding: 0 var(--button-spacing);
      cursor: inherit;
      color: var(--btn-color);
      background-color: var(--btn-background);
      gap: var(--arc-spacing-small);
      outline: none;
      -webkit-appearance: none;
    }

    /* Types */
    .button--outlined {
      border: var(--arc-border-style) var(--arc-border-width);
      background: none;
    }

    .button--tab {
      background: none;
      border-radius: 0;
    }
    .button--tab.button--active {
      border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style) currentColor;
    }

    /* Sizes */
    .button--small {
      --button-size: var(--arc-input-height-small);
      --button-spacing: var(--arc-spacing-small);
    }

    .button--medium {
      --button-size: var(--arc-input-height-medium);
      --button-spacing: var(--arc-spacing-medium);
    }

    .button--large {
      --button-size: var(--arc-input-height-large);
      --button-spacing: var(--arc-spacing-large);
    }

    /* Colors */
    .button--filled.button--default {
      --btn-background: rgb(var(--arc-color-default));
      --focus-color: rgba(var(--arc-input-color), 0.4);
    }

    .button--filled.button--primary {
      --btn-color: rgb(var(--arc-container-color));
      --btn-background: rgb(var(--arc-color-primary));
      --focus-color: rgba(var(--arc-color-primary), 0.4);
    }
    .button--outlined.button--primary {
      --btn-color: rgb(var(--arc-color-primary));
    }

    .button--filled.button--secondary {
      --btn-color: rgb(var(--arc-container-color));
      --btn-background: rgb(var(--arc-color-secondary));
      --focus-color: rgba(var(--arc-color-secondary), 0.4);
    }
    .button--outlined.button--secondary {
      --btn-color: rgb(var(--arc-color-secondary));
    }

    .button--filled.button--error {
      --btn-background: rgb(var(--arc-color-error));
      --focus-color: rgba(var(--arc-color-error), 0.4);
    }
    .button--outlined.button--error {
      --btn-color: rgb(var(--arc-color-error));
    }

    .button--filled.button--warning {
      --btn-background: rgb(var(--arc-color-warning));
      --focus-color: rgba(var(--arc-color-warning), 0.4);
    }
    .button--outlined.button--warning {
      --btn-color: rgb(var(--arc-color-warning));
    }

    .button--filled.button--info {
      --btn-background: rgb(var(--arc-color-info));
      --focus-color: rgba(var(--arc-color-info), 0.4);
    }
    .button--outlined.button--info {
      --btn-color: rgb(var(--arc-color-info));
    }

    .button--filled.button--success {
      --btn-background: rgb(var(--arc-color-success));
      --focus-color: rgba(var(--arc-color-success), 0.4);
    }
    .button--outlined.button--success {
      --btn-color: rgb(var(--arc-color-success));
    }

    /* Default - Hover, Focus & Mouse down */
    .button--filled:hover:not(.button--disabled):not(.button--loading),
    .button--filled:focus-visible:not(.button--disabled):not(.button--loading) {
      background-image: linear-gradient(var(--arc-hover-dark) 0 0);
    }
    .button--filled:active:not(.button--disabled):not(.button--loading) {
      background-image: linear-gradient(var(--arc-hover-darker) 0 0);
    }

    /* Tab & Outlined - Hover, Focus & Mouse down */
    .button--tab:hover:not(.button--disabled),
    .button--tab:focus-visible:not(.button--disabled),
    .button--outlined:hover:not(.button--disabled),
    .button--outlined:focus-visible:not(.button--disabled) {
      background-color: currentColor;
      background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
    }
    .button--tab:active:not(.button--disabled):not(.button--loading),
    .button--outlined:active:not(.button--disabled):not(.button--loading) {
      background-image: linear-gradient(var(--arc-hover-light) 0 0);
    }

    /* Focus outline (same for all button states) */
    .button:focus-visible:not(.button--disabled) {
      box-shadow: var(--arc-box-shadow-focus) var(--focus-color);
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

    .button--loading #prefix,
    .button--loading #label,
    .button--loading #suffix {
      visibility: hidden;
    }

    #loader {
      position: absolute;
      --stroke-color: var(--btn-color);
    }

    /* Prevent click events from firing when a user clicks on a slot */
    slot {
      pointer-events: none;
    }
  `
];

// node_modules/@arc-web/components/dist/components/button/ArcButton.js
var ArcButton = class extends LitElement {
  constructor() {
    super(...arguments);
    this.formController = new FormController(this);
    this.color = THEME_COLORS.primary;
    this.size = INPUT_SIZES.medium;
    this.type = BUTTON_TYPES.filled;
    this.active = false;
    this.disabled = false;
    this.loading = false;
    this.submit = false;
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
      return;
    }
    if (this.submit) {
      this.formController.submit();
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
      "button--small": this.size === INPUT_SIZES.small,
      "button--medium": this.size === INPUT_SIZES.medium,
      "button--large": this.size === INPUT_SIZES.large,
      "button--default": this.color === THEME_COLORS.default,
      "button--primary": this.color === THEME_COLORS.primary,
      "button--secondary": this.color === THEME_COLORS.secondary,
      "button--error": this.color === THEME_COLORS.error,
      "button--warning": this.color === THEME_COLORS.warning,
      "button--info": this.color === THEME_COLORS.info,
      "button--success": this.color === THEME_COLORS.success,
      "button--filled": this.type === BUTTON_TYPES.filled,
      "button--outlined": this.type === BUTTON_TYPES.outlined,
      "button--tab": this.type === BUTTON_TYPES.tab,
      "button--active": this.active,
      "button--disabled": this.disabled,
      "button--loading": this.loading
    })}
        ?disabled=${ifDefined(isLink ? void 0 : this.disabled)}
        type=${this.submit ? "submit" : "button"}
        name=${ifDefined(isLink ? void 0 : this.name)}
        value=${ifDefined(isLink ? void 0 : this.value)}
        href=${ifDefined(this.href || void 0)}
        target=${ifDefined(this.target || void 0)}
        download=${ifDefined(this.download || void 0)}
        rel=${ifDefined(this.target ? "noreferrer noopener" : void 0)}
        role="button"
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @click=${this._handleClick}
      >
        <slot id="prefix" name="prefix"></slot>
        <slot id="label"></slot>
        <slot id="suffix" name="suffix"></slot>
        ${when(this.loading, () => html2`<arc-spinner id="loader"></arc-spinner>`)}
      </${tag}>
    `;
  }
};
ArcButton.tag = "arc-button";
ArcButton.styles = arc_button_styles_default;
__decorate([
  query("#main")
], ArcButton.prototype, "button", void 0);
__decorate([
  property({ type: String, reflect: true })
], ArcButton.prototype, "color", void 0);
__decorate([
  property({ type: String, reflect: true })
], ArcButton.prototype, "size", void 0);
__decorate([
  property({ type: String, reflect: true })
], ArcButton.prototype, "type", void 0);
__decorate([
  property({ type: String })
], ArcButton.prototype, "name", void 0);
__decorate([
  property({ type: String })
], ArcButton.prototype, "value", void 0);
__decorate([
  property({ type: String })
], ArcButton.prototype, "href", void 0);
__decorate([
  property({ type: String })
], ArcButton.prototype, "target", void 0);
__decorate([
  property({ type: String })
], ArcButton.prototype, "download", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcButton.prototype, "active", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcButton.prototype, "disabled", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcButton.prototype, "loading", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcButton.prototype, "submit", void 0);

// node_modules/@arc-web/components/dist/components/button/arc-button.js
customElements.define("arc-button", ArcButton);

// node_modules/@arc-web/components/dist/components/accessibility/ArcAccessibility.js
var ArcAccessibility = class extends LitElement {
  constructor() {
    super(...arguments);
    this._rootCssVariables = {};
    this._defaultPreferences = {
      theme: this.getTheme(),
      fontSize: FONT_SIZES.medium,
      lineHeight: FONT_SPACING.normal,
      letterSpacing: FONT_SPACING.normal,
      highLegibilityFonts: false,
      highlightLinks: false,
      plainText: false
    };
    this._availableRootValues = {
      fontSize: Object.values(FONT_SIZES),
      lineHeight: Object.values(FONT_SPACING),
      letterSpacing: Object.values(FONT_SPACING)
    };
    this._userPreferences = this._defaultPreferences;
    this.open = false;
  }
  async handlePreferenceChange() {
    localStorage.setItem(ArcAccessibility.tag, stringifyObject(this._userPreferences));
    Object.keys(this._userPreferences).forEach((key) => this.updateRootValue(key, this._userPreferences[key]));
    emit(this, ARC_EVENTS.accessibilityChange, {
      detail: {
        preferences: this._userPreferences
      }
    });
  }
  connectedCallback() {
    super.connectedCallback();
    Object.keys(this._defaultPreferences).forEach((key) => this.storeRootValues(key));
    const cachedPreferences = localStorage.getItem(ArcAccessibility.tag);
    if (cachedPreferences) {
      this._userPreferences = parseObject(cachedPreferences);
    }
  }
  show() {
    if (!this.open) {
      this.open = true;
    }
  }
  hide() {
    if (this.open) {
      this.open = false;
    }
  }
  getTheme() {
    const arcContainer = document.querySelector("arc-container");
    return arcContainer ? arcContainer.theme : CONTAINER_THEMES.auto;
  }
  storeRootValues(key) {
    if (!(key in this._availableRootValues))
      return;
    this._availableRootValues[key].forEach((value) => {
      const variable = `--arc-${stringToHyphenSeparated(key)}-${value}`;
      this._rootCssVariables[variable] = getRootValue(variable);
    });
  }
  restoreRootValues(key) {
    if (!(key in this._availableRootValues))
      return;
    this._availableRootValues[key].forEach((value) => {
      const variable = `--arc-${stringToHyphenSeparated(key)}-${value}`;
      setRootValue(variable, this._rootCssVariables[variable]);
    });
  }
  updateRootValue(key, newValue) {
    if (!(key in this._defaultPreferences))
      throw new Error("The provided key is not a valid UserPreference");
    if (!(key in this._availableRootValues))
      return;
    this.restoreRootValues(key);
    const options = this._availableRootValues[key];
    const rootIndex = options.findIndex((option) => option === this._defaultPreferences[key]);
    const newFontIndex = options.findIndex((option) => option === newValue);
    if (newFontIndex < 0)
      throw new Error("The provided value does not exist as an available root value");
    const incr = newFontIndex - rootIndex;
    options.forEach((value, index) => {
      let newIndex = index + incr;
      if (newIndex >= options.length)
        newIndex = options.length - 1;
      const oldVar = `--arc-${stringToHyphenSeparated(key)}-${value}`;
      const newVar = `--arc-${stringToHyphenSeparated(key)}-${options[newIndex]}`;
      setRootValue(oldVar, getRootValue(newVar));
    });
  }
  restoreRootDefaults() {
    Object.keys(this._defaultPreferences).forEach((key) => this.restoreRootValues(key));
    this._userPreferences = this._defaultPreferences;
  }
  handleOptionChange(event) {
    const radio = event.target;
    const key = radio.name;
    const value = radio.value;
    this._userPreferences = { ...this._userPreferences, [key]: value };
  }
  radioTemplate(key, values) {
    return html`
      <arc-radio-group id=${key}>
        <span slot="label">${stringToSpaceSeparated(key)}</span>
        ${map(values, (value) => html`
            <arc-radio
              name=${key}
              value=${value}
              ?checked=${value === this._userPreferences[key]}
              @arc-change=${this.handleOptionChange}
              >${uppercaseFirstLetter(value)}
            </arc-radio>
          `)}
      </arc-radio-group>
    `;
  }
  render() {
    return html`
      <div id="main">
        <arc-drawer id="drawer" @arc-hide=${this.hide} ?open=${this.open}>
          <div class="label" slot="label">
            <arc-icon name="accessibility" size="large"></arc-icon>
            <span>Accessibility Controls</span>
          </div>
          <div id="wrapper">
            ${map(ACCESSIBILITY_OPTIONS, (item) => html`
                <div class="label">
                  <span>${stringToSpaceSeparated(item.name)}</span>
                  <arc-icon name=${item.icon}></arc-icon>
                </div>
                <div class="options">
                  ${map(Object.entries(item.options), (option) => {
      const [userPreference, value] = option;
      return html`${when(Array.isArray(value), () => this.radioTemplate(userPreference, value))}`;
    })}
                </div>
              `)}
          </div>
          <arc-button type="tab" slot="footer" @click=${this.restoreRootDefaults}>Restore defaults</arc-button>
        </arc-drawer>
      </div>
    `;
  }
};
ArcAccessibility.tag = "arc-accessibility";
ArcAccessibility.styles = arc_accessibility_styles_default;
__decorate([
  state()
], ArcAccessibility.prototype, "_userPreferences", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcAccessibility.prototype, "open", void 0);
__decorate([
  watch("_userPreferences")
], ArcAccessibility.prototype, "handlePreferenceChange", null);

// node_modules/@arc-web/components/dist/components/accessibility/arc-accessibility.js
customElements.define("arc-accessibility", ArcAccessibility);

// node_modules/@arc-web/components/dist/components/bottombar/arc-bottombar.styles.js
var arc_bottombar_styles_default = [
  component_styles_default,
  css`
    :host {
      height: 4.5rem;
      background-color: rgb(var(--arc-background-color));
    }

    #main {
      height: inherit;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  `
];

// node_modules/@arc-web/components/dist/components/bottombar/ArcBottombar.js
var ArcBottombar = class extends LitElement {
  constructor() {
    super(...arguments);
    this.tabs = 5;
  }
  _handleTabChange(e) {
    const isTab = (element) => element.tagName === "ARC-ICON-BUTTON";
    const nodes = e.target.assignedElements({ flatten: true });
    const navTabs = nodes.filter(isTab);
    this.tabCount = navTabs.length;
    if (this.tabCount > this.tabs) {
      this.log(`Please limit your tab count to a maximum of ${this.tabs} tabs`);
    }
  }
  log(msg) {
    console.log(msg);
  }
  render() {
    return html`
      <nav id="main" aria-label="mobile navigation">
        <slot @slotchange=${this._handleTabChange}></slot>
      </nav>
    `;
  }
};
ArcBottombar.tag = "arc-bottombar";
ArcBottombar.styles = arc_bottombar_styles_default;
__decorate([
  state()
], ArcBottombar.prototype, "tabs", void 0);
__decorate([
  state()
], ArcBottombar.prototype, "tabCount", void 0);

// node_modules/@arc-web/components/dist/components/bottombar/arc-bottombar.js
customElements.define("arc-bottombar", ArcBottombar);

// node_modules/@arc-web/components/dist/components/container/ArcContainer.js
var ArcContainer = class extends LitElement {
  constructor() {
    super(...arguments);
    this.theme = CONTAINER_THEMES.auto;
    this.fullscreen = false;
  }
  handleThemeChange() {
    if (CONTAINER_THEMES[this.theme] === CONTAINER_THEMES.auto || !(this.theme in CONTAINER_THEMES)) {
      this.theme = this.getTheme();
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.theme in CONTAINER_THEMES) {
      this._appPreferredTheme = this.theme;
    }
  }
  getTheme(date) {
    return isNight(date) || prefersDark() ? CONTAINER_THEMES.dark : CONTAINER_THEMES.light;
  }
  handleAccessibilityChange(event) {
    const { preferences } = event.detail;
    const { theme } = preferences;
    if (!!theme && theme in CONTAINER_THEMES) {
      this.theme = theme;
      return;
    }
    this.theme = this._appPreferredTheme;
  }
  showAccessibility() {
    this.accessibility.open = true;
  }
  render() {
    return html`
      <div id="main">
        <slot id="nav" name="nav" @arc-show-accessibility=${this.showAccessibility}></slot>
        <div
          id="container"
          class=${classMap({
      container: true,
      "container--fullscreen": this.fullscreen
    })}
        >
          <slot name="side"></slot>
          <div id="content">
            <slot></slot>
          </div>
        </div>
        <arc-accessibility
          id="accessibility"
          @arc-accessibility-change=${this.handleAccessibilityChange}
        ></arc-accessibility>
        <slot name="bottom">
          <arc-bottombar>
            <arc-icon-button name=${ICON_TYPES.home} href="/" label="Return home">Home</arc-icon-button>
            <arc-icon-button
              name=${ICON_TYPES.accessibility}
              label="Accessibility panel"
              @click=${this.showAccessibility}
              >Accessibility
            </arc-icon-button>
          </arc-bottombar>
        </slot>
      </div>
    `;
  }
};
ArcContainer.tag = "arc-container";
ArcContainer.styles = arc_container_styles_default;
__decorate([
  query("#main")
], ArcContainer.prototype, "container", void 0);
__decorate([
  query("#accessibility")
], ArcContainer.prototype, "accessibility", void 0);
__decorate([
  property({ type: String, reflect: true })
], ArcContainer.prototype, "theme", void 0);
__decorate([
  property({ type: Boolean })
], ArcContainer.prototype, "fullscreen", void 0);
__decorate([
  watch("theme")
], ArcContainer.prototype, "handleThemeChange", null);

// node_modules/@arc-web/components/dist/components/container/arc-container.js
customElements.define("arc-container", ArcContainer);

export {
  getPropertyValue,
  getRootValue,
  setRootValue,
  noFOUC,
  ArcRadioGroup,
  isPrimitive,
  isSingleExpression,
  live,
  FormController,
  control_styles_default,
  ArcRadio,
  ArcButton,
  ArcAccessibility,
  ArcBottombar,
  ArcContainer
};
/*! Bundled license information:

lit-html/development/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/development/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=chunk-HEMKG2WR.js.map
