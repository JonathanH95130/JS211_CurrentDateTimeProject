// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a string to the number.
const convertStrTonum = () => {
  let str = document.getElementById("number").value;
  console.log(str, typeof str)
  let num = Number(str)
  console.log('num: ', num, typeof num)
  document.getElementById('number-input').innerHTML = num + ' ' + typeof num
}


// Write a JavaScript program to convert a number to a string.
  const convertNumToStr = () => {
    let str = document.getElementById("string").value;
    console.log(str, typeof str)
    let num = Number(str)
    console.log('num: ', num, typeof num)
    document.getElementById('display-type-str').innerHTML = num + ' ' + typeof num
  }


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.
  var num1 = 1
  var num2 = 2

  const sumNumber = () => {
    var x = Number(document.getElementById("x").value);
    var y = Number(document.getElementById("y").value);
    var result = x + y;
    document.getElementById("display-sum").innerHTML = result;
  }

// Write a JavaScript program that runs only when 2 things are true.
  var input1 = 1
  var input2 = 2

  const twoTrue = () => {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    if (a == "true" && b == "true"){
      document.getElementById("display-true").innerHTML = "true";
    }
  }


// Write a JavaScript program that runs when 1 of 2 things are true.
  var input1 = 1
  var input2 = 2

  const oneTrue = () => {
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    if(c == 'true' && !(d == 'true')){
    document.getElementById("display-one-true").innerHTML = "true";
  }
}


// Write a JavaScript program that runs when both things are not true.  
  var input1 = 1
  var input2 = 2

  const noneTrue = () => {
    var c = document.getElementById("e").value;
    var d = document.getElementById("f").value;
    if(c !== '' && d !== ''){
    document.getElementById("display-not-true").innerHTML = "true";
  }
}
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
