import * as xpath from "xpath-range"

const toRange = (
    selection,
    root: HTMLElement
  ) => {
    const start = selection.start;
    const startOffset = selection.startOffset;
    const end = selection.end;
    const endOffset = selection.endOffset;
    const result = xpath.toRange(start, startOffset, end, endOffset, root);

    return result;
  };
  
  export default toRange; 