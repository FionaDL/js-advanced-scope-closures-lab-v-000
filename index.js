function produceDrivingRange(range) {
    return function(string1, string2) {
      let blockStart = parseInt(string1)
      let blockEnd = parseInt(string2)
      let amount = blockEnd-blockStart
        if (amount < range) {
          return `within range by ${range-amount}`
        }
        else {
          return `${amount-range} blocks out of range`
        }
    }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
  }
}
}

const Driver = createDriver()
