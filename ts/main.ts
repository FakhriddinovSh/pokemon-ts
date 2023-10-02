const elForm: HTMLInputElement | null = document.querySelector(".form")
const elInput: HTMLInputElement | null = document.querySelector(".input")
const elList: HTMLInputElement | null = document.querySelector(".todo-list")

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const todos:Todo[] = []

elForm?.addEventListener("submit", (evt: Event) =>{
    evt.preventDefault();

    if (elInput && elInput.value !== "") {
        const inputValue = elInput.value.trim();

        const newObj = {
            id: todos.length + 1,
            text: inputValue,
            completed: true,
        }
        todos.push(newObj)
        renderTodos(todos)
        elInput.value = "";

    }
})

function renderTodos(arr:Todo[]){
    if(elList){
        elList.innerHTML = "";
        arr?.forEach(item =>{
            const liElement = document.createElement("li")
            liElement.textContent = item.text
            liElement.classList.add("shadow","my-2","p-3", "bg-success", "rounded")
            elList?.appendChild(liElement)
        })
    }

    
}