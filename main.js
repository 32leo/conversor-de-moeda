document.getElementById('currency-form').addEventListener('submit', function(event){
    // event.preventDefault(); obter valores de entrada informados élo usuario
    const valor = parseFloa (document.getElementById('fromCurrency').value);
    const daMoeda = document.getElementById('paraMoeda').value;

    // definir taxas de cambio fixas
    const exchangeRates = {
        USD:{BRL:5.70, EUR:0.93},
        BRL:{USD:0.18, EUR:0.16},
        EUR:{USD:1.08, BRL:6.16} 

    }
});