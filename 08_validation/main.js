const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche l'envoi réel
  let valid = true;

  // Nettoyage
  document.querySelectorAll(".error").forEach(e => e.textContent = "");

  const name = document.querySelector("#name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const tel = document.getElementById("tel");
  const telcity = document.getElementById("city");

  // Validation manuelle
  if (!telcity.value.match(/^[A-Z].*$/)) {
    document.getElementById("cityError").textContent = "Le city invalid.";
    valid = false;
  } 

  if(tel.value.length < 10){
    document.getElementById("telError").textContent = "Le tel doit faire au moins 10 caractères.";
    valid = false;
  }

  if (name.value.trim().length < 3) {
    document.getElementById("nameError").textContent = "Le nom doit faire au moins 3 caractères.";
    valid = false;
  }

  if (!email.value.includes("@")) {
    document.getElementById("emailError").textContent = "Email invalide.";
    valid = false;
  }

  if (password.value.length < 6) {
    document.getElementById("passwordError").textContent = "Mot de passe trop court.";
    valid = false;
  }

  if (valid) {
    alert("Formulaire valide ! Données envoyées.");
    form.reset();
  }
});

/**
 * ## Exercice 1 : Validation HTML5

Ajoute à ce champ une validation HTML5 pour qu’il soit obligatoire et commence par une majuscule.

```html
<input type="text" id="city">
```


## Exercice 2 : Validation JS d’un numéro de téléphone
Crée un champ `tel` dans un formulaire. Valide qu’il a exactement 10 chiffres.
 */


