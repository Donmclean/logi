# LOGI
Module for logging in your node environment.

[![Build Status](https://travis-ci.org/Donmclean/logi.svg?branch=master)](https://travis-ci.org/Donmclean/logi)

# How To Use

###### Install it

`npm install --save-dev https://github.com/Donmclean/logi`

###### Require it

`const logi = require('logi');`

###### API

**Essential logging**

```
//BASIC LOG
logi.log('BASIC LOG');`

//WARNING LOG
logi.warning('WARNING LOG');

//ERROR LOG
logi.error('ERROR LOG');

//SUCCESS LOG
logi.success('SUCCESS LOG');

//INFO LOG
logi.info('INFO LOG');

```

**Customized Logging**

`logi.mixed()` utilizes the main features of [chalk js](https://github.com/chalk/chalk) in an attempt to simplify the logging experience.


**Example 1**

pass in an array of objects in this format

```
options = [{
    color: 'black',
    bgColor: 'bgWhite',
    modifier: ['strikethrough'],
    value: "this is a test 1"
},
{
    color: 'black',
    bgColor: 'bgWhite',
    modifier: ['italic'],
    value: "this is a test 2"
}];

logi.mixed(options);
```
**result:** 

~~this is a test 1~~ _this is a test 2_


**Example 2**

**value** is the only _required_ parameter in the options object

```
options = [{value: "basic log"}]
logi.mixed(options);
```
**result:** 

basic log

```
options = [{value: "basic log"},{value: "multiple values on same line"}]
logi.mixed(options);
```
**result:** 

basic log multiple values on same line
