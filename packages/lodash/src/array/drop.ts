export type Drop = <T>(array: T[], n?: number) => T[];

export const drop: Drop = (array, n = 1) => {
  if (n > array.length) return [];

  return array.slice(n);
};
