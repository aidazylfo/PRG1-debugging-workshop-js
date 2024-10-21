function convertTo12HourClock(time) {
  let [hours,minutes] = time.split (":");
  hours = parseInt(hours);
  const period = hours >=12? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${period}`;
}

module.exports = { convertTo12HourClock };
console.log(convertTo12HourClock("12:05"));
// Hint: I recommend calling the function with an input of '12:05'
