"use strict";
document.getElementById('emailField')?.focus();
const users = [
    {
        name: 'John',
        email: 'john@user.com',
        password: 'johnjohn123'
    },
    {
        name: 'Mary',
        email: 'mary@user.com',
        password: 'marymary123'
    },
    {
        name: 'Bob',
        email: 'bob@user.com',
        password: 'bobbob123'
    }
];
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        login();
    }
    ;
});
console.log(users);
function login() {
    let email = document.getElementById('emailField').value;
    let password = document.getElementById('passwordField').value;
    let user = users.find(u => u.email === email);
    if (user) {
        if (user.password === password) {
            document.body.innerHTML = `Welcome, ${user.name}!`;
            document.body.style.fontSize = '3rem';
            document.body.style.fontWeight = 'bolder';
        }
        else {
            alert('Wrong password');
            document.getElementById('passwordField').value = "";
            document.getElementById('passwordField')?.focus();
        }
    }
    else {
        alert("User can't be found");
    }
}
