//droit admin

document.addEventListener("DOMContentLoaded", function () {
  // Bouton pour ajouter un modérateur
  const addModeratorButton = document.getElementById("addModeratorButton");
  addModeratorButton.addEventListener("click", function () {
    alert("Ajout d'un modérateur !");
  });

  // Bouton pour supprimer un modérateur
  const removeModeratorButton = document.getElementById(
    "removeModeratorButton"
  );
  removeModeratorButton.addEventListener("click", function () {
    alert("Suppression d'un modérateur !");
  });

  // Bouton pour ajouter un administrateur
  const addAdministratorButton = document.getElementById(
    "addAdministratorButton"
  );
  addAdministratorButton.addEventListener("click", function () {
    alert("Ajout d'un administrateur !");
  });

  // Bouton pour supprimer un administrateur
  const removeAdministratorButton = document.getElementById(
    "removeAdministratorButton"
  );
  removeAdministratorButton.addEventListener("click", function () {
    alert("Suppression d'un administrateur !");
  });
});

//inscription

document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const submitBtn = document.getElementById("submitBtn");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Vérifier si le nom d'utilisateur a au moins 2 lettres
    if (username.length < 2) {
      alert("Le nom d'utilisateur doit avoir au moins 2 lettres.");
      return;
    }

    // Vérifier si l'adresse email a le bon domaine
    if (!email.endsWith("@laplateforme.io")) {
      alert("L'adresse email doit appartenir au domaine @laplateforme.io.");
      return;
    }

    // Vérifier si le mot de passe a au moins 8 caractères
    if (password.length < 8) {
      alert("Le mot de passe doit avoir au moins 8 caractères.");
      return;
    }

    // Rediriger vers la page de connexion une fois l'inscription réussie
    window.location.href = "connexion.html";
  });
});

//connexion :

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("js/users.json")
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (user) {
          switch (user.role) {
            case "eleve":
              window.location.href = "student.html";
              break;
            case "moderateur":
              window.location.href = "moderator.html";
              break;
            case "admin":
              window.location.href = "administrator.html";
              break;
            default:
              // Redirection par défaut vers une page d'accueil ou un message d'erreur
              window.location.href = "index.html";
              break;
          }
        } else {
          alert("Adresse email ou mot de passe incorrect.");
        }
      })
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des utilisateurs :",
          error
        )
      );
  });
});

//verifier date :

document.addEventListener("DOMContentLoaded", function () {
  // Vérifier la date pour chaque élément de la liste
  const dateElements = document.querySelectorAll(".date");
  const startDate = new Date("2024-04-05");
  const endDate = new Date("2024-04-14");

  dateElements.forEach((dateElement) => {
    const requestDate = new Date(dateElement.dataset.date);

    if (requestDate < startDate || requestDate > endDate) {
      const acceptButton = dateElement.parentElement.querySelector(".accept");
      const refuseButton = dateElement.parentElement.querySelector(".refuse");

      acceptButton.classList.add("disabled");
      refuseButton.classList.add("disabled");
    }
  });
});
