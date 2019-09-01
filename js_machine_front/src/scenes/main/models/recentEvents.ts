export interface Event {
    id: string;
    date: string;
    title: string;
    description: string;
}

export interface EventProps {
    events: Event[];
}
