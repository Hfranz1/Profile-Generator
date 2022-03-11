const Manager = require('../lib/Manager');

Test('creates an Manager object', () => {
    const manager = new Manager('name', 90, 'email', 50);

    expect(manager.officNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('name', 90, 'email',);

    expect(manager.getRole()).toEqual("Manager");
});