const express = require('express');
const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'tasks',
      choices: ['View all employees', 'Add employee', 'Update employee role', 'View all roles', 'Add role', 'View all departments', 'Add department', 'Quit'],
    },
  ])
  .then((response) =>
    response.confirm === response.password
  );
