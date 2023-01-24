// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km).
// Va applicato uno sconto del 20 % per i minorenni.
// Va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// // CHIEDO IL NUMERO DI KM CHE IL PASSEGGERO VUOLE PERCORRERE
// // CHIEDO L'ETA' DEL PASSEGGERO
// // PREZZO DEFINITO IN BASE AI KM (0.21 € AL KM)
// // SCONTO 20% PER I MINORENNI (< 18 ANNI) 
// // SCONTO 40% PER GLI OVER 65 (> 65 ANNI)
// // PREZZO FINALE CON 2 DECIMALI 

// // CHIEDO IL NUMERO DI KM CHE IL PASSEGGERO VUOLE PERCORRERE
// let travelDistance = prompt('Quanti km devi percorrere?');
// // console.log(`Il tuo viaggio è lungo ${travelDistance}km`);

// // CHIEDO L'ETA' DEL PASSEGGERO
// let userAge = prompt('Quanti anni hai?');
// // console.log(`Hai ${userAge} anni`);

// // PREZZO DEFINITO IN BASE AI KM (0.21 € AL KM)
// //MOLTIPLICARE travelDistance * 0.21 € 
// let standardPrice = (travelDistance * 0.21);
// // console.log(`Il prezzo standard della corsa è ${standardPrice.toFixed(2)}€`);

// // SCONTO 20% PER I MINORENNI (< 18 ANNI) 
// // SCONTO 40% PER GLI OVER 65 (> 65 ANNI)
// //  Se userAge < 18, standardPrice/100*20
// //  Se userAge >= 65, standardPrice/100*40
// if (userAge < 18) {
//     let underPrice = (travelDistance * 0.21) / 100 * 80;
//     // console.log(`Essendo minorenne, il tuo prezzo speciale è di ${underPrice.toFixed(2)}€`);
//     document.getElementById("travelSummary").innerHTML = (`Il costo Standard del biglietto è ${standardPrice.toFixed(2)} € <br>Essendo minorenne il costo del tuo biglietto è di ${underPrice.toFixed(2)} € `)
// }

// else if (userAge >= 65) {
//     let overPrice = (travelDistance * 0.21) / 100 * 60;
//     // console.log(`Essendo over 65, il tuo prezzo speciale è di ${overPrice.toFixed(2)}€`);
//     document.getElementById("travelSummary").innerHTML = (`Il costo Standard del biglietto è ${standardPrice.toFixed(2)} € <br>Essendo over 65 il costo del tuo biglietto è di ${overPrice.toFixed(2)} € `)
// }
// else {
//     // console.log(`Il prezzo del tuo biglietto è ${standardPrice}`)
//     document.getElementById("travelSummary").innerHTML = (`Il costo del tuo del biglietto è ${standardPrice.toFixed(2)} € `)
// }


// SECONDO MODO DI SVOLGERE IL PROGRAMMA
// CHIEDERE QUAL'E' LA DESTINAZIONE TRA ROMA FIRENZE TORINO NAPOLI 
// CHIEDERE QUANTI ANNI 
// CALCOLARE IL TOTALE DEL VIAGGIO MOLTIPLICANDO I KM * 0.21 €
// IF SE HAI MENO DI 18 ANNI, HAI DIRITTO AL 20% DI SCONTO CHE è PARI A 
// ELSE IF HAI PIU' DI 65 ANNI HAI DIRITTO AL 40% DI SCONTO CHE EQUIVALE A 
// ELSE NON HAI DIRITTO A NESSUNO SCONTO 

let destination = prompt('Digitare la destinazione tra ROMA - FIRENZE - TORINO - NAPOLI');
let userAge = prompt('Quanti anni hai?');

const milanoRoma = (573);
const milanoFirenze = (318);
const milanoTorino = (165);
const milanoNapoli = (770);

// Se il viaggiatore deve andare a Roma ed è minorenne 
if ((destination == 'ROMA') || (destination == 'Roma') || (destination == 'roma') && (userAge < 18)) {
    let standardPrice = (milanoRoma * .21);
    let discountUnder = standardPrice / 100 * 20
    let underPrice = standardPrice - discountUnder;
    console.log(`Milano Roma ha un costo standard di ${standardPrice}€
    Essendo minorenne hai diritto ad uno sconto del 20%: ${discountUnder.toFixed(2)}€
    Il prezzo finale del tuo biglietto è di ${underPrice.toFixed(2)}€
    Grazie e buon viaggio.`);
}

// Se il viaggiatore deve andare a Roma ed è over 65
else if ((destination == 'ROMA') || (destination == 'Roma') || (destination == 'roma') && (userAge >= 65)) {
    let standardPrice = (milanoRoma * .21);
    let discountUnder = standardPrice / 100 * 40
    let underPrice = standardPrice - discountUnder;
    console.log(`Milano Roma ha un costo standard di ${standardPrice}€
    Essendo OVER 65 hai diritto ad uno sconto del 40%: ${discountUnder.toFixed(2)}€
    Il prezzo finale del tuo biglietto è di ${underPrice.toFixed(2)}€
    Grazie e buon viaggio.`);
}

// Se il viaggiatore deve andare a Roma e non ha diritto ad alcuno sconto
else if ((destination == 'ROMA') || (destination == 'Roma') || (destination == 'roma')) {
    let standardPrice = (milanoRoma * .21);
    console.log(`Milano roma ha un costo standard di ${standardPrice}€
  
    Grazie e buon viaggio.`);
}

