export interface Event {
    id: number;
    date: string;
    title: string;
    description: string;
}

export interface EventPropsAndState {
    eventsData: Event[];
}