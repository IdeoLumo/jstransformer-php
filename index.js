'use strict'

exports.name = 'php'
exports.inputFormats = ['php']
exports.outputFormat = 'php-html'

exports.render = function (str) {
  if (str.indexOf('\n') === -1) {
    return '<?php ' + str + ' ?>'
  }
  return '\n<?php\n' + str + '\n?>'
}
