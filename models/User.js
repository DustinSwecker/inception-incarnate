const { Schema, model } = require('mongoose');
import { isEmail } from 'validator;'
const Thought = require('./Thought');

//User model schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, 'Username is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email required'],
      unique: true,
      validate: {
        //solution borrowed from https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax easier than match: I think
        validator: isEmail,
        message: 'Invalid email'
      },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'thought',
        },
      ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  },
  {
    //include virtuals
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets the number of friends a user has
userSchema
  .virtual('friendCount')
  
  .get(function () {
    return this.friends.length;
  })

// Initialize the model and export
const User = model('user', userSchema);

module.exports = User;
