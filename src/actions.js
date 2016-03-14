/**
 * Created by donmclean on 3/13/16.
 */
module.exports = () => {
    "use strict";
    const
        actions = {},
        config = require('./config')(),
        base = require('./base')();

    actions.log = (str) => {
        console.log(base.getDateTime(), str);

    };

    actions.warning = (str) => {
        console.log(base.getDateTime(), base.makeYellow(str));

    };

    actions.error = (str) => {
        console.log(base.getDateTime(), base.makeRed(str));

    };


    actions.info = (str) => {
        console.log(base.getDateTime(), base.makeBlue(str));

    };

    return actions;
};