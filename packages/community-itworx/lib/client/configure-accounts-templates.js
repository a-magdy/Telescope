// Configure AccountsTemplates.
AccountsTemplates.configure({
  enablePasswordChange: false,
  showForgotPasswordLink: false,
  hideSignUpLink: true,
  overrideLoginErrors: false,
  forbidClientAccountCreation: true
});

// Remove AccountsTemplates fields and add our own.
AccountsTemplates.removeField('email');
AccountsTemplates.removeField('username');
AccountsTemplates.removeField('password');

AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    required: true,
    displayName: 'username (without @itworx.com)',
    placeholder: 'username without @itworx.com',
});

AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    required: true,
    // minLength: 8,
    // errStr: 'error.minChar'
});
