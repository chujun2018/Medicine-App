'use strict';

describe('myApp.TestView module', function() {

  beforeEach(module('myApp.TestView'));

  describe('TestView controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('TestViewCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});