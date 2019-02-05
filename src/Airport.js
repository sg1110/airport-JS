function Airport () {
  this.planes_landed = []
}
Airport.prototype.land = function(plane) {
  this.planes_landed.push(plane)
}

Airport.prototype.take_off = function(plane) {
  this.planes_landed = this.planes_landed.filter(function(landed_plane) {
    return landed_plane != plane;
  }); return ("Plane " + plane + " has left the airport")
}
