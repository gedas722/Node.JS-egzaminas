const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  database: "node_exam_db",
  user: "root",
  password: "nesakysiu",
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log("Failed to connect");
  }
});

module.exports = mysqlConnection;
