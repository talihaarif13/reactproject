import React from "react";
import { MovieProvider } from "./MovieContext";
import ContextNav from "./Nav";
import MovieList from "./MovieList";
import Signup from "../Signup";

const ContextUsage = () => {
    return(
        <MovieProvider>
        <ContextNav />
        <Signup/>
        <MovieList />
      </MovieProvider>
    )
}

export default ContextUsage;