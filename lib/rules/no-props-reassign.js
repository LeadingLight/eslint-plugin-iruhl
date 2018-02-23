/**
 * @fileoverview Props object should not be reassigned to a new variable
 * @author POntus Rulander
 */
"use strict";

const docsUrl = require('../util/docsUrl');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Props object should not be reassigned to a new variable",
      category: "Possible Errors",
      recommended: false,
      url: docsUrl('sort-prop-types')
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
        // fill in your schema
    ]
  },

  create: function(context) {

    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    function isPropsReassignDeclaration(node) {
      return (
        node.id.type &&
        node.init &&
        node.init.object &&
        node.init.property &&
        node.id.type === "Identifier" &&
        node.init.type === "MemberExpression" &&
        node.init.object.type === "ThisExpression" &&
        node.init.property.type === "Identifier" &&
        node.init.property.name === "props"
      );
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      VariableDeclarator(node) {
        if ( isPropsReassignDeclaration(node))
          context.report(
            node,
            "Do not reassign props to new variable (probably should be destructuring statement)"
          );
        }
    };
  }
};
