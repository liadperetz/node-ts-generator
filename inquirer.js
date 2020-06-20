import * as inquirer from 'inquirer';
import * as fs from 'fs';
// const inquirer = require('inquirer');
// const fs = require('fs');

const CHOICES = fs.readdirSync(`${__dirname}/templates`);

const QUESTIONS = [
  {
    name: 'project-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES,
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    validate(input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) {
        return true;
      }
      return 'Project name may only include letters, numbers, underscores and hashes.';
    },
  },
];

inquirer.prompt(QUESTIONS)
  .then((answers) => {
    console.log(answers);
  });
