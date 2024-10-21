function capitalise(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

module.exports = { capitalise };
console.log(capitalise("anand"));

// I recommend you start by calling capitalise with the string "hello"

// Advanced hint: When you've called the function with a string, you can also run this file with a runtime called bun (just run bun <path-to-file>)
// bun runs JS files like node but with a few differences - can you spot any differences?
