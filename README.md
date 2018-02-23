# eslint-plugin-iruhl

Custom eslint rules for intrenal projects

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-iruhl`:

```
$ npm install eslint-plugin-iruhl --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-iruhl` globally.

## Usage

Add `iruhl` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "iruhl"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "iruhl/rule-name": 2
    }
}
```

## Supported Rules

* [iruhl/sort-prop-types](docs/rules/sort-prop-types.md): Enforce propTypes declarations alphabetical sorting
* [iruhl/no-props-reassign](docs/rules/no-props-reassign.md): Enforce propTypes declarations alphabetical sorting
