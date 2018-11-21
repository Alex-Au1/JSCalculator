//variable for the value of the first and second number
var number1, number2;

//variable for the operation usedcccccccc
var operation;

//variable to check if the number has a negative symbol
var negativeOn = false;

//variable to check if an operation or equal sign is pressed
var operationPressed = false, equalPressed = false;

//variable for the answer
var answer;

//variable for the length of the number
var length = 0;

//variable for checking if a decimal is in the number
var decimalOn = false;



//function for inputting numbers into the result box
function enterNumber(digitValue)  {

  if (length < 10) {

    //checks whether the user input is stored in the first number or the second
    //number

    //if the operation sign is pressed
    if (operationPressed == true) {
      number2 = document.getElementById("result").innerHTML = digitValue;
      length = 1;

      operationPressed = false;
      equalPressed = false;

      //if the equal sign is pressed
    } else if (equalPressed == true || answer == "Too long" || answer == "Error") {
      number1 = document.getElementById("result").innerHTML = digitValue;
      number1 = String(number1);

      //reset the values of the second number and the answer
      number2 = undefined;
      answer = undefined ;

      //resets the number as a positive ,the decimal and the value for the equal sign
      //being pressed
      equalPressed = false;
      negativeOn = false;
      decimalOn = false;
      length = 1;
      document.getElementById("length").innerHTML = "works";

      //if the user enters their second number
    } else if (typeof number1 == "number" && typeof answer == "undefined" ||
      operationPressed == false && typeof answer != "undefined") {

      number2 = document.getElementById("result").innerHTML += digitValue;
      length += 1;
      document.getElementById("length").innerHTML = "aloha";

        //if the user enters their first number
    } else {
      number1 = document.getElementById("result").innerHTML += digitValue;
      length += 1;
      document.getElementById("length").innerHTML = "hello";
    }
  }

}




//if the user enters a decimal
function enterDecimal() {

  if (length < 10) {
    //if there are no decimals in the number yet
    if (!decimalOn) {
      //checks whether the user input is stored in the first number or the second
      //number

      //if the operation sign is pressed
      if (operationPressed) {
        number2 = document.getElementById("result").innerHTML = "0.";
        length = 1;

        operationPressed = false;
        equalPressed = false;
        decimalOn = true;

      //if the equal sign is pressed
      } else if (equalPressed || answer == "Too long" || answer == "Error") {
        number1 = document.getElementById("result").innerHTML = "0.";
        number1 = String(number1);

        decimalOn = true;

        //reset the values of the second number and the answer
        number2 = undefined;
        answer = undefined ;
        operation = undefined;

        equalPressed = false;
        length = 1;

        //if the user enters their second number
      } else if (typeof number1 == "number" && typeof answer == "undefined" ||
        operationPressed == false && typeof answer != "undefined") {

        decimalOn = true;

        //show "0." only when the user presses the decimal point before the numbers
        if (typeof number2 == "undefined") {
          number2 = document.getElementById("result").innerHTML += "0.";
        } else {
          number2 = document.getElementById("result").innerHTML += ".";
        }

          //if the user enters their first number
      } else {
        decimalOn = true;

        //show "0." only when the user presses the decimal point before the numbers
        if (typeof number1 == "undefined") {
          number1 = document.getElementById("result").innerHTML += "0.";
        } else {
          number1 = document.getElementById("result").innerHTML += ".";
        }
      }
    }
  }
}




//function for inputting a negative sign
function enterPosNeg() {

  //if the number is not too long or is not infinite
  if (answer != "Too long" && answer != "Error") {
    //if the number is not negative
    if (!negativeOn) {

      //if the user is inputting the value for the first number
      if (typeof number1 == "string") {
        number1 = document.getElementById("result").innerHTML =
        "-" + document.getElementById("result").innerHTML;

        negativeOn = true;
        document.getElementById("tester").innerHTML = "negative on number1"

        //if the user is inputting the value for the second number
      } else if (typeof number2 == "string" || typeof answer != "undefined") {

        number2 = document.getElementById("result").innerHTML =
        "-" + document.getElementById("result").innerHTML;

        negativeOn = true;
        document.getElementById("tester").innerHTML = "negative on number2 added"
      }

      //removes the negative sign if the number is negative
    } else {
      //if the user is inputting the value for the first number
      if (typeof number1 == "string") {
        number1 = number1.slice(1,(number1.length));

        negativeOn = false;
        document.getElementById("result").innerHTML = number1;
        document.getElementById("tester").innerHTML = "negative on number1"

        //if the user is inputting the value for the second number
      } else if (typeof number2 == "string" || typeof answer != "undefined") {
        number2 = number2.slice(1,(number2.length));

        negativeOn = false;
        document.getElementById("result").innerHTML = number2;
        document.getElementById("tester").innerHTML = "negative on number2 deleted"
      }
    }
  }

}





