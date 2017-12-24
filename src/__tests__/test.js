import gui from 'gui'

const win = gui.Window.create({})
win.setContentSize({ width: 400, height: 400 })
win.onClose = () => gui.lifetime.quit()

const contentView = gui.Container.create()
contentView.setStyle({ flexDirection: 'row' })
win.setContentView(contentView)

const btnA = gui.Button.create('a')
contentView.addChildView(btnA)
btnA.onClick = () => {
  console.log('a clicked')
}

const btnB = gui.Button.create('b')
contentView.addChildView(btnB)
btnB.onClick = () => {
  console.log('b clicked')
}

win.center()
win.activate()

if (!process.versions.yode) {
  gui.lifetime.run()
  process.exit(0)
}
