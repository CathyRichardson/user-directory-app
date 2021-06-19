import logo from './logo.svg';
import './App.css';
import data from './data';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    console.log(data[0].name.first)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <nav>Home</nav>
        <div class="background">
          <section>
            <h2>{`${data[0].id}/${data.length}`}</h2>
            <h1>{`${data[0].name.first} ${data[0].name.last}`}</h1>
            <p> <span class="bold">From:</span> {`${data[0].city}, ${data[0].country}`}</p>
            <p> <span class="bold">Job Title:</span> {data[0].title} </p>
            <p> <span class="bold">Employer:</span> {data[0].employer} </p>
            <p> <span class="bold">Favorite Movies:</span>
              {data[0].favoriteMovies.map((e, i) => <ol> <li key={i}>  {e} </li> </ol>)} </p>
          </section>
          <a>Previous</a>
          <a>Next</a>
        </div>
      </div>
    );
  }
}

export default App;