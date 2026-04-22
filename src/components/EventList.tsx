import type { Event } from "../types";

type Props = {
    events: Event[];
};

const EventList = ({events}: Props) => {
    return <div>
        <h3>Upcoming events:</h3>
        {events.map(event => (
            <div key = {event.id}>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
                <p>Date: {event.date}</p>
            </div>
        ))}
    </div>

};

export default EventList;