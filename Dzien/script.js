const wishes = [
    "Wszystkiego najlepszego!",
    "Dużo zdrowia i szczęścia!",
    "Spełnienia marzeń!",
    "Wielu Psów i Kotów!",
    "Niech każdy dzień będzie piękny!",
    "Pomyślności w życiu osobistym i zawodowym!",
    "Małych ośmiornic!",
    "Ostrej jazdy!",
    "Satysfakcji i mnóstwa satysfakcji!",
    "Aromatycznych kąpieli!",
    "Jak nie drzwiami to oknem!",
    "Subete no Yumiru no tamin ni tsugu",
    "Ore no nawa Eren Yeager",
    "Stimmt?",
  ];
  
  const btn = document.getElementById("btn");
  const wishesContainer = document.getElementById("wishes");
  
  function getRandomGradient() {
    const colors = [
      "#EB5757",
      "#F2994A",
      "#F2C94C",
      "#219653",
      "#2F80ED",
      "#56CCF2",
      "#BB6BD9",
      "#9B51E0",
      "#6B5B95",
      "#F7CAC9",
      "#92A8D1",
      "#009B77",
      "#D65076",
      "#EFC050",
      "#9B2335",
      "#BC243C",
    ];
  
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
  
    return `linear-gradient(to bottom right, ${color1}, ${color2})`;
  }
  
  function generateWish() {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    wishesContainer.textContent = wishes[randomIndex];
    wishesContainer.classList.add("animate");
    setTimeout(() => {
      wishesContainer.classList.remove("animate");
    }, 500);
    document.body.style.background = getRandomGradient();
  }  
  
  btn.addEventListener("click", generateWish);