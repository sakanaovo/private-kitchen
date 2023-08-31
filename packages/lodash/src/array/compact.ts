export type Compact = (array: any[]) => any[];

export function verifyFalseValues(value: any) {
  if (Boolean(value) === false) return true;
}

export const compact = (array) => {
  return array.filter((item) => !verifyFalseValues(item));
};
