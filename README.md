# react-embedded-animations

> React library to use animations on embedded experiences where the use of !important in the CSS is required.

## When to use it

On most case this library shouldn't be used, used only if:

- if you are required to use !important on your animations' CSS

[![NPM](https://img.shields.io/npm/v/react-embedded-animations.svg)](https://www.npmjs.com/package/react-embedded-animations) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-embedded-animations
```

## Usage

```jsx
import React, { Component } from 'react'

import { Animated, TRANSITIONS } from 'react-embedded-animations'
import 'react-embedded-animations/dist/index.css'

class Example extends Component {
  render() {
    return (
      <Animated
        animation={TRANSITIONS.OPACITY_IN}
        duration={500}
        delay={0}
        easing='ease-in-out'
      >
        <div className='embedded-landing-start-logo' />
      </Animated>
    )
  }
}
```

## License

MIT © [faridsaud](https://github.com/faridsaud)
