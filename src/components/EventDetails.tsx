import type { Event } from "../types";

type Props = {
    event: Event | null;
};

const EventDetails = ({event}: Props) => {
    if (!event) {
        return <div>Select an event to view details.</div>;
    }

    return <div>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <p>Date: {event.date}</p>

                <h3>Participants:</h3>
                {event.registrations.length === 0 
                ? (<p>No participants registered.</p>)
                : (
                    <ul>
                        {event.registrations.map((reg) => (
                            <li key={reg.id}>{reg.fullName} ({reg.email})</li>
                        ))}
                    </ul>
                )
            }
            </div>
};

export default EventDetails;