// Se il viaggiatore deve andare a Firenze ed è minorenne 
else if ((destination == 'FIRENZE') || (destination == 'Firenze') || (destination == 'firenze') && (userAge < 18)) {
    let standardPrice = (milanoFirenze * .21);
    let discountUnder = standardPrice / 100 * 20
    let underPrice = standardPrice - discountUnder;
    console.log(`Milano Firenze ha un costo standard di ${standardPrice}€
    Essendo minorenne hai diritto ad uno sconto del 20%: ${discountUnder.toFixed(2)}€
    Il prezzo finale del tuo biglietto è di ${underPrice.toFixed(2)}€
    Grazie e buon viaggio.`);
}

// Se il viaggiatore deve andare a Firenze ed è over 65
else if ((destination == 'FIRENZE') || (destination == 'Firenze') || (destination == 'firenze') && (userAge >= 65)) {
    let standardPrice = (milanoFirenze * .21);
    let discountUnder = standardPrice / 100 * 40
    let underPrice = standardPrice - discountUnder;
    console.log(`Milano Firenze ha un costo standard di ${standardPrice}€
    Essendo OVER 65 hai diritto ad uno sconto del 40%: ${discountUnder.toFixed(2)}€
    Il prezzo finale del tuo biglietto è di ${underPrice.toFixed(2)}€
    Grazie e buon viaggio.`);
}

// Se il viaggiatore deve andare a Firenze e non ha diritto ad alcuno sconto
else if ((destination == 'FIRENZE') || (destination == 'Firenze') || (destination == 'firenze')) {
    let standardPrice = (milanoFirenze * .21);
    console.log(`Milano Firenze ha un costo standard di ${standardPrice}€
    Grazie e buon viaggio.`);
}


// Se il viaggiatore deve andare a Torino ed è minorenne 
else if ((destination == 'TORINO') || (destination == 'Torino') || (destination == 'torino') && (userAge < 18)) {
    let standardPrice = (milanoTorino * .21);
    let discountUnder = standardPrice / 100 * 20
    let underPrice = standardPrice - discountUnder;
    console.log(`Milano Torino ha un costo standard di ${standardPrice}€
    Essendo minorenne hai diritto ad uno sconto del 20%: ${discountUnder.toFixed(2)}€
    Il prezzo finale del tuo biglietto è di ${underPrice.toFixed(2)}€
    Grazie e buon viaggio.`);
}

// Se il viaggiatore deve andare a Torino ed è over 65
else if ((destination == 'TORINO') || (destination == 'Torino') || (destination == 'torino') && (userAge >= 65)) {
    let standardPrice = (milanoTorino * .21);
    let discountUnder = standardPrice / 100 * 40
    let underPrice = standardPrice - discountUnder;
    console.log(`Milano Torino ha un costo standard di ${standardPrice}€
    Essendo OVER 65 hai diritto ad uno sconto del 40%: ${discountUnder.toFixed(2)}€
    Il prezzo finale del tuo biglietto è di ${underPrice.toFixed(2)}€
    Grazie e buon viaggio.`);
}

// Se il viaggiatore deve andare a Torino e non ha diritto ad alcuno sconto
else if ((destination == 'TORINO') || (destination == 'Torino') || (destination == 'torino')) {
    let standardPrice = (milanoTorino * .21);
    console.log(`Milano Torino ha un costo standard di ${standardPrice}€
    Grazie e buon viaggio.`);
}

// Se il viaggiatore deve andare a Napoli ed è minorenne 
else if ((destination == 'NAPOLI') || (destination == 'Napoli') || (destination == 'napoli') && (userAge < 18)) {
    let standardPrice = (milanoNapoli * .21);
    let discountUnder = standardPrice / 100 * 20
    let underPrice = standardPrice - discountUnder;
    console.log(`Milano Napoli ha un costo standard di ${standardPrice}€
    Essendo minorenne hai diritto ad uno sconto del 20%: ${discountUnder.toFixed(2)}€
    Il prezzo finale del tuo biglietto è di ${underPrice.toFixed(2)}€
    Grazie e buon viaggio.`);
}

// Se il viaggiatore deve andare a Napoli ed è over 65
else if ((destination == 'NAPOLI') || (destination == 'Napoli') || (destination == 'napoli') && (userAge >= 65)) {
    let standardPrice = (milanoNapoli * .21);
    let discountUnder = standardPrice / 100 * 40
    let underPrice = standardPrice - discountUnder;
    console.log(`Milano Napoli ha un costo standard di ${standardPrice}€
    Essendo OVER 65 hai diritto ad uno sconto del 40%: ${discountUnder.toFixed(2)}€
    Il prezzo finale del tuo biglietto è di ${underPrice.toFixed(2)}€
    Grazie e buon viaggio.`);
}

// Se il viaggiatore deve andare a Torino e non ha diritto ad alcuno sconto
else if ((destination == 'NAPOLI') || (destination == 'Napoli') || (destination == 'napoli')) {
    let standardPrice = (milanoNapoli * .21);
    console.log(`Milano Napoli ha un costo standard di ${standardPrice}€
    Grazie e buon viaggio.`);
}

else {
    console.log(`Scegliere una destinazione valida`);
}

// console.log(standardPrice)
