type Head = <T>(array: T[]) => T & any;

/**
 * @description 获取数组中的第一个元素
 * @alias first
 */
export const head: Head = (array) => {
  if (array.length === 0) return undefined;

  return array[0];
};
