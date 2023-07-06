import {
  HasSlotController
} from "./chunk-VBEXRFW5.js";
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
  shimKeyframesHeightAuto,
  startAnimations,
  stopAnimations,
  waitForEvent,
  watch
} from "./chunk-AF26NG3C.js";

// node_modules/@arc-web/components/dist/components/card/arc-card.styles.js
var arc_card_styles_default = [
  component_styles_default,
  css`
    :host {
      display: inline-block;
      width: auto;
    }

    .card {
      height: 100%;
      display: grid;
      overflow: hidden;
      background-color: rgb(var(--arc-container-color));
      box-shadow: var(--arc-box-shadow);
    }

    /* Hide elements when they are not slotted or when the card is collapsed */
    .card:not(.card--has-header) #header,
    .card:not(.card--has-image) #image,
    .card:not(.card--has-body) #body,
    .card:not(.card--has-footer) #footer {
      display: none;
    }

    #header,
    #body,
    #footer {
      padding: var(--arc-spacing-normal);
    }

    #image {
      overflow: hidden;
    }

    #header ::slotted(*),
    #footer ::slotted(*) {
      display: grid;
      align-items: center;
      grid-auto-flow: column;
      gap: var(--arc-spacing-small);
    }

    #header ::slotted(*) {
      justify-content: space-between;
    }

    #footer ::slotted(*) {
      justify-content: end;
    }
  `
];

// node_modules/@arc-web/components/dist/components/card/ArcCard.js
var ArcCard = class extends LitElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "header", "image", "[default]", "footer");
    this.collapsed = false;
  }
  async handleCollapsedChange() {
    if (!this.collapsed) {
      emit(this, ARC_EVENTS.show);
      await stopAnimations(this);
      this.content.hidden = false;
      const cardAnimation = getAnimation(this, "card.expand");
      await startAnimations(this.content, shimKeyframesHeightAuto(cardAnimation.keyframes, this.content.scrollHeight), cardAnimation.options);
      this.content.style.height = "auto";
      emit(this, ARC_EVENTS.afterShow);
    } else {
      if (!this.hasSlotController.test("header")) {
        return;
      }
      emit(this, ARC_EVENTS.hide);
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "card.collapse");
      await startAnimations(this.content, shimKeyframesHeightAuto(keyframes, this.content.scrollHeight), options);
      this.content.hidden = true;
      this.content.style.height = "auto";
      emit(this, ARC_EVENTS.afterHide);
    }
  }
  firstUpdated() {
    if (!this.hasSlotController.test("header")) {
      return;
    }
    this.content.hidden = this.collapsed;
  }
  async expand() {
    if (!this.collapsed) {
      return void 0;
    }
    this.collapsed = false;
    return waitForEvent(this, ARC_EVENTS.afterShow);
  }
  async collapse() {
    if (this.collapsed || !this.hasSlotController.test("header")) {
      return void 0;
    }
    this.collapsed = true;
    return waitForEvent(this, ARC_EVENTS.afterHide);
  }
  render() {
    return html`
      <article
        id="main"
        class=${classMap({
      card: true,
      "card--has-header": this.hasSlotController.test("header"),
      "card--has-image": this.hasSlotController.test("image"),
      "card--has-body": this.hasSlotController.test("[default]"),
      "card--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <header id="header">
          <slot name="header"></slot>
        </header>
        <div id="content">
          <div id="image">
            <slot name="image"></slot>
          </div>
          <div id="body">
            <slot></slot>
          </div>
          <footer id="footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </article>
    `;
  }
};
ArcCard.tag = "arc-card";
ArcCard.styles = arc_card_styles_default;
__decorate([
  query("#content")
], ArcCard.prototype, "content", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcCard.prototype, "collapsed", void 0);
__decorate([
  watch("collapsed", { waitUntilFirstUpdate: true })
], ArcCard.prototype, "handleCollapsedChange", null);
setDefaultAnimation("card.expand", {
  keyframes: [
    { height: "0", opacity: "0" },
    { height: "auto", opacity: "1" }
  ],
  options: ARC_ANIMATION_OPTIONS.slow
});
setDefaultAnimation("card.collapse", {
  keyframes: [
    { height: "auto", opacity: "1" },
    { height: "0", opacity: "0" }
  ],
  options: ARC_ANIMATION_OPTIONS.slow
});

// node_modules/@arc-web/components/dist/components/card/arc-card.js
customElements.define("arc-card", ArcCard);

export {
  ArcCard
};
//# sourceMappingURL=chunk-EK6G52C7.js.map
