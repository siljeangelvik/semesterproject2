/* @formatter:off */
import {API_BASE_URL } from "../main";
export const registerUrl = `${API_BASE_URL}/auth/register`;

let returnMessage = document.querySelector(".error");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const registerButton = document.getElementById("registerButton");

const isValidUserName = username => {
    let usernameRegex = /^[a-z0-9_æøå]{2,25}$/i;
    return usernameRegex.test(String(username));
};
const isValidEmail = email => {
    const emailRegex = /^[a-z0-9_æøå]{4,25}@(stud.)?noroff\.no$/i;
    return emailRegex.test(String(email));
};
const isValidPassword = password => {
    let passwordRegex = /^[a-z0-9_æøå]{8,25}$/i;
    return passwordRegex.test(String(password));
};

// validate input and create object from input value
function register() {
    let validUsername = username.value.trim();
    let validEmail = email.value.trim();
    let validPassword = password.value.trim();

    const registerDetails = {
        "name": validUsername,
        "email": validEmail,
        "password": validPassword,

    }

    if (!isValidUserName(validUsername)) {
        console.log("wrong username");
        returnMessage.innerHTML = `Invalid username`;
        return false;
    }
    if (!isValidEmail(validEmail)) {
        console.log("wrong email");
        returnMessage.innerHTML = `Invalid email`;
        return false;
    }
    if (!isValidPassword(validPassword)) {
        console.log("wrong pass");
        returnMessage.innerHTML = `Invalid password`;
        return false;
    }

    if (isValidUserName(validUsername) && isValidEmail(validEmail) && isValidPassword(validPassword)) {
        console.log("User registered: " + registerDetails);
        registerUser(registerUrl, registerDetails);
    }
}

// send input values using POST method and redirect to login page
async function registerUser(registerUrl, userData) {
    console.log(userData);
    try {
        const postData = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(registerUrl, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        if (!response.ok) {
            console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error();
        }

        window.alert("You successfully registered a new account!");
        window.location = '../login/index.html';


    } catch (error) {
        console.log(error);
    }
}

// loginButton onclick = run register validation function
registerButton.addEventListener("click", function(e){
    e.preventDefault();
    register();
});