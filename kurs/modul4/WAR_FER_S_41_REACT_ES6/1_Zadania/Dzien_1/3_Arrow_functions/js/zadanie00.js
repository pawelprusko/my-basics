var Students = function(students) {
	this.names = students;
  	this.numberOfLetters = [];
};


Students.prototype.countLetters = function() {
for (let i = 0; i < this.names.length; i++) {
	this.numberOfLetters.push(this.names[i].length);
}
}

var students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.numberOfLetters);

//function abc(a=0) --- a=domyslny parametr


