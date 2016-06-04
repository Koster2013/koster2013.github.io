/**
 * INSPINIA - Responsive Admin Theme
 * 2.5
 *
 * Custom scripts
 */

$(document).ready(function () {


    // Full height of sidebar
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarHeigh = $('nav.navbar-default').height();
        var wrapperHeigh = $('#page-wrapper').height();

        if(navbarHeigh > wrapperHeigh){
            $('#page-wrapper').css("min-height", navbarHeigh + "px");
        }

        if(navbarHeigh < wrapperHeigh){
            $('#page-wrapper').css("min-height", $(window).height()  + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            if (navbarHeigh > wrapperHeigh) {
                $('#page-wrapper').css("min-height", navbarHeigh - 60 + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }

    }

    $(window).bind("load resize scroll", function() {
        if(!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

    // Move right sidebar top after scroll
    $(window).scroll(function(){
        if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav') ) {
            $('#right-sidebar').addClass('sidebar-top');
        } else {
            $('#right-sidebar').removeClass('sidebar-top');
        }
    });

    setTimeout(function(){
        fix_height();
    });

});

// Minimalize menu when screen is less than 768px
$(function() {
    $(window).bind("load resize", function() {
        if ($(document).width() < 769) {
            $('body').addClass('body-small')
        } else {
            $('body').removeClass('body-small')
        }
    })
});

/**
 * INSPINIA - Responsive Admin Theme
 *
 */
(function () {
    angular.module('inspinia', [
        'ui.router',                    // Routing
        'ui.bootstrap' ,              // Bootstrap
        'oc.lazyLoad'    ,              // ocLazyLoad
        'ngStorage'
    ])
})();
/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider

        .state('dashboard', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
        .state('dashboard.main', {
            url: "/main",
            templateUrl: "views/dashboard/main/main.html",
            data: {pageTitle: 'Example view'}
        })
        /* Dashboard*/

        .state('dashboard.community', {
            url: "/community",
            templateUrl: "views/dashboard/community/community.html",
            data: {pageTitle: 'community view'}
        })
        .state('dashboard.coupon', {
            url: "/coupon",
            templateUrl: "views/dashboard/coupon/coupon.html",
            data: {pageTitle: 'Coupon view'}
        })
        .state('dashboard.infomaterial', {
            url: "/infomaterial",
            templateUrl: "views/dashboard/infomaterial/infomaterial.html",
            data: {pageTitle: 'infomaterial view'}
        })
        .state('dashboard.list', {
            url: "/list",
            templateUrl: "views/dashboard/list/list.html",
            data: {pageTitle: 'list view'},
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/footable/footable.all.min.js', 'css/plugins/footable/footable.core.css']
                        },
                        {
                            name: 'ui.footable',
                            files: ['js/plugins/footable/angular-footable.js']
                        }
                    ]);
                }
            }
        })
        .state('dashboard.promotion', {
            url: "/promotion",
            templateUrl: "views/dashboard/promotion/promotion.html",
            data: {pageTitle: 'promotion view'},
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/moment/moment.min.js']
                        },
                        {
                            name: 'ui.knob',
                            files: ['js/plugins/jsKnob/jquery.knob.js', 'js/plugins/jsKnob/angular-knob.js']
                        },
                        {
                            files: ['css/plugins/ionRangeSlider/ion.rangeSlider.css', 'css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css', 'js/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['css/plugins/nouslider/jquery.nouislider.css', 'js/plugins/nouslider/jquery.nouislider.min.js', 'js/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                        },
                        {
                            files: ['js/plugins/jasny/jasny-bootstrap.min.js']
                        },
                        {
                            files: ['css/plugins/clockpicker/clockpicker.css', 'js/plugins/clockpicker/clockpicker.js']
                        },
                        {
                            name: 'ui.switchery',
                            files: ['css/plugins/switchery/switchery.css', 'js/plugins/switchery/switchery.js', 'js/plugins/switchery/ng-switchery.js']
                        },
                        {
                            name: 'colorpicker.module',
                            files: ['css/plugins/colorpicker/colorpicker.css', 'js/plugins/colorpicker/bootstrap-colorpicker-module.js']
                        },
                        {
                            name: 'ngImgCrop',
                            files: ['js/plugins/ngImgCrop/ng-img-crop.js', 'css/plugins/ngImgCrop/ng-img-crop.css']
                        },
                        {
                            serie: true,
                            files: ['js/plugins/daterangepicker/daterangepicker.js', 'css/plugins/daterangepicker/daterangepicker-bs3.css']
                        },
                        {
                            name: 'daterangepicker',
                            files: ['js/plugins/daterangepicker/angular-daterangepicker.js']
                        },
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            name: 'ui.select',
                            files: ['js/plugins/ui-select/select.min.js', 'css/plugins/ui-select/select.min.css']
                        },
                        {
                            files: ['css/plugins/touchspin/jquery.bootstrap-touchspin.min.css', 'js/plugins/touchspin/jquery.bootstrap-touchspin.min.js']
                        }

                    ]);
                }
            }
        })
        .state('dashboard.tag', {
            url: "/tag",
            templateUrl: "views/dashboard/tag/tag.html",
            data: {pageTitle: 'tag view'}
        })
        .state('dashboard.window', {
            url: "/window",
            templateUrl: "views/dashboard/window/window.html",
            controller: WindowCtrl,
            data: {pageTitle: 'Window view'}
        })

        .state('dashboard.window-create', {
            url: "/window-create",
            templateUrl: "views/dashboard/window/window-create.html",
            controller: WindowCreateCtrl,
            data: {pageTitle: 'Schaufenster erstellen'}
        })
        .state('dashboard.profile', {
            url: "/profile",
            templateUrl: "views/dashboard/profile/profile.html",
            controller: wizardCtrl,
            data: {pageTitle: 'Wizard form'},
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            name: 'toaster',
                            files: ['css/plugins/steps/jquery.steps.css','js/plugins/toastr/toastr.min.js', 'css/plugins/toastr/toastr.min.css']
                        }
                    ]);
                }
            }
        })
        .state('dashboard.profile.step_one', {
            url: '/step_one',
            templateUrl: 'views/dashboard/profile/wizard/step_one.html',
            controller: ProfileCtrl
            //data: {pageTitle: 'Wizard form'}
        })
        .state('dashboard.profile.step_two', {
            url: '/step_two',
            templateUrl: 'views/dashboard/profile/wizard/step_two.html',
            controller: ProfileCtrl
        })
        .state('dashboard.profile.step_three', {
            url: '/step_three',
            templateUrl: 'views/dashboard/profile/wizard/step_three.html',
            controller: ProfileCtrl
        })

        /* Login Register */
        .state('login', {
            url: "/login",
            templateUrl: "views/login/login.html",
            data: {pageTitle: 'Login', specialClass: 'gray-bg'},
            controller: InitCtrl
        })
        .state('admin', {
            url: "/admin/:id",
            templateUrl: "views/admin/admin.html",
            data: {pageTitle: 'Admin', specialClass: 'gray-bg'},
            controller: AdminCtrl
        })
        .state('admin-board', {
            url: "/admin-board",
            templateUrl: "views/admin/admin-board.html",
            data: {pageTitle: 'Admin', specialClass: 'gray-bg'},
            controller: AdminBoardCtrl
        })
        .state('register', {
            url: "/register",
            templateUrl: "views/register/register.html",
            data: {pageTitle: 'Register', specialClass: 'gray-bg'}
        })
}


