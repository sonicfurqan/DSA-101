//for givin input check if it is perfectly divisible by its own number 
const countDigits = (numb) => {
    let number = [];
    let divideByItSelfCounter = 0;
    //storing orignal number to compute divising
    let inputNumb = numb;
    while (numb != 0) {
        //getting reminder after division, it will give last number from input
        let reminder = parseInt(numb % 10)
        //getting result after division, it will return digits other then last number
        numb = parseInt(numb / 10);

        //if reminder is not 0 then divide input by that number, if reminder is 0 then result it is perfect division
        if (reminder != 0 && inputNumb % reminder == 0) {
            console.log(inputNumb % reminder);
            divideByItSelfCounter++;
        }

        number.push(reminder);
    }

    console.log(number, divideByItSelfCounter);

}
//convert the given number to 32 bits and inverse
const reverseBits = (numb) => {
    let bitsNumb = numb.toString(2);
    let fullUnsigned = bitsNumb.padStart(32, '0');
    let reverseUnsigned = '';
    for (let i = fullUnsigned.length - 1; i > 0; i--) {
        reverseUnsigned += fullUnsigned[i];
    }

    console.log(fullUnsigned);
    console.log(reverseUnsigned);
    console.log(parseInt(fullUnsigned, 2));
    console.log(parseInt(reverseUnsigned, 2));
}

//Check whether a given number ’n’ is a palindrome number.

const checkPalindrome = (num) => {

    let value = num;

    let reverseValue = '';

    while (value > 0) {
        reverseValue += value % 10;
        value = parseInt(value / 10);
        console.log(value)

    }
    if (num == parseInt(reverseValue)) {
        console.log('Palindrome');
    }
    else {
        console.log('No');
    }


}

const checkGCD = (num1, num2) => {

    let loopLimit = num2;
    if (num1 < num2) {
        loopLimit = num1;
    }
    let dividingNumber = 0;
    for (let i = 1; i <= loopLimit; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            dividingNumber = i;
        }
    }
    console.log(dividingNumber);

}


const checkAmstrong = (num) => {

    let value = num;

    let numLength = (num + '').length;

    let resultNum = 0;

    while (value > 0) {

        let reminder = value % 10;
        let powerValue = reminder;
        for (let i = 1; i <= numLength - 1; i++) {
            powerValue = powerValue * reminder;
        }
        resultNum += powerValue;

        value = parseInt(value / 10);
        console.log(value);
    }
    console.log(num);
    console.log(resultNum);
    if (num == resultNum) {
        console.log('Amstrong')
    }
    else {
        console.log('No');
    }

}


const sumOfDivisors = (num) => {

    let result = 0;
    for (let i = 1; i <= num; i++) {
        console.log(i);
        console.log(num % i);
        if (num % i == 0) {
            console.log(i);
            result += i;
        }
    }
    console.log(result);
}

const primeNumber = (num) => {

    let isPrime = true;
    for (let i = 2; i <= num - 1; i++) {

        if (num % i == 0) {
            i = num;
            isPrime = false;
        }
    }

    console.log(isPrime);
}
