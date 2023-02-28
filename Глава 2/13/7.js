function isPrime(numb) {
  for (let i = 2; i <= Math.sqrt(numb); i++) {
    if (numb % i === 0) {
      return false
    }
  }
  return true
}

isPrime(10)