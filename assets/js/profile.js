const token = localStorage.getItem('access_token');

if (!token) {
    window.location.href = "/profile.html";
}

fetch('http://localhost:3000/api/users/me', {
    method: "POST",
    headers: {
        'Authorization': "Bearer " + token
    }
}).then((reponse) => {
    reponse.json().then((donner) => {
        console.log(donner);
        
        document.querySelector('#userEmail').textContent = donner.data.user.email;
        document.querySelector('#userUsername').textContent = donner.data.user.username;

        if(donner.data.user.avatarUrl){
            document.querySelector('#user-avatar').src = donner.data.user.avatarUrl;
        }
    })
})