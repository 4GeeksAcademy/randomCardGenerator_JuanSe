
window.onload = function () {
  console.log("Random Card Generator")
  let values = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  let suits = ['♠', '♥', '♦', '♣']

  let cardNumber = Math.floor(Math.random() * values.length);
  let suitNumber = Math.floor(Math.random() * suits.length);

  let suitValue = suits[suitNumber];
  let cardValue = values[cardNumber];

  if (suitValue == '♥' || suitValue == '♦') {
    let cardValueColor = document.getElementById("cardValue");
    cardValueColor.classList.add("text-danger");
  }

  let cardValueElement = document.getElementById("cardValue");
  cardValueElement.innerHTML = cardValue;
  cardValueElement.classList.add((suitValue === '♥' || suitValue === '♦') ? 'text-danger' : 'text-dark');

  let suitElements = document.querySelectorAll(".suitValue");
  suitElements.forEach(el => {
    el.innerHTML = suitValue;
    el.classList.add((suitValue === '♥' || suitValue === '♦') ? 'text-danger' : 'text-dark');
  });

}

