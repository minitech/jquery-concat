(function() {
	'use strict';

	function removeNulls(strings) {
		for(var i = 0; i < strings.length; i++) {
			strings[i] = String(strings[i]).replace(/\0/g, '');
		}

		return strings;
	}

	function concat() {
		return Array.prototype.join.call(removeNulls(arguments), '');
	}

	concat.load = function(jQuery) {
		jQuery.concat = concat;
	};

	if(typeof module !== 'undefined') {
		module.exports = concat;
	}

	if(typeof jQuery !== 'undefined') {
		concat.load(jQuery);
	}
})();