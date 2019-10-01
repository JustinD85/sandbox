var getId = (function () {
    var id = 0;
    return function () { return id++; };
})();
function cardFactory(name, offense, defense) {
    return {
        id: getId(),
        name: name,
        offense: offense,
        defense: defense
    };
}
var cards = [cardFactory("Yong", 10, 9), cardFactory("Liz", 10, 8),
    cardFactory("Trena", 10, 7), cardFactory("Justin", 10, 6)];
cards.forEach(function (card) { return appendToElement('#cardArea', convertCardToNode(card)); });
/*///// END OF FOCUS ///////
*
*
*
*
*
*
*
*
*
*/
function convertCardToNode(card) {
    var cardNode = createElement('section', null, 'card');
    var cardAttributes = ['name', 'id', 'offense', 'defense'];
    var newNode = cardAttributes.reduce(function (newCardNode, attr) {
        newCardNode.appendChild(createElement('span', card[attr], attr));
        return newCardNode;
    }, cardNode);
    newNode.id = card.id;
    return newNode;
}
function addCardsToDOM(cards) {
    for (var card in cards)
        appendToElement('body', card);
}
function createElement(type, data, id) {
    if (data === void 0) { data = null; }
    if (id === void 0) { id = null; }
    if (type == undefined || type == null)
        throw new Error("Must give a type to this function");
    var newNode = document.createElement(type);
    if (data || typeof data == 'number') {
        newNode.innerText = id + ": " + data;
        enableInteractions(newNode);
    }
    if (id)
        newNode.className = id;
    return newNode;
}
function enableInteractions(newNode) {
    newNode.draggable = true;
    newNode.ondragover = function (e) { return e.preventDefault(); };
    newNode.ondragstart = dragCard;
    newNode.ondrop = dropCard;
}
function appendToElement(selector, node) {
    document.querySelector(selector).appendChild(node);
}
function dragCard(event) {
    event.dataTransfer.setData('text', event.target.textContent);
    event.dataTransfer.setData('swapId', event.target.closest('.card').id);
    // console.log(event)
    event.dataTransfer.setData('className', event.target.className);
}
function dropCard(event) {
    var dt = event.dataTransfer;
    var node = dt.getData('text');
    var oldNode = document.getElementById(dt.getData('swapId'));
    oldNode.querySelector('.' + dt.getData('className')).textContent = event.target.textContent;
    event.target.textContent = node;
}
// document.addEventListener('ondrop', e=>console.log(e.target))
//event listener for ondrop
//if the card that is being dropped on
// health is taken below 0
//alert game over and refresh
