import styled from 'styled-components';

export const TopView = styled.div`
    height: 60px;
    padding: 0 30px;
    background: #3D59F2;
    font-size: 11px;
    color: #fff;
    display: flex;
    align-items: center;
`;

export const Board = styled.div`
    height: calc(100% - 60px);
    display: flex;
    background: #3f3f3f;
`;

export const ViewContainer = styled.div`
    margin: 10px;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 91.4vh;
  display: flex;
  overflow: hidden;
  position: relative;
`;
