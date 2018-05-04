const React = require('react')
const gui = require('gui')
const { createTestSuite } = require('./utils')

describe('button', () => {
  it('should be okay', done => {
    createTestSuite(next => {
      const title = 'hello'
      const checked = false
      const ele = (
        <button
          ref={b => {
            // console.error('button', b)
          }}
          title={title}
          checked={checked}
        />
      )
      next(ele, container => {
        const button = container.childAt(0)
        expect(button instanceof gui.Button).toBeTruthy()
        expect(button.getTitle()).toBe(title)
        expect(button.isChecked()).toBe(checked)
        done()
      })
    })
  })
})
