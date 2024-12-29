import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axio from "axios";
import Home from "./components/Home";
import Index from "./components/Index";
import Category from "./components/Category";
import Movie from "./components/Movie";
import Manage from "./components/Manage";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/" element={<Index />} />
          <Route path="/category" element={<Category />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}