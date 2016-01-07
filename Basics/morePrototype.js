function PrintStuff(myDocuments) {
    this.documents = myDocuments;
}

PrintStuff.prototype.print = function() {
    console.log(this.documents);   

}

var newObj = new PrintStuff("Hello");

newObj.print();


function printStuff(print) {
    this.print = print;
}

PrintStuff.prototype.ink = function() {
    
}

var newObj = new PrintStuff("Hello");

newObj.ink();

