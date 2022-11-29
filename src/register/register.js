import { registerUrl, registerUsername, registerEmail, registerPassword, registerButton, returnMessage } from "../main";

const isValidUserName = registerUsername => {
    let usernameRegex = /^[a-z0-9_æøå]{2,25}$/i;
    return usernameRegex.test(String(registerUsername));
};
const isValidEmail = registerEmail => {
    const emailRegex = /^[a-z0-9_æøå]{4,25}@(stud.)?noroff\.no$/i;
    return emailRegex.test(String(registerEmail));
};
const isValidPassword = registerPassword => {
    let passwordRegex = /^[a-z0-9_æøå]{8,25}$/i;
    return passwordRegex.test(String(registerPassword));
};

function register() {
    let validUsername = registerUsername.value.trim();
    let validEmail = registerEmail.value.trim();
    let validPassword = registerPassword.value.trim();

    const userDetails = {
        "name": validUsername,
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
        console.log("Logged In");
        registerUser(registerUrl, userDetails);
        // window.location="index.html"
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
            window.location = '../login/index.html';
        } else {
            returnMessage.innerHTML = json.error();
        }
    } catch (error) {
        console.log(error);
    }
}