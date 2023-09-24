import styled from 'styled-components';

export const HomeUsersTableContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
`;

export const HomeUsersTableTitle = styled.h3`
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.xxhuge};
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  height: 500px;
  width: 100%;
`;
