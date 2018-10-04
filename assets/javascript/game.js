
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];


var guessSoFar = "";
var guessRemaining = 10;
var wins = 0;
var loss = 0;
const counter = {};
console.log(computerChoice);

function reset() {
   
    guessSoFar = "";
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
}





document.addEventListener('keypress', (event) => {
    var userChoice = event.key;

    guessSoFar = userChoice + guessSoFar;
    document.getElementById("letter-guess").innerHTML = guessSoFar;

    
   
 
    var compare = function (computerChoice, userChoice) {
      

        if (computerChoice === userChoice) {
            
            reset();      
            wins++;
            document.getElementById("wins").innerHTML = wins;
            document.getElementById("letter-guess").innerHTML = guessSoFar;
            guessRemaining = 9;
            document.getElementById("Remaining-guess").innerHTML = guessRemaining;
            alert("You Suck, reconsider your life choices.")
            


                

        } else{
            guessRemaining--;
            document.getElementById("Remaining-guess").innerHTML = guessRemaining;

            if (guessRemaining <= 0) {
              
                reset();             
                loss++;
                document.getElementById("loss").innerHTML = loss;
                document.getElementById("letter-guess").innerHTML = guessSoFar;
                guessRemaining = 10;
                document.getElementById("Remaining-guess").innerHTML = guessRemaining;
                alert("You Suck, reconsider your life choices.")
                
				
            }
        }
		
    }
    compare(userChoice, computerChoice);
});