angular
    .module('inspinia')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
/**
 * INSPINIA - Responsive Admin Theme
 *
 */



/**
 * pageTitle - Directive for set Page title - mata title
 */
function pageTitle($rootScope, $timeout, $localStorage) {
    return {
        link: function (scope, element) {
            var listener = function (event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = 'INSPINIA | Responsive Admin Theme';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'INSPINIA | ' + toState.data.pageTitle;
                $timeout(function () {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
};

/**
 * sideNavigation - Directive for run metsiMenu on sidebar navigation
 */
function sideNavigation($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            // Call the metsiMenu plugin and plug it to sidebar navigation
            $timeout(function () {
                element.metisMenu();
            });
        }
    };
};

/**
 * iboxTools - Directive for iBox tools elements in right corner of ibox
 */
function iboxTools($timeout) {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'views/common/ibox_tools.html',
        controller: function ($scope, $element) {
            // Function for collapse ibox
            $scope.showhide = function () {
                var ibox = $element.closest('div.ibox');
                var icon = $element.find('i:first');
                var content = ibox.find('div.ibox-content');
                content.slideToggle(200);
                // Toggle icon from up to down
                icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                ibox.toggleClass('').toggleClass('border-bottom');
                $timeout(function () {
                    ibox.resize();
                    ibox.find('[id^=map-]').resize();
                }, 50);
            },
                // Function for close ibox
                $scope.closebox = function () {
                    var ibox = $element.closest('div.ibox');
                    ibox.remove();
                }
        }
    };
};

/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function minimalizaSidebar($timeout) {
    return {
        restrict: 'A',
        template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
        controller: function ($scope, $element) {
            $scope.minimalize = function () {
                $("body").toggleClass("mini-navbar");
                if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
                    // Hide menu in order to smoothly turn on when maximize menu
                    $('#side-menu').hide();
                    // For smoothly turn on menu
                    setTimeout(
                        function () {
                            $('#side-menu').fadeIn(400);
                        }, 200);
                } else if ($('body').hasClass('fixed-sidebar')) {
                    $('#side-menu').hide();
                    setTimeout(
                        function () {
                            $('#side-menu').fadeIn(400);
                        }, 100);
                } else {
                    // Remove all inline style from jquery fadeIn function to reset menu state
                    $('#side-menu').removeAttr('style');
                }
            }
        }
    };
};

/**
 * iboxTools with full screen - Directive for iBox tools elements in right corner of ibox with full screen option
 */
function iboxToolsFullScreen($timeout) {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'views/common/ibox_tools_full_screen.html',
        controller: function ($scope, $element) {
            // Function for collapse ibox
            $scope.showhide = function () {
                var ibox = $element.closest('div.ibox');
                var icon = $element.find('i:first');
                var content = ibox.find('div.ibox-content');
                content.slideToggle(200);
                // Toggle icon from up to down
                icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                ibox.toggleClass('').toggleClass('border-bottom');
                $timeout(function () {
                    ibox.resize();
                    ibox.find('[id^=map-]').resize();
                }, 50);
            };
            // Function for close ibox
            $scope.closebox = function () {
                var ibox = $element.closest('div.ibox');
                ibox.remove();
            };
            // Function for full screen
            $scope.fullscreen = function () {
                var ibox = $element.closest('div.ibox');
                var button = $element.find('i.fa-expand');
                $('body').toggleClass('fullscreen-ibox-mode');
                button.toggleClass('fa-expand').toggleClass('fa-compress');
                ibox.toggleClass('fullscreen');
                setTimeout(function () {
                    $(window).trigger('resize');
                }, 100);
            }
        }
    };
}


