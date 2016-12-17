/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/answers              ->  index
 * POST    /api/answers              ->  create
 * GET     /api/answers/:id          ->  show
 * PUT     /api/answers/:id          ->  update
 * DELETE  /api/answers/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Answer = require('./answer.model');
var Question = require('../question/question.model');
var User = require('../user/user.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

function saveUpdates(updates) {
  return function (entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(function (updated) {
        return updated;
      });
  };
}

exports.verify = function(req, res) {
  User.findById(req.user._id, function (err, user) {
    Question.findById(req.params.id, function (err, q) {
      q.answer = q.answer.toLowerCase();
      req.body.answer = req.body.answer.toLowerCase();
      var answers = q.answer.split(',');
      console.log(answers);
      // if(q.answer.toLowerCase()==req.body.answer.toLowerCase()) {
      if(!user.disqualified && answers.indexOf(req.body.answer) >= 0) {
        if(user.solved.indexOf(req.params.id)==-1) {
          var updated = _.assign(user, {solved: user.solved.concat(req.params.id), numSolved: user.numSolved+1, numSolved1: user.numSolved1+1});
          updated.lastSolvedAt = Date.now();
          updated.lastSolvedAt1 = Date.now();
          updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return;
          });
          console.log(updated);
          //saveUpdates(user);
          //var updated=_.extend(user, {solved: temp});
          res.send(200);
        }
        else {
          res.send(201);
        }
      }
      else {
        Question.update({_id: req.params.id },
         {$push: { 'wrongAttempts' : req.body.answer }},{upsert:true}, function(err, data) { 
            res.send(202);
         });
        
      }
    });
  });
};

exports.verify2 = function(req, res) {
  User.findById(req.user._id, function (err, user) {
    Question.findById(req.params.id, function (err, q) {
      q.answer = q.answer.toLowerCase();
      req.body.answer = req.body.answer.toLowerCase();
      var answers = q.answer.split(',');
      console.log(answers);
      // if(q.answer.toLowerCase()==req.body.answer.toLowerCase()) {
      if(!user.disqualified && answers.indexOf(req.body.answer) >= 0) {
        if(user.solved.indexOf(req.params.id)==-1) {
          var updated = _.assign(user, {solved2: user.solved2.concat(req.params.id), numSolved: user.numSolved+1, numSolved2: user.numSolved2+1});
          updated.lastSolvedAt = Date.now();
          updated.lastSolvedAt2 = Date.now();
          updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return;
          });
          console.log(updated);
          //saveUpdates(user);
          //var updated=_.extend(user, {solved: temp});
          res.send(200);
        }
        else {
          res.send(201);
        }
      }
      else {
        res.send(202);
      }
    });
  });
};

exports.verify3 = function(req, res) {
  User.findById(req.user._id, function (err, user) {
    Question.findById(req.params.id, function (err, q) {
      q.answer = q.answer.toLowerCase();
      req.body.answer = req.body.answer.toLowerCase();
      var answers = q.answer.split(',');
      console.log(answers);
      // if(q.answer.toLowerCase()==req.body.answer.toLowerCase()) {
      if(!user.disqualified && answers.indexOf(req.body.answer) >= 0) {
        if(user.solved.indexOf(req.params.id)==-1) {
          var updated = _.assign(user, {solved3: user.solved3.concat(req.params.id), numSolved: user.numSolved+1, numSolved3: user.numSolved3+1});
          updated.lastSolvedAt = Date.now();
          updated.lastSolvedAt3 = Date.now();
          updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return;
          });
          console.log(updated);
          //saveUpdates(user);
          //var updated=_.extend(user, {solved: temp});
          res.send(200);
        }
        else {
          res.send(201);
        }
      }
      else {
        res.send(202);
      }
    });
  });
};
