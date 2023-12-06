    function isPrimeNumber(n) {
        if (n < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    function printPrimeNumbers(n) {
        let primeNumbers = [];
        for (let i = 2; i < n; i++) {
            if (isPrimeNumber(i)) {
                primeNumbers.push(i);
            }
        }
        return primeNumbers;
    }

    let n = 100;
    document.write(`Các số nguyên tố nhỏ hơn ${n} là: ${printPrimeNumbers(n)}`);
