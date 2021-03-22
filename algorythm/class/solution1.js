class Car {
  constructor(brand, isClean, approxRang) {
      this.brand = brand
      this.isClean = isClean
      this.approxRang = approxRang
  }

  isAvailable() {
    return this.isClean && this.approxRang >= 50 ? true : false
  }
}

class CarFinder {
  static getAvailable(cars, brand) {
    let result = 0;

    cars.map(car => {
     if (car.brand === brand && car.isAvailable()) {
      result++
     }
    })

    return result
  }
}






 /* 
isAvailable() {
return this.isClean && this.approxRang >= 50
}
}
class CarFinder {
static getAvailable(cars, brand) {
let result = 0
for (let i = 0; i < cars.length; i++) {
  const car = cars[i]
  if (car.brand === brand && car.isAvailable()) {
    result +=1
  }
}
return result
}
}
*/

module.exports = { Car, CarFinder }
