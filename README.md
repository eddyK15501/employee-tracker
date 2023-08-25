# Employee Tracker • [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Node.js content management systems application that views and manages employees in a company, by interacting with a database from the command line, using MySQL and Inquirer.js. 
## Video Demonstration of Application
* [Click Here](https://github.com/eddyK15501/employee-tracker/issues/2#issue-1866199401)
## Installation
* Required: LTS or latest version of Node.js
* Required: LTS or latest version of MySQL
## Usage
* #### Clone the repository

<img width="450px" src="https://user-images.githubusercontent.com/88423414/262820005-d9343b70-19b8-4a5f-b5e7-d838230ac3c1.png" />

* #### Open up a terminal and change paths to the repository. Type in:

```
npm install
```

* #### Start MySQL server and execute both schema.sql & seeds.sql files within the ./sql folder. From the same path, type:

```
mysql -u root (-p for PASSWORD)
SOURCE ./sql/schema.sql;
SOURCE ./sql/seeds.sql;
```

<img width="750px" src="https://user-images.githubusercontent.com/88423414/262821763-c4e950e8-fc45-41e4-8571-667b007b95b4.png" />

* #### Start the application from the terminal with:

```
npm run start
```

<img src="https://user-images.githubusercontent.com/88423414/262821398-83be2356-8c5b-4da4-bfed-3abb97c1af13.png" />

<br>

<img src="https://user-images.githubusercontent.com/88423414/262821439-783e16ce-a785-488e-9808-333ff8d9e4b7.png" />

## Credits
* To my persistent classmates at the UNC coding bootcamp.
* Written by Edward Kim.

## License
This application is covered under the [MIT License](./LICENSE).