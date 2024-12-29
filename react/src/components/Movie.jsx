import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Movie = () => {
  const [name, setMoviesName] = useState("");          {/* State to store movie name */}
  const [category, setCategory] = useState("");        {/* State to store movie category */}
  const [categories, setCategories] = useState([]);    {/* State to store categories */}
  const [mlength, setMovieLength] = useState("");      {/* State to store movie length */}
  const [rating, setMovieRating] = useState("");       {/* State to store movie rating */}

  useEffect(() => {
    // Fetch categories when the component mounts
    fetchCategories();
  }, []);

  // Function to fetch categories from the server
  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:3000/viewcategory");
    setCategories(response.data);
  };

const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    //e.preventDefault();

    // Create a new movie object
    const newMovie = {
      name,
      rating,
      category,
      mlength,
    };
    console.log(newMovie);

    // Send a POST request to create a new movie
    try {
      const response = await axios.post(
        "http://localhost:3000/createmovie",
        newMovie
      );
      console.log(response.data);
      // Reset form fields
      setMoviesName("");
      setCategory("");
      setMovieLength("");
      setMovieRating("");
    } catch (error) {
      console.error("Error creating movie:");
    }
    navigate("/manage");
  };
  return (
    <>
      <div>
        <h2>Manage Movie</h2>
        <form id="movieForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="movieCategory">Genre</label> &nbsp;
            <select
              id="movieCategory"
              required
              onChange={(e) => setCategory(e.target.value)}  
              value={category}
            >
              <option value="">Select a genre</option>
              {/* Render category options */}
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="movieName">Movie Name </label>&nbsp;
            <input
              type="text"
              id="movieName"
              required
              onChange={(e) => setMoviesName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="movieLength">Movie Length</label>&nbsp;
            <input
              type="text"
              id="movieLength"
              required
              onChange={(e) => setMovieLength(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="movieRating">Movie Rating</label>&nbsp;
            <input
              type="text"
              id="movieRating"
              required
              onChange={(e) => setMovieRating(e.target.value)}
            />
          </div>
          <button type="submit">submit review</button>
        </form>
      </div>
    </>
  );
};
export default Movie;
