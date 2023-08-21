// Node package: mysql2
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
    let query = "SELECT * FROM role";

    const [rows] = await pool.query(query)
    console.table(rows)
}

module.exports = {
    viewDepartments,
    viewRoles
}