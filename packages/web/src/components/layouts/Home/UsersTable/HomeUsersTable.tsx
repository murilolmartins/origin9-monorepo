import { PageSection } from '@components-common';

import { HomeUsersTableHeader } from './components/HomeUsersTableHeader/HomeUsersTableHeader';
import * as S from './HomeUsersTable.styles';
import { useUsersTableData } from './hooks/useUsersTableData';

import { Table } from 'components/common/Table/Table';

const HomeUsersTable = () => {
  const { tableData, columns, isLoading } = useUsersTableData();

  return (
    <PageSection backgroudColor="#F7FAFD" height="100%">
      <S.HomeUsersTableContainer>
        <HomeUsersTableHeader>
          <S.HomeUsersTableTitle>Tabela de usuários</S.HomeUsersTableTitle>
        </HomeUsersTableHeader>
        <Table columns={columns} data={tableData} isLoading={isLoading} />
      </S.HomeUsersTableContainer>
    </PageSection>
  );
};

export default HomeUsersTable;
