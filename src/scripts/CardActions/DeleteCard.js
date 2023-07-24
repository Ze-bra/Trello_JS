import { updateCounters } from "../Counters/counters"
import { store } from "../storeKey";


const deleteConcreteCard = (e) => {

    if (e.target.closest('.deleteCard')) {
        const cardItem = e.target.closest('.wrapperCardTodo')
        cardItem.remove()

        const currentCardId = e.target.closest('.wrapperCardTodo').id
        console.log(store)

        const index = store.cardList.findIndex(item => item.id == currentCardId)
        store.cardList.splice(index, 1)
        store.counter = store.cardList.length
    }
    updateCounters()
}

export { deleteConcreteCard }