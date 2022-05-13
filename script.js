// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const myGrid = document.getElementById("grid");

// Funzione per creare elementi nel DOM
// Sostituire tagType con il tag che ci serve creare
const createMyEl = (tagType) => {
    const myElement = document.createElement(tagType);
    myElement.className = "square-easy";
    return myElement;
}

// ciclo for per creare dinamicamente elementi in pagina
for (let i = 0; i < 100; i++){
    const myDivEl = createMyEl ("div");
    myGrid.append(myDivEl);

    // Cambio colore alla  cella cliccata dall'utente
    myDivEl.addEventListener("click",
        function(){
            this.classList.add("pressed");
        } 
    )
}






function randomNum(numMin, numMax){
    let resultNum = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    return resultNum;
}