import React from 'react';
import './BoxComponent.scss';


const BoxComponent = (props) => {
  return (
    <div className="box">
      <div className="box__inner">
        <p>{props.description}</p>
          <span className="number--big">
            {props.number}
          </span>
      </div>
    </div>
  );
}

export default BoxComponent;
