'use strict'

exports.name = 'php'
exports.inputFormats = ['php']
exports.outputFormat = 'php-html'

exports.render = function (str) {
  return '<?php\n' + str + '\n?>'
}
