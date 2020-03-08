export function replaceAt(
  string: string,
  index: number,
  replace: string
): string {
  return string.substring(0, index) + replace + string.substring(index + 1)
}

export function replaceElementInArray(
  array: any[],
  index: number,
  value: any
): any[] {
  const ret = array.slice(0)
  ret[index] = value
  return ret
}
