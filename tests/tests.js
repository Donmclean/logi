/**
 * Created by donmclean on 3/13/16.
 */
"use strict";
const logi = require('../index');

//BASIC LOG
logi.log('BASIC LOG');

//WARNING LOG
logi.warning('WARNING LOG');

//ERROR LOG
logi.error('ERROR LOG');

//INFO LOG
logi.info('INFO LOG');

// logi.mixed([{color: 'red', bgColor: 'bgGreen',modifier: ['underline'], value: 'this is a testccc'}]);

logi.mixed([{color: 'red', bgColor: 'bgGreen',modifier: ['underline'], value: 'this is a testccc'},
    {color: 'black', bgColor: 'bgRed', modifier: ['bold','underline'], value: 'this is a aaaaaaa'}]);