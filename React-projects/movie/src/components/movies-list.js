import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Movie from "./movie";

const MoviesList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios('https://api.themoviedb.org/3/discover/movie?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3')
            .then(({data}) => setMovies(data.results))

    }, [])
    return (
        <MoviesRow>
            {movies.map(movie => <Movie movie={movie}/>)}
        </MoviesRow>
    );
};

export default MoviesList;
const MoviesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 15px;
  grid-column-gap: 30px;
  padding: 30px;
`