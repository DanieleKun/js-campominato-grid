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


const myRandomNumArr = myRandomUniqNum (100, 1, 100);
console.log(myRandomNumArr);

// ciclo for per creare dinamicamente elementi in pagina
for (let i = 0; i < myRandomNumArr.length; i++){
    const myDivEl = createMyEl ("div");
    myGrid.append(myDivEl);

    let arrItems = myRandomNumArr[i]
    myDivEl.append(arrItems);

    // Cambio colore alla  cella cliccata dall'utente
    myDivEl.addEventListener("click",
        function(){
            this.classList.add("pressed");
        } 
    )
}

// Aggiungo numeri casuali in ordine sparso nelle varie celle
function myRandomUniqNum (myNumItems, numMin, numMax) {
    const arrNum = [];
    while (arrNum.length < myNumItems){
        let myRandomNum = getRandomNum(numMin, numMax);
        if(!arrNum.includes(myRandomNum)){
            arrNum.push(myRandomNum);
        }
        return arrNum;
    }
}


function getRandomNum(numMin, numMax){
    let resultNum = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    return resultNum;
}