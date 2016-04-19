"use strict";

var TodoList = React.createClass({ displayName: "TodoList",
	render: function render() {
		var createItem = function createItem(itemText) {
			return React.createElement("li", null, "itemText");
		};
		var list = [1, 2, 3, 4, 5, 6];
		list.forEach(createItem);
	}
});

React.render(React.createElement(TodoList, null), TodoList);