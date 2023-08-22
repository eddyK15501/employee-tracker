// CommonJS import statements
const inquirer = require("inquirer");
const asciiArt = require("./src/ascii");
const index = require("./src/index");

// Start application with ASCII Art, followed by the main inquirer.js prompts
const startTracker = () => {
  asciiArt()
  setTimeout(() => {
    promptInquirer()
  }, 1550)
}

// Function for going back to the main prompts after 500 milliseconds
const recallPrompt = () => {
  setTimeout(() => {
    promptInquirer()
  }, 500)
}

// Prompt inquirer.js using async-await
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
        "Remove a department",
        "Remove a role",
        "Remove an employee",
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
    
    // Destructure key of main from object being returned
    const { main } = data;
    
    // Switch statements for what functions to be called, in order to query from the database
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
        index.viewDepartments().then(index.viewRoles)
        setTimeout(() => {
          index.addRole().then(recallPrompt)
        }, 500)
        break;
      case "Add an employee":
        break;
      case "Remove a department":
        index.viewDepartments()
        setTimeout(() => {
          index.removeDepartment().then(recallPrompt)
        }, 500)
        break;
      case "Remove a role":
        break;
      case "Remove an employee":
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

module.exports = recallPrompt