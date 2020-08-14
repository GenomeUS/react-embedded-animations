import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import unique from 'uniqid';

var styles = {"test":"_3ybTi"};

var TRANSITIONS = {
  TRANSLATE_X_RIGHT_IN: 'TRANSLATE_X_IN',
  TRANSLATE_X_LEFT_IN: 'TRANSLATE_X_LEFT_IN',
  TRANSLATE_Y_BOTTOM_IN: 'TRANSLATE_Y_BOTTOM_IN',
  OPACITY_IN: 'OPACITY_IN'
};
var transitionTranslateYBottomInClassNames = {
  entering: 'embedded-entering-transition-translate-y-bottom-in',
  entered: 'embedded-entered-transition-translate-y-bottom-in',
  exiting: 'embedded-exiting-transition-translate-y-bottom-in',
  exited: 'embedded-exited-transition-translate-y-bottom-in'
};
var getTransitionTranslateYBottomInCSS = function getTransitionTranslateYBottomInCSS(_ref) {
  var _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$selector = _ref.selector,
      selector = _ref$selector === void 0 ? '' : _ref$selector,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 500 : _ref$duration,
      _ref$easing = _ref.easing,
      easing = _ref$easing === void 0 ? 'cubic-bezier(0.68, -0.6, 0.32, 1.6)' : _ref$easing;
  return "\n" + selector + "." + transitionTranslateYBottomInClassNames.entering + "{\n  transform: translateY(100%) !important;\n}\n" + selector + "." + transitionTranslateYBottomInClassNames.entered + "{\n  transform: translateY(0%) !important;\n  transition: transform " + duration + "ms " + easing + " " + delay + "ms !important;\n}\n";
};
var transitionTranslateXRightInClassNames = {
  entering: 'embedded-entering-transition-translate',
  entered: 'embedded-entered-transition-translate',
  exiting: 'embedded-exiting-transition-translate',
  exited: 'embedded-exited-transition-translate'
};
var getTransitionTranslateXRightInCSS = function getTransitionTranslateXRightInCSS(_ref2) {
  var _ref2$delay = _ref2.delay,
      delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
      _ref2$selector = _ref2.selector,
      selector = _ref2$selector === void 0 ? '' : _ref2$selector,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 500 : _ref2$duration,
      _ref2$easing = _ref2.easing,
      easing = _ref2$easing === void 0 ? 'cubic-bezier(0.68, -0.6, 0.32, 1.6)' : _ref2$easing;
  return "\n" + selector + "." + transitionTranslateXRightInClassNames.entering + "{\n  transform: translateX(100%) !important;\n}\n" + selector + "." + transitionTranslateXRightInClassNames.entered + "{\n  transform: translateX(0%) !important;\n  transition: transform " + duration + "ms " + easing + " " + delay + "ms !important;\n}\n";
};
var transitionTranslateXLeftInClassNames = {
  entering: 'embedded-entering-transition-translate-alternate',
  entered: 'embedded-entered-transition-translate-alternate',
  exiting: 'embedded-exiting-transition-translate-alternate',
  exited: 'embedded-exited-transition-translate-alternate'
};
var getTransitionTranslateXLeftInCSS = function getTransitionTranslateXLeftInCSS(_ref3) {
  var _ref3$delay = _ref3.delay,
      delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
      _ref3$selector = _ref3.selector,
      selector = _ref3$selector === void 0 ? '' : _ref3$selector,
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === void 0 ? 500 : _ref3$duration,
      _ref3$easing = _ref3.easing,
      easing = _ref3$easing === void 0 ? 'cubic-bezier(0.68, -0.6, 0.32, 1.6)' : _ref3$easing;
  return "\n" + selector + "." + transitionTranslateXLeftInClassNames.entering + "{\n    transform: translateX(-100%) !important;\n  }\n" + selector + "." + transitionTranslateXLeftInClassNames.entered + "{\n    transform: translateX(0%) !important;\n    transition: transform " + duration + "ms " + easing + " " + delay + "ms !important;\n  }\n";
};
var transitionOpacityClassNames = {
  entering: 'embedded-entering-transition-opacity',
  entered: 'embedded-entered-transition-opacity',
  exiting: 'embedded-exiting-transition-opacity',
  exited: 'embedded-exited-transition-opacity'
};
var getTransitionOpacityCSS = function getTransitionOpacityCSS(_ref4) {
  var _ref4$delay = _ref4.delay,
      delay = _ref4$delay === void 0 ? 0 : _ref4$delay,
      _ref4$selector = _ref4.selector,
      selector = _ref4$selector === void 0 ? '' : _ref4$selector,
      _ref4$duration = _ref4.duration,
      duration = _ref4$duration === void 0 ? 500 : _ref4$duration,
      _ref4$easing = _ref4.easing,
      easing = _ref4$easing === void 0 ? 'ease-in-out' : _ref4$easing;
  return "\n" + selector + "." + transitionOpacityClassNames.entering + "{\n    opacity: 0 !important;\n  }\n" + selector + "." + transitionOpacityClassNames.entered + "{\n    opacity: 1 !important;\n    transition: opacity " + duration + "ms " + easing + " " + delay + "ms !important;\n  }\n";
};
var getTransition = function getTransition(transition) {
  if (transition === void 0) {
    transition = '';
  }

  if (transition === TRANSITIONS.TRANSLATE_X_RIGHT_IN) {
    return {
      classNames: transitionTranslateXRightInClassNames,
      getStyle: getTransitionTranslateXRightInCSS
    };
  }

  if (transition === TRANSITIONS.TRANSLATE_X_LEFT_IN) {
    return {
      classNames: transitionTranslateXLeftInClassNames,
      getStyle: getTransitionTranslateXLeftInCSS
    };
  }

  if (transition === TRANSITIONS.OPACITY_IN) {
    return {
      classNames: transitionOpacityClassNames,
      getStyle: getTransitionOpacityCSS
    };
  }

  if (transition === TRANSITIONS.TRANSLATE_Y_BOTTOM_IN) {
    return {
      classNames: transitionTranslateYBottomInClassNames,
      getStyle: getTransitionTranslateYBottomInCSS
    };
  }

  return {
    classNames: {
      entering: '',
      entered: '',
      exiting: '',
      exited: ''
    },
    getStyle: function getStyle() {
      return null;
    }
  };
};

var Animated = function Animated(_ref) {
  var animation = _ref.animation,
      duration = _ref.duration,
      delay = _ref.delay,
      easing = _ref.easing,
      children = _ref.children;
  var containerId = unique();
  var transition = getTransition(animation);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Transition, {
    "in": true,
    timeout: 0,
    appear: true
  }, function (state) {
    return /*#__PURE__*/React.createElement("div", {
      id: "" + containerId,
      className: transition.classNames[state]
    }, children);
  }), /*#__PURE__*/React.createElement("style", {
    jsx: true
  }, "\n          " + transition.getStyle({
    easing: easing,
    selector: "#" + containerId,
    delay: delay,
    duration: duration
  }) + "\n        "));
};
Animated.propTypes = {
  animation: PropTypes.string,
  duration: PropTypes.number,
  delay: PropTypes.number,
  easing: PropTypes.string,
  children: PropTypes.any
};
Animated.defaultProps = {
  animation: '',
  duration: 0,
  delay: 500,
  easing: 'ease-in-out',
  children: null
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { Animated, ExampleComponent, TRANSITIONS, getTransition };
//# sourceMappingURL=index.modern.js.map
