// CommonJS import statements; inquirer@8.2.4, ascii-art, mysql2
const inquirer = require("inquirer");
const art = require("ascii-art");
const mysql = require("mysql2");

// Create a connection pool with mysql2
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: '',
}).promise()

// Render ASCII Art at the start of application
const asciiArt = () => {
  art.font("Employee Tracker", "doom").then((rendered) => {
    console.log(rendered);
    setTimeout(() => {
      console.clear();
    }, 3000);
  });
};