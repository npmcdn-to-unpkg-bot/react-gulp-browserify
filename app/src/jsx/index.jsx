
var React=require('../../bower_components/react/react.min.js');

var hello=React.createClass({
    render:function(){
        return <h1>hello world!</h1>;
    }
})
React.render(<hello></hello>, 'hello');