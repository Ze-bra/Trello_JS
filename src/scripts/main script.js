"use strict"

import { header } from "./header"
import { body } from "./body";
import { modalWindowToDo } from "./Cards/modal window";
import { createWarningModalWindow } from "./Cards/warning modal window";
import { createAllDeleteModalWindow } from "./Cards/allDelete modal window";
import { createEditModalWindow } from "./Cards/edit modal window";
import { localStorageSetItem, localStorageGetItem } from "./storeKey";


//div id="root"

const root = document.createElement("div")
root.id = "root"
root.classList = ["root container"]

document.body.prepend(root, modalWindowToDo(), createWarningModalWindow(), createAllDeleteModalWindow(), createEditModalWindow())

//div class="wrapper"
const wrapper = document.createElement("div")
wrapper.classList = ["trello__wrapper wrapper"]
root.append(wrapper)

//div class="block"
const block = document.createElement("div")
block.classList = ["trello__wrapper-block block"]
wrapper.append(block)

block.append(header, body)


window.addEventListener('beforeunload', localStorageSetItem)

window.addEventListener('load', localStorageGetItem)