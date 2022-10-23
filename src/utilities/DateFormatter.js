export const calculateTime = (beginDate, endDate) => {
  const monthDifference = getMonthDifference(new Date(beginDate),new Date(endDate));
  if(monthDifference === 12){
    return "1 año";
  }
  if(monthDifference >= 13){
    const years = Math.floor(monthDifference/12);
    return `${years} ${years > 1 ? 'años': 'año'} y ${monthDifference%12} meses`;
  }

  return `${monthDifference} meses`;
};

function getMonthDifference(startDate, endDate) {

  return (
    (endDate.getMonth()) -
    (startDate.getMonth()) +
    12 * (endDate.getFullYear() - startDate.getFullYear()) + 1
  );
}