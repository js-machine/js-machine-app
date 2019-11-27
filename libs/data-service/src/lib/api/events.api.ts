import { Event } from '@js-machine-app/models';

export async function getEvents(): Promise<Event[]> {
  return fetch('/api/events', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json());
}

export async function getRecentEvents(): Promise<Event[]> {
  return fetch('/api/events/recent', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json());
}
