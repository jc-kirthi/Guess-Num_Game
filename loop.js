let guessNo=97;

function guess()
{
    let us= prompt("Guess a number from 0-100");
    while(us != guessNo)
        {
            us= prompt("WRONG! Take Another Guess"); // this gives a string != to number type
        }
    alert("CORRECT! Guess");
}

setTimeout(guess,2000)
