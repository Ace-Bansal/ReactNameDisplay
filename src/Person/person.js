import React from 'react';
import "./person.css";

const Person = (props) => {
  return (
    <div className="people">
      <h1 onClick={props.clicked}>I am {props.name} and I am {props.age}</h1>
      <input type="text" onChange={props.nameChanged} value={props.name} />
      <input type="number" onChange={props.ageChanged} value={props.age} />
    </div>
  )
}

export default Person;
