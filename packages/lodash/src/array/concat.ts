export type Concat = (...args: any) => any[];

export const concat: Concat = (...args) => {
  return [...args].flat(1);
};
