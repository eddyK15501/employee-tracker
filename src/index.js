// Node packages: inquirer@8.2.4 & mysql2
const inquirer = require("inquirer");
const mysql = require("mysql2");

// Create a connection pool with mysql2
const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "employee_tracker_db",
  })
  .promise();

// "View All Departments"
const viewDepartments = async () => {
  const [rows] = await pool.query("SELECT * FROM department;");
  console.table(rows);
};

// "View All Roles"
const viewRoles = async () => {
  let query = `
    SELECT *
    FROM role
    JOIN department ON role.department_id = department.id;
  `;

  const [rows] = await pool.query(query);
  console.table(rows);
};

// "View All Employees"
const viewEmployees = async () => {
  let query = `
    SELECT *
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id;
  `;

  const [rows] = await pool.query(query);
  console.table(rows);
};

// "Add a department"
const addDepartment = async () => {
  try {
    const dept = await inquirer.prompt({
      name: "deptAdded",
      type: "input",
      message: "Name of the department:",
      validate: (name) => {
        return name
          ? true
          : console.log("Please enter a name for the department:", false);
      },
    });
    const { deptAdded } = dept;

    await pool.query(`
        INSERT INTO department (name) 
        VALUES (?)`,
        [deptAdded]
    );
    return viewDepartments();
  } catch (err) {
    console.log(err);
  }
};

// "Add a role"
const addRole = async () => {
  try {
    const [departments] = await pool.query(`SELECT * FROM department;`);
    const deptName = departments.map((dept) => dept.name);

    const role = await inquirer.prompt([
      {
        name: "roleTitle",
        type: "input",
        message: "Title of the role:",
        validate: (title) => {
          return title
            ? true
            : console.log("Please enter a title for the role:", false);
        },
      },
      {
        name: "roleSalary",
        type: "input",
        message: "Salary of the role:",
        validate: (salary) => {
          return salary
            ? true
            : console.log("Please enter a salary for the role:", false);
        },
      },
      {
        name: "roleDeptName",
        type: "list",
        message: "Which department does the role belongs to?",
        choices: [...deptName],
      },
    ]);
    const { roleTitle, roleSalary, roleDeptName } = role;

    const selectedDept = departments.find((dept) => dept.name === roleDeptName);
    const roleDeptId = selectedDept.id;

    await pool.query(
      `INSERT INTO role (title, salary, department_id) 
      VALUES (?, ?, ?)`,
      [roleTitle, roleSalary, roleDeptId]
    );
    return await viewRoles();
  } catch (err) {
    console.log(err);
  }
};

