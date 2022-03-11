const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('name', 90, 'email', 'school');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('name', 90, 'email', 'school');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('gets role of employee', () => {
    const intern = new Intern('name', 90, 'email', 'school');

    expect(intern.getRole()).toEqual("Intern");
})