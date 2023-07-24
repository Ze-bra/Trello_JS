import { createDiv } from "./Elements/createDiv";
import { createButton } from "./Elements/createButton";
import { text } from "./Elements/createText";

//import { createCardTodo } from "./Cards/cardTodo";


const body = createDiv("trello-block__body", null, null)


// ---------------------- 1 колонка Todo-----------------------
const columnTodo = createDiv("body-column todo", null, null)

const todoHeader = createDiv("todo__header header", null, null)

/********** СЧЕТЧИК ***************/
const counterTodo = text('p', `TODO: 0`)
counterTodo.classList = ["counterTodo"]
todoHeader.append(counterTodo)

const todoBody = createDiv("todo__body", null, null)

const todoFooter = createDiv("todo__footer", null, null)

/********** КНОПКА ADD TODO ***************/
const addTodo = createButton("add-todo btn", "Add todo", "add-todo", () => {

    const modal = document.querySelector('.modal')
    modal.style.display = "block"
})

todoFooter.append(addTodo)

columnTodo.append(todoHeader, todoBody, todoFooter)


// ---------------------2 колонка Progress ------------------------
const columnProgress = createDiv("body-column progress", null, null)

const progressHeader = createDiv("progress__header header", null, null)

/********** СЧЕТЧИК ***************/
const counterInProgress = text('p', `IN PROGRESS: 0`)
counterInProgress.classList = ["counterInProgress"]
progressHeader.append(counterInProgress)

const progressBody = createDiv("progress__body", null, null)

columnProgress.append(progressHeader, progressBody)


// ---------------------3 колонка Done----------------------------
const columnDone = createDiv("body-column done", null, null)

const doneHeader = createDiv("done__header header", null, null)

/********** СЧЕТЧИК ***************/
const counterDone = text('p', `DONE: 0`)
counterDone.classList = ["counterDone"]
doneHeader.append(counterDone)

const doneBody = createDiv("done__body", null, null)

const doneFooter = createDiv("done__footer", null, null)

/********** КНОПКА DELETE ALL ***************/
const deleteAll = createButton("delete-all btn", "Delete all", "delete-all", () => {

    const allDeleteModalWindow = document.querySelector('.allDeleteModalWindow')
    allDeleteModalWindow.style.display = "block"
})

doneFooter.append(deleteAll)
columnDone.append(doneHeader, doneBody, doneFooter)

//-----------APPEND------------------------------

body.append(columnTodo, columnProgress, columnDone)

export { body, addTodo, todoBody, progressBody, doneBody }