/**
 *
 * Pass all functions into module
 */
angular
    .module('inspinia')
    .directive('pageTitle', pageTitle)
    .directive('sideNavigation', sideNavigation)
    .directive('iboxTools', iboxTools)
    .directive('minimalizaSidebar', minimalizaSidebar)
    .directive('iboxToolsFullScreen', iboxToolsFullScreen);

/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl($scope) {

    $scope.firstName = "John";
    $scope.lastName = "Doe";
};

function ProfileCtrl($scope, $localStorage) {

    $scope.profile = $localStorage.profile;


    $scope.save = function () {
        $localStorage.profile = $scope.profile;
    }

};

function AdminCtrl($scope, $localStorage, $stateParams, $state) {


    $scope.profiles = $localStorage.profiles;
    angular.forEach($scope.profiles, function (value, key) {
        if (value._id === $state.params.id) {
            $scope.profile = value;
        }
    });
    $scope.addWindow = function () {
        $scope.profile.schaufenster.push("url eingeben " + Date.now());
    };
    $scope.removeWindow = function () {
        $scope.profile.schaufenster.splice($scope.profile.schaufenster.length - 1, 1);
    };
    $scope.addTermin = function () {
        $scope.profile.Termine.push(
            {
                "Titel": "XXX" + Date.now(),
                "Datum": "2016-04-13T22:00:00.000Z",
                "createDatum": "2016-04-22T11:45:37.249Z"
            }
        );
    };
    $scope.removeTermin = function () {
        $scope.profile.Termine.splice($scope.profile.Termine.length - 1, 1);
    };
    $scope.addNews = function () {
        $scope.profile.News.push(
            {
                "Titel": "Tipp des Monats" + Date.now(),
                "Beschreibung": "Tipp des Monats: Der Hut des Präsidenten. Laurain, Antoine. 20,- €  Weiterlesen: http://www.buecher-koenig-nk.de/shop/item/9783455650228",
                "createDatum": "2016-03-28T10:03:19.395Z"
            }
        );
    };
    $scope.removeNews = function () {
        $scope.profile.News.splice($scope.profile.News.length - 1, 1);
    };
};


