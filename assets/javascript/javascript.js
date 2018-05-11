//Variables for the game


var guesses = 10;               // number of guesses left
var lettersGuessed = [];       //storing letters guessed 

//need to have a selection of words to pick from
var wordChoices = ["beach", "sunscreen", "swimming", "ocean", "vacation", "beer", "bikinis"];

//program needs to select one of the words 
var word = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log("the word to guess is", word);

//program needs to display the blanks for the selected word
var answerArray = [];
for (i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
document.getElementById("correctLetters").innerHTML = answerArray.join(" ");


document.getElementById("guessesLeft").innerHTML = guesses;   //Prints number of guesses left to the screen



//tell player to select one letter at a time on the keyboard
// alert("Please select one letter")

//program gets input from player and checks the selected word for that letter

document.onkeyup = function (event) {
    var letter = event.key.toLowerCase();

    //testing for only letter in the alphabet and not any other
    var key = event.keyCode;
    if (key >= 65 && key <= 90) {
        //checks to see if letter pressed is in the guessed array already.
        //if not it counts as a guess
        if (-1 === lettersGuessed.indexOf(letter)) {

            //each key press counts towards total guesses 
            guesses--;
            console.log(guesses, ":number of guesses left");
            document.getElementById("guessesLeft").innerHTML = guesses;

            //puts the letters already guessed into an array
            lettersGuessed.push(letter);
            //letter guessed is shown in guesses area
            document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
            
            //decides if letter pressed was right or not
            if (-1 === word.indexOf(letter)) {
                //if letter is not apart of the word then alerts to try again
                alert(letter + " is wrong try again ");
            }
            else {
                //looks for all of the letter positions in the word
                for (var j = 0; j < word.length; j++) {
                    //if the letter is apart of the word then the letter is switched with the underscore
                    if (word.charAt(j) === letter) {
                        //gives the letter position in the array    
                        console.log(j, " position number in word");
                        answerArray[j] = letter;
                        letter.toUpperCase("");
                    }
                }
                console.log(letter, "is correct");
                document.getElementById("correctLetters").innerHTML = answerArray.join(" ");
            }
            //game ends when user runs out of guesses or guesses the word
            if (guesses === 0) {
                console.log("Sorry, no more guesses");
                //Restart the game
                confirm("Press Ok to play again");
                 
               
            }
        }
        else alert(letter + " is already played dummy!");
       
    }
}

