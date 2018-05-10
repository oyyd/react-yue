const React = require('react')
const gui = require('gui')
const { render } = require('../index')

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
