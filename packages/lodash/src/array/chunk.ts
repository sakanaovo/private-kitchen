// 使用泛型推导数组中元素类型
type Chunk = <T>(array: T[], size?: number) => T[];

export const chunk: Chunk = (array, size = 1) => {
  // size 为负数时，返回空数组
  if (size <= 0) return [];
  // 如果 size 大于数组长度，返回原数组
  if (size >= array.length) return array;
  const res = [];
  const numChunks = Math.ceil(array.length / size); // 使用 Math.ceil() 以处理最后一块可能不满 size 的情况
  for (let i = 0; i < numChunks; i++) {
    const chunk = array.slice(i * size, (i + 1) * size);
    res.push(chunk);
  }
  return res;
};
