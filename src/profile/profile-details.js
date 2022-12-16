import {API_BASE_URL} from "../main";

export const API_PROFILE_URL = `${API_BASE_URL}/profiles/${localStorage.getItem("name")}`;

document.title = localStorage.getItem('name');

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
        // console.log(response);
        const json = await response.json();
        // console.log(json);
        if (!response.ok) {
            // console.log(json.errors[0].message);
            returnMessage.innerHTML = `${json.errors[0].message}`;
            throw new Error();
        }
        // console.log(response.status);

        localStorage.setItem("credits", json.credits);
        localStorage.setItem("wins", json.wins);
        localStorage.setItem("listings", json.listings);

        document.getElementById("profileCredits").innerHTML = localStorage.getItem('credits');
        document.getElementById("profileWins").innerHTML += `ID of bid won:  ${localStorage.getItem("wins")}`;
        document.getElementById("profileListingsAmount").innerHTML = `${json["_count"].listings}`;
    } catch (error) {
        returnMessage.log(json.errors[0].message);
        // console.log(error);
    }
}

fetchProfileAccount(API_PROFILE_URL);