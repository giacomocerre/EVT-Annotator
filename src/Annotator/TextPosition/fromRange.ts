import * as textPosition from "dom-anchor-text-position";
import { TextPosition } from "../../types";


const fromRange = (
    root: HTMLElement,
    range: Range
  ) => {
    const position: TextPosition = textPosition.fromRange(root, range);
    position.type = "TextPositionSelector";
    const result = textPosition.fromRange(root, range);

    return result;
  };
  
  export default fromRange; 