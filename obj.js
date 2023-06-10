class Persona{
    constructor(nombre, edad, institucion){
        this.nombre = nombre
        this.edad = edad
        this.institucion = institucion
    }

    saludar() {
        console.log('Hola, mi nombre es '+ this.nombre)
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, institucion, cursosACargo){
        super(nombre, edad, institucion)
        this.cursosACargo = cursosACargo
    }
    saludar(){
        console.log('Hola mi nombre es '+ this.nombre + ' y soy profesor en '+ this.institucion)

    }

    informarCantidadDeCursos(){
        console.log('Me encuentro dando '+ this.cursosACargo+ ' cursos en la institucion '+ this.institucion)

    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, institucion, cursoActual){
        super(nombre, edad, institucion)
        this.cursoActual = cursoActual
    }
    saludar(){
        console.log('Hola mi nombre es '+ this.nombre + ' y estoy en el curso '+ this.cursoActual)

    }

}




let profesor = new Profesor("Roman", 42, "Plataforma 5", 2)
profesor.saludar()
profesor.informarCantidadDeCursos()


let estudiante = new Estudiante("Gabriela", 24, "Plataforma 5", "Coding Bootcamp")
estudiante.saludar()


// No tiene sentido ya que un robot deberia poseer otras propiedades diferentes a persona 