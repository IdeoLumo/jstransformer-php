'use strict'

exports.name = 'php'
exports.inputFormats = ['php']
exports.outputFormat = 'php-html'

const PHP_START = '<?php'
const PHP_END = '?>'

exports.render = function (str) {
  const addStartTag = str.indexOf(PHP_START) === -1
  const addEndTag = str.indexOf(PHP_END) === -1
  const singleLine = str.indexOf('\n') === -1

  return (addStartTag ? PHP_START : '') +
         (singleLine ? ' ' : '\n') +
         str +
         (singleLine ? ' ' : '\n') +
         (addEndTag ? PHP_END : '')
}
