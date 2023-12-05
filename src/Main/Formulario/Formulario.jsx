import React,{ useContext,useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from '../../context/userContext'

const Formulario = ({setMessage}) => {

  const { updateEmail } = useContext(UserContext);

  // const [userState,setUserState] = useState({})

  const handleSubmit = (e) =>{
    e.preventDefault()

    const name = e.target.name.value;
    const email = e.target.email.value;
    const url = e.target.url.value;
    const age = e.target.age.value;

    const userObj = {name,email,url,age}

    // setUserState(userObj)

    setMessage(userObj)

    updateEmail(userObj.email)
    
  }

  return (
    <>
    <form onSubmit={handleSubmit} >
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" id="name" />
      <br />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
      <br />
      <label htmlFor="url">URL imagen</label>
      <input type="text" name="url" id="url" />
      <br />
      <label htmlFor="age">Edad</label>
      <input type="text" name="age" id="age" />
      <br />
      <button>Enviar</button>
    </form>
    </>
  )
};

export default Formulario;
