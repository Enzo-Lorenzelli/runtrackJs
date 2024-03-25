//genere par GPT
// Fonction qui vérifie si une date correspond à un jour travaillé ou un week-end
function jourTravaille(date) {
  let jour = date.getDate();
  let mois = date.getMonth() + 1;
  let annee = date.getFullYear();
  let jourSemaine = date.getDay();

  let joursFeries = joursFeries2024();
  let estFerie = joursFeries.some((jourFerie) => {
    return (
      jourFerie.getDate() === date.getDate() && // Vérifie que le jour est le même
      jourFerie.getMonth() === date.getMonth() && // Vérifie que le mois est le même
      jourFerie.getFullYear() === date.getFullYear() // Vérifie que l'année est la même
    );
  });

  if (estFerie) {
    console.log("Le " + formatteDate(date) + " est un jour férié.");
  } else if (jourSemaine === 0 || jourSemaine === 6) {
    console.log("Non, le " + formatteDate(date) + " est un week-end.");
  } else {
    console.log("Oui, le " + formatteDate(date) + " est un jour travaillé.");
  }
}

// Fonction qui formate une date pour l'affichage
function formatteDate(date) {
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// Fonction qui retourne les jours fériés de l'année 2024
function joursFeries2024() {
  let joursFeries = [
    new Date(2024, 0, 1), // Nouvel An
    new Date(2024, 4, 1), // Fête du Travail
    new Date(2024, 4, 8), // Victoire des Alliés
    new Date(2024, 6, 14), // Fête Nationale
    new Date(2024, 10, 11), // Armistice
    new Date(2024, 11, 25), // Noël
  ];

  let paques = calculerPaques(2024);
  joursFeries.push(paques);
  joursFeries.push(
    new Date(paques.getFullYear(), paques.getMonth(), paques.getDate() + 1)
  ); // Lundi de Pâques
  joursFeries.push(
    new Date(paques.getFullYear(), paques.getMonth(), paques.getDate() + 39)
  ); // Ascension
  joursFeries.push(
    new Date(paques.getFullYear(), paques.getMonth(), paques.getDate() + 50)
  ); // Pentecôte

  return joursFeries;
}

// Fonction qui calcule la date de Pâques pour une année donnée
function calculerPaques(annee) {
  let anneeDiv19 = annee % 19;
  let siecle = Math.floor(annee / 100);
  let siecleMod4 = siecle % 4;
  let siecleDiv4 = Math.floor(siecle / 4);
  let siecleMod7 = siecle % 7;
  let valeurA = annee % 4;
  let valeurB = annee % 7;
  let valeurC = annee % 19;
  let valeurD = (19 * anneeDiv19 + 15) % 30;
  let valeurE = (2 * siecleMod4 + 4 * siecleMod7 + 6 * valeurA + 6) % 7;
  let valeurF = (valeurD + valeurE) % 30;
  let jourPaques =
    valeurF +
    (valeurD === 29 && valeurE === 6
      ? 1
      : valeurD === 28 && valeurE === 6 && valeurF === 15
      ? 1
      : 0);
  let moisPaques = valeurF === 29 ? 3 : 2;
  return new Date(annee, moisPaques - 1, jourPaques);
}

// Exemple d'utilisation :
let dateTest = new Date(2024, 0, 1); // Nouvel An 2024
jourTravaille(dateTest);
