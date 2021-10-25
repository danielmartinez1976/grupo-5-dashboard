import React from "react";
import { useState, useEffect} from "react"

function ContentRow(){

	const [productos, setProductos] = useState([])
	useEffect(() => {
		fetch("http://localhost:3001/producto/productosApi") // endPoint Api me trae productos
			.then((respuestaApi) => {
				return respuestaApi.json() // la respuesta que viene en el primer then es un json la transformo en un objeto con el .josn()
			})
			.then((productosApi) => {   // productosApi ya es la respuesta de la api pero convertida a objeto el nombre lo pongo yo
				setProductos(productosApi) // actualizo el estado de productos pasandole el resultado a la variable productos
			})
	}, []) // estos dos corchetes son para que no se produzca un bucle infinito
    return(

        <div class="container-fluid">

					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

                    <div className="row">

						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Productos en Nuestra Base</div>
										<div className="h5 mb-0 font-weight-bold text-gray-800">{productos.count}</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Costo Total de Productos en Base</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">$546.456</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Cantidad de Usuarios en Base
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">38</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-user-check fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
             </div>


    );
}
export default ContentRow;

