let btn = document.createElement("BUTTON"); // Créer un élément <button>
let t = document.createTextNode("JS button CLICK ME"); // Créer un noeud textuel

let bouton = document.querySelector("button");

btn.appendChild(t); // Ajouter le texte au bouton
document.body.appendChild(btn); // Ajoute la balise <button> à la balise <body>

function afficherId() {
  console.log("ID du bouton : " + bouton.id);
}

bouton.onclick = function () {
  afficherId();
};

btn.onclick = function () {
  afficherId();
};
