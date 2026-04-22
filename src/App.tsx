import EventList from "./components/EventList";
import { events } from "./data/mockData";


function App() {
  return(
  <div>
    <h1>Event App</h1>
    <EventList events={events} />
  </div>)
}

export default App
