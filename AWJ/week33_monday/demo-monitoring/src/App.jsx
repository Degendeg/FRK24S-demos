import './App.css'
import * as Sentry from "@sentry/react"

/*
  Lathund - Sentry Setup
  1. Gå till http://sentry.io/ och tryck på "TRY SENTRY FOR FREE"
  2. Välj inloggningsmetod, jag körde GitHub
  3. Väl inne - skapa ett nytt projekt & konfigurera default
  4. Följ guiden, lägg till paketet med npm install @sentry/react --save
  5. Därefter lägg till init (se koden nedan 👇 (kopiera INTE nedan, du behöver en egen dsn))
  6. Skapa medvetet ett fel som vanligtvis hamnar i klientloggen (console.log())
  7. Kolla så Sentry monitorerar detta. Profit!
*/
Sentry.init({
  dsn: "https://a6deafab205a3c6623970583d72bd4e2@o4507265568735232.ingest.de.sentry.io/4509327028781136",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
})

const methodDoesNotExist = () => {
  console.error('This should be on Sentry')
}

function App() {
  return (
    <>
      <button onClick={() => methodDoesNotExist()}>Break me!</button>
    </>
  )
}

export default App
