var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var heure = document.getElementById("heures")
var testSec = 20;
var testMin = 1;
var testHeure = 0;
var time;

var chrono = function() {

    time = setTimeout(chrono, 1000);


        if (testMin < 0) {

                testMin = 59;
                testHeure--;

            }

            else if (testSec < 0)  {

            testSec = 60;
            testMin--;
        }

            else if (testHeure == 0 && testMin == 0 && testSec == 0) {

                clearTimeout(time);
        }

    seconds.innerHTML = testSec-- + " sec";
    minutes.innerHTML = testMin + " minutes";
    heure.innerHTML = testHeure + " H";

};



        var stopCountUp = function () {


            clearTimeout(time);

        };


        var stopButton = document.getElementById("stop-button");
        stopButton.addEventListener("click", stopCountUp);

        var playButton = document.getElementById("play-buuton");
        playButton.addEventListener("click", chrono);



        function rezet () {

             testSec = 0;
             testMin = 0;
             testHeure = 0;


        }
    function soumettre () {


        var entreeHeure = document.getElementById("heure").value;
        var entreeMin = document.getElementById("minute").value;
        var entreeSec = document.getElementById("seconde").value;

        if(entreeHeure) {
            testHeure = entreeHeure;
        }
        else
        {
            testHeure = 0;
        }

        if (entreeMin) {
            testMin = entreeMin;
        }
        else {

            testMin = 0;
        }

        if(entreeSec) {
            testSec = entreeSec;
        }
        else {

            testSec = 0;
        }


       /** if (entreeHeure) {


            preventDefault(soumettre());
        }
        else
        {
            alert('rien');
        }
*/
    }
