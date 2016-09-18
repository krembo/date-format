(function(){
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
				.replace('m', ('0' + (m + 1)).slice(0,2))
				.replace('y', parseInt(('' + y).slice(2)), 10)
				.replace('Y', y)
				.replace('M', months[m].slice(0,3))
				.replace('F', months[m]);
	};
	
})();
