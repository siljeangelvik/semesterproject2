/* @formatter:off */
import { registerUrl, returnMessage, registerButton } from "../main";


function register() {
    const userDetails = {
        "username": validUsername,
        "email": validEmail,
        "password": validPassword
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
        registerUser(registerUrl, userDetails);
        window.alert("You successfully registered a new account!");
        window.location="../login/index.html";
    }
}

registerButton.addEventListener("click", function(e){
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
            localStorage.setItem('accessToken', json.accessToken);
            window.location = '../login/index.html';
            window.alert('You successfully registered a new user');
        } else {
            returnMessage.innerHTML = json.error();
        }
    } catch (error) {
        console.log(error);
    }
}