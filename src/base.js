/**
 * Created by donmclean on 3/13/16.
 */
module.exports = () => {
    "use strict";
    const
        base = {},
        config = require('./config')();

    base.getDateTime = (format) => {

        let date = Date.now();

        switch (format) {
            case 'gulp': {
                date = config.moment(date).format('HH:mm:ss');
                break;
            }
            default: {
                date = config.moment(date).format('MM/DD/YY ~ HH:mm:ss');
            }
        }

        return `[${config.chalk.gray(date)}]`;
    };

    base.makeYellow = (str) => {

        return config.chalk.yellow(str);
    };

    base.makeRed = (str) => {

        return config.chalk.red(str);
    };

    base.makeGreen = (str) => {

        return config.chalk.green(str);
    };

    base.makeBlue = (str) => {

        return config.chalk.blue(str);
    };
    
    base.sanitizeString = (str) => {
        let backslashCaseEntered = false;
        
        // if(config._.includes(str, "\'") || config._.includes(str, '\"')) {
        //     console.log('slash found..');
        //    
        //    
        // }

        config._.forEach(str, (char, i) => {

            switch (char) {
                case '\n': {
                    str = str.replace(char, '\\n');
                    break;
                }
                case '\r': {
                    str = str.replace(char, '\\r');
                    break;
                }
                case '\b': {
                    str = str.replace(char, '\\b');
                    break;
                }
                case '\t': {
                    str = str.replace(char, '\\t');
                    break;
                }
                case '\v': {
                    str = str.replace(char, '\\v');
                    break;
                }
                case '\f': {
                    str = str.replace(char, '\\f');
                    break;
                }
                case '\"': {
                    str = str.replace(char, '\"');
                    str = str.replace(char, '\'');

                    break;
                }
                case '\\': {

                    str = str.replace(char, '\\\\\\\\');
                    break;
                }
            }

        });

        return str;
    };

    return base;
};