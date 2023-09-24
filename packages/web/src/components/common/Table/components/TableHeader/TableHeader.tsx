import * as S from './TableHeader.styles';

interface TableHeaderProps {
  columns: string[];
}

const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <S.TableHeader>
      <S.TableRow>
        {columns.map((column) => (
          <S.TableHeaderCell key={column}>{column}</S.TableHeaderCell>
        ))}
      </S.TableRow>
    </S.TableHeader>
  );
};

export { TableHeader };
