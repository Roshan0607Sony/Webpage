const button = document.querySelector(".button button");
const todoDiv = document.querySelector(".ToDo");
const input = document.querySelector(".input1 input");

let count = 0;

button.addEventListener("click", function(event) {
    event.preventDefault();

    const task = input.value.trim();
    if (task !== "") {
        count++;

        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `task-${count}`;

        const label = document.createElement("label");
        label.htmlFor = `task-${count}`;
        label.textContent = `${count}. ${task}`;

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                label.style.textDecoration = "line-through";
            } else {
                label.style.textDecoration = "none";
            }
        });

       
        taskContainer.appendChild(label);
        taskContainer.appendChild(checkbox);

        todoDiv.appendChild(taskContainer);

        input.value = "";
    }
});
