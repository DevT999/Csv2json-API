const assert = require('assert'); 
const should = require('chai');
should.use(require('chai-json-schema'));
const fs = require('fs');
const app = require('../app');


describe('# App test!', function () {

  describe('1. isExisting', function () {
    it('JSON file exists', function (done) {
      fs.readFile(app.isExiting(), done);
    });
  });

  describe('2. isJson', function () {
    it('This file is json-typed', function () {
      try {
        JSON.parse(app.isJson());
      } catch (e) {
          return false;
      }
        return true;
    });
  });
  

});