// Pobieramy elementy przycisków i obrazów
const guz1 = document.getElementById("guz1");
const guz2 = document.getElementById("guz2");
const guz3 = document.getElementById("guz3");
const zdj1 = document.getElementById("zdj1");
const zdj2 = document.getElementById("zdj2");
const codzm = document.getElementById("codzm");
const codzż = document.getElementById("codzż");
const galm = document.getElementById("galm");
const galż = document.getElementById("galż");
const wfm = document.getElementById("wfm");
const wfż = document.getElementById("wfż");

// Definiujemy obsługę kliknięcia przycisków
guz1.addEventListener("click", () => {
    // Zmieniamy źródło obrazu 1 na odpowiednią ścieżkę dla przycisku 1
    zdj1.src = "zdj/1.png";
    zdj2.src = "zdj/2.png";
    // Możesz również ustawić alternatywny tekst, jeśli to konieczne
    zdj1.alt = "strojm.png";
    zdj2.alt = "strojz.png";
    guz1.classList.add("aktywny");
    guz2.classList.remove("aktywny");
    guz3.classList.remove("aktywny");
    codzm.classList.add("tekst_aktywny");
    codzż.classList.add("tekst_aktywny");
    galm.classList.remove("tekst_aktywny");
    galż.classList.remove("tekst_aktywny");
    wfm.classList.remove("tekst_aktywny");
    wfż.classList.remove("tekst_aktywny");
});

guz2.addEventListener("click", () => {
    // Zmieniamy źródło obrazu 1 na odpowiednią ścieżkę dla przycisku 2
    zdj1.src = "zdj/3.png";
    zdj2.src = "zdj/4.png";
    // Możesz również ustawić alternatywny tekst, jeśli to konieczne
    zdj1.alt = "galm";
    zdj2.alt = "galz";
    guz1.classList.remove("aktywny");
    guz2.classList.add("aktywny");
    guz3.classList.remove("aktywny");
    codzm.classList.remove("tekst_aktywny");
    codzż.classList.remove("tekst_aktywny");
    galm.classList.add("tekst_aktywny");
    galż.classList.add("tekst_aktywny");
    wfm.classList.remove("tekst_aktywny");
    wfż.classList.remove("tekst_aktywny");
});

guz3.addEventListener("click", () => {
    // Zmieniamy źródło obrazu 1 na odpowiednią ścieżkę dla przycisku 3
    zdj1.src = "zdj/5.png";
    zdj2.src = "zdj/6.png";
    // Możesz również ustawić alternatywny tekst, jeśli to konieczne
    zdj1.alt = "wfm";
    zdj2.alt = "wfz";
    guz1.classList.remove("aktywny");
    guz2.classList.remove("aktywny");
    guz3.classList.add("aktywny");
    codzm.classList.remove("tekst_aktywny");
    codzż.classList.remove("tekst_aktywny");
    galm.classList.remove("tekst_aktywny");
    galż.classList.remove("tekst_aktywny");
    wfm.classList.add("tekst_aktywny");
    wfż.classList.add("tekst_aktywny");
});