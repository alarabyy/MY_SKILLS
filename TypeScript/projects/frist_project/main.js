var images = [
    "https://via.placeholder.com/100x150?text=A",
    "https://via.placeholder.com/100x150?text=B",
    "https://via.placeholder.com/100x150?text=C",
    "https://via.placeholder.com/100x150?text=D",
    "https://via.placeholder.com/100x150?text=E",
    "https://via.placeholder.com/100x150?text=F"
];
var cards = [];
var firstCard = null;
var secondCard = null;
var lockBoard = false;
// تهيئة اللعبة
function initGame() {
    cards = [];
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    images.forEach(function (image, index) {
        var card1 = { id: index, image: image };
        var card2 = { id: index, image: image };
        cards.push(card1, card2);
    });
    shuffle(cards);
    displayCards();
}
// خلط البطاقات
function shuffle(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
}
// عرض البطاقات على الـ DOM
function displayCards() {
    var gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    cards.forEach(function (card, index) {
        var cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = "\n        <div class=\"card-inner\">\n          <div class=\"card-front\">?</div>\n          <div class=\"card-back\" style=\"background-image: url('".concat(card.image, "')\"></div>\n        </div>\n      ");
        cardElement.addEventListener('click', function () { return flipCard(cardElement, card); });
        gameBoard.appendChild(cardElement);
    });
}
// قلب البطاقات
function flipCard(cardElement, card) {
    if (lockBoard)
        return;
    if (cardElement === firstCard)
        return;
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
    var isMatch = firstCard.querySelector('.card-back').getAttribute('style') ===
        secondCard.querySelector('.card-back').getAttribute('style');
    isMatch ? disableCards() : unflipCards();
}
// تعطيل البطاقات المطابقة
function disableCards() {
    setTimeout(function () {
        firstCard.classList.add('hidden');
        secondCard.classList.add('hidden');
        resetBoard();
    }, 1000);
}
// إرجاع البطاقات غير المتطابقة
function unflipCards() {
    setTimeout(function () {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}
// إعادة تعيين الحالة
function resetBoard() {
    var _a;
    _a = [null, null, false], firstCard = _a[0], secondCard = _a[1], lockBoard = _a[2];
}
// إعادة تشغيل اللعبة
document.getElementById('reset').addEventListener('click', initGame);
// تهيئة اللعبة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initGame);
