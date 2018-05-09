const React = require('react')
const gui = require('gui')
const { createTestSuite } = require('./utils')

describe('container', () => {
  it('should render the component correctly', done => {
    createTestSuite(render => {
      const title = 'hello'
      const checked = true
      const image = gui.Image.createFromBuffer(Buffer.alloc(0), 1)

      const ele = (
        <container
          title={title}
          checked={checked}
          defaultChecked={checked}
          image={image}
        />
      )

      render(ele, _container => {
        const container = _container.childAt(0)
        expect(container instanceof gui.Container).toBeTruthy()
        done()
      })
    })
  })
})
