// Visualizzare in pagina 5 numeri casuali.
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}   

let numbers = []

for (let i = 0; i < 5; i++){
    let number = getRandomInteger(1,9)

    numbers.push(number)
    

    if (i === 0){
        document.querySelector('h1').innerHTML= number
    } else {
        document.querySelector('h1').innerHTML+= `-${number}`
    }
}
console.log(numbers);


// Da lì parte un timer di 30 secondi.
setTimeout (insertNumber, 5000);


// Dopo 30 secondi l'utente deve inserire (uno alla volta) i numeri che ha visto precedentemente, tramite il prompt()
function insertNumber (){
    document.querySelector('h1').innerHTML = ""

    let userNumbers = []
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            let userNumber = parseInt(prompt('inserisci uno alla volta i numeri appena visti'));
            userNumbers.push(userNumber)
        }
        console.log(userNumbers);
    
        for (let i = 0; i < 5; i++) {
            if (numbers[i] === userNumbers[i]){
                document.querySelector('h1').innerHTML += ` Bravo era: ${userNumbers[i]}`
            } else {
                document.querySelector('h1').innerHTML += ` Hai sbagliato era: ${numbers[i]}`
            }
            
        }
    }, 300);
    
    
}

// Dopo che sono stati inseriti i 5 numeri,


// il software dice quanti e quali dei numeri da indovinare sono stati individuati.


