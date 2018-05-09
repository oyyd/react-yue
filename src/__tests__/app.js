// NOTE: force "production" or the react-reconciler will
// swallow errors in environments where DOM doesn't exist
process.env.NODE_ENV = 'production'

const React = require('react')
const gui = require('gui')
const { render } = require('../index')

const ele = (
  <vibrant
    style={{
      flexDirection: 'row',
      flex: 1,
    }}
  >
    <container
      style={{
        flex: 1,
      }}
    >
      <label
        text="hello"
      />
    </container>
    <container
      style={{
        flex: 1,
      }}
    >
      <label
        text="hello2"
      />
    </container>
  </vibrant>
)

const win = gui.Window.create({})
win.setContentSize({ width: 400, height: 400 })
win.onClose = () => gui.lifetime.quit()

const contentView = gui.Container.create()
contentView.setStyle({ flexDirection: 'row' })
win.setContentView(contentView)

render(ele, contentView, () => {
  console.log('__A')
})

// setTimeout(() => {
//   const ele2 = (
//     <container
//       style={{
//         flexDirection: 'row',
//       }}
//     >
//       <button
//         title="Hello2"
//         style={{
//           color: '#DDDDDD',
//         }}
//       />
//       <entry />
//       {['e', 'b', 'c'].map(i => (
//         <button
//           key={i}
//           title={i}
//         />
//       ))}
//     </container>
//   )
//
//   render(ele2, contentView, () => {
//     console.log('__B')
//   })
// })

if (!process.versions.yode) {
  gui.MessageLoop.run()
  process.exit(0)
}
