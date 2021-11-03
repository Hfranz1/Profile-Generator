const inquirer = require('inquirer')
function creatmanager() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "what is your first name?"
        },

    ]).then(function (answer) {
        console.log(answer)
    })
}
creatmanager();