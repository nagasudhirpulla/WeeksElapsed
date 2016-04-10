function drawOnDiv() {
    var squareWidth = 4;
    var squareHeight = 4;
    var borderWidth = 0.25;
    var borderHeight = 0.25;
    var numWeeks;
    var numSquares;
    var elapsedWeeks;
    var padding = 1.5;
    //position of rect in grid is (borderWidth*n + squareWidth*n, borderHeight*n + squareHeight*n)
    var one_week = 1000 * 60 * 60 * 24 * 7;
    //https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date
    //new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
    var dateBirth = new Date(document.getElementById("bday").value);
    var date = new Date();
    var numYears = Number(document.getElementById("yearsTotal").value);
    var dateDeath = new Date(dateBirth.getTime());
    dateDeath.setFullYear(dateBirth.getFullYear() + numYears);
    numWeeks = (dateDeath - dateBirth) / one_week;
    numSquares = Math.floor(Math.sqrt(numWeeks));
    elapsedWeeks = Math.floor((date - dateBirth) / one_week);
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var iterator = 1;
    ctx.fillStyle = "#FF0000";
    for (var i = 0; i < numSquares; i++) {
        for (var j = 0; j < numSquares; j++) {
            if (iterator > elapsedWeeks) {
                ctx.strokeRect(borderHeight * 2 * j + squareHeight * j + 2 * padding * j, borderWidth * 2 * i + squareWidth * i + 2 * padding * i, squareWidth, squareHeight);
            } else {
                ctx.fillRect(borderHeight * 2 * j + squareHeight * j + 2 * padding * j, borderWidth * 2 * i + squareWidth * i + 2 * padding * i, squareWidth, squareHeight);
            }
            iterator++;
        }

    }
}

window.onload = drawOnDiv();