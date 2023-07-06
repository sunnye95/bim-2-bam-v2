import {
  getTextContent
} from "./chunk-VBEXRFW5.js";
import {
  map
} from "./chunk-JKKIFBOK.js";
import {
  ICON_TYPES,
  getTabbableBoundary,
  html as html2,
  ifDefined,
  literal,
  when
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
  mobileBreakpoint,
  property,
  query,
  setDefaultAnimation,
  startAnimations,
  state,
  stopAnimations,
  waitForEvent,
  watch
} from "./chunk-AF26NG3C.js";

// node_modules/@arc-web/components/dist/components/navbar/arc-navbar.styles.js
var arc_navbar_styles_default = [
  component_styles_default,
  css`
    :host {
      height: 3.5rem;
      background-color: rgb(var(--arc-container-color));
      z-index: 1;
      --logo-height: var(--arc-brand-height);
    }

    /* Layout */
    #main,
    #left,
    #logoWrapper,
    #right,
    #tabs {
      display: grid;
      grid-auto-flow: column;
    }

    #main {
      height: inherit;
      width: 100%;
      padding: 0 var(--arc-spacing-medium) 0 var(--arc-spacing-medium);
      box-shadow: var(--arc-box-shadow);
      user-select: none;
    }

    /* Left side */
    #left {
      justify-content: flex-start;
    }

    #logoWrapper {
      align-items: center;
      gap: var(--arc-spacing-small);
      text-decoration: none;
      color: inherit;
    }

    #tool-logo {
      height: var(--logo-height);
      width: auto;
    }

    /* Show the tool-name when there is no tool-logo */
    #tool-name {
      display: flex;
      overflow: hidden;
    }

    #tool-name::slotted(*) {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    /* Hide the tool-name when there is a tool-logo */
    #tool-logo + #tool-name {
      display: none;
    }

    /* Right side */
    #right {
      justify-content: flex-end;
      gap: var(--arc-spacing-medium);
    }

    #tabSlot {
      display: none;
    }

    ::slotted(arc-button) {
      border-left: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-right: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
    }

    ::slotted(arc-icon-button),
    #dropdown,
    #accessibility {
      margin: 0 var(--arc-spacing-x-small) 0 var(--arc-spacing-x-small);
    }

    #accessibility {
      display: none;
    }

    #company-logo {
      color: rgb(var(--arc-color-primary));
      display: flex;
      align-items: center;
    }

    #company-logo > svg {
      height: var(--arc-brand-height);
      width: auto;
    }

    /* Medium devices and up */
    @media (min-width: ${mobileBreakpoint}rem) {
      #tabSlot,
      #tool-logo + #tool-name,
      #accessibility {
        display: flex;
      }

      ::slotted(arc-sso) {
        border-left: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
        border-right: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      }
    }
  `
];

