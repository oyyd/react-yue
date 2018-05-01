import React from 'react'
import PropTypes from 'prop-types'
import gui from 'gui'
import { render } from '../index'

const FIELD_WIDTH = 240
const FIELD_HEIGHT = 32

const { func } = PropTypes

const FIELD_WRAPPER_STYLE = {
  flexDirection: 'row',
  paddingLeft: 20,
  paddingRight: 20,
  marginBottom: 12,
}

const FIELD_LABEL_STYLE = {
  flexDirection: 'row',
  width: 140,
  justifyContent: 'flex-end',
  paddingRight: 20,
}

class Login extends React.Component {
  constructor(props) {
    super(props)

    // TODO: remove
    this.state = {
      endpoint: 'sgp1.digitaloceanspaces.com',
      accessKeyId: 'KRDHWVX5WP3QLXX4NUZS',
      secretAccessKey: 'SRgXGTheJVvBu0+5OsW2U9A+ozGAQR004f1IBPWgtSQ',
    }
  }

  renderField(name) {
    const value = this.state[name]

    return (
      <container style={FIELD_WRAPPER_STYLE}>
        <container style={FIELD_LABEL_STYLE}>
          <label text={name} />
        </container>
        <entry
          style={{ width: FIELD_WIDTH }}
          defaultText={value}
          onTextChange={ele => {
            this.setState({
              [name]: ele.getText(),
            })
          }}
        />
      </container>
    )
  }

  render() {
    return (
      <container style={{ flexDirection: 'column', flex: 1, paddingTop: 12 }}>
        {this.renderField('endpoint')}
        {this.renderField('accessKeyId')}
        {this.renderField('secretAccessKey')}
        <container style={FIELD_WRAPPER_STYLE}>
          <container style={FIELD_LABEL_STYLE} />
          <button
            title="connect"
            style={{ width: 40, marginTop: 14 }}
            onClick={() => {
              this.props.onConnect(this.state)
            }}
          />
        </container>
      </container>
    )
  }
}

Login.propTypes = {
  onConnect: func.isRequired,
}

export function createConnectWindow(next) {
  try {
    const connectionWindow = gui.Window.create({})
    connectionWindow.setTitle('connect')
    connectionWindow.setContentSize({ width: 440, height: 200 })
    connectionWindow.setAlwaysOnTop(true)

    const container = gui.Container.create()
    container.setStyle({ flexDirection: 'row' })
    connectionWindow.setContentView(container)

    render(
      <Login
        onConnect={(...args) => {
          next(...args)
          connectionWindow.close()
        }}
      />,
      container
    )

    connectionWindow.center()
    connectionWindow.activate()
  } catch (err) {
    console.error(err)
  }
}

export default Login
