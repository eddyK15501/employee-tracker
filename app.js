const inquirer = require("inquirer");
const art = require("ascii-art");
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database: ''
}).promise()

const asciiArt = () => {
  art.font("Employee Tracker", "doom").then((rendered) => {
    console.log(rendered);
    setTimeout(() => {
      console.clear();
    }, 3000);
  });
};