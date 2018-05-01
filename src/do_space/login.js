import React from 'react'
import gui from 'gui'
import { render } from '../index'

const FIELD_WIDTH = 180
const FIELD_HEIGHT = 32

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      key: '1',
      secret: '2',
    }
  }

  renderField = name => {
    const value = this.state[name]

    return (
      <container
        style={{
          flexDirection: 'row',
          paddingLeft: 20,
          paddingRight: 20,
          marginBottom: 12,
        }}
      >
        <label
          text={name}
          style={{ width: 80 }}
        />
        <entry
          style={{ width: FIELD_WIDTH }}
          text={value}
        />
      </container>
    )
  }

  render() {
    return (
      <container style={{ flexDirection: 'column', flex: 1, paddingTop: 12 }}>
        {this.renderField('key')}
        {this.renderField('secret')}
        <container style={{ justifyContent: 'center', flexDirection: 'row' }}>
          <button title="connect" style={{ width: 40 }} />
        </container>
      </container>
    )
  }
}

export function createConnectWindow() {
  return new Promise(() => {
    try {
      const connectionWindow = gui.Window.create({})
      connectionWindow.setTitle('connect')
      connectionWindow.setContentSize({ width: 300, height: 200 })

      const container = gui.Container.create()
      container.setStyle({ flexDirection: 'row' })
      connectionWindow.setContentView(container)

      render(<Login />, container)

      connectionWindow.center()
      connectionWindow.activate()
    } catch (err) {
      console.error(err)
    }
  })
}

export default Login
