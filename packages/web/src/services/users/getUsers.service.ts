import type { GetUsersApiResponse } from '@interfaces';

import { connectionAPIGet } from '@utils';

export async function getUsers() {
  const { body } = await connectionAPIGet<GetUsersApiResponse>('/users');

  return body;
}
