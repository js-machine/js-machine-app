export async function sendFeedback(text: string): Promise<Response> {
  return fetch('/api/feedbacks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text,
    }),
  });
}
