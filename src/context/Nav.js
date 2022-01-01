import React, {useContext} from "react";
import { MovieContext } from "./MovieContext";

const ContextNav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return(
        <div>
            <h3>context api</h3>
            <p>List of Movies: {movies.length} </p>
        </div>
    );
};

export default ContextNav;