// "Add an Employee"
const addEmployee = async () => {
  try {
    const [roles] = await pool.query(`SELECT * FROM role;`);
    const roleTitle = roles.map((role) => role.title);

    const [managers] = await pool.query(`SELECT * FROM employee;`);
    const managerName = managers.map(
      (name) => `${name.first_name} ${name.last_name}`
    );

    const employee = await inquirer.prompt([
      {
        name: "firstName",
        type: "input",
        message: "First name of the employee:",
        validate: (first) => {
          return first
            ? true
            : console.log("Please enter a first name of the employee", false);
        },
      },
      {
        name: "lastName",
        type: "input",
        message: "Last name of the employee:",
        validate: (last) => {
          return last
            ? true
            : console.log("Please enter a last name of the employee", false);
        },
      },
      {
        name: "employeeRole",
        type: "list",
        message: "What is the employee's role?",
        choices: [...roleTitle],
      },
      {
        name: "employeeManager",
        type: "list",
        message: "Who is the employee's manager?",
        choices: [...managerName],
      },
    ]);
    const { firstName, lastName, employeeRole, employeeManager } = employee;

    const selectedRole = roles.find((role) => role.title === employeeRole);
    const roleId = selectedRole.id;

    const selectedManager = managers.find(
      (manager) =>
        `${manager.first_name} ${manager.last_name}` === employeeManager
    );
    const managerId = selectedManager.id;

    await pool.query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
      VALUES (?, ?, ?, ?)`,
      [firstName, lastName, roleId, managerId]
    );
    return await viewEmployees();
  } catch (err) {
    console.log(err);
  }
};

// "Remove an employee"
const removeEmployee = async () => {
  try {
    const [employees] = await pool.query(`SELECT * FROM employee;`);
    const employeeName = employees.map(
      (employee) => `${employee.first_name} ${employee.last_name}`
      );
      
      const employee = await inquirer.prompt({
        name: "employeeRemoved",
        type: "list",
        message: "Select an employee to remove:",
        choices: [...employeeName],
      });
      const { employeeRemoved } = employee;
      
      await pool.query(`
      DELETE FROM employee 
      WHERE CONCAT(first_name, ' ', last_name) = ?;
      `, [employeeRemoved]);
      
      return await viewEmployees();
    } catch (err) {
      console.log(err);
    }
  };
  
  // "Remove a role"
  const removeRole = async () => {
    try {
      const [roles] = await pool.query(`SELECT * FROM role;`);
      const roleTitle = roles.map((role) => role.title);
      
      const role = await inquirer.prompt({
        name: "roleRemoved",
        type: "list",
        message: "Select a role to remove:",
        choices: [...roleTitle],
      });
      const { roleRemoved } = role;
      
      await pool.query(`
      DELETE FROM role WHERE title = ?;
      `, [roleRemoved]);
      
      return await viewRoles();
    } catch (err) {
      console.log(err);
    }
  };
  
  // "Remove a department"
  const removeDepartment = async () => {
    try {
      const [departments] = await pool.query(`SELECT * FROM department;`);
      const deptName = departments.map((dept) => dept.name);
  
      const dept = await inquirer.prompt({
        name: "deptRemoved",
        type: "list",
        message: "Select a department to remove:",
        choices: [...deptName],
      });
      const { deptRemoved } = dept;
  
      await pool.query(`
        DELETE FROM department WHERE name = ?;
      `, [deptRemoved]);
      
      return await viewDepartments();
    } catch (err) {
      console.log(err);
    }
  };

// "Update an employee role"
const updateRole = async () => {
  try {
    const [employeeNames] = await pool.query(`SELECT * FROM employee;`)
    const selectEmployee = employeeNames.map(names => `${names.first_name} ${names.last_name}`)

    const [employeeRoles] = await pool.query(`SELECT * FROM role;`)
    const selectRole = employeeRoles.map(role => role.title)

    const data = await inquirer.prompt([
      {
        name: "updateEmployee",
        type: "list",
        message: "Which employee's role do you want to update?",
        choices: [...selectEmployee],
      },
      {
        name: "updateRole",
        type: "list",
        message: "Which role do you want to assign to the selected employee?",
        choices: [...selectRole],
      },
    ]);
    const { updateEmployee, updateRole } = data

    const updateRoleId = employeeRoles.find(role => role.title === updateRole)
    const { id } = updateRoleId

    await pool.query(`
        UPDATE employee AS e
        SET e.role_id = ?
        WHERE CONCAT(e.first_name, ' ', e.last_name) = ?
        `, [id, updateEmployee]
    );

    const [results] = await pool.query(`SELECT * FROM employee JOIN role ON employee.role_id = role.id;`)
    console.table(results)
  } catch (err) {
    console.log(err);
  }
};

// "View total utilized budget of department"
const viewBudget = async () => {
  const query = `
    SELECT d.name AS department_name, SUM(r.salary) AS total_salary
    FROM department d
    JOIN role r ON d.id = r.department_id
    JOIN employee e ON r.id = e.role_id
    GROUP BY d.name;`;

  const [result] = await pool.query(query);
  console.table(result);
};

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  removeDepartment,
  removeRole,
  removeEmployee,
  updateRole,
  viewBudget,
};
