import React, {useState, createContext} from 'react';

//This is what needs to be imported in all components which want to access the info inside MovieProvider
export const MovieContext = createContext();


//This is what need to be imported to the parent component(for eg here Mainpage) and wrap all the children iwith this
export const MovieProvider = ({children}) => {
     const [movies, setMovies] = useState([{
        name: "Harry potter",
        price: "$18",
        id: 2321
    },
    {
        name: "Your Name",
        price: "$10",
        id: 6340
    },
    {
        name: "Divergent",
        price: "$38",
        id: 4121
    },
    {
        name: "Game of Thrones",
        price: "$25",
        id: 3321
    }])
    return ( 
        <MovieContext.Provider value={[movies, setMovies]}>
        {children}
        </MovieContext.Provider>
     );
}
 
export default MovieProvider;