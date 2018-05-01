process.env.NODE_ENV = 'production'

const React = require('react')
const gui = require('gui')
const { render } = require('../index')
const App = require('./app').default

function main() {
  const win = gui.Window.create({})

  win.setTitle('DO Space')
  win.setContentSize({ width: 850, height: 550 })
  win.onClose = () => {
    gui.MessageLoop.quit()
  }

  const contentView = gui.Container.create()
  contentView.setStyle({ flexDirection: 'row' })
  win.setContentView(contentView)

  render(<App />, contentView)

  win.center()
  win.setVisible(true)
  win.deactivate()
}

if (!process.versions.yode) {
  main()
  gui.MessageLoop.run()
  process.exit(0)
}
