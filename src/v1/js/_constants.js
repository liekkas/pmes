/**
 * Created by liekkas on 15/9/27.
 */
(function (app) {
    'use strict';

    var Constants = {

        PROVINCE: '全疆',

        //---------$rootScope附属的属性------------
        CURRENT_USER: 'current_user', //当前用户
        PREVENT_STATE: 'prevent_state', //前一个路由状态
        CURRENT_STATE: 'current_state', //当前路由状态

    };

    var Events = {
        USER_LOGINED: 'event_user_logined',
        USER_LOGOUTED: 'event_user_logouted'
    };

    var API = {
        AREAS: './assets/jsons/mock/area.json'
    };

    var AREA = {
        全疆: ['乌鲁木齐市', '克拉玛依市', '吐鲁番地区', '哈密地区', '昌吉回族自治州', '博尔塔拉蒙古自治州', '巴音郭楞蒙古自治州', '阿克苏地区', '克孜勒苏柯尔克孜自治州', '喀什地区', '塔什库尔干塔吉克自治县', '伊犁哈萨克自治州', '塔城地区', '阿勒泰地区', '石河子市', '阿拉尔市', '图木舒克市', '五家渠市'],
        乌鲁木齐市: ['市辖区', '天山区', '沙依巴克区', '新市区', '水磨沟区', '头屯河区', '达坂城区', '米东区', '乌鲁木齐县'],
        克拉玛依市: ['市辖区', '独山子区', '克拉玛依区', '白碱滩区', '乌尔禾区'],
        吐鲁番: ['吐鲁番市', '鄯善县', '托克逊县']
    };

    app.constant('Events', Events);
    app.constant('API', API);
    app.constant('Constants', Constants);
    app.constant('Areas', AREA);

})(angular.module(APP_NAME));
