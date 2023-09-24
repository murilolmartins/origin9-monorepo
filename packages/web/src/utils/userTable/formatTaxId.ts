export const formatTaxId = (taxId: string) => {
  if (taxId.length !== 11) {
    return 'Cpf inválido';
  }
  return taxId.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1-$2-$3-$4');
};
