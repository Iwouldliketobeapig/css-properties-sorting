# <center>css-properties-sort</center>

## Installation

Frist, install stylelint

```text
npm install --save-dev stylelint
```

Then, install stylelint-order and install stylelint-properties-sorting

```text
npm install --save-dev stylelint-order stylelint-properties-sorting
```

Or, you can one time

```text
npm install --save-dev stylelint stylelint-order stylelint-properties-sorting
```

## Example

in .stylelintrc:

```text
{
	"plugins": [
		"stylelint-order"
	],
	"extends": "stylelint-properties-sorting"
}
```

## Sorting rules

1. display & flow

2. dosition

3. dimension

4. margin/padding/border/outline

5. type graphic style

6. background

7. opacity/cursor/generated/content

8. transition