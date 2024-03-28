const button = document.querySelector("#button");

button.addEventListener("click", function () {
  // code exécuter lorsque le bouton est cliqué
  fetch("expression.txt")
    .then((response) => response.text()) // Convertit la réponse en texte
    .then((data) => {
      const newParagraph = document.createElement("p");
      newParagraph.textContent = data; // Remplit le paragraphe avec le contenu du fichier
      document.body.appendChild(newParagraph); // Ajoute le paragraphe au corps de la page
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération du fichier :", error)
    );
});
