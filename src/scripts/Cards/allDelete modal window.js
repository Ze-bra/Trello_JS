import { createButton } from "../Elements/createButton";
import { createDiv } from "../Elements/createDiv"
import { deleteAllCards } from "../CardActions/DeleteAllCards"


function createAllDeleteModalWindow() {

    const allDeleteModalWindow = createDiv("allDeleteModalWindow", null, "allDeleteModalWindow")

    const allDeletelWindowContent = createDiv("allDeleteModalWindowContent", null)

    const allDeleteModalWindowTitle = document.createElement("h2")
    allDeleteModalWindowTitle.textContent = "WARNING"

    const allDeleteModalWindowText = document.createElement("h2")
    allDeleteModalWindowText.textContent = "Вы точно хотите удалить все выполненные задания?"

    const allDeleteModalWindowBtn = createDiv("allDeleteModalWindowBtn", null, null)

    const allDeleteCloseBtn = createButton("allDeleteBtn", "CANCEL", "allDeleteBtn", () => {

        const allDeleteModalWindow = document.querySelector('.allDeleteModalWindow')
        allDeleteModalWindow.style.display = "none"
    })

    const allDeleteConfirmBtn = createButton("allDeleteConfirmBtn", "CONFIRM", "allDeleteConfirmBtn", () => {

        deleteAllCards()
        const allDeleteModalWindow = document.querySelector('.allDeleteModalWindow')
        allDeleteModalWindow.style.display = "none"
    })


    allDeleteModalWindowBtn.append(allDeleteCloseBtn, allDeleteConfirmBtn)

    allDeletelWindowContent.append(allDeleteModalWindowTitle, allDeleteModalWindowText, allDeleteModalWindowBtn)

    allDeleteModalWindow.append(allDeletelWindowContent)

    return allDeleteModalWindow
}

export { createAllDeleteModalWindow }