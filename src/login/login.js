/* @formatter:off */
import {API_BASE_URL } from "../main";

export const loginUrl = `${API_BASE_URL}/auth/login`;

const returnMessage = document.querySelector(".error");
const email = document.getElementById("email");
const password = document.getElementById("password");
export const loginButton = document.getElementById("loginButton");

const isValidEmail = email => {
    const emailRegex = /^[a-z0-9_æøå]{4,25}@(stud.)?noroff\.no$/i;
    return emailRegex.test(String(email));
};
const isValidPassword = password => {
    let passwordRegex = /^[a-z0-9_æøå]{8,25}$/i;
    return passwordRegex.test(String(password));
};

// validate input and create object from input value
function login() {
    let validEmail = email.value.trim();
    let validPassword = password.value.trim();

    const loginDetails = {
        "email": validEmail,
        "password": validPassword,
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
    if (isValidEmail(validEmail) && isValidPassword(validPassword)) {
        console.log("Successful login");
        loginUser(loginUrl, loginDetails);
        console.log(loginDetails);
       // window.location = '../index.html';
    }
}

// send input values using POST method and save in localStorage
async function loginUser(loginUrl, userData) {
    console.log('USERDATA:' +  userData);
    try {
        const postData = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };

        const response = await fetch(loginUrl, postData);
        // console.log(`response = ${response}`);
        const json = await response.json();
        // console.log(json);
        if (!response.ok) {
            console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error();
        }
        console.log("OK");
        console.log(response.status);
        localStorage.setItem("name", json.name);
        localStorage.setItem("email", json.email);
        localStorage.setItem("credits", json.credits);
        localStorage.setItem("accessToken", json.accessToken);
       window.location = '../index.html';

    } catch (error) {
        console.log(error);
    }
}

// loginButton onclick = run login validation function
loginButton.addEventListener("click", function(e){
    e.preventDefault();
    login();
});


