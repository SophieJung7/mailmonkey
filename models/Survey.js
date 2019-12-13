const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  // This will be an array of list of strings!
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  //   Underscore meaning a reference field by convention.
  //   You can name anything actually!
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
