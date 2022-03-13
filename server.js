const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD || '',
    database: 'employee_db'
  },
  console.log(`Connected to database.`)
);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

const init = () => {
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'tasks',
      choices: ['View all employees', 'Add employee', 'Update employee role', 'View all roles', 'Add role', 'View all departments', 'Add department', 'Quit'],
    },
  ])
    .then((answers => {
      switch(answers.tasks) {
        case 'View all employees':
          db.query('SELECT * FROM employees', function (err, results) {
            if(err) {
              console.log(err) 
            } else {
              console.table(results);
              init();
            }
          });          
        break;
        case 'Add employee':
          inquirer.prompt([
            {
              type:'input',
              name: 'employee_id',
              message: 'What is the employees ID?',
            },
            {
              type:'input',
              name: 'first_name',
              message: 'What is the employees first name?',
            },
            {
              type:'input',
              name: 'last_name',
              message: 'What is the employees last name?',
            },
            {
              type:'input',
              name: 'role_id',
              message: 'What is the employees role ID?',
            },
            {
              type:'input',
              name: 'manager_id',
              message: 'What is the employees manager ID?',
            },
          ]).then((answers) => {
            const newEmployeeSql = `INSERT INTO employees (employee_id, first_name, last_name, role_id, manager_id) 
            VALUES (?);`
            const newEmployeeData = [];
            newEmployeeData.push([answers.employee_id, answers.first_name, answers.last_name, answers.role_id, answers.manager_id]);

            db.query(newEmployeeSql, newEmployeeData, (err, result) => {
              if (err) {
                console.log(err);
              } else {
                console.table([
                  {
                    employee_id: answers.employee_id,
                    first_name: answers.first_name, 
                    last_name: answers.last_name, 
                    role_id: answers.role_id, 
                    manager_id: answers.manager_id
                  }
                ]);
              }
              })
          })
        break;
        case 'Update employee role':
          
        break;
        case 'View all roles':
          db.query('SELECT * FROM roles', function (err, results) {
            if(err) {
              console.log(err) 
            } else {
              console.table(results)
              init();
            }
          });  
        break;
        case 'Add role':
          
        break;
        case 'View all departments':
          db.query('SELECT * FROM departments', function (err, results) {
            if(err) {
              console.log(err) 
            } else {
              console.table(results)
              init();
            }
          });  
        break;
        case 'Add department':
          
        break;
        case 'Quit':
        break;
      }
    }
  ));
}

init();