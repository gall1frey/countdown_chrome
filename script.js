var finish_line = new Date('05/01/2023');

var currentdisplayNo = 0;
var display1 = document.getElementById('display-1');
var display2 = document.getElementById('display-2');
var display3 = document.getElementById('display-3');

function zeroFill(string, length) {
	for (var i=0, l=length-string.length; i<l; i++) {
		string = '0' + string;
	}
	return string;
}

function setdisplays() {
  var cur = new Date();
  const diffTime = Math.abs(finish_line - cur);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	var h = zeroFill(diffDays.toString(),   3);

	var baseClass = 'display-container display-size-12 display-no-';

	display1.className = baseClass + h[0];
	display2.className = baseClass + h[1];
	display3.className = baseClass + h[2];

	//document.body.style.backgroundColor = '#' + (s + m + h).toString(16);
}

//setInterval(setdisplays, 1000);
setdisplays();

document.getElementById("google_but").onclick = function () {
        location.href = "https://google.com";
};

$.get(
    "http://numbersapi.com/random/trivia",
    function(data) {
       document.getElementById('message').innerHTML = data;
    }
);
