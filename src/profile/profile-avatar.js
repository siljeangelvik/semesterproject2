import {API_BASE_URL} from "../main";

let updateAvatarUrl = `${API_BASE_URL}/profiles/${localStorage.getItem("name")}/media`;

const returnMessage = document.querySelector(".error");
let avatarInput = document.getElementById("profileAvatarInput");
let avatarImage = ``;

// function update avatar endpoint to a new avatar
async function updateAvatar() {
    document.getElementById("profileAvatar").src = localStorage.getItem('avatar');
    document.querySelector('.avatarCurrentURl').innerHTML = localStorage.getItem('avatar');
}

// function if avatar-input-value is empty, display error message // valid input-value: runs updateAvatarAPI function
document.getElementById("updateAvatarButton").addEventListener('click', async () => {
    if (!avatarInput.value) {
        returnMessage.innerHTML = "You need to enter a valid URL";
        avatarInput.value = '';
        return;
    }

    avatarImage = avatarInput.value;

    await updateAvatarAPI(updateAvatarUrl, avatarImage);
    document.querySelector(".changeAvatarBox").classList.add('hidden');
    // console.log(avatarImage);
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
        // console.log(response);
        const json = await response.json();
        // console.log(json);
        if (!response.ok) {
            // console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error();
        }
        // console.log(response.status);
        await localStorage.setItem("avatar", json.avatar)
        localStorage.getItem("avatar");
        await updateAvatar(avatarImage);
    } catch (error) {
        returnMessage.innerHTML = `${json.errors[0].message}`;
        // console.log(error);
    }
}

// Element with class "openAvatarChange" display box on click
document.querySelector('.openAvatarChange').addEventListener('click', () => {
    document.querySelector('.changeAvatarBox').classList.remove('hidden');
});
// Element with class "avatarUpdateCloseButton" close box on click
document.getElementById("avatarUpdateCloseButton").addEventListener('click', () => {
    document.querySelector('.changeAvatarBox').classList.add('hidden');
})
