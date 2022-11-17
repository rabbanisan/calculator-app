function input(param) {
	document.getElementById("displayBox").value += param;
}

function result() {
	const displayBoxValue = document.getElementById("displayBox").value;
	const result = eval(displayBoxValue);
	document.getElementById("displayBox").value = result;
}

function clearBox() {
	document.getElementById("displayBox").value = "";
	console.log("box clean");
}
