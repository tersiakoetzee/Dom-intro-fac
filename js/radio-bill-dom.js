// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo ");
var totalTwo = document.querySelector(".totalTwo");

var tempsource7 = document.querySelector(".userTemplate").innerHTML;
var userTemplate7 = Handlebars.compile(tempsource1);
var data7 = document.querySelector(".radioData");

var radioBillFactory = RadioFactory();

 radBillTotal();
function radBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
    }
    radioBillFactory.radioBill(billItemType);
        var radioData = userTemplate7({
            call: "R"+ radioBillFactory.callRadio(),
            sms: "R"+ radioBillFactory.smsRadio(),
            total: "R"+ radioBillFactory.totalR(),
        
        });
        data7.innerHTML = radioData;
    
      
        Handlebars.registerHelper("warn", function () {
            if (radioBillFactory.colorIndicator(radioBillFactory.totalR()) === "warning") {
            
                return true;
            }
            
            
        });
        
        Handlebars.registerHelper("danger", function () {
             if (radioBillFactory.colorIndicator(radioBillFactory.totalR()) === "danger") {
                return true;
            }
        });
    
    }

    radioBillAddBtn.addEventListener('click', radBillTotal);