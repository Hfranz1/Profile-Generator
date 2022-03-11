function generateHTML(data) {
    console.log(data)
    return generateTeamPage
};


const generateManager = function (manager) {
    return
    `<div class="col-4 mt-4">
        <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
            <div class="card-header p-2 mb-1 bg-sucess text-white">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="fas fa-mug-hot"></i>
            </div>
            <div class="card-body">
               <ul class="list-group list-group-flash">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`
        ;
}

//Engineer HTML page
const generateEngineer = function (engineer) {
    return
    `<div class="col-4 mt-4">
        <div class="card h-100 shadow p-3 mb-5 bg-body rounded">
            <div class="card-header p-2 mb-1 bg-success text-white">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="fas fa-laptop"</i>
            </div>
            <div class="card-body">
            <ul class=list-group list-group=flash">
                <ul class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li s>
            </div>
        </div>
    </div>`

}

//Intern HTML page
const generateIntern = function (intern) {
    return
    `<div class="col-4 mt-4">
        <div class="card h-100 shadow p-3 mb-5 bg-sucess text-white">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="fas fa-user-graduate</i>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flash">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">school: ${intern.school}</li>
                <ul>
            </div>
        </div>
    </div>`

};

//HTML push
generateHTML = data => {


    pageArray = []

    for (let i = 0; i < data.length; i++) {
        let employee = data[i];
        let role = employee.getRole();



        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }


        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }


        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }

    }


    const employeeCards = pageArray.join('')


    const generateTeam = generateTeamPage(employeeCards)
    return generateTeam
}


const generateTeamPage = function (employeeCards) {
    return
    `<!DOCTYPE html >
        <html lang="en">
            <head>
                <meta charset="UFT-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                    <script src="https://kit.fontawesome.com/dc872b6565.js" crossorigin="anonymous"></script>
                        <title>My Team</title>
                        <link rel="stylesheet" href="style.css">
                        </head>
                        <body>
                            <header>
                                <nav class="navbar .bg-primary.bg-gradient" id="navbar">
                                    <span class="navbar-brand mb-0 h1 w-100 text-center p-3 mb-2 bg-warning text-dark" id="navbar-text">My Team</span>
                                </nav>
                            </header>
                            <main>
                                <div class="container">
                                    <div class="row justify-content-center .bg-secondary.bg-gradient" id="team-cards">
                                        ${employeeCards}
                                    </div>
                                </div>
                            </main>
                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                        </body>
                    </html>`

}

module.exports = generateHTML;
