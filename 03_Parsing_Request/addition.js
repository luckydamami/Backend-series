const add = () => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log(body);
  });
};

module.exports = add;
