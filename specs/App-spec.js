var App = require('./../app/App.jsx');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

describe("App", function() {

  it("should render demo", function() {
    var app = TestUtils.renderIntoDocument(React.createElement(App));
  });

});
