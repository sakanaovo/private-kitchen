import {
  chunk,
  compact,
  concat,
  difference,
  drop,
  dropWhile,
  fill,
  head,
  findIndex,
  indexOf,
} from "./array";

const array = {
  chunk,
  compact,
  concat,
  difference,
  drop,
  dropWhile,
  fill,
  findIndex,
  head,
  first: head,
  indexOf,
};

export default {
  ...array,
};
