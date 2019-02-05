describe("Weather", function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it("weather now should generate random weather", function(){
    spyOn(Math,'random').and.returnValue("0");
    expect(weather.weather_now()).toEqual("sunny")
  });

  it("should return true if the weather is stormy", function(){
    spyOn(weather,'weather_now').and.returnValue("stormy");
    expect(weather.is_it_stormy()).toEqual(true)
  });

});
