import * as xpath from 'xpath-range';
import { RangeSelector } from '../../types';

const fromRange = (
  root: HTMLElement,
  range: Range
): RangeSelector => {
  const position = xpath.fromRange(range, root);
  const result = {
    startSelector: {
      type: 'XpathSelector',
      value: position.start
    },
    endSelector: {
      type: 'XpathSelector',
      value: position.end
    },
    start: position.startOffset,
    end: position.endOffset

  };
  return result;
};

export default fromRange;
