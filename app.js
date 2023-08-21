// CommonJS import statements; inquirer@8.2.4, mysql2
const inquirer = require("inquirer");
const asciiArt = require("./src/ascii");
const index = require("./src/index");

const startTracker = () => {
  asciiArt()
  setTimeout(() => {
    promptInquirer()
  }, 1550)
}

const recallPrompt = () => {
  setTimeout(() => {
    promptInquirer()
  }, 500)
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
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Quit",
        /*
          Extra Credit:
          "Update employee managers"
          "View employees by manager"
          "View employees by department"
          "Delete departments, roles, and employees"
          "View total utilized budget of department (combined salaries of all employees in that department)"          
        */
      ]
    });
    
    const { option } = data;
    
    switch(option) {
      case "View All Departments":
        index.viewDepartments()
        recallPrompt()
        break;
      case "View All Roles":
        index.viewRoles()
        recallPrompt()
        break;
      case "View All Employees":
        break;
      case "Add a department":
        break;
      case "Add a role":
        break;
      case "Add an employee":
        break;
      case "Update an employee role":
        break;
      case "Quit":
        console.log("Goodbye!")
        process.exit(0)
        break;
    }

  } catch (err) {
    console.log(err)
  }
}

startTracker()

module.exports = { promptInquirer }