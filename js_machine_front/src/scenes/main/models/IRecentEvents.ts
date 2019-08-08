export interface IEvent {
    id: string;
    date: string;
    title: string;
    description: string;
}

export interface IEventProps {
    events: IEvent[];
}