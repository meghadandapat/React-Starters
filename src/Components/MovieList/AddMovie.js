import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext'
const AddMovie = () => {
    const [movies,setMovies] = useContext(MovieContext)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const submitHandler = (e) =>{
        e.preventDefault();
        setMovies(prevState => [...prevState,{name:title, price:"$"+price}])
        setTitle('')
        setPrice('')

    }
    return ( 
        <form onSubmit={submitHandler}>
           <label htmlFor="title">Name
         </label>
          <input required type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
     
      
       <br/>
       <br/>
        <label htmlFor="price">Price$
         </label>
        <input required id="price" type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
  <br/>
        <br/>
        <button type="submit">Add Movie
      
        </button>

        </form>
     );
}
 
export default AddMovie;