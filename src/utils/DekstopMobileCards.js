export function renderCardsForScreen (cards) {
  const width = window.innerWidth;
  if (width > 1181) {
    cards(16)
  } else if (width >= 552) {
    cards(8)
  } else if (width < 551 && width > 320) {
    cards(5);
  }
}

export function addNewLoadCards (addCard, card) {
  const width = window.innerWidth;
  if (width > 1181) {
    addCard(card + 4);
  } else if (width <= 1181) {
    addCard(card + 2);
  }
}
