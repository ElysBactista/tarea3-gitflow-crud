let tasks = [];

// Mostrar la lista
function render() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, i) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task;

        const del = document.createElement("button");
        del.textContent = "Eliminar";
        del.onclick = () => deleteTask(i);

        li.appendChild(span);
        li.appendChild(del);

        list.appendChild(li);
    });
}

// Crear
function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value.trim() === "") return;

    tasks.push(input.value);
    input.value = "";
    render();
}

// Eliminar
function deleteTask(index) {
    tasks.splice(index, 1);
    render();
}

render();
