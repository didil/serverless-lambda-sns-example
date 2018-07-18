const request = require('supertest');
const expect = require('chai').expect;
const getSlsOfflinePort = require('../support/getSlsOfflinePort');

describe('postSnsPublish', function postSnsPublishTest() {

  it('ok', function it(done) {
    global.global.slsOfflineProcess.stdout.on('data', (data) => {
      if (data.includes("Received MESSAGE: {\"msg\":\"stub message\"}")) {
        done();
      }
    });

    request(`http://localhost:${getSlsOfflinePort()}`)
      .post(`/snsPublish`)
      .send({msg: "stub message"})
      .expect(200)
      .end(function (error, result) {
        if (error) {
          return done(error);
        }
      });
  });

});