import React from "react";
import { useState, useEffect } from "react"; // Import useState and useEffect for managing state and side effects
import axios from "axios"; // Import axios for making HTTP requests

const Manage = () => {
  const [movieList, setMovieList] = useState([]);  {/* State to store movie list */}

  useEffect(() => {  {/* Fetch movies when the component mounts */}
    fetchMovies();
  }, []);


  // Function to fetch movies from the server
  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:3000/viewmovies");
      setMovieList(response.data);
    } catch (error) {
      console.log("Error fetching movies", error);
    }
  };

  // Function to handle movie deletion
  const deletemovie = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this record");
      if (!confirm) return;
    try {
      await axios.delete(`http://localhost:3000/deletemovie/${id}`);
      fetchMovies();
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };
  return (
    <>
      <div>
        <h2>Movie Review</h2>
        <div>
          <h3>Movies List</h3>
          <table>
            <thead>
              <tr>
                <th>Movie Name</th>
                <th>Genre</th>
                <th>Length</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>   {/* Render movie list */}
              {movieList.map((movie) => (    
                <tr key={movie.movieid}>
                  <td>{movie.name}</td>
                  <td>{movie.categoryName}</td>
                  <td>{movie.mlength}</td>
                  <td>{movie.rating}</td>
                  <td>
                    {/* Button to delete a movie */}
                    <button onClick={() => deletemovie(movie.movieid)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Manage;
