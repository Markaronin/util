export function notNullOrUndefined<T>(val: T | null | undefined): T {
  if (val === null || val === undefined) {
    throw new Error("T was null or undefined, but we asserted that it is not");
  }
  return val;
}

export function notNull<T>(val: T | null): T {
  if (val === null) {
    throw new Error("T was null, but we asserted that it is not");
  }
  return val;
}

export function notUndefined<T>(val: T | undefined): T {
  if (val === undefined) {
    throw new Error("T was undefined, but we asserted that it is not");
  }
  return val;
}

export interface Vector2 {
  x: number;
  y: number;
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Size {
  height: number;
  width: number;
}

export function groupBy<Item, Key extends string | number>(
  items: Item[],
  fn: (item: Item) => Key
): { [index in Key]: Item[] } {
  return items.reduce(function (rv, x: Item) {
    (rv[fn(x)] = rv[fn(x)] || []).push(x);
    return rv;
  }, {} as { [index in Key]: Item[] });
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
