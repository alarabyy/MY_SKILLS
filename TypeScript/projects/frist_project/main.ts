interface Card {
    id: number;
    image: string;
  }
  
  const images = [
    "https://via.placeholder.com/100x150?text=A",
    "https://via.placeholder.com/100x150?text=B",
    "https://via.placeholder.com/100x150?text=C",
    "https://via.placeholder.com/100x150?text=D",
    "https://via.placeholder.com/100x150?text=E",
    "https://via.placeholder.com/100x150?text=F"
  ];
  
  let cards: Card[] = [];
  let firstCard: HTMLElement | null = null;
  let secondCard: HTMLElement | null = null;
  let lockBoard = false;
  
  // تهيئة اللعبة
  function initGame() {
    cards = [];
    firstCard = null;
    secondCard = null;
    lockBoard = false;
  
    images.forEach((image, index) => {
      const card1: Card = { id: index, image };
      const card2: Card = { id: index, image };
      cards.push(card1, card2);
    });
  
    shuffle(cards);
    displayCards();
  }
  
  // خلط البطاقات
  function shuffle(array: Card[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // عرض البطاقات على الـ DOM
  function displayCards() {
    const gameBoard = document.getElementById('game-board')!;
    gameBoard.innerHTML = '';
  
    cards.forEach((card, index) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
        <div class="card-inner">
          <div class="card-front">?</div>
          <div class="card-back" style="background-image: url('${card.image}')"></div>
        </div>
      `;
      cardElement.addEventListener('click', () => flipCard(cardElement, card));
      gameBoard.appendChild(cardElement);
    });
  }
  
  // قلب البطاقات
  function flipCard(cardElement: HTMLElement, card: Card) {
    if (lockBoard) return;
    if (cardElement === firstCard) return;
  
    cardElement.classList.add('flipped');
  
    if (!firstCard) {
      firstCard = cardElement;
      return;
    }
  
    secondCard = cardElement;
    lockBoard = true;
  
    checkForMatch();
  }
  
  // التحقق من المطابقة
  function checkForMatch() {
    const isMatch = firstCard!.querySelector('.card-back')!.getAttribute('style') ===
      secondCard!.querySelector('.card-back')!.getAttribute('style');
  
    isMatch ? disableCards() : unflipCards();
  }
  
  // تعطيل البطاقات المطابقة
  function disableCards() {
    setTimeout(() => {
      firstCard!.classList.add('hidden');
      secondCard!.classList.add('hidden');
      resetBoard();
    }, 1000);
  }
  
  // إرجاع البطاقات غير المتطابقة
  function unflipCards() {
    setTimeout(() => {
      firstCard!.classList.remove('flipped');
      secondCard!.classList.remove('flipped');
      resetBoard();
    }, 1000);
  }
  
  // إعادة تعيين الحالة
  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  }
  
  // إعادة تشغيل اللعبة
  document.getElementById('reset')!.addEventListener('click', initGame);
  
  // تهيئة اللعبة عند تحميل الصفحة
  document.addEventListener('DOMContentLoaded', initGame);
  