import { useLocation } from 'wouter';

export default function PictureTile({
  url,
  title,
  date,
  thumbnail_url,
  media_type,
}) {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation();

  const linkTarget = `/apod/${date}`;
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <article className="tile" onClick={() => setLocation(linkTarget)}>
      <div>
        {date + ' '}
        {media_type === 'video' ? <strong>Video</strong> : ''}
      </div>
      <img
        src={thumbnail_url ? thumbnail_url : url}
        alt={title}
        className="tile__img"
      />
    </article>
  );
}
