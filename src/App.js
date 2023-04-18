import './App.css'

import {Component} from 'react'

// Replace your code here

class App extends Component {
  state = {text: false, userInput: ''}

  eventButton = () => {
    this.setState(prevState => ({
      text: !prevState.text,
    }))
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {text, userInput} = this.state
    return (
      <>
        <div className="container">
          <div className="card">
            <h1>Editable Text Input</h1>
            <div>
              {!text ? (
                <input
                  type="text"
                  value={userInput}
                  onChange={this.onChangeInput}
                />
              ) : (
                <p>{userInput}</p>
              )}
              <button
                type="button"
                className="button"
                onClick={this.eventButton}
              >
                {text ? 'edit' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
