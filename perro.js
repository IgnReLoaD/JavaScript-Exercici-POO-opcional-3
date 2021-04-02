// Aprendre POO en JavaScript, és més laxe, i no té Tippat fort com TypeScript.

class Perro{
	// el constructor genera el nou Element instanciat, segons motllo Class Perro
    constructor(nombre, edad, raza){
		// el THIS fa referència a aquest Element que instanciem ara p.ex: Pluto
		// en la propera farà referència al proper instanciat, p.ex: Lassie
        this._nombre = nombre;
        this._edad   = edad;
        this._raza   = raza;
    }

	// setters i getters (per evitar accedir a les dades-atributs directament)
    set nombre(nombre){ 
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }	
    set edad(edad){
        this._edad = edad;
    }
    get edad(){
        return this._edad;
    }
    set raza(raza){
        this._raza = raza;
    }
    get raza(){
        return this._raza;
    }
	// mètodes personalitzats segons necessitat requeriments enunciat 
    comer(food) {
        console.log(this._nombre + " come " + food);
		return food;
    }
}

function crearPerro(){
	
    /* Si volem que usuari entri per pantalla les dades:
	let nombre = prompt("Nombre perro:");
    let edad   = prompt("Edad perro:");
    let raza   = prompt("Raza perro:");
    let perro = new Perro(nombre, edad, raza);
    console.log(perro);
	*/

	// això executarà el Constructor de la Classe (per instanciar)
    var pluto = new Perro("Pluto", 9, "siberian husky");
    console.log(pluto);

	// això executarà el getter de EDAD (llegir)
    var edad = pluto.edad;
    console.log(edad);
	
    // això executarà el setter de EDAD (grabar)
	pluto.edad = 5;
    console.log(pluto);
	
	// això executarà el mètode personalitzat 
    pluto.comer("carne");
    console.log(pluto);
	
	// podem executar setter, llegir-lo i recollir en una variable
    pluto.edad = 6;  
    edad = pluto.edad;
    console.log(pluto);
	
	// podem escriure per pantalla 
	document.write(pluto.nombre + " tiene " + pluto.edad + " años y come " + pluto.comer('carne') + ".");
}

