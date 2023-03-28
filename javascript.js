function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owners = [];

  this.addOwner = function(owner) {
    this.owners.push(owner);
  };

  this.removeOwner = function(owner) {
    let index = this.owners.indexOf(owner);
    if (index === -1) {
      this.owners.splice(index, 1);
    }
  };

  this.getOwnersCount = function() {
    return this.owners.length;
  };

  this.getOwnerNames = function() {
    return this.owners.map(function(owner) {
      return owner.fullName();
    })
  };

  this.getCarInfo = function(){
    return this.make + " " + this.model + " " + "released in" + " " + this.year;  
  };

  this.getFullInfo = function() {
    return this.make + " " + this.model + " from " + this.year + ". " + 
           this.getOwnersCount() + " person owns this car. These are - " + 
           this.getOwnerNames() + ".";
  };
}

function Person(name, surname, age, gender, cars = []) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
  this.cars = cars;

  this.fullName = function() {
    return this.name + " " + this.surname;
  };

  this.countCars = function() {
    return this.cars.length;
  };

  this.buysCar = function(car) {
    this.cars.push(car);
    car.addOwner(this);
  };

  this.sellsCar = function(car) {
    let index = this.cars.indexOf(car);
    if (index === -1) {
      this.cars.splice(index, 1);
      car.removeOwner(this);
    }
  };

  this.getAllCarsInfo = function() {
    let carInfo = this.cars.map(function(car) {
      return car.getCarInfo();
    })

    return this.fullName() + " owns these cars: " + carInfo + ".";
  };
};