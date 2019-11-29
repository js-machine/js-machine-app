import { Digest } from '@js-machine-app/models';

export async function getDigests(): Promise<Digest[]> {
  return fetch('/api/digests', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json());
}

export async function getDigestsById(id: string): Promise<Digest> {
  return fetch(`/api/digests/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json());
}

export async function createDigest(digest: Digest): Promise<{ id: string }> {
  return fetch('/api/digests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(digest),
  }).then(response => response.json());
}

export async function updateDigest(digest: Digest): Promise<Response> {
  return fetch(`/api/digests/${digest.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(digest),
  });
}

export async function deleteDigest(id: string): Promise<Response> {
  return fetch(`/api/digests/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
}
