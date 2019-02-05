function Airport (weather = new Weather) {
  this.planes_landed = []
  this.weather = weather
}
Airport.prototype.land = function(plane) {
  this.planes_landed.push(plane)
}

Airport.prototype.take_off = function(plane) {

  if (this.weather.is_it_stormy() === true)
    {throw "It is currently stormy - No Go!"}

  else
    {this.planes_landed = this.planes_landed.filter(function(landed_plane) {
      return landed_plane != plane;
    }); return ("Plane " + plane + " has left the airport")}
  }


  // if (this.weather.is_it_stormy() === false)
  // {this.planes_landed = this.planes_landed.filter(function(landed_plane) {
  //   return landed_plane != plane;
  // }); return ("Plane " + plane + " has left the airport")}
  // else
  // {return "whatsup"
  // throw "It is currently stormy - No Go!"}
