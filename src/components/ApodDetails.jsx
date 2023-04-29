import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { CirclesWithBar } from 'react-loader-spinner';

import { fetchNasaApi } from '../nasaAPI';

export default function ApodDetails({ params }) {
  const [apodData, setItemDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const { date: dateParam } = params;

  useEffect(() => {
    async function fetchApods() {
      try {
        const { data } = await fetchNasaApi('planetary/apod', {
          params: {
            date: dateParam,
            thumbs: true,
          },
        });
        setItemDetails(data);
      } catch (error) {
        console.log(error);
        setErrorMessage(error.data.status_message);
      }
    }
    fetchApods();
  }, []);

  if (errorMessage) {
    return <strong>{errorMessage}</strong>;
  }

  if (!apodData) {
    return (
      <div className="loading loading__apod-details">
        <CirclesWithBar />
      </div>
    );
  }
  const {
    copyright,
    date,
    explanation,
    hdurl,
    media_type,
    title,
    url,
    thumbnail_url,
  } = apodData;

  return (
    <article className="apod-page">
      <Link to="/">Back to gallery</Link>
      <h1>{title}</h1>
      <h2 className="h5">{date}</h2>
      <p>{explanation}</p>
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          link to {thumbnail_url ? 'video' : 'normal quality'}
        </a>
      </div>
      {!thumbnail_url && (
        <div>
          <a href={hdurl} target="_blank" rel="noreferrer">
            link to HD-quality
          </a>
        </div>
      )}

      <img src={thumbnail_url ? thumbnail_url : hdurl} alt={title} />
      {copyright && (
        <div className="apod-page__copyright">Copyright: {copyright}</div>
      )}
    </article>
  );
}
