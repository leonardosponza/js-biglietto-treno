var kilometri =parseInt(prompt('inserisci i kilometri'));

document.getElementById('kilometri').innerHTML += kilometri + 'km';

console.log(kilometri);


var età =parseInt(prompt('inserisci età'));

console.log(età);

var prezzokm = 0.21;

var scontominorenne = 20/100
var scontoanziani = 40/100

var totale = (kilometri * prezzokm).toFixed(2);
document.getElementById('totale').innerHTML += totale + '€';

if (età < 18) {    
    totale = (totale * scontominorenne).toFixed(2);
    document.getElementById('prezzo-scontato').innerHTML = 'sconto minorenni 20%' + totale + '€';
} else if (età > 65) {
    totale = (totale * scontoanziani).toFixed(2);
    document.getElementById('prezzo-scontato').innerHTML = 'sconto 40% per anziani' + totale + '€';
}