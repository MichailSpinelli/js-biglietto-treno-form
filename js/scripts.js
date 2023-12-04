/*
Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un'implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra. (modificato)
*/

    const button = document.getElementById('submitButton');
    button.addEventListener('click', function(){

    let eta = document.getElementById('eta').value;
    console.log(eta);

    let km = document.getElementById('km').value;
    console.log(km);

    let name = document.getElementById('nameInput').value;
    console.log(name);

    function numeroCarrozza(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let carrozza = numeroCarrozza (1,30).value;
    console.log(carrozza);


    let prezzo = (0.21 * km);
        console.log("il prezzo iniziale è di: ", prezzo);

    if (eta == 'minorenne') {
        sconto = (prezzo * 0.8).toFixed(2);
        console.log("lo sconto per i minorenni è di: " ,sconto);
    } else if (eta == 'over') {
        sconto = (prezzo * 0.6).toFixed(2);
        console.log("lo sconto per gli anziani è di: " ,sconto);
    } else {
        sconto = prezzo;
    }


    document.getElementById('prezzo-biglietto').innerHTML = sconto;
    document.getElementById('nome').innerHTML = name;
    document.getElementById('nCarrozza').innerHTML = carrozza;
    })

    
    