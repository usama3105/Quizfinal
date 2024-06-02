#!/usr/bin/env node
import inquirer from 'inquirer';
async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'list',
            name: 'color',
            message: 'Choose your favorite color:',
            choices: ['Red', 'Blue', 'Green'],
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Are you sure?',
        },
    ]);
    console.log(`Hello, ${answers.name}! Your favorite color is ${answers.color}.`);
    if (answers.confirm) {
        console.log('Great! You confirmed.');
    }
    else {
        console.log('You changed your mind.');
    }
}
main();
