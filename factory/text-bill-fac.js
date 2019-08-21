// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen




function FactoryTextBill() {
    var totalCost = 0.00;
    var call = 0.00;
    var sms = 0.00;


    function textBillString(billType) {
        var billItemType = billType
        if (billItemType === "call") {
            call += 2.75;
        }
        else if (billItemType === "sms") {
            sms += 0.75;
        }
        totalCost = sms + call;
    }

    function callTot() {
        return call.toFixed(2);
    }
    function smsTot() {
        return sms.toFixed(2);
    }

    function totalT() {
        // totalCost = sms + call;
        return totalCost.toFixed(2)
    }


    function colorIndicator() {

        if (totalCost >= 30.00 && totalCost < 50) {
            return "warning";
        }
        else if (totalCost >= 50.00) {
            return "danger";
        }
        return "";

    }



    return {
        textBillString,
        colorIndicator,
        callTot,
        smsTot,
        totalT
    }

}

