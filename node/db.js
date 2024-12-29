const mysql = require("mysql2")  
const db = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "@Rajulvish464",
  database : "moviestracker"
})
db.connect((err) => {
  if(err){
    console.log("error connecting to database");
  }else{
    console.log("connected to database");
    
  }
})
module.exports = db;