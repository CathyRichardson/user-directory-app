import logo from './logo.svg';
import './App.css';
import data from './data';
import React from 'react';
import User from './User';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: 0, 
    }
  }

  handleClickNext = () => {
    if (this.state.currentUser < data.length - 1) {
      this.setState({ currentUser: this.state.currentUser + 1 })
    }
  }

  handleClickPrevious = () => {
    if (this.state.currentUser > 0) {
      this.setState({ currentUser: this.state.currentUser - 1 })
    }
  }

  handleClickHome = () => {
    this.setState({ currentUser: 0 })
  }


  render() {
    return (
      <div className="App">
        <nav>
          <a className="home" onClick={this.handleClickHome}>Home</a>
        </nav>
        <div className="background">
          <User user={data[this.state.currentUser]} userIndex={this.state.currentUser + 1} totalUsers={data.length} />
          <footer>
            <a onClick={this.handleClickPrevious}> &lt; Previous</a>
            <div className="buttons">
              <button>Edit</button>
              <button>Delete</button>
              <button>New</button>
            </div>
            <a onClick={this.handleClickNext}> Next &gt; </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
