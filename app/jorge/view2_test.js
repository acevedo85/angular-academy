'use strict';

describe('myApp.jorge module', function() {

  beforeEach(module('myApp.view2'));

  describe('jorge controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});