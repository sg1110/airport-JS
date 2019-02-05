function Weather(){
  this.weather_outlooks = ["sunny", "sunny", "sunny", "stormy"]
  }

  Weather.prototype.weather_now = function(){
    var forecast = this.weather_outlooks[Math.floor(Math.random()*this.weather_outlooks.length)]
    return forecast
  }

  Weather.prototype.is_it_stormy = function(){
    var a = this.weather_now()
    var b = "stormy"
    return a === b
  }
