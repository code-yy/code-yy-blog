export const format = (dateTime: string): string => {
  const date = new Date(dateTime);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}.${month}.${day}`;
};
