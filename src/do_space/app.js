import React from 'react'
import { Provider } from 'react-redux'
import Connection from './connection'
import Panel from './panel'
import WorkSpace from './work_space'
import { createAppStore } from './state'
import { primaryColor, secondColor } from './style'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.store = createAppStore()
  }

  render() {
    return (
      <Provider store={this.store}>
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
      </Provider>
    )
  }
}

export default App
