var sales = "Toyota";

function carTypes(name) {
	if(name === "Honda") {
		return name;
	} else {
		return "Sorry we do not sell" + name + "here";
	}
}

var car = ({myCar: "Saturn", getCar: carTypes("Honda"), special: sales});