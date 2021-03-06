/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var nodemailer = require('nodemailer');


// // Get list of things
exports.sendEmail = function(req, res) {
  console.log('hit!');
  sendEmail(req.query.emailAddress);
  return res.send(200);
};


exports.received = function(req, res) {
  console.log('your email was received!');
  sendReceived();
  return res.sendfile(__dirname+'/yeoman.png');
};


function sendReceived() {
    // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'dtown69meat@gmail.com',
          pass: 'mysosickpass'
      }
  });

  // NB! No need to recreate the transporter object. You can use
  // the same transporter object for all e-mails

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'Devon <devonstownsend@gmail.com>', // sender address
      to: 'devonstownsend@gmail.com',  
      subject: 'Kyle finally opened your email', // Subject line
      text: 'What a bad friend, right?' // plaintext body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
      }else{
          console.log('Message sent: ' + info.response);
      }
  });

};



function sendEmail(email) {
    // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'dtown69meat@gmail.com',
          pass: 'mysosickpass'
      }
  });

  // NB! No need to recreate the transporter object. You can use
  // the same transporter object for all e-mails

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'Devon <devonstownsend@gmail.com>', // sender address
      to: email,  // list of receivers
      subject: 'Your idea', // Subject line
      text: 'Hey, give me a call when you can.', // plaintext body
      html: 'Hey,<br><br>I will get notified when you open this email..  <br><br>Best,<br>Devon Townsend<br>'+
            '<br><img src="http://ec2-52-11-35-195.us-west-2.compute.amazonaws.com:9000/api/photos/gotcha"></img>'
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
      }else{
          console.log('Message sent: ' + info.response);
      }
  });

};



// // Get list of things
// exports.index = function(req, res) {
//   Thing.find(function (err, things) {
//     if(err) { return handleError(res, err); }
//     return res.json(200, things);
//   });
// };

// // Get a single thing
// exports.show = function(req, res) {
//   Thing.findById(req.params.id, function (err, thing) {
//     if(err) { return handleError(res, err); }
//     if(!thing) { return res.send(404); }
//     return res.json(thing);
//   });
// };

// // Creates a new thing in the DB.
// exports.create = function(req, res) {
//   Thing.create(req.body, function(err, thing) {
//     if(err) { return handleError(res, err); }
//     return res.json(201, thing);
//   });
// };

// // Updates an existing thing in the DB.
// exports.update = function(req, res) {
//   if(req.body._id) { delete req.body._id; }
//   Thing.findById(req.params.id, function (err, thing) {
//     if (err) { return handleError(res, err); }
//     if(!thing) { return res.send(404); }
//     var updated = _.merge(thing, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.json(200, thing);
//     });
//   });
// };

// // Deletes a thing from the DB.
// exports.destroy = function(req, res) {
//   Thing.findById(req.params.id, function (err, thing) {
//     if(err) { return handleError(res, err); }
//     if(!thing) { return res.send(404); }
//     thing.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.send(204);
//     });
//   });
// };


function handleError(res, err) {
  return res.send(500, err);
}
