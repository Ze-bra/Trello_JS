import { clockTimer } from "./Elements/clock";
import { createDiv } from "./Elements/createDiv";
import youNameIt from "../img/icons8-trello-50.png"

// header
const header = createDiv("trello-block__header", null, null)

// logo
const headerLogo = createDiv("header-logo", null, null)

const imgLogo = document.createElement("img")
imgLogo.src = youNameIt

const textLogo = document.createElement("h3")
textLogo.innerHTML = "Trello"

headerLogo.append(imgLogo, textLogo)

// clock
const headerClock = createDiv("header-clock", null, null)

const clock = document.createElement("span")
clock.id = "clock"

headerClock.append(clock)

header.append(headerLogo, headerClock)

export { header }
