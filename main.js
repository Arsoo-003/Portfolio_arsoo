// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');

// Validation du formulaire
function validateForm() {
  let isValid = true;

  // Récupérer les éléments du formulaire
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Réinitialiser les messages d'erreur
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("message-error").textContent = "";
  document.getElementById("form-success").textContent = "";

  // Validation du champ Nom
  if (!name.value.match(/^[A-Za-z\s]+$/)) {
    document.getElementById("name-error").textContent =
      "Veuillez entrer un nom valide (lettres et espaces uniquement).";
    isValid = false;
  }

  // Validation du champ Email
  if (!email.value.match(/^\S+@\S+\.\S+$/)) {
    document.getElementById("email-error").textContent =
      "Veuillez entrer une adresse e-mail valide.";
    isValid = false;
  }

  // Validation du champ Message
  if (message.value.trim().length < 10) {
    document.getElementById("message-error").textContent =
      "Le message doit contenir au moins 10 caractères.";
    isValid = false;
  }

  // Si le formulaire est valide, afficher un message de succès
  if (isValid) {
    document.getElementById("form-success").textContent =
      "Votre message a été envoyé avec succès!";
  }

  return isValid; // Ne pas soumettre le formulaire si des erreurs existent
}

// Gérer la mise à jour des liens de menu actifs
const menuLinks = document.querySelectorAll(".menu a");

function updateActiveLink() {
  let fromTop = window.scrollY + 100;

  menuLinks.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// Gérer le bouton de retour en haut
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Barre de progression de lecture
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  progressBar.style.width = `${progress}%`;
});

// Show loading screen until page fully loads
window.addEventListener("load", function () {
  document.body.classList.add("loaded"); // Add 'loaded' class to body once fully loaded
});

// Effet Parallaxe
window.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(".parallax");

  parallaxElements.forEach((element) => {
    let speed = element.getAttribute("data-speed");
    let yPos = -(window.scrollY * speed);
    element.style.backgroundPosition = `center ${yPos}px`;
  });
});

// Afficher le contenu de l'article avec un effet de fondu en entrée
window.addEventListener('DOMContentLoaded', () => {
  const article = document.querySelector('.blog-article');
  if (article) {
      article.classList.add('loaded');
  }
});
