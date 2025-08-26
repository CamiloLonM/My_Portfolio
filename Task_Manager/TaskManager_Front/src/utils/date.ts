/**
 * Returns the current Unix timestamp in seconds (integer).
 */
export function getUnixTimestamp(): number {
  return Math.floor(Date.now() / 1000);
}

/**
 * Converts a Date object to Unix timestamp in seconds.
 */
export function toUnixTimestamp(date: Date): number {
  return Math.floor(date.getTime() / 1000);
}
