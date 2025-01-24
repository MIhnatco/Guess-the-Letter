# Guess the Letter 🎯 

A simple word game where players attempt to guess a randomly selected letter of the alphabet. Feedback is provided for each guess to guide the player closer to the correct answer.

## Features  🎮 
- **Interactive gameplay:** Player can guess a letter from the alphabet and receives immediate feedback.
- **Hinst:** Option to get a hint (vowel or consonant) to assist with guessing.
- **Feedback mechanism:** Responses such as:
    - 'Correct! The letter was: [letter]'
    - 'Higher' or 'Lower' relative to the guessed letter.
    - Warnings for invalid inputs or repeated guesses.
- **Reset Option:** Restart the game at any time with a fresh random letter.
- **Visual Feedback:** Confetti animation on winning.

## Tech Stack 🛠️
- **JavaScript:** Core game logic and letter generation.
- **React:** Frontend framework.
- **Tailwind CSS:** Styling for a clean and responsive UI.
- **Confetti animation:** To celebrate wins.

## How to Run locally 🚀

- Node.js installed on your machine.
- A package manager like 'npm' or 'yarn'

### Steps
1. Clone the repository
```
git clone https://github.com/your-username/guess-the-letter.git
```
2. Move to the file
```
cd guess-the-letter
```
3. Install dependencies
```
npm install
```
4. Start the development server
```
npm start
```
5. Open your browser and navigate to 'http://localhost:3000'

## Game logic 🧩

1. **Random letter generation:** A random letter is generated when the game starts.
2. **Player interaction:**
    - Inputs a single letter.
    - Feedback guides the player (higher, lower, correct, or invalid input).
    - Tracks and displays previous guesses to prevent duplicates.
3. **Game end:**
    - Win: Correct guess within the attempts.
    - Lose: All attempts are exhausted.

## File structure 📂

```
src/
├── components/
|   ├── Game
|       ├── GameBoard.jsx               // Displays guesses and attempts
|       ├── GameFeedback.jsx            // Feedback for each guess
|       ├── GameHeader.jsx              // Game title and instructions
|       ├── GameInput.jsx               // Input field and buttons
|       ├── GameReset.jsx               // Reset button
├── hooks/
|       ├──useGameLogic.jsx            //Custom hook for game logic
├── tests/
|       ├── GameHeader.test.jsx
├── utils/
|       ├── getHint.jsx                 //Providing a hint 
|       ├── randomLetter.jsx            //Generating a random letter from the alphabet
|
├── Button.jsx                          //Reusable button component                    
|
├── App.jsx
├── index.css
```
## Gameplay instructions 🏆
1. Guess a single letter (a-z).
2. Use the "Your Guess" button to submit your guess
3. Get feedback and hints as needed:
    - **Hint:** Reveals if the letter is a vowel or consonant.
    - **Feedback:** Whether the letter is higher/lower or correct.
4. Win by guessing correctly within 5 attempts.

## Contributing 🤝
Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.

## License 📜
This project is licensed under the MIT License.