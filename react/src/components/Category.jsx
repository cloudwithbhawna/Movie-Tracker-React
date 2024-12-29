import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const [categories, setCategories] = useState([]);           {/* State to store categories */}
  const [categoryName, setCategoryName] = useState("");       {/* State to store category name */}

  useEffect(() => {            {/* Fetch categories when the component mounts */}
    fetchCategories();
  }, []);

  // Function to fetch categories from the server
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/viewcategory");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    // e.preventDefault();

    // Create a new category object
    const newCategory = {
      name: categoryName,
    };
    // Send a POST request to create a new category
    await axios.post("http://localhost:3000/createcategory", newCategory);
    fetchCategories();
    setCategoryName("");
  };

  // Function to handle category deletion
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this record");
      if (!confirm) return;
    try {
      await axios.delete(`http://localhost:3000/deletecategory/${id}`);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };
  return (
    <>
      <div>
        <h2>Manage Genre</h2>
        <form id="movieForm" onSubmit={handleSubmit}>
          <div>
            <label fhtmlor="movieName">Add Genre</label>
            <input
            placeholder="Enter a genre"
              type="text"
              id="movieName"
              required
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <button type="submit">submit</button>
        </form>
        <hr />
        <h3>Selected Genre</h3> {/*Display selected categories*/}
        <ul id="selectedcategories">
          {categories.map((category) => (
            <li key={category.id}>
              <b>{category.name}</b> <br />
              {/* Delete button to delete a category */}
              <button onClick={() => handleDelete(category.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Category;
