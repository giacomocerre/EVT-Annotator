import * as textQuote from 'dom-anchor-text-quote';
import { Annotation, TextPosition } from '../../types';
import * as textPosition from '../TextPosition';

const toRange = (
  anno: Annotation,
): Range => {
  const { exact, prefix, suffix } = anno.target.selector[2];
  const position: TextPosition = textQuote.toTextPosition(
    anno.target.source,
    { exact },
    { prefix, suffix },
  );
  const result = textPosition.toRange(anno, position);
  return result;
};

export default toRange;
