const addedValue = (req, res) => {
  const body = [];
  req.on("data", (chunk) => body.push(chunk));

  req.on("end", () => {
    const parseBody = Buffer.concat(body).toString();
    const parameters = new URLSearchParams(parseBody);
    const myObj = Object.fromEntries(parameters);
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<h1>Sum of ${myObj.value1} & ${myObj.value2} is = ${
        Number(myObj.value1) + Number(myObj.value2)
      }</h1>`
    );
    return res.end();
  });
};

module.exports = addedValue;
