function FactorySettingsBill() {


        var callsTotals = 0;
        var smsTotal = 0;
        var totals = 0;
        var criticalLevelSetting = 0;
        var warningLevelSetting = 0;
        var totalCost = 0;
    
        function setCallTotal(input) {
            callsTotals += input;
    
        }
        function setSmsTotal(input) {
            smsTotal += input;
        }
        function getSmsTotal() {
            return Number(smsTotal.toFixed(2));
        }
        function getCallTotal() {
            return Number(callsTotals.toFixed(2));
        }
        function getTotals() {
            totalCost = callsTotals + smsTotal;
            return Number(totalCost.toFixed(2));
        }
        function criticalLevel() {
            
            return totalCost < criticalLevelSetting;
        }
        function warningLevel() {
            return totalCost < warningLevelSetting;
        }
        function updateSettings(critical, warning) {
            criticalLevelSetting = critical;
            warningLevelSetting = warning;
        }
        
        return {
            getTotals,
            getCallTotal,
            getSmsTotal,
            setCallTotal,
            setSmsTotal,
            criticalLevel,
            warningLevel,
            updateSettings
    
        }
    };



