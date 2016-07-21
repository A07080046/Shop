'use strict';

const {SERVER} = CONSTANTS;

module.exports = {
    //登录
    ROUTE_LOGIN: SERVER+"login",//登录
    ROUTE_SEND_VERIFICATION_CODE: SERVER+"sendVerificationCode",//发送验证码
    ROUTE_REGISTER: SERVER+"register",//注册
    ROUTE_FINDBACK_PWD: SERVER+"findBackPwd",//找回密码
    ROUTE_UP_DATEPWD: SERVER+"updatePwd",//更新密码

    //配置数据
    ROUTE_GET_PERSONAL_INFO: SERVER+"getPersonalInfo",//获取个人信息
    ROUTE_UPDATE_PERSONAL_INFO: SERVER+"updatePersnalInfo",//更新个人信息
};
