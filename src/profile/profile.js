import { profileUsername, profileUsernameTop, profileAvatar, profileCredits, profileEmail } from "../main";

// update profile avatar
const loadFile = (event) => profileAvatar.src = URL.createObjectURL(event.target.files[0]);

profileUsernameTop.innerHTML = localStorage.getItem('username');
//profileUsername.innerHTML = localStorage.getItem('username');
profileEmail.innerHTML = localStorage.getItem('email');
profileCredits.innerHTML = localStorage.getItem('credits');