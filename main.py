guess = 0 

while guess <= 0 or guess > 100:
    guess =  game.ask_for_number("Enter a number between 1 and 100.")

game.splash(guess)
   