function afficherJoursSemaine(joursSemaine) {
  for (let i = 0; i < joursSemaine.length; i++) {
    console.log(joursSemaine[i]);
  }
}

let joursSemaine = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];
afficherJoursSemaine(joursSemaine);
