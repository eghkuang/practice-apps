const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary').then(() => {
  console.log('DB Connected')
}).catch(() => {
  console.log('DB not connected!!')
});

//creating default connection
var db = mongoose.connection
//bind connection to error event
db.on('error', console.error.bind(console, "mongo connection error!!"));


// 2. Set up any schema and models needed by the app

var Schema = mongoose.Schema;
const createSchema = new Schema({
  word: { type: String, unique: true },
  def: { type: String },
})

const Model = mongoose.model('Model', createSchema);

let save = (instance) => {
  let newInstance = new Model([
    console.log('do i work??', instance)
    // {word: 'howdy', def: 'fun hello'},
    // {word: 'nihaody', def: 'chinese howdy'},
    // {word: 'hello', def: 'boring howdy'},
    // word: instance.name,
    // def: instance.def
  ]);

  newInstance.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('instance save', result);
    }
  })
}

const model = {
  get: function() {

  },

  post: function() {
    console.log('model post');
  }
};

module.exports = model;


// 3. Export the models

// module.exports = Model;


// 4. Import the models into any modules that need them


