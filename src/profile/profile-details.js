import {API_BASE_URL} from "../main";

export const API_PROFILE_URL = `${API_BASE_URL}/profiles/${localStorage.getItem("name")}`;

document.getElementById("profileUsername").innerHTML = localStorage.getItem('name');
document.getElementById("profileEmail").innerHTML = localStorage.getItem('email');
document.getElementById("profileAvatar").src = localStorage.getItem('avatar');
document.querySelector('.avatarCurrentURl').innerHTML = localStorage.getItem('avatar');

async function fetchProfileAccount(API_PROFILE_URL) {
    try {
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "content-Type": "application/json",
            },
        };
        const response = await fetch(API_PROFILE_URL, options);
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

        localStorage.setItem("credits", json.credits);
        document.getElementById("profileCredits").innerHTML = localStorage.getItem('credits');

        console.log(localStorage.getItem("credits"));

    } catch (error) {
        console.log(error);
    }
}

fetchProfileAccount(API_PROFILE_URL);