import { todoBody, progressBody, doneBody } from "../body";
import { updateCounters } from "../Counters/counters"
import { createWarningModalWindow } from "../Cards/warning modal window";



const transferThisCard = (e) => {

    if (e.target.closest('.wrapperCardTodo').parentElement == todoBody) {
        
        if (progressBody.childElementCount === 6) {
            createWarningModalWindow()
            const warningModalWindow = document.querySelector('.warningModalWindow')
            warningModalWindow.style.display = "block"
        } else {
        
            //console.log(e.target.closest('.wrapperCardTodo'))
            const cardItem = e.target.closest('.wrapperCardTodo')

            cardItem.remove()
            progressBody.append(cardItem)
            cardItem.style.background = "#f0e0ed"
            cardItem.classList.remove('todoCardTodo')
            cardItem.classList.toggle('progressCardTodo')  //назначен новый класс '.progressCardTodo'

            updateCounters()
        }
    } else
        
        if (e.target.closest('.wrapperCardTodo').parentElement == progressBody) {
            const cardItem = e.target.closest('.wrapperCardTodo')
            cardItem.remove()
            doneBody.append(cardItem)
            e.target.remove()
            cardItem.style.background = "#d1def1"
            cardItem.classList.remove('todoCardTodo', 'progressCardTodo' )
            cardItem.classList.toggle('doneCardTodo')  //назначен новый класс '.doneCardTodo'

            updateCounters()
        }

}

export { transferThisCard }