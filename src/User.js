import React from 'react'
import Favorites from './Favorites'

export default function User(props) {
    return (
        <section>
            <h2>{`${props.userIndex}/${props.totalUsers}`}</h2>
            <h1>{`${props.user.name.first} ${props.user.name.last}`}</h1>
            <br />
            <p> <span className="bold">From:</span> {`${props.user.city}, ${props.user.country}`}</p>
            <p> <span className="bold">Job Title:</span> {props.user.title} </p>
            <p> <span className="bold">Employer:</span> {props.user.employer} </p>
            <br />
            <Favorites userFavorites={props.user.favoriteMovies} />
        </section>
    )
}