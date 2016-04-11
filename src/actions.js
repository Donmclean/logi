/**
 * Created by donmclean on 3/13/16.
 */
module.exports = () => {
    "use strict";
    const
        actions = {},
        config = require('./config')(),
        base = require('./base')();

    actions.defaultColor = 'white';

    actions.defaultBgColor = 'bgBlack';

    actions.defaultModifier = 'reset';

    actions.colors = [
        'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray'
    ];

    actions.bgColors = [
        'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite'
    ];

    actions.modifiers = [
        'reset', 'bold', 'dim', 'italic', 'underline', 'inverse', 'hidden', 'strikethrough'
    ];

    actions.requiredKeys = ['color', 'bgColor', 'modifier', 'value'];

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

    //eg: [{color: 'red', bgColor: 'bgBlack', modifier: 'bold', value: 'this is a test'}]
    actions.mixed = (arr) => {
        let actionList = [],
            reset = false;

        if(!config._.isArray(arr) || !arr) {
            actions.error(`${arr} is not a valid argument`);
            return false;
        }

        arr = config._
            .chain(arr)
            .filter(obj => {
                return config._.isPlainObject(obj) && config._.has(obj, 'value');
            })
            .value();

        console.log('arr',arr);

        config._.forEach(arr, obj => {
            console.log('config._.keys(obj)',config._.keys(obj));
            config._.forEach(config._.keys(obj), key => {
                switch(key) {
                    case 'color': {
                        let error = true;

                        config._.forEach(actions.colors, color => {
                            if(color === obj.color) {
                                actionList['color'] = color;
                                error = false;
                                return false;
                            }
                        });

                        if(!!error) {
                            actionList['color'] = actions.defaultColor;
                            actions.error(`ERROR: LOGI > ${obj.color} is not a valid value in [${actions.colors}]`);
                            reset = true;
                        }

                        break;
                    }
                    case 'bgColor': {
                        let error = true;

                        config._.forEach(actions.bgColors, bgColor => {
                            if(bgColor === obj.bgColor) {
                                actionList['bgColor'] = bgColor;

                                error = false;
                                return false;
                            }
                        });

                        if(!!error) {
                            actionList['bgColor'] = actions.defaultBgColor;
                            actions.error(`ERROR: LOGI > ${obj.bgColor} is not a valid value in [${actions.bgColors}]`);
                            reset = true;
                        }

                        break;
                    }
                    case 'modifier': {
                        let error = true;

                        config._.forEach(actions.modifiers, modifier => {
                            if(modifier === obj.modifier) {
                                actionList['modifier'] = modifier;
                                //actionList['modifier'] += [modifier];

                                error = false;
                                return false;
                            }
                        });

                        if(!!error) {
                            actionList['modifier'] = actions.defaultModifier;
                            actions.error(`ERROR: LOGI > ${obj.modifier} is not a valid value in [${actions.modifiers}]`);
                            reset = true;
                        }

                        break;
                    }
                    case 'value': {
                        actionList['value'] = obj.value;
                        break;
                    }
                    default: {
                        actions.error(`ERROR: LOGI > ${key} is not a valid key`);
                        throw `ERROR: LOGI > ${key} is not a valid key`;
                    }
                }
            });

            console.log('actionList',actionList);

            if(!!reset) {
                actionList['modifier'] = actions.defaultModifier;
            }

            let x = config._
                .chain(config._.keys(obj))
                .filter(key => {
                    return key !== 'value';
                })
                .map(key => {
                    return `${actionList[key]}`;
                })
                .value();
            switch (x.length) {
                case 1: {
                    console.log(config.chalk[`${x[0]}`](obj.value));
                    break;
                }
                case 2: {
                    console.log(config.chalk[`${x[0]}`][`${x[1]}`](obj.value));
                    break;
                }
                case 3: {
                    console.log(config.chalk[`${x[0]}`][`${x[1]}`][`${x[2]}`](obj.value));
                    break;
                }
            }
            
            actionList = [];
            reset = false;
        });

    };

    return actions;
};