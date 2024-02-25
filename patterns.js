/* 
Print  Square
***
***
***
*/

const printSquareStars = (lines) => {
    let str = '';

    //for loop for iteration of new lines
    for (let i = 0; i < lines; i++) {
        //for loop for iteration of number of stars
        for (let j = 0; j < lines; j++) {
            str += '*';
        }
        str += '\r\n';
    }
    console.log(str);

}


/* 
Print 
*
**
***
****
*****
*/
const printHalfPyramid = (lines) => {
    let str = '';
    //for loop for iteration of new lines
    for (let i = 1; i <= lines; i++) {
        //for loop for iteration of number of stars where stars are incremented by 1 for each new line
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        str += '\r\n';
    }
    console.log(str);
}



/* 
Print numbers
1
12
123
*/
const printHalfPyramidNumbers = (lines) => {
    let str = '';
    //for loop for iteration of new lines
    for (let i = 1; i <= lines; i++) {
        //for loop for iteration of number where number are increased by 1 for each new line
        for (let j = 1; j <= i; j++) {
            str += j;
        }
        str += '\r\n';
    }
    console.log(str);
}
/* 
Print numbers
1
22
333
*/
const printHalfPyramidLineNumbers = (lines) => {
    let str = '';
    //for loop for iteration of new lines
    for (let i = 1; i <= lines; i++) {
        //for loop for iteration of number where number represent line
        for (let j = 1; j <= i; j++) {
            str += i;
        }
        str += '\r\n';
    }
    console.log(str);
}


/* 
Print 
*****
****
***
**
*
*/
const printReverseHalfPyramid = (lines) => {
    let str = '';
    //for loop for iteration of new lines
    for (let i = 1; i <= lines; i++) {
        //for loop for iteration of number of stars where stars are decremented by 1 for each new line
        for (let j = i; j <= lines; j++) {
            str += '*';
        }
        str += '\r\n';
    }
    console.log(str);
}


/* 
Print numbers
123
12
1


*/
const printReverseHalfPyramidNumbers = (lines) => {
    let str = '';
    //for loop for iteration of new lines
    for (let i = 1; i <= lines; i++) {
        //for loop for iteration of number where number are increased by 1 for each new line
        for (let j = 1; j <= lines + 1 - i; j++) {
            str += j;
        }
        str += '\r\n';
    }
    console.log(str);
}



/* 
Print 
  *
 ***
*****
*/
const printPyramid = (lines) => {
    let str = '';
    //calculating max number of charters in line
    let maxLine = lines + (lines - 1);

    //for loop for lines
    for (let i = 0; i < lines; i++) {
        //calculating number of blanks needed on both side of star
        let noOfBlankSpace = lines - i - 1;
        //calculating index value of blanks that star is not needed on right hand side
        let rightBlank = (maxLine - 1) - noOfBlankSpace;

        //for loop to print 
        for (let j = 0; j < maxLine; j++) {
            //if j is less then no of blanks needed then print blank
            if (j < noOfBlankSpace) {
                str += ' ';
            }
            //if j is less then index of right hand blank then print star
            else if (j <= rightBlank) {
                str += '*';
            }
        }

        str += '\r\n';
    }
    console.log(str);
}

/*
Print 
*****
 *** 
  *
 

*/
const printReversePyramid = (lines) => {
    let str = '';
    //calculating max number of charters in line
    let maxLine = lines + (lines - 1);

    //for loop for lines, looping from bottom to top to reverse pyramid
    for (let i = lines; i > 0; i--) {
        //calculating number of blanks needed on both side of star
        let noOfBlankSpace = lines - i - 1;
        //calculating index value of blanks that star is not needed on right hand side
        let rightBlank = (maxLine - 1) - noOfBlankSpace;

        //for loop to print 
        for (let j = 0; j < maxLine; j++) {
            //if j is less then no of blanks needed then print blank
            if (j <= noOfBlankSpace) {
                str += ' ';
            }
            //if j is less then index of right hand blank then print star
            else if (j < rightBlank) {
                str += '*';
            }
        }

        str += '\r\n';
    }
    console.log(str);
}


