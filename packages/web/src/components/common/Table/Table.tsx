import { theme } from '@styles';

import { T } from './components';
import * as S from './Table.styles';

import { Spin } from 'antd';

interface TableProps<T extends object> {
  columns: string[];
  data: T[];
  isLoading?: boolean;
}

const Table = <T extends object>({
  columns,
  data,
  isLoading = false
}: TableProps<T>) => {
  if (isLoading) {
    return <Spin size="large" style={{ color: theme.colors.primary }} />;
  }

  return (
    <S.TableWrapper>
      <T.Container>
        <T.Header columns={columns} />
        <T.Body data={data} />
      </T.Container>
    </S.TableWrapper>
  );
};

export { Table };
