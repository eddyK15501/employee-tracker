// Node packages: inquirer@8.2.4 & mysql2
const inquirer = require('inquirer');
const mysql = require("mysql2");

// Create a connection pool with mysql2
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'employee_tracker_db',
}).promise()

// "View All Departments"
const viewDepartments = async () => {
    const [rows] = await pool.query("SELECT * FROM department;")
    console.table(rows)
}

// "View All Roles"
const viewRoles = async () => {
    let query = "SELECT * FROM role;"

    const [rows] = await pool.query(query)
    console.table(rows)
}

// "View All Employees"
const viewEmployees = async () => {
    let query = "SELECT * FROM employee;"

    const [rows] = await pool.query(query)
    console.table(rows)
}

// "Add a department"
const addDepartment = async () => {
    try {
        const dept = await inquirer.prompt({
            name: "deptAdded",
            type: "input",
            message: "Name of the department:",
            validate: (name) => {
                return name ? true : console.log("Please enter a name for the department:", false)
            }
        })
        const { deptAdded } = dept

        await pool.query(`INSERT INTO department (name) VALUES (?)`, [deptAdded])
        return await viewDepartments()
    } catch (err) {
        console.log(err)
    }
}

// "Add a role"
const addRole = async () => {
    try {
        const role = await inquirer.prompt({
            name: "roleName",
            type: "input",
            message: "Title of the role:",
            validate: (name) => {
                return name ? true : console.log("Please enter a title for the role", false)
            }
        },
        {

        },
        {

        })
    } catch (err) {
        console.log(err)
    }
}

// "Remove a department"
const removeDepartment = async () => {
    try {
        const dept = await inquirer.prompt({
            name: "deptRemoved",
            type: "input",
            message: "Please select the id of the department to remove:",
            validate: (id) => {
                return id ? true : console.log("Please enter an id of the department to remove:", false)
            }
        })
        const { deptRemoved } = dept

        await pool.query(`DELETE FROM department where id = ?`, [deptRemoved])
        return await viewDepartments()
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    removeDepartment
}