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

let darkButton = document.querySelector("#darkMode");
darkButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// 입력창
let input = document.querySelector("#todoInput");

// 추가 버튼
let addButton = document.querySelector("#addTodo");

let todoList = document.querySelector("#addTodo");

let datePicker = document.querySelector("#datePicker");

//날짜별 투두 저장 객체
let todoData = {}; //2025-02-21: [밥 먹기, 운동하기]
let selectDate = null;

//날짜 선택시 변경
datePicker.addEventListener("change", function () {
  selectedDate = this.value;
  renderTodosForDate();
});

//할일 추가 변경
addButton.addEventListener("click", function () {
  let newTodoText = input.value.trim();
  if (!selectedDate) {
    alert("날짜를 먼저 선택하세요!");
    return;
  }
  if (newTodoText === "") {
    alert("할 일을 입력하세요");
    return;
  }

  //해당 날자에 데이터가 없으면 배열 생성
  if (!todoData[selectedDate]) {
    todoData[selectedDate] = [];
  }

  //할 일 추가
  todoData[selectedDate].push(newTodoText);
  input.value = "";
  renderTodosForDate();
});

//현재 날짜에 해당하는 할 일 렌더링
function renderTodosForDate() {
  todoList.innerHTML = "";

  if (!selectedDate || !todoData[selectedDate]) return;

  todoData[selectedDate].forEach((todoText, index) => {
    let li = document.createElement("li");
    li.textContent = todoText;

    li.addEventListener("click", function () {
      li.classList.toggle("done");
    });
    todoList.appendChild(li);
  });
}
