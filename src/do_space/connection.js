import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { createConnectWindow } from './login'
import { DoSpace } from './do/connect'

const { func, array } = PropTypes

function roundedCornerPath(painter, r, radius) {
  const degrees = Math.PI / 180
  painter.beginPath()
  painter.arc(
    { x: r.x + r.width - radius, y: r.y + radius },
    radius,
    -90 * degrees,
    0
  )
  painter.arc(
    { x: r.x + r.width - radius, y: r.y + r.height - radius },
    radius,
    0,
    90 * degrees
  )
  painter.arc(
    { x: r.x + radius, y: r.y + r.height - radius },
    radius,
    90 * degrees,
    180 * degrees
  )
  painter.arc(
    { x: r.x + radius, y: r.y + radius },
    radius,
    180 * degrees,
    270 * degrees
  )
  painter.closePath()
}

const CONNECTION_STYLE = {
  backgroundColor: '#FFF',
  width: 40,
  height: 40,
}

function connectDoSpace(dispatch, opt) {
  dispatch({
    type: 'ADD_CONNECTION',
    data: new DoSpace(opt),
  })
}

function s(state) {
  return {
    connections: state.connections,
  }
}

function d(dispatch) {
  return {
    connectDoSpace: connectDoSpace.bind(null, dispatch),
  }
}

class Connection extends React.Component {
  static propTypes = {
    connectDoSpace: func.isRequired,
    connections: array.isRequired,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.createConnectWindow()
  }

  createConnectWindow = () => {
    createConnectWindow(data => {
      this.props.connectDoSpace(data)
    })
  }

  render() {
    const { connections } = this.props
    return (
      <container style={{ paddingLeft: '4px', paddingRight: '4px' }}>
        {connections.map(i => (
          <container
            style={CONNECTION_STYLE}
            onDraw={(view, painter, dirty) => {
              // console.log('painter', view, painter, dirty)
              // roundedCornerPath(
              //   painter,
              //   { x: 14, y: 0, width: 40, height: 40 },
              //   5
              // )
            }}
          >
            <label text="Hello" />
          </container>
        ))}
        <container style={{ paddingLeft: '8px', paddingRight: '8px' }}>
          <button
            title="+"
            style={{ marginTop: '10px' }}
            onClick={this.createConnectWindow}
          />
        </container>
      </container>
    )
  }
}

export default connect(s, d)(Connection)
