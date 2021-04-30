import * as textPosition from 'dom-anchor-text-position';
import { Annotation, TextPosition } from '../../types';

const toRange = (
  anno: Annotation,
  position?: TextPosition,
): Range => {
  const { start, end } = position || anno.target.selector[1];
  const result = textPosition.toRange(anno.target.source, { start, end });

  return result;
};

export default toRange;
