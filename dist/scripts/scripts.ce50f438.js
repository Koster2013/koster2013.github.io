function config($stateProvider,$urlRouterProvider){$urlRouterProvider.otherwise("/login"),$stateProvider.state("dashboard",{"abstract":!0,url:"/index",templateUrl:"views/common/content.html"}).state("dashboard.main",{url:"/main",templateUrl:"views/dashboard/main/main.html",data:{pageTitle:"Example view"}}).state("dashboard.community",{url:"/community",templateUrl:"views/dashboard/community/community.html",data:{pageTitle:"community view"}}).state("dashboard.coupon",{url:"/coupon",templateUrl:"views/dashboard/coupon/coupon.html",data:{pageTitle:"Coupon view"}}).state("dashboard.infomaterial",{url:"/infomaterial",templateUrl:"views/dashboard/infomaterial/infomaterial.html",data:{pageTitle:"infomaterial view"}}).state("dashboard.list",{url:"/list",templateUrl:"views/dashboard/list/list.html",data:{pageTitle:"list view"},resolve:{loadPlugin:function($ocLazyLoad){return $ocLazyLoad.load([{files:["js/plugins/footable/footable.all.min.js","css/plugins/footable/footable.core.css"]},{name:"ui.footable",files:["js/plugins/footable/angular-footable.js"]}])}}}).state("dashboard.promotion",{url:"/promotion",templateUrl:"views/dashboard/promotion/promotion.html",data:{pageTitle:"promotion view"},resolve:{loadPlugin:function($ocLazyLoad){return $ocLazyLoad.load([{files:["js/plugins/moment/moment.min.js"]},{name:"ui.knob",files:["js/plugins/jsKnob/jquery.knob.js","js/plugins/jsKnob/angular-knob.js"]},{files:["css/plugins/ionRangeSlider/ion.rangeSlider.css","css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css","js/plugins/ionRangeSlider/ion.rangeSlider.min.js"]},{insertBefore:"#loadBefore",name:"localytics.directives",files:["css/plugins/chosen/chosen.css","js/plugins/chosen/chosen.jquery.js","js/plugins/chosen/chosen.js"]},{name:"nouislider",files:["css/plugins/nouslider/jquery.nouislider.css","js/plugins/nouslider/jquery.nouislider.min.js","js/plugins/nouslider/angular-nouislider.js"]},{name:"datePicker",files:["css/plugins/datapicker/angular-datapicker.css","js/plugins/datapicker/angular-datepicker.js"]},{files:["js/plugins/jasny/jasny-bootstrap.min.js"]},{files:["css/plugins/clockpicker/clockpicker.css","js/plugins/clockpicker/clockpicker.js"]},{name:"ui.switchery",files:["css/plugins/switchery/switchery.css","js/plugins/switchery/switchery.js","js/plugins/switchery/ng-switchery.js"]},{name:"colorpicker.module",files:["css/plugins/colorpicker/colorpicker.css","js/plugins/colorpicker/bootstrap-colorpicker-module.js"]},{name:"ngImgCrop",files:["js/plugins/ngImgCrop/ng-img-crop.js","css/plugins/ngImgCrop/ng-img-crop.css"]},{serie:!0,files:["js/plugins/daterangepicker/daterangepicker.js","css/plugins/daterangepicker/daterangepicker-bs3.css"]},{name:"daterangepicker",files:["js/plugins/daterangepicker/angular-daterangepicker.js"]},{files:["css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css"]},{name:"ui.select",files:["js/plugins/ui-select/select.min.js","css/plugins/ui-select/select.min.css"]},{files:["css/plugins/touchspin/jquery.bootstrap-touchspin.min.css","js/plugins/touchspin/jquery.bootstrap-touchspin.min.js"]}])}}}).state("dashboard.tag",{url:"/tag",templateUrl:"views/dashboard/tag/tag.html",data:{pageTitle:"tag view"}}).state("dashboard.window",{url:"/window",templateUrl:"views/dashboard/window/window.html",data:{pageTitle:"Window view"}}).state("dashboard.window-create",{url:"/window-create",templateUrl:"views/dashboard/window/window-create.html",data:{pageTitle:"Schaufenster erstellen"}}).state("dashboard.profile",{url:"/profile",templateUrl:"views/dashboard/profile/profile.html",controller:wizardCtrl,data:{pageTitle:"Wizard form"},resolve:{loadPlugin:function($ocLazyLoad){return $ocLazyLoad.load([{insertBefore:"#loadBefore",name:"toaster",files:["css/plugins/steps/jquery.steps.css","js/plugins/toastr/toastr.min.js","css/plugins/toastr/toastr.min.css"]}])}}}).state("dashboard.profile.step_one",{url:"/step_one",templateUrl:"views/dashboard/profile/wizard/step_one.html",controller:ProfileCtrl}).state("dashboard.profile.step_two",{url:"/step_two",templateUrl:"views/dashboard/profile/wizard/step_two.html",controller:ProfileCtrl}).state("dashboard.profile.step_three",{url:"/step_three",templateUrl:"views/dashboard/profile/wizard/step_three.html",controller:ProfileCtrl}).state("login",{url:"/login",templateUrl:"views/login/login.html",data:{pageTitle:"Login",specialClass:"gray-bg"},controller:InitCtrl}).state("admin",{url:"/admin/:id",templateUrl:"views/admin/admin.html",data:{pageTitle:"Admin",specialClass:"gray-bg"},controller:AdminCtrl}).state("admin-board",{url:"/admin-board",templateUrl:"views/admin/admin-board.html",data:{pageTitle:"Admin",specialClass:"gray-bg"},controller:AdminBoardCtrl}).state("register",{url:"/register",templateUrl:"views/register/register.html",data:{pageTitle:"Register",specialClass:"gray-bg"}})}function pageTitle($rootScope,$timeout,$localStorage){return{link:function(scope,element){var listener=function(event,toState,toParams,fromState,fromParams){var title="INSPINIA | Responsive Admin Theme";toState.data&&toState.data.pageTitle&&(title="INSPINIA | "+toState.data.pageTitle),$timeout(function(){element.text(title)})};$rootScope.$on("$stateChangeStart",listener)}}}function sideNavigation($timeout){return{restrict:"A",link:function(scope,element){$timeout(function(){element.metisMenu()})}}}function iboxTools($timeout){return{restrict:"A",scope:!0,templateUrl:"views/common/ibox_tools.html",controller:function($scope,$element){$scope.showhide=function(){var ibox=$element.closest("div.ibox"),icon=$element.find("i:first"),content=ibox.find("div.ibox-content");content.slideToggle(200),icon.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"),ibox.toggleClass("").toggleClass("border-bottom"),$timeout(function(){ibox.resize(),ibox.find("[id^=map-]").resize()},50)},$scope.closebox=function(){var ibox=$element.closest("div.ibox");ibox.remove()}}}}function minimalizaSidebar($timeout){return{restrict:"A",template:'<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',controller:function($scope,$element){$scope.minimalize=function(){$("body").toggleClass("mini-navbar"),!$("body").hasClass("mini-navbar")||$("body").hasClass("body-small")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(400)},200)):$("body").hasClass("fixed-sidebar")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(400)},100)):$("#side-menu").removeAttr("style")}}}}function iboxToolsFullScreen($timeout){return{restrict:"A",scope:!0,templateUrl:"views/common/ibox_tools_full_screen.html",controller:function($scope,$element){$scope.showhide=function(){var ibox=$element.closest("div.ibox"),icon=$element.find("i:first"),content=ibox.find("div.ibox-content");content.slideToggle(200),icon.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"),ibox.toggleClass("").toggleClass("border-bottom"),$timeout(function(){ibox.resize(),ibox.find("[id^=map-]").resize()},50)},$scope.closebox=function(){var ibox=$element.closest("div.ibox");ibox.remove()},$scope.fullscreen=function(){var ibox=$element.closest("div.ibox"),button=$element.find("i.fa-expand");$("body").toggleClass("fullscreen-ibox-mode"),button.toggleClass("fa-expand").toggleClass("fa-compress"),ibox.toggleClass("fullscreen"),setTimeout(function(){$(window).trigger("resize")},100)}}}}function MainCtrl($scope){$scope.firstName="John",$scope.lastName="Doe"}function ProfileCtrl($scope,$localStorage){$scope.profile=$localStorage.profile,$scope.save=function(){$localStorage.profile=$scope.profile}}function AdminCtrl($scope,$localStorage,$stateParams,$state){console.log($state.params),$scope.profiles=$localStorage.profiles,angular.forEach($scope.profiles,function(value,key){value._id===$state.params.id&&($scope.profile=value)})}function AdminBoardCtrl($scope,$localStorage){$scope.date=new Date,$scope.profiles=$localStorage.profiles}function InitCtrl($localStorage,$http){$http.get("mockdata.json").then(function(res){$localStorage.profiles=res.data}),$localStorage.profile={_id:"56c4b205fb11e67a3beffde5",News:[{Titel:"Tipp des Monats",Beschreibung:"Tipp des Monats: Der Hut des Präsidenten. Laurain, Antoine. 20,- €  Weiterlesen: http://www.buecher-koenig-nk.de/shop/item/9783455650228",createDatum:"2016-03-28T10:03:19.395Z"}],Aktionen:[],Termine:[{Titel:'Klaus Brabänder liest aus seinem Buch "Für Eich"',Datum:"2016-04-13T22:00:00.000Z",createDatum:"2016-04-22T11:45:37.249Z"}],Name:"Bücher König",Strasse:"Bahnhofstr. 43",PLZ:66538,Ort:"Neunkirchen",Oeffnungszeiten:'"Mo - Fr 09:00 bis 18:30 Uhr Sa 10:00 bis 16:00 Uhr"',Telefon:"06821 12921",Email:"buecher.koenig@gmx.de",Homepage:"http://www.buecher-koenig-nk.de/",Ansprechperson:"Frau Anke Birk",schaufenster:["http://85.214.84.247/schaufenster/SF__BuecherKoenig.jpg"],IconUrl:"http://www.buecher-koenig-nk.de/sites/315830.umbreitshopsolution.de/files/buecher.koenig1.png",Beschreibung:'"Herzlich Willkommen bei Bücher König!\n\n""Geistige Unterernährung ist ein ernstes Leiden. Wir haben die richtige Medizin für Sie"" (aus Morleys ""Das Haus der vergessenen Bücher"")\n\nLassen Sie sich von unserer schönen Buchhandlung im Herzen Neunkirchens begeistern, unsere Leidenschaft sind Literatur und gute Bücher - das seit 30 Jahren.\n\nWir sind ein literarischer und musikalischer Treffpunkt und beraten Sie immer gerne! Wir freuen uns über Ihr jahrelanges Vertrauen, die anregenden Gespräche, sei es im Laden oder bei einer unserer Veranstaltungen. Es ist schön, einige von Ihnen schon so lange zu kennen und täglich neue Literaturinteressierte kennenzulernen!\n\n"',showQrCode:!1}}function wizardCtrl($scope,toaster){$scope.processForm=function(){alert("Wizard completed")}}$(document).ready(function(){function fix_height(){var heightWithoutNavbar=$("body > #wrapper").height()-61;$(".sidebard-panel").css("min-height",heightWithoutNavbar+"px");var navbarHeigh=$("nav.navbar-default").height(),wrapperHeigh=$("#page-wrapper").height();navbarHeigh>wrapperHeigh&&$("#page-wrapper").css("min-height",navbarHeigh+"px"),wrapperHeigh>navbarHeigh&&$("#page-wrapper").css("min-height",$(window).height()+"px"),$("body").hasClass("fixed-nav")&&(navbarHeigh>wrapperHeigh?$("#page-wrapper").css("min-height",navbarHeigh-60+"px"):$("#page-wrapper").css("min-height",$(window).height()-60+"px"))}$(window).bind("load resize scroll",function(){$("body").hasClass("body-small")||fix_height()}),$(window).scroll(function(){$(window).scrollTop()>0&&!$("body").hasClass("fixed-nav")?$("#right-sidebar").addClass("sidebar-top"):$("#right-sidebar").removeClass("sidebar-top")}),setTimeout(function(){fix_height()})}),$(function(){$(window).bind("load resize",function(){$(document).width()<769?$("body").addClass("body-small"):$("body").removeClass("body-small")})}),function(){angular.module("inspinia",["ui.router","ui.bootstrap","oc.lazyLoad","ngStorage"])}(),angular.module("inspinia").config(config).run(function($rootScope,$state){$rootScope.$state=$state}),angular.module("inspinia").directive("pageTitle",pageTitle).directive("sideNavigation",sideNavigation).directive("iboxTools",iboxTools).directive("minimalizaSidebar",minimalizaSidebar).directive("iboxToolsFullScreen",iboxToolsFullScreen),angular.module("inspinia").controller("InitCtrl",InitCtrl).controller("MainCtrl",MainCtrl).controller("wizardCtrl",wizardCtrl).controller("ProfileCtrl",ProfileCtrl).controller("AdminCtrl",AdminCtrl).controller("AdminBoardCtrl",AdminBoardCtrl)(function(root,factory){"use strict";"function"==typeof define&&define.amd?define(["angular"],factory):root.hasOwnProperty("angular")?factory(root.angular):"object"==typeof exports&&(module.exports=factory(require("angular")))}(this,function(angular){"use strict";function isStorageSupported($window,storageType){var supported;try{supported=$window[storageType]}catch(err){supported=!1}if(supported&&"localStorage"===storageType){var key="__"+Math.round(1e7*Math.random());try{localStorage.setItem(key,key),localStorage.removeItem(key)}catch(err){supported=!1}}return supported}function _storageProvider(storageType){var providerWebStorage=isStorageSupported(window,storageType);return function(){var storageKeyPrefix="ngStorage-";this.setKeyPrefix=function(prefix){if("string"!=typeof prefix)throw new TypeError("[ngStorage] - "+storageType+"Provider.setKeyPrefix() expects a String.");storageKeyPrefix=prefix};var serializer=angular.toJson,deserializer=angular.fromJson;this.setSerializer=function(s){if("function"!=typeof s)throw new TypeError("[ngStorage] - "+storageType+"Provider.setSerializer expects a function.");serializer=s},this.setDeserializer=function(d){if("function"!=typeof d)throw new TypeError("[ngStorage] - "+storageType+"Provider.setDeserializer expects a function.");deserializer=d},this.supported=function(){return!!providerWebStorage},this.get=function(key){return providerWebStorage&&deserializer(providerWebStorage.getItem(storageKeyPrefix+key))},this.set=function(key,value){return providerWebStorage&&providerWebStorage.setItem(storageKeyPrefix+key,serializer(value))},this.$get=["$rootScope","$window","$log","$timeout","$document",function($rootScope,$window,$log,$timeout,$document){var _last$storage,_debounce,prefixLength=storageKeyPrefix.length,isSupported=isStorageSupported($window,storageType),webStorage=isSupported||($log.warn("This browser does not support Web Storage!"),{setItem:angular.noop,getItem:angular.noop,removeItem:angular.noop}),$storage={$default:function(items){for(var k in items)angular.isDefined($storage[k])||($storage[k]=angular.copy(items[k]));return $storage.$sync(),$storage},$reset:function(items){for(var k in $storage)"$"===k[0]||delete $storage[k]&&webStorage.removeItem(storageKeyPrefix+k);return $storage.$default(items)},$sync:function(){for(var k,i=0,l=webStorage.length;l>i;i++)(k=webStorage.key(i))&&storageKeyPrefix===k.slice(0,prefixLength)&&($storage[k.slice(prefixLength)]=deserializer(webStorage.getItem(k)))},$apply:function(){var temp$storage;if(_debounce=null,!angular.equals($storage,_last$storage)){temp$storage=angular.copy(_last$storage),angular.forEach($storage,function(v,k){angular.isDefined(v)&&"$"!==k[0]&&(webStorage.setItem(storageKeyPrefix+k,serializer(v)),delete temp$storage[k])});for(var k in temp$storage)webStorage.removeItem(storageKeyPrefix+k);_last$storage=angular.copy($storage)}},$supported:function(){return!!isSupported}};return $storage.$sync(),_last$storage=angular.copy($storage),$rootScope.$watch(function(){_debounce||(_debounce=$timeout($storage.$apply,100,!1))}),$window.addEventListener&&$window.addEventListener("storage",function(event){if(event.key){var doc=$document[0];doc.hasFocus&&doc.hasFocus()||storageKeyPrefix!==event.key.slice(0,prefixLength)||(event.newValue?$storage[event.key.slice(prefixLength)]=deserializer(event.newValue):delete $storage[event.key.slice(prefixLength)],_last$storage=angular.copy($storage),$rootScope.$apply())}}),$window.addEventListener&&$window.addEventListener("beforeunload",function(){$storage.$apply()}),$storage}]}}return angular=angular&&angular.module?angular:window.angular,angular.module("ngStorage",[]).provider("$localStorage",_storageProvider("localStorage")).provider("$sessionStorage",_storageProvider("sessionStorage"))}));