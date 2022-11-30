/* @formatter:off */
import {loginUrl, loginEmail, loginPassword, loginButton, returnMessage } from "../main";

const isValidEmail = registerEmail => {
    const emailRegex = /^[a-z0-9_æøå]{4,25}@(stud.)?noroff\.no$/i;
    return emailRegex.test(String(registerEmail));
};
const isValidPassword = loginPassword => {
    let passwordRegex = /^[a-z0-9_æøå]{8,25}$/i;
    return passwordRegex.test(String(loginPassword));
};

function login() {
    let validEmail = loginEmail.value.trim();
    let validPassword = loginPassword.value.trim();

    const userDetails = {
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
        console.log("Logged In");
        loginUser(loginUrl, userDetails).then(() => window.location = '../index.html');
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
            localStorage.setItem("credits", json.credits);
            localStorage.setItem("accessToken", json.accessToken);
            localStorage.setItem("avatar", json.avatar);
            window.location = "../index.html";
        } else {
            returnMessage.innerHTML = json.error();
        }
    } catch (error) {
        console.log(error);
    }
}

