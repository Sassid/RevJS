// * Selectionner des élément HTML
// console.dir(document);

// ? avec une balise :
const title = document.getElementsByTagName("h1");
console.log(title);

// ? avec une classe:
const divMaClasse = document.getElementsByClassName("ma-classe");

// ? avec un ID :
const divMonID = document.getElementById("monID");

// * Récupérer un élément enfant :
console.log(divMaClasse);
const paragInsideDivMaClasse = divMaClasse[0].getElementsByTagName("p");

// * Récupérer un élément par sélecteur css :
const parag = document.querySelectorAll("p.ma-classe");

// * Modifier des élément HTML

// * Créer des élément HTML

const button = document.querySelector("#monBouton");

button.addEventListener("click", (e) => {
  const errorMessage = document.querySelector("#message");
  errorMessage.innerHTML = "";

  const emailInput = document.querySelector("#emailInput");
  const passwordInput = document.querySelector("#passwordInput");

  const email = emailInput.value;
  const password = passwordInput.value;
  // console.log(password)

  if (!emailCheck(email) || !passwordCheck(password)) {
    if (!emailCheck(email)) {
      displayError("invalid email");
    }

    if (!passwordCheck(password)) {
      displayError("invalid password");
    }

    return;
  }
});

function displayError(message) {
  const error = document.createElement("p");
  error.textContent = message;
  error.style.color = "red";
  document.querySelector("#message").append(error);
}

function emailCheck(email) {
  return email.includes("@") && email.includes(".");
}

function passwordCheck(password) {
  return password.length > 6;
}

const todoButton = document.querySelector("#todoButton");
const todoInput = document.querySelector("#todoInput");
const listContainer = document.querySelector("#listContainer");
const tasksJson = localStorage.getItem("tasks");
console.log(tasksJson);

const tasks = tasksJson ? JSON.parse(tasksJson) : [];

tasks.forEach((element) => {
  const displayTask = document.createElement("li");
  displayTask.textContent = `${element} (added on the ${new Date().toLocaleDateString(
    "fr",
    {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }
  )})`;
  listContainer.append(displayTask);
});

todoButton.addEventListener("click", (e) => {
  const task = todoInput.value;

  if (task == "") {
    displayError("veuillez entrer une tâche");
    return;
  }

  const displayTask = document.createElement("li");
  displayTask.textContent = `${task} (added on the ${new Date().toLocaleDateString(
    "fr",
    {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }
  )})`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Supprimer";
  deleteButton.addEventListener("click", () => {
    displayTask.remove()
    deleteButton.remove()
  })

  listContainer.append(displayTask);
  listContainer.append(deleteButton);

  tasks.push(task);
  const taskJson = JSON.stringify(tasks);
  localStorage.setItem("tasks", taskJson);
});
