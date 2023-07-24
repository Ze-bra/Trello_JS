import { store } from "../storeKey";
import { createCardTodo } from "../Cards/cardTodo";
import { selectUser } from "../Cards/modal window";
import { updateCounters } from "../Counters/counters";


const addCardInTodo = () => {

    const id = Date.now()
    const date = (new Date()).toISOString().slice(0, 10)
    const title = document.querySelector('.titleTodo').value
    const text = document.querySelector('.textTodo').value
    const user = document.querySelector('.selectUser')
        .options[document.querySelector('.selectUser').selectedIndex].text
    //const class1 = document.querySelector('.wrapperCardTodo').className

    const newCard = ({
        id: id,
        date: date,
        title: `${title}`,
        text: `${text}`,
        user: `${user}`,
        //class: `${class1}`,
    })

    store.cardList.push(newCard)
    store.counter = store.cardList.length
    console.log(store)

    const todoBody = document.querySelector('.todo__body')
    todoBody.append(createCardTodo
        (newCard.id, newCard.title, newCard.text, newCard.user, newCard.date, newCard.class))

    updateCounters()
}

export { addCardInTodo, title }