import React from 'react'
import {movieData} from './movieData'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Trailerincep() {
  console.log('dfg',movieData)
  const navigate = useNavigate()
const {id}=useParams()
  const foundmovie = movieData.find((el) => el.id === Number(id))
  console.log('zzzz',foundmovie)
  return (
    <div className='incep'>
 <div className="foundmovie-card">
        
        <img src={foundmovie.posterURL} alt={foundmovie.title} />
        <h3>{foundmovie.title}</h3>
        <p>{foundmovie.description}</p>
        <span>Rating: {foundmovie.rating}</span>
<button  onClick={()=>navigate('/')}  >go back </button>
      </div>
    </div>
  )
}

export default Trailerincep

