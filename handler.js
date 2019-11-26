'use strict';

const aws = require('aws-sdk');
const s3 = new aws.S3();

exports.upload = (event,context,callback) => {

  callback(null,JSON.stringify({
    message: "hello"
  }))

  return false;

  console.log = console.log.bind(null,'[LOG]');
  console.info = console.info.bind(null,'[INFO]');
  console.warn = console.warn.bind(null,'[WARN]');
  console.error = console.error.bind(null,'[ERROR]');

  var response = {};

  console.log(event);

  if(event.isBase64Encoded === true){

    console.log("is encoded");
    var decode = Buffer.from(event.body,"base64");
    var params = {
      Bucket: 'from-api-gateway',
      Key: 'ramen.jpg',
      ContentType: 'image/jpeg',
      Body: decode
    };

    s3.putObject(params,function(err,data){
      if(err){
        console.error(err);
        console.error('image uploaded failed');

        response.statusCode = 400;
        response.body = JSON.stringify({
          message: 'fail.'
        });
        callback(null,response);
      } else {
        console.log('image upload success');
        response.statusCode = 200;
        response.body = JSON.stringify({
          message: 'image has been uploaded to S3'
        })

        callback(null,response)
        
      }
    }) 
  } else {

    console.log("not encoded");
    response.statusCode = 400;
    response.body = JSON.stringify({
      message: 'fail.'
    });
    callback(null,response);
  }
}