const express = require('express');
const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     user: 'root',
//     password: process.env.DB_PASSWORD || '',
//     database: 'employee_db'
//   },
//   console.log(`Connected to database.`)
// );

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'tasks',
      choices: ['View all employees', 'Add employee', 'Update employee role', 'View all roles', 'Add role', 'View all departments', 'Add department', 'Quit'],
    },
  ])
  .then((answers =>
    console.info('Answer:', answers.tasks)
  ));
