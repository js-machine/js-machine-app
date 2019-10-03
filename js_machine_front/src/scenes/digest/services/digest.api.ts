import { DigestCycle } from '../../news/models/news';

export async function getDigest(id: string): Promise<DigestCycle> {
  return fetch(`/getDigestById?digestId=${id}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  }).then(response => response.json());
}
