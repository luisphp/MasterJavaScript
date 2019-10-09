'use strict'
			//var = "Pais";
			//alert("Hola mundo");
			//document.write("Hello");
			//confirm("Estas seguro de querer continuar?");
			//prompt("Que edad tienes", 18);
			// programa que solicite 2 numeros, y que diga cual es menor , cual es mayor y cuando sean igual ps que diga y ya!, mamado no? pd orale
			//var a = parseInt(prompt("Dame un numero"));
			//var b = parseInt(prompt("Dame otro numero"));
			//var arreglo = [];
			//var pivote = 0;
			//var promedio = 0;
			//var contador = 0;
			
			
			/*
			Ejercicio 2:
			while((pivote = parseInt(prompt("Dimelo"))) > 0){
				arreglo.push(pivote);
				contador = contador + pivote;
			}
				promedio = contador/(arreglo.length);
				
				console.log("El arreglo introducido fue: "+arreglo);
				console.log("El promedio es: "+promedio)
				console.log("La suma es: "+contador); */
			
			
			/*
			Ejercicio 1:
			function funcion(a, b){
				if(a == b){
					return "son iguales";
				}
				
				switch(a > b) {
					case true:
					return "El mayor es: "+a;
					break;
					case false:
					return "El mayor es: "+b;
					break;
					}
			}
			//var resultado = funcion(a, b);
			//document.write(resultado);
			*/

			/*Ejercicio 3
			//Que se muestren todos los numeros entre dos numeros
			var a = parseInt(prompt("Dame un numero"));
			var b = parseInt(prompt("Dame otro numero"));
			var contador = 0;
			var arreglo_a = [];
			if(a<b){
				contador = a+1;

				while(contador<b){
				arreglo_a.push(contador);
				contador = contador + 1;
				
				
				}
			}else if(a>b){
				contador = b+1;

				while(a>contador){
				
				arreglo_a.push(contador);
				contador = contador + 1;
				
				}
			}else if(a == b){
				console.log("Son iguales");
			}
			console.log("Los numeros que estan entre: "+a+ " y "+b+ " son: "+arreglo_a);*/

			/*
			//Ejercicio 4: Mostrar todos los numeros impares entre 2 numeros introducidos por el usuario
			var a = parseInt(prompt("Dame un numero"));
			var b = parseInt(prompt("Dame otro numero"));
			var contador = 0;
			var arreglo_a = [];
			if(a<b){
				contador = a+1;

				while(contador<b){
					if(parImpar(contador) == "impar"){
						arreglo_a.push(contador);
					}
				
				contador = contador + 1;
				
				
				}
			}else if(a>b){
				contador = b+1;

				while(a>contador){
				
				if(parImpar(contador) == "impar"){
						arreglo_a.push(contador);
					}
				contador = contador + 1;
				
				}
			}else if(a == b){
				console.log("Son iguales");
			}

			function parImpar(numero) {
					  if(numero % 2 == 0) {
					    return "par";
					  }
					  else {
					    return "impar";
					  }
					}

			console.log("Los numeros impares que estan entre: "+a+ " y "+b+ " son: "+arreglo_a);*/