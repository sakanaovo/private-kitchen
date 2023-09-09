type FindIndex = <T>(array: T[], predicate: Util.Predicate<T>) => number;

export const findIndex = (array, predicate) => {
  let findIndex = 0;
  while (
    findIndex < array.length &&
    !predicate(array[findIndex], findIndex, array)
  ) {
    findIndex++;
  }

  return findIndex === array.length ? -1 : findIndex;
};
