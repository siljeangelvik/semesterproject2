/* @formatter:off */
import { registerUrl } from "../main";

const returnMessage = document.querySelectorAll(".error");
export const username = document.getElementById("username");
export const email = document.getElementById("email");
export const password = document.getElementById("password");
export const formSubmitButton = document.getElementById("formSubmit");


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

function register() {
    let validUsername = username.value.trim();
    let validEmail = email.value.trim();
    let validPassword = password.value.trim();

    const registerDetails = {
        "username": username,
        "email": email,
        "password": password
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
        console.log("Registered User");
        registerUser(registerUrl, registerDetails);
        window.alert("You successfully registered a new account!");
        // window.location="../login/index.html";
    }
}

formSubmitButton.addEventListener("click", function(e){
    e.preventDefault();
    register();
});

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
        if (response.status === 200) {
            // localStorage.setItem('credits', json.credits);
            localStorage.setItem('accessToken', json.getToken());
            window.location = '../login/index.html';
            window.alert('You successfully registered a new user');
        } else {
            returnMessage.innerHTML = "Something is wrong";
        }
    } catch (error) {
        console.log(error);
    }
}