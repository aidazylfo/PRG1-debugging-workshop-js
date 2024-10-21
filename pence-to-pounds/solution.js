function convertFromPenceToPounds(pence) {
  const pounds = pence / 100;
  return `£${pounds.toFixed(2)}`; // Format to two decimal places
}

module.exports = { convertFromPenceToPounds };

convertFromPenceToPounds(1299); // should return "£12.99"
