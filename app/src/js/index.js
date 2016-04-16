"use strict";

var React = require('../../bower_components/react/react.min.js');

var hello = React.createClass({ displayName: "hello",
    render: function render() {
        return React.createElement("h1", null, "hello world!");
    }
});
React.render(React.createElement("hello", null), 'hello');