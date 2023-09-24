import { UserStatus } from '@enums';

export const formatUserStatus = (status: UserStatus) => {
  switch (status) {
    case UserStatus.ACTIVE:
      return 'Ativo';
    case UserStatus.INACTIVE:
      return 'Inativo';
    default:
      return 'Desconhecido';
  }
};
