# LOGI
Module for logging in your node environment.

[![Build Status](https://travis-ci.org/Donmclean/logi.svg?branch=master)](https://travis-ci.org/Donmclean/logi)

# How To Use

###### Require it

`const logi = require('node_modules/logi/index');`

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

`logi.mixed()` utilizes the main features of [chalk js](https://github.com/chalk/chalk) in an attempt to simple the logging experience.


**Examples**
pass in an arr of objects in this format

```
options = [{
    color: 'black',
    bgColor: 'bgWhite',
    modifier: ['strikethrough'],
    value: "this 'is' a testccc"
}]

logi.mixed(options);
```
result: ~~this is a~~

