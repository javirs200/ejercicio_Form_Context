import React from "react";

const Card = ({message}) => {

  console.log('render card message from Form : ',message);

  return (<>
      <div>
        <h2>{message.name}</h2>
        <p>{message.email}</p>
        <p>{message.age}</p>
        <img src={message.url} alt="" srcset="" />
      </div>
  </>);
};

export default Card;
