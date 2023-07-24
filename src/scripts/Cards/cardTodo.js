
import { createDiv } from "../Elements/createDiv";
import { createButton } from "../Elements/createButton";
import { deleteConcreteCard } from "../CardActions/DeleteCard";
import { transferThisCard } from "../CardActions/TransferCard";
import { createEditModalWindow } from "../Cards/edit modal window";


function createCardTodo(id, title, text, user, date) {

    const wrapperCardTodo = createDiv("wrapperCardTodo todoCardTodo", null, id)

    //------------CardTodoHeader--------------
    const cardTodoHeader = createDiv("cardTodoHeader")

    const titleCard = document.createElement("span")
    titleCard.textContent = title
    titleCard.classList = ["titleCard"]


    const btnHeader = createDiv("btnHeader")
    /********** КНОПКА EDIT CARD ***************/
    const editCard = createButton("editCard", "EDIT", "editCard", (e) => {

        createEditModalWindow(e.target)
        //console.log(e)

        const modal = document.querySelector('.edit_modal')
        modal.style.display = "block"
    })

    /********** КНОПКА DELETE CARD ***************/
    const deleteCard = createButton("deleteCard", "DELETE", "deleteCard", (e) => {

        deleteConcreteCard(e)
    })
    btnHeader.append(editCard, deleteCard)

    cardTodoHeader.append(titleCard, btnHeader)


    //-------------cardTodoBody---------------------
    const cardTodoBody = createDiv("cardTodoBody")

    const textCard = document.createElement("span")
    textCard.textContent = text
    textCard.classList = ["textCard"]

    /********** КНОПКА transfer CARD ***************/
    const transferCard = createButton("transferCard", ">", "transferCard", (e) => {

        transferThisCard(e)
    })

    cardTodoBody.append(textCard, transferCard)


    //--------------CardTodoFooter------------------
    const cardTodoFooter = createDiv("cardTodoFooter")

    const userCard = document.createElement("span")
    userCard.textContent = user
    userCard.classList = ["userCard"]

    const dateElement = document.createElement('div')
    dateElement.textContent = date
    dateElement.classList = "dateElement"

    cardTodoFooter.append(userCard, dateElement)


    wrapperCardTodo.append(cardTodoHeader, cardTodoBody, cardTodoFooter)

    return wrapperCardTodo
}

export { createCardTodo, transferCard, wrapperCardTodo }