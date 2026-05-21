export function genericSearch<T extends object>(
  object: T,
  properties: Array<keyof T>,
  query: string,
): boolean {
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery === "") {
    return true;
  }

  return properties.some((property) => {
    const value = object[property];
    if (typeof value === "string" || typeof value === "number") {
      return value.toString().toLowerCase().includes(normalizedQuery);
    }
    if (Array.isArray(value)) {
      return value.some((item) => {
        if (typeof item === "string" || typeof item === "number") {
          return item.toString().toLowerCase().includes(normalizedQuery);
        }
        return false;
      });
    }
    return false;
  });
}
