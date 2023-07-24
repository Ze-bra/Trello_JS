
import { createDiv } from "../Elements/createDiv"
import { createButton } from "../Elements/createButton";
import { addCardInTodo } from "../CardActions/AddCardInTodo";


const modalWindowToDo = () => {

    const modalWindow = createDiv("modal", null, "myModal")

    const modalContent = createDiv("modalContent", null)

    //---------modalHeader-------------------
    const titleTodo = document.createElement("input")
    titleTodo.classList = ["titleTodo"]
    titleTodo.placeholder = "Title..."


    //------------modalBody--------------
    const textTodo = document.createElement("textarea")
    textTodo.classList = ["textTodo"]
    textTodo.placeholder = "Description..."

    //------------modalFooter----------------------
    const modalFooter = createDiv("modalFooter", null, null)

    const selectUser = document.createElement("select")
    selectUser.name = "selectUser"
    selectUser.classList = "selectUser"


    const url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
        .then((response) => response.json())
        .then(userName => {
            userName.forEach(user => {
                selectUser.innerHTML += `<option>${user.name}</option>`
            })
        })

    // for (let i = 1; i <= 10; i++) {
    //     const option = document.createElement("option");
    //     option.value = `name ${i}`;
    //     option.text = `name ${i}`;
    //     selectUser.append(option);
    // }

    /********** КНОПКА CANCEL TODO - закрыть модальное окно ***************/
    const cancelTodo = createButton("cancelTodo", "CANCEL", "cancelTodo", () => {
        const modal = document.querySelector('.modal')
        modal.style.display = "none"
    })

    window.addEventListener("click", (e) => {
        const modal = document.querySelector('.modal')
        if (e.target === modal) {
            modal.style.display = "none";
        }
    }
    )
    /********** КНОПКА CONFIRM - добавить карточку в туду ***************/
    const confirmTodo = createButton("confirmTodo", "CONFIRM", "confirmTodo", () => {

        addCardInTodo()

        const modal = document.querySelector('.modal')
        modal.style.display = "none"

    })


    modalFooter.append(selectUser, cancelTodo, confirmTodo)

    modalContent.append(titleTodo, textTodo, modalFooter)

    modalWindow.append(modalContent)

    return modalWindow
}

export { modalWindowToDo }
export { modalWindow }