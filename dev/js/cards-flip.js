const cards = document.querySelectorAll(".card");
for (var i = 0; i < cards.length; i++) {
  const selectedCard = cards[i];
  cardFlip(selectedCard);
}

function cardFlip(selectedCard) {
  selectedCard.addEventListener("click", function () {
    const cardState = selectedCard.classList;
    cardState.toggle("is-flipped");
  });
}