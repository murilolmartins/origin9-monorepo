import styled from 'styled-components';

export const TableHeader = styled.thead`
  @media (max-width: 767px) {
    display: block;
    float: left;
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

export const TableHeaderCell = styled.th`
  text-align: center;
  padding: 8px;
  color: #ffffff;
  background: #0d6efd;

  :nth-child(odd) {
    color: #ffffff;
    background: #324960;
  }

  @media (max-width: 767px) {
    display: block;
    padding: 20px 0.625em 0.625em 0.625em;
    height: 60px;
    vertical-align: middle;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    width: 120px;
    font-size: 13px;
    text-overflow: ellipsis;
    text-align: left;
    border-bottom: 1px solid #f7f7f9;

    :last-child {
      border-bottom: none;
    }
  }
`;
