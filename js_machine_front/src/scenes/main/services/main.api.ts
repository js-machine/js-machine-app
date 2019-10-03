export async function sendFeedback(text: string): Promise<any> {
  return fetch('/sendFeedback', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      text,
    }),
  });
}
