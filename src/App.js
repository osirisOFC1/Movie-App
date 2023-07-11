  import React, { useState,useEffect } from 'react';
  import './App.css';
  import { v4 as uuidv4 } from 'uuid';
  import MovieList from './Components/MovieList';
import MovieForm from './Components/MovieForm';
import Filter from './Components/Filter';


  const MovieApp = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [titleFilter, setTitleFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');

    const handleTitleFilterChange = (value) => {
      setTitleFilter(value);
      filterMovies(value, ratingFilter, movies);
    };

    const handleRatingFilterChange = (value) => {
      setRatingFilter(value);
      filterMovies(titleFilter, value, movies);
    };

    const filterMovies = (title, rating, movies) => {
      const filtered = movies.filter((movie) => {
        const matchTitle = movie.title.toLowerCase().includes(title.toLowerCase());
        const matchRating = movie.rating >= Number(rating);
        return matchTitle && matchRating;
      });
      setFilteredMovies(filtered);
    };

    const handleAddMovie = (newMovie) => {
      const updatedMovies = [...movies, newMovie];
      setMovies(updatedMovies);
      filterMovies(titleFilter, ratingFilter, updatedMovies);
    };


    const initialMovies = [
      {
        title: 'Inception',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        posterURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3VT-Ynisr-nRV7R65rC8iZ4jyJKgLHU7wvROHYTnc1X7zg_4i',
        rating: 8.8,
        id:1
      },
      {
        title: 'The Shawshank Redemption',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterURL: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvYzmCt0-qgc4Yc1AgkRw9_ONiZ5RX1sg53__YVoLs28rfR8M-',
        rating: 9.3,
        id:2
      },
    ];

    useState(() => {
      setMovies(initialMovies);
      setFilteredMovies(initialMovies);
    }, []);

    return (
      <div className="movie-app">
        <div className="content-overlay">
          <h1>tunybest</h1>
          <Filter
            onTitleChange={handleTitleFilterChange}
            onRatingChange={handleRatingFilterChange}
          />
          <MovieForm onMovieAdd={handleAddMovie} />
          <MovieList movies={filteredMovies} />
        </div>
      </div>
    );
  };


  export default MovieApp;
