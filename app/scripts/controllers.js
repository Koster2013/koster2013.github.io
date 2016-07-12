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