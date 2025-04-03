let bill = 0
let tipPercentage = 0
let numerOfPeople = 0
let buttonSelected = null

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeopleValue)

function receiveBillValue() {
    bill = billInput.valueAsNumber

    calculate()
}

function receiveNumberOfPeopleValue() {
    numerOfPeople = numberOfPeopleInput.valueAsNumber
    console.log(numerOfPeople)
}

function receiveTipPercentageValue(value) {
    tipPercentage = value/100

    removeClassButtonSelected()

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")


}

function removeClassButtonSelected() {
    if(buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}

function calculate(){
    if (bill !== 0 && tipPercentage !== 0 && numerOfPeople !== 0) {
        console.log("é pssivel calcular")

        
    } else {
        console.log("Ainda não da! preencha tudo")
    }
}