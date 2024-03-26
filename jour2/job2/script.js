// Sélection du bouton par son ID
let button = document.getElementById("button");

let nouvelArticle = document.createElement("article");
nouvelArticle.textContent =
  "“L'important n'est pas la chute, mais l'atterrissage.”";

// Ajout de l'article au corps du document
document.body.appendChild(nouvelArticle);

function showhide(element) {
  if (element.style.display === "none" || !element.style.display) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

afficherArticle = function afficherArticle() {
  showhide(nouvelArticle);
};

button.onclick = function () {
  afficherArticle();
};
