const AWS = require("aws-sdk"); // must be npm installed to use

const jsonResponse = require("../lib/jsonResponse");

module.exports.handler = async (event, context) => {
  let snsOpts = {
    region: "us-east-1",
  };

  if (process.env.IS_OFFLINE) {
    snsOpts.endpoint = "http://127.0.0.1:4002";
  }

  let sns = new AWS.SNS(snsOpts);

  let messageData = {
    Message: event.body,
    TopicArn: process.env.mySnsTopicArn,
  };

  console.log("PUBLISHING MESSAGE TO SNS:", messageData);

  try {
    await sns.publish(messageData).promise();
    console.log("PUBLISHED MESSAGE TO SNS:", messageData);
    return jsonResponse.ok({});
  }
  catch (err) {
    console.log(err);
    return jsonResponse.error(err);
  }

};