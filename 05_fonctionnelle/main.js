const log = (msg) => document.getElementById('output').textContent += msg + "\n";


(function () {
  log("Hello fril IIFE");
})();

function redef() {
  log("Initializing")
  redef = function () {
    log("Already initialized")
  }
}

redef();
(redef)()
redef()



function sum() {
  let count = 0
  for (let i = 0; i < arguments.length; i++) {
    count += arguments[i];
  }

  return count;
}

log(sum(1, 2, 3));

(function (nom) {
  log(`Hello ${nom}`);
})("Moi");

function once() {
  log("1 Time")
  once = function () {
  }
}

once();
once();

function add(a) {
  return (b) => a + b;
}

let test = add(1)


log(add(1)(2))