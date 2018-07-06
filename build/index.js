'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mjmlLoader;

var _mjml = require('mjml');

function mjmlLoader(content) {
  this.cacheable();

  const result = (0, _mjml.mjml2html)(content);

  if (result.errors.length) {
    const errorMsg = `[mjml-loader] ERROR in ${this.resourcePath}:
    ${result.errors.map(error => `- ${error.formattedMessage}`)}`;

    const error = new Error(errorMsg);
    error.code = 'MJML_INVALID';

    throw error;
  }

  return `export default ${JSON.stringify(result.html)};`;
}
//# sourceMappingURL=index.js.map