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

export async function createEvent(event: Event): Promise<{ id: string }> {
  return fetch('/api/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  }).then(response => response.json());
}

export async function updateEvent(event: Event): Promise<Response> {
  return fetch(`/api/evnents/${event.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });
}

export async function deleteEvent(id: string): Promise<Response> {
  return fetch(`/api/events/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
}