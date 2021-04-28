import { Annotation, BodyAnnotation, RangeSelector, TargetAnnotation, TextPosition, TextQuoteSelector } from "../types";
import { v4 as uuidv4 } from 'uuid';
import * as XpathSelector from "./RangeSelector";
import * as TextSelector from "./TextPosition";
import * as QuoteSelector from "./TextQuote";

const createAnnotation = (
    root: HTMLElement,
    range: Range,
    note: string,
  ) => {
    const URL: string = window.location.href;
    let result : Annotation;
    let Range : RangeSelector = XpathSelector.fromRange(root,range);
    let Text : TextPosition = TextSelector.fromRange(root, range);
    let Quote : TextQuoteSelector = QuoteSelector.fromRange(range)
    let AnnotationBody: BodyAnnotation = {type:"TextualBody", value: note, format: "text/html"};
    let AnnotationTarget: TargetAnnotation  = {source: root, type:"text", selector: [Range, Text, Quote]}
    result = {
      "@context": "http:www.w3.org/ns/anno.jsonld",
      id:uuidv4(),
      type:"Annotation",
      created: new Date ().toISOString(),
      via: URL,
      body: AnnotationBody,
      target: AnnotationTarget

    }
    return result;
  };
  
  export default createAnnotation; 