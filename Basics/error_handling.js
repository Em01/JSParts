//Create an object type UserException
function UserException(message) {
	this.message = message;
	this.name = "UserException";
}

//Make the exception convert to a pretty string when used as a string
UserException.prototype.toString = function() {
	return this.name + ': "' + this.message + '"';
};

//Create an instance of the object type and throw it
throw new UserException("Value too high");

//example try block

function getMonthName(mo) {
	mo = mo - 1;
	var months = ["jan", "feb", "march", "april"];
	if (months[mo]) {
		return months[mo];
	} else {
		throw "InvalidMonthNo";
	}
}

try {
	monthName = getMonthName(myMonth);
}

catch(e) {
	monthName = "unknown";
	logMyErrors(e);
}


//the following code throws an exception. when the exception occurs, control transfers to the catch block
try {
	throw "myException"; //generates an exception
}
catch (e) {
	//statements to handle any exceptions
	logMyErrors(e); //pass exception object to error handler
}

//finally 
openMyFile();
try {
	writeMyFile(theData);
} catch(e) {
	handleError(e);
} finally {
	closeMyFile();
}
