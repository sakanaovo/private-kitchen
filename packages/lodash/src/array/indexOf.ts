type IndexOf = <T>(array: T[], value: T & any, fromIndex?: number) => number;

export const indexOf: IndexOf = (array, value, fromIndex) => {
  let index = fromIndex ? fromIndex : 0;

  while (index < array.length) {
    if (array[index] === value) {
      break;
    }
    index++;
  }

  return index === array.length ? -1 : index;
};
