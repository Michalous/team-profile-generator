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

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Inquirer

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


empl = new Employee("pepa", '23', 'a@a.xz')
man = new Manager('jozef', '34', 'a@f.fg', '234')

console.log(empl.getRole())
console.log(man.getRole())