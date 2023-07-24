import { createCardTodo, wrapperCardTodo } from "./Cards/cardTodo";
import { todoBody, progressBody, doneBody } from "./body";
import { updateCounters } from "./Counters/counters";



//ключ
const card_KEY = "card_KEY"
//значение ОБЪЕКТ (кортеж=ключ:значение)
let store = {
    cardList: [],
    counter: 0
}

localStorageSetItem = () => {
    localStorage.setItem(card_KEY, JSON.stringify(store))
}
//debugger
localStorageGetItem = () => {
    const data = JSON.parse(localStorage.getItem(card_KEY))
    console.log(data)

    if (data) { store = data }

    store.cardList.forEach(item => {
        const newCardList = createCardTodo
            (item.id, item.title, item.text, item.user, item.date, item.class)


        // if (newCardList.classList.contains('progressCardTodo')) {
        //         progressBody.append(newCardList)
        //     }


        // if (item.class == "todoCardTodo") {
        //     todoBody.append(newCardList)
        //  } else
        //     if (item.class == "progressCardTodo") {
        //         progressBody.append(newCardList)
        //     } else
        //         if (item.class == "doneCardTodo") {
        //             doneBody.append(newCardList)
        //         }
        todoBody.append(newCardList)
    })
    updateCounters()
}

export { card_KEY, store }
export { localStorageSetItem, localStorageGetItem }