/*
Print 
  *
 ***
*****
*****
 *** 
  *
*/
const printDiamond = (lines) => {
    //This is basically printing pyramid and inverse pyramid together,

    //... code of printPyramid and printReversePyramid bellow each other
    printPyramid(lines)
    printReversePyramid(lines)
}


/*
Print 
  *
  **
  ***
  ***
  ** 
  *
*/
const printArrow = (lines) => {
    let str = '';
    //loop for top part of arrow
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j <= i; j++) {
            str += '*';
        }
        str += '\r\n';
    }

    //loop for bottom part of arrow
    for (let i = lines - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            str += '*';
        }
        str += '\r\n';
    }

    console.log(str);
}


/*
Print
1
0 1
1 0 1
0 1 0 1
*/

const print1AND0HalfPyramid = (lines) => {
    let str = '';
    let zeroOneStatus = true;
    for (let i = 0; i < lines; i++) {
        //if index is even start with 1 else 0
        if (i % 2 === 0) {
            zeroOneStatus = true;
        }
        else {
            zeroOneStatus = false;
        }

        for (let j = 0; j <= i; j++) {
            str += zeroOneStatus ? '1 ' : '0 ';
            zeroOneStatus = !zeroOneStatus;
        }

        str += '\r\n';

    }

    console.log(str);
}
print1AND0HalfPyramid(3);

/*
Print
1         1
1 2     2 1
1 2 3 3 2 1
*/
const printCrown = (lines) => {
    let str = '';
    let blankSpaceOffset = (lines - 1) * 2;
    //loop for each line
    for (let i = 1; i <= lines; i++) {

        //adding right crown 
        for (let j = 1; j <= i; j++) {
            str += j + ' ';
        }

        for (let j = 1; j <= blankSpaceOffset; j++) {
            str += '  ';
        }

        //adding left crown
        for (let j = i; j > 0; j--) {
            str += j + ' ';
        }

        str += '\n\r';
        blankSpaceOffset -= 2;
    }


    console.log(str);
}

/*
Print
1     
2 3   
4 5 6 
*/

const printHalfPyramidLinearNumbers = (lines) => {
    let str = '';

    //counter for printing number
    let count = 1;
    //loop for lines
    for (let i = 1; i <= lines; i++) {
        //loop for char in line, ends at line number index for offset
        for (let j = 1; j <= i; j++) {

            str += count + ' ';
            count++;
        }
        str += '\n\r';
    }

    console.log(str);
}

/*
Print
A     
AB   
ABC
*/

const printHalfPyramidLinearAlphabet = (lines) => {
    let str = '';


    //loop for lines
    for (let i = 1; i <= lines; i++) {
        //counter for printing number
        let count = 65;
        //loop for char in line, ends at line number index for offset
        for (let j = 1; j <= i; j++) {

            str += String.fromCharCode(count) + ' ';
            count++;
        }
        str += '\n\r';
    }

    console.log(str);
}
/*
Print
A     
BB   
CCC
*/

const printHalfPyramidLinearAlphabetPerLine = (lines) => {
    let str = '';

    let count = 65;
    //loop for lines
    for (let i = 1; i <= lines; i++) {
        //counter for printing number

        //loop for char in line, ends at line number index for offset
        for (let j = 1; j <= i; j++) {

            str += String.fromCharCode(count) + ' ';

        }
        count++;
        str += '\n\r';
    }

    console.log(str);
}

/*
Print
ABC
AB
A     
   

*/

const printHalfReversePyramidLinearAlphabet = (lines) => {
    let str = '';


    //loop for lines
    for (let i = 1; i <= lines; i++) {
        //counter for printing number
        let count = 65;
        //loop for char in line, ends at line number index for offset
        for (let j = lines; j >= i; j--) {

            str += String.fromCharCode(count) + ' ';
            count++;
        }
        str += '\n\r';
    }

    console.log(str);
}


/*
Print
  A
 ABA     
ABCBA    
*/

