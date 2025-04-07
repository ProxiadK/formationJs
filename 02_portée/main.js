const log = (msg) => document.getElementById('output').textContent += msg + "\n";


function createLogger(prefix) {
  return (value) => `${prefix} ${value}`
}

const logInfo = createLogger("[INFO]");

console.log(logInfo("Connexion établie")); // Résultat attendu : "[INFO] Connexion établie



function createMultiplier(n) {
  return (value) => n * value
}

const triple = createMultiplier(3);
console.log(triple(4)); // Résultat attendu : 12