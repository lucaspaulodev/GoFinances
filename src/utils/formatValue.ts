const formatDate = (date: string): string => {
  const parsedDate = date.slice(0, 10).split('-');
  const [year, month, day] = parsedDate;
  const finalDate = [day, month, year].join('/');
  return finalDate;
};

export default formatDate;
