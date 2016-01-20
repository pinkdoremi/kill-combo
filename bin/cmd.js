#!/usr/bin/env node

"use strict";

var exec = require('child_process').exec;
var kc = require('../');
var gs = kc.getStatesCode;
var arg = process.argv[2]
var arg2 = process.argv[3]
var program = require('commander');

function error(err) {
	console.error(err.message)
	process.exit(1)
}

program
	.version(require('../package.json').version)
	.usage('[options] <url>')
	.option('-c, --connect', 'check the network status of splited urls')
	.action(function(url, options) {
		if (options.connect) {
			getStatesCode(url)
		} else {
			killcombo(url)
		}
	})
	.parse(process.argv);

function killcombo(url) {
	console.log('\nSplit Url:\n');
	kc(url).forEach((each, n) => {
		console.log('  ' + (n + 1) + '\t' + each)
	})
	console.log('\n');
}

function getStatesCode(url) {
	console.log('\nUrl & Status:\n');
	var arrs = kc(url);
	var sum = arrs.length;
	arrs.forEach((each, n) => {
		gs(each).then(res => {
			log(res, each, sum)
		}, res => {
			log(res, each, sum)
		})
	})
}

function log(res, each, sum) {
	if (--sum >= 0)
		console.log('  ' + res + '\t' + each);
}