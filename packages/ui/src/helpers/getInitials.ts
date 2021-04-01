export function getInitials(firstName: string, lastName: string) {
  const firstLetter = firstName.slice(0, 1);
  const parts = lastName.split(' ');
  if (parts.length > 1) return firstLetter + parts[0].slice(0, 1) + parts[1].slice(0, 1);
  return firstLetter + parts[0].slice(0, 1);
}
