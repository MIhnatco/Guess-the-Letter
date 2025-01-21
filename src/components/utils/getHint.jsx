/**
 * Provides a hint to help the player guess the letter
 */

function getHint(letter, provideHint) {
  const vowels = ["a", "e", "i", "o", "u"];

  const hint = vowels.includes(letter)
    ? "The letter is a vowel."
    : "The letter is a consonant.";

  provideHint(hint);
}

export default getHint;
