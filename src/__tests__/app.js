const React = require('react')
const gui = require('gui')
const { render } = require('../index')

const size = {
  width: 200,
  height: 50,
}

const ITEMS = []

for (let i = 0; i < 1000; i += 1) {
  ITEMS.push(i)
}

// Create your react component:
function App() {
  return (
    <container
      style={{
        flex: 1,
      }}
    >
      <label text="hello" />
      <scroll
        ref={s => {
          console.log(s.getContentSize())
        }}
        contentSize={size}
        style={{
          flex: 1,
        }}
        overlayScrollbar
        hpolicy="never"
        vpolicy="automatic"
      >
        <container
          ref={c => {
            console.log('c.getBounds()', c.getBounds())
          }}
          style={{
            flex: 1,
            height: 1000,
          }}
        >
          {ITEMS.map(i => (
            <label
              text={String(i)}
            />
          ))}
        </container>
      </scroll>
      <label text="hello" />
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
