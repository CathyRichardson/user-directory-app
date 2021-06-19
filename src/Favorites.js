import React, { Component } from 'react'

class Favorites extends Component {

    render() {
        return (
            <p> <span className="bold">Favorite Movies:</span>
                <ol>
                    {this.props.userFavorites.map((e, i) => <li key={i}> {e} </li>)}
                </ol>
            </p>
        )
    }
}

export default Favorites;