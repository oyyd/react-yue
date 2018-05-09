const React = require('react')
const gui = require('gui')
const { createTestSuite } = require('./utils')

describe('entry', () => {
  it('should render the component correctly', done => {
    createTestSuite(render => {
      const text = 'hello'

      const ele = (
        <entry
          defaultText={text}
        />
      )

      render(ele, container => {
        const entry = container.childAt(0)
        expect(entry instanceof gui.Entry).toBeTruthy()
        expect(entry.getText()).toBe(text)
        done()
      })
    })
  })

  it('should create an entry of password type', done => {
    createTestSuite(render => {
      const ele = (
        <entry
          type="password"
        />
      )

      render(ele, container => {
        const entry = container.childAt(0)
        expect(entry instanceof gui.Entry).toBeTruthy()
        done()
      })
    })
  })
})
