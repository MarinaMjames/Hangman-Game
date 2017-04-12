//Valid letters to input
var alphabet = ['a','b','c','d','e','f',
				'g','h','i','j','k','l',
				'm','n','o','p','q','r',
				's','t','u','v','w','x','y','z']
//Words for the computer to choose from
var candyTypes = ['skittles','airheads','starbursts', 'nerds','snickers','crunch','twix','twizzlers','pushpop','milkyway','redhots','butterfinger','whoppers','rolo','reeses','mounds','smarties'];

var computerChoice = "";

var charactersInWord = [];

var letterBlanks = 0;

var guessedCorrect = [];

var wrongLetters = [];

//Counters
var winCount = 0;
var loseCount = 0; 
var guessesLeft = 10;
var rightGuess = 0;


//Functions

function reset () {
	computerChoice = candyTypes[Math.floor(Math.random() * candyTypes.length)];
	charactersInWord = computerChoice.split('');
	letterBlanks = charactersInWord.length;


	usedLetters = 0;
	rightGuess = 0;
	guessesLeft = 10;
	wrongLetters =[];
	guessedCorrect =[];
	doubleWord = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];
	test=false;
	startGame();
}


function startGame() {
	computerChoice = candyTypes[Math.floor(Math.random() * candyTypes.length)];
	charactersInWord = computerChoice.split('');
	letterBlanks = charactersInWord.length;

	rightGuess = 0;
	guessesLeft = 10;
	wrongLetters =[];
	guessedCorrect =[];
	doubleWord = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];

	for(var i = 0; i< letterBlanks; i++)
	{
		guessedCorrect.push('_');
		document.getElementById('wordToGuess').innerHTML = guessedCorrect;
	}


	document.getElementById('wordToGuess').innerHTML = guessedCorrect.join(' ');
	document.getElementById('guessesLeft').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('usedLetters').innerHTML = wrongLetters;


	console.log(computerChoice);
	console.log(charactersInWord);
	console.log(letterBlanks);
	console.log(guessedCorrect);
}

function duplicateLetters(userKey) {

console.log('WORKING!!!!');

	if (computerChoice.indexOf(userKey) > -1) {
		for (var i = 0; i < letterBlanks; i++) {
			if (charactersInWord[i] === userKey) {
				rightGuess++; 
				guessedCorrect[i] = userKey; 
				document.getElementById('wordToGuess').innerHTML = guessedCorrect.join(' ');
			}
		}

		console.log(guessedCorrect);
	}
	else {
		wrongLetters.push(userKey);
		guessesLeft--;
		
		document.getElementById('guessesLeft').innerHTML = guessesLeft;
		document.getElementById('usedLetters').innerHTML = wrongLetters;

		console.log('Wrong Letters=' + wrongLetters);
		console.log('Guesses Left=' + guessesLeft);
	}
}

function winLose()
{
	// When number blanks if filled with right words then you win
	if(rightGuess === letterBlanks)
	{
		//Counts Wins 
		winCount++;
		//Changes HTML
		document.getElementById('winCounter').innerHTML = winCount;
		reset();
	}
	// When number of Guesses reaches 0 then You lose
	else if(guessesLeft === 0)
	{
	//Changes HTML
		document.getElementById('lossCounter').innerHTML = loseCount;
		reset();
	}
}


//Starts a game of hangman
startGame();

document.onkeyup = function(event)
{
	test = true;
	var usedLetters = event.key;
	for(var i = 0; i < doubleWord.length; i++)
	{	
		if(usedLetters === doubleWord[i] && test === true)
		{
			var spliceDword = doubleWord.splice(i,1);
		

			duplicateLetters(usedLetters);
			winLose();
		}
	}		
		
}