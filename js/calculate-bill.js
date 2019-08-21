//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
var billStringElement = document.querySelector(".billString");
var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");
// var totalCostElem = document.querySelector(".totalCost");


var calculateBill = FactoryCalculateBill();

function calculateBtnClicked() {


    var billType = billStringElement.value
    var billTotal = calculateBill.billString(billType);
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    var color = calculateBill.colorIndicator(billTotal);
   console.log(color)
    if (color == "danger") {
        billTotalElement.classList.add(color);
        billTotalElement.classList.remove("warning");
    }
     else if (color == "warning") {
        billTotalElement.classList.add(color);
        billTotalElement.classList.remove("danger");
    }
    else {
        billTotalElement.classList.remove("danger");
        billTotalElement.classList.remove("warning");
    }
}


calculateBtn.addEventListener('click', calculateBtnClicked);





