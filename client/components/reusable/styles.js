import styled from 'styled-components';

export const InputElement = styled.input`
    padding: 10px;
    border: 0;
    margin: 10px auto;
    width: 100%;
    text-aling: center;
    background: #f2f2f2;
    font: 12px 'Fira Sans', sans-serif;
    font-weight: black;
`;

export const ButtonElement = styled.button`
    width: 100%;
    padding: 10px;
    font-size: 12px;
    border: 0;
    font: 12px 'Fira Sans', sans-serif;
    margin: 10px 0;
    font-weight: 600
`;

export const MessageBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 266px);
  padding: 10px;
  background: #FA2445;
  z-index: 9999;
  color: #fff;
  font-weight: 600;
`;
