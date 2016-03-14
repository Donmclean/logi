'use strict';

/**
 * Created by donmclean on 3/13/16.
 */
module.exports = function () {
    "use strict";

    var config = {};

    config.chalk = require('chalk');
    config._ = require('lodash');
    config.moment = require('moment');

    return config;
};
/**
 * Created by donmclean on 3/13/16.
 */
module.exports = function () {
    "use strict";

    var base = {},
        config = require('./config')();

    base.getDateTime = function () {

        var date = Date.now();

        date = config.moment(date).format('MM/DD/YY ~ HH:mm:s');

        return '[' + config.chalk.gray(date) + ']';
    };

    base.makeYellow = function (str) {

        return config.chalk.yellow(str);
    };

    base.makeRed = function (str) {

        return config.chalk.red(str);
    };

    base.makeBlue = function (str) {

        return config.chalk.blue(str);
    };

    return base;
};
/**
 * Created by donmclean on 3/13/16.
 */
module.exports = function () {
    "use strict";

    var actions = {},
        config = require('./config')(),
        base = require('./base')();

    actions.log = function (str) {
        console.log(base.getDateTime(), str);
    };

    actions.warning = function (str) {
        console.log(base.getDateTime(), base.makeYellow(str));
    };

    actions.error = function (str) {
        console.log(base.getDateTime(), base.makeRed(str));
    };

    actions.info = function (str) {
        console.log(base.getDateTime(), base.makeBlue(str));
    };

    return actions;
};
/**
 * Created by donmclean on 3/13/16.
 */

module.exports = require('./actions')();