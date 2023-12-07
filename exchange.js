document.getElementById("click").onclick = function() {submitForm(event)};

function submitForm(e) {
    e.preventDefault();
    var output = document.getElementById("myform");
    var display = document.getElementById("display");
    var inputVals = output.querySelectorAll("input:not([type=submit]), select");

    var amount = inputVals[0].value;
    const currency = inputVals[1].value;

    const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_".concat(currency);
   
    fetch(apiUrl, {
        method: 'GET',
        headers: { 'X-Api-Key': YOUR_API_KEY},
        contentType: 'application/json'
    })
    .then(response => response.json())
    .then(data => {
        var rate = data.exchange_rate;
        let resultPrice = amount * rate;
        document.getElementById("display").innerHTML = `${amount} USD = ${resultPrice.toFixed(2)} ${currency}`;
    })

    .catch(error => {
        alert('Request failed: ', error);
        result.innerHTML = 'An error occured. Please try again later.';
    })
}
