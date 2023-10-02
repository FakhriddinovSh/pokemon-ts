var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elList = document.querySelector(".todo-list");
var todos = [];
elForm === null || elForm === void 0 ? void 0 : elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (elInput && elInput.value !== "") {
        var inputValue = elInput.value.trim();
        var newObj = {
            id: todos.length + 1,
            text: inputValue,
            completed: true,
        };
        todos.push(newObj);
        renderTodos(todos);
        elInput.value = "";
    }
});
function renderTodos(arr) {
    if (elList) {
        elList.innerHTML = "";
        arr === null || arr === void 0 ? void 0 : arr.forEach(function (item) {
            var liElement = document.createElement("li");
            liElement.textContent = item.text;
            liElement.classList.add("shadow", "my-2", "p-3", "bg-success", "rounded");
            elList === null || elList === void 0 ? void 0 : elList.appendChild(liElement);
        });
    }
}
