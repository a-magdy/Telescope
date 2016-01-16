var domain = "itworx";

var initLogin = function(event) {
  event.preventDefault();

  //var user = event.target.elements["at-field-username_and_email"].value;
  var user = event.target.elements["at-field-username"].value;

  var password = event.target.elements["at-field-password"].value;

  Meteor.loginWithLDAP(user, password, {
    dn: domain + '\\' + user,
    search: '(sAMAccountName=' + user + ')'
  }, function(err, result) {
    if (err && err.message) {
      // TODO if the error code is 128 [ldap is closed], then notify the user that he isn't connected to itworx network.
      console.log(err.message);
    }else{
      FlowRouter.go("postsDefault");
    }
  });
};

// Template.fullPageAtForm.events({
//   // 'submit at-pwd-form': function(e) {
//   //   initLogin(e);
//   // },
//   'submit form': function(e) {
//     initLogin(e);
//   },
//   // 'click #at-btn': function(e){
//   //     initLogin(e);
//   // }
// });

Template.atPwdForm.events({
  'submit #at-pwd-form': function(event) {

    event.preventDefault();

    initLogin(event);
  }
});

Template.atSigninLink.events({
  "click #at-signIn": function(event, t) {
    event.preventDefault();
    console.log('bla1');
    //AccountsTemplates.linkClick("signIn");
  },
});
