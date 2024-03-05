// associare il bottone submit ad una variabile
const submitElement = document.getElementById('submit');

//ascolto del click sul bottone submit
submitElement.addEventListener('click',function(){

    //Lettura dei dati dall'input html al click sul bottone
        //associare l'input dei km ad una variabile
        const inputKmElement = document.getElementById('km');

        // associare l'input della select ad una variabile
        const inputDiscountElement = document.getElementById('discount');

        //dichiarazione delle variabili
        let km = 0, 
        discountPrc = '',
        price = 0, 
        discount = 0,
        finalPrice = 0; //number
        
         //lettura del dato km e assegnazione alla variabile km
        km = parseFloat(inputKmElement.value); //number

        //lettura del valore del select e assegnazione alla variabile discountPrc
        discountPrc = (inputDiscountElement.value); //string
        
        //controllo dati inseriti
        if (km > 0 && !isNaN(km)){
            
            //calcolo del prezzo del biglietto
                // calcolo del prezzo base del biglietto
                price = km*0.21; //number
                finalPrice = price; //number

                // applicazione dell'eventuale sconto 
                if (discountPrc === 'underage'){
                    discount = price*0.2; //number
                    finalPrice = price - discount; //number
                } 
                if (discountPrc === 'senior'){
                    discount = price*0.4; //number
                    finalPrice = price - discount; //number
                } 

            //stampa del prezzo finale del biglietto e dello sconto applicato
                //dichiarazione e assegnazione delle variabili approssimate al secondo decimale
                const stringFirstPrice =price.toFixed(2); //string
                const stringPrice = finalPrice.toFixed(2); //string
                const stringDiscount = discount.toFixed(2) //string

                // stampe del biglietto nella pagina
                    //associazione del paragrafo ad una variabile
                    const tiketElement = document.getElementById('tiket');

                    //associazione del input name ad una variabile
                    const inputNameElement = document.getElementById('name');

                    // associazione del valore dell'input ad una variabile
                    let name = inputNameElement.value;

                    //stampa del paragrafo nella pagina html
                    tiketElement.innerHTML += `
                    <h2>Il tuo biglietto</h2>
                    <div class=" calculator">
                    <h3>${name}</h3>
                    <p>Il prezzo del biglietto è di: ${stringFirstPrice}€. Lo sconto applicato è di ${stringDiscount}€. Il totale da pagare per il biglietto è di ${stringPrice}€.</p>
                    </div>`;

            //disabilita il bottone dopo il primo utilizzo    
            document.getElementById('submit').disabled = true;

        } else
        alert ('ERRORE - inserire un numero valido di chilometri!!!');
        
    });

// associare il bottone cancel ad una variabile
const cancelElement = document.getElementById('cancel');

//ascolto del click sul bottone submit
cancelElement.addEventListener('click',function(){
    //cancellare i valori nelle textbox
        //associazione degli input ad una variabile
        const inputNameElement = document.getElementById('name');

        const inputKmElement = document.getElementById('km');

        // azzerare i valori nelle textbox
        inputNameElement.value = '';

        inputKmElement.value = '';

    //cancellare il paragrafo
        //associazione del paragrafo ad una variabile
        const tiketElement = document.getElementById('tiket');

        //azzerare i valori del paragrafo
        tiketElement.innerHTML= '';

    //riabilitare il bottone submit
    document.getElementById('submit').disabled = false; 
})
