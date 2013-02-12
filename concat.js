(function() {
	'use strict';

	function concat() {
		return Array.prototype.join.call(arguments, '');
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