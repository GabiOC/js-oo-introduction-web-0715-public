function Owner(name){
  // attributes go here...
  this.name = name;
  this.bikes = [];
}

Owner.prototype.buildBike = function(name, type, color){
  // code goes here...
  var bike = new Bike(name, type, color);
  this.bikes.push(bike);
};

Owner.prototype.rideBike = function(bikeName, miles){
  // code goes here...

  for(var i = 0; i < this.bikes.length; i++) {
    if (this.bikes[i].name == bikeName) {
      this.bikes[i].takeForARide(miles);
    };
  }
};
