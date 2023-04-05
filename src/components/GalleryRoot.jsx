import { useEffect, useState } from 'react';
import ControlPanel from './ControlPanel';
import PicturesSet from './PicturesSet';
import { fetchNasaApi } from '../nasaAPI';

export default function GalleryRoot() {
  const endDate = new Date(); //heutiges Datum
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 39); //vor 40 Tagen von heutigem Datum
  // console.log(dateRange[0].toLocaleDateString('en-CA'));

  const [dateRange, setDateRange] = useState([startDate, endDate]);
  const [picsArray, setPicsArray] = useState([]);

  useEffect(() => {
    async function fetchApods() {
      try {
        const { data } = await fetchNasaApi('planetary/apod', {
          params: {
            start_date: dateRange[0].toLocaleDateString('en-CA'),
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
    </>
  );
}
