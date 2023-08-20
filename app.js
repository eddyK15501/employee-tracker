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

const startTracker = () => {
  asciiArt()

  setTimeout(() => {
    promptInquirer()
  }, 1550)
}

const promptInquirer = async () => {
  try {  
    const data = await inquirer.prompt({
      name: "option",
      message: "What would you like to do?",
      type: "list",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a department",
        "Add an employee",
        "Add a role",
        "Update an employee role",
        "Quit"
      ]
    });
    
    const { option } = data;
    
    switch(option) {
      case "View All Departments":
        break;
      case "View ALL Roles":
        break;
      case "View All Employees":
        break;
      case "Add a department":
        break;
      case "Add an employee":
        break;
      case "Update an employee role":
        break;
      case "Quit":
        break;
    }
    
  } catch (err) {
    console.log(err)
  }
}

startTracker()