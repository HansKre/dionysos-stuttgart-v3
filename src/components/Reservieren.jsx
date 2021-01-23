const Reservieren = () => {

  return (
    <>
      <h1>Reservieren</h1>
      <p>Gerne können Sie für Ihren nächsten Besuch hier bequem online reservieren.</p>
      {/*         <a
          href="https://reservation.dish.co/widget/hydra-d087ab33-25fb-46e6-b5b5-c978b4e81810?
                foregroundColor=&amp;backgroundColor=$whitesmoke&amp;linkColor=&amp;errorColor=$crimson&amp;primaryButtonForegroundColor=&amp;primaryButtonBackgroundColor=$dodgerblue
                &amp;secondaryButtonForegroundColor=&amp;secondaryButtonBackgroundColor="
          role="button">
          <button type="button">Reservieren &raquo;</button>
        </a> */}
      <iframe className='reservieren'
        title='impressum'
        src="https://reservation.dish.co/widget/hydra-d087ab33-25fb-46e6-b5b5-c978b4e81810?
                foregroundColor=&amp;backgroundColor=$whitesmoke&amp;linkColor=&amp;errorColor=$crimson&amp;primaryButtonForegroundColor=&amp;primaryButtonBackgroundColor=$dodgerblue
                &amp;secondaryButtonForegroundColor=&amp;secondaryButtonBackgroundColor="
        allowFullScreen></iframe>
    </>
  )
}

export default Reservieren;