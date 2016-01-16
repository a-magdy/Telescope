// //on the server
// Meteor.startup(function () {
//   Accounts.config({
//     forbidClientAccountCreation: true
//   });
// });

LDAP_DEFAULTS.url = 'ldap://frzndc-11.itworx.com';
LDAP_DEFAULTS.port = 389;
LDAP_DEFAULTS.base = 'OU=User,DC=itworx,DC=local';
LDAP_DEFAULTS.defaultDomain = 'itworx.com';