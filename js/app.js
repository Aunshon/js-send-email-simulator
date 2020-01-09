//variables
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let sent = document.getElementById('sent');
let spinner = document.getElementById('spinner');
let sendBtn = document.getElementById('sendBtn');
let resetBtn = document.getElementById('resetBtn');
let emailform = document.getElementById('email-form');
let loaders = document.getElementById('loaders');

//Event listener
document.addEventListener('DOMContentLoaded', init);
email.addEventListener('blur', vallidateData);
subject.addEventListener('blur', vallidateData);
message.addEventListener('blur', vallidateData);
resetBtn.addEventListener('click', resetall);
emailform.addEventListener('submit', sumitData);

//function
function init() {
    sendBtn.disabled = true;
}

function vallidateData() {
    validateThis(this);
    if (this.type === 'email') {
        validateEmail(this);
    }
}

function validateThis(field) {
    var error;
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = "red";
        field.classList.add('error');
        sendBtn.disabled = true;
    }
    error = document.querySelectorAll('.error');
    console.log(error.length);
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        if (error.length === 0) {
            sendBtn.disabled = false;
        }
    }
}

function validateEmail(field) {
    var email = field.value;

    if (email.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = "red";
        field.classList.add('error');
        sendBtn.disabled = true;
    }
}

function resetall() {
    emailform.reset();
}

function sumitData(e) {
    e.preventDefault();
    spinner.style.display = 'block';
    setTimeout(function() {
        spinner.style.display = 'none';
        var send = document.createElement('img');
        send.src = 'img/mail.gif';
        send.style.display = 'block';

        loaders.appendChild(send);
        setTimeout(function() {
            loaders.removeChild(send);
            emailform.reset();
            sendBtn.disabled = true;
        }, 5000);
    }, 2000);
}