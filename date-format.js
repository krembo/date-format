(function(){
	'use strict';
	var dp = Date.prototype;
	var leadingZeros = function(num){
		return ('0' + num).slice(-2);
	};
	dp.format = function(str){
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
					'August', 'September', 'October', 'November', 'December'],
			d = this.getDate(), 
			m = this.getMonth(),
			y = this.getFullYear(),
			h = this.getHours(),
			i = this.getMinutes(),
			s = this.getSeconds();
		return str
				.replace('d', d)
				.replace('m', leadingZeros(m + 1))
				.replace('y', ('' + y).slice(2))
				.replace('Y', y)
				.replace('M', months[m].slice(0,3))
				.replace('F', months[m])
				.replace('H', leadingZeros(h))
				.replace('i', leadingZeros(i))
				.replace('s', leadingZeros(s));
	};
	
})();
