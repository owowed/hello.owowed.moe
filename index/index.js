
const helloNames = await fetch("./data/hello-names.json").then(i => i.json());
const bodyColors = await fetch("./data/body-colors.json").then(i => i.json());

const azkaMessage = document.querySelector("#azka-message");

const helloNamesIteration = iterateCycle(helloNames);
const bodyColorsIteration = iterateCycle(bodyColors);

setInterval(() => {
    azkaMessage.textContent = `Hello, ${helloNamesIteration.next().value}!`;
    document.body.style.backgroundColor = bodyColorsIteration.next().value;
}, 3000);

function* iterateCycle(array) {
    let ind = 0;
    while (true) {
        if (ind == array.length) ind = 0;

        yield array[ind++];
    }
}