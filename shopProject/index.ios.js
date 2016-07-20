/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
var React = require('react');
var ReactNative = require('react-native');
var App = require('./app/index.js');

var shopProject = React.createClass({
    render() {
        return(
            <App />
        );
    }
});

ReactNative.AppRegistry.registerComponent('shopProject', () => shopProject);
