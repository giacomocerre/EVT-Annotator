import { Annotation } from '../types';
import * as RangeSelector from './RangeSelector';
import * as TextSelector from './TextPosition';
import * as QuoteSelector from './TextQuote';

const getAnnotation = (
  anno: Annotation,
): Range => {
  let range: Range;
  const xpathRange = RangeSelector.toRange(anno);
  const textRange = TextSelector.toRange(anno);
  const quoteRange = QuoteSelector.toRange(anno);

  if (xpathRange != null) {
    range = xpathRange;
  } else if (textRange != null) {
    range = textRange;
  } else if (quoteRange != null) {
    range = quoteRange;
  } else {
    throw new Error(`Annotation ${anno.id} not found`);
  }
  return range;
};

export default getAnnotation;