const printAlphabetPyramid = (lines) => {
    let str = '';
    let maxCharInLine = lines + (lines - 1);


    //loop for lines
    for (let i = 0; i < lines; i++) {
        //calculating number of space on both side
        let blankSpaceOffset = lines - i - 1;
        //calculating index of blank space for right side
        let rightBlankOffset = maxCharInLine - blankSpaceOffset;
        //initialize ascii char number
        let count = 65;
        for (let j = 0; j < maxCharInLine; j++) {
            //if index is under blank space offset then print space
            if (j < blankSpaceOffset) {
                str += ' ';
            }
            //if index is less then right side space index start then print char
            else if (j < rightBlankOffset) {
                str += String.fromCharCode(count);
                //if index is less then half of max char, increment count else decrement count
                if (j < Math.ceil(maxCharInLine / 2) - 1) {
                    count++;
                }
                else {
                    count--;
                }



            }

        }
        str += '\n\r';
    }

    console.log(str);
}

printAlphabetPyramid(3)


/*
Print
C     
BC   
ABC
*/

const printHalfPyramidLinearReverseAlphabetPerLine = (lines) => {
    let str = '';


    //loop for lines
    for (let i = 1; i <= lines; i++) {
        //initializing max char
        let count = 65 + lines;
        //subtracting count based on current index to determine first character
        count -= i;
        //loop for char in line, ends at line number index for offset
        for (let j = 1; j <= i; j++) {

            str += String.fromCharCode(count) + ' ';
            count++;
        }

        str += '\n\r';
    }

    console.log(str);
}


/*
Print
******
**  **
*    *
*    *
**  **
******
*/
const printSymmetricVoidPattern = (lines) => {
    let str = '';
    let maxLines = lines + lines;
    let maxChar = maxLines;
    //initialize offset count for blank space
    let blankSpaceOffset = 0;
    //loop for first part of pattern
    for (let i = 0; i < lines; i++) {
        //loop for left part of pattern
        for (let j = 0; j < lines - (blankSpaceOffset / 2); j++) {
            str += '*';
        }
        //loop for middle part of pattern
        for (let j = 0; j < blankSpaceOffset; j++) {
            str += ' ';
        }
        //loop for right part of pattern
        for (let j = 0; j < lines - (blankSpaceOffset / 2); j++) {
            str += '*';
        }


        blankSpaceOffset += 2;



        str += '\n\r';


    }
    //loop for last part of pattern
    for (let i = lines; i < maxChar; i++) {
        blankSpaceOffset -= 2;

        for (let j = 0; j < lines - (blankSpaceOffset / 2); j++) {
            str += '*';
        }
        for (let j = 0; j < blankSpaceOffset; j++) {
            str += ' ';
        }
        for (let j = 0; j < lines - (blankSpaceOffset / 2); j++) {
            str += '*';
        }


        str += '\n\r';
    }

    console.log(str);

}



/*
Print 
  *    *
  **  **
  ******
  **  **
  *    *
*/
const printMirrorArrow = (lines) => {
    let str = "";
    let totalLines = (lines + lines) - 1;

    let totalCharacters = lines * 2;

    let blankSpaceOffset = totalCharacters;
    for (let i = 0; i < totalLines; i++) {
        if (i > lines - 1) {
            blankSpaceOffset += 2;
        }
        else {
            blankSpaceOffset -= 2;
        }

        for (let j = 0; j < (totalCharacters - blankSpaceOffset) / 2; j++) {
            str += "* ";
        }
        for (let k = 0; k < blankSpaceOffset; k++) {
            str += "  ";
        }
        for (let j = 0; j < (totalCharacters - blankSpaceOffset) / 2; j++) {
            str += "* ";
        }

        str += "\n";


    }
    console.log(str);
}

/*
Print 
  * * * *
  *     *
  *     *
  *     *
  * * * *
*/
const printSquareBox = (lines) => {
    let str = "";
    let blankSpace = 0;
    for (let i = 0; i < lines; i++) {
        if (i == 0 || i == lines - 1) {
            blankSpace = 0;
        }
        else {
            blankSpace = lines - 2;
        }

        for (let j = 0; j < (lines - blankSpace) / 2; j++) {
            str += "* ";
        }
        for (let j = 0; j < blankSpace; j++) {

            str += "  ";
        }
        for (let j = 0; j < (lines - blankSpace) / 2; j++) {
            str += "* ";
        }
        str += "\n";
    }
    console.log(str);
}
