// const renderInfo = (user) => {
//     const infoOne = user.title;
//     const lableOne = document.createElement("lable");
//     lableOne.textContent =  infoOne;

//     const checkOne = user.completed;
//     const check = document.createElement("input");
//     check.setAttribute("type", "checkbox");
//     check.textContent = checkOne;
//     check.className = "list";

//     const card = document.createElement("div");
//     card.className = "list";

//     const toDoCard = document.createElement("div");
//     // card.append(lableOne,check);
//     toDoCard.append(card,check);

//     document.querySelector(".list").append(lableOne, checkOne, check);
// }

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(resp => resp.json())
//     .then(response => {
//         response.forEach((user) => renderInfo(user));
//         console.log(response);
//     })
//     .catch(error => {
//         console.error(error);
//     })
const renderTodo = (todo) => {
  const { id, completed, title } = todo;

  const todoEl = document.createElement("div");
  const todoTitle = document.createElement("p");
  const todoActions = document.createElement("div");
  const todoStatus = document.createElement("span");
  const deleteButton = document.createElement("button");

  todoEl.className = "todo";
  todoTitle.className = completed ? "todo-title done" : "todo-title";
  todoStatus.className = completed ? "todo-status done" : "todo-status";
  todoActions.className = "todo-actions";
  deleteButton.className = "todo-delete";

  todoTitle.textContent = title;
  todoStatus.style.cursor = "pointer";
  deleteButton.textContent = "delete";

  todoStatus.addEventListener("click", () => {
    todoStatus.classList.toggle("done");
    todoTitle.classList.toggle("done");
    todoStatus.completed = !todoStatus.completed;
  });

  deleteButton.addEventListener("click", () => {
    const params = {
      method: "DELETE",
    };
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, params)
      .then((resp) => resp.json())
      .then((response) => {
        console.log("deleted:", todo);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  todoActions.append(todoStatus, deleteButton);

  todoEl.append(todoTitle, todoActions);
  document.querySelector(".todo-container").prepend(todoEl);
};

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((response) => {
    const todos = response.slice(0, 8);

    todos.forEach((todo) => renderTodo(todo));
  })
  .catch((error) => {
    console.error(error);
  });

const handleAddTodo = (e) => {
  const todoText = document.querySelector("input[name='todo-text']");
  const newTodo = { title: todoText.value, completed: false };

  const params = {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };

  fetch("https://jsonplaceholder.typicode.com/todos", params)
    .then((resp) => resp.json())
    .then((response) => {
      renderTodo(response);
      todoText.value = "";

      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", handleAddTodo);

// Sukurti addEventListener su handlerliu onClick
// Nuspaudus ant elemento pakeisti todoStatus klasę (jeigu klasė yra done, pakeisti į undone. Jeigu klasė yra undone, pakeisti į done)
// Pakeisti todo status į priešinga, kaip su klase. jeigu buvo todo.completed = true, pakeisti i todo.completed = false;
// Pakeisti teksto sviesuma/tamsuma kai yra done/undone
// Follow dizaina, datas: menesis, diena, metai