// node_modules/@arc-web/components/dist/components/navbar/arup-logo.js
var arupLogo = html`
  <svg width="512" height="159" viewBox="0 0 512 159" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <title id="title" lang="en">Arup logo</title>
    <path
      d="M331.03 146.348C302.146 146.348 289.628 133.297 284.742 125.522C279.153 116.521 278.43 104.335 278.43 94.7163V31.8024C278.43 31.1942 278.439 30.5858 278.449 29.9586C278.554 23.4 278.658 17.2028 268.47 16.8796H265.228V11.6328H317.459L317.495 16.9176L316.565 16.9081C312.668 16.8701 309.701 17.9061 307.592 19.9877C305.093 22.4686 303.819 26.4417 303.819 31.8024V101.008C303.819 124.438 314.007 136.32 334.102 136.32C345.469 136.32 355.031 132.964 361.011 126.872C370.676 116.882 371.448 103.936 371.448 88.0436V31.6124C371.448 23.267 370.62 16.8891 360.163 16.8891H357.445V11.6328H395.97V16.8891H394.343C386.627 16.8891 382.16 19.2939 382.16 31.6124V89.0037C382.167 127.594 365.439 146.348 331.03 146.348Z"
    />
    <path
      d="M460.357 143.553H408.078V138.325L408.962 138.297C421.216 137.945 421.842 134.029 421.842 122.775V31.7264C421.842 20.0162 421.386 17.2408 409.476 16.8891L408.592 16.8606V11.6328H461.926C493.434 11.6328 509.916 30.1011 509.916 48.3411C509.916 69.2143 491.305 85.5629 467.552 85.5629L455.785 85.3918V76.1529C455.785 76.1529 460.243 76.1054 461.867 76.1054C476.486 76.1054 484.005 65.0511 484.005 48.5978C484.005 31.4602 473.018 19.9402 456.669 19.9402L446.157 19.9117V124.895C446.157 135.92 448.152 137.916 459.483 138.287L460.367 138.316V143.553H460.357Z"
    />
    <path
      d="M268.611 143.553H230.943L190.642 82.2647V74.7842L191.459 74.6987C205.593 73.2064 218.862 65.0701 218.862 46.6968C218.862 31.2797 207.77 20.5201 191.887 20.5201H181.013V124.895C181.013 136.263 186.232 137.394 193.608 137.736L194.472 137.774V143.544H143.364V138.24L144.229 138.192C155.312 137.574 156.88 134.799 156.88 124.885V30.2816C156.471 18.5715 155.749 17.0697 144.267 16.8891L143.373 16.8796V11.6328H198.427C219.423 11.6328 243.945 20.8621 243.945 46.887C243.945 62.3991 234.546 73.5296 215.991 79.9834L236.903 110.856C239.183 114.354 247.567 124.524 251.322 128.668C258.479 136.367 263.63 137.432 267.043 138.135L268.611 138.468V143.553Z"
    />
    <path
      d="M134.287 143.553H84.4139V138.401L85.2978 138.373C91.3906 138.164 95.164 136.833 95.164 130.883C95.164 128.221 93.0825 123.013 91.9608 120.209L83.8532 100.818H38.8088L30.5299 119.676C27.783 125.902 26.9846 128.155 26.9846 131.073C26.9846 135.36 26.9846 138.192 37.0123 138.373L37.9059 138.392V143.563H1.93879V138.401L2.83226 138.382C9.96102 138.221 13.668 134.599 18.7057 122.88L67.495 11.6328H72.5042L72.7417 12.1841L121.674 127.404C125.2 135.987 126.036 138.021 133.422 138.325L134.296 138.363V143.553H134.287ZM42.5062 91.8932H80.2031L61.7729 47.1817L42.5062 91.8932Z"
    />
  </svg>
`;

