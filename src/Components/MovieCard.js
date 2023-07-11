import React from "react"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const Navigate = useNavigate()
  console.log('lelelel',movie)
    return (
    <>
      <div className="movie-card">
        
        <img src={movie.posterURL} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <span>Rating: {movie.rating}</span>
        <button onClick={()=>Navigate(`/Trailer/${movie.id}`)}>TRAILER</button>

      </div>
      </>
    )
}
export default MovieCard;