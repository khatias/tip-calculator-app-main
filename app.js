let billInput = document.getElementById("bill-input");
let peopleInput = document.getElementById("people-input");
let tipResult = document.getElementById("tip-result");
let totalResult = document.getElementById("total-result");
let percentButtons = document.querySelectorAll(".percent");
let peopleError = document.getElementById("people-number-error");
let billError = document.getElementById("bill-error");
let customInput = document.getElementById("custom-input")
let resset =document.getElementById("reset")
let inputs =document.querySelectorAll("input")

let currentPercent = 0;

percentButtons.forEach(function(percentButton) {
    percentButton.addEventListener("click", function() {
        currentPercent = parseFloat(percentButton.textContent);
        updateTip(currentPercent);
        updateTotal();
    });
});

customInput.addEventListener("input", function() {
    currentPercent = parseFloat(customInput.value);
    updateTip(currentPercent);
    updateTotal();
})


billInput.addEventListener("input", function() {
    if (/^0+$/.test(billInput.value.trim())) {
        billInput.style.border = " 2px solid red"; 
        billInput.style.outline = " none"; 
        billError.style.display = "inline";
    } else {
        billInput.style.border= "none"; 
        billError.style.display = "none";
        updateTip(currentPercent);
        updateTotal();
    }
});

peopleInput.addEventListener("input", function() {
    if (/^0+$/.test(peopleInput.value.trim())) {
        peopleInput.style.border = "2px solid red";
        peopleInput.style.outline = "none";
        peopleError.style.display = "inline";
    } else {
        peopleInput.style.border = "none";
        peopleError.style.display = "none";
        updateTip(currentPercent);
        updateTotal();
    }
});

function updateTotal() {
    let currentTotal = (billInput.value / peopleInput.value) + parseFloat(tipResult.textContent);
    totalResult.textContent = currentTotal.toFixed(2);
}

function updateTip(percent) {
    let currentPercent = (billInput.value / 100) * percent;
    tipResult.textContent = (currentPercent / peopleInput.value).toFixed(2);
}

resset.addEventListener("click", function(){
    location.reload()
})


inputs.forEach(function(input) {
    input.addEventListener("mouseover", function() {
        if(input.value !== "0"){
            input.style.outline = "2px solid #26C2AE";
        }
        
    });
    input.addEventListener('mouseout', function() {
        input.style.outline = "none"; 
    });
});
