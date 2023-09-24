export function isValidDate(dateString: any) {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}
