export const TRANSITIONS = {
  TRANSLATE_X_RIGHT_IN: 'TRANSLATE_X_IN',
  TRANSLATE_X_LEFT_IN: 'TRANSLATE_X_LEFT_IN',
  TRANSLATE_Y_BOTTOM_IN: 'TRANSLATE_Y_BOTTOM_IN',
  OPACITY_IN: 'OPACITY_IN'
}

export const transitionTranslateYBottomInClassNames = {
  entering: 'embedded-entering-transition-translate-y-bottom-in',
  entered: 'embedded-entered-transition-translate-y-bottom-in',
  exiting: 'embedded-exiting-transition-translate-y-bottom-in',
  exited: 'embedded-exited-transition-translate-y-bottom-in'
}

export const getTransitionTranslateYBottomInCSS = ({
  delay = 0,
  selector = '',
  duration = 500,
  easing = 'cubic-bezier(0.68, -0.6, 0.32, 1.6)'
}) => `
${selector}.${transitionTranslateYBottomInClassNames.entering}{
  transform: translateY(100%) !important;
}
${selector}.${transitionTranslateYBottomInClassNames.entered}{
  transform: translateY(0%) !important;
  transition: transform ${duration}ms ${easing} ${delay}ms !important;
}
`

export const transitionTranslateXRightInClassNames = {
  entering: 'embedded-entering-transition-translate',
  entered: 'embedded-entered-transition-translate',
  exiting: 'embedded-exiting-transition-translate',
  exited: 'embedded-exited-transition-translate'
}

export const getTransitionTranslateXRightInCSS = ({
  delay = 0,
  selector = '',
  duration = 500,
  easing = 'cubic-bezier(0.68, -0.6, 0.32, 1.6)'
}) => `
${selector}.${transitionTranslateXRightInClassNames.entering}{
  transform: translateX(100%) !important;
}
${selector}.${transitionTranslateXRightInClassNames.entered}{
  transform: translateX(0%) !important;
  transition: transform ${duration}ms ${easing} ${delay}ms !important;
}
`

export const transitionTranslateXLeftInClassNames = {
  entering: 'embedded-entering-transition-translate-alternate',
  entered: 'embedded-entered-transition-translate-alternate',
  exiting: 'embedded-exiting-transition-translate-alternate',
  exited: 'embedded-exited-transition-translate-alternate'
}

export const getTransitionTranslateXLeftInCSS = ({
  delay = 0,
  selector = '',
  duration = 500,
  easing = 'cubic-bezier(0.68, -0.6, 0.32, 1.6)'
}) => `
${selector}.${transitionTranslateXLeftInClassNames.entering}{
    transform: translateX(-100%) !important;
  }
${selector}.${transitionTranslateXLeftInClassNames.entered}{
    transform: translateX(0%) !important;
    transition: transform ${duration}ms ${easing} ${delay}ms !important;
  }
`

export const transitionOpacityClassNames = {
  entering: 'embedded-entering-transition-opacity',
  entered: 'embedded-entered-transition-opacity',
  exiting: 'embedded-exiting-transition-opacity',
  exited: 'embedded-exited-transition-opacity'
}

export const getTransitionOpacityCSS = ({
  delay = 0,
  selector = '',
  duration = 500,
  easing = 'ease-in-out'
}) => `
${selector}.${transitionOpacityClassNames.entering}{
    opacity: 0 !important;
  }
${selector}.${transitionOpacityClassNames.entered}{
    opacity: 1 !important;
    transition: opacity ${duration}ms ${easing} ${delay}ms !important;
  }
`

export const getTransition = (transition = '') => {
  if (transition === TRANSITIONS.TRANSLATE_X_RIGHT_IN) {
    return {
      classNames: transitionTranslateXRightInClassNames,
      getStyle: getTransitionTranslateXRightInCSS
    }
  }
  if (transition === TRANSITIONS.TRANSLATE_X_LEFT_IN) {
    return {
      classNames: transitionTranslateXLeftInClassNames,
      getStyle: getTransitionTranslateXLeftInCSS
    }
  }
  if (transition === TRANSITIONS.OPACITY_IN) {
    return {
      classNames: transitionOpacityClassNames,
      getStyle: getTransitionOpacityCSS
    }
  }
  if (transition === TRANSITIONS.TRANSLATE_Y_BOTTOM_IN) {
    return {
      classNames: transitionTranslateYBottomInClassNames,
      getStyle: getTransitionTranslateYBottomInCSS
    }
  }
  return {
    classNames: {
      entering: '',
      entered: '',
      exiting: '',
      exited: ''
    },
    getStyle: () => null
  }
}
