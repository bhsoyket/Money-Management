import React from 'react';

export default function Input(props) {
  return (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} placeholder={props.placeholder}
        name={props.name} defaultValue={props.value} id={props.name} className="form-control"
        onChange={props.onchange} />
    </div>
  );
}
