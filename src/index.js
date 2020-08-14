import React from 'react'
import styles from './styles.module.css'
export { Animated } from './components'
export { TRANSITIONS, getTransition } from './helpers'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
