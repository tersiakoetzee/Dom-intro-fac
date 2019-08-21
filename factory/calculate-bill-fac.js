// //get a reference to the calculate button

// //get a reference to the billTotal element

// //get a reference to the billString

// //create the function that will be called when the calculate button is pressed
// //  * this function should read the string value entered - split it on a comma.
// //  * loop over all the entries in the the resulting list
// //  * check if it is a call or an sms and add the right amount to the overall total
// //  * once done looping over all the entries - display the total onto the screen in the billTotal element

// //link the function to a click event on the calculate button
// var billStringElement = document.querySelector(".billString");
// var calculateBtn = document.querySelector(".calculateBtn");
// var billTotalElement = document.querySelector(".billTotal");
// var totalCostElem = document.querySelector(".totalCost");


function FactoryCalculateBill() {

    var billTotal = 0.00;

    function billString(billType) {

        var billItems = billType.split(',');
        billTotal = 0.00; 
        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                billTotal = billTotal + 2.75;
            }
            else if (billItem === "sms") {
                billTotal = billTotal + 0.75;

            }

        }
        return billTotal;
    }
    function colorIndicator(totalBill) {

        if (totalBill > 20.00 && totalBill < 30.00) {
          
            return "warning";
        }

        if (totalBill > 30.00) {
            
            return "danger";
        }

    }

    return {  
        billString,
        colorIndicator
    }
}