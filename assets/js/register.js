document.querySelector("#registerSubmit").addEventListener("click", (e) => {
    e.preventDefault()
  document.querySelector("#registerEmailError").textContent = "";
  document.querySelector("#registerPasswordError").textContent = "";
  document.querySelector("#registerUsernameError").textContent = "";

  const emailInput = document.querySelector("#registerEmailInput").value;
  const passwordInput = document.querySelector("#registerPasswordInput").value;
  const usernameInput = document.querySelector("#registerUsernameInput").value;

  const isEmailValid = emailInput.includes("@");
  const isPasswordValid = passwordInput.length >= 8;
  const isUsernameValid = usernameInput.length >= 1;

  if (!isEmailValid || !isPasswordValid || !isUsernameValid) {
    if (!isEmailValid) {
      document.querySelector("#registerEmailError").textContent =
        "email invalide";
    }
    if (!isPasswordValid) {
      document.querySelector("#registerPasswordError").textContent =
        "mot de passe invalide";
    }
    if (!isUsernameValid) {
      document.querySelector("#registerUsernameError").textContent =
        "pseudo obligatoire";
    }
    return
  }

  const newUser = {
    email: emailInput,
    password: passwordInput,
    username: usernameInput,
  }

  fetch('http://localhost:3000/api/users/register', {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
        "Content-type": 'application/json'
    }
  }).then((response) => {
    console.log(response);
    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = "inscription réussie";
    document.querySelector("#registerSection").prepend(messageParagraph);
  }).catch((error) => {
    console.log(error)
    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = "oops ! ";
  })
});
