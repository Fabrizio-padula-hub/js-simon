// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti
// e quali dei numeri da indovinare sono stati individuati.


// Ci serve l’arrayPc di numeri contenente i 5 numeri da far vedere quando si apre la pagina
const numberArrayPc = [6, 34, 89, 1, 42];
// cicla l'array
const itemsArray = scrollArray(numberArrayPc);

// Nel dom creare un div e appendere i numeri di numberArrayPc 
const containerNumbersPc = document.querySelector('#number-array');
containerNumbersPc.innerHTML = `<span>${itemsArray}</span>`;
console.log(containerNumbersPc)



// Partita la pagina inizia a scorrere il tempo di 30 secondi

// Far scomparire l’arrayPc dopo 30 secondi 
// (Quindi al timer attaccare il prompt per utente)

// Adesso compare il prompt per l’utente, per 5 volte. Quando l’utente
// inserisce i numeri, inserirli nell’array dei numeri dell’utente
// (Per 5 volte compare il prompt e pushare nell'arrayUser)


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