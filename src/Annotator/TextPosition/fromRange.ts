import * as textPosition from 'dom-anchor-text-position';
import { TextPosition } from '../../types';

const fromRange = (
  root: HTMLElement,
  range: Range
): TextPosition => {
  const result = textPosition.fromRange(root, range);
  result.type = 'TextPositionSelector';

  return result;
};

export default fromRange;
