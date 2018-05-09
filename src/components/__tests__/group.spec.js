const React = require('react')
const gui = require('gui')
const { createTestSuite } = require('./utils')

describe('group', () => {
  it('should render the component correctly', done => {
    createTestSuite(render => {
      const title = 'hello'

      const ele = (
        <group
          title={title}
        >
          <container />
        </group>
      )

      render(ele, container => {
        const group = container.childAt(0)
        expect(group.getContentView() instanceof gui.Container).toBeTruthy()
        expect(group instanceof gui.Group).toBeTruthy()
        expect(group.getTitle()).toBe(title)
        done()
      })
    })
  })
})
