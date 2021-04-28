import * as textPosition from "dom-anchor-text-position";

const toRange = (
    selection,
    root: HTMLElement
  ) => {
    const {start, end} = selection;
    const result = textPosition.toRange(root, {start, end});

    return result;
  };
  
  export default toRange; 