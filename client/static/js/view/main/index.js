'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var App = React.createClass({
    render: function () {
        return (
            <h2>网站建设中...</h2>
        )
    }
})
// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