// node_modules/@floating-ui/core/dist/floating-ui.core.esm.development.js
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  {
    if (platform2 == null) {
      console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" "));
    }
    if (middleware.filter((_ref) => {
      let {
        name
      } = _ref;
      return name === "autoPlacement" || name === "flip";
    }).length > 1) {
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`", "middleware detected. This will lead to an infinite loop. Ensure only", "one of either has been passed to the `middleware` array."].join(" "));
    }
  }
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  const skippedMiddlewareNames = /* @__PURE__ */ new Set();
  let _debug_loop_count_ = 0;
  for (let i = 0; i < middleware.length; i++) {
    {
      _debug_loop_count_++;
      if (_debug_loop_count_ > 100) {
        throw new Error(["Floating UI: The middleware lifecycle appears to be", "running in an infinite loop. This is usually caused by a `reset`", "continually being returned without a break condition."].join(" "));
      }
    }
    const {
      name,
      fn
    } = middleware[i];
    if (skippedMiddlewareNames.has(name)) {
      continue;
    }
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset) {
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        if (reset.skip !== false) {
          skippedMiddlewareNames.add(name);
        }
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
async function detectOverflow(middlewareArguments, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary
  }));
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === "floating" ? {
      ...rects.floating,
      x,
      y
    } : rects.reference,
    offsetParent: await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating)),
    strategy
  }) : rects[elementContext]);
  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(middlewareArguments) {
    const {
      element,
      padding = 0
    } = options != null ? options : {};
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2
    } = middlewareArguments;
    if (element == null) {
      {
        console.warn("Floating UI: No `element` was passed to the `arrow` middleware.");
      }
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const minProp = axis === "y" ? "top" : "left";
    const maxProp = axis === "y" ? "bottom" : "right";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    const clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    const centerToReference = endDiff / 2 - startDiff / 2;
    const min3 = paddingObject[minProp];
    const max3 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = within(min3, center, max3);
    return {
      data: {
        [axis]: offset2,
        centerOffset: center - offset2
      }
    };
  }
});
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (matched) => hash$1[matched]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (matched) => hash[matched]);
}
var sides = ["top", "right", "bottom", "left"];
var allPlacements = sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(middlewareArguments) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = side === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip2;
        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              skip: false,
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = "bottom";
        switch (fallbackStrategy) {
          case "bestFit": {
            var _overflowsData$slice$;
            const placement2 = (_overflowsData$slice$ = overflowsData.slice().sort((a, b) => a.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0) - b.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0))[0]) == null ? void 0 : _overflowsData$slice$.placement;
            if (placement2) {
              resetPlacement = placement2;
            }
            break;
          }
          case "initialPlacement":
            resetPlacement = initialPlacement;
            break;
        }
        return {
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};
function convertValueToCoords(placement, rects, value, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  let crossAxisMulti = 1;
  if (alignment === "end") {
    crossAxisMulti = -1;
  }
  if (rtl && isVertical) {
    crossAxisMulti *= -1;
  }
  const rawValue = typeof value === "function" ? value({
    ...rects,
    placement
  }) : value;
  const {
    mainAxis,
    crossAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0
  } : {
    mainAxis: 0,
    crossAxis: 0,
    ...rawValue
  };
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: "offset",
    options: value,
    async fn(middlewareArguments) {
      const {
        x,
        y,
        placement,
        rects,
        platform: platform2,
        elements
      } = middlewareArguments;
      const diffCoords = convertValueToCoords(placement, rects, value, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(middlewareArguments) {
      const {
        x,
        y,
        placement
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...middlewareArguments,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(middlewareArguments) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = middlewareArguments;
      const {
        apply,
        ...detectOverflowOptions
      } = options;
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const xMin = max(overflow.left, 0);
      const xMax = max(overflow.right, 0);
      const yMin = max(overflow.top, 0);
      const yMax = max(overflow.bottom, 0);
      const dimensions = {
        height: rects.floating.height - (["left", "right"].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom)) : overflow[heightSide]),
        width: rects.floating.width - (["top", "bottom"].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)) : overflow[widthSide])
      };
      apply == null ? void 0 : apply({
        ...dimensions,
        ...rects
      });
      return {
        reset: {
          rects: true
        }
      };
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.esm.development.js
function isWindow(value) {
  return (value == null ? void 0 : value.toString()) === "[object Window]";
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeName(node) {
  return isWindow(node) ? "" : node ? (node.nodeName || "").toLowerCase() : "";
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
  const css2 = getComputedStyle$1(element);
  return css2.transform !== "none" || css2.perspective !== "none" || css2.contain === "paint" || ["transform", "perspective"].includes(css2.willChange) || isFirefox && css2.willChange === "filter" || isFirefox && (css2.filter ? css2.filter !== "none" : false);
}
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  return {
    width: clientRect.width / scaleX,
    height: clientRect.height / scaleY,
    top: clientRect.top / scaleY,
    right: clientRect.right / scaleX,
    bottom: clientRect.bottom / scaleY,
    left: clientRect.left / scaleX,
    x: clientRect.left / scaleX,
    y: clientRect.top / scaleY
  };
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
  if (isWindow(element)) {
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, isOffsetParentAnElement && isScaled(offsetParent));
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // @ts-ignore
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || // DOM Element detected
    (isShadowRoot(node) ? node.host : null) || // ShadowRoot detected
    getDocumentElement(node)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && !["html", "body"].includes(getNodeName(currentNode))) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  const window2 = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getDimensions(element) {
  if (isHTMLElement(element)) {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  const rect = getBoundingClientRect(element);
  return {
    width: rect.width,
    height: rect.height
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    ...rect,
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  };
}
function getViewportRect(element) {
  const win = getWindow(element);
  const html3 = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html3.clientWidth;
  let height = html3.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) < 0.01) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  const html3 = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = max2(html3.scrollWidth, html3.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = max2(html3.scrollHeight, html3.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body || html3).direction === "rtl") {
    x += max2(html3.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getNearestOverflowAncestor(node) {
  if (["html", "body", "#document"].includes(getNodeName(node))) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isOverflowElement(node)) {
    return node;
  }
  return getNearestOverflowAncestor(getParentNode(node));
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  const target = isBody ? [win].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
  const updatedList = list.concat(target);
  return isBody ? updatedList : (
    // @ts-ignore: isBody tells us target will be an HTMLElement here
    updatedList.concat(getOverflowAncestors(getParentNode(target)))
  );
}
function contains(parent, child) {
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    do {
      if (next && parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getInnerBoundingClientRect(element) {
  const clientRect = getBoundingClientRect(element);
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}
function getClientRectFromClippingAncestor(element, clippingParent) {
  if (clippingParent === "viewport") {
    return rectToClientRect(getViewportRect(element));
  }
  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent);
  }
  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingAncestors(element) {
  const clippingAncestors = getOverflowAncestors(getParentNode(element));
  const canEscapeClipping = ["absolute", "fixed"].includes(getComputedStyle$1(element).position);
  const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingAncestors.filter((clippingAncestors2) => isElement(clippingAncestors2) && contains(clippingAncestors2, clipperElement) && getNodeName(clippingAncestors2) !== "body");
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary
  } = _ref;
  const mainClippingAncestors = boundary === "clippingAncestors" ? getClippingAncestors(element) : [].concat(boundary);
  const clippingAncestors = [...mainClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
var platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getElementRects: (_ref) => {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: {
        ...getDimensions(floating),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (element) => Array.from(element.getClientRects()),
  isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
};
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll: _ancestorScroll = true,
    ancestorResize: _ancestorResize = true,
    elementResize: _elementResize = true,
    animationFrame = false
  } = options;
  let cleanedUp = false;
  const ancestorScroll = _ancestorScroll && !animationFrame;
  const ancestorResize = _ancestorResize && !animationFrame;
  const elementResize = _elementResize && !animationFrame;
  const ancestors = ancestorScroll || ancestorResize ? [...isElement(reference) ? getOverflowAncestors(reference) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  let observer = null;
  if (elementResize) {
    observer = new ResizeObserver(update);
    isElement(reference) && observer.observe(reference);
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    if (cleanedUp) {
      return;
    }
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  return () => {
    var _observer;
    cleanedUp = true;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => computePosition(reference, floating, {
  platform,
  ...options
});

// node_modules/@arc-web/components/dist/internal/constants/placementConstants.js
var FLOATING_PLACEMENTS = {
  top: "top",
  "top-start": "top-start",
  "top-end": "top-end",
  right: "right",
  "right-start": "right-start",
  "right-end": "right-end",
  bottom: "bottom",
  "bottom-start": "bottom-start",
  "bottom-end": "bottom-end",
  left: "left",
  "left-start": "left-start",
  "left-end": "left-end"
};

// node_modules/@arc-web/components/dist/components/dropdown/arc-dropdown.styles.js
var arc_dropdown_styles_default = [
  component_styles_default,
  css`
    :host {
      display: inline-block;
    }

    #main,
    #trigger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    #positioner {
      position: absolute;
      z-index: var(--arc-z-index-dropdown);
    }

    #panel {
      max-height: var(--arc-panel-height);
      min-width: var(--arc-panel-width);
      background-color: rgb(var(--arc-container-color));
      box-shadow: var(--arc-box-shadow);
      overflow: auto;
      overscroll-behavior: none;
      pointer-events: none;
    }

    :host([open]) #panel {
      pointer-events: all;
    }

    #positioner[data-placement^='top'] #panel {
      transform-origin: bottom;
    }

    #positioner[data-placement^='bottom'] #panel {
      transform-origin: top;
    }

    #positioner[data-placement^='left'] #panel {
      transform-origin: right;
    }

    #positioner[data-placement^='right'] #panel {
      transform-origin: left;
    }
  `
];

// node_modules/@arc-web/components/dist/components/dropdown/ArcDropdown.js
var ArcDropdown = class extends LitElement {
  constructor() {
    super(...arguments);
    this.placement = FLOATING_PLACEMENTS["bottom-start"];
    this.distance = 0;
    this.skidding = 0;
    this.open = false;
    this.disabled = false;
    this.hoist = false;
  }
  async handleOpenChange() {
    if (this.disabled) {
      return;
    }
    this._updateAccessibleTrigger();
    if (this.open) {
      emit(this, ARC_EVENTS.show);
      this.addOpenListeners();
      await stopAnimations(this);
      this.startPositioner();
      this.panel.hidden = false;
      const { keyframes, options } = getAnimation(this, "dropdown.show");
      await startAnimations(this.panel, keyframes, options);
      emit(this, ARC_EVENTS.afterShow);
    } else {
      emit(this, ARC_EVENTS.hide);
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "dropdown.hide");
      await startAnimations(this.panel, keyframes, options);
      this.panel.hidden = true;
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
    this.handlePanelSelect = this.handlePanelSelect.bind(this);
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
    if (!this.containingElement) {
      this.containingElement = this;
    }
  }
  async firstUpdated() {
    this.panel.hidden = !this.open;
    if (this.open) {
      await this.updateComplete;
      this.addOpenListeners();
      this.startPositioner();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeOpenListeners();
    this.hide();
    this.stopPositioner();
  }
  startPositioner() {
    this.stopPositioner();
    this.updatePositioner();
    this._positionerCleanup = autoUpdate(this.trigger, this.positioner, this.updatePositioner.bind(this));
  }
  updatePositioner() {
    if (!this.open || !this.trigger || !this.positioner) {
      return;
    }
    computePosition2(this.trigger, this.positioner, {
      placement: this.placement,
      middleware: [
        offset({ mainAxis: this.distance, crossAxis: this.skidding }),
        flip(),
        shift(),
        size({
          apply: ({ width, height }) => {
            Object.assign(this.panel.style, {
              maxWidth: `${width}px`,
              maxHeight: `${height}px`
            });
          },
          padding: 8
        })
      ],
      strategy: this.hoist ? "fixed" : "absolute"
    }).then(({ x, y, placement }) => {
      this.positioner.setAttribute("data-placement", placement);
      Object.assign(this.positioner.style, {
        position: this.hoist ? "fixed" : "absolute",
        left: `${x}px`,
        top: `${y}px`
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
  _updateAccessibleTrigger() {
    if (this.trigger) {
      const assignedElements = this.triggerSlot.assignedElements({ flatten: true });
      const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
      if (accessibleTrigger) {
        accessibleTrigger.setAttribute("aria-haspopup", "true");
        accessibleTrigger.setAttribute("aria-expanded", this.open ? "true" : "false");
      }
    }
  }
  addOpenListeners() {
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
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
  getMenu() {
    const slot = this.panel.querySelector("slot");
    return slot.assignedElements({ flatten: true }).filter((el) => el.tagName === "ARC-MENU")[0];
  }
  focusOnTrigger() {
    const trigger = this.triggerSlot.assignedElements({ flatten: true })[0];
    if (trigger && typeof trigger.focus === "function") {
      trigger.focus();
    }
  }
  handleDocumentKeyDown(event) {
    var _a, _b, _c;
    if (event.key === "Escape") {
      this.hide();
      this.focusOnTrigger();
      return;
    }
    if (event.key === "Tab") {
      const activeElement = ((_a = this.containingElement) === null || _a === void 0 ? void 0 : _a.getRootNode()) instanceof ShadowRoot ? (_c = (_b = document.activeElement) === null || _b === void 0 ? void 0 : _b.shadowRoot) === null || _c === void 0 ? void 0 : _c.activeElement : document.activeElement;
      if (this.open && (activeElement === null || activeElement === void 0 ? void 0 : activeElement.tagName) === "ARC-MENU-ITEM") {
        event.preventDefault();
        this.hide();
        this.focusOnTrigger();
      }
    }
  }
  handleDocumentMouseDown(event) {
    const path = event.composedPath();
    if (this.containingElement && !path.includes(this.containingElement)) {
      this.hide();
    }
  }
  handleTriggerKeyDown(event) {
    if (event.key === "Escape") {
      this.focusOnTrigger();
      this.hide();
      return;
    }
    if ([" ", "Enter"].includes(event.key)) {
      event.preventDefault();
      this.handleTriggerClick();
      return;
    }
    const menu = this.getMenu();
    const menuItems = menu ? [...menu.querySelectorAll("arc-menu-item")] : [];
    const firstMenuItem = menuItems[0];
    const lastMenuItem = menuItems[menuItems.length - 1];
    if (["ArrowDown", "ArrowUp"].includes(event.key)) {
      event.preventDefault();
      if (!this.open) {
        this.show();
      }
      if (event.key === "ArrowDown" && firstMenuItem) {
        menu.setCurrentItem(firstMenuItem);
        firstMenuItem.focus();
        return;
      }
      if (event.key === "ArrowUp" && lastMenuItem) {
        menu.setCurrentItem(lastMenuItem);
        lastMenuItem.focus();
        return;
      }
    }
    const ignoredKeys = ["Tab", "Shift", "Meta", "Ctrl", "Alt"];
    if (this.open && menu && !ignoredKeys.includes(event.key)) {
      menu.typeToSelect(event.key);
    }
  }
  handleTriggerKeyUp(event) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }
  handleTriggerClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }
  handlePanelSelect(event) {
    const target = event.target;
    if (target.tagName === "ARC-MENU") {
      this.hide();
      this.focusOnTrigger();
    }
  }
  render() {
    return html`
      <div
        id="main"
        class=${classMap({
      dropdown: true,
      "dropdown--open": this.open
    })}
      >
        <span
          id="trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot id="triggerSlot" name="trigger" @slotchange=${this._updateAccessibleTrigger}></slot>
        </span>

        <div id="positioner">
          <div
            id="panel"
            role="menu"
            aria-hidden=${this.open ? "false" : "true"}
            aria-labelledby="main"
            @arc-select=${this.handlePanelSelect}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
};
ArcDropdown.tag = "arc-dropdown";
ArcDropdown.styles = arc_dropdown_styles_default;
__decorate([
  query("#trigger")
], ArcDropdown.prototype, "trigger", void 0);
__decorate([
  query("#triggerSlot")
], ArcDropdown.prototype, "triggerSlot", void 0);
__decorate([
  query("#positioner")
], ArcDropdown.prototype, "positioner", void 0);
__decorate([
  query("#panel")
], ArcDropdown.prototype, "panel", void 0);
__decorate([
  property({ type: String })
], ArcDropdown.prototype, "placement", void 0);
__decorate([
  property({ attribute: false })
], ArcDropdown.prototype, "containingElement", void 0);
__decorate([
  property({ type: Number })
], ArcDropdown.prototype, "distance", void 0);
__decorate([
  property({ type: Number })
], ArcDropdown.prototype, "skidding", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcDropdown.prototype, "open", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcDropdown.prototype, "disabled", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcDropdown.prototype, "hoist", void 0);
__decorate([
  watch("open", { waitUntilFirstUpdate: true })
], ArcDropdown.prototype, "handleOpenChange", null);
__decorate([
  watch("distance"),
  watch("hoist"),
  watch("placement"),
  watch("skidding")
], ArcDropdown.prototype, "handlePopoverOptionsChange", null);
__decorate([
  watch("disabled")
], ArcDropdown.prototype, "handleDisabledChange", null);
setDefaultAnimation("dropdown.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.9)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: ARC_ANIMATION_OPTIONS.fast
});
setDefaultAnimation("dropdown.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.9)" }
  ],
  options: ARC_ANIMATION_OPTIONS.fast
});

