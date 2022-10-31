export function isEmpty(value) {
  if (typeof value === "number") return true;
  if (typeof value === "boolean") return true;
  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }
  return !value;
}
