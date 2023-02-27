const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")
const dolar = 5.2 
const euro = 5.9
const bitcoin = 0.0000082

const convertValues = () => {
    const inputReal = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currrencyValueText = document.getElementById("currency-value-text")

   realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
   { style: 'currency', currency: 'BRL' }
 ).format(inputReal)
   
 if(select.value === "US$ United States Dollar") {
    currrencyValueText.innerHTML =  new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
  ).format(inputReal / dolar)
 }

if(select.value === "€ Euro") {
    currrencyValueText.innerHTML =  new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
  ).format(inputReal / euro)
}

if(select.value === "₿ Bitcoin") {
    currrencyValueText.innerHTML =  new Intl.NumberFormat('BTC',
    { style: 'currency', currency: 'BTC' }
  ).format(inputReal / bitcoin)
 }
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if(select.value === "US$ United States Dollar") {
        currencyName.innerHTML = "Dollar"
        currencyImg.src = "./assets/eua-logo.svg"
    } 

    if(select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro-logo.svg"
    }

    if(select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin-logo.png"
    } 

    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)