import styled from 'styled-components';

export const TableContainer = styled.table`
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
  @media (max-width: 767px) {
    display: block;
    width: 100%;
  }
`;
