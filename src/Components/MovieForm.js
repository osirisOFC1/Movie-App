import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
const MovieForm = ({ onMovieAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState('');
    const navigate = useNavigate()
    const handleAddClick = () => {
        const newMovie = {
          title,
          description,
          posterURL,
          rating: Number(rating),
        };
  
        onMovieAdd(newMovie);
  
        setTitle('');
        setDescription('');
        setPosterURL('');
        setRating('');
      };
      return (
        <div className="movie-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Poster URL"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
          />
          <input
            type="number"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
      
  
          <button onClick={handleAddClick}>Add Movie</button>
        
        </div>
      );
}
export default MovieForm ;