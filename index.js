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

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Inquirer

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
            console.log(answer.options)
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
        console.log(list_of_employees)
    }
    else if (employee == 'newEngineer') {
        let newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
        list_of_employees.push(newEngineer)
        console.log(list_of_employees)
    }
    else {
        let newIntern = new Intern(answer.name, answer.id, answer.email, answer.school)
        list_of_employees.push(newIntern)
        console.log(list_of_employees)
    }
}

// function init() {
//     inquirer
//         .prompt([
//             {
//                 name: "title",
//                 type: "input",
//                 message: "What is the title of your project?"
//             },
//             {
//                 name: "description",
//                 type: "input",
//                 message: "Description (leave empty for none):"
    
//             },
//             {
//                 name: "installation",
//                 type: "input",
//                 message: "Installation instructions:"
//             },
//             {
//                 name: "usage",
//                 type: "input",
//                 message: "Usage information:"
//             },
//             {
//                 name: "contribution",
//                 type: "input",
//                 message: "Contribution guidelines:"
//             },
//             {
//                 name: "test",
//                 type: "input",
//                 message: "Test instructions:"
//             },
//             {
//                 name: "license",
//                 type: "list",
//                 message: "License:",
//                 choices: ["None",
//                           "Apache License 2.0",
//                           "GNU General Public License v3.0",
//                           "MIT License",
//                           "BSD 2-Clause \"Simplified\" License",
//                           "BSD 3-Cluase \"New\" or \"Revised\" License",
//                           "Boost Software License 1.0",
//                           "Creative Commons Zero v1.0 Universal",
//                           "Eclipse Public License v3.0",
//                           "GNU Affero General Public License v3.0",
//                           "GNU General Public License v2.0",
//                           "GNU Lesser General Public License v2.1",
//                           "Mozilla Public License 2.0",
//                           "The Unlicense"]
//               },
//               {
//                 name: "username",
//                 type: "input",
//                 message: "GitHub username:"
//               },
//               {
//                 name: "email",
//                 type: "input",
//                 message: "Your email address:"
//               },
//         ])
//         .then((answer) => {
//             var toc
//             var toc_count = 0
//             var table_of_content = [answer.installation, answer.usage, answer.contribution, answer.license]
//             for (ans of table_of_content) {
//                 ans ? toc_count++ : toc_count = toc_count
//             }
//             toc_count >= 3 ? toc = true : toc = false
    
//             var result = generateMarkdown(answer, toc)
//             fs.writeFile('mynewfile2.md', `${result}`, function (err, file) {
//                 if (err) throw err;
//                 console.log('Saved!');
//               });
//         })
// }
// init()


// empl = new Employee("pepa", '23', 'a@a.xz')
// man = new Manager('jozef', '34', 'a@f.fg', '234')

// console.log(empl.getRole())
// console.log(man.getRole())
// console.log(man.officeNumber)