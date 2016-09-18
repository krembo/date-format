(function(self){
	'use strict';
	var dp = Date.prototype;
	
	dp.format = function(str){
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
					'August', 'September', 'October', 'November', 'December'],
			d = this.getDate(), 
			m = this.getMonth(),
			y = this.getFullYear();
		return str
				.replace('d', d)
				.replace('m', m + 1)
				.replace('Y', y)
				.replace('M', months[m].slice(0,3))
				.replace('F', months[m]);
	};
	
})(self !== undefined ? self : this);
