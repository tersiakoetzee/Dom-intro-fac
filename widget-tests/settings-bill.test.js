describe('The Add Button with settings input bill function ', function () {
  it('should Add call total if call has been selected', function () {
    var settingInstance = FactorySettingsBill();
    settingInstance.setCallTotal(2);
    settingInstance.setCallTotal(2);

    assert.equal(settingInstance.getTotals('call'), 4);
  });

  it('should count sms total if sms has been selected',function () {
    var settingInstance = FactorySettingsBill();

      settingInstance.setSmsTotal(3);
      settingInstance.setSmsTotal(3);
      settingInstance.setSmsTotal(3);

      assert.equal(settingInstance.getTotals(), 9);

    });


  it('should count call + sms total', function () {
    var settingInstance = FactorySettingsBill();


    settingInstance.setCallTotal(4);
    settingInstance.setSmsTotal(9);

    assert.equal(settingInstance.getTotals(), 13);

  });


  it('should return true if total cost is higher than warning level.', function () {
    var settingInstance = FactorySettingsBill();

    settingInstance.getTotals(13);

    assert.equal(settingInstance.warningLevel(13), false);

  });

  it('total cost Should not exceed critical level.', function () {
    var FactorySettingsBill1 = FactorySettingsBill();

    FactorySettingsBill1.getTotals(13)

    assert.equal(FactorySettingsBill1.criticalLevel(13),false);


  })
})
