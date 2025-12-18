export function formatDate(dateUtc: string) {
  const date = new Date(dateUtc);

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}