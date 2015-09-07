// package metadata file for Meteor.js
var packageName = 'rshashkov:angular-meteor-flow-js';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.1';
var summary = 'HTML5 File upload';
var gitLink = 'https://github.com/ruslanchek/angular-meteor-flow-js';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
	name: packageName,
	version: version,
	summary: summary,
	git: gitLink,
	documentation: documentationFile
});

Package.onUse(function(api) {
	api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions
	api.addFiles('src/ng-flow-standalone.js', where); // Files in use
});
