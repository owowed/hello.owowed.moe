
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

const lastHelloNameIndexes = new Set([0, 0, 0]);

const setSetSize = (set, size) => {
    while (set.size > size) {
        set.delete(Array.from(set.values()).at(-1));
    }
};

const intervalFunction = () => {
    let helloNameIndex = Math.floor(Math.random() * helloNames.length);
    
    while (lastHelloNameIndexes.has(helloNameIndex)) {
        helloNameIndex = Math.floor(Math.random() * helloNames.length);
    }

    azkaMessage.textContent = `Hello, ${helloNames[helloNameIndex]}!`;
    document.title = `hello ${helloNames[helloNameIndex]}!`.toLowerCase();

    lastHelloNameIndexes.add(helloNameIndex);
    setSetSize(lastHelloNameIndexes, 3);
};

intervalFunction();

setInterval(intervalFunction, 3000);
