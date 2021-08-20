/*var score = 65;
var score1 = 55;
var highscore = 50;
var highscore1 = 60;
var k = "kkkk";
var msg;
var comparison = (score + highscore) + (score1 + highscore1);


switch (comparison) {
    case 230:
        var el = document.querySelector(".high-score");
        el.textContent = comparison + 'fck u';
        console.log("fck u");
}*/
/*
var scores = [20, 40, 60];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';
var i = 0;
/*for (i = 0; i < arrayLength; i++) {
    roundNumber = i + 1;
    msg += "Round" + roundNumber + ":";
    msg += scores[i] + "<br/>";
}
do {
    msg += i + '*5=' + i * 5 + ' <br/> ';
    i++;
} while (i < 10);
var doc = document.querySelector('.high-score').innerHTML = msg;
*/
var table = 3;
var i = 1;
var operator = 'addition';
var msg = '';
if (operator === 'addition') {
    while (i < 11) {
        msg += i + '+' + table + '=' + (i + table) + '<br/>';
        i++;
    }
}
else {
    while (i < 11) {
        msg += i + '*' + table + '=' + (i * table) + '<br/>';
        i++;
    }
}

var BK = document.querySelector(".blackboard").innerHTML = msg;

var startItem = document.getElementById("first");
var prevItem = startItem.previousSibling;
var nxtItem = startItem.nextSibling;

prevItem.className = "PrevClass";
nxtItem.className = "NxtClass";

