import logo from './logo.svg';
import './App.css';
import data from './data';
import React from 'react';
import User from './User';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: 0, //index of user to display 
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


  render() {
    return (
      <div className="App">
        <nav>Home</nav>
        <div className="background">
          <User user={data[this.state.currentUser]} userIndex={this.state.currentUser +1} totalUsers={data.length} />
          <footer>
            <a className="previous" onClick={this.handleClickPrevious}> &lt; Previous</a>
            <div className="buttons">
              <button>Edit</button>
              <button>Delete</button>
              <button>New</button>
            </div>
            <a className="next" onClick={this.handleClickNext}> Next &gt; </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
