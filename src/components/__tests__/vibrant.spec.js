const React = require('react')
const gui = require('gui')
const { createTestSuite } = require('./utils')

describe('vibrant', () => {
  it('should render the component correctly', done => {
    createTestSuite(render => {
      const material = 'dark'
      const blendingMode = 'behind-window'

      const ele = (
        <vibrant
          material={material}
          blendingMode={blendingMode}
        />
      )

      render(ele, container => {
        const vibrant = container.childAt(0)
        expect(vibrant instanceof gui.Vibrant).toBeTruthy()
        expect(vibrant.getMaterial()).toBe(material)
        expect(vibrant.getBlendingMode()).toBe(blendingMode)
        done()
      })
    })
  })
})
