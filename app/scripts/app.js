/**
 * INSPINIA - Responsive Admin Theme
 *
 */
(function () {
    angular.module('inspinia', [
        'ui.router',                    // Routing
        'oc.lazyLoad'    ,              // ocLazyLoad
        'ui.bootstrap' ,              // Bootstrap
        'ngStorage',
        'monospaced.qrcode',
        "xeditable"
    ]).run(function(editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    });
})();
