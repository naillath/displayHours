function displayHours() {

    const now = new Date()

    let hour = now.getHours()

    if (hour < 6) {
        document.querySelector(`h3#hour`).innerHTML = `Agora são ${hour} horas.`

        document.querySelector(`div#imgExchange`).innerHTML = `<img src="./assets/img/img00.png" alt="Imagem da lua de madrugada" width="300">`

        document.body.style.background = "#4d4de0"


    } else if (hour < 12) {
        document.querySelector(`h3#hour`).innerHTML = `Agora são ${hour} horas.`

        document.querySelector(`div#imgExchange`).innerHTML = `<img src="./assets/img/img01.png" alt="Imagem do sol durante a manhã" width="300">`

        document.body.style.background = "#e7e787"
    } else if (hour < 18) {
        document.querySelector(`h3#hour`).innerHTML = `Agora são ${hour} horas.`

        document.querySelector(`div#imgExchange`).innerHTML
            = `<img src="./assets/img/img02.png" alt="Imagem do sol durante a tarde" width="300">`

        document.body.style.background = "#7cbaec"
    } else {
        document.querySelector(`h3#hour`).innerHTML = `Agora são ${hour} horas.`

        document.querySelector(`div#imgExchange`).innerHTML = `<img src="./assets/img/img03.png" alt="Imagem do sol se pondo" width="300">`

        document.body.style.background = "#853737"
    }

}

displayHours()