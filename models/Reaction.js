const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: getLocalDate,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

function getLocalDate () {
  const val = this.get('createdAt', Date);
  return (val.getMonth() + 1) + "/" + val.getDate() + "/" + val.getFullYear();
}

module.exports = reactionSchema;
