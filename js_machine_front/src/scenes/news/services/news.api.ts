import { DigestCycle } from '../models/news';

export async function getDigests(): Promise<DigestCycle[]> {
  return fetch('/getDigests', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  }).then(response => response.json());
}
