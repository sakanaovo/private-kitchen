type Predicate<T> = (value?: T, index?: number, array?: T[]) => boolean;

type dropWhile = <T>(array: T[], predicate: Predicate<T>) => T[];

export const dropWhile: dropWhile = (array, predicate) => {
  let dropIndex = 0;

  while (
    dropIndex < array.length &&
    predicate(array[dropIndex], dropIndex, array)
  ) {
    dropIndex++;
  }

  return array.slice(dropIndex, array.length);
};
