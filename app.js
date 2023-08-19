// CommonJS import statements; inquirer@8.2.4, mysql2
const inquirer = require("inquirer");
const mysql = require("mysql2");
const asciiArt = require("./src/ascii");

// Create a connection pool with mysql2
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: '',
}).promise()

const promptInquirer = async () => {
  try {
    
  } catch (err) {
    console.log(err)
  }
}

asciiArt()