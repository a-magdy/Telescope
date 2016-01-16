//=======================================================================================

// Adding a callback to onCreateUser to send a verification mail, after the a user has been created.

function sendVerificationEmail (user) {

  //user.profile = {};

  // we wait for Meteor to create the user before sending an email
  Meteor.setTimeout(function() {
    Accounts.sendVerificationEmail(user._id, user.emails[0].address);
  }, 2 * 1000);

  return user;
}

Telescope.callbacks.add("onCreateUser", sendVerificationEmail);

//========================================================================================

// Adding a method to "Users" to check if a user is verified or not.

Users.is.verified = function (userOrUserId){
  try{
    var user = Users.getUser(userOrUserId);
    return Users.is.admin(user) || (user.emails && user.emails[0] && user.emails[0].verified);
  }catch(e){
    return false;
  }
};

Users.is.verifiedById = Users.is.verifed;
