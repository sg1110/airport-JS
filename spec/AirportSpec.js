describe("Sunny Airport", function() {
  var airport;

  beforeEach(function() {
    weather = new Weather();
    spyOn(weather,'is_it_stormy').and.returnValue(false);
    airport_sunny = new Airport(weather);
  });

  it("should be able to land a plane at the airport", function() {
    airport_sunny.land("plane");
    expect(airport_sunny.planes_landed).toEqual(["plane"]);
  });

  it("should be able to instruct a plane to take off", function() {
    airport_sunny.land("plane")
    airport_sunny.take_off("plane")
    expect(airport_sunny.planes_landed).not.toEqual(["plane"])
    expect(airport_sunny.planes_landed).toEqual([])
  });

  it("should be able to instruct a plane to take off", function() {
    airport_sunny.land("plane")
    airport_sunny.land("plane2")
    airport_sunny.take_off("plane")
    expect(airport_sunny.planes_landed).toEqual(["plane2"])
  });

  it("should confirm that plane has left the airport_sunny", function() {
    airport_sunny.land("plane")
    expect(airport_sunny.take_off("plane")).toEqual("Plane plane has left the airport");
  });


});

describe("Stormy Airport", function() {
  var airport;

  beforeEach(function() {
    weather = new Weather();
    spyOn(weather,'is_it_stormy').and.returnValue(true);

    airport_stormy = new Airport(weather);
  });

  it("should throw an error on landing because weather is stormy", function() {
    expect(function(){airport_stormy.land("plane")}).toThrow(("Can't land - stormy weather!"));
  });

  describe ("airport with plane", function() {
    beforeEach(function() {
    spyOn(airport_stormy, 'planes_landed').and.returnValue(["plane"])
    });

    it("should throw an error on take off because weather is stormy", function() {
      expect(function(){airport_stormy.take_off("plane")}).toThrow(("It is currently stormy - No Go!"));
    });
  });

});


describe("Full airport", function() {
  var airport;

  beforeEach(function() {
    weather = new Weather();
    spyOn(weather,'is_it_stormy').and.returnValue(false);
    airport_sunny = new Airport(weather);
  });

it ("should return true if there are 5 or more planes at the airport", function(){
  airport_sunny.land("plane")
  airport_sunny.land("plane")
  airport_sunny.land("plane")
  airport_sunny.land("plane")
  airport_sunny.land("plane")
  expect(airport_sunny._full()).toEqual(true)
})

it ("should return FALSE if there are 5 or more planes at the airport", function(){
  expect(airport_sunny._full()).toEqual(false)
})


it("should prevent airport from landing if it is full", function(){
  airport_sunny.land("plane")
  airport_sunny.land("plane")
  airport_sunny.land("plane")
  airport_sunny.land("plane")
  airport_sunny.land("plane")
  expect(function(){airport_sunny.land("plane")}).toThrow("Airport full!");
})
});
