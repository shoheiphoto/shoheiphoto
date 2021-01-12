const generateRandomNumber = () => {
  return Math.round(Math.random() * 1000);
};

const write = (targeDOM, innerHTML) => {
  targeDOM.innerHTML = innerHTML;
};

const isEven = num => {
  return num % 2 === 0;
};

const isPrimeNumber = num => {
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeFactorization = num => {
  const primeFactors = [];
  if (num === 1) return [1];

  for (i = 2; i <= num; i++) {
    while (num % i === 0) {
      primeFactors.push(i);
      num /= i;
    }
  }
  return primeFactors;
};

const generatePrimeFactorizationResultMessage = primeNumbers => {
  return primeNumbers.map(function (num, index) {
    const stringNum = num.toString();
    if (index === 0) return stringNum;
    return ' x ' + stringNum;
  }).concat('となりますね。').join('');
};

const main = () => {
  const num = generateRandomNumber();
  write(document.getElementById('currentNumber'), '数値は' + num + 'です。');
  if (isEven(num)) {
    write(document.getElementById('messageForEvenOrOdd'), '偶数です。<br>');
  } else {
    write(document.getElementById('messageForEvenOrOdd'), '奇数です。<br>');
  }
  if (isPrimeNumber(num)) {
    write(document.getElementById('messageForPrimeNumber'), '<h2>素数です！にゃにゃ</h2>');
    return;
  } else {
    write(document.getElementById('messageForPrimeNumber'), '<p>素数ではありません。</p>');
  }
  write(document.getElementById('primeFactorizationTitle'), '<p>↓↓以下、素因数分解してみよう。↓↓</p>');
  write(document.getElementById('primeFactorizationResult'), generatePrimeFactorizationResultMessage(primeFactorization(num)));
};

main();