import { TextQuoteSelector } from '../../types';

const fromRange = (
  range: Range
): TextQuoteSelector => {
  const exact = range.toString();
  const regex = new RegExp(`(.{0,32})${exact.replace(/\n|\r/g, '')}(.{0,32})`);
  const prefix = range.commonAncestorContainer.textContent.replace(/\n|\r/g, '').match(regex)[1];
  const suffix = range.commonAncestorContainer.textContent.replace(/\n|\r/g, '').match(regex)[2];

  const result = {
    type: 'TextQuoteSelector', exact, prefix, suffix
  };

  return result;
};

export default fromRange;