// node_modules/@arc-web/components/dist/components/dropdown/arc-dropdown.js
customElements.define("arc-dropdown", ArcDropdown);

// node_modules/@arc-web/components/dist/components/menu/arc-menu.styles.js
var arc_menu_styles_default = [
  component_styles_default,
  css`
    :host {
      display: block;
    }
  `
];

// node_modules/@arc-web/components/dist/components/menu/ArcMenu.js
var ArcMenu = class extends LitElement {
  constructor() {
    super(...arguments);
    this.typeToSelectString = "";
  }
  getAllItems(options = { includeDisabled: true }) {
    const { includeDisabled } = options;
    return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
      if (el.getAttribute("role") !== "menuitem") {
        return false;
      }
      return !(!includeDisabled && el.disabled);
    });
  }
  getCurrentItem() {
    return this.getAllItems({ includeDisabled: false }).find((i) => i.getAttribute("tabindex") === "0");
  }
  setCurrentItem(item) {
    const items = this.getAllItems({ includeDisabled: false });
    const activeItem = item.disabled ? items[0] : item;
    items.forEach((i) => i.setAttribute("tabindex", i === activeItem ? "0" : "-1"));
  }
  typeToSelect(key) {
    const items = this.getAllItems({ includeDisabled: false });
    clearTimeout(this.typeToSelectTimeout);
    this.typeToSelectTimeout = window.setTimeout(() => {
      this.typeToSelectString = "";
    }, 750);
    this.typeToSelectString += key.toLowerCase();
    for (const item of items) {
      const slot = item.shadowRoot.querySelector("slot:not([name])");
      const label = getTextContent(slot).toLowerCase().trim();
      if (label.substring(0, this.typeToSelectString.length) === this.typeToSelectString) {
        this.setCurrentItem(item);
        item.focus();
        break;
      }
    }
  }
  _handleClick(event) {
    const target = event.target;
    const item = target.closest("arc-menu-item");
    if (item && !item.disabled) {
      emit(this, ARC_EVENTS.select, { detail: { item } });
    }
  }
  handleKeyDown(event) {
    if (event.key === "Enter") {
      const item = this.getCurrentItem();
      event.preventDefault();
      if (item) {
        item.click();
      }
    }
    if (event.key === " ") {
      event.preventDefault();
    }
    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      const items = this.getAllItems({ includeDisabled: false });
      const activeItem = this.getCurrentItem();
      let index = activeItem ? items.indexOf(activeItem) : 0;
      if (items.length) {
        event.preventDefault();
        if (event.key === "ArrowDown") {
          index++;
        } else if (event.key === "ArrowUp") {
          index--;
        } else if (event.key === "Home") {
          index = 0;
        } else if (event.key === "End") {
          index = items.length - 1;
        }
        if (index < 0)
          index = 0;
        if (index > items.length - 1)
          index = items.length - 1;
        this.setCurrentItem(items[index]);
        items[index].focus();
      }
    }
    this.typeToSelect(event.key);
  }
  _handleSlotChange() {
    const items = this.getAllItems({ includeDisabled: false });
    if (items.length) {
      this.setCurrentItem(items[0]);
    }
  }
  render() {
    return html`
      <div id="main" role="menu" @click=${this._handleClick} @keydown=${this.handleKeyDown}>
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
    `;
  }
};
ArcMenu.tag = "arc-menu";
ArcMenu.styles = arc_menu_styles_default;
__decorate([
  query("#menu")
], ArcMenu.prototype, "menu", void 0);
__decorate([
  query("slot")
], ArcMenu.prototype, "defaultSlot", void 0);

