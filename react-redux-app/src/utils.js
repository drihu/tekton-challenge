export const API_ROOT = 'http://localhost:3000';

export const MONTHS = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
};

export const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 > 10
      ? date.getMonth() + 1
      : '0' + (date.getMonth() + 1);
  const day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();

  return `${year}-${month}-${day}`;
};
