
var textTotalAddBtnElem = document.querySelector(".textBillTotal");
var billTypeEntered = document.querySelector(".billTypeText");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalCost");

var tempsource1 = document.querySelector(".userTemplate").innerHTML;
var userTemplate1 = Handlebars.compile(tempsource1);
var data1 = document.querySelector(".userData");

var textfactory = FactoryTextBill();

textBillTotal();
function textBillTotal() {
    textfactory.textBillString(billTypeEntered.value);
    var textData = userTemplate1({
        call: "R" + textfactory.callTot(),
        sms: "R" + textfactory.smsTot(),
        total: "R" + textfactory.totalT(),

    });
    data1.innerHTML = textData;


    addToBillBtn.addEventListener('click', textBillTotal);

    // console.log(col)

    Handlebars.registerHelper("warn", function () {
        if (textfactory.colorIndicator(textfactory.totalT()) === "warning") {
            return true;
        }
    });

    Handlebars.registerHelper("danger", function () {
        if (textfactory.colorIndicator(textfactory.totalT()) === "danger") {
            return true;
        }
    });

}