// node_modules/@arc-web/components/dist/components/menu/arc-menu.js
customElements.define("arc-menu", ArcMenu);

// node_modules/@arc-web/components/dist/components/menu-item/arc-menu-item.styles.js
var arc_menu_item_styles_default = [
  component_styles_default,
  css`
    :host {
      display: block;
    }

    .menu-item {
      position: relative;
      display: flex;
      align-items: stretch;
      text-align: left;
      padding: var(--arc-spacing-small) var(--arc-spacing-medium);
      text-decoration: none;
      user-select: none;
      white-space: nowrap;
      cursor: pointer;
      color: inherit;
    }

    #prefix,
    #label,
    #suffix {
      display: flex;
      flex: 0 0 auto;
      align-items: center;
    }

    #prefix ::slotted(*) {
      margin-right: var(--arc-spacing-x-small);
    }

    #label {
      flex: 1 1 auto;
      max-width: 30ch;
      overflow: hidden;
    }

    #label * {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis ' ...';
    }

    #suffix ::slotted(*) {
      margin-left: var(--arc-spacing-x-small);
    }

    /* Hover & Focus */
    :host(:focus) {
      outline: none;
    }

    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible:not([aria-disabled='true'])) .menu-item {
      outline: none;
      background-color: currentColor;
      background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
    }

    /* Disabled */
    .menu-item--disabled {
      opacity: 0.5;
      outline: none;
      cursor: not-allowed;
    }
  `
];

