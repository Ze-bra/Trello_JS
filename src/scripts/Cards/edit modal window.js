
import { createDiv } from "../Elements/createDiv"
import { createButton } from "../Elements/createButton";
import { addEditCardInTodo } from "../CardActions/AddEditCardInTodo";

const createEditModalWindow = (e) => {


    const edit_modalWindow = createDiv("edit_modal", null, "edit_myModal")

    const edit_modalContent = createDiv("modalContent", null)

    //---------edit_modalHeader-------------------
    const edit_titleTodo = document.createElement("input")
    edit_titleTodo.classList = ["edit_titleTodo"]

    console.log(e)
    //edit_titleTodo.value = `${document.querySelector('.titleCard').innerHTM}`

    //------------edit_modalBody--------------
    const edit_textTodo = document.createElement("textarea")
    edit_textTodo.classList = ["edit_textTodo"]
    //edit_edit_textTodo.value = `${document.querySelector('.textCard').innerHTM}`


    //------------edit_modalFooter----------------------
    const edit_modalFooter = createDiv("modalFooter", null, null)

    const edit_selectUser = document.createElement("select")
    edit_selectUser.name = "selectUser"
    edit_selectUser.classList = "edit_selectUser selectUser"


    const url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
        .then((response) => response.json())
        .then(userName => {
            userName.forEach(user => {
                edit_selectUser.innerHTML += `<option>${user.name}</option>`
            })
        })

    // let edit_number = parseInt(document.querySelector('.userCard').innerHTML.replace(/\D/g, ''))
    // edit_selectUser.getElementsByTagName('option')[edit_number - 1].selected = 'selected';



    /********** КНОПКА CANCEL TODO - закрыть модальное окно ***************/
    const edit_cancelTodo = createButton("cancelTodo", "CANCEL", "cancelTodo", () => {
        const edit_modal = document.querySelector('.edit_modal')
        edit_modal.style.display = "none"
    })

    window.addEventListener("click", (e) => {
        const edit_modal = document.querySelector('.edit_modal')
        if (e.target === edit_modal) {
            edit_modal.style.display = "none";
        }
    }
    )

    /********** КНОПКА CONFIRM - добавить измененные данные в карточку ***************/
    const edit_confirmTodo = createButton("edit_confirmTodo", "CONFIRM", "edit_confirmTodo", () => {

        const edit_modal = document.querySelector('.edit_modal')
        edit_modal.style.display = "none"

        addEditCardInTodo()

    })


    edit_modalFooter.append(edit_selectUser, edit_cancelTodo, edit_confirmTodo)

    edit_modalContent.append(edit_titleTodo, edit_textTodo, edit_modalFooter)

    edit_modalWindow.append(edit_modalContent)

    return edit_modalWindow
}

export { createEditModalWindow }
export { edit_modalWindow }