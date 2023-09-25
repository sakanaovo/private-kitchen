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
  intersection,
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
  intersection,
};

export default {
  ...array,
};
