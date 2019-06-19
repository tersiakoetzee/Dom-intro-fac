// get a reference to the sms or call radio buttons
var myRadio = document.querySelectorAll('.billItemTypeWithSettings');
// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");

var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting1 = document.querySelector(".warningLevelSetting");
var criticalLevelSetting1 = document.querySelector(".criticalLevelSetting");

var updateSettingsBtn = document.querySelector(".updateSettingsBtn");
var settingsBillAddBtnElem = document.querySelector(".settingsBillAddBtn");

var callsTotals = 0;
var smsTotals = 0;
var totalCost = 0;
var callCostTest = 0;
var smsCostTest = 0;
var criticalLevelSetting = 0;
var warningLevelSetting = 0;

var FactorySettingsBill1 = FactorySettingsBill();

function updateBillSettings() {


    var warningLevelVal = Number(warningLevelSetting1.value);
    var criticalLevelVal = Number(criticalLevelSetting1.value);

    if (FactorySettingsBill1.getTotals() >= criticalLevelVal) {
        totalSettings.classList.remove("warning")
        totalSettings.classList.add("danger")
        settingsBillAddBtnElem.disabled = true;
    }
    else if (FactorySettingsBill1.getTotals() >= warningLevelVal) {
        totalSettings.classList.remove("danger")
        totalSettings.classList.add("warning")
    }
    else if (FactorySettingsBill1.getTotals() < warningLevelVal) {
        totalSettings.classList.remove("warning")
        totalSettings.classList.remove("danger")
    }

    if (FactorySettingsBill1.getTotals() < criticalLevelVal) {
        settingsBillAddBtnElem.disabled = false;
    }
}

function settingBillTotal() {

    callCostTest = Number(callCostSetting.value);
    smsCostTest = Number(smsCostSetting.value);

    for (var i = 0; i < myRadio.length; i++) {
        var elem = myRadio[i];
        if (elem.checked == true) {
            if (elem.value === "call") {
                FactorySettingsBill1.setCallTotal(callCostTest)
            } else if (elem.value === "sms") {
                FactorySettingsBill1.setSmsTotal(smsCostTest)
            }
        }

        callTotalSettings.innerHTML = FactorySettingsBill1.getCallTotal()
        smsTotalSettings.innerHTML = FactorySettingsBill1.getSmsTotal()
        totalCost.innerHTML = FactorySettingsBill1. getTotals()
        totalSettings.innerHTML = FactorySettingsBill1.getTotals()
    }

    var warningLevelVal = Number(warningLevelSetting1.value);
    var criticalLevelVal = Number(criticalLevelSetting1.value);


    FactorySettingsBill1.updateSettings(criticalLevelVal, warningLevelVal)


    if (FactorySettingsBill1.getTotals() >= criticalLevelVal) {
        totalSettings.classList.remove("warning")
        totalSettings.classList.add("danger")
        settingsBillAddBtnElem.disabled = true;
    }
    else if (FactorySettingsBill1.getTotals() >= warningLevelVal) {
        totalSettings.classList.remove("danger")
        totalSettings.classList.add("warning")
    }
    else if (FactorySettingsBill1.getTotals() < warningLevelVal) {
        totalSettings.classList.remove("warning")
        totalSettings.classList.remove("danger")
    }

    if (FactorySettingsBill1.getTotals() <= criticalLevelVal) {
        settingsBillAddBtnElem.disabled = false;
    }
}

updateSettingsBtn.addEventListener('click', updateBillSettings);
settingsBillAddBtnElem.addEventListener('click', settingBillTotal);