let todoList = JSON.parse(localStorage.getItem("todoList")) || [
  {
    item: "Buy Milk",
    dueDate: "2/11/2025",
  },
  {
    item: "go to college",
    dueDate: "3/12/2022",
  },
];
displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";

  saveToLocalStorage();
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class = "btn-delete" onclick = "todoList.splice(${i}, 1);
        displayItems()">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  saveToLocalStorage();
  displayItems();
}

function saveToLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
