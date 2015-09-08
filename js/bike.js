function Bike(name, type, color){
  // attributes go here...
  this.name = name;
  this.bikeType = type;
  this.frameColor = color;
  this.condition = "ready to go!";
  this.WHEELS = 2;
}

Bike.prototype.takeForARide = function(miles){
  // code goes here...
  if (miles > 50){
    this.condition = 'needs a tune up';
  }
  else {
    'hello';
  }
};

Bike.prototype.tuneUp = function(){
  // code goes here...
  this.condition = 'ready to go!';
};
