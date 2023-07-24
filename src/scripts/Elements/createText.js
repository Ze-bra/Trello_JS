
const text = (tag, text) => {
    const textModal = document.createElement(`${tag}`)
    textModal.textContent = `${text}`
    return textModal
}

export { text }
