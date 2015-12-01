function Question(title, choices, answer){
	Choices.call(this, title, answer);
	this.title = title;
	this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
	return this.answer === choice;
};