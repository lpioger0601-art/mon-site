<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mon Site Pro</title>

  <!-- Lien vers le CSS -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- CONTENEUR PRINCIPAL -->
  <div class="container">
    <h1>Bienvenue sur mon site pro</h1>
    <p>Voici un exemple de site moderne, responsive et interactif, prêt à être amélioré.</p>
    
    <!-- Bouton interactif -->
    <button>Clique-moi</button>
  </div>

  <!-- Lien vers le JS -->
  <script src="script.js"></script>
</body>
</html>
/* =========================
   RESET DE BASE
========================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* =========================
   VARIABLES (PRO)
========================= */
:root {
  --couleur-principale: #2563eb;
  --couleur-secondaire: #1e293b;
  --couleur-fond: #f8fafc;
  --couleur-texte: #0f172a;
  --rayon: 8px;
}

/* =========================
   STYLE GÉNÉRAL
========================= */
body {
  font-family: "Segoe UI", Arial, sans-serif;
  background-color: var(--couleur-fond);
  color: var(--couleur-texte);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* =========================
   CONTENEUR PRINCIPAL
========================= */
.container {
  background-color: white;
  padding: 40px;
  max-width: 600px;
  width: 90%;
  border-radius: var(--rayon);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* =========================
   TITRES & TEXTE
========================= */
h1 {
  color: var(--couleur-principale);
  margin-bottom: 16px;
}

p {
  line-height: 1.6;
  margin-bottom: 24px;
}

/* =========================
   BOUTONS
========================= */
button {
  background-color: var(--couleur-principale);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: var(--rayon);
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

/* =========================
   RESPONSIVE (MOBILE)
========================= */
@media (max-width: 500px) {
  .container {
    padding: 24px;
  }

  h1 {
    font-size: 24px;
  }
}
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
