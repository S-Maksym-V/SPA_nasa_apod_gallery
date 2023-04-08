import { useEffect, useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

import { fetchNasaApi } from '../nasaAPI';
import { increaseDate } from '../helpers';

import HeadPanel from './HeadPanel';
import PicturesSet from './PicturesSet';
import FooterNavigation from './FooterNavigation';

export default function GallerySite() {
  const dateRangeSize = 20; //Anzahl der angezeigten Bilder
  const endDate = new Date(); //heutiges Datum
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
            thumbs: true,
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

  // console.log(picsArray);

  const sortPicsArray = picsArray.sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <>
      <h1>Gallery of NASA APOD (Astronomy Picture of the Day)</h1>
      <HeadPanel />
      {picsArray.length ? (
        <PicturesSet picsArray={sortPicsArray} />
      ) : (
        <CirclesWithBar />
      )}
      <FooterNavigation
        dateRange={dateRange}
        setDateRange={setDateRange}
        rangeSize={dateRangeSize}
      />
    </>
  );
}
