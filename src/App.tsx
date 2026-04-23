import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import RegistrationForm from "./components/RegistrationForm";
import { events as initialEvents } from "./data/mockData";
import { useEffect, useState } from "react";



function App() {
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const [events, setEvents] = useState(initialEvents);

  const selectedEvent = events.find(e => e.id === selectedEventId) || null;


  const handleRegister = (data: {fullName: string, email: string}) => {
    if (selectedEventId === null) return;

    const newRegistration = {
      id: Date.now(),
      fullName: data.fullName,
      email: data.email,
    };

    setEvents((prevEvents) => 
      prevEvents.map(event => event.id === selectedEventId
        ? {
          ...event,
          registrations: [...event.registrations, newRegistration],
        }
        : event
      ));

      console.log(`Registered ${data.fullName} for event ID ${selectedEventId}`);
      
  };

  
  useEffect(() => {
      console.log("Updated events:", events);
    }, [events]);

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
      <RegistrationForm onRegister={handleRegister}/>
    </div>
  </div>)
}


export default App
