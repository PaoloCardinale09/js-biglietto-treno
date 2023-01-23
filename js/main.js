// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km).
// Va applicato uno sconto del 20 % per i minorenni.
// Va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// CHIEDO IL NUMERO DI KM CHE IL PASSEGGERO VUOLE PERCORRERE
// CHIEDO L'ETA' DEL PASSEGGERO
// PREZZO DEFINITO IN BASE AI KM (0.21 € AL KM)
// SCONTO 20% PER I MINORENNI (< 18 ANNI) 
// SCONTO 40% PER GLI OVER 65 (> 65 ANNI)
// PREZZO FINALE CON 2 DECIMALI 

// CHIEDO IL NUMERO DI KM CHE IL PASSEGGERO VUOLE PERCORRERE
let travelDistance = prompt('Quanti km devi percorrere?');
// console.log(`Il tuo viaggio è lungo ${travelDistance}km`);

// CHIEDO L'ETA' DEL PASSEGGERO
let userAge = prompt('Quanti anni hai?');
// console.log(`Hai ${userAge} anni`);

// PREZZO DEFINITO IN BASE AI KM (0.21 € AL KM)
//MOLTIPLICARE travelDistance * 0.21 € 
let standardPrice = (travelDistance * 0.21);
// console.log(`Il prezzo standard della corsa è ${standardPrice.toFixed(2)}€`);

// SCONTO 20% PER I MINORENNI (< 18 ANNI) 
// SCONTO 40% PER GLI OVER 65 (> 65 ANNI)
//  Se userAge < 18, standardPrice/100*20
//  Se userAge >= 65, standardPrice/100*40
if (userAge < 18) {
    let underPrice = (travelDistance * 0.21) / 100 * 80;
    // console.log(`Essendo minorenne, il tuo prezzo speciale è di ${underPrice.toFixed(2)}€`);
    document.getElementById("travelSummary").innerHTML = (`Il costo Standard del biglietto è ${standardPrice.toFixed(2)} € <br>Essendo minorenne il costo del tuo biglietto è di ${underPrice.toFixed(2)} € `)
}

else if (userAge >= 65) {
    let overPrice = (travelDistance * 0.21) / 100 * 60;
    // console.log(`Essendo over 65, il tuo prezzo speciale è di ${overPrice.toFixed(2)}€`);
    document.getElementById("travelSummary").innerHTML = (`Il costo Standard del biglietto è ${standardPrice.toFixed(2)} € <br>Essendo over 65 il costo del tuo biglietto è di ${overPrice.toFixed(2)} € `)
}
else {
    // console.log(`Il prezzo del tuo biglietto è ${standardPrice}`)
    document.getElementById("travelSummary").innerHTML = (`Il costo del tuo del biglietto è ${standardPrice.toFixed(2)} € `)
}


