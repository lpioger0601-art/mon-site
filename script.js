// Attendre que la page soit entièrement chargée
document.addEventListener("DOMContentLoaded", () => {
  console.log("Site chargé avec succès ✅");

  // Exemple : message de bienvenue
  afficherBienvenue();

  // Exemple : interaction avec un bouton (si présent)
  initialiserBoutons();
});

// Fonction de bienvenue
function afficherBienvenue() {
  const titre = document.querySelector("h1");

  if (titre) {
    titre.addEventListener("click", () => {
      alert("Bienvenue sur mon site 👋");
    });
  }
}

// Fonction pour gérer les boutons
function initialiserBoutons() {
  const boutons = document.querySelectorAll("button");

  boutons.forEach((bouton) => {
    bouton.addEventListener("click", () => {
      console.log("Bouton cliqué :", bouton.textContent);
    });
  });
}
