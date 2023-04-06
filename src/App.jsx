import React from 'react';
import ReactDOM from 'react-dom/client';
import GalleryRoot from './components/GalleryRoot';
import { Route } from 'wouter';
import ApodDetails from './components/ApodDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Route path="/" component={GalleryRoot} />
    <Route path="/apod/:date" component={ApodDetails} />
  </React.StrictMode>
);
