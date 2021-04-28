import * as xpath from "xpath-range"
import { RangeSelector } from "../../types";

const fromRange = (
    root: HTMLElement,
    range: Range
  ) => {
    const result: RangeSelector = xpath.fromRange(range, root);

    return result;
  };
  
  export default fromRange; 