function AdminBoardCtrl($scope, $localStorage) {

    $scope.date = new Date();
    $scope.profiles = $localStorage.profiles;

};


function WindowCtrl($scope, $localStorage) {
    $scope.window = {
        "schaufenster": [
            "http://85.214.84.247/schaufenster/SF__BuecherKoenig.jpg"
        ]
    }
};

function WindowCreateCtrl($scope, $localStorage) {
    $scope.model = {
        "schaufenster": [
            "http://85.214.84.247/schaufenster/SF__BuecherKoenig.jpg",
            "http://85.214.84.247/schaufenster/SF__BuecherKoenig1.jpg",
            "http://85.214.84.247/schaufenster/SF__BuecherKoenig2.jpg"
        ]
    }
};

function InitCtrl($localStorage, $http) {

    $http.get('mockdata.json')
        .then(function (res) {
            $localStorage.profiles = res.data;
        });


    $localStorage.profile = {
        "_id": "56c4b205fb11e67a3beffde5",
        "News": [
            {
                "Titel": "Tipp des Monats",
                "Beschreibung": "Tipp des Monats: Der Hut des Präsidenten. Laurain, Antoine. 20,- €  Weiterlesen: http://www.buecher-koenig-nk.de/shop/item/9783455650228",
                "createDatum": "2016-03-28T10:03:19.395Z"
            }
        ],
        "Aktionen": [],
        "Termine": [
            {
                "Titel": "Klaus Brabänder liest aus seinem Buch \"Für Eich\"",
                "Datum": "2016-04-13T22:00:00.000Z",
                "createDatum": "2016-04-22T11:45:37.249Z"
            }
        ],
        "Name": "Bücher König",
        "Strasse": "Bahnhofstr. 43",
        "PLZ": 66538,
        "Ort": "Neunkirchen",
        "Oeffnungszeiten": "\"Mo - Fr 09:00 bis 18:30 Uhr Sa 10:00 bis 16:00 Uhr\"",
        "Telefon": "06821 12921",
        "Email": "buecher.koenig@gmx.de",
        "Homepage": "http://www.buecher-koenig-nk.de/",
        "Ansprechperson": "Frau Anke Birk",
        "schaufenster": [
            "http://85.214.84.247/schaufenster/SF__BuecherKoenig.jpg"
        ],
        "IconUrl": "http://www.buecher-koenig-nk.de/sites/315830.umbreitshopsolution.de/files/buecher.koenig1.png",
        "Beschreibung": "\"Herzlich Willkommen bei Bücher König!\n\n\"\"Geistige Unterernährung ist ein ernstes Leiden. Wir haben die richtige Medizin für Sie\"\" (aus Morleys \"\"Das Haus der vergessenen Bücher\"\")\n\nLassen Sie sich von unserer schönen Buchhandlung im Herzen Neunkirchens begeistern, unsere Leidenschaft sind Literatur und gute Bücher - das seit 30 Jahren.\n\nWir sind ein literarischer und musikalischer Treffpunkt und beraten Sie immer gerne! Wir freuen uns über Ihr jahrelanges Vertrauen, die anregenden Gespräche, sei es im Laden oder bei einer unserer Veranstaltungen. Es ist schön, einige von Ihnen schon so lange zu kennen und täglich neue Literaturinteressierte kennenzulernen!\n\n\"",
        "showQrCode": false
    }
};

