console.log('starting app');

setTimeout(() => {
    console.log('Inside callback');
},2000);

setTimeout(() => {
    console.log('callback with no delay');
},0);

console.log('Finishing up');
          


const request = require('request');

request({url:'https://www.google.com',
JSON: true
},(error,response,body) =>{

}); 