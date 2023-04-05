export function increaseDate(actualDate, difference) {
  const date = new Date(actualDate);
  date.setDate(date.getDate() + difference);
  return date;
}

export function areDatesEqual(firstDate, secondDate) {
  firstDate.setHours(0, 0, 0, 0); // Urhzeit rücksetzen, um nur Daten zu vergleichen
  secondDate.setHours(0, 0, 0, 0);
  return firstDate.getTime() === secondDate.getTime();
}

export function isFirstDateBiggerEqlSecond(firstDate, secondDate) {
  firstDate.setHours(0, 0, 0, 0); // Urhzeit rücksetzen, um nur Daten zu vergleichen
  secondDate.setHours(0, 0, 0, 0);
  return firstDate.getTime() >= secondDate.getTime();
}
