import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import Trailerincep from './Components/Trailerincep.js';
import Navbar from './Components/Navbar';
import {createBrowserRouter,route ,BrowserRouter, RouterProvider, Link}from 'react-router-dom'
import MovieForm from './Components/MovieForm.js';
<Navbar/>


const router = createBrowserRouter([
  {
  path : "/",
  element:<App/>,

  },
  {
    path : "/Trailer/:id",
    element:<Trailerincep/>,
    
    },
    {
      path : "/add",
      element:<MovieForm/>,
    }
]);
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
      
   
     
)