//function for outputting the value of number1
function operationJoin(operator) {

  //checks to see if the user pressed an operation
  if (!operationPressed) {

    //checks if the answer is not too long and is not infinite
    if (answer != "Too long" && answer != "Error") {
      //will add/subtract/multiply/divide once the user has an input for the first
      //number
      if (typeof number1 == "string" && typeof number2 == "undefined") {
        number1 = Number(number1);
        document.getElementById("result").innerHTML = "";
        document.getElementById("testing").innerHTML = number1

        //defines the operator
        operation = operator;

        length = 0;

        //continues to add/subtract/multiply/divide once the user already found
        //the answer
      } else if (typeof answer != "undefined" || typeof number1 != "undefined"
    && typeof number2 != "undefined") {

        //remembers that the user pressed an operation
        operationPressed = true;

        //calculate the answer
        calculate();
        number1 = answer;

        length = 0;
        //defines the operator
        operation = operator;
      }

      //sets the next number entered as a positive number without a decimal
      negativeOn = false;
      decimalOn = false;
    }


  }

}



//finds the answer to the question
function calculate() {
  //if the operation pressed is a plus sign
  if (operation == "plus") {

    //cast number2 as a number
    number2 = Number(number2);
    //calculate the sum of the answer
    answer = number1 + number2;

    //if the number is infinite or is too long
    if (!isFinite(answer)) {
      answer = "Error";
    } else if (answer > 9999999999 || answer < -9999999999) {
      answer = "Too long";
    }

    document.getElementById("result").innerHTML = answer;
    document.getElementById("testing2").innerHTML = number2;

    length = 0;

    //if the operation is a minus sign
  } else if (operation == "minus") {
    //cast number2 as a number
    number2 = Number(number2);
    //calculate the sum of the answer
    answer = number1 - number2;

    //if the number is infinite or is too long
    if (!isFinite(answer)) {
      answer = "Error";
    } else if (answer > 9999999999 || answer < -9999999999) {
      answer = "Too long";
    }

    document.getElementById("result").innerHTML = answer;
    document.getElementById("testing2").innerHTML = number2;
    length = 0;

    //if the operation is a times symbol
  } else if (operation == "multiply") {
    //cast number2 as a number
    number2 = Number(number2);
    //calculate the sum of the answer
    answer = number1 * number2;

    //shorten the answer if there are decimals that are over 10 digits
    shortenAnswer();

    //if the number is infinite or is too long
    if (!isFinite(answer)) {
      answer = "Error";
    } else if (answer > 10) {
      answer = "Too long";
    }

    document.getElementById("result").innerHTML = answer;
    document.getElementById("testing2").innerHTML = number2;

    length = 0;

    //if the operation is a division symbol
  } else if (operation == "divide") {
    //cast number2 as a number
    number2 = Number(number2);
    //calculate the sum of the answer
    answer = number1 / number2;

    //shorten the answer if there are decimals that are over 10 digits
    shortenAnswer();

    //if the number is infinite or is too long
    if (!isFinite(answer)) {
      answer = "Error";
    } else if (answer > 9999999999 || answer < -9999999999) {
      answer = "Too long";
    }

    document.getElementById("result").innerHTML = answer;
    document.getElementById("testing2").innerHTML = number2;

    length = 0;

  }
}






//shorten the length of the answer to the maximum amount of digits
function shortenAnswer() {

  //turns the value of the answer into a string
  var answerLength = answer.toString();

  //length of the characters on the calculator
  var characterLength = 10;

  //find the length of the answer
  //strips the negative sign
  if (answer < 0) {
    answerLength = answerLength.replace("-","");
    characterLength += 1;
  }

  //checks if the answer has any decimal points
  var decimalPoint = answerLength.search(".");

  //strips the decimal point
  if (decimalPoint >= 0) {
    answerLength = answerLength.replace(".","");
    characterLength += 1;
  }

  //finds the length of the answer
  answerLength = answerLength.length;

  //shortens the length of the answer
  if (answerLength > 10) {
    answer = answer.toString().slice(0,characterLength);
    answer = Number(answer);
  }
}






