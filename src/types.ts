export type RangeSelector = {
  startSelector: {
    type: string;
    value: string;
  };
  endSelector: {
    type: string;
    value: string;
  }
  start: number;
  end: number;
}

export type TextPosition = {
  type: string;
  start: number;
  end: number;
}

export type TextQuoteSelector = {
  type: string;
  exact: string;
  prefix?: string;
  suffix?: string;
}

export type BodyAnnotation = {
  type: string;
  value: string;
  format: string;
}

export type TargetAnnotation = {
  source: HTMLElement;
  type: string;
  selector:[RangeSelector, TextPosition, TextQuoteSelector]
}

export type Annotation = {
  '@context': string;
  id: string;
  type: string;
  created: string;
  via:string;
  body: BodyAnnotation;
  target: TargetAnnotation;
}
