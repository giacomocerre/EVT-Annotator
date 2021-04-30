EVT - Text Annotator
=================

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![NPM Package](https://img.shields.io/npm/v/evt-textAnnotator.svg)](https://www.npmjs.com/package/evt-text-annotator)
[![NPM version](https://img.shields.io/npm/v/evt-text-annotator.svg?style=flat)](https://www.npmjs.com/package/evt-text-annotator)
[![NPM monthly downloads](https://img.shields.io/npm/dm/evt-text-annotator.svg?style=flat)](https://npmjs.org/package/evt-text-annotator)
[![NPM total downloads](https://img.shields.io/npm/dt/evt-text-annotator.svg?style=flat)](https://npmjs.org/package/evt-text-annotator)

This library was created to provide an easy way to create semantic annotations based on standards, W3C - Web Annotation Data Model.
For the creation we used the libraries:

- https://github.com/openannotation/xpath-range
- https://github.com/tilgovi/dom-anchor-text-quote
- https://github.com/tilgovi/dom-anchor-text-position

The library exposes two APIs `createAnnotation` and `getAnnotation`

## Installation

For the istallation via npm use: ` npm install evt-text-annotator`

## API Documentation
### `createAnnotation(root, range, note)`

This API takes three values ​​as input `(root, range, note)`.
- `root` identifies the HTML element generated by the text selection made by the user.

- `range` identifies the range that is generated when the user selects the text.

- `note` identifies the note that the user wants to insert within the selection.

The `return` of this API is an `Object` conform to W3C - Web Annotation Data Model of the note.

### `getAnnotation(anno)`

This API takes only one value ​​(`anno`) as input.
- `anno` identifies the object that is generated using the `createAnnotation` API.

The `return` of this API is a `Range`.

## Usage

An example of use of the library
```js
import {annotator}  from "evt-text-annotator";

const range = selection.getRangeAt(0); // Range
const root = range.commonAncestorContainer.parentElement; // HTMLElement
const note = "my note" // input String
// create annotation from text selection
const anno = annotator.createAnnotation(root, range, note); // Annotation
// get a Range form an annotation 
const range_anno = annotator.getAnnotation(anno); // Range
```



