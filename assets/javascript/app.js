$(document).ready(function() {


function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();


$("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	generateHTML();
	
	timerWrapper();

}); 

$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		
		clearInterval(theClock);
		generateWin();
	}
	else {
		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' width=400px height=250px src='assets/images/Timesup.jpg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' width=400px height=250px src='assets/images/wronganswer.jpeg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["Which philosopher is best know for the phrase <i>cogito ergo sum<i>?", "According to Plato, what is knowledge?", "What philosopher/logician/mathematician introduced the influential distinction between <i>sense<i> and <i>reference<i>?", "Which branch of philosophy is primarily concerned with the question of being?", "Transcendental idealism argues that...", "Metaphysics is the study of...?", "What philosopher wrote the controversial book <i>Being and Time<i>?", "What philosopher is know for changing the Hegalian Dialectic in favor of dialectical materialism?"];
var answerArray = [["Jean-Paul Sartre", "Plato", "Socrates", "Descartes"], ["A justified belief","There is no such thing as true knowledge","That which can be proven","Opinion"], ["Immanuel Kant", "Paul Grice", "Donald Davidson", "Gottlob Frege"], ["Existentialism","Marxism","Platoism","Humanism"], ["There is an afterlife", "God is the ideal human", "Knowledge has foundations", "Our experience is based on our perceptions"], ["Knowledge","Politics","Ethics","Existence"], ["Jean-Paul Sartre", "Martin Heidegger", "Michel Foucault", "Maurice Merleau-Ponty"], ["Heraclitus","Immanuel Kant","John Searle","Karl Marx"]];
var imageArray = ["<img class='center-block img-right' style= 'width:400px; height:300px;' src='assets/images/Descartes.jpeg'>", "<img class='center-block img-right' style= 'width:400px; height:300px;' src='assets/images/plato.jpg'>", "<img class='center-block img-right' style= 'width:400px; height:300px;' src='assets/images/Frege.jpg'>", "<img class='center-block img-right' style= 'width:400px; height:300px;' src='assets/images/QuestionofBeing.jpeg'>", "<img class='center-block img-right' style= 'width:400px; height:300px;' src='assets/images/Tran.jpeg'>", "<img class='center-block img-right' style= 'width:400px; height:300px;' src='assets/images/Metaphysics.jpeg'>", "<img class='center-block img-right' style= 'width:400px; height:300px;' src='assets/images/MartinHeidegger.jpg'>", "<img class='center-block img-right' style= 'width:400px; height:300px;' src='assets/images/KarlMarx.jpg'>"];
var correctAnswers = ["D. Descartes", "A. A justified belief", "D. Gottlob Frege", "A. Existentialism", "D. Our experience is based on our perceptions", "D. Existence", "B. Martin Heidegger", "D. Karl Marx"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;

