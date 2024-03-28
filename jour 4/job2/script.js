function jsonValueKey(jsonString, key) {
  // Convertir la chaîne JSON en objet JavaScript
  const jsonObject = JSON.parse(jsonString);

  // Vérifier si la clé existe dans l'objet JSON
  if (jsonObject.hasOwnProperty(key)) {
    // Renvoyer la valeur associée à la clé (en convertissant la première lettre en majuscule)
    return jsonObject[key][0].toUpperCase() + jsonObject[key].substring(1);
  } else {
    // Si la clé n'existe pas, renvoyer une chaîne vide
    return "";
  }
}

const jsonString = `{
    "name": "x",
    "address": "xx",
    "city": "marseille not holywood",
    "nb_staff": "11",
    "creation": "2019"
}`;

const key = "city";
const value = jsonValueKey(jsonString, key);
console.log(value); // Output: "Marseille"

{
  const newParagraph = document.createElement("p");
  newParagraph.textContent = value; // Remplit le paragraphe avec le contenu du fichier
  document.body.appendChild(newParagraph); // Ajoute le paragraphe au corps de la page
}
