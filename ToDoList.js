// Actividad 


var inputPrincipal = document.querySelector(".input");

var botonAgregar = document.querySelector('.boton-agregar');

const container = document.querySelector('.container');




class Item {
    constructor(tarea){
        this.crearDiv(tarea)
    }
    crearDiv(tarea){
        
        var inputItem = document.createElement('input')
        inputItem.setAttribute("type","text")
        inputItem.value = tarea
        inputItem.disabled = true

        inputItem.classList.add('item-input')

        tarea = inputPrincipal.value

        const nuevoDiv = document.createElement('div')
        nuevoDiv.classList.add('item')

        const botonEditar = document.createElement('button')
        botonEditar.innerHTML = `<i class='fas fa-lock'></i>`
        botonEditar.classList.add('boton-editar')


        const botonRemover = document.createElement('button')
        botonRemover.innerHTML = `<i class='fas fa-trash'></i>`
        botonRemover.classList.add('boton-remover')

        nuevoDiv.appendChild(inputItem)
        nuevoDiv.appendChild(botonEditar)
        nuevoDiv.appendChild(botonRemover)

        container.appendChild(nuevoDiv)


        botonEditar.addEventListener("click", function() {
            // Alternar la propiedad disabled entre true y false
            inputItem.disabled = !inputItem.disabled;
            botonEditar.innerHTML = inputItem.disabled ? "<i class='fas fa-lock'></i>" : "<i class='fas fa-lock-open'></i>";
        }); 

        botonRemover.addEventListener("click", function() {
            nuevoDiv.remove()
        }); 
    }
}


function checkearInput(inputPrincipal){
    var tarea = inputPrincipal.value 
    new Item(tarea)
    inputPrincipal.value = ''
}

botonAgregar.addEventListener('click', function() {
    checkearInput(inputPrincipal);
});

