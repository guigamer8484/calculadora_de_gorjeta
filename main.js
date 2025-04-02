let bill = 0
let tipPercentage = 0
let numerOfPeople = 0

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

function calculate(){
    if (bill !== 0 && tipPercentage !== 0 && numerOfPeople !== 0) {
        console.log("é pssivel calcular")

        
    } else {
        console.log("Ainda não da! preencha tudo")
    }
}