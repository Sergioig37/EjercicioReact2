import React, { useState } from "react";

export const App = () => {
  const [listaPalabras, setListaPalabras] = useState([
    "Manzana",
    "Pomelo",
    "Caramelo",
    "Mostaza",
    "Parmesano",
    "Fortnite",
    "Pizza",
    "Fuengirola",
    "Camarero",
    "Fuente", 
    "Mar",
    "Perro",
    "Electricidad",
  ]);
  const [listaMostrar, setListaMostrar] = useState(listaPalabras);

  const filtrarPalabras = ({ target }) => {
    const inputValue = target.value.toLowerCase();

    if (inputValue !== "") {
      setListaMostrar(
      //El filter devuelve true o false,  si es verdadero la palabra se agrega a la lista de mostrar porque ha pasadi por el filtro
      //si es falso la palabra no se añade.
        listaPalabras.filter((palabra) => {
            if(palabra.toLowerCase().indexOf(inputValue.toLowerCase())===0){
              return true;
            }
             else {
              return false;
            }
         }  
      ));
    } else {
      setListaMostrar(listaPalabras);
    }
  };

  return (
    <>
      <label>Buscar: </label>
      <input type="text" onChange={filtrarPalabras} />
      <ul>
        {listaMostrar.map((palabra, index) => {
          return <li key={index}>{palabra}</li>;
        })}
      </ul>
    </>
  );
};
