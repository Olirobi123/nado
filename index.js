//Un décompte sur dans le id compteur de la page index.html jusqu'au 17 février 2023
// 1000 signifie 1 seconde
setInterval(function () {
    const countDate = new Date('Feb 17, 2023 21:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Calcul du temps
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Calcul du temps
    textDay = ""
    textDay = Math.floor(gap / day);
    let textHour = Math.floor((gap % day) / hour);
    let textMinute = Math.floor((gap % hour) / minute);
    let textSecond = Math.floor((gap % minute) / second);
    console.log(textDay.length)
    // Affichage du temps
    //si textDay est est vide ou undefined alors on affiche 0
    if (textDay != 0 || textDay != undefined) {
        document.querySelector('.day').innerText = ajouterZero(textDay) + " :";
    }
    document.querySelector('.hour').innerText = ' ' + ajouterZero(textHour) + " :";
    document.querySelector('.minute').innerText = ' ' + ajouterZero(textMinute) + " :";
    document.querySelector('.second').innerText = ' ' + ajouterZero(textSecond);
}, 1000);

function ajouterZero(nombre) {
    if (nombre < 10) {
        nombre = "0" + nombre;
    }
    return nombre;
}


