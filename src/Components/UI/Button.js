import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  console.log("hey btn");

  const Button = styled.button`
    padding: 1rem 3rem;
    font-size: ${props.fontSize || '3rem'} ;
    border: 0.1rem solid ${props.borderColor || 'yellow'};
    color: ${props.color ||'yellow'};
    background-color: ${props.backgroundColor || '#1c7964'};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${ props.hoverBgc ||'yellow'};
      border: 0.1rem solid ${props.hoverBorderColor || '#1c7964'};
      color: ${ props.hoverColor ||'#1c7964'};
    }
  `;

  return <Button type={props.type} onClick={props.onClick}>{props.children}</Button>;
}