/**
 * wizardCtrl - Controller for wizard functions
 * used in Wizard view
 */
function wizardCtrl($scope, toaster) {
    $scope.processForm = function () {

        // toaster.success({ body:"Hi, welcome to Inspinia. This is example of Toastr notification box."});

        alert('Wizard completed');
    };
}

angular
    .module('inspinia')
    .controller('InitCtrl', InitCtrl)
    .controller('MainCtrl', MainCtrl)
    .controller('wizardCtrl', wizardCtrl)
    .controller('ProfileCtrl', ProfileCtrl)
    .controller('AdminCtrl', AdminCtrl)
    .controller('WindowCtrl', WindowCtrl)
    .controller('WindowCreateCtrl', WindowCreateCtrl)
    .controller('AdminBoardCtrl', AdminBoardCtrl);
(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['angular'], factory);
    } else if (root.hasOwnProperty('angular')) {
        // Browser globals (root is window), we don't register it.
        factory(root.angular);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('angular'));
    }
}(this , function (angular) {
    'use strict';

    // In cases where Angular does not get passed or angular is a truthy value
    // but misses .module we can fall back to using window.
    angular = (angular && angular.module ) ? angular : window.angular;


    function isStorageSupported($window, storageType) {

        // Some installations of IE, for an unknown reason, throw "SCRIPT5: Error: Access is denied"
        // when accessing window.localStorage. This happens before you try to do anything with it. Catch
        // that error and allow execution to continue.

        // fix 'SecurityError: DOM Exception 18' exception in Desktop Safari, Mobile Safari
        // when "Block cookies": "Always block" is turned on
        var supported;
        try {
            supported = $window[storageType];
        }
        catch(err) {
            supported = false;
        }

        // When Safari (OS X or iOS) is in private browsing mode, it appears as though localStorage
        // is available, but trying to call .setItem throws an exception below:
        // "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made to add something to storage that exceeded the quota."
        if(supported && storageType === 'localStorage') {
            var key = '__' + Math.round(Math.random() * 1e7);

            try {
                localStorage.setItem(key, key);
                localStorage.removeItem(key);
            }
            catch(err) {
                supported = false;
            }
        }

        return supported;
    }

    /**
     * @ngdoc overview
     * @name ngStorage
     */

    return angular.module('ngStorage', [])

    /**
     * @ngdoc object
     * @name ngStorage.$localStorage
     * @requires $rootScope
     * @requires $window
     */

        .provider('$localStorage', _storageProvider('localStorage'))

    /**
     * @ngdoc object
     * @name ngStorage.$sessionStorage
     * @requires $rootScope
     * @requires $window
     */

        .provider('$sessionStorage', _storageProvider('sessionStorage'));

    function _storageProvider(storageType) {
        var providerWebStorage = isStorageSupported(window, storageType);

        return function () {
            var storageKeyPrefix = 'ngStorage-';

            this.setKeyPrefix = function (prefix) {
                if (typeof prefix !== 'string') {
                    throw new TypeError('[ngStorage] - ' + storageType + 'Provider.setKeyPrefix() expects a String.');
                }
                storageKeyPrefix = prefix;
            };

            var serializer = angular.toJson;
            var deserializer = angular.fromJson;

            this.setSerializer = function (s) {
                if (typeof s !== 'function') {
                    throw new TypeError('[ngStorage] - ' + storageType + 'Provider.setSerializer expects a function.');
                }

                serializer = s;
            };

            this.setDeserializer = function (d) {
                if (typeof d !== 'function') {
                    throw new TypeError('[ngStorage] - ' + storageType + 'Provider.setDeserializer expects a function.');
                }

                deserializer = d;
            };

            this.supported = function() {
                return !!providerWebStorage;
            };

            // Note: This is not very elegant at all.
            this.get = function (key) {
                return providerWebStorage && deserializer(providerWebStorage.getItem(storageKeyPrefix + key));
            };

            // Note: This is not very elegant at all.
            this.set = function (key, value) {
                return providerWebStorage && providerWebStorage.setItem(storageKeyPrefix + key, serializer(value));
            };

            this.$get = [
                '$rootScope',
                '$window',
                '$log',
                '$timeout',
                '$document',

                function(
                    $rootScope,
                    $window,
                    $log,
                    $timeout,
                    $document
                ){

                    // The magic number 10 is used which only works for some keyPrefixes...
                    // See https://github.com/gsklee/ngStorage/issues/137
                    var prefixLength = storageKeyPrefix.length;

                    // #9: Assign a placeholder object if Web Storage is unavailable to prevent breaking the entire AngularJS app
                    // Note: recheck mainly for testing (so we can use $window[storageType] rather than window[storageType])
                    var isSupported = isStorageSupported($window, storageType),
                        webStorage = isSupported || ($log.warn('This browser does not support Web Storage!'), {setItem: angular.noop, getItem: angular.noop, removeItem: angular.noop}),
                        $storage = {
                            $default: function(items) {
                                for (var k in items) {
                                    angular.isDefined($storage[k]) || ($storage[k] = angular.copy(items[k]) );
                                }

                                $storage.$sync();
                                return $storage;
                            },
                            $reset: function(items) {
                                for (var k in $storage) {
                                    '$' === k[0] || (delete $storage[k] && webStorage.removeItem(storageKeyPrefix + k));
                                }

                                return $storage.$default(items);
                            },
                            $sync: function () {
                                for (var i = 0, l = webStorage.length, k; i < l; i++) {
                                    // #8, #10: `webStorage.key(i)` may be an empty string (or throw an exception in IE9 if `webStorage` is empty)
                                    (k = webStorage.key(i)) && storageKeyPrefix === k.slice(0, prefixLength) && ($storage[k.slice(prefixLength)] = deserializer(webStorage.getItem(k)));
                                }
                            },
                            $apply: function() {
                                var temp$storage;

                                _debounce = null;

                                if (!angular.equals($storage, _last$storage)) {
                                    temp$storage = angular.copy(_last$storage);
                                    angular.forEach($storage, function(v, k) {
                                        if (angular.isDefined(v) && '$' !== k[0]) {
                                            webStorage.setItem(storageKeyPrefix + k, serializer(v));
                                            delete temp$storage[k];
                                        }
                                    });

                                    for (var k in temp$storage) {
                                        webStorage.removeItem(storageKeyPrefix + k);
                                    }

                                    _last$storage = angular.copy($storage);
                                }
                            },
                            $supported: function() {
                                return !!isSupported;
                            }
                        },
                        _last$storage,
                        _debounce;

                    $storage.$sync();

                    _last$storage = angular.copy($storage);

                    $rootScope.$watch(function() {
                        _debounce || (_debounce = $timeout($storage.$apply, 100, false));
                    });

                    // #6: Use `$window.addEventListener` instead of `angular.element` to avoid the jQuery-specific `event.originalEvent`
                    $window.addEventListener && $window.addEventListener('storage', function(event) {
                        if (!event.key) {
                            return;
                        }

                        // Reference doc.
                        var doc = $document[0];

                        if ( (!doc.hasFocus || !doc.hasFocus()) && storageKeyPrefix === event.key.slice(0, prefixLength) ) {
                            event.newValue ? $storage[event.key.slice(prefixLength)] = deserializer(event.newValue) : delete $storage[event.key.slice(prefixLength)];

                            _last$storage = angular.copy($storage);

                            $rootScope.$apply();
                        }
                    });

                    $window.addEventListener && $window.addEventListener('beforeunload', function() {
                        $storage.$apply();
                    });

                    return $storage;
                }
            ];
        };
    }

}));/**
 * Created by MK on 14.05.2016.
 */
