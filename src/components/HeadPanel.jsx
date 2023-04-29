import { useToggle } from '../hooks/useToggle';

export default function HeadPanel() {
  const [toggleAbout, toggle] = useToggle(true);
  console.log(toggleAbout);
  return (
    <>
      <div className="read-about">
        <button onClick={() => toggle()}>
          {toggleAbout ? 'hide' : 'read'} About
        </button>
      </div>
      {toggleAbout && (
        <p className="read-about__page">
          Hi! Welcome to my gallery page. It shows Astronomy Pictures Of the Day
          (APODs) from <a href="https://api.nasa.gov/">NASA Open APIs</a>. Each
          photo is interactive. So you can click/touch on it to see details &
          the photo in a larger size. <br />
          The photos are sorted in descending order from today in the past till
          16.06.1995. <br />
          On some days NASA publishes video instead of photo. You can see it by
          using link in details.
          <br />
          Good luck. You are awesome!
        </p>
      )}
    </>
  );
}
