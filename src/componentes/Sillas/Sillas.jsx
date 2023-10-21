import React from 'react';
import { useParams } from 'react-router-dom';
//useParams es un hook que nos permite acceder a los parámetros de las URL y almacenar ese dato. 

//ejemplo: https://www.cellshop.com/silla/10
//Yo puedo tomar ese 10 y almacenarlo. 

const Sillas = () => {
    const {id} = useParams();

    console.log(id);
  return (
    <div>
        <h2>Sección Sillas Gamer </h2>
        <p>ID Producto: {id} </p>
    </div>
  )
}

export default Sillas