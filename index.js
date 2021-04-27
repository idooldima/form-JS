"use strict";
const form = document.getElementById("root-form");
const list = document.getElementById("root-list");

form.addEventListener("submit", submitHandler);

const arr = [];

function submitHandler(event) {
  event.preventDefault();
  const {
    target,
    target: {
      elements: { email },
    },
  } = event;

  if (email.value) {
    const id = mathRadnom(1, 999999, 1);
    arr.push({ id, value: email.value });
    list.append(createListItem(id, email.value));
    target.reset();
  }
}

function createListItem(id, value) {
  const listItem = document.createElement("li");
  const button = document.createElement("button");
  listItem.setAttribute("id", id);
  listItem.innerText = value;
  button.textContent = "delete";
  button.addEventListener("click", () => deleteHandler(id));

  listItem.append(button);
  return listItem;
}

function deleteHandler(id) {
  document.getElementById(id).remove();
  const index = arr.findIndex((element) => element.id === id);
  if (index > -1) {
    arr.splice(index, 1);
  }
}

function mathRadnom(min, max, quanity) {
  const arr = [];
  for (let i = 0; i < quanity; i++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    arr.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return arr;
}
