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

    actions.success = (str) => {

        console.log(base.getDateTime(), base.makeGreen(str));

    };


    actions.info = (str) => {

        console.log(base.getDateTime(), base.makeBlue(str));

    };

    //eg: [{color: 'red', bgColor: 'bgBlack', modifier: ['bold'], value: 'this is a test'}]
    actions.mixed = (arr) => {
        let
            mixedStr = [],
            actionList = [],
            reset = false,
            noOptions = false;

        //ERROR CHECKING
        if(!config._.isArray(arr) || !arr) {
            actions.error(`${arr} is not a valid argument > requires Array of Object/Objects *[{}]`);
            return false;
        } else if(config._.isEmpty(arr[0])) {
            actions.error(`${arr} is empty *[{}]`);
            return false;
        } else if(!('value' in arr[0])) {
            actions.error(`${arr} object needs a valid key of 'value'.`);
            return false;
        }

        arr = config._
            .chain(arr)
            .filter(obj => {
                return config._.isPlainObject(obj) && config._.has(obj, 'value');
            })
            .value();

        config._.forEach(arr, obj => {
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
                        actionList['modifier'] = [];

                        if(!config._.isArray(obj.modifier)) {
                            actionList['modifier'] = actions.defaultModifier;
                            actions.error(`ERROR: LOGI > ${obj.modifier} should be an array []`);
                            reset = true;
                            return false;
                        }

                        config._.forEach(actions.modifiers, modifier => {
                            config._.forEach(obj.modifier, modifier2 => {
                                if(modifier === modifier2) {
                                    actionList['modifier'].push(modifier2);

                                    error = false;
                                    return false;
                                }
                            });
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

            if(!!reset) {
                actionList['modifier'] = actions.defaultModifier;
            }

            let options = config._
                .chain(config._.keys(obj))
                .filter(key => {
                    return key !== 'value';
                })
                .map(key => {
                    return `${actionList[key]}`;
                })
                .value();

            if(config._.isEmpty(options)) {

                noOptions = true;
                mixedStr.push(obj.value);
                return true;
            }

            let str = 'config.chalk.';

            config._.forEach(options, (task, i) => {
                task = task.replace(',','.');
                if(i === options.length -1) {
                    str += task;
                } else {
                    str += task + '.';
                }
            });

            str += `('${obj.value}')`;
            
            actionList = [];
            reset = false;

            mixedStr.push(str);
        });
        
        let finalStr = '';

        if(!noOptions) {
            config._.forEach(mixedStr, (str, i) => {

                if(str.includes("('")) {
                    str = config._.replace(str, "('",'("');
                    str = config._.replace(str, "')",'")');
                }

                try {
                    eval(str);
                }
                catch (err) {
                    if(!!err) {
                        str = config._.replace(str, '("',"('");
                        str = config._.replace(str, '")',"')");
                    }
                }

                if(i === mixedStr.length -1) {
                    finalStr += str;
                } else {
                    finalStr += str + " +' '+ ";
                }
            });
        } else {
            finalStr = `"${mixedStr[0]}"`;

            try {
                eval(finalStr);
            }
            catch (err) {
                if(!!err) {
                    finalStr = `'${mixedStr[0]}'`;
                }
            }
        }

        console.log(base.getDateTime(), `${eval(finalStr)}`);
    };

    return actions;
};