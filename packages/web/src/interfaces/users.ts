import type { UserStatus } from '@enums';

export interface IUser {
  id: number;
  name: string;
  taxId: string;
  address: string;
  status: UserStatus;
  birthDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetUsersApiResponse {
  status: number;
  body: IUser[];
  errors: null;
}
