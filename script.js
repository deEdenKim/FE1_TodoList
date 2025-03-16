//let todo = document.querySelector(".complete");

/*
odo.addEventListener("click", function () {
  // if (todo.classList.contains("done")) {
  //   todo.classList.remove("done");
  // } else {
  //   todo.classList.add("done");
  // }

  //윗 4줄을 1줄로 바꿀 수 있음.
  todo.classList.toggle("done");
});
*/

let button = document.querySelector("#darkMode");
button.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// 입력창
let input = document.querySelector("#todoInput");

// 추가 버튼
let addButton = document.querySelector("#addTodo");

//할 일 목록. 존재하는 모든 <li> 요소에 이벤트 추가
let existingTodos = document.querySelectorAll("#todoList li");
existingTodos.forEach(function (todo) {
  todo.addEventListener("click", function () {
    todo.classList.toggle("done");
  });
});

addButton.addEventListener("click", function () {
  let newTodoText = input.value; //입력한 값 가져오기

  if (newTodoText.trim() === "") {
    alert("할 일을 입력하세요!"); //빈 입력 방지
    return;
  }

  let newTodo = document.createElement("li"); //새로운 <li>요소 생성
  newTodo.textContent = newTodoText; //입력한 값을 <li>에 추가
  newTodo.classList.add("complete");

  //새로운 할 일을 클릭하면 완료 될 수 있도록, 이벤트 추가하기
  newTodo.addEventListener("click", function () {
    newTodo.classList.toggle("done");
  });

  todoList.appendChild(newTodo); //<ul>에 이렇게 새로 만든 <li>를 추가
  input.value = ""; //입력창 비우기
});
