---
layout: post
title: "Angular: Quick Reference"
date: 2015-11-29
---

Quick notes on defining defining modules, directives, controllers, and services in Angular. All snippets below correspond to examples in the Sandbox section.

##In app.js:

###Defining a module:

Assuming there are controllers.js and services.js files included

'''
angular.module( 'myApp', [ 'myApp.controllers', 'myApp.services' ] ); 
'''

