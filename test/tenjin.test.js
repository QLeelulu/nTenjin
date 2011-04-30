/**
 * Module dependencies.
 */

var tenjin = require('../nTenjin')
  , assert = require('assert');

module.exports = {
	'compile': function() {
		var tpl = '<a href="#{it.url}">${it.title}</a>';
		var fn = tenjin.compile(tpl, {debug: true});
		assert.equal(typeof fn, 'function');
		var html = fn({'url': 'urltest<>', 'title':'sdfsdfl <>!@#?#!@# &'});
		assert.equal(html, '<a href="urltest<>">sdfsdfl &lt;&gt;!@#?#!@# &amp;</a>');
	}
};

