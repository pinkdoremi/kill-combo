'use strict';
var http = require('http')

function getSplitList(url) {
	url = url.split('??');
	if (url.length == 2) {
		const arr = url[1].split(',');
		if (arr.length)
			return arr.map(each => {
				return url[0] + each;
			})
	} else if (url.length == 1)
		return url

	return []
}

function getStatesCode(url) {
	url = convertHttps(url);
	return new Promise(function(resolve, reject) {
		if (!/^http:\/\//.test(url)) {
			reject('not support this scheme:');
			return;
		}
		http.get(url, (res) => {
			resolve(res.statusCode)
		}).on('error', (e) => {
			reject(e.code)
		});
	});
}

function convertHttps(url) {
	return url.replace('https', 'http');
}
module.exports = getSplitList
module.exports.getStatesCode = getStatesCode