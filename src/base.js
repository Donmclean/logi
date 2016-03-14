/**
 * Created by donmclean on 3/13/16.
 */
module.exports = () => {
    "use strict";
    const
        base = {},
        config = require('./config')();

    base.getDateTime = () => {

        let date = Date.now();

        date = config.moment(date).format('MM/DD/YY ~ HH:mm:ss');

        return `[${config.chalk.gray(date)}]`;
    };

    base.makeYellow = (str) => {

        return config.chalk.yellow(str);
    };

    base.makeRed = (str) => {

        return config.chalk.red(str);
    };

    base.makeBlue = (str) => {

        return config.chalk.blue(str);
    };

    return base;
};