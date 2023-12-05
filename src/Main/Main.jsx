import React,{useState,useContext} from "react";
import Formulario from './Formulario/Formulario'
import Card from "./Card";

const Main = () => {

  // canal de comunicacion sibling-sibling
  const [message,setMessage] = useState(null) // {} 

  return (
    <>
      <Formulario setMessage={setMessage} />
      {message ? <Card message={message}/> : null}
    </>
  )
};

export default Main;
