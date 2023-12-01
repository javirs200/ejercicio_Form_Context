import React from "react";
import Card from './Card/Card'

const Formulario = () => {
  return (
    <>
    <form>
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="url">URL imagen</label>
      <input type="text" name="url" id="url" />
      <label htmlFor="age">Edad</label>
      <input type="text" name="age" id="age" />
      <button>Enviar</button>
    </form>
    <Card/>
    </>
  )
};

export default Formulario;
