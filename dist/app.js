var Hello = React.createClass({displayName: "Hello",
    render: function() {
        return React.createElement("h3", null, "Hi yeahs")
    }
});

ReactDOM.render(React.createElement(Hello, null), document.getElementById('react'));