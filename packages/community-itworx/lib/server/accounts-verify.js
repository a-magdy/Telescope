Meteor.startup(function () {
  // // 1. Set up stmp
  // //   your_server would be something like 'smtp.gmail.com'
  // //   and your_port would be a number like 25
  //
  // process.env.MAIL_URL = 'smtp://' +
  //   encodeURIComponent(your_username) + ':' +
  //   encodeURIComponent(your_password) + '@' +
  //   encodeURIComponent(your_server) + ':' + your_port;

  // 2. Format the email
  //-- Set the from address
  Accounts.emailTemplates.from = 'Admin@ITWorx.com';

  //-- Application name
  Accounts.emailTemplates.siteName = 'ITWorx';

  //-- Subject line of the email.
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm Your Email Address for ITWorx';
  };

  //-- Email text
  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return 'Thank you for registering.  Please click on the following link to verify your email address: \r\n' + url;
  };

  // 3.  Send email when account is created
  Accounts.config({
    sendVerificationEmail: true
  });
});

function sendVerificationEmail (user) {

  //user.profile = {};

  // we wait for Meteor to create the user before sending an email
  Meteor.setTimeout(function() {
    Accounts.sendVerificationEmail(user._id, user.emails[0].address);
  }, 2 * 1000);

  return user;
}

Telescope.callbacks.add("onCreateUser", sendVerificationEmail);
