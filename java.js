var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var testSec = 60;
var testMin = 0;
var time;

var countUp = function() {


    seconds.innerHTML = testSec--;
    time = setTimeout(countUp, 1000);

    if (testSec == -1) {

        //clearTimeout(time);
        testSec = 60;
    if (testMin == -1) {

        clearTimeout(time);
        }

    }

};

countUp();



var minPasse = function () {

    minutes.innerHTML = testMin--;
    time = setTimeout(minPasse, 60000);

    if(testMin == -1) {

        clearTimeout(time);
    }
};

minPasse();

        var stopCountUp = function () {


            clearTimeout(time);

        };




var stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

var playButton = document.getElementById("play-buuton");
playButton.addEventListener("click", countUp);