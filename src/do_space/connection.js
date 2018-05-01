import React from 'react'
import { createConnectWindow } from './login'

class Connection extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    createConnectWindow().then(() => {

    })
  }

  createConnectWindow = () => {
    createConnectWindow().then(() => {

    })
  }

  render() {
    return (
      <container style={{ paddingLeft: '4px', paddingRight: '4px' }}>
        <container style={{ paddingLeft: '8px', paddingRight: '8px' }}>
          <button title="+" style={{ marginTop: '10px' }} onClick={this.createConnectWindow} />
        </container>
      </container>
    )
  }
}

export default Connection
