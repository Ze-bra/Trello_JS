import { store } from "../storeKey";
import { updateCounters } from "../Counters/counters"
import { createAllDeleteModalWindow } from "../Cards/allDelete modal window";


const deleteAllCards = () => {
    
    const doneBody = document.querySelector('.done__body')
    doneBody.innerHTML = null
    createAllDeleteModalWindow()
    store.todoList = []

    updateCounters()
}

export { deleteAllCards }

