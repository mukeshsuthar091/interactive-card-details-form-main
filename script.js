let cardNumber = document.getElementById("card-number");
let cardHolderName = document.getElementById("cardH-name");
let cardM = document.getElementById("card-m");
let cardY = document.getElementById("card-y");
let cvcNumber = document.getElementById("cvc-number");

let card_no = document.getElementById('card-no');
let card_H_Name = document.getElementById('cardholder-name');
let card_m = document.getElementById('card-month');
let card_y = document.getElementById('card-year');
let card_cvc = document.getElementById('card-cvc-no');

let inputs = document.querySelectorAll("input");
let errors = document.querySelectorAll(".error");
let cardDetails = document.querySelector(".card-details");

let confirmBtn = document.getElementById('confirm');
let continueBtn = document.getElementById('continue');


function clearError(id) {
    let element = document.getElementById(id);
    element.innerHTML = "";
}

function setError(id, error) {
    let element = document.getElementById(id);
    element.innerHTML = error;
}


confirmBtn.addEventListener("click", function () {
    if (cardNameFun() === true && cardNumberFun() === true && cardMonthDateFun() === true && cardYearDateFun() === true && cardCVCFun() === true) {
        cardNameFun();
        cardNumberFun();
        cardMonthDateFun();
        cardYearDateFun();
        cardCVCFun();
        thankyou();
    }
    else {
        cardNameFun();
        cardNumberFun();
        cardMonthDateFun();
        cardYearDateFun();
        cardCVCFun();
    }

})

continueBtn.addEventListener("click", () => {
    cardDetails.classList.remove("active");
    for (let element of inputs) {
        element.value = ""
    }
})



let cardNameFun = () => {
    if (card_H_Name.value.match(/^[A-Z a-z]+$/)) {
        cardHolderName.innerHTML = card_H_Name.value;
        document.getElementById("cardholder-name").style.border = "";
        clearError("name-error");
        return true;
    }
    else {
        cardHolderName.innerHTML = "Jane Appleseed"
        document.getElementById("cardholder-name").style.border = "1px solid hsl(0, 100%, 66%)";
        if (card_H_Name.value.length === 0) {
            setError("name-error", "Cant't be blank");
        }
        else {
            setError("name-error", "Wrong format, character only");
        }
        return false;
    }
}

let cardNumberFun = () => {
    if (card_no.value.match(/^[ 0-9]+$/)) {
        if (card_no.value.length < 19) {
            setError("number-error", "Wrong format, card number should be 16 digit with space");
            return false;
        } 
        else {
            cardNumber.innerHTML = card_no.value;
            document.getElementById("card-no").style.border = "";
            clearError("number-error");
            return true;
        }
    }
    else {
        cardNumber.innerHTML = "0000 0000 0000 0000"
        document.getElementById("card-no").style.border = "1px solid hsl(0, 100%, 66%)";
        if (card_no.value.length === 0) {
            setError("number-error", "Cant't be blank");
        }
        else {
            setError("number-error", "Wrong format, numbers only");
        }
        
        return false;
    }
}


let cardMonthDateFun = () => {
    if (card_m.value.length != 0) {
        cardM.innerHTML = card_m.value;
        document.getElementById("card-month").style.border = "";
        clearError("date-error");
        return true;
    }
    else {
        cardM.innerHTML = "00";
        document.getElementById("card-month").style.border = "1px solid hsl(0, 100%, 66%)";
        setError("date-error", "Cant't be blank");
        return false;
    }
}

let cardYearDateFun = () => {
    if (card_y.value.length != 0) {
        cardY.innerHTML = card_y.value;
        document.getElementById("card-year").style.border = "";
        return true;
    }
    else {
        cardY.innerHTML = "00";
        document.getElementById("card-year").style.border = "1px solid hsl(0, 100%, 66%)";
        setError("date-error", "Cant't be blank");
        return false;
    }
}

let cardCVCFun = () => {
    if (card_cvc.value.length != 0) {
        cvcNumber.innerHTML = card_cvc.value;
        document.getElementById("card-cvc-no").style.border = "";
        clearError("cvc-error");
        return true;
    }
    else {
        cvcNumber.innerHTML = "000";
        document.getElementById("card-cvc-no").style.border = "1px solid hsl(0, 100%, 66%)";
        setError("cvc-error", "Cant't be blank");
        return false;
    }
}


let thankyou = () => {
    cardDetails.classList.add("active");
}