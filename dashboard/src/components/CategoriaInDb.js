import React from "react";
import { useState, useEffect } from "react"

function CategoriInDb() {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/producto/categoriasApi")
            .then((categorias) => {
                return categorias.json()
            })
            .then((categoriasApi) => {
                setCategorias(categoriasApi)
            })
    }, [])

    let nombreCategorias = categorias.map((categoria) => {
        return categoria.categoria
    })

    console.log(nombreCategorias)


    return(
        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        {
                            nombreCategorias.map((nombre) => {
                                return (
                                    <div class="col-lg-6 mb-4">
                                        <div class="card bg-info text-white shadow">
                                            <div class="card-body">
                                                {nombre} {" "} cantidad
                                            </div>

                                        </div>
                                    </div>
                                )

                            })
                        }
                        {/* <div class="col-lg-6 mb-4">
              <div class="card bg-info text-white shadow">
                <div class="card-body">
                  Category 01
                </div>
              </div>
            </div> */}

                        {/* <div class="col-lg-6 mb-4">
              <div class="card bg-info text-white shadow">
                <div class="card-body">
                  Category 02
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card bg-info text-white shadow">
                <div class="card-body">
                  Category 03
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card bg-info text-white shadow">
                <div class="card-body">
                  Category 04
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card bg-info text-white shadow">
                <div class="card-body">
                  Category 05
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="card bg-info text-white shadow">
                <div class="card-body">
                  Category 06
                </div>
              </div>
            </div> */}
                    </div>
                </div>
            </div>
        </div>


    );
}
export default CategoriInDb;