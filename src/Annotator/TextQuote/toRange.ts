import * as textQuote from "dom-anchor-text-quote";
import * as textPosition from "../TextPosition";

const toRange = (
    selection,
    root: HTMLElement
  ) => {
    const {exact, prefix, suffix} = selection;
    const position = textQuote.toTextPosition(root, {exact}, {prefix, suffix} );
    const result = textPosition.toRange(root, position);
    return result;
  };
  
  export default toRange; 