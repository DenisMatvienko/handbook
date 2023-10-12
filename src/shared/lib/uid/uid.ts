/**
 *      Helper - generate Unique id with fixed length
 *          - Can use for keys in loops
 *
 *      @param padStart
 *        - Fix length, if len enough. Using '0' for filling to 18-len
 */

export function uid(): string {
  return (Date.now().toString(36) + Math.random().toString(36).substring(2, 12)).padStart(12, '0');
}
