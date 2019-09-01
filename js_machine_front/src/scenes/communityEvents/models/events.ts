export interface Event {
    id: number;
    date: string;
    title: string;
    description: string;
}

export interface EventModel {
    eventsData: Event[];
}
