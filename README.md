# react-yue

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

#### Button

**props:**

- `Button::Type` type
- `Boolean` defaultChecked
- `String` title
- `Image` image

**events:**

- onClick(self)
  - params
    - `Button` self

#### Container

**events:**

- onDraw(self, painter, painter)
  - params
    - `Container` self
    - `Painter` painter - The drawing context of the view.
    - `RectF` dirty - The area in the view to draw on.

#### Entry

**props:**

- `Entry::Type` type
- `String` text

**events:**

- onTextChange(self)
  - params
    - `Entry` self
- onActivate(self)
  - params
    - `Entry` self

#### Group

**props:**

- `String` title
- `View` children

#### Label

**props:**

- `String` text

#### ProgressBar

**props:**

- `Number` percent
- `Boolean` indeterminate

#### Scroll

**props:**

- `Scroll::Policy` hpolicy
- `Scroll::Policy` vpolicy
- `Boolean` overlayScrollbar
- `SizeF size` contentSize
- `View` children

#### TextEdit

**props:**

- `String` text
- `Scroll::Policy` hpolicy
- `Scroll::Policy` vpolicy
- `Boolean` overlayScrollbar

**events:**

- onTextChange(self)
  - params
    - `TextEdit` self

#### Vibrant

**props:**

- `Vibrant::Material` material
- `Vibrant::BlendingMode` mode

## Run Tests

```
npm run test
```
