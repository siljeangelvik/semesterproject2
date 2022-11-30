import { logoutButton } from "./main";

console.log('Logout.js');

export function logout() {
    this.username = null;
    this.accessToken = null;
    localStorage.clear();
    console.log('localStorage removed');
}
/*
logoutButton.forEach(el => {
    el.addEventListener('click', function () {
        el.preventDefault();
        logout();
        console.log('Logout button clicked');
    })
})*/