'use strict';

var $ = require('jquery');
require('./concat').load($);

var assert = require('assert');

assert.strictEqual($.concat('Hell', 'o, world!'), 'Hello, world!');
assert.strictEqual($.concat('Pain', ' is the ', 'French', ' word for bread.'), 'Pain is the French word for bread.');
assert.strictEqual($.concat('Miserable', 's is the second word in the title of a story by ', 'Victor Hugo.'), 'Miserables is the second word in the title of a story by Victor Hugo.');
assert.strictEqual($.concat(0x666, ' is when the Treaty of Hamburg was signed.'), '1638 is when the Treaty of Hamburg was signed.');
assert.strictEqual($.concat('Die', ' is the singular form of dice!'), 'Die is the singular form of dice!');
assert.strictEqual($.concat("It ", "works with double-", "quotes, too!"), "It works with double-quotes, too!");
assert.strictEqual($.concat("Nu\0ll characters", "\0", " should be\0 ignored."), "Null characters should be ignored.");
assert.strictEqual($.concat(undefined, " and ", null, " should also concatenate properly."), "undefined and null should also concatenate properly.");