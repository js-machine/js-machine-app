import { DigestCycle } from '../../news/models/news';

export async function getDigest(id: string): Promise<DigestCycle> {
  return fetch('/getDigests', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  }).then(response => response.json()).then(result => result.find((d: DigestCycle) => d.id === id));
}
