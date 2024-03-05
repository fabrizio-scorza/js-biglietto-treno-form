// associare il bottone ad una variabile
const submitElement = document.getElementById('submit');

//ascolto del click sul bottone
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
            const stringPrice = finalPrice.toFixed(2); //string
            const stringDiscount = discount.toFixed(2) //string

            // stampe del biglietto nella pagina
                //associazione del paragrafo ad una variabile
                const tiketElement =document.getElementById('tiket');

                //stampa del paragrafo nella pagina html
                tiketElement.innerHTML += `
                <h2>Il tuo biglietto</h2>
                <p>Il prezzo del biglietto è di: ${price}€. Lo sconto applicato è di ${stringDiscount}€. Il totale da pagare per il biglietto è di ${stringPrice}€.</p>`;
    });
       
