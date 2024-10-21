function calculatePercentageChange(original, newAmount) {
 if(original === 0) {
   return 0; 
 }
 const Change = (newAmount - original);
 const percentageChange = (Change / original) * 100;
 return Math.ceil(percentageChange)
}

module.exports = { calculatePercentageChange };

calculatePercentageChange(50, 40);

























