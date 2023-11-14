function isPrime(num) {
if (num > 1) {
    const dilnyki = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    let output;
    dilnyki.forEach((digit, i) => {
      if (num % digit === 0 && num !== digit) {
        output = false
      } else if (i === dilnyki.length - 1 && output === undefined) {
        output = true
      }
    })
    return output
  } else {
    return false
  }
}