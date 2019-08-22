
var textTotalAddBtnElem = document.querySelector(".textBillTotal");
var billTypeEntered = document.querySelector(".billTypeText");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalCost");

var tempsource1 = document.querySelector(".userTemplate").innerHTML;
var userTemplate1 = Handlebars.compile(tempsource1);
var data1 = document.querySelector(".userData");

var textsfactory = FactoryTextBill();

textBillTotal();
function textBillTotal() {
    textsfactory.textBillString(billTypeEntered.value);
   var colorChange =  textsfactory.colorIndicator()

    var textData = userTemplate1({
        call: "R" + textsfactory.callTot(),
        sms: "R" + textsfactory.smsTot(),
        total: "R" + textsfactory.totalT(),
        colorChange


    });
    data1.innerHTML = textData;


    addToBillBtn.addEventListener('click', textBillTotal);


}