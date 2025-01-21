/**
 * Randomly chooses a letter from alphabet
 * @returns A lower case letter
 */

function getRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return alphabet[Math.floor(Math.random() * alphabet.length)].toLowerCase();
}

export default getRandomLetter;
