/* @formatter:off */
import {loginUrl, returnMessage, loginButton, validEmail, validPassword, validUsername } from "../main";

function login() {

    const userDetails = {
        "username": validUsername,
        "email": validEmail,
        "password": validPassword
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
        loginUser(loginUrl, userDetails);
    }
}

loginButton.addEventListener("click", function(e){
    e.preventDefault();
    login();
});

async function loginUser(loginUrl, userData) {
    console.log(userData);
    try {
        const postData = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(loginUrl, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        if (response.status === 200) {
            console.log("OK");
            localStorage.setItem("username", json.username);
            localStorage.setItem("email", json.email);
            localStorage.setItem("accessToken", json.accessToken);
            localStorage.setItem("credits", json.credits);
            window.location = "../index.html";
        }
        else {
            returnMessage.innerHTML = json.error();
        }
    } catch (error) {
        console.log(error);
    }
}

