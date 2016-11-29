import React, { Component } from 'react'
import NavigationBar from './NavigationBar'
import NotesList from './NotesList'
import DetailsList from './DetailsList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar/>
        <NotesList/>
        <DetailsList/>
        {this.props.children}
      </div>
    )
  }
}

export default App
