/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/
const flightSelect = document.querySelector("#flight");
const handlerFunction = () => {  
    flightSelect.classList.toggle("enabled");
    flightSelect.classList.toggle("disabled");
}

document.querySelector("#activate-flight").addEventListener("click", handlerFunction)

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/
const mindSelect = document.querySelector("#mindreading")
document.querySelector("#activate-mindreading").addEventListener("click", function() {
    mindSelect.classList.toggle("enabled");
    mindSelect.classList.toggle("disabled");
})

const xraySelect = document.querySelector("#xray")
document.querySelector("#activate-xray").addEventListener("click", function() {
    xraySelect.classList.toggle("enabled");
    xraySelect.classList.toggle("disabled");
})

/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/
const allPowerSelect = document.querySelectorAll(".power");

    allPowerSelect.forEach(item => {
    document.querySelector("#activate-all").addEventListener("click", function(){
        item.classList.add("enabled");
        item.classList.remove("disabled")   
    })
})
    allPowerSelect.forEach(key => {
    document.querySelector("#deactivate-all").addEventListener("click", function(){
        key.classList.add("disabled");
        key.classList.remove("enabled")
    })
})