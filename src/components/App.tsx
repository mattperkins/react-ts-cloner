import * as React from 'react'

import PageInterface from '../PageInterface'

class App extends React.Component<PageInterface, {}> {
  render() {
    return (<div>
      <p>Hello, {this.props.name}</p>
    </div>
    )
  }
}

export default App