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
            },
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

function AdminCtrl($scope, $localStorage, $stateParams, $state, $http) {

    $scope.Aktionsart = ["Aktion", "Event/Termin", "Neuigkeit", "Sonstiges"];
    $scope.selectedAktionsart = $scope.Aktionsart[1]; // Default the color to red

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

    $scope.addAktion = function () {
        $scope.profile.Aktionen.push(
            {
                "Titel": "Bitte Titel eingeben" + Date.now(),
                "Beschreibung": "Bitte Beschreibung eingeben",
                "createDatum": new Date()
            }
        );
    };
    $scope.removeAktion = function () {
        $scope.profile.Aktionen.splice($scope.profile.Aktionen.length - 1, 1);
    };

    $scope.addTermin = function () {
        $scope.profile.Termine.push(
            {
                "Titel": "Bitte Termin eingeben" + Date.now(),
                "Beschreibung": "Bitte Beschreibung eingeben" + Date.now(),
                "Datum": "2016-04-13T22:00:00.000Z",
                "createDatum": new Date()
            }
        );
    };
    $scope.removeTermin = function () {
        $scope.profile.Termine.splice($scope.profile.Termine.length - 1, 1);
    };
    $scope.addNews = function () {
        $scope.profile.News.push(
            {
                "Titel": "Bitte Titel eingeben" + Date.now(),
                "Beschreibung": "Bitte Beschreibung eingeben",
                "createDatum": new Date()
            }
        );
    };
    $scope.removeNews = function () {
        $scope.profile.News.splice($scope.profile.News.length - 1, 1);
    };

    $scope.saveData = function () {
        $http({
            url: 'http://85.214.84.247:3000/',
            method: "POST",
            data: {pass: "12domestixx34", data: $scope.profiles}
        })
            .then(function (response) {
                alert("success");
            },
            function (response) { // optional
                alert("failed");
            });
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

    $http.get('http://85.214.84.247:3000/?pass=12domestixx34')
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

!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=10)}([function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){n(this,t),this.startBin="101",this.endBin="101",this.middleBin="01010",this.Lbinary=["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],this.Gbinary=["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"],this.Rbinary=["1110010","1100110","1101100","1000010","1011100","1001110","1010000","1000100","1001000","1110100"]}return t.prototype.encode=function(t,e,n){var r="";n=n||"";for(var i=0;i<t.length;i++)"L"==e[i]?r+=this.Lbinary[t[i]]:"G"==e[i]?r+=this.Gbinary[t[i]]:"R"==e[i]&&(r+=this.Rbinary[t[i]]),i<t.length-1&&(r+=n);return r},t}();e["default"]=r},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;e>n;n++)t="0"+t;return t}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(e){n(this,t),this.string=e}return t.prototype.encode=function(){for(var t="110",e=0;e<this.string.length;e++){var n=parseInt(this.string[e]),i=n.toString(2);i=r(i,4-i.length);for(var o=0;o<i.length;o++)t+="0"==i[o]?"100":"110"}return t+="1001",{data:t,text:this.string}},t.prototype.valid=function(){return-1!==this.string.search(/^[0-9]+$/)},t}();e["default"]=i},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(e){n(this,t),this.bytes=[];for(var r=0;r<e.length;++r)this.bytes.push(e.charCodeAt(r));this.string=e.substring(1),this.encodings=[740,644,638,176,164,100,224,220,124,608,604,572,436,244,230,484,260,254,650,628,614,764,652,902,868,836,830,892,844,842,752,734,590,304,112,94,416,128,122,672,576,570,464,422,134,496,478,142,910,678,582,768,762,774,880,862,814,896,890,818,914,602,930,328,292,200,158,68,62,424,412,232,218,76,74,554,616,978,556,146,340,212,182,508,268,266,956,940,938,758,782,974,400,310,118,512,506,960,954,502,518,886,966,668,680,692,5379]}return t.prototype.encode=function(){var t,e=this.bytes,n=e.shift()-105;return 103===n?t=this.nextA(e,1):104===n?t=this.nextB(e,1):105===n&&(t=this.nextC(e,1)),{text:this.string.replace(/[^\x20-\x7E]/g,""),data:this.getEncoding(n)+t.result+this.getEncoding((t.checksum+n)%103)+this.getEncoding(106)}},t.prototype.getEncoding=function(t){return this.encodings[t]?(this.encodings[t]+1e3).toString(2):""},t.prototype.valid=function(){return-1!==this.string.search(/^[\x00-\x7F\xC8-\xD3]+$/)},t.prototype.nextA=function(t,e){if(t.length<=0)return{result:"",checksum:0};var n,r;if(t[0]>=200)r=t[0]-105,t.shift(),99===r?n=this.nextC(t,e+1):100===r?n=this.nextB(t,e+1):98===r?(t[0]=t[0]>95?t[0]-96:t[0],n=this.nextA(t,e+1)):n=this.nextA(t,e+1);else{var i=t[0];r=32>i?i+64:i-32,t.shift(),n=this.nextA(t,e+1)}var o=this.getEncoding(r),s=r*e;return{result:o+n.result,checksum:s+n.checksum}},t.prototype.nextB=function(t,e){if(t.length<=0)return{result:"",checksum:0};var n,r;t[0]>=200?(r=t[0]-105,t.shift(),99===r?n=this.nextC(t,e+1):101===r?n=this.nextA(t,e+1):98===r?(t[0]=t[0]<32?t[0]+96:t[0],n=this.nextB(t,e+1)):n=this.nextB(t,e+1)):(r=t[0]-32,t.shift(),n=this.nextB(t,e+1));var i=this.getEncoding(r),o=r*e;return{result:i+n.result,checksum:o+n.checksum}},t.prototype.nextC=function(t,e){if(t.length<=0)return{result:"",checksum:0};var n,r;t[0]>=200?(r=t[0]-105,t.shift(),n=100===r?this.nextB(t,e+1):101===r?this.nextA(t,e+1):this.nextC(t,e+1)):(r=10*(t[0]-48)+t[1]-48,t.shift(),t.shift(),n=this.nextC(t,e+1));var i=this.getEncoding(r),o=r*e;return{result:i+n.result,checksum:o+n.checksum}},t}();e["default"]=r},function(t,e){"use strict";function n(t){for(var e=0,n=0;n<t.length;n++){var r=parseInt(t[n]);e+=(n+t.length)%2===0?r:2*r%10+Math.floor(2*r/10)}return(10-e%10)%10}function r(t){for(var e=0,n=[2,3,4,5,6,7],r=0;r<t.length;r++){var i=parseInt(t[t.length-1-r]);e+=n[r%n.length]*i}return(11-e%11)%11}Object.defineProperty(e,"__esModule",{value:!0}),e.mod10=n,e.mod11=r},function(t,e){"use strict";function n(t,e){var n,r={};for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);for(n in e)e.hasOwnProperty(n)&&"undefined"!=typeof e[n]&&(r[n]=e[n]);return r}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16),i=n(15),o=n(22),s=n(25),a=n(24),u=n(30),f=n(31),c=n(23);e["default"]={CODE39:r.CODE39,CODE128:i.CODE128,CODE128A:i.CODE128A,CODE128B:i.CODE128B,CODE128C:i.CODE128C,EAN13:o.EAN13,EAN8:o.EAN8,EAN5:o.EAN5,EAN2:o.EAN2,UPC:o.UPC,ITF14:s.ITF14,ITF:a.ITF,MSI:u.MSI,MSI10:u.MSI10,MSI11:u.MSI11,MSI1010:u.MSI1010,MSI1110:u.MSI1110,pharmacode:f.pharmacode,GenericBarcode:c.GenericBarcode}},function(t,e){"use strict";function n(t){return t.marginTop=t.marginTop||t.margin,t.marginBottom=t.marginBottom||t.margin,t.marginRight=t.marginRight||t.margin,t.marginLeft=t.marginLeft||t.margin,t}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){var n={};for(var r in e)t.hasAttribute("jsbarcode-"+r.toLowerCase())&&(n[r]=t.getAttribute("jsbarcode-"+r.toLowerCase())),t.hasAttribute("data-"+r.toLowerCase())&&(n[r]=t.getAttribute("data-"+r.toLowerCase()));return n.value=t.getAttribute("jsbarcode-value")||t.getAttribute("data-value"),n=(0,s["default"])(n)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(32),s=r(o);e["default"]=i},function(t,e){"use strict";function n(t){function e(t){if(Array.isArray(t))for(var r=0;r<t.length;r++)e(t[r]);else t.text=t.text||"",t.data=t.data||"",n.push(t)}var n=[];return e(t),n}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(33),o=r(i),s=n(34),a=r(s);e["default"]={canvas:o["default"],svg:a["default"]}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){_.prototype[e]=_.prototype[e.toUpperCase()]=_.prototype[e.toLowerCase()]=function(n,r){var i=(0,p["default"])(this._options,r),s=t[e],a=o(n,s,i);return this._encodings.push(a),this}}function o(t,e,n){t=""+t;var r=new e(t,n);if(!r.valid()){if(n.valid===O.valid)throw new Error('"'+t+'" is not a valid input for '+C);n.valid(!1)}var i=r.encode();i=(0,y["default"])(i);for(var o=0;o<i.length;o++)i[o].options=(0,p["default"])(n,i[o].options);return i}function s(){return c["default"].CODE128?"CODE128":Object.keys(c["default"])[0]}function a(t,e,n){var r=l["default"][t.renderer];e=(0,y["default"])(e);for(var i=0;i<e.length;i++)e[i].options=(0,p["default"])(n,e[i].options),(0,b["default"])(e[i].options);(0,b["default"])(n),r(t.element,e,n),t.afterRender&&t.afterRender()}function u(t){if("string"==typeof t){var e=document.querySelectorAll(t);if(0===e.length)throw new Error("No element found");for(var n=[],r=0;r<e.length;r++)n.push(u(e[r]));return n}if(Array.isArray(t)){for(var n=[],r=0;r<t.length;r++)n.push(u(t[r]));return n}if("undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLImageElement){var i=document.createElement("canvas");return{element:i,options:(0,m["default"])(t,O),renderer:"canvas",afterRender:function(){t.setAttribute("src",i.toDataURL())}}}if("undefined"!=typeof SVGElement&&t instanceof SVGElement)return{element:t,options:(0,m["default"])(t,O),renderer:"svg"};if("undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement)return{element:t,options:(0,m["default"])(t,O),renderer:"canvas"};if(t.getContext)return{element:t,renderer:"canvas"};throw new Error("Not supported type to render on.")}var f=n(5),c=r(f),h=n(9),l=r(h),d=n(4),p=r(d),g=n(8),y=r(g),v=n(6),b=r(v),x=n(7),m=r(x),_=function(){},w=function(t,e,n){var r=new _;if("undefined"==typeof t)throw Error("No element to render on was provided.");return r._renderProperties=u(t),r._encodings=[],r._options=O,"undefined"!=typeof e&&(n=n||{},n.format||(n.format=s()),r.options(n),r[n.format](e,n),r.render()),r};w.getModule=function(t){return c["default"][t]};for(var C in c["default"])c["default"].hasOwnProperty(C)&&i(c["default"],C);_.prototype.options=function(t){return this._options=(0,p["default"])(this._options,t),this},_.prototype.blank=function(t){var e="0".repeat(t);return this._encodings.push({data:e}),this},_.prototype.init=function(){Array.isArray(this._renderProperties)||(this._renderProperties=[this._renderProperties]);var t;for(var e in this._renderProperties){t=this._renderProperties[e];var n=(0,p["default"])(this._options,t.options);"auto"==n.format&&(n.format=s());var r=n.value,i=c["default"][n.format.toUpperCase()],u=o(r,i,n);a(t,u,n)}},_.prototype.render=function(){if(Array.isArray(this._renderProperties))for(var t in this._renderProperties)a(this._renderProperties[t],this._encodings,this._options);else a(this._renderProperties,this._encodings,this._options);return this._options.valid(!0),this},"undefined"!=typeof window&&(window.JsBarcode=w),"undefined"!=typeof jQuery&&(jQuery.fn.JsBarcode=function(t,e){var n=[];return jQuery(this).each(function(){n.push(this)}),w(n,t,e)}),t.exports=w;var O={width:2,height:100,format:"auto",displayValue:!0,fontOptions:"",font:"monospace",textAlign:"center",textPosition:"bottom",textMargin:2,fontSize:20,background:"#ffffff",lineColor:"#000000",margin:10,marginTop:void 0,marginBottom:void 0,marginLeft:void 0,marginRight:void 0,valid:function(t){}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),u=r(a),f=function(t){function e(n){return i(this,e),o(this,t.call(this,String.fromCharCode(208)+n))}return s(e,t),e.prototype.valid=function(){return-1!==this.string.search(/^[\x00-\x5F\xC8-\xCF]+$/)},e}(u["default"]);e["default"]=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),u=r(a),f=function(t){function e(n){return i(this,e),o(this,t.call(this,String.fromCharCode(209)+n))}return s(e,t),e.prototype.valid=function(){return-1!==this.string.search(/^[\x20-\x7F\xC8-\xCF]+$/)},e}(u["default"]);e["default"]=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),u=r(a),f=function(t){function e(n){return i(this,e),o(this,t.call(this,String.fromCharCode(210)+n))}return s(e,t),e.prototype.valid=function(){return-1!==this.string.search(/^(\xCF*[0-9]{2}\xCF*)+$/)},e}(u["default"]);e["default"]=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e,n=t.match(/^[\x00-\x5F\xC8-\xCF]*/)[0].length,r=t.match(/^[\x20-\x7F\xC8-\xCF]*/)[0].length,i=t.match(/^(\xCF*[0-9]{2}\xCF*)*/)[0].length;return e=i>=2?String.fromCharCode(210)+c(t):n>r?String.fromCharCode(208)+u(t):String.fromCharCode(209)+f(t),e=e.replace(/[\xCD\xCE]([^])[\xCD\xCE]/,function(t,e){return String.fromCharCode(203)+e})}function u(t){var e=t.match(/^([\x00-\x5F\xC8-\xCF]+?)(([0-9]{2}){2,})([^0-9]|$)/);if(e)return e[1]+String.fromCharCode(204)+c(t.substring(e[1].length));var n=t.match(/^[\x00-\x5F\xC8-\xCF]+/);return n[0].length===t.length?t:n[0]+String.fromCharCode(205)+f(t.substring(n[0].length))}function f(t){var e=t.match(/^([\x20-\x7F\xC8-\xCF]+?)(([0-9]{2}){2,})([^0-9]|$)/);if(e)return e[1]+String.fromCharCode(204)+c(t.substring(e[1].length));var n=t.match(/^[\x20-\x7F\xC8-\xCF]+/);return n[0].length===t.length?t:n[0]+String.fromCharCode(206)+u(t.substring(n[0].length))}function c(t){var e=t.match(/^(\xCF*[0-9]{2}\xCF*)+/)[0],n=e.length;if(n===t.length)return t;t=t.substring(n);var r=t.match(/^[\x00-\x5F\xC8-\xCF]*/)[0].length,i=t.match(/^[\x20-\x7F\xC8-\xCF]*/)[0].length;return r>=i?e+String.fromCharCode(206)+u(t):e+String.fromCharCode(205)+f(t)}Object.defineProperty(e,"__esModule",{value:!0});var h=n(2),l=r(h),d=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));if(-1!==n.search(/^[\x00-\x7F\xC8-\xD3]+$/))var r=o(this,t.call(this,a(n)));else var r=o(this,t.call(this,n));return o(r)}return s(e,t),e}(l["default"]);e["default"]=d},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CODE128C=e.CODE128B=e.CODE128A=e.CODE128=void 0;var i=n(14),o=r(i),s=n(11),a=r(s),u=n(12),f=r(u),c=n(13),h=r(c);e.CODE128=o["default"],e.CODE128A=a["default"],e.CODE128B=f["default"],e.CODE128C=h["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(e,r){n(this,t),this.string=e.toUpperCase(),this.mod43Enabled=r.mod43||!1,this.characters=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","."," ","$","/","+","%","*"],this.encodings=[20957,29783,23639,30485,20951,29813,23669,20855,29789,23645,29975,23831,30533,22295,30149,24005,21623,29981,23837,22301,30023,23879,30545,22343,30161,24017,21959,30065,23921,22385,29015,18263,29141,17879,29045,18293,17783,29021,18269,17477,17489,17681,20753,35770]}return t.prototype.getEncoding=function(t){return this.getBinary(this.characterValue(t))},t.prototype.getBinary=function(t){return this.encodings[t].toString(2)},t.prototype.getCharacter=function(t){return this.characters[t]},t.prototype.characterValue=function(t){return this.characters.indexOf(t)},t.prototype.encode=function(){for(var t=this.string,e=this.getEncoding("*"),n=0;n<this.string.length;n++)e+=this.getEncoding(this.string[n])+"0";if(this.mod43Enabled){for(var r=0,n=0;n<this.string.length;n++)r+=this.characterValue(this.string[n]);r%=43,e+=this.getBinary(r)+"0",t+=this.getCharacter(r)}return e+=this.getEncoding("*"),{data:e,text:t}},t.prototype.valid=function(){return-1!==this.string.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/)},t}();e.CODE39=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),s=r(o),a=function(){function t(e,n){i(this,t),-1!==e.search(/^[0-9]{12}$/)?this.string=e+this.checksum(e):this.string=e,this.displayValue=n.displayValue,this.structure=["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"],n.fontSize>10*n.width?this.fontSize=10*n.width:this.fontSize=n.fontSize,this.guardHeight=n.height+this.fontSize/2+n.textMargin,this.lastChar=n.lastChar}return t.prototype.valid=function(){return-1!==this.string.search(/^[0-9]{13}$/)&&this.string[12]==this.checksum(this.string)},t.prototype.encode=function(){var t=new s["default"],e=[],n=this.structure[this.string[0]],r=this.string.substr(1,6),i=this.string.substr(7,6);return this.displayValue&&e.push({data:"000000000000",text:this.string[0],options:{textAlign:"left",fontSize:this.fontSize}}),e.push({data:"101",options:{height:this.guardHeight}}),e.push({data:t.encode(r,n),text:r,options:{fontSize:this.fontSize}}),e.push({data:"01010",options:{height:this.guardHeight}}),e.push({data:t.encode(i,"RRRRRR"),text:i,options:{fontSize:this.fontSize}}),e.push({data:"101",options:{height:this.guardHeight}}),this.lastChar&&this.displayValue&&(e.push({data:"00"}),e.push({data:"00000",text:this.lastChar,options:{fontSize:this.fontSize}})),e},t.prototype.checksum=function(t){var e,n=0;for(e=0;12>e;e+=2)n+=parseInt(t[e]);for(e=1;12>e;e+=2)n+=3*parseInt(t[e]);return(10-n%10)%10},t}();e["default"]=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),s=r(o),a=function(){function t(e){i(this,t),this.string=e,this.structure=["LL","LG","GL","GG"]}return t.prototype.valid=function(){return-1!==this.string.search(/^[0-9]{2}$/)},t.prototype.encode=function(){var t=new s["default"],e=this.structure[parseInt(this.string)%4],n="1011";return n+=t.encode(this.string,e,"01"),{data:n,text:this.string}},t}();e["default"]=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),s=r(o),a=function(){function t(e){i(this,t),this.string=e,this.structure=["GGLLL","GLGLL","GLLGL","GLLLG","LGGLL","LLGGL","LLLGG","LGLGL","LGLLG","LLGLG"]}return t.prototype.valid=function(){return-1!==this.string.search(/^[0-9]{5}$/)},t.prototype.encode=function(){var t=new s["default"],e=this.checksum(),n="1011";return n+=t.encode(this.string,this.structure[e],"01"),{data:n,text:this.string}},t.prototype.checksum=function(){var t=0;return t+=3*parseInt(this.string[0]),t+=9*parseInt(this.string[1]),t+=3*parseInt(this.string[2]),t+=9*parseInt(this.string[3]),t+=3*parseInt(this.string[4]),t%10},t}();e["default"]=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),s=r(o),a=function(){function t(e){i(this,t),-1!==e.search(/^[0-9]{7}$/)?this.string=e+this.checksum(e):this.string=e}return t.prototype.valid=function(){return-1!==this.string.search(/^[0-9]{8}$/)&&this.string[7]==this.checksum(this.string)},t.prototype.encode=function(){var t=new s["default"],e="",n=this.string.substr(0,4),r=this.string.substr(4,4);return e+=t.startBin,e+=t.encode(n,"LLLL"),e+=t.middleBin,e+=t.encode(r,"RRRR"),e+=t.endBin,{data:e,text:this.string}},t.prototype.checksum=function(t){var e,n=0;for(e=0;7>e;e+=2)n+=3*parseInt(t[e]);for(e=1;7>e;e+=2)n+=parseInt(t[e]);return(10-n%10)%10},t}();e["default"]=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),s=r(o),a=function(){function t(e,n){i(this,t),-1!==e.search(/^[0-9]{11}$/)?this.string=e+this.checksum(e):this.string=e,this.displayValue=n.displayValue,n.fontSize>10*n.width?this.fontSize=10*n.width:this.fontSize=n.fontSize,this.guardHeight=n.height+this.fontSize/2+n.textMargin}return t.prototype.valid=function(){return-1!==this.string.search(/^[0-9]{12}$/)&&this.string[11]==this.checksum(this.string)},t.prototype.encode=function(){var t=new s["default"],e=[];return this.displayValue&&e.push({data:"00000000",text:this.string[0],options:{textAlign:"left",fontSize:this.fontSize}}),e.push({data:"101"+t.encode(this.string[0],"L"),options:{height:this.guardHeight}}),e.push({data:t.encode(this.string.substr(1,5),"LLLLL"),text:this.string.substr(1,5),options:{fontSize:this.fontSize}}),e.push({data:"01010",options:{height:this.guardHeight}}),e.push({data:t.encode(this.string.substr(6,5),"RRRRR"),text:this.string.substr(6,5),options:{fontSize:this.fontSize}}),e.push({data:t.encode(this.string[11],"R")+"101",options:{height:this.guardHeight}}),this.displayValue&&e.push({data:"00000000",text:this.string[11],options:{textAlign:"right",fontSize:this.fontSize}}),e},t.prototype.checksum=function(t){var e,n=0;for(e=1;11>e;e+=2)n+=parseInt(t[e]);for(e=0;11>e;e+=2)n+=3*parseInt(t[e]);return(10-n%10)%10},t}();e["default"]=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.UPC=e.EAN2=e.EAN5=e.EAN8=e.EAN13=void 0;var i=n(17),o=r(i),s=n(20),a=r(s),u=n(19),f=r(u),c=n(18),h=r(c),l=n(21),d=r(l);e.EAN13=o["default"],e.EAN8=a["default"],e.EAN5=f["default"],e.EAN2=h["default"],e.UPC=d["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(e){n(this,t),this.string=e}return t.prototype.encode=function(){return{data:"10101010101010101010101010101010101010101",text:this.string}},t.prototype.valid=function(){return!0},t}();e.GenericBarcode=r},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(e){n(this,t),this.string=e,this.binaryRepresentation={0:"00110",1:"10001",2:"01001",3:"11000",4:"00101",5:"10100",6:"01100",7:"00011",8:"10010",9:"01010"}}return t.prototype.valid=function(){return-1!==this.string.search(/^([0-9]{2})+$/)},t.prototype.encode=function(){for(var t="1010",e=0;e<this.string.length;e+=2)t+=this.calculatePair(this.string.substr(e,2));return t+="11101",{data:t,text:this.string}},t.prototype.calculatePair=function(t){for(var e="",n=this.binaryRepresentation[t[0]],r=this.binaryRepresentation[t[1]],i=0;5>i;i++)e+="1"==n[i]?"111":"1",e+="1"==r[i]?"000":"0";return e},t}();e.ITF=r},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(e){n(this,t),this.string=e,-1!==e.search(/^[0-9]{13}$/)&&(this.string+=this.checksum(e)),this.binaryRepresentation={0:"00110",1:"10001",2:"01001",3:"11000",4:"00101",5:"10100",6:"01100",7:"00011",8:"10010",9:"01010"}}return t.prototype.valid=function(){return-1!==this.string.search(/^[0-9]{14}$/)&&this.string[13]==this.checksum()},t.prototype.encode=function(){for(var t="1010",e=0;14>e;e+=2)t+=this.calculatePair(this.string.substr(e,2));return t+="11101",{data:t,text:this.string}},t.prototype.calculatePair=function(t){for(var e="",n=this.binaryRepresentation[t[0]],r=this.binaryRepresentation[t[1]],i=0;5>i;i++)e+="1"==n[i]?"111":"1",e+="1"==r[i]?"000":"0";return e},t.prototype.checksum=function(){for(var t=0,e=0;13>e;e++)t+=parseInt(this.string[e])*(3-e%2*2);return 10-t%10},t}();e.ITF14=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),u=r(a),f=n(3),c=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.string+=(0,f.mod10)(r.string),r}return s(e,t),e}(u["default"]);e["default"]=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),u=r(a),f=n(3),c=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.string+=(0,f.mod10)(r.string),r.string+=(0,f.mod10)(r.string),r}return s(e,t),e}(u["default"]);e["default"]=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),u=r(a),f=n(3),c=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.string+=(0,f.mod11)(r.string),r}return s(e,t),e}(u["default"]);e["default"]=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),u=r(a),f=n(3),c=function(t){function e(n){i(this,e);var r=o(this,t.call(this,n));return r.string+=(0,f.mod11)(r.string),r.string+=(0,f.mod10)(r.string),r}return s(e,t),e}(u["default"]);e["default"]=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.MSI1110=e.MSI1010=e.MSI11=e.MSI10=e.MSI=void 0;var i=n(1),o=r(i),s=n(26),a=r(s),u=n(28),f=r(u),c=n(27),h=r(c),l=n(29),d=r(l);e.MSI=o["default"],e.MSI10=a["default"],e.MSI11=f["default"],e.MSI1010=h["default"],e.MSI1110=d["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(e){n(this,t),this.number=parseInt(e,10)}return t.prototype.encode=function(){for(var t=this.number,e="";!isNaN(t)&&0!=t;)t%2===0?(e="11100"+e,t=(t-2)/2):(e="100"+e,t=(t-1)/2);return e=e.slice(0,-2),{data:e,text:this.number+""}},t.prototype.valid=function(){return this.number>=3&&this.number<=131070},t}();e.pharmacode=r},function(t,e){"use strict";function n(t){var e=["width","height","textMargin","fontSize","margin","marginTop","marginBottom","marginLeft","marginRight"];for(var n in e)n=e[n],"string"==typeof t[n]&&(t[n]=parseInt(t[n],10));return"string"==typeof t.displayValue&&(t.displayValue="false"!=t.displayValue),t}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e,n){if(!t.getContext)throw new Error("The browser does not support canvas.");o(t,n,e);for(var r=0;r<e.length;r++){var i=(0,h["default"])(n,e[r].options);s(t,i,e[r]),a(t,i,e[r]),u(t,e[r])}f(t)}function o(t,e,n){var r=t.getContext("2d");r.save();for(var i=0,o=0,s=0;s<n.length;s++){var a=(0,h["default"])(a,n[s].options);r.font=a.fontOptions+" "+a.fontSize+"px "+a.font;var u=r.measureText(n[s].text).width,f=n[s].data.length*a.width;n[s].width=Math.ceil(Math.max(u,f));var c=a.height+(a.displayValue&&n[s].text.length>0?a.fontSize:0)+a.textMargin+a.marginTop+a.marginBottom,l=0;a.displayValue&&u>f&&("center"==a.textAlign?l=Math.floor((u-f)/2):"left"==a.textAlign?l=0:"right"==a.textAlign&&(l=Math.floor(u-f))),n[s].barcodePadding=l,c>o&&(o=c),i+=n[s].width}t.width=i+e.marginLeft+e.marginRight,t.height=o,r.clearRect(0,0,t.width,t.height),e.background&&(r.fillStyle=e.background,r.fillRect(0,0,t.width,t.height)),r.translate(e.marginLeft,0)}function s(t,e,n){var r,i,o=t.getContext("2d"),s=n.data;r="top"==e.textPosition?e.marginTop+e.fontSize+e.textMargin:e.marginTop,i=e.height,o.fillStyle=e.lineColor;for(var a=0;a<s.length;a++){var u=a*e.width+n.barcodePadding;"1"===s[a]?o.fillRect(u,r,e.width,e.height):s[a]&&o.fillRect(u,r,e.width,e.height*s[a])}}function a(t,e,n){var r=t.getContext("2d"),i=e.fontOptions+" "+e.fontSize+"px "+e.font;if(e.displayValue){var o,s;s="top"==e.textPosition?e.marginTop+e.fontSize-e.textMargin:e.height+e.textMargin+e.marginTop+e.fontSize,r.font=i,"left"==e.textAlign||n.barcodePadding>0?(o=0,r.textAlign="left"):"right"==e.textAlign?(o=n.width-1,r.textAlign="right"):(o=n.width/2,r.textAlign="center"),r.fillText(n.text,o,s)}}function u(t,e){var n=t.getContext("2d");n.translate(e.width,0)}function f(t){var e=t.getContext("2d");e.restore()}Object.defineProperty(e,"__esModule",{value:!0});var c=n(4),h=r(c);e["default"]=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function i(t,e,n){var r=n.marginLeft;o(t,n,e);for(var i=0;i<e.length;i++){var u=(0,d["default"])(n,e[i].options),h=f(r,u.marginTop,t);c(h,u,e[i]),
    s(h,u,e[i]),a(h,u,e[i]),r+=e[i].width}}function o(t,e,n){for(;t.firstChild;)t.removeChild(t.firstChild);for(var r=0,i=0,o=0;o<n.length;o++){var s=(0,d["default"])(s,n[o].options),a=u(n[o].text,t,s),f=n[o].data.length*s.width;n[o].width=Math.ceil(Math.max(a,f));var c=s.height+(s.displayValue&&n[o].text.length>0?s.fontSize:0)+s.textMargin+s.marginTop+s.marginBottom,h=0;s.displayValue&&a>f&&("center"==s.textAlign?h=Math.floor((a-f)/2):"left"==s.textAlign?h=0:"right"==s.textAlign&&(h=Math.floor(a-f))),n[o].barcodePadding=h,c>i&&(i=c),r+=n[o].width}var l=r+e.marginLeft+e.marginRight,g=i;t.setAttribute("width",l+"px"),t.setAttribute("height",g+"px"),t.setAttribute("x","0px"),t.setAttribute("y","0px"),t.setAttribute("viewBox","0 0 "+l+" "+g),t.setAttribute("xmlns",p),t.setAttribute("version","1.1"),t.style.transform="translate(0,0)",e.background&&(t.style.background=e.background)}function s(t,e,n){var r,i,o=n.data;r="top"==e.textPosition?e.fontSize+e.textMargin:0,i=e.height;for(var s=0,a=0;a<o.length;a++){var u=a*e.width+n.barcodePadding;"1"===o[a]?s++:s>0&&(h(u-e.width*s,r,e.width*s,e.height,t),s=0)}s>0&&h(u-e.width*(s-1),r,e.width*s,e.height,t)}function a(t,e,n){var r=document.createElementNS(p,"text");if(e.displayValue){var i,o;r.setAttribute("style","font:"+e.fontOptions+" "+e.fontSize+"px "+e.font),o="top"==e.textPosition?e.fontSize-e.textMargin:e.height+e.textMargin+e.fontSize,"left"==e.textAlign||n.barcodePadding>0?(i=0,r.setAttribute("text-anchor","start")):"right"==e.textAlign?(i=n.width-1,r.setAttribute("text-anchor","end")):(i=n.width/2,r.setAttribute("text-anchor","middle")),r.setAttribute("x",i),r.setAttribute("y",o),r.appendChild(document.createTextNode(n.text)),t.appendChild(r)}}function u(t,e,n){var r=document.createElement("canvas").getContext("2d");r.font=n.fontOptions+" "+n.fontSize+"px "+n.font;var i=r.measureText(t).width;return i}function f(t,e,n){var r=document.createElementNS(p,"g");return r.setAttribute("transform","translate("+t+", "+e+")"),n.appendChild(r),r}function c(t,e,n){t.setAttribute("style","fill:"+e.lineColor+";")}function h(t,e,n,r,i){var o=document.createElementNS(p,"rect");o.setAttribute("x",t),o.setAttribute("y",e),o.setAttribute("width",n),o.setAttribute("height",r),i.appendChild(o)}Object.defineProperty(e,"__esModule",{value:!0});var l=n(4),d=r(l);e["default"]=i;var p="http://www.w3.org/2000/svg"}]);