/**
 * Created by liekkas on 15/10/17.
 */
(function (app) {
    'use strict';

    var defaultSettings = {
        leftIcon: 'ion-ios-gear-outline',
        rightIcon: 'ion-chevron-right'
    };

    app.directive('zItemImg', function () {
        return {
            restrict: 'E',
            scope: {
                state:'@',
                shape:'@',
                charcount: '@',
                title:'@',  //标题
                desc:'@', //描述
                letter:'@', //文字图标
                rightText:'@', //右侧文字
                rightTextDesc:'@'
            },
            template: [
                ' <a class="item  " style="padding: 4px;" ui-sref="{{state}}"> ',
                '     <div class="row"> ',
                '     <div style="float:left;padding-right: 10px;"> ',
                '     <ionic-letter-avatar data="{{letter}}" shape="{{shape}}" charcount="{{charcount}}"></ionic-letter-avatar> ',
                '     </div> ',
                '     <div class="col"> ',
                '     <h2>{{title}}</h2> ',
                '     <p><span style="font-size:12px;">{{desc}}</span></p> ',
                '     </div> ',
                '     <div class="coupon-item show-scale">',
                '       <span> {{rightText}}</span>',
                '       <p><span class="desc "> {{rightTextDesc}}<span></p>',
                '     </div>  ',
                ' </div> ',
                ' </a> '
            ].join('\n'),

            compile: function(element, attr) {
                var cleanUp = function() {
                    ionic.off('$destroy', cleanUp, element[0]);
                };

                ionic.on('$destroy', cleanUp, element[0]);
            }
        }
    });

})(angular.module(APP_NAME));