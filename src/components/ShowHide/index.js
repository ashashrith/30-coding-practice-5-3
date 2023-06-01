// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {show: true, see: true}

  onFirstName = () => {
    const {show, see} = this.state
    this.setState({show: false})

    if (show === true) {
      const firstName = (
        <div className="mini">
          <h1 className="head">Joe</h1>
        </div>
      )
    }
    return firstName
  }

  onLastName = () => {
    const {see, show} = this.state
    this.setState({see: false})

    if (see === true) {
      const lastName = (
        <div className="mini">
          <h1 className="head">Jonas</h1>
        </div>
      )
    }
    return lastName
  }

  render() {
    const {show, see} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div className="cont">
            <button className="btn" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {firstName}
          </div>
          <div className="cont">
            <button className="btn" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {lastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
