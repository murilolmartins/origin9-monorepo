import type { IUser } from '@interfaces';

import { getUsers } from '@services';
import { useQuery } from '@tanstack/react-query';

export function useFetchUsers() {
  return useQuery<IUser[]>(['users'], getUsers, {
    initialData: []
  });
}
