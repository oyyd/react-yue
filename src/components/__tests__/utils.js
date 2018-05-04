const gui = require('gui')
const { render } = require('../../index')

function createTestSuite(ready) {
  // NOTE: Calling yue too early will make addon abort so we wait here.
  setTimeout(() => {
    const next = (element, callback) => {
      const win = gui.Window.create({})
      const container = gui.Container.create()
      win.setContentView(container)

      render(element, container, () => {
        callback(container)
      })
    }

    ready(next)
  }, 3000)
  // for (let i = 0; i < container.childCount(); i += 1) {
  //   const child = container.childAt(i)
  //   console.log('child', child)
  // }
}

module.exports = {
  createTestSuite,
}

// if (module === require.main) {
//   createTestSuite()
// }
