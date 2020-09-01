import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 320px;
    background: #fff;
    padding: 20px;
    position: relative;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: calc(100% - 40px);
  height: auto;
`;

export const UserSearch = styled.div`
  margin-top: 10px;
  width: 100%;
  background: #f3f3f3;
  min-height: 240px;
`;

export const UserLabel = styled.li`
  width: 100%;
  padding: 10px;
  list-style: none;
`;
