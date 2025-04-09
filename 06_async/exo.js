const log = (msg) => document.getElementById('output').textContent += msg + "\n";

async function testFetch() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
        const data = await response.json();
        log("Titre du post : " + data.title);
    } catch (err) {
        log("Erreur lors du fetch : " + err.message);
    }

}
testFetch()



const delay = (ms) => new Promise(resolve => setTimeout(() => resolve(`Fini !`), ms));
delay(2000).then(log);



async function delayHello() {
    return new Promise(resolve => setTimeout(() => resolve(`Hello async`), 1000))
}
let value = delayHello().then(log);
log(value);


function verifyPassword(pwd) {
    return new Promise((resolve, reject) => {
        if (pwd.lengt >= 8) {
            resolve("Mot de passe accepté")
        } else {
            reject("Mot de passe trop court")
        }
    }
    );
}

let testPwd = verifyPassword("123456");
testPwd
    .then(value => log("123456 => " + value))
    .catch((error) => log(error));


let testPwd2 = verifyPassword("1234567891015");
testPwd2
    .then(value => log("1234567891015 => " + value))
    .catch((error) => log(error));