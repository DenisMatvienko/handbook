/**
 *      Helper - cut the string to needed length
 *          - More often use for titles and other
 */

export function stringCutter(str: string, cutTo: number): string {
  if (cutTo < 0) {
    return str;
  }

  if (str.length > cutTo) {
    return `${str.slice(0, cutTo).trim()}...`;
  }

  return str;
}
