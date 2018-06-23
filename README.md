# react-yue

[![npm-version](https://img.shields.io/npm/v/react-yue.svg?style=flat-square)](https://www.npmjs.com/package/react-yue)
[![build-badge](https://ci.appveyor.com/api/projects/status/qse4t1mtex8ccsep?svg=true)](https://ci.appveyor.com/api/projects/status/qse4t1mtex8ccsep/branch/master?svg=true
)


This is a lib to help you render the [View](http://libyue.com/docs/latest/js/api/view.html) of [Yue](https://github.com/yue/yue/) in the react way.

Moreover, it's possible to utilize react-yue to a hot reload developing experience.

You may want to check [do-space-client](https://github.com/oyyd/do-space-client) and
[react-yue-app](https://github.com/viewstools/react-yue-app) as examples of using this lib.

|mac|
|---|
|<img src="https://raw.githubusercontent.com/oyyd/do-space-client/static/site/screenshot.png" width="400px"/>|

## Get Started

**Use node v8 or v9 as they are supported by the builds of gui.**

```
npm i react-yue react gui
```

Render your view into a container:

```js
import React from 'react'
import gui from 'gui'
import { render } from 'react-yue'

// Create your react component:
function App() {
  return (
    <container
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <label
        text="hello"
      />
    </container>
  )
}

// Create a window and a root container:
const win = gui.Window.create({})
win.setContentSize({ width: 400, height: 250 })

const contentView = gui.Container.create()
contentView.setStyle({ flexDirection: 'row' })
win.setContentView(contentView)
win.center()
win.activate()

// Create your react elements and render them:
render(<App />, contentView)

// Start your app
if (!process.versions.yode) {
  gui.MessageLoop.run()
  process.exit(0)
}
```

Check this **ES5** example if you want to run it without any code transforming:

```js
const React = require('react')
const gui = require('gui')
const { render } = require('react-yue')

// Create your react component:
function App() {
  return React.createElement('container', {
    style: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
    },
  }, React.createElement('label', {
    text: 'hello',
  }))
}

// Create a window and a root container:
const win = gui.Window.create({})
win.setContentSize({ width: 400, height: 250 })

const contentView = gui.Container.create()
contentView.setStyle({ flexDirection: 'row' })
win.setContentView(contentView)
win.center()
win.activate()

// Create your react elements and render them:
render(React.createElement(App), contentView)

// Start your app
if (!process.versions.yode) {
  gui.MessageLoop.run()
  process.exit(0)
}
```

## Style / Layout

Yue use [yoga layout](https://libyue.com/docs/latest/js/guides/layout_system.html) and you can use these properties in the `style` property. It's also possible to provide other styles via the `style` prop.

 - `color`: hex|rgb|rgba|hsl|hsla|name of a color
 - `backgroundColor`: hex|rgb|rgba|hsl|hsla| name of a color
 - `fontSize`: number representing a pixel value
 - `fontWeight`: supports 100-900 and all values in https://libyue.com/docs/latest/js/api/font_weight.html
 - `fontFamily`: name of a font to use
 - `fontStyle`: normal|italic
 - `textAlign`: left|center|right
 - `verticalAlign`: top|middle|bottom

```js
import React from 'react'

export default function MyComp() {
  return (
    <container
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black'
      }}
    >
      <container
        style={{
          justifyContent: 'center',
        }}
      >
        <label
          text="hello"
          style={{
            color: 'white',
            fontSize: 14
          }}
        />
      </container>
    </container>
  )
}

```

## Components

Below are what components and their props you can use with react-yue. For more details, please check the [official document](https://libyue.com/docs/latest/js/).

#### View (base class)

_props:_

- `Boolean` visible
- `Boolean` enabled
- `Boolean` focusable
- `Boolean` mouseDownCanMoveWindow

_events:_

- onMouseDown
  - params
    - `View` self
- onMouseUp
  - params
    - `View` self
    - `MouseEvent` event
- onMouseMove
  - params
    - `View` self
    - `MouseEvent` event
- onMouseEnter
  - params
    - `View` self
    - `MouseEvent` event
- onMouseLeave
  - params
    - `View` self
    - `MouseEvent` event
- onKeyDown
  - params
    - `View` self
    - `KeyEvent` event
- onKeyUp
  - params
    - `View` self
    - `KeyEvent` event
- onSizeChanged
  - params
    - `View` self
    - `KeyEvent` event
- onCaptureLost
  - params
    - `View` self
    - `KeyEvent` event

#### Button

_props:_

- `Button::Type` type
- `Boolean` defaultChecked
- `String` title
- `Image` image

_events:_

- onClick(self)
  - params
    - `Button` self

#### Container

_events:_

- onDraw(self, painter, painter)
  - params
    - `Container` self
    - `Painter` painter - The drawing context of the view.
    - `RectF` dirty - The area in the view to draw on.

#### Entry

_props:_

- `Entry::Type` type
- `String` text

_events:_

- onTextChange(self)
  - params
    - `Entry` self
- onActivate(self)
  - params
    - `Entry` self

#### Group

_props:_

- `String` title
- `View` children

#### Label

_props:_

- `String` text

#### ProgressBar

_props:_

- `Number` percent
- `Boolean` indeterminate

#### Scroll

_props:_

- `Scroll::Policy` hpolicy
- `Scroll::Policy` vpolicy
- `Boolean` overlayScrollbar
- `SizeF size` contentSize
- `View` children

#### TextEdit

_props:_

- `String` text
- `Scroll::Policy` hpolicy
- `Scroll::Policy` vpolicy
- `Boolean` overlayScrollbar

_events:_

- onTextChange(self)
  - params
    - `TextEdit` self

#### Vibrant

_props:_

- `Vibrant::Material` material
- `Vibrant::BlendingMode` mode

## Using with yackage

React will `require` its modules dynamically so that you can't correctly package your apps when using [yackage](https://github.com/yue/yackage) to package your Node.js project into an executable.

As yackage doesn't support customized code transforming, webpack is recommended to bundle your js correctly. You can take [the config of do-space-client](https://github.com/oyyd/do-space-client/blob/master/webpack.config.js) as a reference.

## Run Tests

```
npm run test
```
