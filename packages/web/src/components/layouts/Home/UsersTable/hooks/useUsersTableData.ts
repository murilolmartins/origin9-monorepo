/* eslint-disable react-hooks/exhaustive-deps */

import { useMemo } from 'react';

import { useFetchUsers } from '@hooks';

import { formatTaxId, formatUserDate, formatUserStatus } from '@utils';

export const useUsersTableData = () => {
  const { data: users, isLoading } = useFetchUsers();

  const columns = ['Nome', 'Data de nascimento', 'CPF', 'Endereço', 'Status'];

  const tableData = useMemo(() => {
    if (!users) return [];

    return users.map((user) => ({
      name: user.name,
      birthDate: formatUserDate(user.birthDate),
      taxId: formatTaxId(user.taxId),
      address: user.address,
      status: formatUserStatus(user.status)
    }));
  }, [users]);

  return {
    tableData,
    isLoading,
    columns
  };
};
