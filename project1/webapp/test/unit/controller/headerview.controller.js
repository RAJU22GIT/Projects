/*global QUnit*/

sap.ui.define([
	"project1/controller/headerview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("headerview Controller");

	QUnit.test("I should test the headerview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
