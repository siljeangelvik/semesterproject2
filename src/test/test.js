/* @formatter:off */
import { API_BASE_URL } from "../main";
let loginURL = `${API_BASE_URL}/social/auth/login`;
const returnMessage = document.querySelector(".error");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

const isValidEmail = email => {
    const emailRegex = /^[a-z0-9_æøå]{4,25}@(stud.)?noroff\.no$/i;
    return emailRegex.test(String(email));
};
const isValidPassword = password => {
    let passwordRegex = /^[a-z0-9_æøå]{8,25}$/i;
    return passwordRegex.test(String(password));
};


function login() {
    let validEmail = email.value.trim();
    let validPassword = password.value.trim();
    console.log(validEmail + validPassword);

    const loginDetails = {
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
        loginUser(loginURL, loginDetails);
        console.log(loginDetails);
        //  window.location = '../index.html';
    }
}


async function loginUser(loginURL, userData) {
    console.log('USERDATA:' +  userData);
    try {
        const postData = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };

        const response = await fetch(loginURL, postData);
        console.log(`response = ${response}`);
        const json = await response.json();
        console.log(json);
        if (response.status === 200) {
            console.log("OK");
            console.log(response.status);
            localStorage.getItem("email");
            localStorage.getItem("password");
            // localStorage.setItem("avatar", json.avatar);
            // window.location = '../login/index.html';
        } else {
            console.log("SOMETHING IS WRONG")
        }
    } catch (error) {
        console.log(error);
    }
}

// loginButton onclick = run login function
loginButton.addEventListener("click", function(e){
    e.preventDefault();
    login();
});