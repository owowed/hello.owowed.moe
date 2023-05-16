
const helloNames = await fetch("./data/hello-names.json").then(i => i.json());
const bodyColors = await fetch("./data/body-colors.json").then(i => i.json());

const azkaMessage = document.querySelector("#azka-message");

const iterateCycle = function* (array) {
    let ind = 0;
    while (true) {
        if (ind == array.length) ind = 0;

        yield array[ind++];
    }
};

const bodyColorsIteration = iterateCycle(bodyColors);

let lastHelloNameIndex = 0;

const intervalFunction = () => {
    let helloNameIndex = Math.floor(Math.random() * helloNames.length);
    
    while (helloNameIndex == lastHelloNameIndex) {
        helloNameIndex = Math.floor(Math.random() * helloNames.length);
    }

    azkaMessage.textContent = `Hello, ${helloNamesIteration[helloNameIndex]}!`;
    document.body.style.backgroundColor = bodyColorsIteration.next().value;

    lastHelloNameIndex = helloNameIndex;
};

intervalFunction();

setInterval(intervalFunction, 3000);
