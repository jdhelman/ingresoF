/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  
	let marca;
	let precio;
	let peso;
	let tipo;
	let seguir;
	let precioMaxL;
	let precioMInS;
	let marcaMasCaraL;
	let marcaMasBaratoS;
	let acumuladorPeso = 0;
	let banderaPrecioL = 0;
	let banderaPrecioS = 0;


	do {


		marca = prompt("Ingrese marca");

		precio = parseFloat(prompt("Ingrese precio mayor a 0"));

		while (precio <= 0 || isNaN(precio)) {

			precio = parseFloat(prompt("Error. Ingrese precio mayor a 0"));
		
		}

		peso = parseInt(prompt("Ingrese peso mayor a 0"));


		while (peso <= 0 || isNaN(peso)) {

			peso = parseInt(prompt("Error. Ingrese peso mayor que 0:"));
		
		}

		tipo = prompt('Ingrese tipo "s" para sólido o "l" para líquido');

		while (tipo != "s" && tipo != "l") {

			tipo = prompt('Error. Ingrese tipo "s" para sólido o "l" para líquido');
		
		}

		seguir = prompt('¿Desea ingresar otro producto? ("s" para sí y "n" para no)');


		acumuladorPeso += peso;


		switch (tipo) {

			case "l" :

				if (banderaPrecioL == 0 || precio > precioMaxL) {

					precioMaxL = precio;
					marcaMasCaraL = marca;
					banderaPrecioL = 1;
				}	

				break;

			case "s" :

				if (banderaPrecioS == 0 || precio < precioMInS) {

					precioMInS = precio;
					marcaMasBaratoS = marca;
					banderaPrecioS = 1;
				}
				break;
		}


	} while (seguir == "s");




	console.log("a) El peso total de la compra es: "+acumuladorPeso);


	if (banderaPrecioL == 1) {
	
		console.log("b) La marca más cara de los líquidos es: "+marcaMasCaraL);

	} else {

		console.log("b) No se ingresaron productos líquidos");
	}

	if (banderaPrecioS == 1) {

		console.log("c) La marca más barata de los sólidos es: "+marcaMasBaratoS);

	} else {

		console.log("b) No se ingresaron productos sólidos");

	}

}
