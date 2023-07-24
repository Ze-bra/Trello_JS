//import { getTodo, getTodoInProgress, getTodoDone } from "......"
import { getCardInTodo, getCardInProgress, getCardInDone } from "../getCards/getCards"


const updateCounters = () => {
    const cardInTodo = getCardInTodo()  // карточки в туду
    const counterTodo = document.querySelector('.counterTodo')
    counterTodo.textContent = 'TODO: ' + cardInTodo.length

    const cardInProgress = getCardInProgress() //  карточки в работе
    const counterInProgress = document.querySelector('.counterInProgress')
    counterInProgress.textContent = 'IN PROGRESS: ' + cardInProgress.length

    const cardInDone = getCardInDone() //  карточки в завершенном
    const counterDone = document.querySelector('.counterDone')
    counterDone.textContent = 'DONE: ' + cardInDone.length
    console.log(cardInTodo.length, cardInProgress.length, cardInDone.length)

}

export { updateCounters }