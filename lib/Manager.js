const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, officNumber) {
        super(name, id, email);
        this.officNumber = officNumber;
    }
    getOfficeNumber() {
        return this.officNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;