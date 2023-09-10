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
};

export default {
  ...array,
};
