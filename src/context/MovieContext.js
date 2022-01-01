import React, {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price : '$10',
            id: 2
        },
        {
            name: 'Game of thrones',
            price : '$20',
            id: 3
        },
        {
            name: 'Inceotion',
            price : '$40',
            id: 1
        }
    ])
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}