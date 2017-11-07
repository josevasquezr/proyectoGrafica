window.onload = function(){
	var categorias = new Array("Ropa", "Alimentos");
	var productos = new Array(
							new Array("Camisas", "Pantalones", "Calsonetas"), 
							new Array("Frutas", "Verduras", "Condimentos")
							);
	var marcas = new Array(
						new Array(
							new Array("Pacer", "Demo"), 
							new Array("Pepe", "Massimo"), 
							new Array("Nike", "Adidas")),
						new Array(
							new Array("Manzana", "Pera"), 
							new Array("Pataste", "Papa"), 
							new Array("Especias", "Canela"))
						);

	var ventasMensuales = new Array(
							new Array(
								new Array(
									new Array(20, 31, 42, 25), 
									new Array(12, 10, 5, 15)
								), 
								new Array(
									new Array(50, 60, 25, 33), 
									new Array(3, 16, 8, 7)
								), 
								new Array(
									new Array(40, 76, 22, 15), 
									new Array(41, 28, 24, 11)
								)
							),
							new Array(
								new Array(
									new Array(2, 6, 8, 1), 
									new Array(12, 22, 2, 6)
								), 
								new Array(
									new Array(4, 7, 16, 45), 
									new Array(10, 40, 25, 2)
								), 
								new Array(
									new Array(18, 9, 4, 8), 
									new Array(19, 7, 1, 4)
								)
							)
						);
	// funciones de llenado
	function llenarCategorias(){
		var select = document.getElementsByClassName("categorias")[0];
		var newOption;
		for(categoria in categorias){
			newOption = document.createElement("option");
			newOption.innerHTML = categorias[categoria];
			select.appendChild(newOption);
		}
	}

	function llenarProductos(indiceCategoria){
		var select = document.getElementsByClassName("productos")[0];
		var newOption;
		for(producto in productos[indiceCategoria]){
			newOption = document.createElement("option");
			newOption.innerHTML = productos[indiceCategoria][producto];
			select.appendChild(newOption);
		}	
	}

	function llenarMarcas(indiceCategoria, indiceProducto){
		var select = document.getElementsByClassName("marcas")[0];
		var newOption;
		for(marca in marcas[indiceCategoria][indiceProducto]){
			newOption = document.createElement("option");
			newOption.innerHTML = marcas[indiceCategoria][indiceProducto][marca];
			select.appendChild(newOption);
		}	
	}

	function ventas(indiceCategoria, indiceProducto, indiceMarca){
		return ventasMensuales[indiceCategoria][indiceProducto][indiceMarca];
	}
	//----------------------------------------------------------------------

	// eventos y funciones para onchange	
	function changeProductos(){
		var indiceCategoria;
		var indiceProducto;
		for (var i = 0; i < categorias.length; i++) {
			if(categorias[i] == document.getElementsByClassName("categorias")[0].value){
				indiceCategoria = i;
				break;
			}
		}

		for (var i = 0; i < productos[indiceCategoria].length; i++) {
			if(productos[indiceCategoria][i] == document.getElementsByClassName("productos")[0].value){
				indiceProducto = i;
				break;
			}
		}		

		var selectMarcas = document.getElementsByClassName("marcas")[0];
		selectMarcas.innerHTML = "";
		llenarMarcas(indiceCategoria, indiceProducto);

		ventasValoresGrafica();
	}

	var selectProductos = document.getElementsByClassName("productos")[0];
	selectProductos.addEventListener("change", changeProductos);



	function changeCategorias(){
		var indiceCategoria;
		for (var i = 0; i < categorias.length; i++) {
			if(categorias[i] == this.value){
				indiceCategoria = i;
				break;
			}
		}

		var selectProductos = document.getElementsByClassName("productos")[0];
		selectProductos.innerHTML = "";
		llenarProductos(indiceCategoria);

		changeProductos();

	}

	var selectCategoria = document.getElementsByClassName("categorias")[0];
	selectCategoria.addEventListener("change", changeCategorias);


	function ventasValoresGrafica(){
		var indiceCategoria;
		var indiceProducto;
		var indiceMarca;

		for (var i = 0; i < categorias.length; i++) {
			if(categorias[i] == document.getElementsByClassName("categorias")[0].value){
				indiceCategoria = i;
				break;
			}
		}

		for (var i = 0; i < productos[indiceCategoria].length; i++) {
			if(productos[indiceCategoria][i] == document.getElementsByClassName("productos")[0].value){
				indiceProducto = i;
				break;
			}
		}

		for (var i = 0; i < marcas[indiceCategoria][indiceProducto].length; i++) {
			if(marcas[indiceCategoria][indiceProducto][i] == document.getElementsByClassName("marcas")[0].value){
				indiceMarca = i;
				break;
			}
		}

		var valoresVentas = ventas(indiceCategoria, indiceProducto, indiceMarca);
		alert(valoresVentas);
	}

	var selectMarca = document.getElementsByClassName("marcas")[0];
	selectMarca.addEventListener("change", ventasValoresGrafica);

	//------------------------------------------------------------------------



	llenarCategorias();
	llenarProductos(0);
	llenarMarcas(0, 0);
}