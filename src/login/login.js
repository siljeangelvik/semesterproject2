/* @formatter:off */
import { loginUrl } from "../main";
import { formSubmitButton } from "../register/register";
const returnMessage = document.querySelectorAll(".error");
import {email, password} from "../register/register";


export const isValidEmail = email => {
    const emailRegex = /^[a-z0-9_æøå]{4,25}@(stud.)?noroff\.no$/i;
    return emailRegex.test(String(email));
};
export const isValidPassword = password => {
    let passwordRegex = /^[a-z0-9_æøå]{8,25}$/i;
    return passwordRegex.test(String(password));
};

function login() {
    let validEmail = email.value.trim();
    let validPassword = password.value.trim();

    const loginDetails = {
        "email": email,
        "password": password
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
        window.location = '../index.html';
    }
}

formSubmitButton.addEventListener("click", function(e){
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
        console.log(`response = ${response}`);
        const json = await response.json();
        console.log(json);
        if (response.status === 200) {
            console.log("OK");
            localStorage.setItem("username", json.username);
            localStorage.setItem("email", json.email);
            localStorage.setItem("password", json.password);
            localStorage.setItem("avatar", json.avatar);
            window.location = '../index.html';
        }
        else {
            returnMessage.innerHTML = json.error();
        }
    } catch (error) {
        console.log(error);
    }
}