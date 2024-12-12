console.log("yo!");

// * With Hoisting (global scope)
function f(x) {
    console.log(2 * x + 4);
}

// * Without hoisting (sequential)
let g = function (x) {
    console.log(2 * x + 4);
}

// * Arrow function
let h = (x) => {
    console.log(2 * x + 4)
}

// f(2);

function add(a, b) {
    return a + b;
}

// console.log(add(2, 3))

// Exercice 1:
// Fonction qui réçoit un nombre, 
// et qui affiche dans la console la table de multiplication du nombre

function multiTable(x) {
    for (let i = 0; i <= 10; i++) {
        // console.log(i * x);
        console.log(`${x} x ${i} = ${x * i}`);
    }
}

multiTable(2);

// Exercice 2:
// Fonction qui reçoit un tableau de nombres
// Retourne la moyenne des nombres

function average(array) {
    sum = 0;
    array.forEach(element => {
        sum = sum + element;
    });
    return sum / array.length;
}

console.log(average([12,15,17,20]));

function calculMoyenne(tableau) {
    const somme = tableau.reduce((previous, current) => previous + current);
    return somme / tableau.length;
}
console.log(calculMoyenne([12, 16, 17]));

const tableau = [1, 2, 3, 4, 5];

function monForEach(tableau, callback) {
    for (let i = 0; i < tableau.length; i++) {
        callback(tableau[i], i)
    }
}
monForEach(tableau, (el, position) => {
    console.log(el);
})

function tree(x) {
    let star = "*"
    for (let i = 0; i <= x; i++) {
        console.log(star);
        star += "*";
    }
}

tree(10);

function sapin(a) {
    let etoile = "*";

    for (let index = 0; index < a; index++) {
      let ligne = "";
      for(let j = 0; j < a - index; j++){
          ligne += " "
      }
      console.log(ligne + etoile);
      etoile = etoile + "**";
    }
  }
  sapin(15);

