const getId = (function () {
    let id = 0;
    return () => id++;
})()
/*
*
*
*
*
*
*
*
*
*////// START OF FOCUS ///////
interface Card {
    name: string,
    id: number,
    offense: string,
    defense: string
}

function cardFactory(name, offense, defense): Card {
    return {
        id: getId(),
        name,
        offense,
        defense
    }
}


const cards = [cardFactory("Yong", 10, 9), cardFactory("Liz", 10, 8),
cardFactory("Trena", 10, 7), cardFactory("Justin", 10, 6)]



cards.forEach(card => appendToElement('#cardArea', convertCardToNode(card)))











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
    const cardNode = createElement('section', null, 'card');
    const cardAttributes = ['name', 'id', 'offense', 'defense']

    const newNode = cardAttributes.reduce((newCardNode, attr) => {
        newCardNode.appendChild(createElement('span', card[attr], attr))
        return newCardNode
    }, cardNode)
    newNode.id = card.id
    return newNode
}

function addCardsToDOM(cards) {
    for (const card in cards) appendToElement('body', card)
}

function createElement(type, data = null, id = null) {
    if (type == undefined || type == null) throw new Error("Must give a type to this function")
    const newNode = document.createElement(type)    

    if (data || typeof data == 'number'){
        newNode.innerText = `${id}: ${data}`
        enableInteractions(newNode)
    }

    if (id)
        newNode.className = id

    return newNode
}

function enableInteractions(newNode) {
    newNode.draggable = true;
    newNode.ondragover = e => e.preventDefault()
    newNode.ondragstart = dragCard
    newNode.ondrop = dropCard
}
function appendToElement(selector, node) {
    document.querySelector(selector).appendChild(node)
}

function dragCard(event) {
    event.dataTransfer.setData('text', event.target.textContent)
    event.dataTransfer.setData('swapId', event.target.closest('.card').id)
    // console.log(event)
    event.dataTransfer.setData('className', event.target.className)
}

function dropCard(event) {
    const dt = event.dataTransfer
    const node = dt.getData('text')
    const oldNode = document.getElementById(dt.getData('swapId'))

    oldNode.querySelector('.' + dt.getData('className')).textContent = event.target.textContent
    event.target.textContent = node
}

// document.addEventListener('ondrop', e=>console.log(e.target))
//event listener for ondrop
    //if the card that is being dropped on
        // health is taken below 0
            //alert game over and refresh