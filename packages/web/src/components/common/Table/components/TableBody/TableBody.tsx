import * as S from './TableBody.styles';

interface TableBodyProps<T> {
  data: T[];
}

const TableBody = <T extends object>({ data }: TableBodyProps<T>) => {
  return (
    <S.TableBody>
      {data.map((item, index) => (
        <S.TableRow key={index}>
          {Object.values(item).map((value) => (
            <S.TableCell key={value}>{value}</S.TableCell>
          ))}
        </S.TableRow>
      ))}
    </S.TableBody>
  );
};

export { TableBody };
