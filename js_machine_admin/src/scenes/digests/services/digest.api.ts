import { DigestCycle } from 'models';

export async function getDigests(): Promise<DigestCycle[]> {
  return fetch('/getDigests', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json());
}

export async function createDigest(
  digest: DigestCycle,
): Promise<{ id: string }> {
  return fetch('/createDigest', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ digest }),
  }).then(response => response.json());
}

export async function saveDigest(digest: DigestCycle): Promise<any> {
  return fetch('/saveDigest', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ digest }),
  });
}

export async function deleteDigest(digestId: string): Promise<any> {
  return fetch('/deleteDigest', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ digestId }),
  });
}

export async function hideDigest(digestId: string): Promise<any> {
  return fetch('/hideDigest', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ digestId }),
  });
}

export async function showDigest(digestId: string): Promise<any> {
  return fetch('/showDigest', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ digestId }),
  });
}

export async function uploadDigestMd(
  digestId: string,
  content: string,
): Promise<any> {
  return fetch('/uploadDigestMd', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ digestId, content }),
  });
}
