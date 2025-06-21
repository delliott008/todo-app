document.getElementById("todo-form").addEventListener("submit", function(event) {
  event.preventDefault();
  addTodo();
});



function addTodo() {
  const todoElement = document.getElementById("new-todo");
  const todo = todoElement.value;
  todoElement.value ="";
  if (todo.length < 3) {
    return alert("You must have at least characters for your Todo items!")
  }
  const list = document.getElementById("list");
  const li = document.createElement("li");
  const text = document.createTextNode(todo);


  
  li.setAttribute("onclick", "this.remove()");

  li.appendChild(text);
  list.appendChild(li);

  document.getElementById("new-todo").value = '';
}
