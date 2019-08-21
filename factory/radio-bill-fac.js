
function RadioFactory() {
    var totalCost = 0;
    var call = 0;
    var sms = 0;

    function radioBill(radioType) {
        var radioItem = radioType;

        if (radioItem === "call") {
            call += 2.75;
        }
        else if (radioItem === "sms") {
            sms += 0.75;

        }

    }
    function callRadio() {
        return call.toFixed(2);
    }
    function smsRadio() {
        return sms.toFixed(2);
    }
    function totalR() {
        totalCost = sms + call;
        return totalCost.toFixed(2)
    }
    function colorIndicator() {
        if ( totalCost >= 30.00 && totalCost < 50) {
            console.log('check')
            return  "warning";
        }

        if (totalCost >= 50.00) {
            console.log('check 2')
            return  "danger";
        }

    }

    return {
        radioBill,
        callRadio,
        smsRadio,
        totalR,
        colorIndicator

    }
}