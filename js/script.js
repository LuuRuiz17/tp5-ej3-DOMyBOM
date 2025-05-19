// 3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser 
// presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón 
// creado para ese fin. 

function agregarTareas(e) {
    e.preventDefault();
    const lista = document.querySelector('.list-group');
    const tarea = document.querySelector('#tareaInput').value;
    const li = document.createElement('li');
    li.textContent = tarea;
    li.classList.add("list-group-item");
    lista.appendChild(li);
    formularioTareas.reset();
}

