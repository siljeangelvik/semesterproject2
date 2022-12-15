// import {API_BASE_URL} from "../main";


/*
// gets data from API and sets the content of #result div
async function getProfileListings(updateAvatarUrl, avatar) {
    try {
        const profileListings = {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "content-Type": "application/json",
            },
            body: JSON.stringify({avatar}),
        };

        const response = await fetch(`${API_BASE_URL}/profiles/${name}?_listings=true`, profileListings )
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
        await localStorage.setItem("avatar", json.avatar)
        localStorage.getItem("avatar");
        await updateAvatar(avatarImage);
    } catch (error) {
        console.log(error);
    }
}
*/