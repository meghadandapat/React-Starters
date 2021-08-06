import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext'

const List = () => {
    const [movies, setMovies] = useContext(MovieContext)
   
    return ( 
        <React.Fragment >
        {movies.map(movie =>{
          const  {name, price, id} = movie
            return (
                <div className="movie-list">
                <ul key={id}>
                <li>{name}</li>
                <li>{price}</li>
                </ul>
                </div>
            )
            
        })}
        </React.Fragment>
     );
}
 
export default List;