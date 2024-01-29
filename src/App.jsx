import React, { useState } from "react";

export const App = () => {
  const listaPalabras = [
    "Manzana",
    "Pomelo",
    "Caramelo",
    "Mostaza",
    "Parmesano",
  ];
  const [listaMostrar, setListaMostrar] = useState(listaPalabras);

  const filtrarPalabras = ({ target }) => {
    const inputValue = target.value.toLowerCase();

    if (inputValue !== "") {
      setListaMostrar(
        listaPalabras.filter((palabra) =>{
          for(let i=0;i<=inputValue.length;i++){

            if(palabra[i].toLowerCase()===inputValue[i]){
              if(i==inputValue.length-1){
                return true;
              }
              
            }
            else{
              return false;
            }
          }
    })
      );
    } else {
      setListaMostrar(listaPalabras);
    }
  };



  return (
    <>
      <label>Buscar: </label>
      <input type="text" onChange={filtrarPalabras}/>
      <ul>
        {listaMostrar.map((palabra, index) => {
          return <li key={index}>{palabra}</li>;
        })}
      </ul>
    </>
  );
};
