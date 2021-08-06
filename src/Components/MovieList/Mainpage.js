import React from 'react';
import List from './List'
import Nav from './Nav'
import {MovieProvider} from './MovieContext'
import './MovieList.css'
import AddMovie from './AddMovie'
const Mainpage = () => {
    return ( 
        <div className="main">
        <MovieProvider>
        
        <Nav/> 
        <AddMovie/> 
        <List/>
        
        </MovieProvider>
        </div> );
}
 
export default Mainpage;