'use strict';

var Hello = React.createClass({
    displayName: 'Hello',

    render: function render() {
        return React.createElement(
            'h3',
            null,
            'Hello, lady'
        );
    }
});

ReactDOM.render(React.createElement(Hello, null), document.getElementById('react'));