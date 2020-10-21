export const getDuration = (
  startMonth?: number,
  startYear?: number,
  endMonth?: number,
  endYear?: number,
): string => {
  let start = 0;
  let end = 0;
  const today = new Date();
  if (startYear || startMonth) {
    start += startYear ? (startYear - 1) * 12 : (today.getFullYear() - 1) * 12;
    start += startMonth ? startMonth - 1 : 11;
  }
  if (!start) start = today.getFullYear() * 12;
  end += endYear ? (endYear - 1) * 12 : (today.getFullYear() - 1) * 12;
  end += endMonth ? endMonth : today.getMonth();
  const durationInMonths = end - start;
  const years = Math.floor(durationInMonths / 12);
  const months = durationInMonths % 12;
  const yearPlural = years > 1 ? 'e' : '';
  const monthPlural = months > 1 ? 'e' : '';
  let durationString = years > 0 ? years + ' Jahr' + yearPlural + ' und ' : '';
  durationString += months > 0 ? months + ' Monat' + monthPlural : '';
  return durationString;
};
