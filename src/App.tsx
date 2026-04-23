import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import RegistrationForm from "./components/RegistrationForm";
import { events } from "./data/mockData";
import { useState } from "react";



function App() {
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  const selectedEvent = events.find(e => e.id === selectedEventId) || null;

  console.log("Selected event ID:", selectedEventId);

  return(
  <div> 
    <div>
      <h1>Event App</h1>
      <EventList 
        events={events} 
        onSelect={setSelectedEventId}
      />
    </div>
    <div>
      <hr />
      <EventDetails event={selectedEvent} />
    </div>
    <div>
      <hr />
      <RegistrationForm onRegister={ (data) => {

        console.log(data);
      }} />
    </div>
  </div>)
}


export default App
