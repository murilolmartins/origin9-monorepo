import styled from 'styled-components';

export const TableBody = styled.tbody`
  @media (max-width: 767px) {
    display: block;
    width: auto;
    position: relative;
    overflow-x: auto;
  }
`;

export const TableRow = styled.tr`
  :nth-child(even) {
    background: #f8f8f8;
  }
  @media (max-width: 767px) {
    display: table-cell;

    :nth-child(even) {
      background: none;
    }

    r:nth-child(even) {
      background: transparent;
    }
  }
`;

export const TableCell = styled.td`
  text-align: center;
  padding: 8px;
  border-right: 1px solid #f8f8f8;
  font-size: 12px;
  @media (max-width: 767px) {
    padding: 20px 0.625em 0.625em 0.625em;
    height: 60px;
    vertical-align: middle;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    width: 120px;
    font-size: 13px;
    text-overflow: ellipsis;
    display: block;
    text-align: center;

    :nth-child(odd) {
      background: #f8f8f8;
      border-right: 1px solid #e6e4e4;
    }

    :nth-child(even) {
      border-right: 1px solid #e6e4e4;
    }
  }
`;
