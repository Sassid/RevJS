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
    reponse.json().then((data) => {
        console.log(data);
        
        document.querySelector('#userEmail').textContent = data.data.user.email;
        document.querySelector('#userUsername').textContent = data.data.user.username;

        if(data.data.user.avatarUrl){
            document.querySelector('#userAvatar').src = data.data.user.avatarUrl;
        }
    })
})

document.querySelector('#avatarButton').addEventListener('click', (e) => {
    e.preventDefault()
    console.log('object')
    let url = document.querySelector('#avatarInput').value;

    fetch('http://localhost:3000/api/users/me', {
        method: 'PATCH',
        headers: {
            'Authorization': "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ avatarUrl: url })
    }).then((reponse) => {
        console.log(reponse);
        window.location.href = "/profile.html"
    })

})