export type DiffErence = (array: any[], ...args: any[]) => any[];

export const difference: DiffErence = (array, ...excludeArrays) => {
  const collection: Set<any> = new Set([].concat(...excludeArrays));

  return array.filter((value) => !collection.has(value));
};
