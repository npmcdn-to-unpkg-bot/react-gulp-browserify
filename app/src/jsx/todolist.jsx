var TodoList=React.createClass({
	render:function(){
		var _html='';
		var createItem=function(itemText){
			html+= <li>{itemText}</li>;
		}
		var list=[1,2,3,4,5,6];
		var i=0,len=list.length;
		for(;i<len;i++){
			var item=list[i];
			createItem(item)
		}
		return _html;
	}
});

ReactDOM.render(<TodoList></TodoList>,document.getElementById('todolist'));