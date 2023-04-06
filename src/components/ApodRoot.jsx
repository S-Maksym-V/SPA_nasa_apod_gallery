import GallerySite from './GallerySite';
import { Route } from 'wouter';
import ApodDetails from './ApodDetails';

export default function ApodRoot() {
  return (
    <>
      <Route path="/" component={GallerySite} />
      <Route path="/apod/:date" component={ApodDetails} />
    </>
  );
}
