import PictureTile from './PictureTile';

export default function PicturesSet({ picsArray }) {
  return (
    <div className="pics-set">
      {picsArray.map((pic) => (
        <PictureTile {...pic} key={pic.date} />
      ))}
    </div>
  );
}
