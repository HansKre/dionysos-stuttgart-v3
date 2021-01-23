import { data } from '../data/openingTimes';

const OpeningTimes = () => {

  return (
    <>
      <h1>Unsere Öffnungszeiten</h1>
      <p>Hier finden Sie unsere Öffnungszeiten</p>
      {
        data &&
        <p dangerouslySetInnerHTML={{ __html: data.oeffnungszeiten }} />
      }
    </>
  )
}

export default OpeningTimes;