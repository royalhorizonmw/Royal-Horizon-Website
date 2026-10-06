export function isActive(
  c: { starts: string; ends: string | null },
  now = Date.now(),
) {
  return Date.parse(c.starts) <= now && (!c.ends || Date.parse(c.ends) > now);
}
