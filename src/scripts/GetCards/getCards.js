
const getCardInTodo = () => {
    const cardInTodo = document.querySelectorAll('.todoCardTodo')
    return cardInTodo
}

const getCardInProgress = () => {
    const cardInProgress = document.querySelectorAll('.progressCardTodo')
    return cardInProgress
}

const getCardInDone = () => {
    const cardInDone = document.querySelectorAll('.doneCardTodo')
    return cardInDone
}

export { getCardInTodo, getCardInProgress, getCardInDone }