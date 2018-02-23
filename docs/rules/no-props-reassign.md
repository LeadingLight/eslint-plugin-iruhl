# Props object should not be reassigned to a new variable (iruhl/no-props-reassign)




## Rule Details

We use destructuring statements for getting props out from props object. A common error is to forget curly brackets. This rule aims to warn against this mistake.

Examples of **incorrect** code for this rule:

```js

const myProp = this.props;

```

Examples of **correct** code for this rule:

```js

const {myProp} = this.props;

```


## When Not To Use It

if you want to allow reassigning the props object and are not concerned with missing curly brackets error
