let guess = 0
while (guess <= 0 || guess > 100) {
    guess = game.askForNumber("Enter a number between 1 and 100.")
}
game.splash(guess)
