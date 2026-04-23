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
            </div>
};

export default EventDetails;