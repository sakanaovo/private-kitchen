type Intersection = (...args: any[]) => any[];

// intersection([2，1], [4，2]，[1, 2]) => [2]

export const intersection: Intersection = (...args) => {
  if (!args.length) {
    return [];
  }

  const result = [];
  const firstArray = args[0];

  for (const item of firstArray) {
    if (result.includes(item)) {
      continue;
    }

    if (args.every((array) => array.includes(item))) {
      result.push(item);
    }
  }

  return result;
};
