'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    Platform,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} = ReactNative;

global.Toast = require('@remobile/react-native-toast').show;
global.sr = require('./config/Screen.js');
global.CONSTANTS = require('./config/Constants.js');
global.POST = require('./utils/net/Post.js');
global.GET = require('./utils/net/Get.js');

var Utils = require('./utils/common/index.js');
var Route = require('./config/Route.js');

global.app = {
    route: Route,
    utils: Utils,
    isandroid: Platform.OS==="android"
};

var ipType = 1;//1：本地，0:阿里服务
module.exports = React.createClass({
    getInitialState() {
        return {
            url: '',
            json: '',
        };
    },
    sendPost() {
        POST(this.state.url, JSON.parse(this.state.json), this.callBack, true);
    },
    callBack() {

    },
    doGetPersonalInfo() {
        var param = {
            userID: "578ecfee0cf2a4e1d94c8e01",
        };
        POST(app.route.ROUTE_GET_PERSONAL_INFO, param, this.getPersonalInfoSuccess, this.getPersonalInfoError);
    },
    getPersonalInfoSuccess(data) {
        if (data.success) {
            Toast(data.msg);
        } else {
            app.dismissProgressHUD();
            Toast(data.msg);
        }
    },
    getPersonalInfoError(error) {
        app.dismissProgressHUD();
    },
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='URL'
                    onChangeText={(text) => {this.state.url= text}}
                    defaultValue={ipType==0?"http://www.gyyxjqd.com/app/api/trainingConsumptio":"http://localhost:8080/app/api/getPackageItem"}
                    style={styles.TextInput}
                    editable={true}
                    />
                <TextInput
                    placeholder='JSON'
                    onChangeText={(text) => {this.state.json= text}}
                    defaultValue='{"userID":"578ecfee0cf2a4e1d94c8e01"}'
                    style={styles.TextInput}
                    editable={true}
                    />
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={this.sendPost}
                  style={styles.button}>
                    <Text style={styles.buttonText}>发送请求</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={this.doGetPersonalInfo}
                  style={styles.button}>
                    <Text style={styles.buttonText}>获取个人信息</Text>
                </TouchableOpacity>
            </View>

        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TextInput: {
      width: sr.w-20,
      height: 80,
      backgroundColor:'#efefef',
      color:'black',
      marginVertical:10,
      marginHorizontal:10,
    },
    button: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
    },
    buttonText: {
      color:'black',
      fontSize: 15,
    },
});
