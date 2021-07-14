// create your App component here
// import React from 'react';

// class App extends React.Component {

    
//     state = {
//         peopleInSpace: []
//     }
    

//     componentDidMount() {
//         fetch("http://api.open-notify.org/astros.json")
//           .then(res => res.json())
//           .then(
//             (data) => {
//             this.setState({peopleInSpace: data})
//             }
//           )
//       }

//     render(){
//         return <div>{this.state.name}</div>

//     }
// }
 
// export default App

import React, { Component } from 'react'

class App extends Component {

    constructor(){
        super()
        this.state = {peopleInSpace: []}
    } 

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({people}) => this.setState({ peopleInSpace: people }))

  }

}

export default App
