//selector
const inputText = document.querySelector(".input-text");
const plusBtn = document.querySelector(".btn");
const list = document.querySelector(".list");
const deleteBtn = document.querySelector(".checkbox-1");
const select = document.querySelector('.select');
const footer = document.querySelector(".footer");
const completed = document.querySelector(".completed");
const mid = document.querySelector(".mid");
const body = document.querySelector("body");
const switchBtn = document.querySelector(".switch-btn");




//event listener

plusBtn.addEventListener("click", addTodo);

switchBtn.addEventListener("click", theme);

list.addEventListener("click", deleteTodo);

select.addEventListener('click', eSelect);

document.addEventListener('DOMContentLoaded', getTodos);

//functions

 function theme(){
     body.classList.toggle("switch");
};



function addTodo(event) {
    event.preventDefault();
    // div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // li
    const todoList = document.createElement("li");
    todoList.classList.add("todo-li");
    todoList.innerText = inputText.value;
    todoDiv.appendChild(todoList);
    //localStorage
    saveLocalTodos(inputText.value);
    //toogles
    const footerT = document.querySelector(".footer");
    footerT.classList.add("footer-t");
    //toogles 2
    const listT = document.querySelector(".list");
    listT.classList.add("list-t");
    // checkMark2
    const completeBtnS = document.createElement("div");
    completeBtnS.classList.add("checkbox-12");
    todoDiv.appendChild(completeBtnS);
    // checkMarkEnd
    const completeBtnEnd = document.createElement("button");
    completeBtnEnd.innerHTML = '<img src="img/icon-cross.svg">';
    completeBtnEnd.classList.add("complete-btn-end");
    todoDiv.appendChild(completeBtnEnd);
    list.appendChild(todoDiv);
    inputText.value = '';
};
function check() {
    event.preventDefault();

  var empt = document.getElementsByClassName('list').innerHTML;
  var testTT = document.getElementsByClassName('footer');
  const todo = document.getElementsByClassName('todo');
  if (empt == null || empt == "")
  {
    
    return false;
  }
  else 
  {
    todo.remove();
      return true; 
  }
}
function deleteTodo(e){
    const item = e.target;
    //delete
    if(item.classList[0] === "complete-btn-end"){
        const todo = item.parentElement;
        removeLocalTodos(todo);
        todo.remove();
    }
    //check
    if(item.classList[0] === "checkbox-12"){
        const todo = item.parentElement;
        todo.classList.toggle('checked');
    }
    
    
    
    
}
function eSelect(e){
    const todos = list.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                completed.classList.add(".color-t");
                if (todo.classList.contains("checked")){
                    todo.style.display = "flex";
                    
                } else{
                    todo.style.display = "none";
                }
                break;
            case "active":
                if (!todo.classList.contains("checked")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                break;
            case "clear":
                if (todo.classList.contains("checked")){
                    todo.remove();
                }      
        }
    });
}
function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
       // todo.preventDefault();
    // div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
        // li
const todoList = document.createElement("li");
todoList.classList.add("todo-li");
todoList.innerText = todo;
todoDiv.appendChild(todoList);
//toogles
const footerT = document.querySelector(".footer");
footerT.classList.add("footer-t");
// checkMark2
const completeBtnS = document.createElement("div");
completeBtnS.classList.add("checkbox-12");
todoDiv.appendChild(completeBtnS);
// checkMarkEnd
const completeBtnEnd = document.createElement("button");
completeBtnEnd.innerHTML = '<img src="img/icon-cross.svg">';
completeBtnEnd.classList.add("complete-btn-end");
todoDiv.appendChild(completeBtnEnd);
list.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}




const box = document.querySelector('.footer');
const rect = box.getBoundingClientRect();


        function myFunction() {
            if (rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
              console.log("true");
            } else {
                console.log("false");
            }
          }
