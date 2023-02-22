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
            name: 'keyFeatures',
            message: 'Please enter key features.',
        },
        {
            type: 'input',
            name: 'howToUse',
            message: 'What details would you like to add for how to use this repository?',
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
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub URL',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
        },
    ]);
};

const generateReadMe = ({ title, description, keyFeatures,howToUse,credits, contributors,license,email,  github, linkedin }) =>
    `<h1 align="center">
  <br>
  <br>
  ${title}
  <br>
</h1>

<h4 align="center">${description}</h4>


<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>


## Key Features
${keyFeatures}


## How To Use

${howToUse}


## Credits
${credits}


## License
${license}


---
## Contributors
${contributors}
  
  
## Questions
<p> If you have any questions you can reach me at ${email}, ${github}, or ${linkedin}</p>`
  


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
