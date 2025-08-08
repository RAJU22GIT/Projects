/*global QUnit*/

sap.ui.define([
	"project2/controller/base.controller"
], function (Controller) {
	"use strict";

	QUnit.module("base Controller");

	QUnit.test("I should test the base controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
