const button = document.querySelector("button");
const compteur = document.querySelector("#compteur");
// "#" sélectionnez correctement l'élément <p> ayant l'identifiant compteur
//syntaxe JavaScript standard pour sélectionner des éléments par leur ID dans le DOM

function CLICK() {
  // Récupération du contenu actuel du paragraphe et conversion en nombre
  let addOne = parseInt(compteur.textContent);
  // Incrémentation du nombre de clics
  addOne++;
  // Mise à jour du contenu du paragraphe avec le nouveau nombre de clics
  compteur.textContent = addOne;
}

button.onclick = function () {
  CLICK();
};
