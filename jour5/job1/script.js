$(document).ready(function () {
  // Supprimez l'écouteur d'événement submit existant
  $("#mon-formulaire").off("submit");

  // Ajoutez des écouteurs d'événement input pour chaque champ de formulaire
  $(
    "#Nom, #prenom, #mail, #codepostal, #pseudo, #password, #passwordConfirmation"
  ).on("input", function () {
    validateForm();
  });

  // Écouteur d'événement submit
  $("#mon-formulaire").submit(function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Vérifiez si le formulaire est valide avant de soumettre
    if (validateForm()) {
      // Le formulaire est valide, soumettez-le
      this.submit();
    } else {
      // Le formulaire n'est pas valide, ne soumettez pas
      // Affichez un message ou effectuez une autre action si nécessaire
      console.log(
        "Le formulaire n'est pas valide. Veuillez corriger les erreurs."
      );
    }
  });
});

// Fonction pour valider le formulaire
function validateForm() {
  // Vérification asynchrone du nom
  let nom = $("#Nom").val();
  if (!nom) {
    $("#nomError").text("Veuillez saisir votre nom.");
  } else {
    $("#nomError").text("");
  }

  // Vérification asynchrone du prénom
  let prenom = $("#prenom").val();
  if (!prenom) {
    $("#prenomError").text("Veuillez saisir votre prénom.");
  } else {
    $("#prenomError").text("");
  }

  // Vérification asynchrone du nom d'utilisateur ou pseudo
  let pseudo = $("#pseudo").val();
  if (!pseudo) {
    $("#pseudoError").text(
      "Veuillez saisir votre nom d'utilisateur ou pseudo."
    );
  } else {
    $("#pseudoError").text("");
  }

  // Vérification asynchrone de l'email
  let email = $("#mail").val();
  if (!email) {
    $("#mailError").text("Veuillez saisir votre adresse email.");
  } else if (!validateEmail(email)) {
    $("#mailError").text("Veuillez saisir une adresse email valide.");
  } else {
    $("#mailError").text("");
  }

  // Vérification asynchrone du code postal
  let codepostal = $("#codepostal").val();
  if (!codepostal) {
    $("#codepostalError").text("Veuillez saisir votre code postal.");
  } else if (!validatePostalCode(codepostal)) {
    $("#codepostalError").text("Veuillez saisir un code postal valide.");
  } else {
    $("#codepostalError").text("");
  }

  // Vérification asynchrone du mot de passe
  let password = $("#password").val();
  if (!password) {
    $("#passwordError").text("Veuillez saisir votre mot de passe.");
  } else if (password.length < 8) {
    $("#passwordError").text(
      "Le mot de passe doit contenir au moins 8 caractères."
    );
  } else if (!/\d/.test(password)) {
    $("#passwordError").text(
      "Le mot de passe doit contenir au moins un chiffre."
    );
  } else if (!/[a-zA-Z]/.test(password)) {
    $("#passwordError").text(
      "Le mot de passe doit contenir au moins une lettre."
    );
  } else if (!/[^a-zA-Z0-9]/.test(password)) {
    $("#passwordError").text(
      "Le mot de passe doit contenir au moins un caractère spécial."
    );
  } else {
    $("#passwordError").text("");
  }

  // Vérification asynchrone de la confirmation du mot de passe
  let passwordConfirmation = $("#passwordConfirmation").val();
  if (!passwordConfirmation) {
    $("#passwordConfirmationError").text(
      "Veuillez confirmer votre mot de passe."
    );
  } else if (passwordConfirmation !== password) {
    $("#passwordConfirmationError").text(
      "La confirmation du mot de passe ne correspond pas."
    );
  } else {
    $("#passwordConfirmationError").text("");
  }

  // Retourne true si tous les champs sont valides, sinon retourne false
  return !(
    $("#nomError").text() ||
    $("#prenomError").text() ||
    $("#pseudoError").text() ||
    $("#mailError").text() ||
    $("#codepostalError").text() ||
    $("#passwordError").text() ||
    $("#passwordConfirmationError").text()
  );
}

// Fonction de validation d'email
function validateEmail(email) {
  // Utilisez une expression régulière pour valider l'email
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Fonction de validation de code postal
function validatePostalCode(codepostal) {
  // Utilisez une expression régulière pour valider le code postal (exemples ici)
  return /^[0-9]{5}$/.test(codepostal);
}

$(document).ready(function () {
  // Écouteur d'événement pour le formulaire de connexion
  $("#mon-formulaire").submit(function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    verifyLogin(); // Vérifie les informations de connexion
  });

  // Écouteur d'événement pour le bouton de connexion
  $("#connexion").click(function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    verifyLogin(); // Vérifie les informations de connexion
  });

  // Fonction pour vérifier les informations de connexion
  function verifyLogin() {
    // Récupérer les valeurs des champs d'entrée
    let username = $("#username").val();
    let password = $("#password").val();

    // Vérifier les informations d'identification
    if (username === "ok" && password === "0000") {
      // Connexion réussie
      $("#connexionMessage").text("Connexion réussie.");
      // Réinitialiser les champs d'entrée
      $("#username").val("");
      $("#password").val("");
    } else {
      // Informations d'identification incorrectes
      $("#connexionMessage").text(
        "Nom d'utilisateur ou mot de passe incorrect."
      );
    }
  }
});

$(document).ready(function () {
  $("#mon-formulaire").submit(function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Vérifiez si le formulaire d'inscription est valide
    if (validateForm()) {
      // Le formulaire est valide, redirigez l'utilisateur vers la page de connexion
      window.location.href =
        "file:///C:/Users/L.E/Desktop/La%20plateforme/S6%20Javascript/jour5/job1/connexion.html";
    } else {
      // Le formulaire n'est pas valide, ne soumettez pas
      console.log(
        "Le formulaire n'est pas valide. Veuillez corriger les erreurs."
      );
    }
  });
});
