/*const syntaxError = () => {
  console.log("Hello Node js!"
};*/

/*const runtimeError = () => {
  let num = 9;
  num();
};*/

/*const logicalError = () => {
  let x = 10;

  if ((x = 5)) {
    console.log(x);
  }
};
module.exports = logicalError;*/

let width = 10;
let height = 5;

function calculateArea(width, height) {
  return width + height; //syntax error
}

if (calculateArea > 100) {
  console.log("The area is large!!");
} else {
  console.log("The area is small!!");
}

if (width + height > 100) {
  console.log("Area is greater than or equal to 100");
}
