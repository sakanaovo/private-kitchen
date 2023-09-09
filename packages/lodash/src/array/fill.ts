export type Fill = <T>(
  array: T[],
  value: any,
  start?: number,
  end?: number
) => any[];

export const fill: Fill = (array, value, start = 0, end = array.length) => {
  const res = [];
  let index = 0; // 移动的指针

  while (index < array.length) {
    if (index >= start && index < end) {
      res[index] = value;
    } else {
      res[index] = array[index];
    }
    index++;
  }

  return res;
};