// node_modules/@arc-web/components/dist/components/menu-item/ArcMenuItem.js
var ArcMenuItem = class extends LitElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
  }
  click() {
    this.menuitem.click();
  }
  firstUpdated() {
    this.setAttribute("role", "menuitem");
  }
  _handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", String(this.disabled));
  }
  render() {
    const isLink = !!this.href;
    const tag = isLink ? literal`a` : literal`div`;
    return html2`
      <${tag}
        id="main"
        class=${classMap({
      "menu-item": true,
      "menu-item--disabled": this.disabled
    })}
        value=${ifDefined(isLink ? void 0 : this.value)}
        href=${ifDefined(this.href || void 0)}
        target=${ifDefined(this.target || void 0)}
        download=${ifDefined(this.download || void 0)}
        rel=${ifDefined(this.target ? "noreferrer noopener" : void 0)}
        tabindex=${this.disabled ? "-1" : "0"}
        @click=${this._handleClick}
      >
        <span id="prefix">
          <slot name="prefix"></slot>
        </span>
        <span id="label">
          <slot></slot>
        </span>
        <span id="suffix">
          <slot name="suffix"></slot>
        </span>
      </${tag}>
    `;
  }
};
ArcMenuItem.tag = "arc-menu-item";
ArcMenuItem.styles = arc_menu_item_styles_default;
__decorate([
  query("#main")
], ArcMenuItem.prototype, "menuitem", void 0);
__decorate([
  property({ type: String })
], ArcMenuItem.prototype, "value", void 0);
__decorate([
  property({ type: String })
], ArcMenuItem.prototype, "href", void 0);
__decorate([
  property({ type: String })
], ArcMenuItem.prototype, "target", void 0);
__decorate([
  property({ type: String })
], ArcMenuItem.prototype, "download", void 0);
__decorate([
  property({ type: Boolean, reflect: true })
], ArcMenuItem.prototype, "disabled", void 0);
__decorate([
  watch("disabled")
], ArcMenuItem.prototype, "handleDisabledChange", null);

