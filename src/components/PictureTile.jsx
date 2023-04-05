export default function PictureTile({ url, title }) {
  return (
    <article className="tile">
      <img src={url} alt={title} className="tile__img" />
    </article>
  );
}
