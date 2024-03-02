//Print 1 to N using Recursion

function printNos(maxNumber, arrayList) {
    let lastNumber = arrayList[arrayList.length - 1];
    if (lastNumber >= maxNumber) {
        return arrayList;
    }
    else {
        arrayList.push(lastNumber + 1);
        return printNos(maxNumber, arrayList);
    }
}


// Print Name n times
function printName(n, name) {
    if (n == 0) return;
    n = n - 1;
    console.log(name);
    if (n >= 1) {
        return printName(n, name);
    }
}

// Sum of number

function sumOf(number, sum) {
    let currentNumber = number;
    if (number <= 0) {
        return sum;
    }
    else {
        let decrement = number - 1
        return sumOf(decrement, sum + currentNumber);
    }
}

// print factorial numbers bellow given number

function factorialNumbers(number) {
    if (number <= 1) {
        return number;
    }
    return number * factorialNumbers(number - 1);
}

function factorialList(maxNumber, index, factorsSumList) {
    let factorResult = factorialNumbers(index);
    if (factorResult <= maxNumber) {
        factorsSumList.push(factorResult);
        let nextIndex = index + 1;
        return factorialList(maxNumber, nextIndex, factorsSumList);
    }
    else {
        return factorsSumList;
    }
}
// Reverse an array
function reverseArray(arrayList) {
    return performRevers(arrayList, arrayList.length - 1, []);
}

function performRevers(arrayList, currentIndex, newArray) {

    if (newArray.length == arrayList.length) {
        return newArray;
    }
    else {
        newArray.push(arrayList[currentIndex]);

        return performRevers(arrayList, currentIndex - 1, newArray);
    }
}


// Check if string is palindrome

function isPalindrome(string) {

    let revString = '';
    revString = reverseString(string, string.length, revString);
    if (revString == string) {
        return true;
    }
    return false;

}

function reverseString(string, stringIndex, revString) {


    if (stringIndex <= 0) {
        return revString;
    }
    else {
        stringIndex--;
        let newStr = revString + string[stringIndex];
        return reverseString(string, stringIndex, newStr);
    }

}

//generate a fibonnice seres

function fibonacciNumbers(number) {

    if (number == 0) {
        return [0];
    }
    else if (number == 1) {
        return [0, 1];
    }
    else {
        let listOfNumber = [0, 1];
        return generateNumber(number, listOfNumber);
    }


}

function generateNumber(sumNumber, listOfNumber) {


    let lastNumber = listOfNumber[listOfNumber.length - 1];
    let lastSecondNumber = listOfNumber[listOfNumber.length - 2];
    let sum = lastSecondNumber + lastNumber;
    if (sum >= sumNumber) {
        return listOfNumber;
    }
    else {
        listOfNumber.push(sum);
        return generateNumber(sumNumber, listOfNumber);
    }


}
console.log(fibonacciNumbers(3));