// node_modules/@arc-web/components/dist/components/menu-item/arc-menu-item.js
customElements.define("arc-menu-item", ArcMenuItem);

// node_modules/@arc-web/components/dist/components/navbar/ArcNavbar.js
var ArcNavbar = class extends LitElement {
  constructor() {
    super(...arguments);
    this.showDropdown = false;
    this.navTabs = [];
    this.tabs = 5;
    this.arup = true;
  }
  handleTabCountChange() {
    this._updateTemplate();
  }
  _handleTabChange(e) {
    const nodes = e.target.assignedElements({ flatten: true });
    this.navTabs = nodes.filter((el) => el.tagName === "ARC-BUTTON" || el.tagName === "ARC-ICON-BUTTON");
    this._updateTemplate();
  }
  _updateTemplate() {
    this.showDropdown = this.navTabs.length > this.tabs;
    [...this.navTabs].forEach((tab) => {
      tab.style.display = this.showDropdown ? "none" : "initial";
    });
  }
  emitAccessibility() {
    emit(this, ARC_EVENTS.showAccessibility);
  }
  render() {
    const menuInterior = html`
      ${map(this.navTabs, (tab) => html`
          <arc-menu-item ?disabled="${tab.disabled}" @click="${() => tab.click()}">
            ${when(tab.name, () => html`<arc-icon .name=${tab.name} slot="prefix"> }</arc-icon>`)}
            ${tab.textContent || tab.label || tab.name || "Invalid label"}
          </arc-menu-item>
        `)}
    `;
    const logoInterior = html`
      ${when(this.logo, () => html`<img id="tool-logo" src="${this.logo}" alt="tool-logo" />`)}
      <slot id="tool-name" name="name"></slot>
    `;
    return html`
      <header id="main">
        <div id="left">
          ${when(this.home, () => html`<a
              id="logoWrapper"
              href=${this.home}
              rel="noreferrer noopener"
              role="button"
              aria-label="tool logo"
            >
              ${logoInterior}
            </a>`, () => html`<div id="logoWrapper">${logoInterior}</div>`)}
        </div>
        <div id="right">
          <nav id="tabs" aria-label="primary navigation">
            <slot id="tabSlot" @slotchange=${this._handleTabChange}></slot>
            ${when(this.showDropdown, () => html`<arc-dropdown id="dropdown" hoist>
                <arc-icon-button slot="trigger" name=${ICON_TYPES.menu}></arc-icon-button>
                <arc-menu>${menuInterior}</arc-menu>
              </arc-dropdown>`)}
            <arc-icon-button
              id="accessibility"
              name=${ICON_TYPES.accessibility}
              label="Accessibility panel"
              @click=${this.emitAccessibility}
            ></arc-icon-button>
            <slot name="user"></slot>
          </nav>
          ${when(this.arup, () => html`<span id="company-logo">${arupLogo}</span>`)}
        </div>
      </header>
    `;
  }
};
ArcNavbar.tag = "arc-navbar";
ArcNavbar.styles = arc_navbar_styles_default;
__decorate([
  query("#tabSlot")
], ArcNavbar.prototype, "tabSlot", void 0);
__decorate([
  state()
], ArcNavbar.prototype, "showDropdown", void 0);
__decorate([
  state()
], ArcNavbar.prototype, "navTabs", void 0);
__decorate([
  property({ type: String })
], ArcNavbar.prototype, "home", void 0);
__decorate([
  property({ type: String })
], ArcNavbar.prototype, "logo", void 0);
__decorate([
  property({ type: Number, reflect: true })
], ArcNavbar.prototype, "tabs", void 0);
__decorate([
  property({
    type: Boolean,
    reflect: true,
    converter: (attrValue) => attrValue ? attrValue !== "false" : true
  })
], ArcNavbar.prototype, "arup", void 0);
__decorate([
  watch("tabs", { waitUntilFirstUpdate: true })
], ArcNavbar.prototype, "handleTabCountChange", null);

// node_modules/@arc-web/components/dist/components/navbar/arc-navbar.js
customElements.define("arc-navbar", ArcNavbar);

export {
  arrow,
  flip,
  offset,
  shift,
  autoUpdate,
  computePosition2 as computePosition,
  FLOATING_PLACEMENTS,
  ArcDropdown,
  ArcMenu,
  ArcMenuItem,
  ArcNavbar
};
//# sourceMappingURL=chunk-F6C2SCVF.js.map
