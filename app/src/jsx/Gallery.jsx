
var Mock = require('mockjs');


//mock
var data = Mock.mock({
    'list|24': [{
        title: '@title',
        image: '@image(240x400)'
    }]
});
console.log(data)
var Gallery=React.createClass({
	render(){
		var imageArray=[];
		var createItem=function(item){
			imageArray.push(<li><img src={item.image} alt={item.title} title={item.title}/><div className="caption"><h2>{item.title}</h2></div></li>)
		}
		console.log(this.props.list)
		this.props.list.forEach(createItem);
		return (
			<ul className="gallery">
				{imageArray}
			</ul>
		)
	}
})

ReactDOM.render(<Gallery list={data.list}/>,document.querySelector('#gallery'))