// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti
// e quali dei numeri da indovinare sono stati individuati.


// qui ci sono le variabili che gestiscono il tempo di partenza
// e il tempo di arrivo del conto alla rovescia
// dove timer è la partenza e timereverse è l'arrivo dei secondi
let timer = 10;
const timeStopreverse = 0;
// qui ci sono le variabili che gestiscono il tempo di partenza
// e il tempo di arrivo del prompt all'user
// dove timerPrompt è la partenza e timePrompt è l'arrivo dei secondi
let timerPrompt = 0;
const timeStopPrompt = 11;


// Ci serve l’arrayPc di numeri contenente i 5 numeri da far vedere quando si apre la pagina
const numberArrayPc = [6, 34, 89, 1, 42];
// cicla l'array
const itemsArray = scrollArray(numberArrayPc);

// Nel dom creare un div e appendere i numeri di numberArrayPc 
const containerNumbersPc = document.querySelector('#number-array');
containerNumbersPc.innerHTML = `<span>${itemsArray}</span>`;

// Partita la pagina inizia a scorrere il tempo di 30 secondi
const reverseClock = setInterval(function(){
    timer--;
    containerClock.innerHTML = `<span>Hai ${timer} secondi per memorizzare i numeri</span>`;
    if(timer === timeStopreverse){
        clearInterval(reverseClock);
        // Far scomparire l’arrayPc dopo 30 secondi 
        containerNumbersPc.innerHTML = '';
    }
}, 1000)

// mi prendo il div e ci appendo il timer
const containerClock = document.querySelector('#time');
console.log(containerClock)

// Adesso compare il prompt per l’utente, per 5 volte. Quando l’utente
// inserisce i numeri, inserirli nell’array dei numeri dell’utente
// (Per 5 volte compare il prompt e pushare nell'arrayUser)
let askUser;
const promptClock = setInterval(function(){
    timerPrompt++;
    if(timerPrompt === timeStopPrompt){
        clearInterval(promptClock);
        for(let i = 0; i < 5; i++){
            askUser = parseInt(prompt('Scrivi i numeri memorizzati'));
            console.log(askUser)
        }
        
    }
}, 1000)


// Adesso devo comparare i numeri che sono dentro l’array Pc ai numeri dell’array user, 
// 	se i numeri dell’utente sono === all’array Pc
// 		far uscire il messaggio che i numeri sono tutti uguali
// 	altrimenti se i numeri pc !== numeri utente
// 		far comparire un messaggio che dice i numeri mancanti 
// 		(scrivere solo i numeri dell’arrayUtente che sono inclusi nell’arrayPc ) Quali numeri
// 		far comparire un messaggio che dice quanti numeri mancano 
// 		(scrivere l’indice dell’arrayUtente - l’indice dell’arrayPc) Quanti numeri



// FUNCTIONS

// nameArray si sostituisce col nome dell'array
// prende tutti gli elementi di un array
// li cicla per la lunghezza dell'array stesso 
// e restituisce gli elementi all'interno dell'array
// è presente il console.log
function scrollArray(nameArray){
    let numberList = [];
    for(let i = 0; i < nameArray.length; i++){
        numberList.push(nameArray[i]);
        console.log(numberList)
    
    }
    return numberList;
} 