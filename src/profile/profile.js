import {profileAvatar, profileUsername, profileEmail, profileCredits, profileUser} from "../main";

// update profile avatar
const loadFile = function (event) {
    profileAvatar.src = URL.createObjectURL(event.target.files[0]);
};

profileUser.innerHTML = localStorage.getItem('username');
profileUsername.innerHTML = localStorage.getItem('username');
profileEmail.innerHTML = localStorage.getItem('email');
profileCredits.innerHTML = localStorage.getItem('credits');