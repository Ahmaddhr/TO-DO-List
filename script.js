const inputValue = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const error = document.getElementById('error');
const resetBtn = document.getElementById('reset');
function addTodo() {
      if (inputValue.value === "") {
            error.innerText = "Please enter a task in the form above..!"
      } else {
            error.innerText = "";
            const li = document.createElement("li");
            li.innerHTML = inputValue.value;
            listContainer.appendChild(li);
            let span = document.createElement('span');
            span.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            li.appendChild(span);
            inputValue.value = "";
            saveData();

      }

}
function saveData() {
      localStorage.setItem("data", listContainer.innerHTML);
}
function getData() {
      listContainer.innerHTML = localStorage.getItem("data");
}
getData();

function reset() {
      listContainer.innerHTML = "";
      saveData();
}
/*span.addEventListener("click" , deleteli);
          function deleteli(){
                this.parentElement.remove();
          }*/

listContainer.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
            e.target.classList.toggle('checked');

            saveData();
      } else if (e.target.tagName === "SPAN" || e.target.tagName === "I") {
            e.target.parentElement.remove();
            saveData();
      } else {
            false;
      }
})

