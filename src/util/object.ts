export function toPlainObject<T extends object>(value: T): Record<string, any> {
  if (value === null || typeof value !== 'object') {
    return {};
  }
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (e) {
    return {};
  }
}
