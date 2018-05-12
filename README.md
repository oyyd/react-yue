# react-yue

[![npm-version](https://img.shields.io/npm/v/react-yue.svg?style=flat-square)](https://www.npmjs.com/package/react-yue)

This is a lib to help you render the [View](http://libyue.com/docs/latest/js/api/view.html) of [Yue](https://github.com/yue/yue/) in the react way.

## Get Started

```
npm i react-yue react gui
```

Render your view into a container:

```js
const React = require('react')
const gui = require('gui')
const { render } = require('react-yue')

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

## Components

#### View (base class)

_props:_

- `Boolean` visible
- `Boolean` enabled
- `Boolean` focusable
- `Boolean` mouseDownCanMoveWindow
- `Font` font
- `Color` color
- `Color` backgroundColor

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

## Run Tests

```
npm run test
```
