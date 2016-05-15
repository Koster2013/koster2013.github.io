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

function InitCtrl($localStorage) {

    $localStorage.profile = {
        "_id": "56c4b205fb11e67a3beffde5",
        "Name": "Bücher König",
        "Strasse": "Bahnhofstr. 43",
        "PLZ": 66538,
        "Ort": "Neunkirchen",
        "Oeffnungszeiten": "\"Mo - Fr 09:00 bis 18:30 Uhr Sa 10:00 bis 16:00 Uhr\"",
        "Telefon": "06821 12921",
        "Email": "buecher.koenig@gmx.de",
        "Homepage": "http://www.buecher-koenig-nk.de/",
        "Ansprechperson": "Frau Anke Birk",
        "Fax": "06821 93153 29",
        "Impressum": "Jacopini Import GmbH\nGeschäftsführer: Enrico Jacopini\n\nAm Gneisenauflöz 1\nD-66538 Neunkirchen\n\nTel.: 06821-931530\nFax: 06821-93153-29\nE-Mail: shop@jacopini-weinhandel.de\nInternet: www.jacopini-weinhandel.de\n\nHRB 92210\nAmtsgericht Saarbrücken\nUSt-IdNr. DE 813 092 651\n\nEs gelten unsere Allgemeinen Geschäftsbedingungen.\nInhaltlich Verantwortlicher gemäß § 10 Absatz 3 MDStV: Enrico Jacopini, Geschäftsführer \n\nOnline-Streitbeilegungsplattform: http://ec.europa.eu/consumers/odr/\n\nExterne Links\nFür die Inhalte externer Seiten sind einzig deren Betreiber verantwortlich.\n\nKonzeption und Gestaltung\nultrabold Kommunikationsdesign GmbH, Mannheim www.ultrabold.com\nProgrammierung\nPrimaweb www.primaweb-online.de \n\nBildnachweis\nAuf unserer Internetseite verwenden wir Bilder von fotolia.de, deren Copyright bei den Fotografen und Fotolia liegt. Im einzelnen finden Sie bei uns Bilder folgender Fotografen:\nMarco Mayer - Fotolia.com, © Melpomene",
        "IconUrl": "http://www.buecher-koenig-nk.de/sites/315830.umbreitshopsolution.de/files/buecher.koenig1.png",
        "Beschreibung": "\"Herzlich Willkommen bei Bücher König!\n\n\"\"Geistige Unterernährung ist ein ernstes Leiden. Wir haben die richtige Medizin für Sie\"\" (aus Morleys \"\"Das Haus der vergessenen Bücher\"\")\n\nLassen Sie sich von unserer schönen Buchhandlung im Herzen Neunkirchens begeistern, unsere Leidenschaft sind Literatur und gute Bücher - das seit 30 Jahren.\n\nWir sind ein literarischer und musikalischer Treffpunkt und beraten Sie immer gerne! Wir freuen uns über Ihr jahrelanges Vertrauen, die anregenden Gespräche, sei es im Laden oder bei einer unserer Veranstaltungen. Es ist schön, einige von Ihnen schon so lange zu kennen und täglich neue Literaturinteressierte kennenzulernen!\n\n\"",
        "showQrCode": false
    };
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