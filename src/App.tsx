import EventList from "./components/EventList";
import { events } from "./data/mockData";
import { useState } from "react";



function App() {
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  console.log("Selected event ID:", selectedEventId);

  return(
  <div>
    <h1>Event App</h1>
    <EventList 
      events={events} 
      onSelect={setSelectedEventId}
    />
  </div>)
}

export default App
