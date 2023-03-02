const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let list_of_employees = []

newEmployee('newManager')

function chooseOption() {
    inquirer
        .prompt([
            {
                name: 'options',
                type: 'list',
                message: 'What do you want to do next?',
                choices: ["Add an engineer",
                          "Add an intern",
                          "Finish building team"]
            }
        ])
        .then((answer) => {
            if (answer.options == 'Add an engineer') {
                newEmployee("newEngineer")
            }
            else if (answer.options == 'Add an intern') {
                newEmployee("newIntern")
            }
            else {
                let newHTML = render(list_of_employees)
                fs.writeFile(outputPath, newHTML, function (err, file) {
                    if (err) throw err;
                    console.log('Saved!');
                })
            }
        })
}


function newEmployee(employee) {
    let questions = [
        {
            name: 'name',
            type: 'input',
            message: "name:"
        },
        {
            name: 'id',
            type: 'input',
            message: "Employee ID:"
        },
        {
            name: 'email',
            type: 'input',
            message: 'Email address:'
        },
    ]
    if (employee == 'newManager') {
        questions.push({
            name: 'officeNumber',
            type: 'input',
            message: 'Office number:'
        })
        questions[0]['message'] = "Manager's name:"
    }
    else if (employee == 'newEngineer') {
        questions.push({
            name: 'github',
            type: 'input',
            message: 'GitHub username:'
        })
        questions[0]['message'] = "Engineer's name:"
    }
    else {
        questions.push({
            name: 'school',
            type: 'input',
            message: 'School:'
        })
        questions[0]['message'] = "Intern's name:"
    }

    inquirer
        .prompt(questions)
        .then((answer) => {
            appendEmployee(answer, employee)
            chooseOption()
        })
}

function appendEmployee(answer, employee) {
    if (employee == 'newManager') {
        let newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber)
        list_of_employees.push(newManager)
    }
    else if (employee == 'newEngineer') {
        let newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
        list_of_employees.push(newEngineer)
    }
    else {
        let newIntern = new Intern(answer.name, answer.id, answer.email, answer.school)
        list_of_employees.push(newIntern)
    }
}