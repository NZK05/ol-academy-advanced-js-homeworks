const commonCarFunctions = {
    addOwner(owner) {
      this.owners.push(owner);
    },
    removeOwner(owner) {
      let index = this.owners.indexOf(owner);
      if (index !== -1) {
        this.owners.splice(index, 1);
      }
    },
    getOwnersCount() {
      return this.owners.length;
    },
    getOwnerNames() {
      return this.owners.map(function(owner) {
        return owner.fullName();
      })
    },
    getCarInfo() {
      return this.make + " " + this.model + " " + "released in" + " " + this.year;  
    },
    getFullInfo() {
      return this.make + " " + this.model + " from " + this.year + ". " + 
             this.getOwnersCount() + " person owns this car. These are - " + 
             this.getOwnerNames() + ".";
    },
  };
  
  const commonPersonFunctions = {
    fullName() {
      return this.name + " " + this.surname;
    },
    countCars() {
      return this.cars.length;
    },
    buysCar(car) {
      this.cars.push(car);
      car.addOwner(this);
    },
    sellsCar(car) {
      let index = this.cars.indexOf(car);
      if (index !== -1) {
        this.cars.splice(index, 1);
        car.removeOwner(this);
      }
    },
    getAllCarsInfo() {
      let carInfo = this.cars.map(function(car) {
        return car.getCarInfo();
      })
  
      return this.fullName() + " owns these cars: " + carInfo + ".";
    },
  };
  
  function createCar(make, model, year) {
    const car = {
      make,
      model,
      year,
      owners: [],
    };
  
    Object.assign(car, commonCarFunctions);
  
    return car;
  }
  
  function createPerson(name, surname, age, gender, cars = []) {
    const person = {
      name,
      surname,
      age,
      gender,
      cars,
    };
  
    Object.assign(person, commonPersonFunctions);
  
    return person;
  }
  
  let daniel916 = createPerson("Daniel", "Barbakadze", 21, "M", []);
  let ilona = createPerson("Elon", "Musk", 30, "M");
  let duti_picoti = createCar("BMW", "525", "1999");
  let stodevianosto = createCar("Mercedes", "E190", 1991);
  
  daniel916.buysCar(duti_picoti); // adds passed car
  daniel916.buysCar(stodevianosto); // adds passed car
  daniel916.sellsCar(duti_picoti); // removes passed car
  ilona.buysCar(stodevianosto); // adds passed car
  ilona.buysCar(duti_picoti); // adds passed car
  
  console.log({
    daniel: {
      fullName: daniel916.fullName(),
      countCars: daniel916.countCars(),
      getAllCarsInfo: daniel916.getAllCarsInfo(),
    },
    elon: {
      fullName: ilona.fullName(),
      countCars: ilona.countCars(),
      getAllCarsInfo: ilona.getAllCarsInfo(),
    },
    duti_picoti: {
      getOwnersCount: duti_picoti.getOwnersCount(),
      getOwnerNames: duti_picoti.getOwnerNames(),
      getFullInfo: duti_picoti.getFullInfo(),
      getCarInfo: duti_picoti.getCarInfo(),
    },
    stodevianosto: {
      getOwnersCount: stodevianosto.getOwnersCount(),
      getOwnerNames: stodevianosto.getOwnerNames(),
      getFullInfo: stodevianosto.getFullInfo(),
      getCarInfo: stodevianosto.getCarInfo(),
    },
  });