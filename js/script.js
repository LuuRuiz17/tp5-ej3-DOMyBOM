// 3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser 
// presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón 
// creado para ese fin. 

function agregarTareas(e) {
    e.preventDefault();
    const tarea = document.querySelector('#tareaInput').value;
    const icono = document.createElement('i');
    const li = document.createElement('li');
    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn', 'btn-sm', 'btn-danger', 'eliminar-tarea');
    btnEliminar.appendChild(icono);
    if (tarea.trim() != "") {
        li.textContent = tarea;
        li.classList.add("list-group-item", "w-100", "d-flex", "justify-content-between", "align-items-center");
        lista.appendChild(li);
        icono.classList.add('bi', 'bi-trash');
        li.appendChild(btnEliminar);
        btnEliminar.appendChild(icono);
    }
    formularioTareas.reset();
    btnEliminar.addEventListener('click' , () => {
    li.remove();    
})
}

const lista = document.querySelector('.list-group');
const btnEliminar = document.querySelector('.btn-danger');
const formularioTareas = document.querySelector("#formularioTareas");
formularioTareas.addEventListener('submit', agregarTareas);
