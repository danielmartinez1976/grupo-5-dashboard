import React, { useEffect, useState } from "react";


const Usuarios = () =>{

    const [equipo, setEquipo] = React.useState([])

    React.useEffect(()=>{
        console.log("useEffect")
        obtengoDatosApi()
    }, [])

    const obtengoDatosApi = async()=>{
        const data= await fetch ("http://localhost:3000/user/usuariosAPI")
        const usuarios= await data.json()
       console.log(usuarios)
        setEquipo(usuarios)
    }
    return (
        <div className= "row">
            <div class="col-lg-6 mb-4">
            <h1>Usuarios</h1>
            <ul className="card-header py-3">
                {
                    equipo.map(e=>(
                        <li key= {e.id}>{e.nombre} - {e.email}</li> 
                    ))
                }
            </ul>
            </div>
        </div>
    )
}
export default Usuarios