/**
 * Model for a User to be stored in the database.
 */

//Requires.
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * A schema for a User that takes:
 * @param githubid {String} the githubid
 * @param username {String} the username
 * @param profileUrl {String} a link to the github profile
 * @param avatar {String} a link to the avatar
 * @param preferedRep {String} an url to the repo to be watched
 * @param accessToken {String} the token returned from github
 */
let userSchema = new Schema({
    githubid: {type: String, required: [true, 'githubid needed'], unique: true},
    username: {type: String, required: [true, 'username needed']},
    profileUrl: {type: String},
    avatar: {type: String},
    preferedRep: {type: Object},
    accessToken: {type: String}
});

/**
 * Model the user.
 */
let User = mongoose.model('User', userSchema);

//Exports.
module.exports = User;