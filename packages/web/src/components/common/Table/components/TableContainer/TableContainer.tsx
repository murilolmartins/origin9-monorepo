import * as S from './TableContainer.styles';

interface TableContainerProps {
  children: React.ReactNode;
}

const TableContainer = ({ children }: TableContainerProps) => {
  return <S.TableContainer>{children}</S.TableContainer>;
};

export { TableContainer };
