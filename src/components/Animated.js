import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import unique from 'uniqid'
import { getTransition } from '../helpers'

export const Animated = ({ animation, duration, delay, easing, children }) => {
  const containerId = unique()
  const transition = getTransition(animation)
  return (
    <React.Fragment>
      <Transition in timeout={0} appear>
        {(state) => (
          <div id={`${containerId}`} className={transition.classNames[state]}>
            {children}
          </div>
        )}
      </Transition>
      <style jsx>
        {`
          ${transition.getStyle({
            easing,
            selector: `#${containerId}`,
            delay,
            duration
          })}
        `}
      </style>
    </React.Fragment>
  )
}

Animated.propTypes = {
  animation: PropTypes.string,
  duration: PropTypes.number,
  delay: PropTypes.number,
  easing: PropTypes.string,
  children: PropTypes.any
}

Animated.defaultProps = {
  animation: '',
  duration: 0,
  delay: 500,
  easing: 'ease-in-out',
  children: null
}

export default Animated
