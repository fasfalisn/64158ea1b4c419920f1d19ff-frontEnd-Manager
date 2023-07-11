/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: it@vilabs.eu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TempApi);
  }
}(this, function(expect, TempApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TempApi.Task();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Task', function() {
    it('should create an instance of Task', function() {
      // uncomment below and update the code to test Task
      //var instane = new TempApi.Task();
      //expect(instance).to.be.a(TempApi.Task);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TempApi.Task();
      //expect(instance).to.be();
    });

    it('should have the property taskName (base name: "taskName")', function() {
      // uncomment below and update the code to test the property taskName
      //var instance = new TempApi.Task();
      //expect(instance).to.be();
    });

    it('should have the property taskStatus (base name: "taskStatus")', function() {
      // uncomment below and update the code to test the property taskStatus
      //var instance = new TempApi.Task();
      //expect(instance).to.be();
    });

    it('should have the property taskEmployee (base name: "taskEmployee")', function() {
      // uncomment below and update the code to test the property taskEmployee
      //var instance = new TempApi.Task();
      //expect(instance).to.be();
    });

  });

}));