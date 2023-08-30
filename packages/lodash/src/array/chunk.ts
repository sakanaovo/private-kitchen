// 使用泛型推导数组中元素类型
type Chunk = <T>(array: T[], size?: number) => T[];

export const chunk: Chunk = (array, size = 1) => {
  const res = [];
  const numChunks = Math.ceil(array.length / size); // 使用 Math.ceil() 以处理最后一块可能不满 size 的情况

  for (let i = 0; i < numChunks; i++) {
    const chunk = array.slice(i * size, (i + 1) * size);
    res.push(chunk);
  }

  return res;
};
