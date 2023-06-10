
const helloNames = await fetch("./data/hello-names.json").then(i => i.json());
const bodyColors = await fetch("./data/body-colors.json").then(i => i.json());

const helloMessage = document.querySelector("#hello-message");

const iterateCycle = function* (array) {
    let ind = 0;
    while (true) {
        if (ind == array.length) ind = 0;

        yield array[ind++];
    }
};

const bodyColorsIteration = iterateCycle(bodyColors);

const lastHelloNameIndexes = new Set([0, 0, 0]);
const lastHelloNameIndexesSize = lastHelloNameIndexes.size;

const setSetSize = (set, size) => {
    const setValues = Array.from(set.values());
    while (set.size > size) {
        set.delete(setValues.at(-1));
    }
};

const setRandomName = () => {
    let helloNameIndex = 0;
    
    while (lastHelloNameIndexes.has(helloNameIndex)) {
        helloNameIndex = Math.floor(Math.random() * helloNames.length);
    }

    const helloMessageText = `Hello, ${helloNames[helloNameIndex]}!`;

    helloMessage.textContent = helloMessageText;
    document.title = helloMessageText.toLowerCase();

    lastHelloNameIndexes.add(helloNameIndex);
    setSetSize(lastHelloNameIndexes, lastHelloNameIndexesSize);
};

setRandomName();

setInterval(setRandomName, 3000);
