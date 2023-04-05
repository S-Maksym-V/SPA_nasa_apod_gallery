import {
  increaseDate,
  areDatesEqual,
  isFirstDateBiggerEqlSecond,
} from '../helpers';

export default function FooterNavigation({
  dateRange,
  setDateRange,
  rangeSize,
}) {
  const startDateStr = dateRange[0].toLocaleDateString('de-DE');
  const endDateStr = dateRange[1].toLocaleDateString('de-DE');

  const isNewEndDateBiggerEqlToToday = isFirstDateBiggerEqlSecond(
    increaseDate(dateRange[1], rangeSize),
    new Date()
  );

  return (
    <footer>
      <div>
        <button
          disabled={areDatesEqual(dateRange[1], new Date())}
          onClick={() =>
            setDateRange([
              //Bedingung für start-date
              isNewEndDateBiggerEqlToToday
                ? dateRange[0] //lassen letztes start-date
                : increaseDate(dateRange[1], 1), //ändern start-date
              //Bedingung für end-date
              isNewEndDateBiggerEqlToToday
                ? new Date() //end-date auf heute setzen
                : increaseDate(dateRange[1], rangeSize), //ändern end-date
            ])
          }
        >{`<< Prev ${rangeSize} Fotos`}</button>
        <span>{`Current range: ${endDateStr} - ${startDateStr}`}</span>
        <button
          onClick={() =>
            setDateRange([
              increaseDate(dateRange[0], -rangeSize),
              increaseDate(dateRange[0], -1),
            ])
          }
        >
          {`Next ${rangeSize} Fotos >>`}
        </button>
      </div>
    </footer>
  );
}
