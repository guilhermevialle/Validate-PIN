const display = document.getElementById('display')

var displayResult = ''

function valor(numero) {

    // Resultado do display
    display.textContent += numero
    var sla = display.textContent
    sla.toString()

    // Regex dos numeros
    var regex = /[0-9]/g
    var resultado = sla.match(regex)

    if(resultado == null){
        displayResult = 'Inválido: Resultado nulo.'
    }
    else if(resultado.length < 4 || resultado.length > 6){
        displayResult = 'Inválido: Quantidade nula ou excedida.'
    }
    else if (sla.length > 6) {
        displayResult = 'Invalido: Quantidade excedida.'
    }
    else {
        displayResult = 'Válido.'
    }

}

    const btnVerificar = document.getElementById('btn-v')
    btnVerificar.addEventListener('click', function () {
        display.textContent = displayResult
        limpar()
    },false)

    const btnApagar = document.getElementById('btn-l')
    btnApagar.addEventListener('click', function () {
        display.textContent = ''
    },false)

function animation() {
    const p = document.getElementById('p')
    var interface = document.getElementById('interface')
    p.style.transform='translateY(0px)'
    interface.style.opacity = '1'
    interface.style.transform='translateX(0px)'
}
