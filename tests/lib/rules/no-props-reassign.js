/**
 * @fileoverview Props object should not be reassigned to a new variable
 * @author Pontus Rulander
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-props-reassign'),
    RuleTester = require('eslint').RuleTester;

    const parserOptions = {
      ecmaVersion: 8,
      sourceType: 'module',
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true
      }
    };

    require('babel-eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ERROR_MESSAGE = 'Do not reassign props to new variable (probably should be destructuring statement)';


const ruleTester = new RuleTester({parserOptions});
ruleTester.run('no-props-reassign', rule, {

    valid: [{
      code: 'const {myprop} = this.props;'
    }],

    invalid: [
        {
            code: 'const myprop = this.props;',
            errors: [{
                message: ERROR_MESSAGE,
                type: 'VariableDeclarator'
            }]
        }
    ]
});
