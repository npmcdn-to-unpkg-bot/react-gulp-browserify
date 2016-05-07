'use strict';

var Mock = require('mockjs');

//mock
var data = Mock.mock({
	'list|24': [{
		title: '@title',
		image: '@image(240x400)'
	}]
});
console.log(data);
var Gallery = React.createClass({ displayName: "Gallery",
	render: function render() {
		var imageArray = [];
		var createItem = function createItem(item) {
			imageArray.push(React.createElement("li", null, React.createElement("img", { src: item.image, alt: item.title, title: item.title }), React.createElement("div", { className: "caption" }, React.createElement("h2", null, item.title))));
		};
		console.log(this.props.list);
		this.props.list.forEach(createItem);
		return React.createElement("ul", { className: "gallery" }, imageArray);
	}
});

ReactDOM.render(React.createElement(Gallery, { list: data.list }), document.querySelector('#gallery'));