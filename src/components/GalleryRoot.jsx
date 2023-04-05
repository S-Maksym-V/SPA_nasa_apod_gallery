import { useEffect, useState } from 'react';

import { fetchNasaApi } from '../nasaAPI';
import { increaseDate } from '../helpers';

import ControlPanel from './ControlPanel';
import PicturesSet from './PicturesSet';
import FooterNavigation from './FooterNavigation';

export default function GalleryRoot() {
  const dateRangeSize = 30; //Anzahl der angezeigten Bilder
  const endDate = new Date(/* '2023-04-05' */); //heutiges Datum
  const startDate = increaseDate(endDate, -dateRangeSize + 1); //vor dateRangeSize-Tagen von heutigem Datum

  const [dateRange, setDateRange] = useState([startDate, endDate]);
  const [picsArray, setPicsArray] = useState([]);

  useEffect(() => {
    async function fetchApods() {
      try {
        const { data } = await fetchNasaApi('planetary/apod', {
          params: {
            start_date: dateRange[0].toLocaleDateString('en-CA'), //str format: YYYY-MM-DD
            end_date: dateRange[1].toLocaleDateString('en-CA'),
          },
        });
        setPicsArray(data);
      } catch (error) {
        console.log(error);
        setPicsArray([]);
      }
    }
    fetchApods();
  }, [dateRange]);

  return (
    <>
      <h1>Gallery of NASA APOD (Astronomy Picture of the Day)</h1>
      <ControlPanel />
      <PicturesSet picsArray={picsArray} />
      <FooterNavigation
        dateRange={dateRange}
        setDateRange={setDateRange}
        rangeSize={dateRangeSize}
      />
    </>
  );
}
