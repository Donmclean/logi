/**
 * Created by donmclean on 3/13/16.
 */
"use strict";
const logi = require('../index')({format: 'gulp'});

//BASIC LOG
logi.log('BASIC LOG');
logi.log('"BASIC LOG"');
logi.log('BASIC LOG', {value: 'testtt'});

//WARNING LOG
logi.warning('WARNING LOG');
logi.warning('"WARNING LOG"');
logi.warning('WARNING LOG', {value: 'testtt'});

//ERROR LOG
logi.error('ERROR LOG');
logi.error('"ERROR LOG"');
logi.error('ERROR LOG', ['testtt',{value: 'testtt'}]);

//SUCCESS LOG
logi.success('SUCCESS LOG');
logi.success('"SUCCESS LOG"');
logi.success('SUCCESS LOG', ['testtt', {value: 'testtt'}]);

//INFO LOG
logi.info('INFO LOG');
logi.info('"INFO LOG"');
logi.info('INFO LOG', [3,3,3], {});

logi.mixed([{}]);
logi.mixed([]);
logi.mixed(['value']);
logi.mixed();
logi.mixed('test string');
logi.mixed('"test string"');

logi.mixed([{value: 'this "is" a testlll'}]);
logi.mixed([{value: "this 'is' a testccc"}]);
logi.mixed([{value: "this 'is' a testccc"},{value: "this 'is' a testccc"}]);

logi.mixed([{value: "this 'is' a\n testccc"}]);
logi.mixed([{value: "this 'is' a\t testccc"}]);
logi.mixed([{value: "this 'is' a\v testccc"}]);
logi.mixed([{value: 'this "is" a \ testccc'}]);
logi.mixed([{value: 'this "is" a \\ testccc'}]);
logi.mixed([{value: 'this "is" a \\\ testccc'}]);
logi.mixed([{value: 'this "is" a \\\\ testccc'}]);

logi.mixed([{color: 'red', bgColor: 'bgGreen',modifier: []}]);
logi.mixed([{color: 'red', bgColor: 'bgGreen',modifier: ['underline']}]);
logi.mixed([{color: 'red', bgColor: 'bgGreen'}]);
logi.mixed([{color: 'red'}]);

logi.mixed([{color: 'red', bgColor: 'bgGreen', modifier: ['underline'], value: "this 'is' a testrrr"}]);
logi.mixed([{color: 'red', bgColor: 'bgGreen', modifier: 'underline', value: "this 'is' a testrrr"}]);
logi.mixed([{color: 'red', bgColor: 'bgGreen', modifier: {}, value: "this 'is' a testrrr"}]);

logi.mixed([{color: 'red', bgColor: ['bgGreen'], modifier: ['underline'], value: "this 'is' a testrrr"}]);
logi.mixed([{color: 'red', bgColor: {}, modifier: ['underline'], value: "this 'is' a testrrr"}]);

logi.mixed([{color: ['red'], bgColor: ['bgGreen'], modifier: ['underline'], value: "this 'is' a testrrr"}]);
logi.mixed([{color: {}, bgColor: ['bgGreen'], modifier: ['underline'], value: "this 'is' a testxxx"}]);
logi.mixed([{color: [], bgColor: ['bgGreen'], modifier: ['underline'], value: "this 'is' a testxxx"}]);

logi.mixed([{color: 'black', bgColor: 'bgRed', modifier: ['bold','underline'], value: 'this is "a" aaaaaaa'}]);
logi.mixed([{color: 'black', bgColor: 'bgRed', modifier: ['bold',[]], value: 'this is "a" aaaaaaa'}]);
logi.mixed([{color: 'black', bgColor: 'bgRed', modifier: ['bold',{}], value: 'this is "a" aaaaaaa'}]);

logi.mixed([{color: 'red', bgColor: 'bgBlack',modifier: 'underline', value: "this 'is' a testccc"},
    {color: 'blue', bgColor: 'bgBlack', modifier: ['bold','underline'], value: 'this is "a" aaaaaaa'}]);

logi.mixed([{color: 'red', bgColor: 'bgBlack',modifier: ['underline'], value: "this 'is' a testccc"},
    {color: 'blue', bgColor: 'bgBlack', modifier: ['bold','underline'], value: 'this is "a" aaaaaaa'}]);

logi.mixed([{color: 'red', bgColor: 'bgBlack',modifier: ['underline'], value: "this 'is' a testccc"},
    {color: 'blue', bgColor: 'bgBlack', modifier: ['bold','underline']}]);
logi.mixed([{value: "Collecting task...:"}]);
logi.mixed([{value: "Collecting task 1"},{value: "Collecting task 2"},{value: "Collecting task 3"},{value: "Collecting task 4"}]);
logi.mixed([{value: "Collecting task:"},
    {color: 'yellow', modifier: ['strikethrough'], value: 'mediaaaa'},
    {color: 'yellow', modifier: ['strikethrough'], value: 'medixxxxaaaa'},
    {value: "Collecting task:"}]);

logi.mixed([{value: "Collecting task...:"}, []]);
logi.mixed([{value: "Collecting task...:"}, {value: {}}]);
