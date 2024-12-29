const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();

//middleware
app.use(cors());
app.use(bodyparser.json());


// Vieww all category record api
app.get("/viewcategory", (req, res) => {
  const cmd = "select * from category";
  db.query(cmd, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json(result);
  });
});

// View all movie record api
app.get("/viewmovies", (req, res) => {
  const cmd =
    "SELECT movie.*, category.name As categoryName from movie inner join category on movie.category= category.id";
  db.query(cmd, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json(result);
  });
});


// View a single movie record api
app.get("/viewmovies/:movieid", (req, res) => {
  const id = req.params.movieid;
  const cmd = "SELECT * From movie where movieid = ?";
  db.query(cmd, id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json(result[0]);
  });
});

// Create a new movie record api
app.post("/createmovie", (req, res) => {
  //object
  const { name, rating, category, mlength } = req.body;
  let query =
    "insert into movie(name, rating, category, mlength) value (?,?,?,?)";
  db.query(query, [name, rating, category, mlength], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: "Record Inserted" });
  });
});

// Create a new category record api
app.post("/createcategory", (req, res) => {
  const { name } = req.body;
  let query = "insert into category(name) values (?)";
  db.query(query, [name], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: "Category Created" });
  });
});

//delete movie record api
app.delete("/deletemovie/:id", (req, res) => {
  const id = req.params.id;
  const cmd = "delete From movie where movieid = ?";
  db.query(cmd, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: "Record Deleted" });
  });
});

//delete category record api
app.delete("/deletecategory/:id", (req, res) => {
  const id = req.params.id;
  const cmd = "delete From category  where id = ?";
  db.query(cmd, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: "Record Deleted" });
  });
});


app.get("/", (req, res) => {
  res.send("hello world");
});


//server
app.listen(3000, () => {
  console.log("server is running");
});
