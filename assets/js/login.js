document.querySelector("#loginSubmit").addEventListener("click", (e) => {
  e.preventDefault()
  console.log("object")
  document.querySelector("#loginEmailError").textContent = "";
  document.querySelector("#loginPasswordError").textContent = "";

  const emailInput = document.querySelector("#loginEmailInput").value;
  const passwordInput = document.querySelector("#loginPasswordInput").value;
  console.log(emailInput, passwordInput)
  const isEmailValid = emailInput.includes("@");
  const isPasswordValid = passwordInput.length >= 8;

  if (!isEmailValid || !isPasswordValid) {
    if (!isEmailValid) {
      document.querySelector("#loginEmailError").textContent =
        "email invalide";
    }
    if (!isPasswordValid) {
      document.querySelector("#loginPasswordError").textContent =
        "mot de passe invalide";
    }
  
    return
  }

  const User = {
    email: emailInput,
    password: passwordInput,
  }

  fetch('http://localhost:3000/api/users/login', {
    method: "POST",
    body: JSON.stringify(User),
    headers: {
        "Content-type": 'application/json'
    }
  }).then((response) => {
    console.log(response);
    console.log('object')
    response.json().then((data) => {
      localStorage.setItem('access_token', data.data.access_token)
      window.location.href = "/profile.html"
    })
  }).catch((error) => {
    console.log(error)
    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = "oops ! ";
  })
});
