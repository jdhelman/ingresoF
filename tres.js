/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{

	let sexo;
	let lugar;
	let temporada;
	let cantidad;
	let seguir;
	let cantidadMaxLugar;
	let lugarMasElegido;
	let cantidadMasPasajeros;
	let sexoTitularMaxPasajeros;
	let contadorPersonasInvierno = 0;
	let acumuladorViajes = 0;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let banderaCantidad = 0;
	let banderaPasajeros = 0;

	do {


		sexo = prompt('Ingrese sexo del titular "m" o "f":');

		while (sexo != "m" && sexo != "f") {

			sexo = prompt('Error. Ingrese sexo del titular "m" o "f":');
		}


		lugar = prompt('Ingrese el lugar: “bariloche”, “cataratas” o “salta”');

		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta") {

			lugar = prompt('Error.Ingrese el lugar: “bariloche”, “cataratas” o “salta”');
		}


		temporada = prompt('Ingrese temporada: “otoño”,”invierno", “verano",”primavera”');

		while (temporada != "otoño" && temporada != "verano" && temporada != "invierno" && temporada != "primavera") {

			temporada = prompt('Error. Ingrese temporada: “otoño”,”invierno", “verano",”primavera”');
		}


		cantidad = parseInt(prompt("Ingrese cantidad mayor a 0: "));

		while (cantidad <= 0) {

			cantidad = parseInt(prompt("Error. Ingrese cantidad mayor a 0: "));
		}


		switch (lugar) {

			case "bariloche" :

				contadorBariloche++;
				break;

			case "cataratas" :

				contadorCataratas++;
				break;

			case "salta" :

				contadorSalta++;
				break;
		}


		if(banderaCantidad == 0 || contadorBariloche > cantidadMaxLugar) {

			cantidadMaxLugar = contadorBariloche;
			lugarMasElegido = "bariloche";
			banderaCantidad = 1;
		}

		if(contadorCataratas > cantidadMaxLugar) {

			cantidadMaxLugar = contadorCataratas;
			lugarMasElegido = "Cataratas";
		}

		if(contadorSalta > cantidadMaxLugar) {

			cantidadMaxLugar = contadorSalta;
			lugarMasElegido = "Salta";
		}



		if(banderaPasajeros == 0 || cantidadMasPasajeros > cantidad) {

			cantidadMasPasajeros = cantidad;
			sexoTitularMaxPasajeros = sexo;
			banderaPasajeros = 1;
		}


		if(temporada == "invierno") {

			contadorPersonasInvierno += cantidad;
			acumuladorViajes++;

		}

		seguir = prompt("¿Desea ingresar otra persona?");

	} while (seguir == "s");


	console.log("a) El lugar más elegido es: "+lugarMasElegido);

	if (sexoTitularMaxPasajeros = "m") {

		console.log("b) El sexo del titular que lleva más pasajeros es masculino");

	} else {

		console.log("b) El sexo del titular que lleva más pasajeros es femenino");
	}


	if (acumuladorViajes > 0) {

		console.log("c) El promedio de personas por viaje que viajan en invierno es: "+contadorPersonasInvierno/acumuladorViajes);
	
	} else {

		console.log("c) No hubo viajes en Invierno");
	}



}
