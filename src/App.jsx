import React from 'react';
import ReactDOM from 'react-dom/client';
import ControlPanel from './components/ControlPanel';
import PicturesGallery from './components/PicturesGallery';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Gallery of NASA APOD (Astronomy Picture of the Day)</h1>
    <ControlPanel />
    <PicturesGallery />
  </React.StrictMode>
);
