import React from 'react';
import styled from 'styled-components';

const ButtonComponents = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  color: #fff;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  padding: 20px 30px;
  cursor: pointer;
  perspective: 30rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.308);

&::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 10px;
  background: linear-gradient(
    320deg,
    rgba(0, 140, 255, 0.678),
    rgba(0, 255, 0, 0.308)
  );
  z-index: 1;
  transition: background 3s;
}

&:hover::before {
  animation: rotate 1s;
  transition: all 0.5s;
}

& img {
width: 40px;
margin-left: 10px;
}

@keyframes rotate {
  0% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}
`;

const ButtonComponent = ({event, children}) => {
  return (
    <ButtonComponents onClick={event}>
      {children}
    </ButtonComponents>
  );
};

export default ButtonComponent;