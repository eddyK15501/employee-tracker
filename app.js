// CommonJS import statements
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
      name: "main",
      message: "What would you like to do?",
      type: "list",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Delete a department",
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
    
    const { main } = data;
    
    switch(main) {
      case "View All Departments":
        index.viewDepartments().then(recallPrompt)
        break;
      case "View All Roles":
        index.viewRoles().then(recallPrompt)
        break;
      case "View All Employees":
        index.viewEmployees().then(recallPrompt)
        break;
      case "Add a department":
        index.addDepartment().then(recallPrompt)
        break;
      case "Add a role":
        break;
      case "Add an employee":
        break;
      case "Delete a department":
        index.deleteDepartment().then(recallPrompt)
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

module.exports = recallPrompt