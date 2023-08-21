// Node package: mysql2
const mysql = require("mysql2");

// Create a connection pool with mysql2
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: '',
}).promise()

// "View All Departments"
const viewDepartments = () => {
    let query = "SELECT * FROM department"
    
    pool.query(query, (err, result) => {
        if (err) throw err
        console.table(result)
    })
}

module.exports = {
    viewDepartments
}