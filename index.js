const inquirer = require('inquirer');

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your repository?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What would you like to add as your description for this project?',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Put install instructions here:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter any usage information here:',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'What would you like to add to your credits?',
        },
        {
            type: 'input',
            name: 'contributor',
            message: 'Who would you like to add as contributors',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to use?',
            choices: ['MIT', 'Apache', 'GPL', `BSD`],
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test information',

        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username? (without the @)',

        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
    ]);
};

const generateReadMe = ({ title, description, install, usage, credits, contributor, license, test, email, github }) =>
    `<h1 align="center">
  <br>
  <br>
  ${title}
  <br>
</h1>

	
[![License: ${license}](https://img.shields.io/badge/license-${license}---blue.svg)](https://github.com/TechSmith/hyde/blob/master/LICENSE.txt)


<h4 align="center">${description}</h4>


<p align="center">
  <a href="#install">Install</a> •
  <a href="#usage">Usage</a> •
  <a href="#credits">Credits</a> •
  <a href="#contributor">Contributors</a>•
  <a href="#license">License</a>•
  <a href="#test">Test</a>•
  <a href="#questions">Questions</a>•
</p>


---

## Usage
${usage}

## Test
${test}

## Install
${install}

## Credits
${credits}


## License
${license}


## Contributors
${contributor}
  
---  
## Questions
Contact me for further questions:
<br>
Email: ${email}
<br>
Github: [${github}](http://github.com/${github})`



// Bonus using writeFileSync as a promise
const init = () => {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of
        // a callback function
        .then((answers) => writeFile('readme.md', generateReadMe(answers)))
        .then(() => console.log('Successfully wrote to readme.md'))
        .catch((err) => console.error(err));
};


init();
