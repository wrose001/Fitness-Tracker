const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [{
    type: {
      type: String,
      required: "Please enter an exercise tyoe."
    },
    name: {
      type: String,
      required: "Please enter the name of the exercise."},
    duration: {
      type: Number,
      required: "Please enter a duration."
    },
    weight: {
      type: Number},
    distance: {
      type: Number},
    reps: {
      type: Number},
    sets: {
      type: Number}
  }]
});

// UserSchema.methods.setFullName = function() {
//   this.fullName = `${this.firstName} ${this.lastName}`;

//   return this.fullName;
// };

// UserSchema.methods.lastUpdatedDate = function() {
//   this.lastUpdated = Date.now();

//   return this.lastUpdated;
// };

const User = mongoose.model("Workout", UserSchema);

module.exports = User;
