
const convertButton = document.querySelector(".button-converter")
const selectCurrency = document.querySelector(".select-currency")



function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valueReal = document.querySelector(".value")
    const valueDolar = document.querySelector(".value-dolar")

    const dolarToday = 5.17
    const eurotoday = 6.00




    console.log(selectCurrency.value)

    if (selectCurrency.value == "dolar") {
        valueDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)

    }

    if (selectCurrency.value == "euro") {
        valueDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / eurotoday)
    }



    valueReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)


}

function changeCurrency() {
    const changeCurrency = document.getElementById("change-currency")

    if (selectCurrency.value == "dolar") {
        changeCurrency.innerHTML = "Dólar Americano"
    }

    if (selectCurrency.value == "euro") {
        changeCurrency.innerHTML = "Euro"
    }


    
}



selectCurrency.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)




