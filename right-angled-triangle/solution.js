function drawRightAngledTriangle(n) {
  let i = 1;
  while (i <= n) {
    console.log("*".repeat(i));
    i++;
  }
}

module.exports = { drawRightAngledTriangle };
