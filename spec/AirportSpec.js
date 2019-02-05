describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();

  });

  it("should be able to land a plane at the airport", function() {
    airport.land("plane");
    expect(airport.planes_landed).toEqual(["plane"]);
  });
});
