import React from 'react';

const Diagram = props => {
  let source = '../../img/step' + props.currentDiagram + ".png";
  return (
    <img src={source} alt="Possibly Dead"/>
  )
};

export default Diagram;