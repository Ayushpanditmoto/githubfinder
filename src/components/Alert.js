import React, { useContext } from 'react';
import { ImCross } from 'react-icons/im';
import styled from 'styled-components';
import AlertContext from '../context/alertContext';

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <AlertContain>
        <div className='alert'>
          {alert.type === 'error' && <ImCross />}

          <p>{alert.msg}</p>
        </div>
      </AlertContain>
    )
  );
}

export default Alert;

const AlertContain = styled.div`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 50px;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  .alert {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  p {
    margin: 0;
  }
  .cross {
    cursor: pointer;
  }
`;
