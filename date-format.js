(function(self){
	'use strict';
	var dp = Date.prototype;
	
	dp.format = function(str){
		return str
				.replace('d', this.getDate())
				.replace('m', this.getMonth() + 1)
				.replace('Y', this.getFullYear());
	};
	
})(self !== undefined ? self : this);
