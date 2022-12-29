export function greeting(): string {
  const hours = new Date().getHours();
  if (hours >= 4 && hours < 12) return "Good morning!";
  if (hours >= 12 && hours < 18) return "Good afternoon!";
  if (hours >= 18 && hours < 22) return "Good evening!";
  if (hours >= 22 || hours < 4) return "Good night!";
  return 'Good day!'
}
