# <center>css-properties-sort</center>

[![NPM version](https://img.shields.io/npm/v/css-properties-sorting.svg)](https://www.npmjs.org/package/css-properties-sorting)
[![NPM Downloads](https://img.shields.io/npm/dm/css-properties-sorting.svg)](https://www.npmjs.org/package/css-properties-sorting)
[![Build Status](https://travis-ci.org/cahamilton/css-properties-sorting.svg?branch=master)](https://travis-ci.org/cahamilton/css-properties-sorting)

## Installation

Frist, install stylelint

```text
npm install --save-dev stylelint
```

Then, install stylelint-order and install css-properties-sorting

```text
npm install --save-dev stylelint-order css-properties-sorting
```

Or, you can one time

```text
npm install --save-dev stylelint stylelint-order css-properties-sorting
```

## Example

in .stylelintrc:

```text
{
	"plugins": [
		"stylelint-order"
	],
	"extends": "css-properties-sorting"
}
```

**you can use it with webpack or others** 

## Sorting rules

1. display & flow

2. dosition

3. dimension

4. margin/padding/border/outline

5. type graphic style

6. background

7. opacity/cursor/generated/content

8. transition