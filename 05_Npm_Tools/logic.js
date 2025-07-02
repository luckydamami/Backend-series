const logicError = () => {
  let num = 10;

  if ((num = 5)) {
    console.log(num);
  }
};

module.exports = logicError;
