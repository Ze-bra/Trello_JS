

const addEditCardInTodo = () => {

    const title = document.querySelector('.titleCard')
    const edit_title = document.querySelector('.edit_titleTodo')
    title.innerHTML = `${edit_title.value}`

    const text = document.querySelector('.textCard')
    const edit_text = document.querySelector('.edit_textTodo')
    text.innerHTML = `${edit_text.value}`

    const userCard = document.querySelector('.userCard')
    const edit_selectUser = document.querySelector('.edit_selectUser')
    userCard.innerHTML = `${edit_selectUser.options[edit_selectUser.selectedIndex].text}`

}

export { addEditCardInTodo }