import PictureTile from './PictureTile';

export default function PicturesSet({ picsArray }) {
  console.log(picsArray);
  return (
    <div className="pics-set">
      {picsArray.map((pic) => (
        <PictureTile url={pic.url} title={pic.title} key={pic.date} />
      ))}
    </div>
  );
}