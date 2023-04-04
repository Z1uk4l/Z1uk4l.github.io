var liczba = 0;
parseInt(liczba);

function zmiana() {
    liczba += 1;
    if (liczba % 2 == 0) {
        var stanall = document.getElementById('zyczenia');
        stanall.className = ' teraznie';
        var stanzdj = document.getElementById('zdj');
        stanzdj.className = ' zdjnie';
        var stantekst = document.getElementById('tekst');
        stantekst.className = ' tekstnie';
    }
    else {
        var stanall = document.getElementById('zyczenia');
        stanall.className = ' terazwidac';
        var stanzdj = document.getElementById('zdj');
        stanzdj.className = ' zdjtak';
        var stantekst = document.getElementById('tekst');
        stantekst.className = ' teksttak';
    }

    if (liczba % 10 == 0) {
        var stanegg = document.getElementById('egg');
        stanegg.className = ' terazwidac';
    }
    else {
        var stanegg = document.getElementById('egg');
        stanegg.className = ' teraznie';
    }
}