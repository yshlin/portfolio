/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
;(function(Modernizr) {
    'use strict';

    Modernizr.load([
        {
            test: window.matchMedia,
            nope: '/media/js/libs/matchMedia.js'
        },
        COMMON_JS_FILES
    ]);
})(window.Modernizr);

;(function($, Mozilla) {

    // initialize fx family nav
    var fxNavConfig = {
        primaryId: 'os', // id of primary nav item to highlight (REQUIRED)
        subId: 'partners' // id of sub nav item to highlight (OPTIONAL)
    };

    Mozilla.FxFamilyNav.init(fxNavConfig);


})(window.jQuery, window.Mozilla);
