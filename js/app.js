// MILESTONE 1:
// Modifichiamo la logica dell’esercizio di ieri in modo che i dati non arrivino da un prompt ma da un form che l’utente deve compilare.
// Usando esclusivamente due input: un input per i km e un input per l’età, e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. Cliccando sul bottone recuperate i valori delle input e calcolate il prezzo nello stesso modo che avete usato ieri.
// La risposta finale (o output) sarà anch’essa da scrivere in console.

//Lettura dei dati dall'input html al click sul bottone
    // associare il bottone ad una variabile
    const submitElement = document.getElementById('submit');

    //associare la text area dei km ad una variabile
    const inputKmElement = document.getElementById('km');

    // associare la text area dell'età ad una variabile
    const inputAgeElement = document.getElementById('discount');

    //dichiarazione delle variabili
    let km = 0, 
        age = 0,
        price = 0, 
        discount = 0,
        finalPrice = 0; //number

    //ascolto del click sul bottone
    submitElement.addEventListener('click',function(){

         //lettura del dato km e assegnazione alla variabile km
        km = parseFloat(inputKmElement.value); //number

        //lettura del valore del select e assegnazione alla variabile age
        age = (inputAgeElement.value); //string
        
        //calcolo del prezzo del biglietto
            // calcolo del prezzo base del biglietto
            price = km*0.21; //number
            finalPrice = price; //number

            // applicazione dell'eventuale sconto 
            if (age === 'underage'){
                discount = price*0.2; //number
                finalPrice = price - discount; //number
            } 
            if (age === 'senior'){
                discount = price*0.4; //number
                finalPrice = price - discount; //number
            } 

            //stampa del prezzo finale del biglietto e dello sconto applicato
                //dichiarazione e assegnazione delle variabili approssimate al secondo decimale
                const stringPrice = finalPrice.toFixed(2); //string
                const stringDiscount = discount.toFixed(2) //string

                // stampe del biglietto nella pagina
                //associazione del paragrafo ad una variabile
                const tiketElement =document.getElementById('tiket');
                
                tiketElement.innerHTML += `
                <h2>Il tuo biglietto</h2>
                <p>Il prezzo del biglietto è di: ${price}€. Lo sconto applicato è di ${stringDiscount}€. Il totale da pagare per il biglietto è di ${stringPrice}€.</p>`;
    });
       
