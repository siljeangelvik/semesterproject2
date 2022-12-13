/* @formatter:off */
import {API_BASE_URL} from "../main";
export const API_REGISTER_URL = `${API_BASE_URL}/auth/register`;

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
        registerUser(API_REGISTER_URL, registerDetails);
    }
}

// send input values using POST method and redirect to login page
async function registerUser(API_REGISTER_URL, userData) {
    console.log(userData);
    try {
        const postData = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(API_REGISTER_URL, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        if (!response.ok) {
            console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error();
        }


        window.alert(`
        You successfully registered a new account!\n
        We are escorting you to the login page,
        so that you can get to use your new account immediately! 
        `);
        window.location = '../login/index.html';

        /*
        document.getElementById("logout-modal").innerHTML = `
    <div class="fixed z-10 overflow-auto top-0 w-full left-0">
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-900 opacity-75"></div>
                <span class="absolute sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <form id="form"
                      class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                      aria-labelledby="modal-headline">

                    <div class=" bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 py-4 px-8 text-white text-xl border-b border-grey-lighter">
                        Welcome to Auction App!
                    </div>

                    <div class="bg-white px-2 pt-5 pb-2 sm:p-6 sm:pb-4">                                         
                        <div class="mb-4">
                            <p>Successfully created a new account!</p>                        
                        </div>
                    </div>
                    
                    <div class="bg-gray-200 px-4 py-3 text-right">
                        <button id="modalCloseButton" type="button" onclick="document.getElementById('logout-modal').classList.add('hidden')"
                                class="py-2 px-4 text-purple-800 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 text-white rounded-full mr-2">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                        <button id="modalLogoutButton" type="submit"
                                class="py-2 px-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-full hover:bg-emerald-500 mr-2">
                            <i class="fas fa-plus"></i> Sign in with your new account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
`;
        */

    } catch (error) {
        console.log(error);
    }
}

// loginButton onclick = run register validation function
registerButton.addEventListener("click", function(e){
    e.preventDefault();
    register();
});

