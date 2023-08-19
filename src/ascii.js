const art = require("ascii-art");

// Render ASCII Art at the start of application
const asciiArt = () => {
  art.font("Employee Tracker", "doom").then((rendered) => {
    console.log(rendered);
    setTimeout(() => {
      console.clear();
    }, 2000);
  });
};

module.exports = asciiArt