/* formatter:off */
import {API_BASE_URL } from "../main";
let updateAvatarUrl = `${API_BASE_URL}/profiles/${localStorage.getItem("name")}/media`;

const returnMessage = document.querySelector(".error");
let avatarInput = document.getElementById("profileAvatarInput").value;
let avatarImage = ``;

// function update avatar endpoint to a new avatar
function updateAvatar(newAvatar) {
    localStorage.setItem("avatar", newAvatar)
    console.log("NEW PIC")
    console.log(newAvatar);
}

// function if avatar-input-value is empty, display error message // valid input-value: runs updateAvatarAPI function
document.getElementById("updateAvatarButton").addEventListener('click', () => {
    if (!avatarInput) {
        returnMessage.innerHTML = "You need to enter a valid URL";
        avatarInput.clear;
    }
    returnMessage.remove();
    avatarImage = avatarInput;

    updateAvatarAPI(updateAvatarUrl, avatarImage);
   // window.location.reload();
    console.log("AVATAR IMG");
    console.log(avatarImage);
})

// gets data from API and sets the content of #result div
async function updateAvatarAPI(updateAvatarUrl, avatar) {
    try {
        const putData = {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "content-Type": "application/json",
            },
            body: JSON.stringify({avatar}),
        };

        const response = await fetch(updateAvatarUrl, putData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        if (!response.ok) {
            console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error();
        }

        console.log("OK");
        console.log(response.status);

        updateAvatar(json.avatar);
    } catch (error) {
        console.log(error);
    }
}

// display user details saved in local storage
document.getElementById("profileUsername").innerHTML = localStorage.getItem('name');
document.getElementById("profileEmail").innerHTML = localStorage.getItem('email');
document.getElementById("profileCredits").innerHTML = localStorage.getItem('credits');
document.getElementById("profileAvatar").src = localStorage.getItem('avatar');
document.querySelector('.avatarCurrent').innerHTML = localStorage.getItem('avatar');

// toggle box classList 'hidden'
document.querySelector('.openAvatarChange').addEventListener('click', () => {
    document.querySelector('.changeAvatarBox').classList.remove('hidden');
});
document.getElementById("avatarUpdateCloseButton").addEventListener('click', () => {
    document.querySelector('.changeAvatarBox').classList.add('hidden');
})