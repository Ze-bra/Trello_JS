import { createElement } from "./createElement";

const createButton = (className, value, id, cb = () => { }) => {
    const inputButton = createElement("input", {
        className: className,
        type: 'button',
        value: value,
        id: id,
    })

    inputButton.addEventListener('click', cb)
    
    return inputButton
}

export { createButton }
