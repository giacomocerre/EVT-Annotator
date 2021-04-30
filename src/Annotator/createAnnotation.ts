import { v4 as uuidv4 } from 'uuid';
import {
  Annotation, BodyAnnotation, RangeSelector, TargetAnnotation, TextPosition, TextQuoteSelector
} from '../types';
import * as XpathSelector from './RangeSelector';
import * as TextSelector from './TextPosition';
import * as QuoteSelector from './TextQuote';

const createAnnotation = (
  root: HTMLElement,
  range: Range,
  note: string,
): Annotation => {
  const URL: string = window.location.href;
  let result : Annotation;
  if (root != null && range != null) {
    const Range : RangeSelector = XpathSelector.fromRange(root, range);
    const Text : TextPosition = TextSelector.fromRange(root, range);
    const Quote : TextQuoteSelector = QuoteSelector.fromRange(range);
    const AnnotationBody: BodyAnnotation = { type: 'TextualBody', value: note, format: 'text/html' };
    const AnnotationTarget: TargetAnnotation = { source: root, type: 'text', selector: [Range, Text, Quote] };
    result = {
      '@context': 'http:www.w3.org/ns/anno.jsonld',
      id: uuidv4(),
      type: 'Annotation',
      created: new Date().toISOString(),
      via: URL,
      body: AnnotationBody,
      target: AnnotationTarget

    };
  } else {
    throw new Error('Invalid range!');
  }
  return result;
};

export default createAnnotation;
