
const convertButton = document.querySelector(".button-converter")
const selectCurrency = document.querySelector(".select-currency")
const select1 = document.querySelector(".select1")


function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valueReal = document.querySelector(".value")
    const valueDolar = document.querySelector(".value-dolar")

    const dolarToday = 5.15
    const eurotoday = 5.46
    const libraToDay = 6.30
    const bitcoinToDay = 143.769









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

    if (selectCurrency.value == "libra") {
            valueDolar.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputValue / libraToDay)
        
        }

        if (selectCurrency.value == "bitcoin") {
            valueDolar.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC"
            }).format(inputValue / bitcoinToDay)

        }

        
        valueReal.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)


    }

        function changeSelect1() {
            console.log(changeSelect1)

        }


    function changeCurrency() {
        const changeCurrency = document.getElementById("change-currency")
        const changeImg = document.querySelector(".eua-flag")

        if (selectCurrency.value == "dolar") {
            changeCurrency.innerHTML = "Dólar Americano"
            changeImg.src = "./img/gifs-da-bandeira-dos-estados-unidos.gif"
        }

        if (selectCurrency.value == "euro") {
            changeCurrency.innerHTML = "Euro"
            changeImg.src = "./img/gifs-de-euro-3.gif"
        }

        if (selectCurrency.value == "libra") {
            changeCurrency.innerHTML = "Libra"
            changeImg.src = "./img/libra-esterlina.png"
        }

        if (selectCurrency.value == "bitcoin") {
            changeCurrency.innerHTML = "BTC Bitcoin"
            changeImg.src = "./img/bitcoin.png"
        }

        convertValues()

    }


    select1.addEventListener("change", changeSelect1)
    selectCurrency.addEventListener("change", changeCurrency)
    convertButton.addEventListener("click", convertValues)




