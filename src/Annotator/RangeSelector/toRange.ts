import * as xpath from 'xpath-range';
import { Annotation } from '../../types';

const toRange = (
  anno: Annotation
): Range => {
  const {
    start, end, startSelector, endSelector
  } = anno.target.selector[0];
  const result = xpath.toRange(
    startSelector.value,
    start,
    endSelector.value,
    end,
    anno.target.source
  );

  return result;
};

export default toRange;
