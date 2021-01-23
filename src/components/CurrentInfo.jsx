import { data } from '../data/currentInfo';

const CurrentInfo = () => {

  return (
    <>
      <h1>Aktuelle Informatioinen</h1>
      <p>Hier bekommen Sie aktuelle Informationen</p>
      {
        data && data.map((entry, index) => {
          return (
            <div key={index + 'jumbotron'}>
              <h3 key={index}
                dangerouslySetInnerHTML={{ __html: entry.header }} />
              <p key={(index + 1) * 100}
                dangerouslySetInnerHTML={{ __html: entry.message }} />
            </div>
          )
        })
      }
    </>
  )
}

export default CurrentInfo;