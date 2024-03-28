$(document).ready(function () {
  $.getJSON("pokemon.json", function (data) {
    populatePokemonList(data);
  });

  // Ajouter l'événement pour le bouton "Afficher les statistiques" ici
  $("#toggleStats")
    .click(function () {
      $(".pokemon-stats").toggle();
      $(this).text(function (_, text) {
        return text === "Masquer les statistiques"
          ? "Afficher les statistiques"
          : "Masquer les statistiques";
      });
    })
    .trigger("click"); // Ajouter .trigger("click") pour simuler un clic au chargement de la page
});

function populatePokemonList(pokemonData) {
  let $pokemonList = $("#pokemonList");
  $pokemonList.empty();

  pokemonData.forEach(function (pokemon) {
    let $pokemonItem = $("<div class='pokemon-item'></div>");
    $pokemonItem.append(`<h2>${pokemon.name.english}</h2>`);
    $pokemonItem.append(`<p>ID: ${pokemon.id}</p>`);
    $pokemonItem.append(`<p>Japanese Name: ${pokemon.name.japanese}</p>`);
    $pokemonItem.append(`<p>Chinese Name: ${pokemon.name.chinese}</p>`);
    $pokemonItem.append(`<p>French Name: ${pokemon.name.french}</p>`);
    $pokemonItem.append(`<p>Type: ${pokemon.type.join(", ")}</p>`);

    // Ajouter la nouvelle div pour entourer les statistiques ici
    let $statsDiv = $("<div class='pokemon-stats'></div>");
    $statsDiv.append(`<p>HP: ${pokemon.base.HP}</p>`);
    $statsDiv.append(`<p>Attack: ${pokemon.base.Attack}</p>`);
    $statsDiv.append(`<p>Defense: ${pokemon.base.Defense}</p>`);
    $statsDiv.append(`<p>Special Attack: ${pokemon.base["Sp. Attack"]}</p>`);
    $statsDiv.append(`<p>Special Defense: ${pokemon.base["Sp. Defense"]}</p>`);
    $statsDiv.append(`<p>Speed: ${pokemon.base.Speed}</p>`);

    $pokemonItem.append($statsDiv);

    $pokemonList.append($pokemonItem);
  });
}

//-----------------------------------------------------------------------------------------

// $(document).ready(function () {
//   $.getJSON("pokemon.json", function (data) {
//     // Process the JSON data here
//     populatepokemonlist(data);
//     console.log(data); // For example, log the data to the console
//   });
// });

// function populatepokemonlist(pokemondata) {
//   let $pokemonlist = $("#pokemonlist");
//   // Clear any existing content in the pokemonList div
//   $pokemonlist.empty();
// }
// pokemondate.array.forEach(function (pokemon) {
//   let $pokemonitem = $("<div class='pokemon-item'></div>");
//   $pokemonlist.append($pokemonitem);
// });

// $(button).click(function () {});

//-----------------------------------------------------------------------------------------

// generation avec chatgpt :
// Fonction pour demander à l'utilisateur de saisir un ID valide entre 1 et 151
// function promptValidID() {
//   let id;
//   do {
//     id = parseInt(prompt("Veuillez saisir l'ID du Pokémon (entre 1 et 151) :"));
//   } while (isNaN(id) || id < 1 || id > 151);
//   return id;
// }

// // Fonction pour récupérer les données du fichier JSON en fonction de l'ID spécifié
// async function fetchDataByID(id) {
//   try {
//     const response = await fetch("pokemon.json");
//     const data = await response.json();
//     return data.filter((item) => item.id === id);
//   } catch (error) {
//     console.error("Erreur lors de la récupération des données:", error);
//     return [];
//   }
// }

// // Fonction pour afficher les éléments sur la page HTML
// async function displayData(filteredData) {
//   const htmlContent = filteredData
//     .map(
//       (item) => `
//     <div>
//       <h2>${item.name.english}</h2>
//       <p>Japanese Name: ${item.name.japanese}</p>
//       <p>Chinese Name: ${item.name.chinese}</p>
//       <p>French Name: ${item.name.french}</p>
//       <p>Type: ${item.type.join(", ")}</p>
//       <p>HP: ${item.base.HP}</p>
//       <p>Attack: ${item.base.Attack}</p>
//       <p>Defense: ${item.base.Defense}</p>
//       <p>Special Attack: ${item.base["Sp. Attack"]}</p>
//       <p>Special Defense: ${item.base["Sp. Defense"]}</p>
//       <p>Speed: ${item.base.Speed}</p>
//     </div>
//   `
//     )
//     .join("");

//   document.getElementById("pokemonList").innerHTML = htmlContent;
// }

// // Événement de clic sur le bouton "Filtrer"
// document.getElementById("filterButton").addEventListener("click", async () => {
//   const id = document.getElementById("id").value.trim();
//   const name = document.getElementById("name").value.trim();
//   const type = document.getElementById("type").value.trim();

//   let filteredData;
//   if (id !== "") {
//     filteredData = await fetchDataByID(parseInt(id));
//   } else {
//     const response = await fetch("pokemon.json");
//     filteredData = await response.json();
//   }

//   if (name !== "") {
//     filteredData = filteredData.filter((item) =>
//       item.name.english.toLowerCase().includes(name.toLowerCase())
//     );
//   }
//   if (type !== "") {
//     filteredData = filteredData.filter((item) => item.type.includes(type));
//   }

//   displayData(filteredData);
// });

// // Créer les éléments HTML dans JavaScript
// const heading = document.createElement("h1");
// heading.textContent = "Pokémon Filter";
// document.body.appendChild(heading);

// const form = document.createElement("form");
// form.id = "filterForm";

// const idLabel = document.createElement("label");
// idLabel.textContent = "ID:";
// const idInput = document.createElement("input");
// idInput.type = "text";
// idInput.id = "id";
// idInput.name = "id";
// form.appendChild(idLabel);
// form.appendChild(idInput);
// form.appendChild(document.createElement("br"));
// form.appendChild(document.createElement("br"));

// const nameLabel = document.createElement("label");
// nameLabel.textContent = "Nom:";
// const nameInput = document.createElement("input");
// nameInput.type = "text";
// nameInput.id = "name";
// nameInput.name = "name";
// form.appendChild(nameLabel);
// form.appendChild(nameInput);
// form.appendChild(document.createElement("br"));
// form.appendChild(document.createElement("br"));

// const typeLabel = document.createElement("label");
// typeLabel.textContent = "Type:";
// const typeSelect = document.createElement("select");
// typeSelect.id = "type";
// typeSelect.name = "type";

// const allOption = document.createElement("option");
// allOption.value = "";
// allOption.textContent = "Tous";
// typeSelect.appendChild(allOption);

// const grassOption = document.createElement("option");
// grassOption.value = "Grass";
// grassOption.textContent = "Grass";
// typeSelect.appendChild(grassOption);

// const fireOption = document.createElement("option");
// fireOption.value = "Fire";
// fireOption.textContent = "Fire";
// typeSelect.appendChild(fireOption);

// form.appendChild(typeLabel);
// form.appendChild(typeSelect);
// form.appendChild(document.createElement("br"));
// form.appendChild(document.createElement("br"));

// document.body.appendChild(form);
