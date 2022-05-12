const model = require('./db.js');

const controller = {
  get: function() {

  },

  post: function(req, res) {
    console.log('controller post');

    model.post();
  }
};

module.exports = controller;