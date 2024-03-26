const keylogger = document.querySelector("#keylogger");

document.addEventListener("keydown", function (event) {
  // Vérifie si la touche pressée est une lettre de l'alphabet
  if (
    (event.key >= "A" && event.key <= "Z") || // lettres majuscules
    (event.key >= "a" && event.key <= "z") // lettres minuscules
  ) {
    // Vérifie si le focus est dans le textarea
    if (document.activeElement === keylogger) {
      const lettre = event.key;
      keylogger.value += lettre; // Ajoute la lettre
    } else {
      const lettre = event.key;
      keylogger.value += lettre; // Ajoute la lettre même si le focus n'est pas sur le textarea
    }
  } else if (event.key === "Backspace") {
    // Vérifie si la touche pressée est Backspace
    if (
      document.activeElement === keylogger ||
      document.activeElement.tagName !== "TEXTAREA"
    ) {
      // Supprime la dernière lettre du contenu du textarea
      keylogger.value = keylogger.value.slice(0, -1);
    }
  } else {
    // Empêche l'action par défaut pour toutes les touches non autorisées
    event.preventDefault();
  }
});
