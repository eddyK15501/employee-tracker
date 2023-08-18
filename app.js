const inquirer = require("inquirer");
const art = require("ascii-art");
const mysql = require("mysql2");

const asciiArt = () => {
  art.font("Employee Tracker", "doom").then((rendered) => {
    console.log(rendered);
    setTimeout(() => {
      console.clear();
    }, 3000);
  });
};

asciiArt();
