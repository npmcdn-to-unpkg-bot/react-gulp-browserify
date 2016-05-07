'use strict';

var Demo = React.createClass({ displayName: "Demo",
    getInitialState: function getInitialState() {
        var firstElement = this.props.data[0] || { name: '--请选择--', value: '-1' };
        return {
            selectedName: firstElement.name,
            selectedValue: firstElement.value,
            style: {
                display: 'none'
            }
        };
    },
    render: function render() {
        var opts = [];
        var i = 0,
            len = this.props.data.length;
        for (; i < len; i++) {
            var item = this.props.data[i];
            opts.push(React.createElement("li", { className: "wiget-select-option", value: item.value, onClick: this.handleClick }, item.name));
        }
        return React.createElement("div", { className: "wiget-select-container", value: this.state.selectedValue, onClick: this.handleClick2 }, React.createElement("span", null, this.state.selectedName), React.createElement("ul", { style: this.state.style }, opts));
    },
    handleClick: function handleClick(e) {
        var selectedElement = e.target;
        this.setState({
            selectedName: selectedElement.innerHTML,
            selectedValue: selectedElement.value
        });
    },
    handleClick2: function handleClick2(e) {
        if (this.state.style.display === 'none') {
            this.setState({
                style: {
                    display: 'block'
                }
            });
        } else {
            this.setState({
                style: {
                    display: 'none'
                }
            });
        }
    }
});

var data = {
    data: [{
        name: 'nam1',
        value: 'value1'
    }, {
        name: 'nam2',
        value: 'value2'
    }, {
        name: 'nam3',
        value: 'value3'
    }]
};

ReactDOM.render(React.createElement(Demo, React.__spread({}, data)), document.getElementById('select'));