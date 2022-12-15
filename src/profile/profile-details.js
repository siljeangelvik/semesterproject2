
// display user details saved in local storage
document.getElementById("profileUsername").innerHTML = localStorage.getItem('name');
document.getElementById("profileEmail").innerHTML = localStorage.getItem('email');
document.getElementById("profileCredits").innerHTML = localStorage.getItem('credits');
document.getElementById("profileAvatar").src = localStorage.getItem('avatar');
document.querySelector('.avatarCurrentURl').innerHTML = localStorage.getItem('avatar');



