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

