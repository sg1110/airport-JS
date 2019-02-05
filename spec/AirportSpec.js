describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();

  });

  it("should be able to land a plane at the airport", function() {
    airport.land("plane");
    expect(airport.planes_landed).toEqual(["plane"]);
  });

  it("should be able to instruct a plane to take off", function() {
    airport.land("plane")
    airport.take_off("plane")
    expect(airport.planes_landed).not.toEqual(["plane"])
    expect(airport.planes_landed).toEqual([])
  });

  it("should be able to instruct a plane to take off", function() {
    airport.land("plane")
    airport.land("plane2")
    airport.take_off("plane")
    expect(airport.planes_landed).toEqual(["plane2"])
  });

});
