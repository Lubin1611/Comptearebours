var seconde_passe = 10;
var minute_passe = 2;

function boucle() {

    minute_passe--;
    seconde_passe--;
    document.getElementById("divTimer").innerHTML = seconde_passe;

        if (seconde_passe > 1) {

            setTimeout(boucle, 1000);
        }

        if (minute_passe > 0) {

            setTimeout(boucle, 60000);

        }

        else if (seconde_passe == 0 ) {

            seconde_passe = 10;
            document.getElementById("divTimer").innerHTML = seconde_passe;
        }
}

boucle();
