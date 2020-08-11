/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {


	let nombre;
	let peso;
	let sexo;
	let edad;
	let hombreMasPesado;
	let pesoMax;
	let acumuladorEdad = 0;
	let contadorFemenino = 0;
	let contadorEdad = 0;
	let banderaPeso = 0;



	for (let i = 1; i < 6; i++) {

		nombre = prompt("Ingrese nombre:");

		peso = parseInt(prompt("Ingrese peso (mayor que 0):"));

		while (peso <= 0 || isNaN(peso)) {

			peso = parseInt(prompt("Error. Ingrese peso (mayor que 0):"));
		
		}


		sexo = prompt('Ingrese sexo "m" o "f":');

		while (sexo != "m" && sexo != "f") {

			sexo = prompt('Error. Ingrese sexo "m" o "f":');

		}

		edad = parseInt(prompt("Ingrese edad (mayor a 0):"));

		while (edad <= 0 || isNaN(edad)) {

			edad = parseInt(prompt("Error. Ingrese edad (mayor a 0):"));
		
		}


		if (sexo == "f") {

			contadorFemenino++;

		}

		if (sexo == "m") {


			if (banderaPeso == 0 || peso > pesoMax) {

				pesoMax = peso;
				hombreMasPesado = nombre;
				banderaPeso = 1;
			}

		}



		acumuladorEdad += edad;
		contadorEdad++;
		
	}

	if (contadorFemenino > 0) {

		console.log("a) Hay "+contadorFemenino+" mujeres.");

	} else {

		console.log("a) No se ingresaron mujeres.");
	}

	console.log("b) La edad promedio en total es: "+acumuladorEdad/contadorEdad);


	if (banderaPeso = 1) {

		console.log("c) El hombre más pesado es "+hombreMasPesado);

	} else {

		console.log("c) No se ingresaron hombres")
	}






}
