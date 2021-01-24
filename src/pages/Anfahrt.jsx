const Anfahrt = () => {

  return (
    <>
      <h1>Anfahrt</h1>
      <p>So finden Sie zu uns:<br />Haldenrainstr. 126<br />Stuttgart-Rot</p>
      <a
        href="https://www.google.de/maps/place/Haldenrainstra%C3%9Fe+126,+70437+Stuttgart/@48.8318328,9.1907691,17z/data=!3m1!4b1!4m2!3m1!1s0x4799daa8d60c8db3:0x6134c1447a493bd3"
        role="button" target="_blank" rel="noopener noreferrer">
        <button type="button">Route über Google Maps berechnen &raquo;</button>
      </a>
      {/* <!--Google map-->
      <!-- https://mdbootstrap.com/plugins/jquery/iframe/ -->
      <!-- https://www.embedgooglemap.net/ --> */}
      <iframe className='anfahrt'
        title='anfahrtGoogleMaps'
        src="https://maps.google.com/maps?q=Haldenrainstr.%20126%20Stuttgart&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        allowFullScreen
        crossOrigin="anonymous">
      </iframe>
    </>
  )
}

export default Anfahrt;