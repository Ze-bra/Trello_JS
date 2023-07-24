import { createButton } from "../Elements/createButton";
import { createDiv } from "../Elements/createDiv"


function createWarningModalWindow() {

    const warningModalWindow = createDiv("warningModalWindow", null, "warningModalWindow")

    const warningModalWindowContent = createDiv("warningModalWindowContent", null)

    const warningModalWindowTitle = document.createElement("h2")
    warningModalWindowTitle.textContent = "WARNING"

    const warningModalWindowText = document.createElement("h2")
    warningModalWindowText.textContent = "Сначала выполните текущие задания"

    const warningModalWindowBtn = createDiv("warningModalWindowBtn", null, null)

    const warningCloseBtn = createButton("warningBtn", "CANCEL", "warningBtn", () => {

        const warningModalWindow = document.querySelector('.warningModalWindow')
        warningModalWindow.style.display = "none"
    })

    warningModalWindowBtn.append(warningCloseBtn)

    warningModalWindowContent.append(warningModalWindowTitle, warningModalWindowText, warningModalWindowBtn)

    warningModalWindow.append(warningModalWindowContent)

    return warningModalWindow
}

export { createWarningModalWindow }