//if the user enters the equal sign
function execute() {

  //if the answer is not too long and is not infinite
  if (answer != "Too long" && answer != "Error") {
    if (typeof answer == "undefined" && typeof number2 != "undefined") {
      calculate();

      //remembers that the equal sign is pressed
      equalPressed = true;

      //allows the user to execute one operation if they continuosly press the
      //equal sign
    } else if (typeof answer != "undefined" && typeof number2 != "undefined" &&
  typeof number1 != "undefined") {
      if (operation == "plus") {

        //first number becomes the previous answer
        number1 = answer;

        //cast the second number as a number
        number2 = Number(number2);

        //calculate the sum of the answer
        answer = number1 + number2;

        //if the number is infinite or is too long
        if (!isFinite(answer)) {
          answer = "Error";
        } else if (answer > 9999999999 || answer < -9999999999) {
          answer = "Too long";
        }

        //determines if the answer is positive or negative
        if (answer < 0) {
          negativeOn = true;
        } else {
          negativeOn = false;
        }

        //remembers that the equal sign is pressed
        equalPressed = true;
        document.getElementById("result").innerHTML = answer;
        document.getElementById("testing2").innerHTML = number2;
        document.getElementById("symbol").innerHTML = "this is happening"

        length = 0;

        //if the operation is a minus sign
      } else if (operation == "minus") {
        //first number becomes the previous answer
        number1 = answer;

        //cast the second number as a number
        number2 = Number(number2);

        //calculate the sum of the answer
        answer = number1 - number2;

        //if the number is infinite or is too long
        if (!isFinite(answer)) {
          answer = "Error";
        } else if (answer > 9999999999 || answer < -9999999999) {
          answer = "Too long";
        }

        //determines if the answer is positive or negative
        if (answer < 0) {
          negativeOn = true;
        } else {
          negativeOn = false;
        }

        //remembers that the equal sign is pressed
        equalPressed = true;
        document.getElementById("result").innerHTML = answer;
        document.getElementById("testing2").innerHTML = number2;
        document.getElementById("symbol").innerHTML = "this is happening"

        length = 0;

        //if the operation is a times symbol
      } else if (operation == "multiply") {
        //first number becomes the previous answer
        number1 = answer;

        //cast the second number as a number
        number2 = Number(number2);

        //calculate the sum of the answer
        answer = number1 * number2;

        //shorten the answer if there are decimals that are over 10 digits
        shortenAnswer();

        //if the number is infinite or is too long
        if (!isFinite(answer)) {
          answer = "Error";
        } else if (answer > 9999999999 || answer < -9999999999) {
          answer = "Too long";
        }

        //determines if the answer is positive or negative
        if (answer < 0) {
          negativeOn = true;
        } else {
          negativeOn = false;
        }

        //remembers that the equal sign is pressed
        equalPressed = true;
        document.getElementById("result").innerHTML = answer;
        document.getElementById("testing2").innerHTML = number2;
        document.getElementById("symbol").innerHTML = "this is happening"

        length = 0;

        //if the operation is a division symbol
      } else if (operation == "divide") {
        //first number becomes the previous answer
        number1 = answer;

        //cast the second number as a number
        number2 = Number(number2);

        //calculate the sum of the answer
        answer = number1 / number2;

        //shorten the answer if there are decimals that are over 10 digits
        shortenAnswer();

        //if the number is infinite or is too long
        if (!isFinite(answer)) {
          answer = "Error";
        } else if (answer > 9999999999 || answer < -9999999999) {
          answer = "Too long";
        }

        //determines if the answer is positive or negative
        if (answer < 0) {
          negativeOn = true;
        } else {
          negativeOn = false;
        }

        //remembers that the equal sign is pressed
        equalPressed = true;
        document.getElementById("result").innerHTML = answer;
        document.getElementById("testing2").innerHTML = number2;
        document.getElementById("symbol").innerHTML = "this is happening"

      }
    }
  }
}






//if the user cancels the input of their expression
function cancel() {
  document.getElementById("result").innerHTML = "";

  //reset all values
  number1 = undefined;
  number2 = undefined;
  answer = undefined;

  operation = undefined;
  negativeOn = false;
  decimalOn = false;
  length = 0;

  operationPressed = false;
  equalPressed = false;
}





//if the user presses backspace
function backspace() {

  //if the user presses backspace for the first number input
  if (typeof number1 == "string") {

    number1 = number1.substring(0,number1.length - 1);
    length -= 1;
    document.getElementById("result").innerHTML = number1;
    document.getElementById("tester").innerHTML = number1.length;

    //if the user presses backspace for the second number input
  } else if (typeof number1 == "number" && typeof number2 == "string") {

    number2 = number2.substring(0,number2.length - 1);
    length -= 1;
    document.getElementById("result").innerHTML = number2;
    document.getElementById("tester").innerHTML = number2.length + " second";

    //the answer will be backspaced
  }
}
