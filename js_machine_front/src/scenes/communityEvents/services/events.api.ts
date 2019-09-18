import { Event } from '../models/events';

export async function getAllEvents(): Promise<Event[]> {
  return fetch('/getAllEvents', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
}

export async function getRecentEvents(): Promise<Event[]> {
  return fetch('/getRecentEvents', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
}
