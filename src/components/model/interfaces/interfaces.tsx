export interface Event {
    date: Date,
    title: string,
    city: string
}

export interface EventCalendarProps {
    events: Event[];
}

export interface EventDetailsProps {
    event: Event | undefined,
    onClose: () => void;
}