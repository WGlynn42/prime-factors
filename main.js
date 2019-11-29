let userNumber
userNumber = prompt('For which number would you like to find the prime factors?')

alert(`You have selected ${userNumber}`)


function primeFactors(num) {
  function primeNumbers(num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0) return false;
    }
    return true;
  }
  const result = [];
  for (let i = 2; i <= num; i++)
  {
    while (primeNumbers(i) && num % i === 0)
    {
      if (!result.includes(i)) result.push(i);
      num /= i;
    }
  }
  return result;
}

console.log(primeFactors(userNumber));
