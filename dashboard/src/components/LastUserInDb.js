import React from "react";
import { useState, useEffect } from "react"
import ImagenProducto from "../assets/img/product_dummy.svg";

function LastUserInDb() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "http://localhost:3001/user/usuariosApi",
            );
            const json = await res.json();
            setData(json.users);
        };
        fetchData();
    }, [setData]);

    return (
        <div className="col-lg-6 mb-4 ">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ultimo Usuario Creado</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" height="300" width="300" align="left" src={ImagenProducto} alt="ImagenProducto" />
                    </div>
                    <ul>
                        {data.map(item => (
                            <li key={item.id}>
                                <p> {item.nombre} 555 {item.apellido}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default LastUserInDb;