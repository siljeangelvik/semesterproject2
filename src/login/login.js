/* @formatter:off */
import {API_BASE_URL } from "../main";

export const loginUrl = `${API_BASE_URL}/auth/login`;

export const returnMessage = document.querySelector(".error");
const email = document.getElementById("email");
const password = document.getElementById("password");
export const loginButton = document.getElementById("loginButton");

// Validation for inputs on login page
const isValidEmail = email => {
    const emailRegex = /^[a-z0-9_æøå]{4,25}@(stud.)?noroff\.no$/i;
    return emailRegex.test(String(email));
};
const isValidPassword = password => {
    let passwordRegex = /^[a-z0-9_æøå]{8,25}$/i;
    return passwordRegex.test(String(password));
};

// Validate and send inputs to API
function login() {
    let validEmail = email.value.trim();
    let validPassword = password.value.trim();

    const loginDetails = {
        "email": validEmail,
        "password": validPassword,
    }

    if (!isValidEmail(validEmail)) {
        returnMessage.innerHTML = `Invalid email`;
        return false;
    }
    if (!isValidPassword(validPassword)) {
        returnMessage.innerHTML = `Invalid password`;
        return false;
    }
    if (isValidEmail(validEmail) && isValidPassword(validPassword)) {
        loginUser(loginUrl, loginDetails);
        console.log(loginDetails);
    }
}

// Fetch() using POST method
async function loginUser(loginUrl, userData) {
    // console.log(userData);
    try {
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };

        const response = await fetch(loginUrl, options);
        // console.log(`response = ${response}`);
        const json = await response.json();
        // console.log(json);
        if (!response.ok) {
            console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error();
        }
        // console.log(response.status);
        localStorage.setItem("name", json.name);
        localStorage.setItem("email", json.email);
        localStorage.setItem("credits", json.credits);
        localStorage.setItem("accessToken", json.accessToken);
        localStorage.setItem("avatar", json.avatar);
        window.location = '/';

    } catch (error) {
        returnMessage.innerHTML = `${json.errors[0].message}`;
        // console.log(error);
    }
}

// Login form button
loginButton.addEventListener("click", function(e){
    e.preventDefault();
    login();
});