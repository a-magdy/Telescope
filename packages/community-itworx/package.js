Package.describe({
  summary: 'ITWorx Community Customization',
  version: '0.1.0',
  name: 'telescope-community-itworx'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use("telescope:core");

  // ---------------------------------- 2. Files to include ----------------------------------

  // server

  api.addFiles([
    'lib/server/accounts-config.js',
    'lib/server/accounts-verify.js'
  ], ['server']);

});
