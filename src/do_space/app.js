import React from 'react'
import Connection from './connection'
import Panel from './panel'
import WorkSpace from './work_space'
import { primaryColor, secondColor } from './style'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <container
        style={{
          flexDirection: 'row',
          flex: 1,
        }}
      >
        <container style={{ flex: 2, backgroundColor: secondColor }}>
          <Connection />
        </container>
        <container style={{ flex: 6, backgroundColor: primaryColor }}>
          <Panel />
        </container>
        <container style={{ flex: 16, backgroundColor: '#FFFFFF' }}>
          <WorkSpace />
        </container>
      </container>
    )
  }
}

export default App
