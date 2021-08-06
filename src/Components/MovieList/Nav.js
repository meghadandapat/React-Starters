import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'
const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)

    
    return ( 
        <nav>
        <ul>
        <li>Megha</li>
        <li>Number of movies {movies.length}</li>
        </ul>
        </nav>
     );
}
 
export default Nav;