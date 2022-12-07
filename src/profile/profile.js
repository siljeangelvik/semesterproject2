import { profileButton, profileUsername, profileAvatar, profileCredits, profileEmail } from "../main";

// update profile avatar
export const loadFile = (event) => profileAvatar.src = URL.createObjectURL(event.target.files[0]);

profileUsername.innerHTML = localStorage.getItem('name');
profileEmail.innerHTML = localStorage.getItem('email');
profileCredits.innerHTML = localStorage.getItem('credits');

console.log(profileButton.value);