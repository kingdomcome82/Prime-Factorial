function getPrimes() {
  var input = document.querySelector('input');
  var display = document.querySelector('#displayParagraph');
  var primes = [];

  var inputNumber = input.value;

  for (i=2;i<inputNumber;i++) {
    if(inputNumber%i === 0) {
      primes.push(i);
      inputNumber = inputNumber/i;
      i=1;
    }
  }


  primes.push(inputNumber);
  display.innerHTML = primes;
}
