/**
 * Created by liekkas on 15/9/27.
 */
(function (app) {
    'use strict';

    //基类
    var appConfig = {
        'app': {
            abstract: true,
            url: '',
            templateUrl: 'tabs.html',
            controller: 'TabCtrl as vm',
            resolve: {
                areas: function(AreaService){
                    return AreaService.getAreas();
                }
            }
        }
    };

    //告警模块
    var alarmConfig = {
        'alarm': {
            url: '/alarm',
            views: {
                'alarm': {
                    templateUrl: 'tabs-alarm.html',
                    controller: 'AlarmCtrl as vm'
                }
            }
        },
        //告警详情
        'alarmDetail': {
            url: '/alarm/:alarmId',
            views: {
                'alarm': {
                    templateUrl: 'alarm/alarm-detail.html',
                    controller: 'AlarmDetailCtrl as vm'
                }
            }
        }
    };

    //性能模块
    var perfConfig = {
        'perf': {
            url: '/perf',
            views: {
                'perf': {
                    templateUrl: 'tabs-perf.html',
                    controller: 'PerfCtrl as vm'
                }
            }
        }
    };

    //资源模块
    var resConfig = {
        'res': {
            url: '/res',
            views: {
                'res': {
                    templateUrl: 'tabs-res.html',
                    controller: 'ResCtrl as vm'
                }
            }
        },
        'resList': {
            url: '/res/type/:typeId',
            views: {
                'res': {
                    templateUrl: 'res/res-list.html',
                    controller: 'ResListCtrl as vm'
                }
            }
        },
        'resDetail': {
            url: '/res/detail/:objectId',
            views: {
                'res': {
                    templateUrl: 'res/res-detail.html',
                    controller: 'ResDetailCtrl as vm'
                }
            }
        }
    };

    //个人中心模块
    var profileConfig = {

        'profile':{
            url: '/profile',
            views: {
                'profile': {
                    templateUrl: 'tabs-profile.html',
                    controller: 'ProfileCtrl as profile'
                }
            }
        },

        'problems':{
            url: '/problems',
            views: {
                'profile': {
                    templateUrl: 'profile/problems.html',
                    controller: 'ProblemsCtrl as vm'
                }
            }
        },
        'problemsAdd':{
            url: '/problems/new',
            views: {
                'profile': {
                    templateUrl: 'profile/problems-add.html',
                    controller: 'ProblemsAddCtrl as vm'
                }
            }
        },
        'problemsDetail':{
            url: '/problems/detail/:problemId',
            views: {
                'profile': {
                    templateUrl: 'profile/problems-detail.html',
                    controller: 'ProblemsDetailCtrl as vm'
                }
            }
        },

        'message': {
            url: '/message',
            views: {
                'profile': {
                    templateUrl: 'profile/message.html',
                    controller: 'MessageCtrl as vm'
                }
            }
        },
        //物流信息
        'messageLogistics': {
            url: '/message/logistics/:id',
            views: {
                'profile': {
                    templateUrl: 'profile/message-logistics.html'
                }
            }
        },
        //活动信息
        'messageActivity': {
            url: '/message/activity/:id',
            views: {
                'profile': {
                    templateUrl: 'profile/message-activity.html'
                }
            }
        },

        //账号信息
        'account': {
            url: '/account',
            views: {
                'profile': {
                    templateUrl: 'profile/account-info.html',
                    controller: 'AccountInfoCtrl as ai'
                }
            }
        },
        'accountEditImg': {
            url: '/account/edit/img',
            views: {
                'profile': {
                    templateUrl: 'profile/edit-profile-img.html'
                }
            }
        },
        'accountEditNickName': {
            url: '/account/edit/nickname',
            views: {
                'profile': {
                    templateUrl: 'profile/edit-nickname.html'
                }
            }
        },
        'accountEditPwd': {
            url: '/account/edit/pwd',
            views: {
                'profile': {
                    templateUrl: 'profile/edit-password.html'
                }
            }
        },
        'accountEditPhone': {
            url: '/account/edit/phone',
            views: {
                'profile': {
                    templateUrl: 'profile/edit-phone.html'
                }
            }
        },

        'setting': {
            url: '/setting',
            views: {
                'profile': {
                    templateUrl: 'profile/setting.html',
                    controller: 'SettingCtrl as set'
                }
            }
        },
        'settingAbout': {
            url: '/setting/about',
            views: {
                'profile': {
                    templateUrl: 'profile/setting-about.html'
                }
            }
        },
        'settingAdvise': {
            url: '/setting/advise',
            views: {
                'profile': {
                    templateUrl: 'profile/setting-advise.html',
                    controller: 'AdviseCtrl as vm'

                }
            }
        },
        'settingAddress': {
            url: '/setting/address',
            views: {
                'profile': {
                    templateUrl: 'profile/setting-address.html'
                }
            }
        },

        //订单
        'orders': {
            url: '/orders',
            views: {
                'profile': {
                    templateUrl: 'profile/orders.html'
                }
            }
        },
        //我的收藏
        'collection': {
            url: '/collection',
            views: {
                'profile': {
                    templateUrl: 'profile/collection.html'
                }
            }
        },
        'collectionDetail': {
            url: '/collection/detail',
            views: {
                'profile': {
                    templateUrl: 'home/item-detail.html'
                }
            }
        },
        //我的优惠券
        'coupon': {
            url: '/coupon',
            views: {
                'profile': {
                    templateUrl: 'profile/coupon.html'
                }
            }
        }
    };

    //其他
    var otherConfig = {
        'login':{
            url: '/login',
            templateUrl: 'login.html',
            controller: 'LoginCtrl as login'
        }
    };

    app.config(function($stateProvider, $urlRouterProvider,
                        $ionicConfigProvider,$ionicFilterBarConfigProvider) {
        $ionicConfigProvider.scrolling.jsScrolling(true);
        $ionicConfigProvider.views.maxCache(10);
        $ionicConfigProvider.tabs.position('bottom');

        //$ionicFilterBarConfigProvider.theme('calm');
        $ionicFilterBarConfigProvider.clear('ion-close');
        $ionicFilterBarConfigProvider.search('ion-search');
        $ionicFilterBarConfigProvider.backdrop(false);
        $ionicFilterBarConfigProvider.transition('vertical');
        $ionicFilterBarConfigProvider.placeholder('网元名称');

        $stateProvider
            .state('app',appConfig.app)

            //告警
            .state('app.alarm',alarmConfig.alarm)
            .state('app.alarm-detail',alarmConfig.alarmDetail)

            //性能
            .state('app.perf',perfConfig.perf)

            //资源
            .state('app.res',resConfig.res)
            .state('app.res-list',resConfig.resList)
            .state('app.res-detail',resConfig.resDetail)

            //个人中心
            .state('app.profile',profileConfig.profile)
            .state('app.problems',profileConfig.problems)
            .state('app.problems-add',profileConfig.problemsAdd)
            .state('app.problems-detail',profileConfig.problemsDetail)

            .state('app.message',profileConfig.message)
            .state('app.message-logistics',profileConfig.messageLogistics)
            .state('app.message-activity',profileConfig.messageActivity)

            .state('app.account',profileConfig.account)
            .state('app.account-edit-img',profileConfig.accountEditImg)
            .state('app.account-edit-nickname',profileConfig.accountEditNickName)
            .state('app.account-edit-pwd',profileConfig.accountEditPwd)
            .state('app.account-edit-phone',profileConfig.accountEditPhone)

            .state('app.setting',profileConfig.setting)
            .state('app.setting-about',profileConfig.settingAbout)
            .state('app.setting-advise',profileConfig.settingAdvise)
            .state('app.setting-address',profileConfig.settingAddress)

            .state('app.coupon',profileConfig.coupon)

            .state('app.collection',profileConfig.collection)
            .state('app.collection-detail',profileConfig.collectionDetail)

            .state('app.orders',profileConfig.orders)

            //登录
            .state('login',otherConfig.login)
        ;

        $urlRouterProvider
            .otherwise('/login');
    });

    //Charts样式
    app.config(function (ChartJsProvider) {
        ChartJsProvider.setOptions({
            colours: ['#FF5252', '#f57c00'],
            responsive: true
        });
    });

    //IOS9补丁
    app.config(function($provide) {
        $provide.decorator('$browser', function($delegate, $window) {

            if (isIOS9UIWebView($window.navigator.userAgent)) {
                return applyIOS9Shim($delegate);
            }

            return $delegate;

            function isIOS9UIWebView(userAgent) {
                return /(iPhone|iPad|iPod).* OS 9_\d/.test(userAgent) && !/Version\/9\./.test(userAgent);
            }

            function applyIOS9Shim(browser) {
                var pendingLocationUrl = null;
                var originalUrlFn = browser.url;

                browser.url = function () {
                    if (arguments.length) {
                        pendingLocationUrl = arguments[0];
                        return originalUrlFn.apply(browser, arguments);
                    }

                    return pendingLocationUrl || originalUrlFn.apply(browser, arguments);
                };

                window.addEventListener('popstate', clearPendingLocationUrl, false);
                window.addEventListener('hashchange', clearPendingLocationUrl, false);

                function clearPendingLocationUrl() {
                    pendingLocationUrl = null;
                }

                return browser;
            }
        });
    });

})(angular.module(APP_NAME));
