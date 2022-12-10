/* formatter:off */
// profile page button // if you're not logged in, alert and redirect to sign in page
document.getElementById("profilePageButton").addEventListener('click', () => {
    if (!localStorage.getItem("accessToken")) {
        window.alert("You need to be logged in to view your profile page");
        window.location.href = '../login/index.html';
    }
    window.location.href;
});


