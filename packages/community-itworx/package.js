Package.describe({
  summary: 'ITWorx Community Customization',
  version: '0.1.0',
  name: 'telescope-community-itworx'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use("telescope:core");
  api.use("typ:accounts-ldap");

  // ---------------------------------- 2. Files to include ----------------------------------

  // server

  api.addFiles([
    'lib/server/on-create-user.js',
    'lib/server/ldap-configuration.js',
    //'lib/server/accounts-verify.js',
    //'lib/server/email-configuration.js',
    //'lib/server/registration-domain-restriction.js',
  ], ['server']);

  // client

  api.addFiles([
    'lib/client/ldap-login.js',
    'lib/client/remove-signup-button.js',
    'lib/client/configure-accounts-templates.js',
  ], ['client']);

});
