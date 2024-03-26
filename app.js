console.log(__dirname);
console.log(__filename);

//user defined global var
global.var1="aanya";
console.log(var1);

const say=require('./hello.js');
say('aanya');
say('riya');

const modu=require('./exportsMultiple.js');
console.log(modu.str);
modu.myFunc1();
modu.myFunc2();