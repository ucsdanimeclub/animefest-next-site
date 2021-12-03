import { Container } from 'react-bootstrap'


export default function Rules() {
  return (
    <>
      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4 mb-0">Rules</h1>
      </Container>

      <Container fluid className="p-5 section">
        <h4 className="text-center title-text mb-5">By attending Animefest 2022, you agree to have read and will abide by
          our detailed rules:
        </h4>
        <ol className="mb-5">
          <li><p>Cal Animage Beta and UC San Diego reserves the right to remove anyone not in compliance of the rules to their discretion.</p></li>
          <li><p>All university policies and regulations apply to attendees of Animefest.</p></li>
          <li><p><u>All attendees are mandated to wear a mask.</u></p></li>
          <li><p>Attendees must respect common sense rules for public behavior, personal interaction, common courtesy, and respect for private property. Harassing or offensive behavior will not be tolerated. If your behavior becomes problematic,
            security will have to intervene to dispute the issue.</p></li>
          <li><p>Attendees are prohibited from directly handling the console setups. Any attendee seen tampering or otherwise damaging Animefest property are liable for repairs and/or replacements.
            For free play setups, if you would like to change the game, contact a volunteer or officer at the administrative table.</p></li>
          <li><p>Physical contact, photography, or recordings of other individuals is not allowed without their explicit permission.</p></li>
          <li><p>No weapons or props designed or made with the ability to cause death or serious bodily injury to any person or property is permitted. Misuse of a prop will result in that prop being deemed unsafe.</p></li>
          <li><p>Please don&apos;t hesitate to call campus security, volunteers, or officers of Cal Animage Beta if you see anything suspicious or disorderly conduct.</p></li>
        </ol>
        <p><u>COVID-19 Guidelines:</u> Festivalgoers are strongly advised to adhere to CDC guidelines which include:</p>
        <ol className="mb-5">
          <li><p>Getting a vaccination, or at the very least quarantine if coming in contact with an affected individual and getting tested.</p></li>
          <li><p>Staying home if an attendee feels any sickness or symptoms of COVID-19 before the festival.</p></li>
          <li><p>Maintaining 6 feet of social distancing whenever possible.</p></li>
          <li><p>Cover coughs and sneezes and wash hands.</p></li>
          <li><p>Enable contact tracing: On Android, contact tracing from Google can be enabled in your device&apos;s settings, or downloaded as an app for your state at the link <a href="https://support.google.com/android/answer/9888358?hl=en">here</a>. On iPhone, opt-in to Exposure Notifications in your device&apos;s settings.</p></li>
        </ol>
        <h4 className="text-left title-text mb-4">About Cal Animage Beta</h4>
        <p>Cal Animage Beta is the anime club at UC San Diego. We hold weekly meetings on Mondays, where we show anime or hold other fun events. We also have other socials on weekends such as karaoke, game nights, and potlucks. Membership is free and open to all!</p>
        <p>If you are interested in learning more about our club or events, please visit our website <a href="http://ucsd.moe/">ucsd.moe</a> for more information.</p>
      </Container>
    </>
  )
}