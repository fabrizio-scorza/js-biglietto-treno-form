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
    const inputAgeElement = document.getElementById('age');

    //dichiarazione delle variabili
    let km = 0, 
        age = 0,
        price = 0, 
        discount = 0; //number

    console.log(km,age,price,discount);

    //ascolto del click sul bottone
    submitElement.addEventListener('click',function(){

         //lettura del dato km e assegnazione alla variabile km
        km = parseFloat(inputKmElement.value); //number

        //lettura del dato age e assegnazione alla variabile age
        age = parseInt(inputAgeElement.value); //number

        console.log(km,age);
        
        //calcolo del prezzo del biglietto
            // calcolo del prezzo base del biglietto
            price = km*0.21; //number

            console.log (price);

            // applicazione dell'eventuale sconto
            if (age < 18){
                discount = price*0.2; //number
                price -= discount; //number
            } 
            if (age >= 65){
                discount = price*0.4; //number
                price -= discount; //number
            } 

            //stampa del prezzo finale del biglietto e dello sconto applicato
                //dichiarazione e assegnazione delle variabili approssimate al secondo decimale
                const stringPrice = price.toFixed(2); //string
                const stringDiscount = discount.toFixed(2) //string

                //stampa in console dell'output
                console.log ('il prezzo del biglietto è: ' + stringPrice + '€. Lo sconto che è stato applicato è di: ' + stringDiscount + '€');
    });
       
