const task = ["Arreglar la vitro", "Comprar pan"]
const section = document.getElementById("tareas");

if (task.length === 0) {
	const emptyMsg = document.createElement("p");
	emptyMsg.textContent = "No hay tareas pendientes.";
	section.append(emptyMsg);
} else {
	const title = document.createElement("h2");
	title.textContent = "Mis Tareas"

	const ul = document.createElement("ul");
	//ul.id("list-tasks")

	task.forEach(task => {
		const li = document.createElement("li");
		//li.className = "task"
		li.textContent = task;
		ul.append(li);
	});

	section.append(ul);
}