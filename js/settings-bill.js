var myRadio = document.querySelectorAll('.billItemTypeWithSettings');



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