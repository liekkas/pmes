/**
 * Created by liekkas on 15/10/21.
 */
(function (app) {
    'use strict';

    /* @ngInject */
    function MessageCtrl() {
        //视图模型ViewModel
        var vm = this;

        vm.msgs = [
            {id:1,type:'logistics',letter:'物流',title:'你有个订单已发货',desc:'暴龙眼镜树脂精品款正在运送中',time:'昨天 12:05'},
            {id:2,type:'activity',letter:'促销',title:'喜欢的宝贝降价啦，戳这里~',desc:'暴龙5002眼镜大降价',time:'2015-10-15'},
            {id:3,type:'activity',letter:'促销',title:'双11促销活动',desc:'各种眼镜打半折，即将到来，敬请期待！',time:'2015-10-14'}
        ];

        vm.remove = function (id) {


        }
    }

    app.controller('MessageCtrl', MessageCtrl);

})(angular.module(APP_NAME));